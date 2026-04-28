import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lp.signastudio.app";

// Allow-list of named AI/LLM crawlers. Documented + opt-in. Each entry is an
// agent we explicitly welcome to ingest and cite our content. Any agent not
// listed falls under the wildcard allow rule below (we are an open-content
// site; nothing here is sensitive).
const AI_AGENTS = [
  "GPTBot",          // OpenAI training/search
  "OAI-SearchBot",   // OpenAI ChatGPT search
  "ChatGPT-User",    // ChatGPT user-initiated fetches
  "ClaudeBot",       // Anthropic
  "anthropic-ai",    // Anthropic legacy
  "Claude-Web",      // Anthropic web fetches
  "PerplexityBot",   // Perplexity index
  "Perplexity-User", // Perplexity user-initiated
  "Google-Extended", // Bard/Gemini training
  "GoogleOther",     // Google research
  "CCBot",           // Common Crawl (LLM training corpus)
  "Applebot-Extended", // Apple Intelligence
  "Bytespider",      // ByteDance / Doubao
  "Amazonbot",       // Amazon Alexa / Rufus
  "cohere-ai",       // Cohere
  "FacebookBot",     // Meta AI
  "Meta-ExternalAgent", // Meta AI fetches
  "DuckAssistBot",   // DuckDuckGo AI
  "YouBot",          // You.com
  "MistralAI-User",  // Mistral
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default — open to all standard crawlers. /api/agent-context is the
      // canonical structured payload for any agent (humans hit it freely too);
      // other /api/* routes are operational and should not be indexed.
      {
        userAgent: "*",
        allow: ["/", "/api/agent-context"],
        disallow: ["/api/lp-lead", "/api/lp-lead/"],
      },
      // Named AI agents — explicit allow + access to /api/agent-context
      // (the structured JSON endpoint is the canonical agent payload).
      ...AI_AGENTS.map((agent) => ({
        userAgent: agent,
        allow: ["/", "/api/agent-context"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
