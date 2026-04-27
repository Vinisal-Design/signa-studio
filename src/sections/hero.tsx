"use client";

import { motion } from "framer-motion";
import { WhatsAppCTA } from "@/components/whatsapp-button";
import { CharReveal, CountUp, Marquee, MagneticButton, MeshBackground } from "@/components/animated";

const stats = [
  { value: 200, suffix: "+", label: "Sites entregues" },
  { value: 24, suffix: "h", label: "Entrega media" },
  { value: 4.9, suffix: "/5", label: "Avaliacao", isDecimal: true },
];

const marqueeItems = [
  "SITES PROFISSIONAIS",
  "LANDING PAGES",
  "REDESIGN EXPRESS",
  "PORTFOLIO",
  "INSTITUCIONAL",
  "DENTISTAS",
  "PSICOLOGOS",
  "RESTAURANTES",
  "COACHES",
  "ADVOGADOS",
];

const trustBadges = [
  "Design exclusivo, nao usamos templates",
  "100% responsivo, perfeito no celular",
  "SEO otimizado, apareca no Google",
  "Dominio + hospedagem inclusos",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-black" aria-labelledby="hero-heading">
      <MeshBackground />

      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.015]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2 text-[13px] font-medium text-text-muted backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-60" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
            </span>
            Apenas 3 vagas por semana
          </span>
        </motion.div>

        <h1 id="hero-heading" className="mt-10 text-center text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em]">
          <CharReveal text="Seu site profissional" delay={0.3} staggerMs={25} />
          <br />
          <span className="text-gradient-accent">
            <CharReveal text="pronto em 24 horas" delay={0.8} staggerMs={25} />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center text-[1.05rem] leading-relaxed text-text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
        >
          Criacao de sites profissionais para{" "}
          <span className="text-foreground">dentistas, psicologos, nutricionistas, coaches, restaurantes</span>{" "}
          e qualquer negocio local. Design exclusivo, SEO otimizado, entrega em 1 dia util.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease }}
        >
          <MagneticButton>
            <WhatsAppCTA text="Quero meu site em 24h" variant="primary" />
          </MagneticButton>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-6 py-4 text-[13px] font-medium text-text-muted transition-colors duration-300 hover:text-foreground"
          >
            Ver cases de sucesso
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          className="mt-5 text-[13px] text-text-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Orcamento gratuito em ate 2 horas. Sem compromisso.
        </motion.p>

        <motion.div
          className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-[12px] text-text-dim">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-accent-light/60">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-md grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2, ease }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.isDecimal ? (
                  <span>{stat.value}<span className="text-accent-light">{stat.suffix}</span></span>
                ) : (
                  <CountUp target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-1.5 text-[11px] uppercase tracking-[0.12em] text-text-dim">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <a href="#como-funciona" className="animate-scroll-bounce flex flex-col items-center gap-2 text-text-dim/60 transition-colors hover:text-accent-light" aria-label="Rolar para baixo">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>

      <motion.div
        className="relative z-10 w-full border-t border-white/[0.03] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-10 text-[12px] font-medium uppercase tracking-[0.2em] text-text-dim/60">
              {item}
              <span className="mx-10 text-accent-light/20">&mdash;</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
