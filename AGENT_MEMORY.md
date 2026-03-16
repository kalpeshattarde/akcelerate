# AKcelerate — Agent Memory Log
> This file is a persistent memory log for coding agents working on this project.
> It records all sessions, prompts received, decisions made, and changes applied.
> Always read this file first before starting any new task.

---

## Project Identity

| Field | Value |
|---|---|
| **Project** | AKcelerate — Premium AI, Data, Automation & Business Consulting |
| **Founder** | Kalpesh Attarde |
| **Phone** | +91 9529314215 |
| **Email** | officialkalpeshattarde@gmail.com |
| **WhatsApp** | https://wa.me/919529314215 |
| **Location** | Mumbai, India |
| **GitHub** | https://github.com/kalpeshattarde/AKcelerate.git |
| **Push command** | `git push "https://kalpeshattarde:${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/kalpeshattarde/akcelerate.git" main` |

---

## Brand Positioning (Current — Post Repositioning)

- **Tagline**: "Build Smarter Business with AI & Automation"
- **Old positioning**: Narrow "AI Manufacturing Analytics" for Indian factories
- **New positioning**: Broad premium consulting across AI, Data, Automation & Business

### 8 Solution Areas
1. Business Automation
2. AI/ML Solutions
3. Business Consulting
4. Website & SaaS Development
5. Automated Analytics
6. Data Visualization
7. Cloud & DevOps
8. MLOps

### 13+ Industries Served
Manufacturing, FMCG, Healthcare, Retail, FinTech, Education, Real Estate, Logistics, IT/Tech, E-commerce, Startups, SMBs, Enterprises

---

## Design System

| Token | Value |
|---|---|
| Body background | `#FFFFFF` |
| Alt sections | `#F0F7FF` |
| Primary | `#2563EB` (Blue) |
| Accent | `#06B6D4` (Cyan) |
| Headings | `#0F172A` |
| Body text | `#64748B` (slate-500) |
| Card borders | `#E2E8F0` |
| Dark theme toggle | `[data-theme="dark"]` on `<html>`, stored in `localStorage` as `ak-theme` |
| Nav font size | `14px` (0.875rem) — **do not change** |

---

## Tech Stack

- **Runtime**: Node.js 20 + Express 4
- **Security**: Helmet + express-rate-limit
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS (Animate on Scroll), Lucide Icons
- **Fonts**: Google Fonts — Poppins (headings) + Inter (body)
- **Port**: 5000, Host: 0.0.0.0
- **Workflow command**: `npm start`

---

## File Map

| File | Status | Notes |
|---|---|---|
| `public/index.html` | ✅ Fully updated | Homepage — hero, integrations, case studies, team, knowledge hub |
| `public/solutions.html` | ✅ Fully updated | 8 solution areas, 13 industries |
| `public/about.html` | ✅ Fully updated | Hero, What We Do, Founder bio, FAQ (6 Q&As), CTA |
| `public/services.html` | ✅ Fully updated | 4 capability cards, 5 process steps, integration list |
| `public/founder.html` | ✅ Fully updated | Hero, story, 4 competency cards, philosophy quote, CTA |
| `public/contact.html` | ✅ Contact info updated | Phone, email, WhatsApp |
| `public/pricing.html` | ✅ Contact info updated | Plans unchanged |
| `public/css/styles.css` | ✅ Unchanged | Light + dark themes, navbar, glass-card, components |
| `public/js/script.js` | ✅ Unchanged | Theme toggle, counters, AOS, FAQ, mobile menu |
| `server/server.js` | ✅ Unchanged | Express routes, Helmet, rate-limiting |
| `public/case-studies.html` | ⚠️ Not reviewed this session | May still have manufacturing-specific copy |
| `public/blog.html` | ⚠️ Not reviewed this session | May have old references |
| `public/services/predictive-maintenance.html` | ⚠️ Sub-page — not repositioned | Old manufacturing content, linked from old nav only |
| `public/services/supply-chain-analytics.html` | ⚠️ Sub-page — not repositioned | Old manufacturing content |
| `public/services/quality-analytics.html` | ⚠️ Sub-page — not repositioned | Old manufacturing content |
| `public/services/energy-management.html` | ⚠️ Sub-page — not repositioned | Old manufacturing content |
| `public/careers.html` | ⚠️ Not reviewed | May have old references |
| `public/privacy.html` | ⚠️ Not reviewed | Contact info may be outdated |
| `public/terms.html` | ⚠️ Not reviewed | Contact info may be outdated |
| `public/gallery.html` | ⚠️ Not reviewed | — |
| `public/resources.html` | ⚠️ Not reviewed | — |

---

## Session Log

---

### Session 1 — Brand Repositioning (March 2026)

**Objective**: Reposition AKcelerate from narrow "AI Manufacturing Analytics" to broad premium consulting platform.

**Prompts / Instructions Received**:
- Remove all manufacturing-specific copy from every page
- Broaden brand to 8 solution areas + 13 industries
- Replace old contact info (phone: +91 8208555380, email: akcelerateindia@gmail.com) with new info everywhere
- Every button and link must point to a real page — no `href="#"` dead links
- Keep nav font at 14px (0.875rem) — do not change
- Push all changes to GitHub after completion

