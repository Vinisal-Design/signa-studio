"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { WhatsAppCTA } from "@/components/whatsapp-button";
import { CharReveal, Marquee } from "@/components/animated";
import { HeroBackgroundV2 } from "@/components/hero-background";

const marqueeItems = [
  "DENTISTAS",
  "ADVOGADOS",
  "PSICÓLOGOS",
  "RESTAURANTES",
  "NUTRICIONISTAS",
  "CLÍNICAS",
  "COACHES",
  "ESTÉTICA",
  "PERSONAL TRAINERS",
  "ARQUITETOS",
];

const trustBadges = [
  "Demo grátis em até 24h úteis",
  "Briefing em 15 min no WhatsApp",
  "Você só paga depois de aprovar",
  "Não gostou? Devolvemos cada centavo",
];

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero — orchestrated single-breath timeline.
 *
 * Animation budget: ~1.3s total reveal (was 2.7s — main thread freed earlier,
 * LCP improves).
 *
 * Structure:
 *   - Parent <motion.div> drives the timeline via staggerChildren.
 *   - Three CharReveal headline lines render parentDriven and inherit start.
 *   - Subhead / CTA / fineprint / badges arrive in measured succession.
 *
 * Geometry: each headline line uses .hero-line — a clipping container that
 * absorbs reveal travel without touching the line above. Eliminates the
 * "characters bleed up into previous line" bug from the previous version.
 */
export function Hero() {
  const reduce = useReducedMotion();

  // Single source of truth for the whole hero choreography.
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.08,
      },
    },
  };

  const lineFade: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      };

  return (
    <section
      // min-h-screen is the fallback for browsers that don't support svh
      // (iOS Safari < 15.4, ~0.5% globally). svh wins via cascade where supported,
      // and prevents the iOS URL-bar flicker that vh causes.
      className="relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <HeroBackgroundV2 />

      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.012]" />

      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* PLG eyebrow — message-match anchor for paid traffic from Meta ads
            ("Veja seu site grátis em 24h"). Renders above the headline so the
            ad→LP continuity is verified within the first 200ms of viewport. */}
        <motion.p
          className="eyebrow-mono mb-5 text-text-muted"
          variants={lineFade}
        >
          Construímos. Você decide se fica com ele.
        </motion.p>

        <h1
          id="hero-heading"
          className="text-center font-bold tracking-[-0.035em] text-[clamp(2.05rem,7.5vw,4rem)] leading-[1.02] sm:leading-[0.98]"
        >
          {/* Single accessible label for the whole headline. The three CharReveal
              spans below are silenced (silent=true) so screen readers read the
              full sentence once instead of stuttering across three lines. */}
          <span className="sr-only">
            Veja seu site profissional de agência. Em 24 horas.
          </span>
          <span className="hero-line" aria-hidden="true">
            <CharReveal text="Veja seu site profissional" parentDriven silent staggerMs={18} />
          </span>
          <span className="hero-line" aria-hidden="true">
            <CharReveal text="de agência." parentDriven silent staggerMs={18} />
          </span>
          <span className="hero-line text-gradient-accent" aria-hidden="true">
            <CharReveal text="Em 24 horas. Grátis." parentDriven silent staggerMs={18} />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center text-[1rem] sm:text-[1.1rem] font-medium text-text-muted"
          variants={lineFade}
        >
          <span className="underline-glow text-foreground">
            A gente faz primeiro
          </span>
          <br className="sm:hidden" />{" "}
          — você só paga depois de ver pronto e aprovar.
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-center text-[0.98rem] sm:text-[1rem] leading-[1.6] text-text-muted text-pretty"
          variants={lineFade}
        >
          Site bom é a porta do seu negócio aberta 24 horas por dia.{" "}
          <span className="text-foreground">
            Site ruim é cliente caro indo no ralo.
          </span>{" "}
          A gente faz o tipo que segura. Em 24 horas, sem teatro.
        </motion.p>

        <motion.div className="mt-8 flex justify-center" variants={lineFade}>
          <WhatsAppCTA text="Ver meu site grátis em 24h" variant="primary" />
        </motion.div>

        <motion.p
          className="mt-5 text-[13px] text-text-dim text-center px-2"
          variants={lineFade}
        >
          Sem formulário de 47 páginas. Sem reunião de 2 horas.
        </motion.p>

        <motion.ul
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 list-none px-2"
          variants={lineFade}
          aria-label="Garantias"
        >
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-[12px] text-text-dim"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="shrink-0 text-accent-light/60"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="relative z-10 mb-8 hidden justify-center sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#como-funciona"
          className="animate-scroll-bounce flex flex-col items-center gap-2 text-text-dim transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:text-accent-light"
          aria-label="Rolar para a próxima seção"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>

      <motion.div
        className="relative z-10 w-full border-t border-white/[0.03] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <div className="mb-3 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-dim">
            Sites já no ar pra:
          </span>
        </div>
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-10 text-[12px] font-medium uppercase tracking-[0.2em] text-text-dim"
            >
              {item}
              <span className="mx-10 text-accent-light/20">&bull;</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
