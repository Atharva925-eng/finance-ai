# Finance OS — Copilot workspace instructions

## What this project is

Finance OS is an AI-powered personal financial monitoring and tax assistant.
It unifies expense tracking, budgeting, tax assistance, and financial news
analysis into one platform, instead of users juggling separate apps.

Target users: students, working professionals, freelancers, small business
owners, individual investors.

Planned modules (full product, most not built yet):
1. Expense Tracking — manual entry, OCR bill scanning, auto-categorization
2. Budget Management — budget creation/tracking, overspending alerts, health score
3. Tax Assistant — tax calculation, deduction suggestions, reports
4. Financial News Analysis — aggregation, sentiment analysis, bullish/bearish detection
5. AI Financial Advisor — savings/investment recommendations, goal-based planning
6. AI Chatbot — finance Q&A, budget/tax/investment guidance

Full tech stack (later phases): React (frontend, this repo), FastAPI +
PostgreSQL (backend, not started), Scikit-Learn/Transformers/Pandas (AI/ML,
not started), Tesseract OCR + OpenCV (OCR, not started), LangGraph/CrewAI
(agentic AI layer, not started).

## Current phase: frontend shell only

We are building **just the React UI**, plain CSS (no Tailwind), no backend,
no AI logic. Everything is mock data for now. Keep components small,
self-contained, and easy to swap for real API calls later.

## Already built — don't rebuild these, build on top of them

```
src/
├── App.jsx                          → mounts DashboardLayout
├── styles/tokens.css                → design tokens, see below
├── components/layout/
│   ├── Sidebar.jsx / Sidebar.css    → logo, 7 nav items, settings/logout, collapses to icons under 900px
│   ├── Topbar.jsx / Topbar.css      → search, mail/bell icons, theme toggle, avatar+name
│   └── ThemeToggle.jsx              → flips data-theme="dark" on <html>
├── components/news/
│   ├── NewsBanner.jsx / .css        → full-width hero, rotates mock items every 3s, fade transition
└── pages/
    ├── DashboardLayout.jsx / .css   → composes Sidebar + Topbar + NewsBanner + 3 skeleton placeholder cards
data/
└── mockNews.js
```

The 3 skeleton placeholder cards in `DashboardLayout.jsx` are labeled
"Expense overview", "Budget status", "Tax snapshot" — these are exactly
what we're replacing next.

## Design tokens (already in `src/styles/tokens.css` — reuse, don't redefine)

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--color-primary` | `#6c5ce7` | same | logo, active nav, buttons, banner |
| `--color-primary-dark` | `#4b3fbf` | same | hover/active states |
| `--color-bg` | `#f5f4fb` | `#14142b` | page background |
| `--color-surface` | `#ffffff` | `#1c1c38` | cards, sidebar, topbar |
| `--color-text-primary` | `#14142b` | `#f5f4fb` | headings, main text |
| `--color-text-secondary` | `#6e7191` | `#a3a3c2` | muted text |
| `--color-chip-purple-bg` / `-text` | `#edebfb` / `#6c5ce7` | dark-adjusted | neutral tag/chip |
| `--color-chip-teal-bg` / `-text` | `#e7f8f3` / `#1f9b7c` | dark-adjusted | bullish/success badge |
| `--color-chip-coral-bg` / `-text` | `#fceff3` / `#e0556b` | dark-adjusted | bearish/danger/alert badge |
| `--color-border` | `#ececec` | `#2e2e54` | hairline borders |
| `--color-skeleton` | `#ececec` | `#2e2e54` | placeholder skeleton bars |
| `--radius` | `16px` | same | cards, pills, buttons |

Dark mode works via `[data-theme="dark"]` on `<html>` — always reference
colors through `var(--token)`, never hardcode hex in new CSS.

## Conventions to follow for every new piece of work

- One component = one `.jsx` + one same-named `.css` file, colocated in the
  same folder. No CSS-in-JS, no Tailwind in this phase.
- Mock data goes in its own file under `src/data/mockX.js`, exported as the
  default export, shaped so swapping in a real `fetch()` later is a one-line change.
- Keep components short and single-purpose — no over-engineering, no extra
  abstraction layers, no premature prop-drilling solutions (no context/redux
  yet unless explicitly asked).
- Use `lucide-react` for icons (already a dependency) — don't add new icon
  libraries.
- Match the existing visual language: white/surface cards, 16px radius,
  purple/teal/coral chip badges for status, generous padding, sentence case
  copy, no all-caps except small eyebrow labels if any.
- Don't touch `Sidebar.jsx`, `Topbar.jsx`, or `NewsBanner.jsx` unless a
  prompt explicitly asks you to — new work plugs into `DashboardLayout.jsx`.
