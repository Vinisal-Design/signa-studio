"use client";

import { useEffect } from "react";

/**
 * Lenis smooth-scroll — desktop only.
 * - Disabled on reduced-motion (LGPD-friendly accessibility).
 * - Disabled on coarse pointer (touch). iOS Safari momentum + Lenis virtual
 *   scroll fight each other and produce jitter; native is better on mobile.
 * - Lenis chunk is dynamically imported so mobile users never download it.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;
    let raf = 0;
    let cancelled = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      });
      const tick = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
