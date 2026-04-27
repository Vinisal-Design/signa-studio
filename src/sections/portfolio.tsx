"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal } from "@/components/animated";

const cases = [
  {
    title: "Dra. Camila Andrade",
    category: "Odontologia",
    description: "Site profissional com agendamento integrado e depoimentos. Em 60 dias, os agendamentos triplicaram.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85",
    tags: ["Landing Page", "Agendamento"],
    result: "+340%",
    resultLabel: "agendamentos",
  },
  {
    title: "Trattoria del Nonno",
    category: "Restaurante",
    description: "Cardapio visual, sistema de reserva e galeria profissional. Reservas online dobraram no primeiro mes.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop&q=85",
    tags: ["Reservas", "Google"],
    result: "+127%",
    resultLabel: "reservas",
  },
  {
    title: "Renata Vasconcelos",
    category: "Psicologia",
    description: "Presenca online completa com blog e agendamento. 47 pacientes novos em 3 meses via Google.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=600&fit=crop&q=85",
    tags: ["SEO", "Blog"],
    result: "47",
    resultLabel: "novos pacientes",
  },
  {
    title: "Studio Forma",
    category: "Personal Trainer",
    description: "Foco em depoimentos, fotos de resultado e CTA claro. Taxa de conversao quase dobrou.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=85",
    tags: ["Conversao", "Leads"],
    result: "+89%",
    resultLabel: "conversao",
  },
  {
    title: "Costa & Lima Advocacia",
    category: "Advocacia",
    description: "SEO local com areas de atuacao bem definidas. Primeira posicao no Google em 45 dias.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=600&fit=crop&q=85",
    tags: ["SEO Local", "Google"],
    result: "#1",
    resultLabel: "no Google",
  },
  {
    title: "Sabor & Arte Confeitaria",
    category: "Confeitaria",
    description: "Catalogo e pedido online 24h. Encomendas triplicaram em 2 meses.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=600&fit=crop&q=85",
    tags: ["E-commerce", "Pedidos"],
    result: "+215%",
    resultLabel: "pedidos",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="portfolio-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <LineReveal className="mb-20" />

        <FadeIn className="text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
            Cases de sucesso
          </span>
          <h2 id="portfolio-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Resultados reais de{" "}
            <span className="text-gradient-accent">negocios reais</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-text-muted">
            Cada site que criamos tem um objetivo: gerar mais clientes para o seu negocio.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {cases.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="card-glow group relative h-full overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.04] transition-all duration-500 hover:border-white/[0.08]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.1] backdrop-blur-md px-3 py-1 text-[10px] font-medium text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{project.result}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/60">{project.resultLabel}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-light">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 text-[1.05rem] font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
