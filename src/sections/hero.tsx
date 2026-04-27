"use client";

import { motion } from "framer-motion";
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
  "Você só paga depois de aprovar o site",
  "Briefing em 15 minutos no WhatsApp",
  "Não gostou? Devolvemos cada centavo",
  "Sites no ar. Você abre cada um e valida",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-black" aria-labelledby="hero-heading">
      <HeroBackgroundV2 />

      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.012]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
        <h1 id="hero-heading" className="text-center text-[clamp(2rem,5.2vw,4rem)] font-bold leading-[0.95] tracking-[-0.035em]">
          <span className="block -mb-[0.18em]">
            <CharReveal text="Sites profissionais" delay={0.3} staggerMs={22} />
          </span>
          <span className="block -mb-[0.18em]">
            <CharReveal text="de agência." delay={0.65} staggerMs={22} />
          </span>
          <span className="block text-gradient-accent">
            <CharReveal text="Em 24 horas." delay={0.95} staggerMs={22} />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-center text-[1rem] sm:text-[1.1rem] font-medium text-text-muted"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25, ease }}
        >
          <span className="underline-glow text-foreground">Sem você pagar nada</span>{" "}
          antes de ver pronto e gostar.
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-center text-[1rem] leading-[1.65] text-text-muted text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease }}
        >
          Site bom é a porta do seu negócio aberta 24 horas por dia.{" "}
          <span className="text-foreground">Site ruim é cliente caro indo no ralo.</span>{" "}
          A gente faz o tipo que segura. Em 24 horas, sem teatro.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.75, ease }}
        >
          <WhatsAppCTA text="Quero meu site em 24h" variant="primary" />
        </motion.div>

        <motion.p
          className="mt-5 text-[13px] text-text-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.05 }}
        >
          Sem formulário de 47 páginas. Sem reunião de 2 horas.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
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
      </div>

      <motion.div
        className="relative z-10 mb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
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
        transition={{ duration: 0.8, delay: 2.7 }}
      >
        <div className="text-center mb-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-dim/50">
            Sites já no ar pra:
          </span>
        </div>
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-10 text-[12px] font-medium uppercase tracking-[0.2em] text-text-dim/60">
              {item}
              <span className="mx-10 text-accent-light/20">&bull;</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
