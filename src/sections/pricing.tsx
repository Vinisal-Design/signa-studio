"use client";

import { FadeIn, StaggerContainer, StaggerItem, MeshBackground } from "@/components/animated";
import { WhatsAppCTA } from "@/components/whatsapp-button";

const plans = [
  {
    name: "Reforma Sprint",
    price: "1.500",
    description:
      "Design moderno, performance otimizada e foco em conversao. Para quem ja tem site mas sabe que esta espantando clientes.",
    delivery: "Entrega em 24h",
    features: [
      "Redesign completo com visual premium",
      "100% responsivo (celular, tablet, desktop)",
      "Otimizacao de velocidade e Core Web Vitals",
      "SEO tecnico configurado",
      "Textos revisados para converter",
      "Ate 5 paginas reformadas",
      "2 rodadas de ajustes incluidas",
    ],
    popular: false,
    ctaText: "Quero reformar meu site",
  },
  {
    name: "Site Sprint Profissional",
    price: "2.000",
    description:
      "Site do zero para captar clientes e transmitir autoridade. Design exclusivo criado para o seu negocio.",
    delivery: "Entrega em 24h",
    features: [
      "Design exclusivo e premium",
      "Ate 7 secoes estrategicas",
      "100% responsivo — perfeito em qualquer tela",
      "SEO otimizado para Google",
      "Integracao WhatsApp + formulario",
      "Textos persuasivos escritos por nos",
      "Dominio e hospedagem configurados",
      "2 rodadas de ajustes incluidas",
    ],
    popular: true,
    ctaText: "Quero meu site novo",
  },
  {
    name: "Manutencao Sprint",
    price: "750",
    period: "/mes",
    description:
      "Site sempre atualizado, seguro e rapido. Manda mensagem, nos atualizamos. Cancele quando quiser.",
    delivery: "Suporte continuo",
    features: [
      "Atualizacoes ilimitadas de conteudo",
      "Backup semanal automatico",
      "Monitoramento 24/7 com alerta",
      "Relatorios mensais de performance",
      "Suporte prioritario via WhatsApp",
      "Otimizacao continua de velocidade",
      "Sem fidelidade — cancele quando quiser",
    ],
    popular: false,
    ctaText: "Quero manutencao",
  },
];

export function Pricing() {
  return (
    <section id="precos" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="pricing-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            Investimento
          </span>
          <h2 id="pricing-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Preco justo,{" "}
            <span className="text-gradient-accent">sem surpresas</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-text-muted">
            Agencias cobram R$8.000-R$15.000 e levam meses.
            Mesma qualidade em 24h por uma fracao.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-5 lg:grid-cols-3" stagger={0.12}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`card-glow relative flex h-full flex-col rounded-2xl p-8 transition-all duration-500 ${
                  plan.popular
                    ? "bg-accent/[0.05] border border-accent/[0.15] shadow-[0_0_80px_-20px_rgba(79,70,229,0.15)]"
                    : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_0_30px_-4px_rgba(79,70,229,0.5)]">
                      Mais popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-[13px] text-text-dim">R$</span>
                  <span className="text-4xl font-bold tracking-[-0.03em]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[13px] text-text-dim">{plan.period}</span>
                  )}
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-accent-light">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {plan.delivery}
                </div>

                <div className="my-7 h-px bg-white/[0.04]" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13px] text-text-muted">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-accent-light">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <WhatsAppCTA
                    text={plan.ctaText}
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full justify-center text-[14px]"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/[0.02] border border-white/[0.04] p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-light">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h3 className="text-lg font-bold tracking-tight">Garantia Total de Satisfacao</h3>
            </div>
            <p className="text-[13px] text-text-muted leading-relaxed">
              Nao aprovou? <span className="text-foreground">Refazemos do zero com outro conceito.</span> Ainda insatisfeito? Devolvemos 100% do investimento. Nos assumimos o risco.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
