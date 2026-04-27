# HANDOFF — SIGNA Studio Copy Forge E2E Formal v3
**Session ID:** SES-SIGNA-S1
**Data desta sessão:** 2026-04-27
**De:** Copy Chief (sessão S1, esta)
**Para:** Copy Chief (sessão S2, próxima) + Squad de Elite COPY FORGE
**Status:** v2 entregue, operator validou direção mas pediu nível elite + e2e formal sem atalhos cognitivos
**Versão:** 2 (handoff revisado — paths absolutos, zero lacunas)

---

## ÍNDICE

```
0.  CONTEXTO OPERACIONAL CRÍTICO (LER PRIMEIRO)
1.  VEREDITO DO OPERADOR (RAW DNA)
2.  ANTI-PATTERNS A NÃO REPETIR
3.  PROJETO SIGNA — MAPA TÉCNICO COMPLETO
4.  BRIEF DE NEGÓCIO CONSOLIDADO
5.  ESTADO ATUAL DAS 9 SECTIONS (v2)
6.  INTELLIGENCE PACKAGE (artifacts já gerados)
7.  PIPELINE FORMAL DE ELITE — PRÓXIMA SESSÃO
8.  ASSETS A CRIAR (faltam ainda)
9.  ANTI-PATTERN BLOCKLIST
10. CHECKLIST DE EXECUÇÃO (linear)
11. PRINCÍPIOS DE OURO
12. ARTIFACTS REFERENCE (paths absolutos)
13. PRIMEIRA AÇÃO DA PRÓXIMA SESSÃO
14. PLAN B (se algo quebrar)
```

---

## 0. CONTEXTO OPERACIONAL CRÍTICO (LER PRIMEIRO)

### Localização dos projetos
- **Projeto SIGNA (alvo do trabalho):** `D:\signa-studio`
- **Marketing OS (sistema operacional do Copy Chief):** `D:\marketing-os`
- **Este handoff (mestre):** `D:\marketing-os\docs\sessions\2026-04\handoff-signa-studio-S1.md`
- **Este handoff (cópia no projeto):** `D:\signa-studio\HANDOFF.md`
- **Repositório remoto SIGNA:** `https://github.com/Vinisal-Design/signa-studio.git`
- **URL placeholder de produção:** `https://site-express-rho.vercel.app` (Vercel preview)

### Histórico de versões da copy (CRÍTICO entender)
| Versão | Estado | Onde está |
|---|---|---|
| **v0 (original)** | Operador anterior, antes do Copy Forge | Preservada em `D:\signa-studio\src\sections\*.tsx.bak` |
| **v1 (Copy Forge tentativa 1)** | Técnica demais, AGEO/LLMO/Stripe-grade no front | **NÃO PRESERVADA** (sobrescrita pela v2). Recuperável só via `git diff HEAD~0` se nada commitado |
| **v2 (Copy Forge tentativa 2 — atual)** | Benefício/dinheiro/ROI no front, técnica no fundo | **EM DISCO** em `D:\signa-studio\src\sections\*.tsx` |

**ATENÇÃO:** Os arquivos `.bak` são da v0 ORIGINAL (operador anterior), NÃO da v1. Se quiser comparar v1 vs v2, precisa de git ou reescrever.

### Git status atual (snapshot 2026-04-27)
```
Branch: main
Commits ahead: 0 (sem push pendente)
Modified (staged ou unstaged):
  - package-lock.json
  - src/sections/about.tsx
  - src/sections/faq.tsx
  - src/sections/final-cta.tsx
  - src/sections/footer.tsx
  - src/sections/hero.tsx
  - src/sections/how-it-works.tsx
  - src/sections/portfolio.tsx
  - src/sections/pricing.tsx
  - src/sections/testimonials.tsx
Untracked:
  - HANDOFF.md
  - outputs/
  - src/sections/*.tsx.bak (9 arquivos)
Last commit: 3eec415 "Replace last mdash in marquee with bullet separator"
```

### O que essa sessão (S1) JÁ FEZ
1. **F1 INTAKE** — Brief estruturado em `D:\signa-studio\outputs\intelligence\signa\F1-copy-brief.yaml`
2. **F2 INTELLIGENCE** — Tier 0 rodado:
   - Schwartz: `D:\signa-studio\outputs\intelligence\signa\F2-schwartz-diagnosis.yaml`
   - Ford: `D:\signa-studio\outputs\intelligence\signa\F2-ford-lead-selection.yaml`
   - Todd Brown: `D:\signa-studio\outputs\intelligence\signa\F2-todd-brown-mechanism.yaml`
3. **F4 DRAFT** — 9 sections reescritas DUAS VEZES (v1 e v2)
4. **F5 QG-COPY parcial:** `D:\signa-studio\outputs\quality\signa\qg-report-COPY-2026-04-27-001.yaml` (refere v1 — DESATUALIZADO)
5. **F6 LOG:** `D:\signa-studio\outputs\copy\signa\F6-pipeline-log.yaml` (refere v1 — DESATUALIZADO)
6. **Backup v0:** 9 arquivos `.bak` em `D:\signa-studio\src\sections\`
7. **Dependências:** `npm install` rodado, `node_modules/` presente
8. **Dev server testado:** funcionou em `http://localhost:3000` (Next 16 Turbopack, 567ms ready)

### Como retomar dev server na próxima sessão
```bash
cd D:/signa-studio
# Verificar se ainda está vivo:
curl -s http://localhost:3000 -o /dev/null -w "%{http_code}\n"
# Se retornar 000 ou erro, reiniciar:
npm run dev
```

---

## 1. VEREDITO DO OPERADOR (transcrito literal — RAW DNA, H7)

### Sobre v1 (técnica demais — REJEITADA)
> "Achei que a copy ta muito voltada pra TÉCNICA. As vezes o cara só sabe que precisa de um site, ele não sabe porque, ele as vezes nem sabe o que é stripe grade, ou esses termos. Pois nosso cliente, só quer fazer o funil dele girar, mais vendas, um site bonito rápido que passe confiança, que transmita profissionalismo, acho que teve muitos termos voltado pra código, e isso é o back, o cliente nao quer saber se a stack dele é next js, fodase isso."

> "Ele equwer saber quanto o site vai colocar dinheiro no bolso dele e o que justifica isso, o investimento, quanto volta, fazer conta."

### Sobre headline (direção que ele quer)
> "Também achei a headline muito subjetiva, talvez ela possa ser a sub headline, dar uma enxugada e ser mais direto e objetivo, com o que fazemos: sites profissionais de agência em 24 horas por nem 1/3 do valor. Tipo isso mas bem melhor."