**Key Decisions Made**:
- Old narrow positioning removed entirely — no "AI Manufacturing Analytics" copy remains on main pages
- Manufacturing is still listed as one of 13 industries served (it is a valid client sector, not the only one)
- Case study card "Predictive Analytics for Automotive Retail Chain" rewritten with consistent retail-focused metrics (stock-outs, inventory, fulfillment), not factory/CNC references
- Philosophy quote updated from "Indian manufacturers" to "Indian businesses"
- Footer Solutions links on `founder.html` updated to point to `solutions.html` instead of old sub-pages
- `replit.md` updated to reflect new brand positioning and new contact info

**Changes Applied**:

#### `public/index.html`
- Meta title/description → broad consulting
- Hero headline + subheadline → "Build Smarter Business with AI & Automation"
- Hero capability cards → AI/ML, Business Automation, SaaS Dev, Data Analytics
- Dashboard mockup → domain changed to `akcelerate.in/dashboard`, metrics updated (AI Accuracy, Uptime, Defect Rate), chart title → "Business Performance – Last 7 Days"
- Integration strip → SAP ERP, HubSpot, Google Analytics, Stripe, PostgreSQL, Salesforce, Azure, AWS
- "About" section → broad consulting copy
- Core Benefits header → updated
- Case studies subheading → cross-industry impact copy
- Case study 1 → Automotive Retail Chain with demand forecasting metrics (₹2.8Cr savings, 38% stock-out reduction, 22% fulfillment improvement)
- Process steps → updated
- Industries section → 13 industries
- Team intro paragraph → broader multidisciplinary description
- Dr. Shreya Mehta bio → "enterprise clients across industries"
- Rahul Kulkarni bio → "LLM engineering, AI automation pipelines"
- Priya Singh bio → "FMCG, Healthcare, Retail, Fintech sectors"
- Knowledge Hub card → "production-grade ML models … business environments"
- Contact info → all updated globally

#### `public/solutions.html`
- Full rewrite with 8 detailed solution area cards
- 13 industries grid
- All CTAs pointing to real pages

#### `public/about.html`
- Hero → "Built by Problem-Solvers, For Real Businesses"
- What We Do section → 8 solution areas
- Founder bio → updated
- Team descriptions → updated
- FAQ → 6 broad Q&As
- Footer Solutions links → updated

#### `public/services.html`
- Hero → broad consulting hero
- 4 capability cards → Data Integration, Advanced Analytics & AI, Operational Intelligence, Custom AI & MLOps
- Process steps 1–5 → updated
- Integration list + supported systems → updated
- Footer → updated

#### `public/founder.html`
- Hero tagline → "AI, Data & Business Consulting practitioner … across 13+ industries"
- Skill tags → Business Automation + Data Engineering (replaced Manufacturing Analytics + IoT & Industry 4.0)
- Story paragraphs → broad Indian business narrative
- Core Competency cards → cross-industry language (CRMs, ERPs, SaaS tools instead of SCADA/IoT)
- Philosophy quote → "Indian businesses" (was "Indian manufacturers")
- CTA → "Ready to Transform Your Business?" (was "Your Plant?")
- Footer description → "AI, Data, Automation & Business Consulting for India"
- Footer Solutions links → point to `solutions.html`

#### `replit.md`
- Title updated
- Overview updated
- Founder contact info updated
- New "Brand Positioning" section added (8 solution areas, 13 industries)

**GitHub Push**: Completed — 32 objects pushed to `main` at commit `4533d68`

---

## Known Remaining Work (For Future Sessions)

| Task | Priority | Notes |
|---|---|---|
| Update `case-studies.html` | High | May still have manufacturing-only case studies |
| Update `careers.html` | Medium | Job descriptions may reference manufacturing |
| Update `blog.html` + blog article pages | Medium | Titles/copy may reference old positioning |
| Update 4 service sub-pages | Low | `predictive-maintenance.html`, `supply-chain-analytics.html`, `quality-analytics.html`, `energy-management.html` — these exist but are no longer linked from main nav |
| Update `privacy.html` + `terms.html` | Low | Old contact info may appear in legal text |
| Update `gallery.html` | Low | May have manufacturing dashboard screenshots |
| Add new solution-specific landing pages | Future | Dedicated pages for each of the 8 solution areas |
| SEO meta tags audit | Future | All pages need updated meta descriptions matching new positioning |

---

## Rules for Future Agents

1. **Always read this file first** before making any changes.
2. **Never revert brand positioning** back to manufacturing analytics.
3. **Contact info to use everywhere**: Phone `+91 9529314215`, Email `officialkalpeshattarde@gmail.com`, WhatsApp `wa.me/919529314215`.
4. **Nav font size is 14px (0.875rem)** — do not change it.
5. **No dead links** — every `href` must point to a real page or anchor.
6. **Manufacturing is ONE of 13 industries** — it can appear in industry lists but must not be the sole focus of any page.
7. **Push to GitHub** after every completed session using the push command above.
8. **Update this file** at the end of every session — add a new session block under "Session Log".
9. **Do not create placeholder/mock data** — all content must be real or realistic.
10. **Tailwind CSS is loaded via CDN** — do not attempt to install it as a package.
