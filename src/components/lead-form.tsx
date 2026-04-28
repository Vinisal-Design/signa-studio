"use client";

import { useId, useState } from "react";
import { ensurePixelLoaded, eventUuid, readFbCookies } from "@/components/meta-pixel";

const ENDPOINT =
  process.env.NEXT_PUBLIC_LP_LEAD_ENDPOINT ||
  "https://ops.signastudio.app/api/lp-lead";

type SubmitState = "idle" | "submitting" | "success" | "error";
type LeadTier = "HOT" | "WARM" | "COLD" | "DISQUALIFIED" | "UNSCORED";

type UTMs = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

function captureUTMs(): UTMs {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: UTMs = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ] as const) {
    const value = params.get(key);
    if (value) out[key] = value;
  }
  return out;
}

// Business types — broad ICP per docs/signa-studios-plg-strategy.md adapted.
// Values match the worker scoring matrix in routes/lp-lead.js. Adding/renaming
// here without updating the worker = silent score fallback to 0.
const businessTypes = [
  { value: "", label: "Tipo de negócio" },
  { value: "dentista", label: "Dentista / clínica odontológica" },
  { value: "advogado", label: "Advogado / escritório" },
  { value: "estetica", label: "Clínica de estética" },
  { value: "psicologo", label: "Psicólogo / clínica" },
  { value: "arquiteto", label: "Arquiteto / interiores" },
  { value: "nutricionista", label: "Nutricionista" },
  { value: "personal", label: "Personal trainer / fitness" },
  { value: "restaurante", label: "Restaurante / food" },
  { value: "coach", label: "Coach / mentor / consultor" },
  { value: "outro_profissional", label: "Outro profissional liberal" },
  { value: "outro_negocio", label: "Outro negócio local" },
];

const siteStatuses = [
  { value: "", label: "Como está seu site hoje?" },
  { value: "no_site", label: "Não tenho site" },
  { value: "outdated", label: "Tenho, mas está desatualizado" },
  { value: "not_on_google", label: "Tenho, mas não aparece no Google" },
  { value: "satisfied", label: "Tenho e está bom" },
];

const acquisitionChannels = [
  { value: "", label: "Como seus clientes chegam hoje?" },
  { value: "referral_only", label: "Só por indicação" },
  { value: "instagram", label: "Pelo Instagram" },
  { value: "google_or_site", label: "Pelo Google ou site" },
  { value: "none_yet", label: "Ainda não recebo online" },
];

const FIELD_BASE =
  "w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[14px] text-foreground placeholder:text-text-dim transition-[border-color,background-color] focus:border-accent-light/60 focus:bg-white/[0.04] focus:outline-none";

/**
 * LeadForm — secondary capture path. WhatsApp remains the primary CTA on the
 * LP; this form exists for prospects who prefer email or arrive outside
 * business hours.
 *
 * Contract: documented in D:/prism/architecture/lp-integration.md.
 *  - Honeypot field `website_url` must stay empty (bots fill it → silent 200).
 *  - UTMs auto-captured from URL on mount.
 *  - LGPD consent checkbox required by Brazilian law.
 *  - Success state replaces form (no redirect — preserves URL/UTMs for analytics).
 */