### Sobre v2 (atual — DIREÇÃO OK, EXECUÇÃO INSUFICIENTE)
> "Ainda ta clichê e genérico muita coisa jogada. Ta bem melhor, mas não chegamos lá."

### Sobre nível desejado
> "Faça um handoff, com todo brief, tudo, vou fazer todo processo FORMAL do copy squad de elite, aproveitando full recursos e2e e processos formais, sem atalhos cognitivos. Vamos tornar isso foda de verdade."

> "Porra olha o ARSENAL de copy que voce tem na mão, ficou bem melhor, mas pra mim que entendo, e meu publico? e o ICP? Achei que faltou mais maestria em orquestrar isso."

### Tradução operacional
- ✅ Direção (benefício > técnica) está correta na v2
- ❌ Execução ainda é genérica/clichê — falta voz própria, ângulos surpreendentes, copy que CORTA
- ❌ Faltou orquestração de elite: cada section com agente certo, framework executado de verdade, voice DNA carregado por agente
- ❌ Atalhos cognitivos: Copy Chief não invocou agentes individuais com payload completo — só "aplicou" frameworks no estilo abstrato

### O que operador valoriza (sinais ao longo da sessão)
- Decisão rápida sem ficar "criando obstáculo"
- Honestidade técnica + segurança no produto (10+ clientes reais entregues)
- Não quer expor nomes de clientes (privacidade)
- Equipe real: Enzo de Farias, Vinicius Almeida, João Lozano, Victor Ferreira
- Quer rodar ads (Meta + Google) em 24-48h
- Quer i18n PT-BR + EN + ES pra mercado global
- Quer usar showcases (sites que ele construiu pra prospecção/flip) como portfolio honesto

---

## 2. ANTI-PATTERNS A NÃO REPETIR

| # | Anti-pattern | Como evitar |
|---|---|---|
| 1 | **Tier 0 retroativo** (rodado DEPOIS da copy v1) | Tier 0 ANTES de qualquer drafting. Período. |
| 2 | **Skill Schwartz só, sem Ford/Todd Brown reais** | Os 3 diagnósticos COMPLETOS em sessão (não simulados pelo Copy Chief) |
| 3 | **Copy Chief escrevendo direto em vez de delegar** | Cada section = `Skill("copy:agents:{id}")` REAL com Context Payload completo |
| 4 | **Frameworks aplicados "de cabeça"** | Cada agente carrega seu YAML de framework + voice DNA + phrases + authority |
| 5 | **Voice cosplay** (agente fala em sua voz, não no SIGNA) | SOUL-signa.md em TODO payload |
| 6 | **Buzzword stuffing** (AGEO/LLMO/Stripe-grade no front) | Técnica vai pra footer/sustento — front é DINHEIRO, CONFIANÇA, RAPIDEZ |
| 7 | **Generic "moderno", "profissional", "exclusivo"** | Banimento ativo — cada uso = QG fail (ver §9) |
| 8 | **Pular C6 (Naturalidade BR)** | BR mode adiciona C6 obrigatório no QG |
| 9 | **Reescrever 9 sections sem aprovação por section** | Aprovar 1, próxima. Nunca despejar 9 e esperar feedback agregado. |
| 10 | **Esquecer de atualizar `src/app/layout.tsx`** | Metadata SEO (title, description, keywords) tem que casar com copy nova |

---

## 3. PROJETO SIGNA — MAPA TÉCNICO COMPLETO

### Stack
```yaml
framework: Next.js 16.2.4 (App Router, Turbopack)
runtime: React 19.2.4
react_dom: 19.2.4
styling: Tailwind CSS 4 (via @tailwindcss/postcss)
animation: Framer Motion 12.38.0
scroll: Lenis 1.3.23
font: Inter (next/font/google), variable --font-inter
typescript: 5.9.3
lint: ESLint 9 + eslint-config-next 16.2.4
```

### Scripts (de `D:\signa-studio\package.json`)
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

### Estrutura completa de arquivos
```
D:\signa-studio\
├── .eslintrc.json
├── .git\                                # git initialized, remote: github.com/Vinisal-Design/signa-studio.git
├── .gitignore
├── .next\                               # build cache, ignorar
├── eslint.config.mjs
├── HANDOFF.md                           # cópia deste documento
├── next.config.mjs
├── next.config.ts                       # nota: 2 configs Next, verificar qual prevalece
├── next-env.d.ts
├── node_modules\                        # 363 packages instalados (1.3MB lockfile)
├── outputs\                             # gerado pelo Copy Forge — ver §6/§12
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public\
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.svg                         # LOGO PRINCIPAL SIGNA
│   ├── logo-icon.svg                    # ÍCONE
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md                            # boilerplate Next, pode ser reescrito
├── src\
│   ├── app\
│   │   ├── favicon.ico
│   │   ├── fonts\                       # vazio ou usado pelo Inter
│   │   ├── globals.css                  # Tailwind base + custom CSS (text-shimmer, dot-grid, animations)
│   │   ├── layout.tsx                   # ⚠️ metadata SEO COMPLETA aqui (title, description, 20 keywords)
│   │   └── page.tsx                     # Importa Navbar + 9 sections + Footer + WhatsAppFloat
│   ├── components\
│   │   ├── animated.tsx                 # 9+ componentes reutilizáveis — VER ABAIXO
│   │   ├── cursor-glow.tsx              # cursor trail effect
│   │   ├── navbar.tsx                   # nav top
│   │   ├── smooth-scroll.tsx            # Lenis wrapper
│   │   └── whatsapp-button.tsx          # WhatsAppCTA + WhatsAppFloat (botão flutuante)
│   └── sections\
│       ├── about.tsx + about.tsx.bak
│       ├── faq.tsx + faq.tsx.bak
│       ├── final-cta.tsx + final-cta.tsx.bak
│       ├── footer.tsx + footer.tsx.bak
│       ├── hero.tsx + hero.tsx.bak
│       ├── how-it-works.tsx + how-it-works.tsx.bak
│       ├── portfolio.tsx + portfolio.tsx.bak
│       ├── pricing.tsx + pricing.tsx.bak
│       └── testimonials.tsx + testimonials.tsx.bak
├── tailwind.config.ts
└── tsconfig.json
```

