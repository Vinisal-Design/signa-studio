"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, MeshBackground } from "@/components/animated";

const faqs = [
  {
    q: "24 horas de verdade? Como e possivel?",
    a: "Sim, 24 horas uteis. Sem asterisco. Temos um processo enxuto chamado Metodo Sprint 24 — especializado e refinado em mais de 200 projetos. Voce manda o briefing, nos entregamos.",
  },
  {
    q: "R$2.000 por um site profissional? Qual e o truque?",
    a: "Nenhum truque. Somos eficientes, nao cortamos qualidade. Agencias tradicionais cobram R$5.000-15.000 porque tem gerente de conta, reunioes semanais e overhead. Nos cortamos a burocracia, nao a qualidade.",
  },
  {
    q: "E se eu nao gostar do resultado?",
    a: "Voce tem rodadas de ajustes inclusas. A maioria dos clientes aprovam na primeira versao. Se nao curtir, refazemos. Se mesmo assim nao ficar satisfeito, devolvemos 100% do dinheiro.",
  },
  {
    q: "Eu nao entendo nada de tecnologia. Vou conseguir atualizar?",
    a: "Sim. Entregamos com um painel simples para trocar textos e fotos. E se preferir nao mexer, nosso plano de manutencao (R$750/mes) cuida de tudo. Manda WhatsApp e nos atualizamos.",
  },
  {
    q: "Reformar ou fazer um novo?",
    a: "Se a estrutura esta ok e o problema e visual, a reforma (R$1.500) resolve. Se o site e antigo demais, o novo (R$2.000) e o caminho. Manda o link — damos diagnostico honesto em 2 horas.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="faq-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-2xl">
        <FadeIn className="text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            FAQ
          </span>
          <h2 id="faq-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            Respostas honestas.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-2.5" stagger={0.08}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="card-glow rounded-xl bg-white/[0.02] border border-white/[0.04] overflow-hidden transition-all duration-300 hover:border-white/[0.08]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-[14px] font-semibold tracking-tight">
                    {faq.q}
                  </span>
                  <motion.div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.03]"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-muted">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[13px] leading-relaxed text-text-muted">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
