import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import { MetaPixel } from "@/components/meta-pixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Menlo", "Consolas", "monospace"],
});

const SITE_NAME = "SIGNA Studio";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lp.signastudio.app";
const SITE_DESC =
  "Site profissional de agência em 24 horas úteis. Você só paga depois de aprovar. " +
  "Garantia tripla: zero adiantado, refazemos se não gostar, 100% money-back. " +
  "Para dentistas, advogados, psicólogos, restaurantes e profissionais liberais que rodam ads.";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  // No maximumScale / userScalable: never restrict zoom (WCAG 1.4.4).
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Site Profissional em 24 Horas | A partir de R$1.500`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "site profissional 24h",
    "criação de site rápida",
    "agência de sites Brasil",
    "site para dentista",
    "site para advogado",
    "site para psicólogo",
    "site para restaurante",
    "landing page profissional",
    "site otimizado SEO",
    "site responsivo",
    "redesign de site",
    "site com WhatsApp",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Site Profissional em 24 Horas`,
    description:
      "Site de agência em 24 horas úteis. Você só paga depois de aprovar. " +
      "Garantia tripla. A partir de R$1.500.",
    // TODO(Onda 11): generate /og-image.png 1200x630 with brand. Until then,
    // omit the images key — sharing without OG image is preferable to a broken one.
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Site Profissional em 24 Horas`,
    description:
      "A partir de R$1.500. Garantia tripla. Direto com a equipe via WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO(Onda 11): add favicon.ico + apple-touch-icon.png + manifest.webmanifest.
  // Until those are generated, point only to the SVG that exists in /public.
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
  },
  category: "business",
  formatDetection: { telephone: false, email: false, address: false },
};

function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "SIGNA Studio",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.svg`,
          contentUrl: `${SITE_URL}/logo.svg`,
        },
        image: `${SITE_URL}/logo.svg`,
        slogan: "Site profissional em 24 horas. Você só paga depois de aprovar.",
        description: SITE_DESC,
        foundingDate: "2025",
        founders: [
          { "@type": "Person", name: "Enzo de Farias" },
          { "@type": "Person", name: "Vinicius Almeida" },
          { "@type": "Person", name: "João Lozano" },
          { "@type": "Person", name: "Victor Ferreira" },
        ],
        knowsAbout: [
          "Web Design",
          "Web Development",
          "Landing Page Design",
          "SEO",
          "Conversion Rate Optimization",
          "Core Web Vitals",
          "Schema.org Structured Data",
          "Responsive Design",
          "WhatsApp Business Integration",
          "Brazilian Local Business Marketing",
        ],
        knowsLanguage: ["pt-BR", "en", "es"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Arujá",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "Country", name: "Brazil" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Spain" },
          { "@type": "Country", name: "Portugal" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "contact@signastudio.app",
            contactType: "customer support",
            areaServed: ["BR", "US", "ES", "PT"],
            availableLanguage: ["pt-BR", "en", "es"],
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            url: "https://wa.me/5511999999999",
            availableLanguage: ["pt-BR", "en", "es"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Criação de Sites Express`,
        description: SITE_DESC,
        url: SITE_URL,
        provider: { "@id": `${SITE_URL}/#organization` },
        // Spans the full surface: R$0 free demo (PLG lead magnet) up to R$2.000
        // new-build sprint. Any narrower band would contradict the Offer with
        // price=0 in hasOfferCatalog below and break Rich Results validation.
        priceRange: "R$0 - R$2.000",
        areaServed: { "@type": "Country", name: "Brazil" },
        serviceType: [
          "Criação de Sites",
          "Web Design",
          "Landing Pages",
          "Redesign de Sites",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços SIGNA Studio",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Demo Site Profissional Gratuita em 24h",
              description:
                "Construímos uma versão pronta do seu site em até 24 horas úteis a partir de um briefing curto via WhatsApp. Sem cartão, sem contrato, sem cobrança antes de aprovar. O cliente decide depois se converte para um plano pago.",
              price: "0",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              eligibleCustomerType: "https://schema.org/BusinessEntity",
              url: SITE_URL,
              category: "Lead Magnet · Product-Led Growth",
            },
            {
              "@type": "Offer",
              name: "Reforma Sprint",
              description: "Redesign completo do site atual em 24 horas úteis",
              price: "1500",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}#precos`,
            },
            {
              "@type": "Offer",
              name: "Site Sprint Profissional",
              description: "Site novo do zero em 24 horas úteis",
              price: "2000",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}#precos`,
            },
            {
              "@type": "Offer",
              name: "Manutenção Mensal",
              description: "Suporte, ajustes e evolução do site",
              price: "750",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}#precos`,
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Em quanto tempo o site fica pronto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "24 horas úteis após aprovação do briefing. Prazo contratual, não promessa de marketing.",
            },
          },
          {
            "@type": "Question",
            name: "Quanto custa criar um site profissional?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "R$1.500 reforma de site existente, R$2.000 site novo do zero. Manutenção opcional R$750/mês. Você só paga depois de aprovar o site pronto.",
            },
          },
          {
            "@type": "Question",
            name: "O site é responsivo e otimizado para Google?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. 100% responsivo (mobile, tablet, desktop), Core Web Vitals otimizados, SEO técnico, schema.org e integração WhatsApp nativa.",
            },
          },
          {
            "@type": "Question",
            name: "Qual a garantia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Garantia tripla: (1) zero adiantado, (2) refazemos se você não aprovar, (3) 100% money-back se ainda assim não gostar.",
            },
          },
          {
            "@type": "Question",
            name: "Para quais profissionais vocês criam sites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dentistas, advogados, psicólogos, nutricionistas, restaurantes, personal trainers, arquitetos, coaches, clínicas de estética e qualquer negócio local que precise vender online.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} — Site Profissional em 24 Horas`,
        description: SITE_DESC,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.svg`,
        },
        inLanguage: "pt-BR",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".eyebrow-mono", "[data-llm-citation]"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <MetaPixel />
      </body>
    </html>
  );
}
