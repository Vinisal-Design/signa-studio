"use client";

import { FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal } from "@/components/animated";

const steps = [
  {
    number: "01",
    title: "Conte o que precisa",
    description:
      "Uma conversa rapida de 15 minutos pelo WhatsApp. Voce conta sobre seu negocio, publico e estilo. Sem briefing de 47 paginas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Nos criamos",
    description:
      "Design profissional, textos persuasivos, otimizado para celular e Google. Tudo em ate 24 horas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Seu site vai ao ar",
    description:
      "Voce revisa, pede ajustes inclusos e pronto — site no ar gerando credibilidade e atraindo clientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="how-it-works-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <LineReveal className="mb-20" />

        <FadeIn className="text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            Metodo Sprint 24
          </span>
          <h2 id="how-it-works-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Seu site novo em{" "}
            <span className="text-gradient-accent">3 passos</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-text-muted">
            Sem reunioes interminaveis. Sem burocracia.
            Processo testado em +200 projetos.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-20 grid gap-5 sm:grid-cols-3" stagger={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <article className="card-glow group relative h-full rounded-2xl bg-white/[0.02] border border-white/[0.04] p-8 pt-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
                <span className="block text-center text-[4rem] font-black leading-none text-white/[0.06] select-none mb-4">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/[0.08] text-accent-light transition-all duration-500 group-hover:bg-accent/[0.15] group-hover:shadow-[0_0_30px_-8px_rgba(79,70,229,0.3)]">
                    {step.icon}
                  </div>

                  <h3 className="text-center text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-center text-[14px] leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-text-dim/30 sm:block">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
