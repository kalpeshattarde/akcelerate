# AKcelerate — Premium AI, Data, Automation & Business Consulting

## Overview
Enterprise SaaS-style website for AKcelerate — a premium AI, Data, Automation and Business Consulting firm serving 13+ industries. Services span 8 solution areas: Business Automation, AI/ML Solutions, Business Consulting, Website & SaaS Development, Automated Analytics, Data Visualization, Cloud & DevOps, and MLOps.

**Founder:** Kalpesh Attarde | +91 9529314215 | officialkalpeshattarde@gmail.com | Mumbai, India

## Brand Positioning
- **Primary Pitch**: "Build Smarter Business with AI & Automation"
- **8 Solution Areas**: Business Automation, AI/ML Solutions, Business Consulting, SaaS Dev, Automated Analytics, Data Visualization, Cloud & DevOps, MLOps
- **13+ Industries**: Manufacturing, FMCG, Healthcare, Retail, FinTech, Education, Real Estate, Logistics, IT/Tech, E-commerce, Startups, SMBs, Enterprises
- **Contact**: Phone `+91 9529314215` | Email `officialkalpeshattarde@gmail.com` | WhatsApp `wa.me/919529314215`

## Architecture
- **Runtime**: Node.js 20 + Express 4
- **Security**: Helmet + express-rate-limit
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS (Animate on Scroll), Lucide Icons
- **Fonts**: Google Fonts — Poppins (headings) + Inter (body)
- **Port**: 5000, Host: 0.0.0.0

## All Pages & Routes

### Main Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | index.html | Homepage — Hero, integrations, features, stats |
| `/solutions` | solutions.html | Solutions overview (8 areas with Learn more links) |
| `/services` | services.html | Services and consulting overview |
| `/case-studies` | case-studies.html | Real-world results |
| `/about` | about.html | Company about page + team |
| `/contact` | contact.html | Contact form + WhatsApp |
| `/pricing` | pricing.html | 3-tier pricing (Starter/Professional/Enterprise) with USD+INR dual pricing |
| `/free-audit` | free-audit.html | **NEW** Free Business Audit booking page |
| `/gallery` | gallery.html | Platform dashboard gallery |
| `/founder` | founder.html | Kalpesh Attarde profile page |
| `/blog` | blog.html | Blog listing (6 article cards) |
| `/careers` | careers.html | Careers page (5 open roles) |
| `/insights` | insights.html | Insights & thought leadership |
| `/industries` | industries.html | Industry verticals overview |
| `/resources` | resources.html | Resource library |
| `/completed-projects` | completed-projects.html | Completed projects |
| `/privacy` | privacy.html | Privacy policy |
| `/terms` | terms.html | Terms of service |

### Individual Solution Pages
| Route | File | Description |
|-------|------|-------------|
| `/solutions/business-automation` | solutions/business-automation.html | RPA, workflows, CRM/ERP, Document AI |
| `/solutions/ai-ml` | solutions/ai-ml.html | Custom ML, NLP, Computer Vision, GenAI |
| `/solutions/business-consulting` | solutions/business-consulting.html | AI strategy, digital transformation |
| `/solutions/saas-dev` | solutions/saas-dev.html | Websites, SaaS products, MVPs |
| `/solutions/automated-analytics` | solutions/automated-analytics.html | Reporting automation, ETL, KPIs |
| `/solutions/data-visualization` | solutions/data-visualization.html | Power BI, Tableau, Looker, D3.js |
| `/solutions/cloud-devops` | solutions/cloud-devops.html | AWS/Azure/GCP, Kubernetes, CI/CD |
| `/solutions/mlops` | solutions/mlops.html | MLflow, model deployment, monitoring |

### Service Sub-Pages
| Route | File |
|-------|------|
| `/services/predictive-maintenance` | services/predictive-maintenance.html |
| `/services/supply-chain-analytics` | services/supply-chain-analytics.html |
| `/services/quality-analytics` | services/quality-analytics.html |
| `/services/energy-management` | services/energy-management.html |

### Blog Article Pages
| Route | File |
|-------|------|
| `/blog/generative-ai-operations` | blog/generative-ai-operations.html |
| `/blog/data-to-intelligence` | blog/data-to-intelligence.html |
| `/blog/msme-growth-strategies` | blog/msme-growth-strategies.html |
| `/blog/ml-deployment-guide` | blog/ml-deployment-guide.html |
| `/blog/ai-manufacturing-adoption` | blog/ai-manufacturing-adoption.html |
| `/blog/data-driven-brand` | blog/data-driven-brand.html |

### API
| Endpoint | Description |
|----------|-------------|
| `POST /api/contact` | Contact form (rate-limited, server-validated) |

