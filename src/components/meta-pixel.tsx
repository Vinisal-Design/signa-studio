// Meta Pixel · client-side install
// Loads fbevents.js + fires PageView. Lead events are dispatched from
// `lead-form.tsx` after successful submission with a deduplication
// `eventID` that matches the server-side Conversions API (CAPI) event
// dispatched from the worker. Match Meta dedup spec:
//   https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
//
// Why a dedicated component:
//   - Keeps `layout.tsx` focused on metadata + structured data.
//   - Mirrors the pattern of `cookie-consent.tsx` (one client concern per file).
//   - Makes it trivial to gate behind future consent logic without surgery on layout.
//
// Pixel ID is read from NEXT_PUBLIC_META_PIXEL_ID at build time, with a
// production fallback to the registered SIGNA Studio pixel so a missing
// env var never blanks the campaign.

"use client";

import Script from "next/script";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1662560511602198";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function MetaPixel() {
  if (!META_PIXEL_ID) return null;
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        // Standard fbevents loader — verbatim per Meta docs. Init + PageView
        // fire here; conversion events (Lead, Purchase…) are emitted by the
        // surfaces that own them (e.g. lead-form.tsx).
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
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
    </>
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
