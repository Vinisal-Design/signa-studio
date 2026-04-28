"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FadeIn,
  MeshBackground,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated";

const faqs = [
  {
    q: "Como assim demo grátis? Vocês fazem o site sem eu pagar?",
    a: "Sim. A gente constrói o site da sua empresa em até 24h úteis a partir de um briefing curto no WhatsApp. Você recebe o link, abre, navega, vê como ficou — e só então decide se quer ficar com ele. Se gostar, paga R$ 1.500 (reforma) ou R$ 2.000 (site novo) e o site vai pra produção no seu domínio. Se não gostar, refazemos com outro conceito sem custo. Se ainda não gostar, custou zero. Sem cartão, sem contrato, sem pegadinha.",
  },
  {
    q: "Em quanto tempo o site se paga?",
    a: "Depende do seu ticket médio. Pra dentista, geralmente 3 procedimentos. Pra advogado, 1 caso. Pra restaurante, cerca de 25 reservas online. Faça a conta: quantos clientes novos você precisa fechar pra cobrir R$ 2.000? Se for menos de 5, o site se paga no primeiro mês.",
  },
  {
    q: "24 horas é prazo de verdade ou enrolação?",
    a: "É prazo de verdade, escrito em contrato. Você manda WhatsApp segunda 10h com as informações que precisamos. Terça 10h o site está no WhatsApp pra você ver — não pra você pagar. Já fizemos isso dezenas de vezes. Se não cumprirmos o prazo, você não tem nada a perder: nunca pagou nada.",
  },
  {
    q: "R$ 2.000 num site profissional? Onde está o pega?",
    a: "Não tem pega. Agência tradicional cobra R$ 8.000-15.000 porque tem sala em prédio comercial, gerente de conta, 4 reuniões por projeto, 6 níveis de aprovação. Somos uma equipe enxuta sem essa estrutura. Cortamos o que não vira pixel ou linha. O resultado entregue é o mesmo, o preço é 1/3.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Como você abre o link e vê o site antes de pagar nada, o cenário 'não gostei' acontece sem dinheiro envolvido. Tem 2 rodadas de ajustes inclusas se quiser refinar. Se mesmo assim não curtir, refazemos com outro conceito sem cobrar nada. Se ainda não gostar, custou zero. Money-back de 100% existe contratualmente pro caso raro de você já ter pago — mas como o pagamento normalmente é depois de aprovar, na prática essa cláusula é redundância.",
  },
  {
    q: "Já tive freelance que sumiu depois de pagar. Como sei que vocês ficam?",
    a: "Trauma justo. Por isso a gente não recebe nada antes da entrega. E você não fala com gerente de conta, fala direto com quem está codando o seu site no WhatsApp. Site no ar com domínio e hospedagem no seu nome, sob sua conta. Se a gente sumir amanhã (não vamos), seu site continua de pé. Você não fica refém de ninguém.",
  },
  {
    q: "Meu site vai ficar igual aos outros que vocês fazem?",
    a: "Não. Cada site é desenhado do zero, com cara própria. A gente não usa template. Mesma equipe, mas cada projeto tem visual, texto e estrutura únicos pro seu negócio. Você passa o link de 3 sites que admira, a gente entende o que faz sentido pro seu, e constrói algo seu.",
  },
  {
    q: "Eu não entendo de tecnologia. Vou conseguir mexer depois?",
    a: "Sim. Entregamos com painel simples pra trocar texto e foto sozinho. E se preferir não tocar, o plano de manutenção (R$ 750/mês, sem fidelidade) cuida de tudo. Manda WhatsApp pedindo a mudança, fazemos pra você. Site sempre atualizado sem você se preocupar.",
  },
  {
    q: "Já rodo ads no Meta/Google. Como o site entra nessa equação?",
    a: "Se você roda ads e cai num site amador, está queimando dinheiro. O cliente clica, vê algo de qualidade duvidosa, fecha a aba e vai pro concorrente. Site bom transforma o mesmo tráfego que você já paga em mais venda fechada. Não é despesa nova, é alavancagem do investimento que você já faz.",
  },
  {
    q: "Reformar meu site atual ou fazer um novo?",
    a: "Se a estrutura está ok mas o visual está datado e a velocidade ruim, a Reforma (R$ 1.500) resolve. Se o site é antigo demais, sem mobile decente, sem SEO, o Site Sprint novo (R$ 2.000) é o caminho. Manda o link no WhatsApp, fazemos diagnóstico honesto em 2 horas. Sem custo, sem compromisso.",
  },
  {
    q: "Atendem fora do Brasil?",
    a: "Sim. Trabalhamos em PT-BR, EN e ES. Mesma qualidade, mesmo prazo, mesma garantia. Manda mensagem que conversamos, mesmo que você esteja em Lisboa, Miami ou Buenos Aires.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Stable id prefix for ARIA (one per mounted FAQ component) — pairs each
  // button with its panel via aria-controls / aria-labelledby.
  const baseId = useId();

  return (
    <section
      id="faq"
      className="section-radial-br relative overflow-hidden bg-black px-4 py-28 sm:py-36"
      aria-labelledby="faq-heading"
    >
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-2xl">
        <FadeIn className="text-center">
          <span className="eyebrow-mono text-text-muted">07 · Dúvidas</span>
          <h2
            id="faq-heading"
            className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Perguntas que você está fazendo agora.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            Respostas diretas. Sem rodeio.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-2.5" stagger={0.06}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <StaggerItem key={faq.q}>
                <div className="card-glow overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02] transition-[border-color] duration-300 ease-out hover:border-white/[0.08]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-inset"
                    >
                      <span className="pr-4 text-[14px] font-semibold tracking-tight">
                        {faq.q}
                      </span>
                      <motion.span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.03]"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease }}
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-text-muted"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={panelId}
                        // ARIA APG disclosure pattern: aria-controls on button
                        // is sufficient; role="region" would add a needless
                        // landmark to the AT navigation list.
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[13px] leading-[1.7] text-text-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
