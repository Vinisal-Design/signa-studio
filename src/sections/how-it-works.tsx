"use client";

import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MeshBackground,
  LineReveal,
} from "@/components/animated";

const whyItMatters = [
  {
    label: "01",
    title: "Site ruim espanta cliente.",
    description:
      "9 em cada 10 pessoas pesquisam você no Google antes de marcar. Se elas caem num site lento, feio ou amador, vão pro concorrente do lado. Você nem fica sabendo.",
  },
  {
    label: "02",
    title: "Site bom multiplica venda.",
    description:
      "Um site que passa confiança em 3 segundos vira orçamento em venda fechada. Aparece no Google. É recomendado quando alguém procura. Trabalha por você 24 horas por dia.",
  },
  {
    label: "03",
    title: "Você não precisa entender de tecnologia.",
    description:
      "Você manda WhatsApp. A gente cuida do design, dos textos, do domínio, da hospedagem, do SEO, de tudo. Em 24h você tem o site no ar. Se não gostar, refazemos. Se ainda não gostar, devolvemos seu dinheiro.",
  },
];

const sprintSteps = [
  {
    number: "01",
    title: "Você manda WhatsApp",
    description:
      "Conversa rápida de 15 minutos. Você fala do seu negócio, do que vende, de quem é seu cliente. Pronto. Sem briefing de 47 páginas. Sem call de discovery.",
  },
  {
    number: "02",
    title: "Construímos pra você ver",
    description:
      "A gente desenvolve seu site em até 24 horas: visual com cara própria, textos que vendem, código que aparece no Google, integração com WhatsApp. Te mandamos o link no WhatsApp pra você abrir e navegar — antes de pagar nada.",
  },
  {
    number: "03",
    title: "Aprovou? Aí sim, no ar.",
    description:
      "Você revisa o site pronto, pede ajustes inclusos, e só então paga. Publicamos com domínio, hospedagem e SSL no seu nome. Não gostou? Refazemos. Ainda não? Custou zero.",
  },
];

const includes = [
  "Visual feito do zero, sem template",
  "Textos escritos pra vender",
  "Domínio + hospedagem inclusos",
  "Aparece quando o cliente procura",
  "Integração WhatsApp",
  "100% perfeito no celular",
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-radial-tl relative overflow-hidden bg-black px-4 py-28 sm:py-36"
      aria-labelledby="how-it-works-heading"
    >
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <LineReveal className="mb-20" />

        {/* Micro-meta — autoreferential proof through speed itself */}
        <FadeIn className="mb-16">
          <p className="mx-auto max-w-xl text-center text-[0.95rem] leading-[1.65] text-text-dim italic">
            Você chegou até aqui em segundos.
            <br />
            <span className="text-text-muted">Seu cliente também vai chegar.</span>
          </p>
        </FadeIn>

        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">01 · Método</span>
          <h2
            id="how-it-works-heading"
            className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Em 3 segundos sua porta abre.{" "}
            <span className="text-gradient-accent">Ou seu cliente vai embora.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-text-muted">
            É o tempo que ele leva pra abrir seu site e decidir se você é a escolha
            certa, ou se vai voltar pro Google e clicar no concorrente.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 space-y-4" stagger={0.1}>
          {whyItMatters.map((item) => (
            <StaggerItem key={item.label}>
              <article className="card-glow rounded-2xl border border-white/[0.04] bg-white/[0.02] p-7 transition-[border-color,background-color] duration-500 ease-out hover:border-white/[0.08] hover:bg-white/[0.04] sm:p-9">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light"
                  aria-hidden="true"
                >
                  {item.label}
                </span>
                <h3 className="mt-3 text-[1.4rem] font-bold leading-tight tracking-tight sm:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-text-muted sm:text-[15px]">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-20 text-center sm:mt-24">
          <span className="eyebrow-mono text-accent-light">Como funciona</span>
          <h3 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            3 passos. Você no controle.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Nada de reunião de 2 horas. Nada de proposta de 40 páginas.
            Você fala, a gente entrega, você aprova.
          </p>
        </FadeIn>

        {/* Sprint steps — semantic <ol> because order is meaningful (1 → 2 → 3).
            Using motion.ol directly keeps the list element flat — wrapping in a
            motion.div would inject an extra <div> between the heading region
            and the list, weakening AT semantics. */}
        <motion.ol
          className="mt-16 grid list-none gap-5 sm:grid-cols-3"
          aria-label="Etapas do processo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {sprintSteps.map((step, i) => (
            <StaggerItem key={step.number}>
              <li>
                  <article className="card-glow group relative h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8 pt-10 transition-[border-color,background-color] duration-500 ease-out hover:border-white/[0.08] hover:bg-white/[0.04]">
                    <span
                      className="mb-4 block select-none text-center text-[4rem] font-black leading-none text-white/[0.06]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <h3 className="text-center text-lg font-semibold tracking-tight">
                      <span className="sr-only">Passo {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-center text-[14px] leading-relaxed text-text-muted">
                      {step.description}
                    </p>

                    {/* Decorative arrow between cards — text-text-dim/40 is
                        intentionally faint; aria-hidden so AT skips it and
                        contrast requirements do not apply. */}
                    {i < sprintSteps.length - 1 && (
                      <div
                        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-text-dim/40 sm:block"
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </article>
              </li>
            </StaggerItem>
          ))}
        </motion.ol>

        <FadeIn className="mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8">
            <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
              Tudo que entregamos no seu site
            </p>
            <ul className="grid list-none grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="shrink-0 text-accent-light"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[13px] text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-[12px] leading-relaxed text-text-dim">
              Sem cobrança extra. Sem letra miúda. O site que você precisa pra começar a vender amanhã.
            </p>
          </div>
        </FadeIn>

        {/* Showcase frame — autoreferential close (Klaff-grade) */}
        <FadeIn className="mt-14 sm:mt-20">
          <p className="mx-auto max-w-2xl text-center text-[0.95rem] leading-[1.65] text-text-dim italic">
            Esse site que você tá lendo agora? A gente fez em 24 horas.
            <br />
            <span className="text-text-muted">Você acabou de ver o que entrega.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
