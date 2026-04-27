"use client";

import { useEffect } from "react";

/**
 * Easter egg para dev curioso que abrir o console.
 * Klaff inception: o cara que entende código vê e entende o calibre do trabalho.
 * Cliente comum nunca vê. Custo zero, payoff alto pra quem importa.
 */
export function ConsoleSignature() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const styles = {
      title: "color:#fff;font-size:18px;font-weight:700;letter-spacing:-0.5px;",
      accent:
        "color:#fff;background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%);padding:2px 8px;border-radius:4px;font-weight:600;",
      muted: "color:#888;font-size:12px;line-height:1.6;",
      label: "color:#6366f1;font-size:11px;font-weight:600;letter-spacing:1px;",
    };

    console.log("%cSIGNA STUDIO", styles.title);
    console.log("%cSITE FEITO EM 24 HORAS", styles.accent);
    console.log(
      `%cVocê está olhando o código fonte do nosso site.\nO seu pode estar pronto até amanhã, no mesmo padrão.\n\nManda WhatsApp.`,
      styles.muted
    );
    console.log("%cCONSTRUÍDO POR", styles.label);
    console.log(
      `%cJoão Lozano · Vinicius Almeida · Victor Ferreira · Enzo de Farias\nQuatro nomes. Quatro WhatsApps abertos.`,
      styles.muted
    );
    console.log("%cSTACK", styles.label);
    console.log(
      `%cNext.js · TypeScript · Tailwind · Framer Motion\nVelocidade real. Código limpo. Sem teatro.`,
      styles.muted
    );
  }, []);

  return null;
}
