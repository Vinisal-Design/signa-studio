"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const easeOutQuart = [0.25, 0, 0.1, 1] as const;

// Hoisted variants — module scope avoids recreating identical objects every
// render across thousands of CharReveal char-spans.
const charRevealCharVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};
const wordRevealWordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};
const wordIlluminationVariants: Variants = {
  hidden: { opacity: 0.18 },
  visible: { opacity: 1 },
};

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * CharReveal — word-clipped vertical reveal.
 * Geometry: each word is a clipping container; each char animates inside the
 * clip from y:110% → y:0%. Per-character stagger feels like "character", but
 * GPU only composites N word-clips, not N×chars.
 *
 * `parentDriven` (default false): renders standalone (own initial/whileInView).
 * When true, the component reads variants from parent — use this when nesting
 * inside StaggerContainer or a custom motion timeline so the parent orchestrates
 * the start. This is what makes the hero feel like one breath instead of three
 * lines firing at different times.
 */
export function CharReveal({
  text,
  className = "",
  delay = 0,
  staggerMs = 22,
  parentDriven = false,
  silent = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
  parentDriven?: boolean;
  /**
   * When true, suppresses the inner sr-only fallback. Use this when the parent
   * already exposes the full text via its own sr-only — avoids duplicate
   * announcements (e.g. three CharReveals stacked inside one <h1>).
   */
  silent?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  // When motion is disabled, render plain text. If silent, also hide from AT —
  // the parent owns the accessible name (e.g. h1 with its own sr-only).
  if (reduce) {
    return (
      <span className={className} aria-hidden={silent ? "true" : undefined}>
        {text}
      </span>
    );
  }

  const orchestration = parentDriven
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-40px" },
      };

  return (
    <motion.span
      className={`inline-block ${className}`}
      aria-hidden={silent ? "true" : undefined}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerMs / 1000, delayChildren: delay } },
      }}
      {...orchestration}
    >
      {!silent && <span className="sr-only">{text}</span>}
      <span aria-hidden className="inline-block">
        {words.map((word, wi) => (
          <span
            key={wi}
            className="inline-flex overflow-hidden align-baseline"
            style={{ paddingBottom: "0.08em" }}
          >
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block will-change-transform"
                variants={charRevealCharVariants}
                transition={{ duration: 0.6, ease: easeOutQuart }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && (
              <span className="inline-block" aria-hidden>
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </span>
    </motion.span>
  );
}

export function WordReveal({
  text,
  className = "",
  delay = 0,
  parentDriven = false,
  silent = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  parentDriven?: boolean;
  silent?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className} aria-hidden={silent ? "true" : undefined}>
        {text}
      </span>
    );
  }

  const orchestration = parentDriven
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-40px" },
      };

  return (
    <motion.span
      className={`inline-block ${className}`}
      aria-hidden={silent ? "true" : undefined}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      {...orchestration}
    >
      {!silent && <span className="sr-only">{text}</span>}
      <span aria-hidden>
        {words.map((word, wi) => (
          <span
            key={wi}
            className="inline-flex overflow-hidden align-baseline"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={wordRevealWordVariants}
              transition={{ duration: 0.7, ease: easeOutQuart }}
            >
              {word}
            </motion.span>
            {wi < words.length - 1 && (
              <span className="inline-block" aria-hidden>
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </span>
    </motion.span>
  );
}

/**
 * WordIllumination — manifesto-grade per-word illumination.
 * Words start dim and brighten on viewport entry. No translateY.
 *
 * `parentDriven`: when true, inherits visibility variants from parent and skips
 * its own initial/whileInView. Use to chain multiple Illuminations in a single
 * orchestrated paragraph.
 */
export function WordIllumination({
  text,
  className = "",
  delay = 0,
  staggerMs = 50,
  parentDriven = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
  parentDriven?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const orchestration = parentDriven
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-20%" },
      };

  return (
    <motion.span
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerMs / 1000, delayChildren: delay } },
      }}
      {...orchestration}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, wi) => (
          <motion.span
            key={wi}
            className="inline-block"
            variants={wordIlluminationVariants}
            transition={{ duration: 0.5, ease: easeOutQuart }}
          >
            {word}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (!isInView || reduce) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setAnimated(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration, reduce]);

  // Derived render: when reduced-motion is on, jump straight to target as soon
  // as the element enters the viewport. No setState in effect, no flash of 0.
  const display = reduce && isInView ? target : animated;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.15,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Marquee — decorative scrolling band.
 * aria-hidden because: (1) duplicated children to create infinite scroll would
 * read twice in screen readers; (2) the same information is presented in
 * non-marquee form elsewhere in the section copy. If you need a marquee whose
 * content is meaningful, render an accessible list separately.
 */
export function Marquee({
  children,
  className = "",
  speed = 35,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: reduce
            ? "none"
            : `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function MeshBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#111111] blur-[160px] animate-mesh-drift opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-[#0d0d0d] blur-[140px] animate-mesh-drift-reverse opacity-70" />
      <div className="absolute top-[30%] left-[40%] h-[40vh] w-[40vh] rounded-full bg-[#0a0a0a] blur-[120px] animate-mesh-drift opacity-60" />
    </div>
  );
}

export function LineReveal({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px origin-left bg-gradient-to-r from-transparent via-white/[0.08] to-transparent ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: easeOutExpo }}
    />
  );
}

/**
 * ParallaxSection — rAF-batched scroll listener (no main-thread thrash).
 * Disables on reduced-motion and on coarse pointers (mobile parallax = jank).
 */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;

    // Skip parallax on coarse pointer (mobile) — touch scroll + transform = jank.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    let ticking = false;
    let frame = 0;
    const update = () => {
      if (!ref.current || !innerRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const offset = (progress - 0.5) * speed * 100;
      innerRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed, reduce]);

  return (
    <div ref={ref} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
