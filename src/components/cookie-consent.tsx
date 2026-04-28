"use client";

import { useEffect } from "react";

/**
 * CookieConsent — LGPD/GDPR-compliant consent banner.
 *
 * Strategy:
 *  - Dynamic import keeps `vanilla-cookieconsent` out of the SSR bundle.
 *  - Library CSS is also dynamic so first paint never blocks on it.
 *  - "Necessary" cookies are always on (session, form submission). "Analytics"
 *    and "marketing" require explicit opt-in. We DO NOT load Meta Pixel /
 *    GA4 / GTM until the user accepts the matching category — defer logic
 *    lives in the `onConsent` callback below.
 *  - Re-opening the preferences modal: any click on a `[data-cc="show-preferencesModal"]`
 *    element (e.g. the "Preferências de cookies" link in the footer) opens it
 *    via the library's built-in delegate.
 */
export function CookieConsent() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    (async () => {
      const cc = await import("vanilla-cookieconsent");
      // Library ships its own stylesheet — load alongside.
      await import("vanilla-cookieconsent/dist/cookieconsent.css");
      if (cancelled) return;

      cc.run({
        guiOptions: {
          consentModal: {
            layout: "box inline",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false,
          },
        },

        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {
            enabled: false,
            autoClear: {
              cookies: [
                { name: /^_ga/ },
                { name: "_gid" },
                { name: "_gat" },
              ],
            },
          },
          marketing: {
            enabled: false,
            autoClear: {
              cookies: [
                { name: /^_fbp$/ },
                { name: /^_fbc$/ },
              ],
            },
          },
        },

        onConsent: ({ cookie }) => {
          const accepted = cookie.categories || [];
          if (accepted.includes("analytics")) {
            // TODO(operator): wire GA4 / Plausible here once IDs are set.
            // loadAnalytics();
          }
          if (accepted.includes("marketing")) {
            // TODO(operator): wire Meta Pixel here once PIXEL_ID is set.
            // loadMetaPixel();
          }
        },

        language: {
          default: "pt",
          translations: {
            pt: {
              consentModal: {
                title: "Cookies, sem rodeio.",
                description:
                  "A gente usa cookies essenciais pro site funcionar e, se você deixar, cookies pra entender o que tá funcionando aqui. Você decide.",
                acceptAllBtn: "Aceitar tudo",
                acceptNecessaryBtn: "Só os essenciais",
                showPreferencesBtn: "Customizar",
                footer:
                  '<a href="/politica-privacidade">Política de Privacidade</a> · <a href="/termos">Termos</a>',
              },
              preferencesModal: {
                title: "Preferências de cookies",
                acceptAllBtn: "Aceitar tudo",
                acceptNecessaryBtn: "Só os essenciais",
                savePreferencesBtn: "Salvar minhas escolhas",
                closeIconLabel: "Fechar",
                sections: [
                  {
                    title: "Por que pedimos isso",
                    description:
                      "A LGPD exige que você dê consentimento explícito antes de qualquer rastreamento. Aqui você escolhe categoria por categoria.",
                  },
                  {
                    title: "Cookies estritamente necessários",
                    description:
                      "Sem esses, o site simplesmente não funciona (sessão, segurança, formulário).",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Cookies de análise",
                    description:
                      "Nos ajudam a entender o que está funcionando (Google Analytics ou Plausible). Anônimo, agregado.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Cookies de marketing",
                    description:
                      "Permitem mensurar campanhas e remarketing (Meta Pixel). Sem isso, anúncio fica cego.",
                    linkedCategory: "marketing",
                  },
                  {
                    title: "Mais informações",
                    description:
                      'Para qualquer dúvida, escreva para <a href="mailto:contact@signastudio.app">contact@signastudio.app</a>.',
                  },
                ],
              },
            },
          },
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
