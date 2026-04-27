"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { WordIllumination } from "@/components/animated";

const ease = [0.22, 1, 0.36, 1] as const;

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

export function Transformation() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-15%" as const },
  };

  return (
    <section
      id="transformation"
      className="section-radial-tr relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-32"
      aria-labelledby="transformation-heading"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.012]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Eyebrow / Âncora filosófica Wiebe-Marcelo verbatim */}
        <motion.div {...fadeIn} transition={{ duration: 0.6, ease }} className="text-center">
          <span className="eyebrow-mono text-text-muted">
            02 · A matemática
          </span>
          <p className="mx-auto mt-5 max-w-3xl text-[1rem] sm:text-[1.05rem] leading-[1.6] text-text-muted italic">
            Site não é decoração. Site é a porta do seu negócio aberta 24 horas por dia.
          </p>
        </motion.div>

        {/* Headline Halbert */}
        <motion.h2
          id="transformation-heading"
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-8 text-center text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          Seu site demora 4 segundos pra abrir. O cliente já fechou a aba.{" "}
          <span className="text-text-muted">Você acabou de pagar Google pra perder dinheiro.</span>
        </motion.h2>

        {/* Subhead Bencivenga */}
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[1.05rem] leading-[1.7] text-text-muted text-pretty sm:text-[1.15rem]"
        >
          Cliente que entra num site ruim sai. Não compra, não chama, não volta.{" "}
          <span className="text-foreground">E você paga pra trazer ele. Duas vezes.</span>
        </motion.p>

        {/* ─── BEFORE/AFTER SLIDER ──────────────────────────────────────────── */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] select-none touch-none"
            onPointerDown={(e) => {
              setIsDragging(true);
              updatePosition(e.clientX);
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            }}
            role="region"
            aria-label="Comparação antes e depois. Arraste a barra para revelar o site SIGNA"
          >
            {/* PLACEHOLDER ANTES — operator entrega screenshot real */}
            {/* {{ANTES_PLACEHOLDER}} replace with actual <Image> when mockup arrives */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#2a2520] via-[#1a1612] to-[#0f0d0a]"
              aria-hidden="true"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center opacity-70">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-amber-200/40">
                  placeholder · site 2019
                </div>
                <div className="text-2xl font-serif text-amber-100/60 sm:text-4xl">
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

            {/* PLACEHOLDER DEPOIS — clipped pelo position */}
            {/* {{DEPOIS_PLACEHOLDER}} replace with actual <Image> when mockup arrives */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#070708] to-black"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              aria-hidden="true"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent-light/60">
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

            {/* DIVIDER + HANDLE */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-light/40 via-accent-light to-accent-light/40 shadow-[0_0_16px_rgba(255,255,255,0.3)]"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            />
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onPointerDown={(e) => {
                e.stopPropagation();
                setIsDragging(true);
                (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              }}
              role="slider"
              aria-label="Posição da comparação antes e depois"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              aria-orientation="horizontal"
              className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-md transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              style={{ left: `${position}%` }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
              </svg>
            </button>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted backdrop-blur-md">
              Antes
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent-light/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black backdrop-blur-md">
              Depois
            </div>
          </div>

          {/* Caption + Micro-Meta 2 (proof autorreferencial) */}
          <p className="mt-4 text-center text-[12px] text-text-dim/70">
            Site profissional liberal típico (2019–2023) vs. site SIGNA. Mesmo ramo, mesma cidade.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center text-[13px] leading-[1.6] text-text-dim/80 italic">
            Esse site abriu rápido pra você. Por isso você ainda tá lendo. Mesmo princípio funciona pro seu cliente.
          </p>
        </motion.div>

        {/* ─── BLOCO DE PROVA DUPLA — "Faz a conta com a gente" ────────────── */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mx-auto mt-16 sm:mt-24 max-w-5xl"
        >
          <div className="text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent-light">
              Faz a conta com a gente
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Cenário A — Marcelo (roda ads) */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dim/80">
                Se você roda anúncio
              </p>
              <p className="mt-5 text-[1rem] leading-[1.7] text-text-muted">
                R$ 4.000 por mês em anúncio. Mais da metade clica e fecha o site antes de carregar.
              </p>
              <p className="mt-4 text-[1.1rem] font-semibold leading-[1.5] text-gradient-peach stat-number">
                R$ 2.120 indo no ralo. Todo mês.
              </p>
              <p className="mt-3 text-[1rem] leading-[1.6] text-text-muted">
                <span className="stat-number">R$ 25.440</span> por ano pagando pra Google espantar cliente seu.
              </p>
              <p className="mt-4 border-t border-white/[0.04] pt-4 text-[0.95rem] leading-[1.5] text-foreground">
                Dá <span className="text-gradient-peach font-semibold stat-number">R$ 70 por dia</span>.{" "}
                <span className="text-text-muted">Hoje inclusive.</span>
              </p>
            </div>

            {/* Cenário B — Cláudia (não roda ads) */}
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
                <span className="text-gradient-peach font-semibold stat-number">R$ 21.000 por ano</span> em mesa que era sua.
              </p>
            </div>
          </div>

          {/* Proof Stack Bencivenga + Wiebe verbatim */}
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border-t border-white/[0.04] pt-6">
            <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-text-dim/60">
              Os números que mandam
            </p>
            <ul className="space-y-2 text-center text-[12px] leading-[1.6] text-text-dim/80">
              <li>53% dos clientes fecham o site se ele demora. (Google, 2023)</li>
              <li>75% dos cliques vão pros 3 primeiros do Google. (Backlinko, 2024)</li>
              <li>Cliente que chega já decidido fecha 3x mais. (HubSpot, 2023)</li>
              <li>Negócio com site novo fatura 28% mais. (BrightLocal, 2024)</li>
            </ul>
          </div>

          {/* Frame Reversal Klaff — "tá barato demais" */}
          <p className="mx-auto mt-12 max-w-3xl text-center text-[1.05rem] leading-[1.65] text-foreground">
            O preço é esse porque a gente cortou o que agência cobra e não entrega:{" "}
            <span className="text-text-muted">60 dias de reunião pra te empurrar fatura.</span>
          </p>

          {/* Fechamento Matemático Bencivenga */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-[1.1rem] font-medium leading-[1.5] text-foreground">
            Site novo paga em 21 dias.
            <br />
            <span className="text-text-muted">Depois é cliente novo, todo dia, no mesmo orçamento.</span>
          </p>

          {/* Sugarman #27 Hope — quadro emocional do depois */}
          <p className="mx-auto mt-10 max-w-xl text-center text-[1rem] leading-[1.7] text-text-muted">
            Daqui 24 horas seu site tá no ar.
            <br />
            Daqui 21 dias ele já se pagou.
            <br />
            <span className="text-gradient-duo font-semibold">Daqui 90 dias você esquece como era antes.</span>
          </p>
        </motion.div>

        {/* ─── 5 GAIN BLOCKS ────────────────────────────────────────────────── */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gains.map((gain, i) => {
            const Icon = gain.Icon;
            const isLastRow = i >= 3;
            return (
              <motion.div
                key={gain.label}
                {...fadeIn}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.08 }}
                className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-7 backdrop-blur-sm transition-colors hover:border-white/[0.12] hover:bg-white/[0.025] ${
                  isLastRow && i === 3 ? "lg:col-start-1 lg:col-end-3" : ""
                } ${isLastRow && i === 4 ? "lg:col-start-3 lg:col-end-4" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-light/10 text-accent-light">
                    <Icon />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-text-dim/70">
                    {gain.label}
                  </span>
                </div>

                <h3 className="mt-5 text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground">
                  {gain.headline}
                </h3>

                <p className="mt-3 text-[0.95rem] leading-[1.6] text-text-muted">
                  {gain.body}
                </p>

                <p className="mt-5 border-t border-white/[0.04] pt-4 text-[11px] leading-[1.5] text-text-dim/70">
                  {gain.proof}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Ponte Filosófica Ícaro v2-Wiebe — Per-word illumination cascade */}
        <p className="mx-auto mt-16 sm:mt-24 max-w-2xl text-center text-[1.1rem] leading-[1.65] text-text-muted text-pretty sm:text-[1.2rem]">
          <WordIllumination text="Estar bem na internet não é coisa só de empresa grande." staggerMs={45} />
          <br />
          <span className="text-foreground">
            <WordIllumination text="Hoje, é o único jeito de existir." delay={0.5} staggerMs={55} />
          </span>
        </p>

        {/* Manifesto Fechamento Ícaro v2-Wiebe — Illumination cascade */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-[1.2rem] font-semibold leading-[1.5] text-foreground sm:text-[1.4rem]">
          <WordIllumination text="A gente não faz site." staggerMs={60} />
          {" "}
          <span className="text-text-muted">
            <WordIllumination text="Faz o jeito que seu cliente vai te encontrar pela primeira vez." delay={0.4} staggerMs={50} />
          </span>
        </p>

        {/* Micro-Meta 3 — frame destino pré-CTA */}
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mx-auto mt-16 max-w-xl text-center text-[1rem] leading-[1.65] text-text-muted italic"
        >
          Se você nos encontrou, é porque o site fez o trabalho dele.
          <br />
          Imagina o seu fazendo o mesmo.
        </motion.p>

        {/* Micro-CTA Klaff — Prize Positioning */}
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
