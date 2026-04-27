"use client";

import { Wallet, Timer, ShieldCheck, MessageCircle, type LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal } from "@/components/animated";

const founders = [
  {
    initial: "JL",
    name: "João Lozano",
    role: "Founder · Estratégia",
    blurb:
      "Cuida do que o site precisa fazer pelo seu negócio: posicionamento, copy que vende, funil que fecha. Vai entender em 15 minutos por que seu site velho não traz cliente.",
    expertise: ["Estratégia", "Copy", "Growth"],
    linkedin: "https://www.linkedin.com/in/joao-gabriel-lozano/",
    photo: "{{LINKEDIN_PHOTO_JOAO}}",
  },
  {
    initial: "VA",
    name: "Vinicius Almeida",
    role: "Co-founder · Direção de Arte",
    blurb:
      "Faz o site parecer que custou 10 vezes mais. Direção de arte, identidade visual, cada pixel pensado pra transmitir autoridade antes do cliente ler uma palavra.",
    expertise: ["Direção de Arte", "Brand", "Design"],
    linkedin: "https://www.linkedin.com/in/vinicius-gayer-a8008813a/",
    photo: "{{LINKEDIN_PHOTO_VINICIUS}}",
  },
  {
    initial: "VF",
    name: "Victor Ferreira",
    role: "Co-founder · Engenharia",
    blurb:
      "Constrói as engrenagens. Web-apps, integrações, ativações. Site que carrega em 2 segundos, conversa com WhatsApp, aparece no Google. Nada quebra.",
    expertise: ["Web-apps", "Integrações", "Performance"],
    linkedin: "https://www.linkedin.com/in/victorferreira40/",
    photo: "{{LINKEDIN_PHOTO_VICTOR}}",
  },
  {
    initial: "EF",
    name: "Enzo de Farias",
    role: "Lead Web Design · Full-stack",
    blurb:
      "Codando web design e full-stack desde 2015. É quem garante que o site fica profissional do código ao último detalhe visual. Cada site passa pela mão dele antes de ir pro ar.",
    expertise: ["Web Design", "Full-stack", "Desde 2015"],
    linkedin: null,
    photo: "{{PHOTO_ENZO}}",
  },
];

const principles: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Wallet,
    title: "Você não paga adiantado.",
    description:
      "Recebemos só quando você aprovar o site. Se não gostar do que entregamos, não paga. Simples assim.",
  },
  {
    Icon: Timer,
    title: "24 horas é prazo, não promessa.",
    description:
      "Você manda o briefing segunda 10h, terça 10h o site está pronto. É contratual. Sem reunião que vira reunião.",
  },
  {
    Icon: ShieldCheck,
    title: "Garantia tripla. Risco zero.",
    description:
      "Não gostou: refazemos com outro conceito. Ainda não gostou: devolvemos cada centavo. O risco é nosso, não seu.",
  },
  {
    Icon: MessageCircle,
    title: "Direto com quem faz.",
    description:
      "Você fala com a equipe que está construindo o seu site. Sem gerente de conta. Sem central de atendimento. WhatsApp direto.",
  },
];

export function Team() {
  return (
    <section
      id="time"
      className="section-radial-br relative overflow-hidden bg-black px-4 py-28 sm:py-36"
      aria-labelledby="team-heading"
    >
      <MeshBackground />

      {/* Ambient warm glow — humanity cue */}
      <div className="glow-warm pointer-events-none absolute right-[-15%] top-[40%] h-[50vh] w-[50vh]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <LineReveal className="mb-20" />

        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">
            03 · Quem constrói
          </span>
          <h2
            id="team-heading"
            className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Quatro nomes.{" "}
            <span className="text-gradient-duo">Quatro WhatsApps abertos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-[1.7] text-text-muted">
            Você não fala com gerente de conta. Não passa por central de atendimento.
            <br />
            <span className="text-foreground">Quem responde no WhatsApp é quem está construindo o seu site.</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-[1.65] text-text-dim italic">
            Quatro pessoas garantindo que sua porta não fique fechada.
          </p>
        </FadeIn>

        {/* 4 cards founders */}
        <StaggerContainer
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {founders.map((founder) => (
            <StaggerItem key={founder.name}>
              <article className="card-glow group relative flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div
                  className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
                  aria-hidden="true"
                >
                  {/*
                    OPERATOR: substituir pelo <Image> com foto real quando entregar.
                    Marker em founder.photo: {{LINKEDIN_PHOTO_*}} ou {{PHOTO_ENZO}}.
                  */}
                  <span className="text-[1.5rem] font-bold tracking-tight text-accent-light/80">
                    {founder.initial}
                  </span>
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="text-center">
                  <h3 className="text-[1.05rem] font-semibold tracking-tight text-foreground">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-accent-light/80">
                    {founder.role}
                  </p>
                </div>

                <p className="mt-5 flex-1 text-center text-[13px] leading-[1.65] text-text-muted">
                  {founder.blurb}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-1.5">
                  {founder.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-text-dim"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-1.5 text-[11px] font-medium text-text-dim transition-colors duration-300 hover:text-accent-light"
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Manifesto contra-mercado (absorvido da About removida) */}
        <FadeIn className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[15px] leading-[1.75] text-text-muted">
              A gente nasceu cansado da equação que o mercado oferece. Agência cobra R$ 8.000 e
              leva 60 dias. Freelance pega R$ 1.000 e some na metade. Wix queima 80 horas suas e
              entrega site amador.
            </p>
            <p className="mt-5 text-[15px] leading-[1.75] text-foreground">
              Os três deixam sua porta meio fechada. A gente abre 24h e fica do outro lado pelo WhatsApp.
            </p>
          </div>
        </FadeIn>

        {/* 4 princípios — risk reversal estruturado, com ícones lucide */}
        <StaggerContainer
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {principles.map(({ Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="card-glow group h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.08] hover:bg-white/[0.04]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-light/10 to-[#f4c89a]/[0.06] border border-white/[0.06] text-accent-light transition-all duration-500 group-hover:border-white/[0.12] group-hover:scale-105">
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-text-muted">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Reforço Wiebe Obj_2 + Sugarman #21 raridade real */}
        <FadeIn className="mt-16">
          <p className="mx-auto max-w-2xl text-center text-[0.95rem] leading-[1.7] text-text-muted italic">
            Quem assina seu site assina com nome.
            <br />
            <span className="text-foreground not-italic font-medium">Nome a gente preserva.</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-center text-[0.95rem] leading-[1.65] text-text-muted">
            A gente é quatro. Não vira agência de cem.
            <br />
            <span className="text-text-dim">Quem entra, entra com nome e WhatsApp dos quatro.</span>
          </p>
        </FadeIn>

        {/* DNA coletivo */}
        <FadeIn className="mt-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.04] bg-white/[0.02] p-8 text-center backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">
              O que a gente respira
            </p>
            <p className="text-[14px] leading-[1.7] text-text-muted">
              Engenharia, design, direção de arte, growth, automação de WhatsApp e e-mail.
              <br />
              <span className="text-foreground">Codando coisa que vende desde 2015.</span>
              {" "}Não é agência. Não é freelance. É time enxuto que entrega como agência grande, no prazo que freelance promete e nunca cumpre.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
