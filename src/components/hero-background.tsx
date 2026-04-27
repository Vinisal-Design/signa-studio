/**
 * HeroBackgroundV2 — CSS-only ambient (zero-runtime cost).
 * Layered radial gradients + slow conic beams + grain. Animations pause on
 * prefers-reduced-motion (handled in globals.css).
 */
export function HeroBackgroundV2() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 hero-bg-mesh" />
      <div className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 hero-bg-beams" />
      <div className="absolute inset-0 hero-bg-grain" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