## Complete Project Structure
```
/
├── server/server.js              # Express + Helmet + rate-limiting + all routes
├── public/                       # Main website pages
│   ├── index.html                # Homepage
│   ├── solutions.html            # Solutions overview (8 areas + Learn more links)
│   ├── services.html             # Services overview
│   ├── case-studies.html         # Case studies
│   ├── about.html                # About page + team
│   ├── contact.html              # Contact form
│   ├── pricing.html              # Pricing (3 plans + monthly/annual toggle, USD+INR)
│   ├── free-audit.html           # NEW: Free Business Audit booking page
│   ├── gallery.html              # Gallery/portfolio
│   ├── founder.html              # Founder portfolio (Kalpesh Attarde)
│   ├── blog.html                 # Blog listing
│   ├── careers.html              # Careers (5 open roles)
│   ├── insights.html             # Insights & thought leadership
│   ├── industries.html           # Industry verticals
│   ├── resources.html            # Resource library
│   ├── completed-projects.html   # Completed projects
│   ├── privacy.html              # Privacy policy
│   ├── terms.html                # Terms of service
│   ├── solutions/                # Individual solution pages (8 pages)
│   │   ├── business-automation.html
│   │   ├── ai-ml.html
│   │   ├── business-consulting.html
│   │   ├── saas-dev.html
│   │   ├── automated-analytics.html
│   │   ├── data-visualization.html
│   │   ├── cloud-devops.html
│   │   └── mlops.html
│   ├── services/                 # Service sub-pages (4 pages)
│   │   ├── predictive-maintenance.html
│   │   ├── supply-chain-analytics.html
│   │   ├── quality-analytics.html
│   │   └── energy-management.html
│   ├── blog/                     # Blog article pages (6 articles)
│   │   ├── ai-manufacturing-adoption.html
│   │   ├── data-driven-brand.html
│   │   ├── data-to-intelligence.html
│   │   ├── generative-ai-operations.html
│   │   ├── ml-deployment-guide.html
│   │   └── msme-growth-strategies.html
│   ├── images/                   # Team photos + assets
│   │   ├── kalpesh-attarde.jpeg  # Founder photo
│   │   ├── rakesh-chaudhari.jpeg # Team member photo
│   │   └── kaushal-bharambe.png  # Team member photo
│   ├── css/styles.css            # Main stylesheet (~1880+ lines, light + dark themes)
│   └── js/
│       ├── main.js               # Theme toggle, AOS, charts, FAQ, counters (newer pages)
│       └── script.js             # Identical to main.js (older pages)
├── design-system/                # Design token library
│   ├── index.css
│   └── tokens/ (colors, typography, spacing, shadows, radius)
├── brand-kit/                    # Brand assets
├── docs/                         # Documentation (6 markdown files)
└── package.json
```

## Design System (Light Theme)
- **Body background**: `#FFFFFF`
- **Alt sections**: `#F0F7FF` (light blue)
- **Primary**: `#2563EB` (Blue)
- **Accent**: `#06B6D4` (Cyan)
- **Headings**: `#0F172A` (dark navy)
- **Body text**: `#64748B` (slate-500)
- **Card borders**: `#E2E8F0`
- **Footer/CTA**: dark gradient (`#080d1a → #0d1b35`)
- **Dark theme**: toggled via `[data-theme="dark"]` on `<html>`, stored in `localStorage` as `ak-theme`

## Logo (Critical — use inline style, NOT Tailwind class)
```html
<div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#2563EB,#06B6D4);display:flex;align-items:center;justify-content:center;">
  <svg width="18" height="18" ...></svg>
</div>
```
> **Never use** `bg-gradient-to-br from-primary to-accent` — Tailwind CDN doesn't reliably render it.

## Navbar (Template Source: `public/about.html`)
- Single-row, full 8 links: Home, Solutions (dropdown), Services (dropdown), Industries, Case Studies, Insights, About, Contact
- Desktop right: dark-mode toggle + **"Free Audit"** button (links to `free-audit.html`)
- Mobile menu: all 8 links + "Book Free Audit" CTA
- Root pages: all links relative (e.g. `contact.html`)
- Subdir pages (`services/`, `solutions/`, `blog/`): use `../` prefix for all links

## Pricing (Updated March 2026)
| Plan | Monthly | Annual | Savings |
|------|---------|--------|---------|
| Starter | ~~$149~~ → **$125** (≈₹10,499) | **$99** (≈₹8,249) | SAVE 34% |
| Professional | ~~$1,499~~ → **$1,249** (≈₹1,03,999) | **$999** (≈₹82,999) | SAVE 33% |
| Enterprise | Custom | Custom | — |

Dynamic toggle on `pricing.html` updates 10 DOM elements (old price, new price, period, INR, save badge).

## Sitewide Sections (Injected on All Pages)

### Pricing Preview Section (`id="pricing-preview"`)
- 3-card interactive pricing section (Starter/Professional/Enterprise) with monthly/annual toggle
- Injected before footer on 21+ pages
- Root pages link to `pricing.html`; subdir pages link to `../pricing.html`

