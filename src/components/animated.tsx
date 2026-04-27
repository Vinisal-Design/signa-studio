"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const easeOutQuart = [0.25, 0, 0.1, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger }}
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
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CharReveal({
  text,
  className = "",
  delay = 0,
  staggerMs = 30,
  trigger = "inView",
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
  trigger?: "inView" | "mount";
}) {
  const words = text.split(" ");

  const containerProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-40px", amount: 0 as const },
        };

  return (
    <motion.span className={className} {...containerProps}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block">
            {word.split("").map((char, ci) => (
              <span
                key={ci}
                className="inline-block overflow-hidden align-baseline"
                style={{ paddingTop: "0.15em", paddingBottom: "0.2em" }}
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "120%", opacity: 0 },
                    visible: { y: "0%", opacity: 1 },
                  }}
                  transition={{
                    duration: 0.8,
                    delay: delay + (wi * word.length + ci) * (staggerMs / 1000),
                    ease: easeOutQuart,
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
            {wi < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
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
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                delay: delay + wi * 0.06,
                ease: easeOutQuart,
              }}
            >
              {word}
            </motion.span>
            {wi < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </span>
    </motion.span>
  );
}

/**
 * WordIllumination — manifesto-grade per-word reveal.
 * Words start at opacity 0.18 and illuminate to 1.0 staggered on viewport entry.
 * No translateY — pure illumination cascade (Academia Lendária pattern).
 */
export function WordIllumination({
  text,
  className = "",
  delay = 0,
  staggerMs = 50,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, wi) => (
          <motion.span
            key={wi}
            className="inline-block"
            variants={{
              hidden: { opacity: 0.18 },
              visible: { opacity: 1 },
            }}
            transition={{
              duration: 0.5,
              delay: delay + (wi * staggerMs) / 1000,
              ease: easeOutQuart,
            }}
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
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString("pt-BR")}{suffix}
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
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
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
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({
  children,
  className = "",
  speed = 35,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ contain: "paint" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function MeshBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute top-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#111111] blur-[160px] animate-mesh-drift opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-[#0d0d0d] blur-[140px] animate-mesh-drift-reverse opacity-70" />
      <div className="absolute top-[30%] left-[40%] h-[40vh] w-[40vh] rounded-full bg-[#0a0a0a] blur-[120px] animate-mesh-drift opacity-60" />
    </div>
  );
}

export function LineReveal({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: easeOutExpo }}
    />
  );
}

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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      setOffset((progress - 0.5) * speed * 100);
    };

    const handleScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: offset, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
