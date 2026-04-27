"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Metodo", href: "#como-funciona" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Investimento", href: "#precos" },
  { label: "Cases", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-700 ${scrolled ? "py-4" : "py-6"}`}>
          <a href="#" className="relative z-50 font-bold tracking-[-0.04em] text-[1.4rem] text-foreground">
            SIGNA<span className="text-accent-light">.</span>
          </a>

          <nav
            className={`hidden items-center gap-0.5 rounded-full transition-all duration-700 sm:flex ${
              scrolled
                ? "bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] px-1.5 py-1.5"
                : "px-1.5 py-1.5"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-[13px] font-medium text-text-muted transition-all duration-300 hover:text-foreground hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#precos"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-[13px] font-semibold text-background transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.2)]"
          >
            Comecar agora
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
            aria-label="Menu"
          >
            <motion.span
              className="block h-[1.5px] w-6 bg-foreground"
              animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[1.5px] w-6 bg-foreground"
              animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/98 backdrop-blur-3xl sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#precos"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-foreground px-10 py-4 text-lg font-semibold text-background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            Comecar agora
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
