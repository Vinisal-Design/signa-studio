"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * useMatchMedia — SSR-safe, change-aware media query hook.
 * Server returns the `defaultValue` (avoids hydration mismatch); client
 * subscribes to MediaQueryList changes so device rotation / preference flips
 * (rare but real on iPad split-view, or when a user toggles reduced-motion in
 * system settings) re-render the consumer without a remount.
 */
function useMatchMedia(query: string, defaultValue = false): boolean {
  const subscribe = (cb: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", cb);
    return () => mql.removeEventListener("change", cb);
  };
  const getSnapshot = () =>
    typeof window === "undefined" ? defaultValue : window.matchMedia(query).matches;
  const getServerSnapshot = () => defaultValue;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * HeroBackgroundSilk — flowing canvas texture (DESKTOP ONLY).
 * Pixel-by-pixel rAF loop is ~60% CPU on mobile — never use on touch devices.
 * Kept for niche desktop creative direction; not the default in the LP.
 */
export function HeroBackgroundSilk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;
    const dim = 0.2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#040406");
      gradient.addColorStop(0.5, "#070709");
      gradient.addColorStop(1, "#020203");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;
          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);
          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );
          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);
          const mixFactor = Math.min(1, (x / width + y / height) / 2);
          const cr = 129 + (244 - 129) * mixFactor;
          const cg = 140 + (200 - 140) * mixFactor;
          const cb = 248 + (154 - 248) * mixFactor;
          const r = Math.floor(cr * intensity * dim);
          const g = Math.floor(cg * intensity * dim);
          const b = Math.floor(cb * intensity * dim);
          const a = 255;
          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = a;
            const right = index + 4;
            const below = index + width * 4;
            const diag = below + 4;
            if (right < data.length) {
              data[right] = r;
              data[right + 1] = g;
              data[right + 2] = b;
              data[right + 3] = a;
            }
            if (below < data.length) {
              data[below] = r;
              data[below + 1] = g;
              data[below + 2] = b;
              data[below + 3] = a;
            }
            if (diag < data.length) {
              data[diag] = r;
              data[diag + 1] = g;
              data[diag + 2] = b;
              data[diag + 3] = a;
            }
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);

      const overlayGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.4
      );
      overlayGradient.addColorStop(0, "rgba(0,0,0,0.20)");
      overlayGradient.addColorStop(0.55, "rgba(0,0,0,0.55)");
      overlayGradient.addColorStop(1, "rgba(0,0,0,0.9)");
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

/**
 * HeroBackgroundV2 — CSS-only ambient. Default in the LP.
 *
 * Server renders the full rich tree (beams + grain). The client adds a
 * `data-quiet` attribute when reduced-motion or coarse-pointer is detected;
 * CSS hides beams/grain via the attribute selector. No unmount, no hydration
 * mismatch — the DOM tree is stable across SSR and CSR, only an attribute
 * flips after mount.
 */
export function HeroBackgroundV2() {
  const reduce = useMatchMedia("(prefers-reduced-motion: reduce)");
  const coarse = useMatchMedia("(pointer: coarse)");
  const quiet = reduce || coarse;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      data-quiet={quiet ? "true" : undefined}
      aria-hidden="true"
    >
      <div className="absolute inset-0 hero-bg-mesh" />
      <div className="hero-bg-beams-layer absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 hero-bg-beams" />
      <div className="hero-bg-grain-layer absolute inset-0 hero-bg-grain" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