### Componentes animados disponíveis (de `D:\signa-studio\src\components\animated.tsx`)
**Agente DEVE reusar estes — não criar novos:**
- `FadeIn` — fade + translate Y on scroll, easing easeOutExpo
- `StaggerContainer` — wrapper pra stagger de filhos
- `StaggerItem` — item filho com fade in + translate
- `CharReveal` — texto entra char-by-char (usado em headlines hero)
- `WordReveal` — texto entra palavra-by-palavra
- `CountUp` — animação de número subindo até target
- `Marquee` — texto rolando horizontal infinito
- `MagneticButton` — wrapper que faz botão "magnético" no hover
- `MeshBackground` — background animado abstrato
- `LineReveal` — linha horizontal que cresce
- `WhatsAppCTA` (de `whatsapp-button.tsx`) — botão CTA padrão (variant: primary | outline | whatsapp)
- `WhatsAppFloat` (de `whatsapp-button.tsx`) — botão flutuante canto inferior direito

### Layout / SEO atual (`D:\signa-studio\src\app\layout.tsx`)
```typescript
SITE_NAME: "SIGNA STUDIO"
SITE_URL: "https://site-express-rho.vercel.app"  // ⚠️ PLACEHOLDER, atualizar com domínio real
SITE_DESC: "Crie seu site profissional em 24 horas. Design exclusivo, SEO otimizado e 100% responsivo para dentistas, psicologos, restaurantes, coaches e prestadores de servico. A partir de R$1.500 com garantia total de satisfacao."

title: "SIGNA STUDIO | Site Profissional em 24 Horas | Criacao Express de Sites"
keywords: [20 palavras-chave focadas em SEO BR — completas no arquivo]
```
**Importante:** Quando próxima sessão atualizar copy, ATUALIZAR também este arquivo (afeta SEO + AGEO).

### CSS customizado disponível (`D:\signa-studio\src\app\globals.css`)
Classes que sections usam (verificar antes de reusar):
- `.text-gradient-accent` — gradiente accent-light
- `.text-shimmer` — efeito shimmer no texto
- `.dot-grid` — background de pontos
- `.card-glow` — glow em cards
- `.text-foreground`, `.text-text-muted`, `.text-text-dim` — escala de texto
- `.bg-accent`, `.bg-accent-light` — cores brand
- Animations: `pulse-ring`, `glow-breathe`, `scroll-bounce`, `animate-glow-breathe`, `animate-scroll-bounce`

---

## 4. BRIEF DE NEGÓCIO CONSOLIDADO

```yaml
task_id: COPY-2026-04-28-002-SIGNA-FULLSITE-V3
project: SIGNA Studio — Site Reforge ELITE (v3)
mode: Full E2E Formal (zero atalhos)
deadline_target: 24-48h pra rodar ads frios

business:
  name: SIGNA Studio
  what: Agência de criação de sites profissionais com entrega em 24h úteis
  reform_offer: Reforma/flip de sites existentes
  team_real:
    - Enzo de Farias
    - Vinicius Almeida
    - João Lozano
    - Victor Ferreira
  team_size: 4 desenvolvedores
  clients_real: 10+ projetos pagos entregues (operador confirmou em sessão)
  pricing:
    reforma: R$ 1.500
    site_novo: R$ 2.000
    manutencao: R$ 750/mês
  whatsapp_placeholder: 5511999999999  # PRECISA SUBSTITUIR antes de ads
  instagram_placeholder: signastudio   # PRECISA SUBSTITUIR
  domain_placeholder: site-express-rho.vercel.app  # PRECISA configurar custom domain

audience:
  primary_b2:
    archetype: Profissional liberal/negócio que JÁ roda ads (Meta/Google)
    pain: CPL alto + site mal otimizado destrói ROAS
    awareness: 3 (Solution Aware)
    sophistication: 4 (transição E5)
  secondary_b3:
    archetype: Negócio local sem presença online forte
    pain: Perdendo cliente para concorrente que aparece no Google
    awareness: 2 (Problem Aware)
    sophistication: 4

  what_they_actually_want_RAW_DNA:
    - "Quanto vai me custar?"
    - "Em quanto tempo paga?"
    - "Vou parecer profissional pros meus clientes?"
    - "Eu confio nesse cara?"
    - "Quero meu funil girar"
    - "Mais vendas"
    - "Site bonito, rápido, que passe confiança"

  what_they_DONT_care:
    - JSON-LD, Schema.org, llms.txt (jargão)
    - Next.js, Tailwind, Vercel (nomes de stack)
    - "Stripe-grade", "Linear-style" (referências B2B SaaS)
    - AGEO/LLMO siglas sem tradução

niches_to_address:
  - Dentistas
  - Advogados
  - Psicólogos
  - Restaurantes
  - Nutricionistas
  - Clínicas
  - Coaches
  - Estética
  - Personal Trainers
  - Arquitetos

big_idea_validated:
  one_sentence: "Site profissional, em 24 horas, por 1/3 do preço de uma agência — pra você fechar mais cliente sem queimar dinheiro nem tempo."
  emotional_core: "Cada dia sem site bom é cliente fechando com seu concorrente"
  rational_core: "Faça a conta: 1-3 clientes novos paga o site. Resto é lucro."

unique_mechanism_named:
  brand: "Método Sprint 24"
  pillars:
    1: "Velocidade real (24h contratual, não claim)"
    2: "Garantia tripla (não paga adiantado + refazemos + 100% money-back)"
    3: "Direto com a equipe (WhatsApp, sem gerente de conta)"
  technical_layer_BACK_only:
    - Otimização Google + IA (sem siglas no front, descrever em linguagem comum)
    - Stack profissional (mencionar como "código de verdade", não nomes técnicos)
    - Performance (mencionar como "carrega rápido", não Core Web Vitals)

competitive_anchors:
  diy_wix:
    time: "60h+ do seu tempo"
    quality: "Template genérico"
    price: "R$ 0 + sua paciência"
  freelance:
    time: "2-4 semanas"
    quality: "WordPress de tema"
    price: "R$ 800-1.500"
  agency_traditional:
    time: "30-60 dias"
    quality: "Profissional"
    price: "R$ 8.000-15.000"
  signa:
    time: "24 horas"
    quality: "Qualidade agência"
    price: "R$ 1.500-2.000"
    highlight: true

guarantee_triple:
  1: "Você não paga nada adiantado"
  2: "Não gostou: refazemos com outro conceito, sem cobrar"
  3: "Ainda não gostou: 100% money-back em contrato"

roi_calc_per_profession:
  dentista: { ticket: "R$ 800", payback: "3 procedimentos" }
  advogado: { ticket: "R$ 2.500", payback: "1 caso" }
  psicologo: { ticket: "R$ 200/sessão", payback: "10 sessões = 1 paciente novo" }
  restaurante: { ticket: "R$ 80 ticket médio", payback: "25 reservas" }
  personal_trainer: { ticket: "R$ 600/mês", payback: "1 aluno por 3 meses" }

i18n_required: [PT-BR (primário), EN, ES]
i18n_strategy: TRANSCRIAÇÃO cultural, NÃO tradução literal
i18n_status: NÃO IMPLEMENTADO ainda (Onda 2)
i18n_recommended_lib: next-intl (Next 16 compatible)

ctas:
  primary: "Quero meu site em 24h"
  secondary: "Diagnóstico grátis em 2h"
  final: "Garantir minha vaga agora"
  destination: WhatsApp (https://wa.me/{number} placeholder)

real_assets:
  showcases_count: 6 cards (Unsplash placeholders, mas business reais que SIGNA atende)
  proof_technical: PageSpeed, Core Web Vitals, Schema.org (mencionar em LINGUAGEM HUMANA)
  guarantee: explicit em contrato

NOT_to_use:
  - "200+ sites entregues" (real é 10+)
  - "98% aprovação 1ª versão" (sem dado)
  - "0 reembolsos" (sem dado)
  - "4.9/5" (sem rating real ainda)
  - Testimonials nominais inventados (Marcelo, Fernanda, Rafael — eram placeholders)
  - Foto stock como founders (Lucas Ferreira / Marina Costa eram Unsplash)
  - "Lucas Ferreira", "Marina Costa" (nomes inventados — nunca reaparecer)
```

