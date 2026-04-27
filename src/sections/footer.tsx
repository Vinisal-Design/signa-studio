"use client";

import { FadeIn, LineReveal } from "@/components/animated";

const footerLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Time", href: "#time" },
  { label: "Investimento", href: "#precos" },
  { label: "Sites entregues", href: "#portfolio" },
  { label: "Por que escolher", href: "#provas" },
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
              A porta do seu negócio aberta 24 horas por dia.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between">
          <div>
            <a href="#" className="text-xl font-bold tracking-[-0.04em]">
              SIGNA<span className="text-accent-light">.</span>
            </a>
            <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-text-dim">
              Para profissionais e negócios que precisam de site bom, rápido e
              sem dor de cabeça.
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
            href="https://wa.me/5511978535723"
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
            href="https://www.instagram.com/signastudios.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-text-dim transition-all duration-300 hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1]"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567664831215"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-text-dim transition-all duration-300 hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1]"
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a
            href="mailto:contact@signastudio.app"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-text-dim transition-all duration-300 hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.1]"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
            </svg>
          </a>
        </div>

        <FadeIn className="mt-6">
          <a
            href="mailto:contact@signastudio.app"
            className="block text-center text-[13px] text-text-dim transition-colors duration-300 hover:text-foreground"
          >
            contact@signastudio.app
          </a>
        </FadeIn>

        {/* Micro-Meta 4 — frame destino brasileiro (Cialdini consistency + Klaff prize) */}
        <FadeIn className="mt-14">
          <p className="mx-auto max-w-md text-center text-[12px] leading-[1.6] text-text-dim/70 italic">
            Você chegou aqui sem a gente te empurrar. É como cliente bom chega.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 text-[11px] text-text-dim sm:flex-row">
          <p>&copy; {year} SIGNA STUDIO. Todos os direitos reservados.</p>
          <p>Site feito por nós. Como o seu vai ser.</p>
        </div>
      </div>
    </footer>
  );
}
