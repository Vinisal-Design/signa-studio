"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WordIllumination } from "@/components/animated";

const ease = [0.22, 1, 0.36, 1] as const;

// Defined once at module scope — avoids prop reference churn across motion.*
// children that share this preset.
const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
} as const;

const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconTrophy = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const gains = [
  {
    Icon: IconZap,
    label: "Velocidade",
    headline: "Se carrega devagar, você já perdeu",
    body: "Antes do cliente decidir esperar, ele já desistiu. Site lento é cliente caro indo no ralo.",
    proof: "53% dos clientes fecham o site se ele demora. (Google)",
  },
  {
    Icon: IconSearch,
    label: "Encontrabilidade",
    headline: "Quem não aparece no Google não existe",
    body: "Existe pro contador, não pro cliente. Site novo, código limpo, sobe pra primeira página em 30 a 60 dias.",
    proof: "75% dos cliques vão pros 3 primeiros do Google. (Backlinko)",
  },
  {
    Icon: IconShield,
    label: "Autoridade",
    headline: "Cliente decide antes de chamar no WhatsApp",
    body: "Site amador é como atender cliente de chinelo. Ele vê, já decidiu, e nem deu bom dia.",
    proof: "Cliente que chega já decidido fecha 3x mais. (HubSpot)",
  },
  {
    Icon: IconTrophy,
    label: "Detalhe",
    headline: "Cliente repara em tudo",
    body: "Se o texto do site é desleixado, o cliente pensa que o atendimento também é. Cada detalhe fala antes de você.",
    proof: "Negócio com site novo fatura 28% mais. (BrightLocal)",
  },
  {
    Icon: IconClock,
    label: "Encantamento",
    headline: "Site bom não precisa convencer",
    body: "O cliente entra, sente que tá no lugar certo, e já chega no WhatsApp resolvido. Você fecha em 2 minutos, não em 20.",
    proof: "Aprova segunda. Sobe terça. 24h úteis.",
  },
];

/**
 * BeforeAfterSlider — high-performance comparison.
 *
 * Drag is rendered direct-to-DOM via refs (no React re-render on every
 * pointermove); state only updates on pointerup so React-coupled aria-valuenow
 * stays in sync with assistive tech without churning the rest of the section.
 *
 * Pointer Capture API replaces the window pointermove/up listener pattern —
 * fewer event-target hops, automatic cancellation when pointer leaves.
 *
 * Memoized so dragging does not re-render Transformation's gain cards or
 * proof blocks.
 */