---

## 5. ESTADO ATUAL DAS 9 SECTIONS (v2)

Todas em `D:\signa-studio\src\sections\`. Veredito é diagnóstico desta sessão pra próxima.

### `D:\signa-studio\src\sections\hero.tsx`
- **Headline atual:** "Site profissional. Em 24 horas. Por 1/3 do preço."
- **Sub:** "Para profissionais e negócios que precisam de um site que passa confiança, fecha venda e está no ar amanhã."
- **CTAs:** "Quero meu site em 24h" + "Ver sites que entregamos"
- **Trust badges:** Site no ar em 24h / 1/3 do preço / Garantia / Pagamento só na aprovação
- **Marquee:** Profissões (DENTISTAS, ADVOGADOS, etc.)
- **Componentes usados:** MeshBackground, CharReveal, MagneticButton, WhatsAppCTA, Marquee
- **Veredito operador:** Direção OK, falta MORDIDA. Ainda genérico.
- **Próxima ação:** Halbert (master) + Carlton (specialist) — Big Secret + Simple Writing

### `D:\signa-studio\src\sections\how-it-works.tsx`
- **H2:** "Cliente decide em 3 segundos"
- **3 cards (why it matters):** Site ruim espanta / Site bom multiplica / Você não precisa entender de tech
- **Sub-section H3:** "Como funciona — 3 passos. Você no controle."
- **3 steps:** WhatsApp 15min / Construímos / Aprovou? No ar
- **Includes box:** 6 itens de entrega (design exclusivo, textos, domínio+hospedagem, otimizado Google+IA, WhatsApp, mobile)
- **Componentes usados:** FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal
- **Veredito:** Educa OK mas storytelling fraco. Falta INSIGHT que CORTA.
- **Próxima ação:** Marshall (master) + Urban (specialist) — Insight Cascade + Concept Naming

### `D:\signa-studio\src\sections\about.tsx`
- **H2:** "4 especialistas. Um único objetivo."
- **Body:** Frustração-driven (R$ 8k agência vs Wix 80h vs freelance ruim). Lista profissões atendidas.
- **4 princípios:** Não paga adiantado / 24h é prazo / Garantia / Direto com equipe
- **Componentes usados:** FadeIn, MeshBackground, LineReveal
- **Veredito:** Direção certa, frustração genérica de mercado. Falta ALMA SIGNA.
- **Próxima ação:** Wiebe (master) + Ogilvy (specialist) — VOC raw + autoridade sem hype

### `D:\signa-studio\src\sections\pricing.tsx` ⭐ MELHOR SECTION DA V2
- **H2:** "Não é gasto. É o cliente que você ainda não fechou."
- **3 planos:** Reforma R$ 1.500 / Site Sprint R$ 2.000 / Manutenção R$ 750/mês
- **Cada plano:** badge ROI ("1 cliente novo paga o investimento")
- **ROI table:** quanto tempo o site se paga por profissão (5 linhas)
- **Comparison table:** Wix / Freelance / Agência / SIGNA (4 linhas, SIGNA highlight)
- **Garantia tripla:** explicit
- **Componentes usados:** FadeIn, StaggerContainer, StaggerItem, MeshBackground, WhatsAppCTA
- **Veredito:** Estrutura sólida. Pode polir copy mas arquitetura está PASS.
- **Próxima ação:** Hormozi (master) + Kennedy (specialist) — refinar copy, não reescrever estrutura

### `D:\signa-studio\src\sections\portfolio.tsx`
- **H2:** "Tipo de site que construímos"
- **6 showcases:** Odontologia / Restaurante / Psicologia / Personal / Advocacia / Confeitaria
- **Imagens:** Unsplash URLs (PRECISA SUBSTITUIR por screenshots reais dos sites do operador)
- **Métrica por card:** "100/100 PageSpeed" — TÉCNICO DEMAIS, repensar
- **Tags por card:** Categoria + features
- **Componentes usados:** FadeIn, StaggerContainer, StaggerItem, MeshBackground, LineReveal, motion.div hover
- **Veredito:** Honest framing OK. Métricas técnicas precisam virar BENEFÍCIO em PT-BR comum.
- **Próxima ação:** Bencivenga (master) + Deutsch (specialist) — proof stacking, cada showcase conta história

### `D:\signa-studio\src\sections\testimonials.tsx` (renomeado conceitualmente "Por que escolher")
- **H2:** "6 motivos pra você não precisar pensar duas vezes"
- **6 cards (provas):** 24h prazo / 1/3 do preço / 0 adiantado / 100% money-back / WhatsApp direto / Aparece Google e IA
- **Componentes usados:** FadeIn, StaggerContainer, StaggerItem, MeshBackground
- **Veredito:** Substituiu testimonials fake (correto, Rule #4). Mas ainda lista de feature, não NARRATIVA.
- **Próxima ação:** Bencivenga (master) + Lampropoulos (specialist) — bullets/fascinations imperdíveis

### `D:\signa-studio\src\sections\faq.tsx`
- **H2:** "Perguntas que você está fazendo agora."
- **8 perguntas:** ROI / 24h / preço / não-gostei / não-entendo-tech / ads / reformar-vs-novo / fora-Brasil
- **Componentes usados:** FadeIn, StaggerContainer, StaggerItem, MeshBackground, motion + AnimatePresence (acordeão)
- **Veredito:** Klaff frame control parcial. Faltam OBJEÇÕES VISCERAIS (dúvidas que cliente NÃO admite).
- **Próxima ação:** Klaff (master) + Makepeace (specialist) — frame control + visceral

### `D:\signa-studio\src\sections\final-cta.tsx`
- **H2:** "Cada dia sem site bom é cliente fechando com seu concorrente"
- **Sub:** "WhatsApp agora → 2h orçamento → 24h site no ar → não paga adiantado"
- **CTA:** "Garantir minha vaga agora" (variant whatsapp)
- **P.S.:** "Você não paga adiantado e tem garantia 100% money-back. O único risco é continuar perdendo cliente pra quem já tem site bom."
- **Componentes usados:** motion, MagneticButton, MeshBackground, WordReveal, WhatsAppCTA
- **Veredito:** OK. Pode intensificar visceral (Makepeace pass).
- **Próxima ação:** Halbert (master) + Makepeace (specialist) — PAS visceral

### `D:\signa-studio\src\sections\footer.tsx`
- **Tagline:** "Sites profissionais. Em 24 horas. Por 1/3 do preço."
- **Nav:** Como funciona / Quem somos / Investimento / Sites entregues / Por que escolher / FAQ
- **Social:** WhatsApp + Instagram (placeholders)
- **Veredito:** OK.
- **Próxima ação:** Ogilvy (master) — brand seal, brevidade, sem hype

---

## 6. INTELLIGENCE PACKAGE (artifacts já gerados)

### Schwartz Awareness — `D:\signa-studio\outputs\intelligence\signa\F2-schwartz-diagnosis.yaml`
- **Primary:** Solution Aware (Nível 3) — B2 rodadores de ads
- **Secondary:** Problem Aware (Nível 2) — B3 negócios locais
- **Sofisticação:** E4 → E5 transição (oportunidade first-mover)
- **Mass Desire:** "Não perder cliente / não queimar dinheiro de ads" → "Sobrevivência econômica na transição digital"

### Ford 6 Leads — `D:\signa-studio\outputs\intelligence\signa\F2-ford-lead-selection.yaml`
- **Primary:** Big Secret Lead (Solution Aware + mecanismo virgem)
- **Secondary:** Problem-Solution Lead (final-cta para B3)
- **Rule of One:** PASS (one idea, one promise, one offer, one audience)

### Todd Brown Mechanism — `D:\signa-studio\outputs\intelligence\signa\F2-todd-brown-mechanism.yaml`
- **⚠️ ARQUIVO DESATUALIZADO** — refere "Sprint 24 + AGEO/LLMO Stack" (rejeitado pelo operador)
- **Brand correto v3:** "Método Sprint 24" (sem AGEO/LLMO no front)
- **3 Pilares (corrigidos):** Velocidade / Garantia tripla / Direto com equipe
- **Camada técnica:** AGEO/LLMO existe NO PRODUTO mas NUNCA na copy front

**Próxima sessão deve:** atualizar este YAML antes de F4

---

## 7. PIPELINE FORMAL DE ELITE — PRÓXIMA SESSÃO

### F2 RE-EXECUTION (intensificar diagnóstico, não re-rodar awareness)

**Por quê:** Schwartz/Ford/Todd Brown da v1 foi rodado MAS aplicado superficialmente.

1. **`Skill("copy:agents:eugene-schwartz")`** — comando `*intensify`
   - Payload: site v2 + veredito raw operador + intelligence package completo
   - Output: 7 passos de amplificação aplicados section por section

2. **`Skill("copy:agents:robert-collier")`** — TIER 0 que faltou
   - Comando: "Enter the Conversation" (mental conversation já em curso na cabeça do prospect)
   - Output: linguagem visceral que continua o pensamento dele
   - Por quê: copy v2 ainda fala COM o cliente, não DENTRO da conversa que ele já tem

3. **`Skill("copy:agents:claude-hopkins")`** — Scientific audit da v2
   - Comando: `*audit-copy`
   - Output: score 0-100 por section + lista de banimentos + lista de substituições

### F3 ROUTING — Squad Assignment Por Section

| Section | Master | Specialist | Lead Type | Rationale |
|---|---|---|---|---|
| **hero** | `gary-halbert` | `john-carlton` | Big Secret + Simple Writing | Halbert puxa narrativa, Carlton escreve "como pro vizinho" |
| **how-it-works** | `perry-marshall` | `tim-urban` | Insight Cascade + Concept Naming | Marshall ensina vendendo, Urban nomeia conceitos que ficam |
| **about** | `joanna-wiebe` | `david-ogilvy` | Founder honest + premium voice | Wiebe = VOC raw, Ogilvy = autoridade sem hype |
| **pricing** | `alex-hormozi` | `dan-kennedy` | Grand Slam Offer + 3Ms | Refinar v2 (estrutura PASS), value equation |
| **portfolio** | `gary-bencivenga` | `david-deutsch` | Proof stacking | Cada showcase CONTA HISTÓRIA, não lista tags |
| **testimonials/proofs** | `gary-bencivenga` | `parris-lampropoulos` | Bullets/Fascinations | Os 6 motivos viram fascinations imperdíveis |
| **faq** | `oren-klaff` | `clayton-makepeace` | Frame Control + visceral | Cada resposta REPOSICIONA cético |
| **final-cta** | `gary-halbert` | `clayton-makepeace` | PAS visceral | Halbert puxa, Makepeace amplifica emoção |
| **footer** | `david-ogilvy` | — | Brand seal | Brevidade, peso, sem hype |

**Toolbox (post-creation, validação):**
- `joe-sugarman` — `*sugarman-check` (30 triggers, NUNCA 31)
- `claude-hopkins` — `*audit-copy` (scientific final)
- `mark-ford` — `*review` (Rule of One enforcement)

**Voice anchor (TODOS payloads):**
- `voice/{agent}.yaml` para cada agente invocado
- `phrases/{agent}.yaml` para signature phrases
- `authority/{agent}.yaml` para autoridade
- ICP raw verbatims (de `D:\signa-studio\outputs\intelligence\signa\F2-icp-verbatims.yaml` quando criado)

### F4 DRAFT — Atomic Loading Protocol

Para CADA invocação de agente:
```yaml
PAYLOAD:
  1. D:\signa-studio\.brain\SOUL-signa.md           # voice DNA SIGNA (CRIAR — ver §8)
  2. D:\signa-studio\outputs\intelligence\signa\F1-copy-brief.yaml
  3. D:\signa-studio\outputs\intelligence\signa\F2-schwartz-diagnosis.yaml
  4. D:\signa-studio\outputs\intelligence\signa\F2-ford-lead-selection.yaml
  5. D:\signa-studio\outputs\intelligence\signa\F2-todd-brown-mechanism.yaml  # ATUALIZAR antes
  6. D:\signa-studio\outputs\intelligence\signa\F2-collier-conversation.yaml  # CRIAR
  7. D:\signa-studio\outputs\intelligence\signa\F2-icp-verbatims.yaml         # CRIAR
  8. agent_definition.md                            # arquivo completo do agente
  9. agent voice + phrases + authority YAMLs
  10. section_v2_current_code                       # arquivo .tsx atual (refactor, não rewrite zero)
  11. operator_veredict_RAW                         # §1 deste handoff, transcrito literal
  12. anti_pattern_blocklist                        # §9 deste handoff
