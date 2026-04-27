"use client";

import { FadeIn, LineReveal } from "@/components/animated";

const footerLinks = [
  { label: "Metodo", href: "#como-funciona" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Investimento", href: "#precos" },
  { label: "Cases", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black px-4 pb-24 pt-20 sm:pb-8">
      <LineReveal className="mb-16" />

      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h3 className="text-shimmer text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em] select-none">
              SIGNA.
            </h3>
            <p className="mt-6 text-[15px] text-text-muted">
              Sites que convertem. Entregues em 24 horas.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between">
          <div>
            <a href="#" className="text-xl font-bold tracking-[-0.04em]">
              SIGNA<span className="text-accent-light">.</span>
            </a>
            <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-text-dim">
              Design premium, entrega express, preco justo.
              Para profissionais que levam seu negocio a serio.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-text-dim transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-text-dim transition-all duration-300 hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1]"
            aria-label="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/signastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-text-dim transition-all duration-300 hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1]"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 text-[11px] text-text-dim sm:flex-row">
          <p>&copy; {year} SIGNA STUDIO. Todos os direitos reservados.</p>
          <p>
            Feito com precisao por{" "}
            <span className="text-accent-light">SIGNA STUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