const BeforeAfterSlider = memo(function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(50);
  const [position, setPosition] = useState(50); // mirrored to aria-valuenow
  const [dragging, setDragging] = useState(false);

  const applyPosition = useCallback((pct: number) => {
    const clamped = Math.max(0, Math.min(100, pct));
    positionRef.current = clamped;
    if (dividerRef.current) dividerRef.current.style.left = `${clamped}%`;
    if (handleRef.current) handleRef.current.style.left = `${clamped}%`;
    if (afterRef.current) afterRef.current.style.clipPath = `inset(0 0 0 ${clamped}%)`;
  }, []);

  const positionFromEvent = useCallback((clientX: number): number => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return positionRef.current;
    return ((clientX - rect.left) / rect.width) * 100;
  }, []);

  // Single pointer-capture target: the container itself receives the pointerdown
  // and owns the entire drag gesture. Pointer Capture spec requires capture to
  // be set on the element that received the down event — capturing on the
  // handle button after a container click would throw InvalidStateError. With
  // capture on the container, pointermove/up redirect to it regardless of
  // where the pointer travels.
  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // If the pointer landed on the handle button itself, the container still
      // captures (event bubbled up). We just skip the position-jump so a tap
      // on the handle does not snap position.
      const onHandle = (e.target as HTMLElement).closest("[data-slider-handle]");
      if (!onHandle) {
        const next = positionFromEvent(e.clientX);
        applyPosition(next);
        setPosition(next);
      }
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [applyPosition, positionFromEvent]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging) return;
      // Direct DOM update — keeps drag at 60fps regardless of React render
      // cost. ARIA value syncs on pointerup.
      applyPosition(positionFromEvent(e.clientX));
    },
    [dragging, applyPosition, positionFromEvent]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging) return;
      e.currentTarget.releasePointerCapture(e.pointerId);
      setDragging(false);
      setPosition(positionRef.current); // sync aria-valuenow for assistive tech
    },
    [dragging]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let next = positionRef.current;
      if (e.key === "ArrowLeft") next = Math.max(0, next - 5);
      else if (e.key === "ArrowRight") next = Math.min(100, next + 5);
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = 100;
      else return;
      e.preventDefault();
      applyPosition(next);
      setPosition(next);
    },
    [applyPosition]
  );

  // Initial paint — apply ref-based position so first render matches state.
  useEffect(() => {
    applyPosition(positionRef.current);
  }, [applyPosition]);

  return (
    <figure
      className="mx-auto mt-16 max-w-5xl"
      aria-label="Comparação visual: site antigo versus site SIGNA"
    >
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative aspect-[16/10] w-full select-none touch-none overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        {/* TODO(operator): replace with real <Image> screenshots when available. */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2a2520] via-[#1a1612] to-[#0f0d0a]"
          aria-hidden="true"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center opacity-70">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber-200/40">
              placeholder · site 2019
            </div>
            <div className="font-serif text-2xl text-amber-100/60 sm:text-4xl">
              Bem-vindo ao nosso site
            </div>
            <div className="mt-2 h-3 w-48 rounded-sm bg-amber-100/10" />
            <div className="mt-1 h-3 w-32 rounded-sm bg-amber-100/10" />
            <div className="mt-1 h-3 w-40 rounded-sm bg-amber-100/10" />
            <button
              type="button"
              disabled
              className="mt-4 cursor-not-allowed rounded border border-amber-100/20 bg-amber-100/5 px-4 py-2 text-[11px] uppercase tracking-wider text-amber-100/40"
            >
              Clique aqui ↗
            </button>
          </div>
        </div>

        <div
          ref={afterRef}
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#070708] to-black"
          aria-hidden="true"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-light/60">
              placeholder · site signa
            </div>
            <div className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
              Sites profissionais.
              <br />
              <span className="text-gradient-accent">Em 24 horas.</span>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="h-9 w-32 rounded-md bg-accent-light/90" />
              <div className="h-9 w-32 rounded-md border border-white/10" />
            </div>
          </div>
        </div>

        <div
          ref={dividerRef}
          className="pointer-events-none absolute top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-accent-light/40 via-accent-light to-accent-light/40 shadow-[0_0_16px_rgba(255,255,255,0.3)]"
          aria-hidden="true"
        />

        <button
          ref={handleRef}
          type="button"
          data-slider-handle
          onKeyDown={onKeyDown}
          role="slider"
          aria-label="Posição da comparação antes/depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-orientation="horizontal"
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-md transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
          </svg>
        </button>

        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted backdrop-blur-md">
          Antes
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent-light/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black backdrop-blur-md">
          Depois
        </div>
      </div>

      <figcaption className="mt-4 text-center text-[12px] text-text-dim">
        Site profissional liberal típico (2019–2023) vs. site SIGNA. Mesmo ramo, mesma cidade.
      </figcaption>
      <p className="mx-auto mt-3 max-w-xl text-center text-[13px] leading-[1.6] text-text-dim/80 italic">
        Esse site abriu rápido pra você. Por isso você ainda tá lendo. Mesmo princípio funciona pro seu cliente.
      </p>
    </figure>
  );
});