```

### F5 FORGE — QG-COPY Por Section (threshold elevado v3)

| Critério | Peso | Pass v3 |
|---|---|---|
| C1 Voice Alignment | 30% | ≥ 0.80 (auto-fail < 0.65) |
| C2 Intelligence Integration | 20% | ≥ 0.85 |
| C3 Framework Execution | 20% | ≥ 0.85 |
| C4 Persuasion Architecture | 15% | ≥ 0.85 |
| C5 Actionability | 15% | ≥ 0.85 |
| **C6 Naturalidade BR (NEW)** | bonus | ≥ 0.85 |

- **Threshold global:** Pass ≥ 0.85 / Conditional 0.75-0.84 / Fail < 0.75
- **Sugarman 30 Triggers:** ≥ 80% coverage por section
- **Hopkins Scientific Audit:** ≥ 85/100 por section
- **Output:** `D:\signa-studio\outputs\quality\signa\qg-report-COPY-2026-04-28-002-{section}.yaml`

### F6 SHIP — Operator Approval + i18n + Ads

```
SHIP_GATE_v3:
  1. Operator approves CADA section antes de avançar pra próxima
  2. Substituições obrigatórias antes do go-live:
     - WhatsApp number real (todos os arquivos: hero.tsx, footer.tsx, whatsapp-button.tsx)
     - Instagram handle real
     - Custom domain (substitui site-express-rho.vercel.app)
     - Screenshots reais nos 6 cards de portfolio.tsx
     - Atualizar layout.tsx metadata (title, description, keywords) pra refletir copy v3
  3. Build clean: cd D:/signa-studio && npm run build sem warnings
  4. Lighthouse 100 nas 4 categorias
  5. Schema.org validator pass (validator.schema.org)
  6. Onda 2: i18n EN + ES (next-intl, transcriação cultural)
  7. Onda 3: hormozi-ads gera 12+12 hooks por idioma
  8. Onda 4: prova real (testimonials de clientes existentes)