export function LeadForm() {
  const baseId = useId();
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [tier, setTier] = useState<LeadTier>("UNSCORED");
  // Lazy init: SSR returns {} (no window), client first render captures.
  // No setState in effect → no cascading render warning.
  const [utms] = useState<UTMs>(() => captureUTMs());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const businessType = String(fd.get("business_type") || "").trim() || undefined;
    // Single dedup key: same UUID rides on the Pixel `Lead` event in the
    // browser AND on the CAPI `Lead` event dispatched server-side from the
    // worker. Meta dedupes by event_id+event_name so each submission counts
    // exactly once even when both signals arrive.
    const eventId = eventUuid();
    const fbCookies = readFbCookies();
    const landingPath =
      typeof window !== "undefined" ? window.location.pathname : "/";
    const landingUrl =
      typeof window !== "undefined"
        ? window.location.origin + window.location.pathname + window.location.search
        : undefined;
    const payload = {
      source: "lp-form" as const,
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || undefined,
      // Legacy `niche` mirrored from business_type — preserves existing
      // analytics dashboards filtering by `niche` while we migrate them to
      // `business_type`. Worker treats both as equivalent.
      niche: businessType,
      business_type: businessType,
      site_status: String(fd.get("site_status") || "").trim() || undefined,
      acquisition_channel:
        String(fd.get("acquisition_channel") || "").trim() || undefined,
      message: String(fd.get("message") || "").trim() || undefined,
      consent_lgpd: fd.get("consent_lgpd") === "on",
      website_url: String(fd.get("website_url") || ""), // honeypot
      referrer: typeof document !== "undefined" ? document.referrer : "",
      landing_page: landingPath,
      // Full URL (with UTM querystring) is what Meta wants in event_source_url
      // for proper attribution. Worker forwards as-is to CAPI.
      landing_page_url: landingUrl,
      // Pixel cookies — passed straight through to CAPI for the highest match
      // quality. Meta only honors them when present; missing cookies just
      // lower match rate, never block the event.
      fbp: fbCookies.fbp,
      fbc: fbCookies.fbc,
      // Dedup key for browser↔server reconciliation.
      event_id: eventId,
      ...utms,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const code = typeof data.error === "string" ? data.error : "";
        setError(mapError(code, res.status));
        setState("error");
        return;
      }

      const tierFromServer =
        typeof data.tier === "string" ? (data.tier as LeadTier) : "UNSCORED";
      setTier(tierFromServer);
      setState("success");
      // Browser-side `Lead` with the same eventID the worker uses for CAPI.
      // Meta dedupes server+browser when (event_name, event_id) match.
      // content_category carries the server-computed tier so Ads can build
      // a lookalike audience seeded specifically on HOT leads.
      const fbq = window.fbq;
      if (typeof fbq === "function") {
        fbq(
          "track",
          "Lead",
          {
            content_name: "LP Form",
            content_category: tierFromServer,
            value: tierFromServer === "HOT" ? 1 : 0,
            currency: "BRL",
          },
          { eventID: eventId },
        );
      }
    } catch {
      setError("Falha de rede. Verifique sua conexão e tente novamente.");
      setState("error");
    }
  }

  if (state === "success") {
    // PLG promise calibrated by tier returned from worker. HOT prospects
    // get the 4h SLA per strategy §6.1; everyone else gets the 24h promise
    // that lives in every other surface (hero, llms.txt, schema). Single
    // contractual truth: 24h baseline, faster for high-signal leads.
    const slaCopy =
      tier === "HOT"
        ? "Em até 4 horas úteis te enviamos no WhatsApp o link do seu site pronto. Você abre, vê, decide."
        : tier === "DISQUALIFIED"
        ? "Te chamamos no WhatsApp em breve para entender melhor seu cenário antes de partir pro site."
        : "Em até 24 horas úteis te enviamos no WhatsApp o link do seu site pronto. Você abre, vê, decide.";
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-accent-light/20 bg-accent/[0.05] p-7 text-center"
      >
        <p className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          Recebemos. A gente já começou.
        </p>
        <p className="mt-2 text-[14px] leading-[1.6] text-text-muted">{slaCopy}</p>
        <p className="mt-3 text-[12px] leading-[1.5] text-text-dim">
          Você não paga nada agora. Vai pagar só se gostar do que viu.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={ensurePixelLoaded}
      noValidate
      className="space-y-3.5 text-left"
      aria-label="Formulário de contato SIGNA Studio"
    >
      {/* Honeypot — invisible to humans (positioned offscreen, focusable=false,
          no autocomplete), bots fill anything resembling a URL field. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor={`${baseId}-website`}>Não preencha este campo</label>
        <input
          type="text"
          id={`${baseId}-website`}
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${baseId}-name`} className="sr-only">
            Seu nome
          </label>
          <input
            id={`${baseId}-name`}
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            maxLength={100}
            className={FIELD_BASE}
          />
        </div>
        <div>
          <label htmlFor={`${baseId}-email`} className="sr-only">
            Seu e-mail
          </label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            maxLength={200}
            autoComplete="email"
            className={FIELD_BASE}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${baseId}-phone`} className="sr-only">
          WhatsApp (recomendado — é por onde mandamos o site pronto)
        </label>
        <input
          id={`${baseId}-phone`}
          name="phone"
          type="tel"
          placeholder="WhatsApp (recomendado — é por onde mandamos o site pronto)"
          maxLength={30}
          autoComplete="tel"
          className={FIELD_BASE}
        />
      </div>

      {/* PLG qualification trio. All three are optional — strategy ICP
          stays broad. Each select that *is* answered raises the lead score
          server-side; ad-paid traffic typically fills all three (the
          message match from the ad sets the expectation). */}
      <div className="grid gap-3.5 sm:grid-cols-3">
        <div>
          <label htmlFor={`${baseId}-business`} className="sr-only">
            Tipo de negócio
          </label>
          <select
            id={`${baseId}-business`}
            name="business_type"
            defaultValue=""
            className={FIELD_BASE}
          >
            {businessTypes.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${baseId}-site-status`} className="sr-only">
            Como está seu site hoje?
          </label>
          <select
            id={`${baseId}-site-status`}
            name="site_status"
            defaultValue=""
            className={FIELD_BASE}
          >
            {siteStatuses.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${baseId}-acquisition`} className="sr-only">
            Como seus clientes chegam hoje?
          </label>
          <select
            id={`${baseId}-acquisition`}
            name="acquisition_channel"
            defaultValue=""
            className={FIELD_BASE}
          >
            {acquisitionChannels.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${baseId}-message`} className="sr-only">
          Algo específico que devemos saber? (opcional)
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          placeholder="Algo específico que devemos saber? (opcional)"
          rows={3}
          maxLength={2000}
          className={`${FIELD_BASE} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 pt-1 text-[13px] leading-[1.5] text-text-muted">
        <input
          type="checkbox"
          name="consent_lgpd"
          required
          className="mt-1 h-4 w-4 cursor-pointer accent-accent-light"
        />
        <span>
          Autorizo a SIGNA Studio a usar meus dados para construir uma demo
          gratuita do meu site e me contatar via WhatsApp ou e-mail. Ciente da{" "}
          <a
            href="/politica-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-[13px] text-red-200"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="cta-halo cta-sheen group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-background transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {state === "submitting" ? "Enviando…" : "Quero ver meu site grátis em 24h"}
      </button>
    </form>
  );
}

function mapError(code: string, status: number): string {
  switch (code) {
    case "validation:email_required":
      return "Informe seu e-mail.";
    case "validation:email_invalid":
      return "E-mail inválido. Verifique e tente novamente.";
    case "validation:consent_lgpd_required":
      return "Você precisa aceitar os termos para continuar.";
    case "validation:name_invalid":
      return "Nome muito longo (máximo 100 caracteres).";
    case "validation:message_invalid":
      return "Mensagem muito longa (máximo 2000 caracteres).";
    case "validation:business_type_invalid":
    case "validation:site_status_invalid":
    case "validation:acquisition_channel_invalid":
      return "Verifique as opções selecionadas e tente novamente.";
    case "rate_limit":
      return "Você atingiu o limite. Tente novamente em 1 hora ou chame no WhatsApp.";
    default:
      if (status >= 500) return "Erro no servidor. Tente novamente em instantes.";
      return "Não foi possível enviar agora. Tente novamente.";
  }
}
