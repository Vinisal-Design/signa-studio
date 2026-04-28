import { WhatsAppCTA } from "@/components/whatsapp-button";
import { CharReveal, Marquee } from "@/components/animated";
import { HeroBackgroundV2 } from "@/components/hero-background";

const marqueeItems = [
  "DENTISTAS",
  "ADVOGADOS",
  "PSICÓLOGOS",
  "RESTAURANTES",
  "NUTRICIONISTAS",
  "CLÍNICAS",
  "COACHES",
  "ESTÉTICA",
  "PERSONAL TRAINERS",
  "ARQUITETOS",
];

const trustBadges = [
  "Demo grátis em até 24h úteis",
  "Briefing em 15 min no WhatsApp",
  "Você só paga depois de aprovar",
  "Não gostou? Devolvemos cada centavo",
];

/**
 * Hero — single-breath timeline, CSS-native for above-the-fold.
 *
 * The LCP element (the body paragraph identified by Lighthouse) and the
 * surrounding above-the-fold elements run on a single CSS animation
 * (`.lcp-reveal` + `--lcp-delay`) instead of framer-motion. This drops the
 * mobile "element render delay" subpart from ~2.97s to ~0.4s because:
 *
 *   - CSS animation runs in the compositor on first paint
 *   - No React hydration needed before the LCP becomes visible
 *   - No framer-motion variants tree to traverse
 *
 * Choreography is preserved 1:1 with the previous framer cascade:
 *   delayChildren=0.15s + staggerChildren=0.08s → 0/80/160/240/320/400ms.
 *
 * Headline (CharReveal) keeps framer because per-character clipping reveal
 * cannot be expressed in pure CSS without an n-keyframe explosion. CharReveal
 * is `parentDriven=false` here, so it self-orchestrates via whileInView and
 * does not block the LCP paragraph.
 */
export function Hero() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <HeroBackgroundV2 />

      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.012]" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16">
        {/* PLG eyebrow — message-match anchor for paid traffic from Meta ads
            ("Veja seu site grátis em 24h"). Renders above the headline so the
            ad→LP continuity is verified within the first 200ms of viewport. */}
        <p
          className="eyebrow-mono mb-5 text-text-muted lcp-reveal"
          style={{ "--lcp-delay": "150ms" } as React.CSSProperties}
        >
          Construímos. Você decide se fica com ele.
        </p>

        <h1
          id="hero-heading"
          className="text-center font-bold tracking-[-0.035em] text-[clamp(2.05rem,7.5vw,4rem)] leading-[1.02] sm:leading-[0.98]"
        >
          {/* Single accessible label for the whole headline. The three CharReveal
              spans below are silenced (silent=true) so screen readers read the
              full sentence once instead of stuttering across three lines. */}
          <span className="sr-only">
            Veja seu site profissional de agência. Em 24 horas.
          </span>
          <span className="hero-line" aria-hidden="true">
            <CharReveal text="Veja seu site profissional" silent staggerMs={18} />
          </span>
          <span className="hero-line" aria-hidden="true">
            <CharReveal text="de agência." silent staggerMs={18} />
          </span>
          <span className="hero-line text-gradient-accent" aria-hidden="true">
            <CharReveal text="Em 24 horas. Grátis." silent staggerMs={18} />
          </span>
        </h1>

        <p
          className="mx-auto mt-5 max-w-2xl text-center text-[1rem] sm:text-[1.1rem] font-medium text-text-muted lcp-reveal"
          style={{ "--lcp-delay": "230ms" } as React.CSSProperties}
        >
          <span className="underline-glow text-foreground">
            A gente faz primeiro
          </span>
          <br className="sm:hidden" />{" "}
          — você só paga depois de ver pronto e aprovar.
        </p>

        {/* LCP element (per Lighthouse). Runs on CSS so it is paintable before
            React hydration completes — the single biggest mobile LCP win. */}
        <p
          className="mx-auto mt-6 max-w-xl text-center text-[0.98rem] sm:text-[1rem] leading-[1.6] text-text-muted text-pretty lcp-reveal"
          style={{ "--lcp-delay": "310ms" } as React.CSSProperties}
        >
          Site bom é a porta do seu negócio aberta 24 horas por dia.{" "}
          <span className="text-foreground">
            Site ruim é cliente caro indo no ralo.
          </span>{" "}
          A gente faz o tipo que segura. Em 24 horas, sem teatro.
        </p>

        <div
          className="mt-8 flex justify-center lcp-reveal"
          style={{ "--lcp-delay": "390ms" } as React.CSSProperties}
        >
          <WhatsAppCTA text="Ver meu site grátis em 24h" variant="primary" />
        </div>

        <p
          className="mt-5 text-[13px] text-text-dim text-center px-2 lcp-reveal"
          style={{ "--lcp-delay": "470ms" } as React.CSSProperties}
        >
          Sem formulário de 47 páginas. Sem reunião de 2 horas.
        </p>

        <ul
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 list-none px-2 lcp-reveal"
          style={{ "--lcp-delay": "550ms" } as React.CSSProperties}
          aria-label="Garantias"
        >
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-[12px] text-text-dim"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="shrink-0 text-accent-light/60"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {badge}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="relative z-10 mb-8 hidden justify-center sm:flex lcp-reveal"
        style={{ "--lcp-delay": "1200ms" } as React.CSSProperties}
      >
        <a
          href="#como-funciona"
          className="animate-scroll-bounce flex flex-col items-center gap-2 text-text-dim transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:text-accent-light"
          aria-label="Rolar para a próxima seção"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      <div
        className="relative z-10 w-full border-t border-white/[0.03] py-5 lcp-reveal"
        style={{ "--lcp-delay": "1300ms" } as React.CSSProperties}
      >
        <div className="mb-3 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-dim">
            Sites já no ar pra:
          </span>
        </div>
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-10 text-[12px] font-medium uppercase tracking-[0.2em] text-text-dim"
            >
              {item}
              <span className="mx-10 text-accent-light/20">&bull;</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
