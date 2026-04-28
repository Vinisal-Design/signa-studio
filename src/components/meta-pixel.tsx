// Meta Pixel · client-side install
// Loads fbevents.js + fires PageView. Lead events are dispatched from
// `lead-form.tsx` after successful submission with a deduplication
// `eventID` that matches the server-side Conversions API (CAPI) event
// dispatched from the worker. Match Meta dedup spec:
//   https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
//
// Loading strategy (Apr 2026):
//   The pixel is intentionally NOT in the critical path. fbevents.js is
//   ~96 KiB transferred and ~12 KiB of legacy polyfills (Array.from,
//   Array.prototype.includes/find/map, String.startsWith, etc.) that
//   nothing else on the page needs. Loading it eagerly turned it into the
//   single largest contributor to mobile JS work, dragging LCP to 4.1s.
//
//   Solution — race two triggers, fire whichever wins:
//     1. `requestIdleCallback` (or `setTimeout(2500)` fallback) — for users
//        who land and read; the pixel installs once the main thread is idle.
//     2. First user interaction (`pointerdown` / `keydown` / `scroll`,
//        passive + once) — for users who interact before idle fires; the
//        pixel installs immediately so the PageView still attributes the
//        session correctly.
//
//   Worst-case PageView delay is ~2.5s on a cold mobile cache. CAPI dedup
//   is unaffected: the server event for Lead conversions still fires from
//   the worker with the shared `event_id`, and Meta's matching window
//   accepts client events up to 7 days late.

"use client";

import { useEffect } from "react";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1662560511602198";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Force-install the pixel before the lazy idle/interaction triggers fire.
 * Used by surfaces that emit a high-intent event (form submit, CTA click)
 * and need `window.fbq` available synchronously. Safe to call multiple
 * times — `installPixel` is idempotent.
 */
export function ensurePixelLoaded() {
  if (!META_PIXEL_ID) return;
  installPixel(META_PIXEL_ID);
}

function installPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  if (window.fbq) return; // idempotent

  // Inline the standard fbevents loader as a string — Meta ships the same
  // self-evaluating IIFE everywhere; transcribing it as JS attracts type
  // narrowing issues (the `n` shim is reassigned mid-flight). A one-shot
  // <script> insertion sidesteps the typing problem and keeps semantics 1:1
  // with the canonical Meta snippet.
  const script = document.createElement("script");
  script.id = "meta-pixel-loader";
  script.text = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
}

export function MetaPixel() {
  useEffect(() => {
    if (!META_PIXEL_ID) return;
    if (typeof window === "undefined") return;
    if (window.fbq) return;

    let installed = false;
    const fire = () => {
      if (installed) return;
      installed = true;
      installPixel(META_PIXEL_ID);
      cleanup();
    };

    // Idle path — for users who don't interact in the first ~2.5s.
    type IdleWin = Window &
      typeof globalThis & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
    const w = window as IdleWin;
    let idleId = 0;
    let timeoutId = 0;
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(fire, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(fire, 2500);
    }

    // Interaction path — fire immediately on first input so PageView still
    // attributes a fast-clicker's session correctly.
    const opts = { passive: true, once: true } as const;
    window.addEventListener("pointerdown", fire, opts);
    window.addEventListener("keydown", fire, opts);
    window.addEventListener("scroll", fire, opts);
    window.addEventListener("touchstart", fire, opts);

    function cleanup() {
      if (idleId && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("pointerdown", fire);
      window.removeEventListener("keydown", fire);
      window.removeEventListener("scroll", fire);
      window.removeEventListener("touchstart", fire);
    }

    return cleanup;
  }, []);

  // <noscript> beacon — preserves PageView attribution for the ~1% of users
  // with JS disabled. Costs one cached 1×1 GIF; never blocks anything.
  if (!META_PIXEL_ID) return null;
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}

/**
 * Read facebook tracking cookies set by fbevents.js.
 *   _fbp — browser identifier (set on init, every visitor gets one)
 *   _fbc — click identifier (set when arriving from an ad with fbclid)
 *
 * Both are passed to the worker so CAPI events can match the original
 * pixel browser event for deduplication and attribution. SSR-safe: returns
 * empty when document is unavailable.
 *
 * Reference:
 *   https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc-and-fbp
 */
export function readFbCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === "undefined") return {};
  const out: { fbp?: string; fbc?: string } = {};
  const cookies = document.cookie.split(";").map((c) => c.trim());
  for (const c of cookies) {
    if (c.startsWith("_fbp=")) out.fbp = decodeURIComponent(c.slice(5));
    else if (c.startsWith("_fbc=")) out.fbc = decodeURIComponent(c.slice(5));
  }
  // If we have an fbclid in the URL but _fbc was not yet set by the pixel
  // (race on first paint), construct it ourselves per Meta spec:
  //   fb.<subdomain_index>.<creation_unix_ms>.<fbclid>
  if (!out.fbc && typeof window !== "undefined") {
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (fbclid) {
      out.fbc = `fb.1.${Date.now()}.${fbclid}`;
    }
  }
  return out;
}

/**
 * Cryptographically-strong UUID v4 with safe fallback. Used as the dedup
 * key (`event_id`) shared between the browser pixel and the server-side
 * CAPI event for the same form submission.
 */
export function eventUuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers — collision risk is negligible at our volume
  // and the worst case is one event not deduped (Meta would just count it
  // twice on the rare event_id reuse).
  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}
