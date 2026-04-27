"use client";

import { FadeIn, StaggerContainer, StaggerItem, MeshBackground } from "@/components/animated";

const testimonials = [
  {
    name: "Dr. Marcelo Ribeiro",
    role: "Dentista, Campinas, SP",
    text: "Ja tinha pago R$4.000 para uma agencia que levou 3 meses. A Signa fez em 24 horas um site que eu tive vergonha de comparar com o anterior. Ja recuperei o investimento em menos de um mes.",
    initials: "MR",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Nutricionista, Belo Horizonte, MG",
    text: "Achei que 24 horas era papo de marketing. Mandei a mensagem as 10h de segunda. Na terca de manha, meu site estava pronto. Profissional, moderno, com minha cara. Melhor investimento pro consultorio.",
    initials: "FO",
    rating: 5,
  },
  {
    name: "Rafael Menezes",
    role: "Bistro, Curitiba, PR",
    text: "Nosso restaurante existia ha 12 anos e nunca teve site de verdade. A Signa criou um site que finalmente mostra quem nos somos. Reservas diretas aumentaram. Recomendo de olhos fechados.",
    initials: "RM",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent-light">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="testimonials-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            Depoimentos
          </span>
          <h2 id="testimonials-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Quem contratou,{" "}
            <span className="italic font-normal text-text-muted">recomenda</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            Avaliacao media de <span className="text-foreground font-semibold">4.9/5</span> em mais de 200 projetos entregues.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="card-glow group flex h-full flex-col rounded-2xl bg-white/[0.02] border border-white/[0.04] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
                <div className="flex items-center justify-between mb-6">
                  <Stars count={t.rating} />
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent-light/15">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" fill="currentColor"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                  </svg>
                </div>

                <p className="flex-1 text-[14px] leading-[1.7] text-text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3.5 border-t border-white/[0.04] pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/[0.08] text-[12px] font-bold tracking-wider text-accent-light">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[11px] text-text-dim">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
