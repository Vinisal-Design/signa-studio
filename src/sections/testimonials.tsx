"use client";

import { FadeIn, StaggerContainer, StaggerItem, MeshBackground } from "@/components/animated";

const proofs = [
  {
    metric: "24h",
    label: "Prazo real",
    description:
      "Não é claim de marketing. É prazo contratual. Você manda mensagem hoje, amanhã o site está no ar. Já fizemos pra dentista, advogado, restaurante, psicólogo. Sempre 24h.",
  },
  {
    metric: "1/3",
    label: "Do preço de uma agência",
    description:
      "Agência tradicional cobra R$ 8.000 a R$ 15.000 e leva 60 dias. Mesma qualidade entregue por R$ 1.500-2.000. Você paga 1/3, recebe 60x mais rápido.",
  },
  {
    metric: "0",
    label: "Pagamento adiantado",
    description:
      "Você só paga quando ver o site pronto e aprovar. Não gostou? Não paga. Quem assume o risco somos nós, não você. É assim que tem que ser.",
  },
  {
    metric: "100%",
    label: "Devolvemos cada centavo",
    description:
      "Não gostou: refazemos com outro conceito. Ainda não gostou: devolvemos cada centavo. Por escrito, em contrato. Você não tem como perder.",
  },
  {
    metric: "Direto",
    label: "WhatsApp com quem coda",
    description:
      "Você fala com quem está fazendo seu site. Sem gerente de conta, sem central. Pediu mudança? Mudamos. Tem dúvida? Respondemos. Tudo no WhatsApp.",
  },
  {
    metric: "1º",
    label: "Aparece quando procuram",
    description:
      "Site no jeito de aparecer quando o cliente procura no Google. Quem busca, te encontra. Sem você precisar gastar fortuna em anúncio pra existir.",
  },
];

export function Testimonials() {
  return (
    <section id="provas" className="section-radial-bl relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="proof-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">
            06 · Provas
          </span>
          <h2 id="proof-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            6 portas que{" "}
            <span className="text-gradient-accent">pararam de vazar cliente.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Você não precisa entender de tecnologia. A gente entende.
            Você precisa de cliente fechando todo dia. A gente entrega o site que faz isso.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {proofs.map((proof) => (
            <StaggerItem key={proof.label}>
              <div className="card-glow group flex h-full flex-col rounded-2xl bg-white/[0.02] border border-white/[0.04] p-7 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.08]">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold stat-number text-foreground">
                    {proof.metric}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.12em] text-accent-light font-semibold">
                    {proof.label}
                  </div>
                </div>

                <p className="mt-5 flex-1 text-[14px] leading-[1.7] text-text-muted">
                  {proof.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14 text-center">
          <p className="text-[14px] text-text-muted leading-relaxed">
            Tem dúvida? <span className="text-foreground">Manda mensagem.</span> A gente
            faz um diagnóstico do seu negócio e mostra na prática como o site vai funcionar
            pra você.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