### Free Audit Section (`id="free-audit-section"`)
- Two-column light-bg section with checklist (left) + animated stats card (right)
- Shows: 7+ avg automation opportunities, ₹28L+ avg savings identified, 94% client satisfaction
- Root pages link to `free-audit.html`; subdir pages link to `../free-audit.html`
- Injected before the CTA/pricing section on 28 pages

## Free Audit Page (`free-audit.html`)
Full dedicated booking page with:
1. **Hero**: Dark gradient, "Book Your Free Business Audit", trust badges
2. **What's Included**: 6 audit deliverable cards (Systems Audit, Data Review, AI Readiness, Automation Map, ROI Analysis, Custom Roadmap)
3. **How It Works**: 3-step process + 60-min session time-breakdown bar chart
4. **Booking Form**: Name, company, email, phone, industry, revenue range, challenges, preferred time — with JS validation + success state
5. **Social Proof**: Bar chart of avg findings + 4 impact stats + client testimonial
6. **FAQ**: 6 questions, accordion toggle
7. **Final CTA** + Footer

## Floating Action Buttons (All Pages)
Three fixed-position circular buttons stacked bottom-right:
```css
.floating-email  { bottom: 15.5rem; right: 1.5rem; background: linear-gradient(135deg,#7C3AED,#2563EB); }
.floating-call   { bottom: 10.5rem; right: 1.5rem; background: linear-gradient(135deg,#2563EB,#06B6D4); }
.floating-whatsapp { bottom: 5.5rem; right: 1.5rem; background: #25D366; }
/* + .back-to-top at bottom: 1.5rem */
```
- Email → `mailto:officialkalpeshattarde@gmail.com`
- Call → `tel:+919529314215`
- WhatsApp → `https://wa.me/919529314215`

## Key CSS Classes (styles.css ~1880 lines)
| Class | Purpose |
|-------|---------|
| `.gradient-text` | Blue→cyan gradient on text |
| `.section-label` | Uppercase pill label above headings |
| `.btn-primary` | Blue gradient CTA button |
| `.btn-secondary` | Outlined CTA button |
| `.feature-card` | White bordered card with hover shadow |
| `.chart-card` | White card for charts/data |
| `.impact-stat` | Bordered stat box |
| `.nav-link`, `.nav-dropdown` | Navbar link + dropdown styles |
| `.skill-bar-track`, `.skill-bar-fill` | Animated progress bars (use `data-width` attr) |
| `.faq-item`, `.faq-answer.open` | Accordion FAQ |
| `.tag-pill` | Small grey badge |
| `.form-input`, `.form-label`, `.form-error` | Form field styles |

## JavaScript (main.js / script.js — identical)
- Sticky navbar scroll shadow
- Dark/light mode toggle (persisted in `localStorage`)
- Mobile hamburger menu
- AOS.init (duration 700ms, once: true)
- Animated counters (`data-count` attribute)
- FAQ accordion (`toggleFaq()`)
- Skill bar width animation from `data-width`
- Back-to-top button visibility

## Running
```bash
npm start       # Production (port 5000)
npm run dev     # Development (nodemon)
```

## GitHub
```bash
git push "https://kalpeshattarde:${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/kalpeshattarde/AKcelerate.git" main
```
Remote: `github.com/kalpeshattarde/AKcelerate` (branch: `main`)

## Security Notes
- `/private/` is gitignored — use for sensitive brand files
- `.env` is gitignored — use for secrets
- `helmet` sets secure HTTP headers
- `express-rate-limit` limits `/api/*` to 100 requests/15min/IP

## Change Log

### March 2026 (Session 3)
- **Free Audit page** (`free-audit.html`): Full dedicated booking page with 7 sections, booking form with validation, Chart.js bar chart, FAQ accordion
- **Free Audit section** injected sitewide on 28 pages (before CTA or pricing section)
- **Navbar updated**: "Request Demo" button replaced with "Free Audit" button on `free-audit.html`; all other pages keep "Request Demo"

### March 2026 (Session 2)
- **Floating Email button** added: fixed bottom-right, purple gradient, `mailto:` link, on all 35 pages
- **Floating Call button** added: fixed bottom-right, blue/teal gradient, `tel:` link, on all 35 pages
- **Pricing page** updated: new USD + INR dual pricing with monthly/annual toggle
- **Pricing preview section** injected on 21 pages (interactive 3-card section before footer)

### March 2026 (Session 1)
- **Navbar fixed** on 27+ root pages: single-row, correct 8 links, active link highlighting
- **Navbar fixed** on 12 service/solution subpages: added missing Industries, About, Contact links
- **Logo gradient fixed** on 18 pages: replaced unreliable Tailwind class with inline `background:linear-gradient(135deg,#2563EB,#06B6D4)`
- **CSS paths corrected**: root pages use `css/styles.css`; subpages use `../css/styles.css`
