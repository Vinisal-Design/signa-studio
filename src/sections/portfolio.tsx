"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal } from "@/components/animated";

const cases = [
  {
    title: "Clínica Odontológica",
    category: "Odontologia",
    description: "Agendamento direto no WhatsApp, galeria de antes e depois, depoimentos. Aparece quando paciente procura dentista da região no Google.",
    portaRalo: "Antes: paciente abria o site, esperava 5s, ia pro concorrente. Depois: WhatsApp tocando em 3s.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85",
    tags: ["Agendamento", "Aparece no Google"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_ODONTO}}",
  },
  {
    title: "Restaurante Italiano",
    category: "Restaurante",
    description: "Cardápio visual, reserva online e galeria profissional. Aparece no Google Maps quando alguém procura cantina italiana no bairro. Mesa cheia sem depender de indicação.",
    portaRalo: "Antes: cliente novo só por indicação. Depois: mesa cheia direto do Maps.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop&q=85",
    tags: ["Reservas", "Google Maps"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_RESTAURANTE}}",
  },
  {
    title: "Consultório de Psicologia",
    category: "Psicologia",
    description: "Presença online completa: blog, agendamento, conversa direto pelo WhatsApp. Captura quem está procurando ajuda agora, sem precisar de Doctoralia.",
    portaRalo: "Antes: dependente de Doctoralia. Depois: paciente chega direto pelo WhatsApp.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&h=600&fit=crop&q=85",
    tags: ["Blog", "WhatsApp"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_PSICO}}",
  },
  {
    title: "Personal Trainer Premium",
    category: "Fitness",
    description: "Foco em fechamento. Antes e depois, depoimentos em vídeo, CTA direto pro WhatsApp. Pra quem roda anúncio e precisa que o cliente que clica vire aluno.",
    portaRalo: "Antes: clique virava bounce. Depois: clique vira aluno.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=85",
    tags: ["Fechamento", "Anúncio que converte"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_PERSONAL}}",
  },
  {
    title: "Escritório de Advocacia",
    category: "Advocacia",
    description: "Áreas de atuação bem definidas. Aparece quando alguém procura especialista na cidade. Site que transmite autoridade antes do primeiro contato.",
    portaRalo: "Antes: cliente caía no site, ficava em dúvida. Depois: chega no telefone já decidido.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&h=600&fit=crop&q=85",
    tags: ["Autoridade", "Aparece no Google"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_ADVOGADO}}",
  },
  {
    title: "Confeitaria Artesanal",
    category: "Confeitaria",
    description: "Catálogo de produto e pedido online direto pro WhatsApp. Aparece no Google quando alguém procura encomenda na região. Encomenda fechada sem trocar uma mensagem.",
    portaRalo: "Antes: encomenda só por indicação. Depois: pedido novo todo dia direto do Google.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=600&fit=crop&q=85",
    tags: ["Pedido online", "Encomenda direta"],
    metric: "100/100",
    metricLabel: "PageSpeed",
    pageSpeedUrl: "{{PAGESPEED_URL_CONFEITARIA}}",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-radial-tr relative overflow-hidden bg-black px-4 py-28 sm:py-36" aria-labelledby="portfolio-heading">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <LineReveal className="mb-20" />

        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">
            05 · Portas abertas
          </span>
          <h2 id="portfolio-heading" className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Seis portas que abrimos.{" "}
            <span className="text-gradient-accent">Seis ralos que fechamos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-text-muted">
            <span className="text-foreground">Cada site é único. Não tem template.</span>{" "}
            Cada um construído com um objetivo claro: cliente novo todo dia, no mesmo orçamento.
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
                    alt={`Site ${project.category} construído pela SIGNA`}
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/[0.1] backdrop-blur-md px-3 py-1 text-[10px] font-medium text-white/80">
                          {tag}
                        </span>
                      ))}
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
                  <p className="mt-3 border-t border-white/[0.04] pt-3 text-[12px] leading-[1.55] text-text-dim/80 italic">
                    {project.portaRalo}
                  </p>
                  <a
                    href={project.pageSpeedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-light/80 transition-colors hover:text-accent-light"
                    aria-label={`Testar PageSpeed do site ${project.category} ao vivo`}
                  >
                    PageSpeed 100/100. Clica e testa.
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
