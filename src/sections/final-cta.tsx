"use client";

import { motion } from "framer-motion";
import { WhatsAppCTA } from "@/components/whatsapp-button";
import { MeshBackground, WordReveal } from "@/components/animated";

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-32 sm:py-40" aria-labelledby="final-cta-heading">
      <MeshBackground />

      <div className="pointer-events-none absolute inset-0">
        {/* Duo glow — closure visual: cool primary + warm hope */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55vh] w-[55vh] rounded-full bg-accent/[0.05] blur-[180px] animate-glow-breathe" />
        <div className="glow-warm absolute top-[55%] left-[55%] h-[40vh] w-[40vh] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
      >
        {/* Eyebrow agnóstico, sem urgência fabricada */}
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent-light">
          Última parada
        </span>

        {/* Headline alinhada à Big Idea constitucional */}
        <h2
          id="final-cta-heading"
          className="mt-6 text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em]"
        >
          <WordReveal text="Cada dia sem site bom" delay={0.2} />
          <br />
          <span className="text-gradient-accent">
            <WordReveal text="é cliente caro indo no ralo." delay={0.5} />
          </span>
        </h2>

        {/* Subhead B Halbert (Cláudia "mesa que era sua") universalizada — agora distribuída */}
        <motion.p
          className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-[1.7] text-text-muted"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6, ease }}
        >
          Enquanto você lê isso, alguém procura no Google o que você vende.{" "}
          <span className="text-foreground">
            Quem aparece primeiro fecha. Quem não aparece some.
          </span>
        </motion.p>

        {/* Linha de garantia em PT-BR popular (sem money-back) */}
        <motion.p
          className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-[1.65] text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Manda WhatsApp agora. Em 2 horas você tem orçamento. Em 24 horas, site no ar.{" "}
          <span className="text-foreground">Não gostou, devolvemos cada centavo. O risco é nosso.</span>
        </motion.p>

        {/* CTA único Klaff prize positioning */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <WhatsAppCTA text="Manda um oi no WhatsApp" variant="whatsapp" />

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-text-dim">
            {[
              "Resposta em 15 minutos",
              "Orçamento em 2 horas",
              "Site no ar em 24 horas",
              "Você só paga depois de aprovar",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent-light/80">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Micro-meta destino fechando o loop (Cialdini consistency final) */}
        <motion.p
          className="mx-auto mt-14 max-w-lg text-[13px] leading-[1.7] text-text-dim/80 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        >
          Você leu até aqui. Isso já diz alguma coisa.
          <br />
          <span className="text-text-muted">A próxima frase pode ser sua, no seu site.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
