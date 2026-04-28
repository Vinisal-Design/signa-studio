"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof console !== "undefined") {
      console.error("[lp.signastudio] unhandled error:", error);
    }
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="glow-warm absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2" aria-hidden="true" />
      <div className="relative z-10 max-w-xl">
        <p className="eyebrow-mono text-text-muted">Erro inesperado</p>
        <h1 className="mt-6 text-balance text-5xl font-medium tracking-tight sm:text-6xl">
          Algo <span className="text-gradient-peach">quebrou</span> aqui.
        </h1>
        <p className="text-pretty mx-auto mt-6 max-w-md text-base leading-relaxed text-text-muted">
          A equipe foi notificada. Tente novamente em alguns segundos, ou volte
          para o início. Se persistir, fala com a gente direto no WhatsApp.
        </p>
        {error.digest ? (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            ref: {error.digest}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="cta-halo cta-sheen inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-white/20"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="text-sm text-text-dim underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