export function Transformation() {
  return (
    <section
      id="transformation"
      className="section-radial-tr relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-32"
      aria-labelledby="transformation-heading"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.012]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div {...fadeIn} transition={{ duration: 0.6, ease }} className="text-center">
          <span className="eyebrow-mono text-text-muted">02 · A matemática</span>
          <p className="mx-auto mt-5 max-w-3xl text-[1rem] italic leading-[1.6] text-text-muted sm:text-[1.05rem]">
            Site não é decoração. Site é a porta do seu negócio aberta 24 horas por dia.
          </p>
        </motion.div>

        <motion.h2
          id="transformation-heading"
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-8 text-center text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          Seu site demora 4 segundos pra abrir. O cliente já fechou a aba.{" "}
          <span className="text-text-muted">
            Você acabou de pagar Google pra perder dinheiro.
          </span>
        </motion.h2>

        <motion.p
          {...fadeIn}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[1.05rem] leading-[1.7] text-text-muted text-pretty sm:text-[1.15rem]"
        >
          Cliente que entra num site ruim sai. Não compra, não chama, não volta.{" "}
          <span className="text-foreground">E você paga pra trazer ele. Duas vezes.</span>
        </motion.p>

        <BeforeAfterSlider />

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mx-auto mt-16 max-w-5xl sm:mt-24"
        >
          <div className="text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent-light">
              Faz a conta com a gente
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim/80">
                Se você roda anúncio
              </p>
              <p className="mt-5 text-[1rem] leading-[1.7] text-text-muted">
                R$ 4.000 por mês em anúncio. Mais da metade clica e fecha o site antes de carregar.
              </p>
              <p className="stat-number mt-4 text-[1.1rem] font-semibold leading-[1.5] text-gradient-peach">
                R$ 2.120 indo no ralo. Todo mês.
              </p>
              <p className="mt-3 text-[1rem] leading-[1.6] text-text-muted">
                <span className="stat-number">R$ 25.440</span> por ano pagando pra Google espantar cliente seu.
              </p>
              <p className="mt-4 border-t border-white/[0.04] pt-4 text-[0.95rem] leading-[1.5] text-foreground">
                Dá <span className="stat-number font-semibold text-gradient-peach">R$ 70 por dia</span>.{" "}
                <span className="text-text-muted">Hoje inclusive.</span>
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim/80">
                Se você não roda anúncio
              </p>
              <p className="mt-5 text-[1rem] leading-[1.7] text-text-muted">
                O concorrente novo do bairro abriu há 6 meses. Tem site. Aparece no Google quando alguém procura.
              </p>
              <p className="mt-4 text-[1.1rem] font-semibold leading-[1.5] text-foreground">
                Você não.
              </p>
              <p className="mt-3 text-[1rem] leading-[1.6] text-text-muted">
                <span className="stat-number">5 clientes novos</span> por mês indo pra ele.{" "}
                <span className="stat-number font-semibold text-gradient-peach">R$ 21.000 por ano</span> em mesa que era sua.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl border-t border-white/[0.04] pt-6">
            <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-text-dim">
              Os números que mandam
            </p>
            <ul className="space-y-2 text-center text-[12px] leading-[1.6] text-text-dim/80">
              <li>53% dos clientes fecham o site se ele demora. (Google, 2023)</li>
              <li>75% dos cliques vão pros 3 primeiros do Google. (Backlinko, 2024)</li>
              <li>Cliente que chega já decidido fecha 3x mais. (HubSpot, 2023)</li>
              <li>Negócio com site novo fatura 28% mais. (BrightLocal, 2024)</li>
            </ul>
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-[1.05rem] leading-[1.65] text-foreground">
            O preço é esse porque a gente cortou o que agência cobra e não entrega:{" "}
            <span className="text-text-muted">60 dias de reunião pra te empurrar fatura.</span>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-center text-[1.1rem] font-medium leading-[1.5] text-foreground">
            Site novo paga em 21 dias.
            <br />
            <span className="text-text-muted">Depois é cliente novo, todo dia, no mesmo orçamento.</span>
          </p>

          <p className="mx-auto mt-10 max-w-xl text-center text-[1rem] leading-[1.7] text-text-muted">
            Daqui 24 horas seu site tá no ar.
            <br />
            Daqui 21 dias ele já se pagou.
            <br />
            <span className="font-semibold text-gradient-duo">
              Daqui 90 dias você esquece como era antes.
            </span>
          </p>
        </motion.div>

        <ul className="mt-16 grid list-none grid-cols-1 gap-6 sm:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {gains.map((gain, i) => {
            const Icon = gain.Icon;
            const isLastRow = i >= 3;
            return (
              <motion.li
                key={gain.label}
                {...fadeIn}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.08 }}
                className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 backdrop-blur-sm transition-[border-color,background-color] duration-500 ease-out hover:border-white/[0.12] hover:bg-white/[0.025] ${
                  isLastRow && i === 3 ? "lg:col-start-1 lg:col-end-3" : ""
                } ${isLastRow && i === 4 ? "lg:col-start-3 lg:col-end-4" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-light/10 text-accent-light"
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-text-dim">
                    {gain.label}
                  </span>
                </div>

                <h3 className="mt-5 text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
                  {gain.headline}
                </h3>

                <p className="mt-3 text-[0.95rem] leading-[1.6] text-text-muted">
                  {gain.body}
                </p>

                <p className="mt-5 border-t border-white/[0.04] pt-4 text-[11px] leading-[1.5] text-text-dim">
                  {gain.proof}
                </p>
              </motion.li>
            );
          })}
        </ul>

        {/* Manifesto blocks — single orchestrated parent so the two illuminations
            chain rather than fire independently on viewport entry. */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.45 } },
          }}
          className="mx-auto mt-16 max-w-2xl text-center text-[1.1rem] leading-[1.65] text-text-muted text-pretty sm:mt-24 sm:text-[1.2rem]"
        >
          <WordIllumination
            text="Estar bem na internet não é coisa só de empresa grande."
            staggerMs={45}
            parentDriven
          />
          <br />
          <span className="text-foreground">
            <WordIllumination
              text="Hoje, é o único jeito de existir."
              staggerMs={55}
              parentDriven
            />
          </span>
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.4 } },
          }}
          className="mx-auto mt-12 max-w-2xl text-center text-[1.2rem] font-semibold leading-[1.5] text-foreground sm:text-[1.4rem]"
        >
          <WordIllumination
            text="A gente não faz site."
            staggerMs={60}
            parentDriven
          />{" "}
          <span className="text-text-muted">
            <WordIllumination
              text="Faz o jeito que seu cliente vai te encontrar pela primeira vez."
              staggerMs={50}
              parentDriven
            />
          </span>
        </motion.p>

        <motion.p
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mx-auto mt-16 max-w-xl text-center text-[1rem] italic leading-[1.65] text-text-muted"
        >
          Se você nos encontrou, é porque o site fez o trabalho dele.
          <br />
          Imagina o seu fazendo o mesmo.
        </motion.p>

        <motion.p
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          className="mx-auto mt-8 max-w-xl text-center text-[0.95rem] leading-[1.6] text-text-dim"
        >
          Se faz sentido pra você, manda um oi no WhatsApp.
          <br />
          Se não faz, fecha aba. Sem drama.
        </motion.p>
      </div>
    </section>
  );
}