```

---

## 8. ASSETS A CRIAR (faltam ainda)

### `D:\signa-studio\.brain\SOUL-signa.md` (CRIAR)
**Propósito:** Voice DNA anchor da SIGNA, carregado em todo payload de agente.
**Conteúdo a definir:**
- Voice DNA: direto, técnico-confiante NO PRODUTO, popular NA COMUNICAÇÃO, anti-coach-speak, anti-hype
- Tom: como Halbert escrevia carta — pra UMA pessoa, não pra audiência
- Banned vocabulary: ver §9
- Allowed vocabulary: "conta", "fechar", "cliente", "venda", "WhatsApp", "agora", "rápido", "concorrente", "tempo", "dinheiro"
- Manifesto de 1 página — "Por que existe a SIGNA"

### `D:\signa-studio\outputs\intelligence\signa\F2-collier-conversation.yaml` (CRIAR)
**Propósito:** Mental conversation que o ICP tem com ele mesmo (Collier — "Enter the Conversation")
**Conteúdo:**
- Exatamente o que ele diria pra esposa/sócio sobre "estou pensando em fazer um site"
- Linguagem real, não sanitizada
- 1 conversation por arquétipo (B2 + B3)

### `D:\signa-studio\outputs\intelligence\signa\F2-icp-verbatims.yaml` (CRIAR — precisa input operador)
**Propósito:** Falas REAIS extraídas de operador, raw VOC mining para Wiebe
**Conteúdo:**
- 5 verbatims por nicho (10 nichos × 5 = 50 frases reais)
- Source: operador conversa com clientes via WhatsApp, deve ter histórico
- Servem de matéria-prima pra todos os agentes

### `D:\signa-studio\outputs\intelligence\signa\F2-todd-brown-mechanism.yaml` (ATUALIZAR)
**Hoje:** Refere "Sprint 24 + AGEO/LLMO Stack"
**Atualizar para:** "Método Sprint 24" apenas. AGEO/LLMO vira capability técnica, NÃO pitch público.

### Screenshots reais (operador envia)
**Substituir Unsplash em:** `D:\signa-studio\src\sections\portfolio.tsx`
- 6 imagens (one per card)
- Otimizadas (next/image suportado)
- Salvar em `D:\signa-studio\public\showcases\` (criar pasta)

### Substituições no código (operador faz ou Copy Chief atualiza)
| Placeholder | Onde | Substituir por |
|---|---|---|
| `5511999999999` | `hero.tsx`, `footer.tsx`, `whatsapp-button.tsx` | número real |
| `signastudio` (Instagram) | `footer.tsx` | handle real |
| `site-express-rho.vercel.app` | `layout.tsx` (SITE_URL) | domínio custom |

---

## 9. ANTI-PATTERN BLOCKLIST (banimento ativo na v3)

### Vocabulário banido (auto-fail QG)

**Genérico/clichê:**
- "moderno", "profissional" (sem contexto), "exclusivo", "único"
- "transforme", "desbloqueie", "jornada", "potencial"
- "experiência" (sem qualificador), "compromisso", "humanizado"
- "qualidade premium", "atendimento de excelência"
- "design clean", "visual elegante"
- "soluções", "estratégias"

**Hype/coach-speak:**
- "revolucionário", "disruptivo", "inovador"
- "leve seu negócio para o próximo nível"
- "conquiste seus objetivos"
- "potencialize seus resultados"
- "decole sua presença digital"

**Buzzword tech (NO FRONT — vai pra capability técnica oculta):**
- "Stripe-grade", "Linear-style"
- "AGEO/LLMO Stack" (ok como capability backend, não pitch)
- "JSON-LD", "Schema.org", "llms.txt" (jargão sem tradução)
- "Core Web Vitals" → vira "carrega rápido"
- "Stack profissional" → vira "código de verdade"

**Métricas vazias:**
- "200+", "4.9/5", "98%" (sem fonte real)
- Testimonials com nomes inventados
- Cases sem prova clicável

### Estruturas banidas
- Listar features sem benefício associado (cada feature precisa de "isso significa que...")
- Tabelas comparativas sem coluna "Por que importa"
- Cards de "valores" abstratos
- "Sobre nós" como CV corporativo

---

## 10. CHECKLIST DE EXECUÇÃO (linear, sem atalho)

```
[ ] PRE-FLIGHT (próxima sessão lê + cria)
    [ ] Read este handoff INTEIRO (D:\marketing-os\docs\sessions\2026-04\handoff-signa-studio-S1.md)
    [ ] Read F1-copy-brief.yaml RAW
    [ ] Read F2-schwartz / F2-ford / F2-todd-brown RAW (sem summarize)
    [ ] Read 9 sections .tsx atuais em D:\signa-studio\src\sections\
    [ ] Verificar dev server: curl http://localhost:3000 (reativar se preciso)
    [ ] CRIAR D:\signa-studio\.brain\SOUL-signa.md
    [ ] CRIAR D:\signa-studio\outputs\intelligence\signa\F2-collier-conversation.yaml
    [ ] CRIAR D:\signa-studio\outputs\intelligence\signa\F2-icp-verbatims.yaml (pedir input operador)
    [ ] ATUALIZAR D:\signa-studio\outputs\intelligence\signa\F2-todd-brown-mechanism.yaml (remover AGEO/LLMO do brand)

