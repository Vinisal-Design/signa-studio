"use client";

import { motion } from "framer-motion";
import { WhatsAppCTA } from "@/components/whatsapp-button";
import { MagneticButton, MeshBackground, CharReveal, WordReveal } from "@/components/animated";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-32 sm:py-40">
      <MeshBackground />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vh] w-[50vh] rounded-full bg-accent/[0.04] blur-[200px] animate-glow-breathe" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2 text-[13px] font-medium text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-60" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
          </span>
          Vagas limitadas esta semana
        </span>

        <h2 className="mt-10 text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
          <WordReveal text="Cada dia sem site profissional" delay={0.2} />
          <br />
          <span className="text-gradient-accent">
            <WordReveal text="e um dia que voce perde clientes" delay={0.5} />
          </span>
        </h2>

        <motion.p
          className="mx-auto mt-8 max-w-lg text-[1.05rem] leading-relaxed text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          O profissional do outro lado da rua — com site bonito e agendamento online —
          esta recebendo os clientes que deveriam ser seus.{" "}
          <span className="text-foreground">A diferenca e presenca online.</span>
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <MagneticButton>
            <WhatsAppCTA text="Garantir minha vaga agora" variant="whatsapp" />
          </MagneticButton>

          <div className="flex flex-wrap items-center justify-center gap-8 text-[12px] text-text-dim">
            {["Orcamento gratis em 2h", "Entrega em 24h", "Garantia total"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent-light">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-md text-[12px] text-text-dim/70 italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          P.S. — Voce nao paga nada adiantado e tem garantia de satisfacao.
          O unico risco e continuar com um site que espanta clientes.
        </motion.p>
      </motion.div>
    </section>
  );
}
