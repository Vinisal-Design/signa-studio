"use client";

import {
  FadeIn,
  MeshBackground,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated";
import { WhatsAppCTA } from "@/components/whatsapp-button";

const plans = [
  {
    name: "Reforma Sprint",
    price: "1.500",
    description:
      "Seu site existe mas está espantando cliente. Visual ultrapassado, lento, esquecido pelo Google. A gente reforma a casa em 24 horas.",
    delivery: "Entrega em 24h",
    roi: "1 cliente novo paga o investimento",
    features: [
      "Redesign completo com visual atual",
      "100% responsivo (celular, tablet, desktop)",
      "Otimização de velocidade",
      "SEO e indexação no Google",
      "Textos revisados pra converter",
      "Até 5 páginas reformadas",
      "Integração com WhatsApp",
      "2 rodadas de ajustes inclusas",
    ],
    popular: false,
    ctaText: "Ver minha reforma grátis",
  },
  {
    name: "Site Sprint",
    price: "2.000",
    description:
      "Site profissional do zero. Pra quem quer começar com a porta certa ou substituir um site amador que está espantando cliente.",
    delivery: "Entrega em 24h",
    roi: "2 clientes novos pagam o site",
    features: [
      "Visual feito do zero, sem template",
      "Textos escritos pra vender",
      "Funciona perfeito no celular, tablet e desktop",
      "Aparece quando o cliente procura no Google",
      "Integração WhatsApp + formulário de contato",
      "Domínio + hospedagem + certificado de segurança",
      "Carrega em menos de 2 segundos",
      "2 rodadas de ajustes inclusas",
    ],
    popular: true,
    ctaText: "Ver meu site novo grátis",
  },
];

const comparison = [
  {
    who: "Wix / faz você mesmo",
    time: "60h+ do seu tempo",
    quality: "Template genérico",
    price: "R$ 0 + sua paciência",
  },
  {
    who: "Freelance Fiverr",
    time: "2-4 semanas",
    quality: "WordPress de tema",
    price: "R$ 800-1.500",
  },
  {
    who: "Agência tradicional",
    time: "30-60 dias",
    quality: "Profissional",
    price: "R$ 8.000-15.000",
  },
  {
    who: "SIGNA Sprint 24",
    time: "24 horas",
    quality: "Profissional",
    price: "R$ 1.500-2.000",
    highlight: true,
  },
];

const roiCalc = [
  { profession: "Dentista", ticket: "R$ 800", payback: "3 procedimentos" },
  { profession: "Advogado", ticket: "R$ 2.500", payback: "1 caso" },
  {
    profession: "Psicólogo",
    ticket: "R$ 200/sessão",
    payback: "10 sessões = 1 paciente novo",
  },
  {
    profession: "Restaurante",
    ticket: "R$ 80/ticket médio",
    payback: "25 reservas",
  },
  {
    profession: "Personal Trainer",
    ticket: "R$ 600/mês",
    payback: "1 aluno por 3 meses",
  },
];

export function Pricing() {
  return (
    <section
      id="precos"
      className="section-radial-tl relative overflow-hidden bg-black px-4 py-28 sm:py-36"
      aria-labelledby="pricing-heading"
    >
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">04 · Investimento</span>
          <h2
            id="pricing-heading"
            className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Não é gasto.{" "}
            <span className="text-gradient-peach">
              É o cliente que você ainda não fechou.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-[1.7] text-text-muted text-pretty">
            <span className="text-foreground">
              O preço é esse porque a gente cortou o que agência cobra e não entrega:
            </span>{" "}
            60 dias de reunião pra te empurrar fatura. Mesmo trabalho, mesma qualidade.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.6] text-text-dim text-pretty">
            Um site que passa confiança fecha 1 cliente novo na primeira semana.
            Esse cliente paga o site. O resto vira lucro, todo dia, no mesmo orçamento.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2"
          stagger={0.12}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <article
                className={`card-glow relative flex h-full flex-col rounded-2xl p-8 transition-[border-color,background-color] duration-500 ease-out ${
                  plan.popular
                    ? "border border-accent/[0.15] bg-accent/[0.05] shadow-[0_0_80px_-20px_rgba(79,70,229,0.15)]"
                    : "border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] hover:bg-white/[0.04]"
                }`}
                aria-labelledby={`plan-${plan.name}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-accent via-accent-light to-[#e9a96d] px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_0_30px_-4px_rgba(129,140,248,0.4)]">
                      Mais escolhido
                    </span>
                  </div>
                )}

                <header>
                  <h3
                    id={`plan-${plan.name}`}
                    className="text-lg font-semibold tracking-tight"
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                    {plan.description}
                  </p>
                </header>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-[13px] text-text-dim">R$</span>
                  <span className="stat-number text-4xl font-bold">{plan.price}</span>
                </p>

                <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-accent-light">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {plan.delivery}
                </p>

                <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-md bg-accent/[0.08] px-2.5 py-1 text-[11px] font-medium text-accent-light">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  {plan.roi}
                </p>

                <hr className="my-7 border-0 border-t border-white/[0.04]" />

                <ul className="flex-1 space-y-3 list-none">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] text-text-muted"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="mt-0.5 shrink-0 text-accent-light"
                        aria-hidden="true"
                      >
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
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ROI calculator — semantic table, mobile stacks via responsive Tailwind. */}
        <FadeIn className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
              Quanto tempo até o site se pagar
            </p>
            <p className="mx-auto mb-8 max-w-xl text-center text-[14px] text-text-muted">
              Quase ninguém faz essa conta. Mas quando faz, a decisão fica óbvia.
            </p>

            <table className="w-full overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] text-[13px]">
              <caption className="sr-only">
                Tempo até o site se pagar por profissão
              </caption>
              <thead className="hidden sm:table-header-group">
                <tr className="border-b border-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.12em] text-text-dim">
                  <th className="px-6 py-4 text-left font-semibold">Profissão</th>
                  <th className="px-6 py-4 text-left font-semibold">Ticket médio</th>
                  <th className="px-6 py-4 text-left font-semibold">Site se paga em</th>
                </tr>
              </thead>
              <tbody>
                {roiCalc.map((row) => (
                  // role="row" / role="cell" preserve table semantics on mobile
                  // where `display: block` would otherwise strip native roles.
                  <tr
                    key={row.profession}
                    role="row"
                    className="block border-b border-white/[0.03] last:border-b-0 sm:table-row"
                  >
                    <td
                      role="cell"
                      className="block px-6 pt-4 font-semibold text-foreground sm:table-cell sm:py-4"
                    >
                      {row.profession}
                    </td>
                    <td
                      role="cell"
                      className="block px-6 pt-1 text-text-muted sm:table-cell sm:py-4"
                    >
                      <span className="text-[11px] text-text-dim sm:hidden">Ticket: </span>
                      {row.ticket}
                    </td>
                    <td
                      role="cell"
                      className="block px-6 pb-4 pt-1 text-accent-light sm:table-cell sm:py-4"
                    >
                      <span className="text-[11px] text-text-dim sm:hidden">Paga em: </span>
                      {row.payback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-center text-[12px] italic text-text-dim">
              Não está aqui sua profissão? Manda WhatsApp que a gente faz a conta com você.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.04] bg-white/[0.02] p-7 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
              Mesmo orçamento. Mais cliente.
            </p>
            <p className="text-[1rem] leading-[1.7] text-text-muted">
              Mesmo orçamento de Google que você já gasta. Site que segura.
              <br />
              <span className="text-foreground">
                Cada real de anúncio passa a render duas a três vezes mais.
              </span>{" "}
              Não é mágica, é matemática.
            </p>
          </div>
        </FadeIn>

        {/* Comparison table — same semantic pattern as ROI. */}
        <FadeIn className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
              Comparação direta
            </p>
            <table className="w-full overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] text-[13px]">
              <caption className="sr-only">
                Comparação SIGNA versus alternativas
              </caption>
              <thead className="hidden sm:table-header-group">
                <tr className="border-b border-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.12em] text-text-dim">
                  <th className="px-6 py-4 text-left font-semibold">Quem</th>
                  <th className="px-6 py-4 text-left font-semibold">Tempo</th>
                  <th className="px-6 py-4 text-left font-semibold">Qualidade</th>
                  <th className="px-6 py-4 text-left font-semibold">Preço</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.who}
                    role="row"
                    className={`block border-b border-white/[0.03] last:border-b-0 sm:table-row ${
                      row.highlight ? "bg-accent/[0.05]" : ""
                    }`}
                  >
                    <td
                      role="cell"
                      className={`block px-6 pt-4 font-semibold sm:table-cell sm:py-5 ${
                        row.highlight ? "text-accent-light" : "text-foreground"
                      }`}
                    >
                      {row.who}
                    </td>
                    <td
                      role="cell"
                      className="block px-6 pt-1 text-text-muted sm:table-cell sm:py-5"
                    >
                      <span className="text-[11px] text-text-dim sm:hidden">Tempo: </span>
                      {row.time}
                    </td>
                    <td
                      role="cell"
                      className="block px-6 pt-1 text-text-muted sm:table-cell sm:py-5"
                    >
                      <span className="text-[11px] text-text-dim sm:hidden">
                        Qualidade:{" "}
                      </span>
                      {row.quality}
                    </td>
                    <td
                      role="cell"
                      className={`block px-6 pb-4 pt-1 sm:table-cell sm:py-5 ${
                        row.highlight ? "font-semibold text-foreground" : "text-text-muted"
                      }`}
                    >
                      <span className="text-[11px] text-text-dim sm:hidden">Preço: </span>
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn className="mt-14 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8">
            <div className="mb-4 flex items-center justify-center gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent-light"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="text-lg font-bold tracking-tight">
                Garantia tripla. Risco zero.
              </h3>
            </div>
            <ol className="grid list-none gap-2 text-left text-[13px] leading-relaxed text-text-muted sm:grid-cols-3 sm:text-center">
              <li>
                <span className="text-foreground">1.</span> Não paga nada adiantado.
              </li>
              <li>
                <span className="text-foreground">2.</span> Não gostou, refazemos com outro conceito.
              </li>
              <li>
                <span className="text-foreground">3.</span> Ainda não gostou, devolvemos cada centavo.
              </li>
            </ol>
            <p className="mt-4 text-center text-[13px] font-medium text-foreground">
              O risco é todo nosso.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