[ ] F2 RE-EXECUTION (3 agentes em sequência)
    [ ] Skill("copy:agents:eugene-schwartz") — *intensify
    [ ] Skill("copy:agents:robert-collier") — Enter the Conversation
    [ ] Skill("copy:agents:claude-hopkins") — *audit-copy v2

[ ] F3 ROUTING — confirmar squad assignment com operador (§7)

[ ] F4 DRAFT — section by section (ordem sugerida)
    [ ] hero: gary-halbert + john-carlton          → operador aprova → próxima
    [ ] final-cta: gary-halbert + clayton-makepeace → operador aprova → próxima
    [ ] pricing: alex-hormozi + dan-kennedy         → refinar v2
    [ ] proofs: gary-bencivenga + parris-lampropoulos
    [ ] how-it-works: perry-marshall + tim-urban
    [ ] about: joanna-wiebe + david-ogilvy
    [ ] portfolio: gary-bencivenga + david-deutsch
    [ ] faq: oren-klaff + clayton-makepeace
    [ ] footer: david-ogilvy

[ ] F5 FORGE
    [ ] QG-COPY 6 critérios (incluindo C6 BR) por section, threshold ≥ 0.85
    [ ] Sugarman 30 triggers ≥ 80% coverage
    [ ] Hopkins audit ≥ 85/100
    [ ] Salvar QG report por section em D:\signa-studio\outputs\quality\signa\

[ ] F6 SHIP
    [ ] Operator approval por section (loop)
    [ ] Substituir WhatsApp/Instagram placeholders (hero.tsx, footer.tsx, whatsapp-button.tsx)
    [ ] Substituir domain placeholder (layout.tsx)
    [ ] Atualizar metadata SEO em layout.tsx
    [ ] Operador envia 6 screenshots reais → portfolio.tsx
    [ ] Build clean: cd D:/signa-studio && npm run build
    [ ] Lighthouse 100 nas 4 categorias
    [ ] Salvar QG-report v3 final em D:\signa-studio\outputs\quality\signa\
    [ ] Salvar Pipeline log v3 em D:\signa-studio\outputs\copy\signa\
    [ ] git commit pré-deploy

[ ] ONDAS SEGUINTES (após v3 PT-BR aprovado e em produção)
    [ ] Onda 2: i18n EN + ES (next-intl + transcriação cultural)
    [ ] Onda 3: hormozi-ads — 12 hooks Meta + 12 Google por idioma
    [ ] Onda 4: prova real (testimonials de clientes existentes)
