import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições gerais de uso do site e dos serviços oferecidos pela SIGNA Studio.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 de abril de 2026";

export default function Terms() {
  return (
    <main className="bg-black text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6 sm:py-28">
        <Link
          href="/"
          className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent-light transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
        >
          ← SIGNA Studio
        </Link>

        <article className="mt-10 space-y-8">
          <header>
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Termos de Uso
            </h1>
            <p className="mt-3 text-[13px] text-text-dim">
              Última atualização: {LAST_UPDATED}
            </p>
          </header>

          <Section title="1. Aceitação">
            <p>
              Ao acessar ou usar o site <strong>lp.signastudio.app</strong>{" "}
              (&quot;Site&quot;), você concorda com estes Termos de Uso. Se
              você não concorda com qualquer cláusula, não use o Site.
            </p>
          </Section>

          <Section title="2. Quem somos">
            <p>
              SIGNA Studio é uma agência de criação de sites profissionais com
              entrega em 24 horas úteis. Para informações sobre tratamento de
              dados, consulte nossa{" "}
              <Link
                href="/politica-privacidade"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </Section>

          <Section title="3. Serviços oferecidos">
            <ul className="list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>
                <strong>Reforma Sprint</strong> — Redesign completo de site
                existente em 24 horas úteis. R$ 1.500.
              </li>
              <li>
                <strong>Site Sprint</strong> — Criação de site profissional do
                zero em 24 horas úteis. R$ 2.000.
              </li>
              <li>
                <strong>Manutenção mensal</strong> — Suporte e ajustes
                contínuos. R$ 750/mês, sem fidelidade.
              </li>
            </ul>
            <p className="mt-3">
              Detalhes e escopo são definidos por contrato específico antes da
              execução.
            </p>
          </Section>

          <Section title="4. Garantia tripla">
            <ol className="list-decimal space-y-2 pl-6 marker:text-accent-light">
              <li>
                <strong>Pagamento depois.</strong> Você só paga após aprovar o
                site. Zero adiantamento.
              </li>
              <li>
                <strong>Refazemos.</strong> Se você não aprovar o resultado,
                refazemos com outro conceito sem custo adicional, dentro das
                rodadas previstas em contrato.
              </li>
              <li>
                <strong>Devolução integral.</strong> Se ainda assim não for
                satisfatório, devolvemos 100% do valor pago.
              </li>
            </ol>
            <p className="mt-3">
              A garantia se aplica a vícios de qualidade e desalinhamento
              criativo, não a alterações de escopo ou pedidos contraditórios
              fora do briefing aprovado.
            </p>
          </Section>

          <Section title="5. Prazo de entrega">
            <p>
              O prazo contratual de 24 horas úteis começa a contar a partir da
              aprovação do briefing e fornecimento de todos os assets
              necessários (textos, imagens, acessos). Atrasos no fornecimento
              de informações pelo cliente suspendem o prazo.
            </p>
          </Section>

          <Section title="6. Propriedade intelectual">
            <p>
              Após pagamento integral, todos os direitos autorais sobre o
              site entregue são transferidos ao cliente. Domínio, hospedagem
              e contas associadas ficam em nome e sob controle do cliente.
            </p>
            <p className="mt-3">
              Reservamos o direito de utilizar o site entregue em portfólio,
              redes sociais e materiais comerciais, salvo solicitação expressa
              de confidencialidade do cliente.
            </p>
          </Section>

          <Section title="7. Uso aceitável">
            <p>
              Você concorda em não usar o Site para fins ilícitos, fraudulentos
              ou que possam comprometer sua integridade. Não é permitido:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>Tentar acessar áreas restritas sem autorização.</li>
              <li>
                Submeter formulários automatizados (bots), spam ou conteúdo
                malicioso.
              </li>
              <li>Engenharia reversa ou cópia não autorizada do código.</li>
            </ul>
          </Section>

          <Section title="8. Limitação de responsabilidade">
            <p>
              O Site é fornecido &quot;como está&quot;. Empenhamo-nos em manter
              alta disponibilidade, mas não garantimos operação ininterrupta ou
              livre de erros.
            </p>
            <p className="mt-3">
              Não nos responsabilizamos por danos indiretos, lucros cessantes
              ou perdas decorrentes do uso ou impossibilidade de uso do Site,
              salvo nas hipóteses previstas em lei.
            </p>
          </Section>

          <Section title="9. Modificações">
            <p>
              Podemos atualizar estes Termos a qualquer momento. Mudanças
              materiais entram em vigor 30 dias após publicação. O uso
              continuado após esse prazo implica aceitação dos novos termos.
            </p>
          </Section>

          <Section title="10. Lei aplicável e foro">
            <p>
              Estes Termos são regidos pela legislação brasileira. Fica eleito
              o foro da Comarca de Arujá, São Paulo, para dirimir quaisquer
              controvérsias, com renúncia expressa a qualquer outro, por mais
              privilegiado que seja.
            </p>
          </Section>

          <Section title="11. Contato">
            <p>
              Dúvidas sobre estes Termos:{" "}
              <a
                href="mailto:contact@signastudio.app"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                contact@signastudio.app
              </a>
              .
            </p>
          </Section>
        </article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 leading-[1.7] text-text-muted">
      <h2 className="text-[1.15rem] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="text-[15px]">{children}</div>
    </section>
  );
}
