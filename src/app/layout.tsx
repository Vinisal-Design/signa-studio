import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_NAME = "SIGNA STUDIO";
const SITE_URL = "https://site-express-rho.vercel.app";
const SITE_DESC =
  "Site profissional no ar em 24 horas. Visual com cara propria, aparece no Google, integrado com WhatsApp. A partir de R$ 1.500. Voce so paga depois de aprovar. Para dentistas, advogados, psicologos, restaurantes e negocio local que precisa de cliente novo todo dia.";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Site Profissional em 24 Horas | Criacao Express de Sites`,
  description: SITE_DESC,
  keywords: [
    "criacao de site profissional",
    "site em 24 horas",
    "site para dentista",
    "site para psicologo",
    "site para nutricionista",
    "site para coach",
    "site para restaurante",
    "site para advogado",
    "site para personal trainer",
    "landing page profissional",
    "web design express",
    "redesign de site",
    "site para prestador de servico",
    "site responsivo",
    "site otimizado SEO",
    "criacao de site rapida",
    "site profissional barato",
    "site para negocio local",
    "agencia de sites",
    "site com whatsapp",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Site Profissional em 24 Horas`,
    description: SITE_DESC,
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Site Profissional em 24 Horas`,
    description: SITE_DESC,
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
};

function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description: SITE_DESC,
    url: SITE_URL,
    priceRange: "R$1.500 - R$2.000",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: [
      "Criacao de Sites",
      "Web Design",
      "Landing Pages",
      "Redesign de Sites",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicos de Criacao de Sites",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Reforma Sprint",
          description: "Redesign completo do seu site atual em 24 horas",
          price: "1500",
          priceCurrency: "BRL",
        },
        {
          "@type": "Offer",
          name: "Site Sprint Profissional",
          description: "Site profissional do zero em 24 horas com design exclusivo",
          price: "2000",
          priceCurrency: "BRL",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo leva para criar um site profissional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Com o Metodo Sprint 24 da SIGNA STUDIO, seu site profissional fica pronto em 24 horas uteis. Processo testado em mais de 200 projetos.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa criar um site profissional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A SIGNA STUDIO oferece sites profissionais a partir de R$1.500 (reforma) e R$2.000 (site novo). Garantia total de satisfacao.",
        },
      },
      {
        "@type": "Question",
        name: "O site e responsivo e otimizado para SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todos os sites sao 100% responsivos, otimizados para Google (SEO), com Core Web Vitals perfeitos e integracao WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a garantia de satisfacao?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se voce nao aprovar o resultado, refazemos do zero. Se ainda assim nao gostar, devolvemos 100% do investimento.",
        },
      },
      {
        "@type": "Question",
        name: "Para quais profissionais a SIGNA cria sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Criamos sites para dentistas, psicologos, nutricionistas, coaches, restaurantes, personal trainers, advogados, confeitarias e qualquer negocio local ou prestador de servico.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