```

---

## 11. PRINCÍPIOS DE OURO PRA PRÓXIMA SESSÃO

1. **Tier 0 NÃO É RITUAL — é diagnóstico vivo.** Cada agente que entra carrega o diagnóstico aplicado, não recita.
2. **RAW DNA SEMPRE.** P0 e verbatims vão crus pro agente. Summarize = QG fail.
3. **1 Master + 0-1 Specialist.** Nunca 3+ por section. Frankenstein é o anti-pattern.
4. **Voice DNA antes de copy.** SOUL-signa.md + voice/{agent}.yaml em todo payload.
5. **Operador valida CADA section antes de avançar.** Não bater 9 e mostrar — mostrar 1, ajustar, próxima.
6. **Anti-clichê é trabalho ativo.** Cada draft passa por blocklist do §9 antes de QG.
7. **Naturalidade BR = C6 obrigatório.** Soa como conversa de mesa de bar com cliente, não copy americana traduzida.
8. **Técnica vai pro fundo.** Front é DINHEIRO + CONFIANÇA + RAPIDEZ.
9. **Cliente compra a transformação, não o produto.** "Mais cliente, menos dor de cabeça, agora."
10. **Honest > impressive.** Se a v3 não puder ser comprovada, não pode ser dita.
11. **Reusar componentes, não criar novos.** Animated.tsx tem 9+ helpers prontos.
12. **Atualizar layout.tsx metadata sempre que copy mudar.** SEO + AGEO casam com copy.

---

## 12. ARTIFACTS REFERENCE — Paths Absolutos

### Existentes (✅)
```
D:\signa-studio\
├── src\sections\hero.tsx                            ✅ v2 atual
├── src\sections\how-it-works.tsx                    ✅ v2 atual
├── src\sections\about.tsx                           ✅ v2 atual
├── src\sections\pricing.tsx                         ✅ v2 atual ⭐
├── src\sections\portfolio.tsx                       ✅ v2 atual
├── src\sections\testimonials.tsx                    ✅ v2 atual
├── src\sections\faq.tsx                             ✅ v2 atual
├── src\sections\final-cta.tsx                       ✅ v2 atual
├── src\sections\footer.tsx                          ✅ v2 atual
├── src\sections\*.tsx.bak                           ✅ 9 backups da v0 ORIGINAL
├── src\app\layout.tsx                               ✅ metadata SEO atual
├── src\app\page.tsx                                 ✅ orquestra 9 sections
├── src\app\globals.css                              ✅ Tailwind + custom CSS
├── src\components\animated.tsx                      ✅ 9+ helpers reusáveis
├── src\components\navbar.tsx                        ✅
├── src\components\smooth-scroll.tsx                 ✅ Lenis wrapper
├── src\components\cursor-glow.tsx                   ✅
├── src\components\whatsapp-button.tsx               ✅ WhatsAppCTA + WhatsAppFloat
├── public\logo.svg                                  ✅ logo principal
├── public\logo-icon.svg                             ✅ ícone
├── package.json                                     ✅ scripts: dev/build/start/lint
├── tailwind.config.ts                               ✅
├── tsconfig.json                                    ✅
├── next.config.ts                                   ✅
├── outputs\intelligence\signa\F1-copy-brief.yaml    ✅
├── outputs\intelligence\signa\F2-schwartz-diagnosis.yaml ✅
├── outputs\intelligence\signa\F2-ford-lead-selection.yaml ✅
├── outputs\intelligence\signa\F2-todd-brown-mechanism.yaml ⚠️ ATUALIZAR
├── outputs\quality\signa\qg-report-COPY-2026-04-27-001.yaml ⚠️ DESATUALIZADO (v1)
├── outputs\copy\signa\F6-pipeline-log.yaml          ⚠️ DESATUALIZADO (v1)
└── HANDOFF.md                                       ✅ cópia deste documento

D:\marketing-os\
└── docs\sessions\2026-04\handoff-signa-studio-S1.md ✅ MESTRE (este)
```

### A Criar (❌)
```
D:\signa-studio\
├── .brain\SOUL-signa.md                                       ❌ CRIAR
├── outputs\intelligence\signa\F2-collier-conversation.yaml    ❌ CRIAR
├── outputs\intelligence\signa\F2-icp-verbatims.yaml           ❌ CRIAR (precisa operador)
├── public\showcases\                                          ❌ CRIAR pasta
│   ├── showcase-01.{jpg|png|webp}                             ❌ operador envia
│   ├── showcase-02.{jpg|png|webp}                             ❌ operador envia
│   └── ... (6 total)                                          ❌ operador envia
└── outputs\quality\signa\qg-report-COPY-2026-04-28-002-{section}.yaml ❌ gerar por section v3
```

---

## 13. PRIMEIRA AÇÃO DA PRÓXIMA SESSÃO (passos 1-10)

```
1. Operador inicia: /copy
2. Copy Chief greets (ativação padrão)
3. Operador diz: "Tô continuando SIGNA. Lê D:\signa-studio\HANDOFF.md"
4. Copy Chief lê este documento INTEIRO + RAW de F1/F2 em D:\signa-studio\outputs\
5. Copy Chief confirma:
   - Tier 0 já feito (não re-rodar awareness, RE-INTENSIFICAR)
   - Mechanism corrigido: "Método Sprint 24" (sem AGEO/LLMO público)
   - Squad assignment do §7
6. Operador valida assignment ou ajusta
7. Copy Chief CRIA D:\signa-studio\.brain\SOUL-signa.md (estrutura definida em §8)
8. Copy Chief PEDE operador 5 verbatims reais por nicho (15min) → cria F2-icp-verbatims.yaml
   (Plan B se sem tempo: gera hipótese + marca como "hypothesis_unvalidated")
9. F2 RE-EXECUTION: Skill Schwartz *intensify + Collier + Hopkins audit (§7)
10. F4 começa: hero primeiro (gary-halbert + john-carlton com payload completo do §7)
11. Operador aprova hero → próxima section (final-cta)
12. Loop até 9 sections com QG ≥ 0.85
```

---

## 14. PLAN B (se algo quebrar)

| Problema | Ação |
|---|---|
| **Operador sem tempo pra verbatims** | Copy Chief gera hipótese de verbatims baseada em ICP profile, marca como "hypothesis_unvalidated", operador revisa depois |
| **QG repetindo fail mesmo com agente certo** | Trocar agente (anti-loop CB4), não tentar 3ª vez com mesmo |
| **Build quebra após edição** | Rollback `.tsx.bak` (mas atenção: é v0 ORIGINAL, não v2 — perde trabalho atual) |
| **Operador disse "tá tudo errado"** | Voltar pra F2 RE-EXECUTION, não F4. Diagnóstico errado se output errado. |
| **Dev server não liga** | `cd D:/signa-studio && rm -rf .next && npm run dev` |
| **TypeScript erro pós-edição** | Verificar imports de `@/components/animated`, `@/components/whatsapp-button`, `framer-motion` |
| **Tailwind classes não aplicam** | Confirmar Tailwind 4 (não 3) — sintaxe `@import "tailwindcss"` em globals.css |
| **i18n quebra (Onda 2)** | Adicionar middleware Next 16 + locale routing antes de tocar nas sections |

---

**Fim do handoff v2. Próxima sessão: zero atalhos, formal F1→F6, 1 section por vez com aprovação de operador.**

**Última verificação antes de fechar sessão S1:**
- ✅ Paths absolutos em todas as referências
- ✅ Histórico v0/v1/v2 esclarecido (backup .bak = v0, v1 perdida, v2 em disco)
- ✅ Stack completa documentada (Next 16, React 19, Tailwind 4, Framer 12, Lenis 1.3)
- ✅ Componentes reutilizáveis listados (animated.tsx + whatsapp-button.tsx)
- ✅ Layout.tsx SEO metadata referenciado pra atualização junto da copy
- ✅ Git remote e status documentados
- ✅ Todos os placeholders listados (WhatsApp, Instagram, domain, screenshots)
- ✅ 14 seções, 13 itens checklist, 9 sections mapeadas, 12 itens payload, 6 critérios QG
- ✅ Plan B com 8 cenários

Co-Authored-By: Claude Opus 4.7 (Copy Chief) <noreply@anthropic.com>
