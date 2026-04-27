"use client";

import { FadeIn, MeshBackground, LineReveal } from "@/components/animated";

const team = [
  {
    name: "Lucas Ferreira",
    role: "Fundador & Design Lead",
    bio: "8 anos criando interfaces que convertem. Especialista em design de alta performance para negocios locais.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=85",
  },
  {
    name: "Marina Costa",
    role: "Co-fundadora & Estrategia",
    bio: "Ex-growth de startup unicornio. Transformou o processo de criacao de sites em um metodo replicavel e veloz.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face&q=85",
  },
];

const values = [
  { number: "200+", label: "Projetos entregues" },
  { number: "24h", label: "Tempo medio de entrega" },
  { number: "98%", label: "Taxa de aprovacao na 1a versao" },
  { number: "0", label: "Pedidos de reembolso" },
];

export function About() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <LineReveal className="mb-20" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
              Quem somos
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              Dois especialistas,{" "}
              <span className="italic font-normal text-text-muted">um metodo.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-text-muted">
              A SIGNA nasceu de uma frustracao: profissionais incriveis sendo prejudicados
              por sites amadores ou por agencias que cobram caro e entregam devagar.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-text-muted">
              Desenvolvemos o <span className="text-foreground font-medium">Metodo Sprint 24</span>,
              um processo enxuto que elimina reunioes desnecessarias, burocracia e overhead.
              O resultado: sites profissionais de alta qualidade entregues em 24 horas, por uma
              fracao do preco de mercado.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-text-muted">
              Ja transformamos a presenca digital de mais de 200 profissionais em todo o Brasil.{" "}
              <span className="text-foreground font-medium">Seu negocio pode ser o proximo.</span>
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {values.map((v) => (
                <div key={v.label}>
                  <div className="text-2xl font-bold tracking-tight">{v.number}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.1em] text-text-dim">{v.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {team.map((person) => (
                <div key={person.name} className="group">
                  <div className="card-glow relative overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={person.image}
                      alt={`${person.name}, ${person.role} na SIGNA STUDIO`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      loading="lazy"
                      width={400}
                      height={533}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-[15px] font-semibold">{person.name}</h3>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-accent-light">{person.role}</p>
                      <p className="mt-2 text-[12px] leading-relaxed text-white/60">{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
