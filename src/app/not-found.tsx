import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="glow-cool absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2" aria-hidden="true" />
      <div className="relative z-10 max-w-xl">
        <p className="eyebrow-mono text-text-muted">Erro 404 · Rota não encontrada</p>
        <h1 className="mt-6 text-balance text-5xl font-medium tracking-tight sm:text-6xl">
          Essa página <span className="text-gradient-duo">não existe.</span>
        </h1>
        <p className="text-pretty mx-auto mt-6 max-w-md text-base leading-relaxed text-text-muted">
          O link pode ter mudado, ou nunca existiu. Volte para o início — onde tem
          tudo que precisa para conhecer o estúdio.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="cta-halo cta-sheen inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-white/20"
          >
            Voltar para o início
          </Link>
          <a
            href="https://wa.me/5511999999999"
            className="text-sm text-text-dim underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </main>
  );
}
