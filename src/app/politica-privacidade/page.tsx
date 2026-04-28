import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a SIGNA Studio coleta, usa e protege seus dados pessoais. Conformidade LGPD, GDPR, CCPA.",
  alternates: { canonical: "/politica-privacidade" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 de abril de 2026";

export default function PrivacyPolicy() {
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
              Política de Privacidade
            </h1>
            <p className="mt-3 text-[13px] text-text-dim">
              Última atualização: {LAST_UPDATED}
            </p>
          </header>

          <Section title="1. Quem somos">
            <p>
              SIGNA Studio é uma agência de criação de sites com sede em Arujá,
              São Paulo, Brasil. Esta política descreve como coletamos, usamos
              e protegemos seus dados pessoais quando você visita{" "}
              <strong>lp.signastudio.app</strong> ou se comunica conosco.
            </p>
          </Section>

          <Section title="2. Encarregado de Dados (DPO)">
            <p>
              <strong>João Lozano</strong> ·{" "}
              <a
                href="mailto:contact@signastudio.app"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                contact@signastudio.app
              </a>
            </p>
          </Section>

          <Section title="3. Quais dados coletamos">
            <ul className="list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>
                <strong>Dados de identificação</strong> que você nos fornece
                voluntariamente: nome, e-mail, telefone, área de atuação,
                mensagem opcional.
              </li>
              <li>
                <strong>Dados de navegação</strong>: endereço IP (armazenado em
                hash SHA-256, nunca em texto plano), user agent, país de origem
                (via cabeçalho do servidor).
              </li>
              <li>
                <strong>Dados de campanha</strong>: parâmetros UTM
                (utm_source, utm_medium, utm_campaign, utm_content, utm_term),
                URL de origem (referrer), página de aterrissagem.
              </li>
              <li>
                <strong>Dados de consentimento</strong>: registro do momento e
                escopo do seu aceite, para fins de auditoria.
              </li>
            </ul>
          </Section>

          <Section title="4. Base legal (LGPD Art. 7)">
            <ul className="list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>
                <strong>Consentimento</strong> (Art. 7, I) — para envio de
                comunicação comercial e marketing.
              </li>
              <li>
                <strong>Execução de contrato</strong> (Art. 7, V) — para
                entrega do serviço contratado.
              </li>
              <li>
                <strong>Legítimo interesse</strong> (Art. 7, IX) — para
                segurança da aplicação, prevenção de fraude e melhoria do
                produto, sempre balanceado com seus direitos.
              </li>
            </ul>
          </Section>

          <Section title="5. Para que usamos seus dados">
            <ul className="list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>Responder ao seu contato e enviar orçamento.</li>
              <li>Entregar o serviço de criação de site.</li>
              <li>
                Melhorar o produto e a experiência (apenas dados agregados e
                anonimizados).
              </li>
              <li>
                Cumprir obrigações legais (fiscais, contratuais, regulatórias).
              </li>
            </ul>
          </Section>

          <Section title="6. Com quem compartilhamos">
            <p>Compartilhamos dados estritamente com prestadores essenciais:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>
                <strong>Cloudflare</strong> (infraestrutura, DNS, edge
                functions) — Estados Unidos / Global.
              </li>
              <li>
                <strong>Vercel</strong> (hospedagem do site) — Estados Unidos.
              </li>
              <li>
                <strong>Resend</strong> (envio de e-mail transacional) —
                Estados Unidos.
              </li>
            </ul>
            <p className="mt-3">
              Nenhum dado é vendido ou cedido para fins publicitários de
              terceiros. Transferências internacionais ocorrem sob cláusulas
              contratuais padrão e adequação ANPD.
            </p>
          </Section>

          <Section title="7. Seus direitos (LGPD Art. 18)">
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-accent-light">
              <li>Confirmação da existência de tratamento.</li>
              <li>Acesso aos seus dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados.</li>
              <li>Portabilidade dos dados a outro fornecedor.</li>
              <li>Eliminação dos dados tratados com base em consentimento.</li>
              <li>Informação sobre compartilhamentos.</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer direito, envie e-mail para{" "}
              <a
                href="mailto:contact@signastudio.app?subject=LGPD%20Request"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                contact@signastudio.app
              </a>{" "}
              com o assunto <em>&quot;LGPD Request&quot;</em>. Respondemos em
              até 15 dias úteis.
            </p>
          </Section>

          <Section title="8. Retenção de dados">
            <p>
              Mantemos seus dados pelo período necessário ao cumprimento das
              finalidades declaradas, ou até que você solicite a eliminação,
              o que ocorrer primeiro. Logs de comunicação podem ser retidos por
              até 5 anos para cumprimento de obrigações fiscais e legais.
            </p>
          </Section>

          <Section title="9. Cookies e tecnologias de rastreamento">
            <p>
              Utilizamos cookies estritamente necessários para funcionamento do
              site (sessão, preferências). Cookies de análise (Google Analytics
              ou Plausible) e de marketing (Meta Pixel) só são carregados após
              seu consentimento explícito via banner.
            </p>
            <p className="mt-3">
              Você pode revogar o consentimento a qualquer momento clicando em{" "}
              <strong>&quot;Preferências de cookies&quot;</strong> no rodapé.
            </p>
          </Section>

          <Section title="10. Segurança">
            <p>
              Implementamos medidas técnicas e organizacionais para proteger
              seus dados: TLS 1.3 em todas as conexões, hash SHA-256 de IPs,
              cabeçalhos HSTS / CSP / X-Frame-Options, isolamento de ambiente,
              acesso por privilégio mínimo, auditoria contínua.
            </p>
          </Section>

          <Section title="11. Incidentes">
            <p>
              Em caso de incidente de segurança que afete seus dados,
              comunicamos a ANPD e os titulares afetados em prazo razoável,
              conforme exigido pela LGPD (Art. 48).
            </p>
          </Section>

          <Section title="12. Reclamações">
            <p>
              Você pode registrar reclamação na Autoridade Nacional de
              Proteção de Dados:{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                www.gov.br/anpd
              </a>
              .
            </p>
          </Section>

          <Section title="13. Mudanças nesta política">
            <p>
              Podemos atualizar esta política periodicamente. Mudanças
              materiais serão comunicadas por e-mail (se aplicável) e a data de
              &quot;Última atualização&quot; no topo será revisada.
            </p>
          </Section>

          <footer className="border-t border-white/[0.06] pt-8 text-[13px] text-text-dim">
            <p>
              Dúvidas? Escreva para{" "}
              <a
                href="mailto:contact@signastudio.app"
                className="text-accent-light underline-offset-4 hover:underline"
              >
                contact@signastudio.app
              </a>
              .
            </p>
          </footer>
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
