# AKcelerate — $100M AI Manufacturing Analytics Platform

## Overview
Enterprise SaaS-style website for AKcelerate — AI-powered manufacturing analytics, predictive maintenance, supply chain intelligence, quality analytics, and energy management for India's industrial sector.

**Founder:** Kalpesh Attarde | +91 8208555380 | akcelerateindia@gmail.com | Mumbai, India

## Architecture
- **Runtime**: Node.js 20 + Express 4
- **Security**: Helmet + express-rate-limit
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS (Animate on Scroll), Lucide Icons
- **Fonts**: Google Fonts — Poppins (headings) + Inter (body)
- **Port**: 5000, Host: 0.0.0.0

## Complete Project Structure
```
/
├── server/server.js              # Express + Helmet + rate-limiting + all routes
├── public/                       # Main website pages
│   ├── index.html                # Homepage
│   ├── solutions.html            # Solutions overview
│   ├── services.html             # Services overview
│   ├── case-studies.html         # Case studies
│   ├── about.html                # About page
│   ├── contact.html              # Contact form
│   ├── pricing.html              # Pricing page (3 plans + toggle)
│   ├── gallery.html              # Gallery
│   ├── founder.html              # Founder portfolio
│   ├── blog.html                 # Blog
│   ├── services/                 # Individual service pages
│   │   ├── predictive-maintenance.html
│   │   ├── supply-chain-analytics.html
│   │   ├── quality-analytics.html
│   │   └── energy-management.html
│   ├── css/styles.css            # Main stylesheet (light + dark themes + dropdowns + pricing)
│   └── js/script.js              # Theme toggle, AOS, charts, FAQ, counters, smooth scroll
├── design-system/                # Design token library
│   ├── index.css                 # Master import (all tokens)
│   └── tokens/
│       ├── colors.css            # Color tokens (light + dark)
│       ├── typography.css        # Font tokens
│       ├── spacing.css           # Spacing tokens
│       ├── shadows.css           # Shadow tokens
│       └── radius.css            # Border radius tokens
├── brand-kit/                    # Brand assets folder
│   ├── logo/                     # Logo files
│   ├── letterhead/               # Letterhead templates
│   ├── social/                   # Social media templates
│   └── README.md                 # Brand kit guide
├── private/                      # Private files (gitignored)
│   └── README.md
├── modules/                      # Future feature modules
│   ├── analytics-dashboard/
│   ├── ai-tools/
│   ├── client-portal/
│   ├── admin-panel/
│   └── README.md
├── docs/                         # Documentation
│   ├── architecture.md
│   ├── ui-system.md
│   ├── customization-guide.md
│   ├── branding-guide.md
│   ├── security-guide.md
│   └── deployment-guide.md
├── .gitignore                    # Includes /private/
└── package.json
```

## Pages & Routes
| Route | File | Description |
|-------|------|-------------|
| `/` | index.html | Homepage — Hero, integrations, features, stats |
| `/solutions` | solutions.html | Solutions overview |
| `/services` | services.html | Services overview |
| `/case-studies` | case-studies.html | 3 case studies (Auto/FMCG/Pharma) |
| `/about` | about.html | About + Founder profile |
| `/contact` | contact.html | Contact form + WhatsApp |
| `/pricing` | pricing.html | Pricing plans (Starter/Pro/Enterprise) + toggle |
| `/gallery` | gallery.html | Gallery/portfolio |
| `/founder` | founder.html | Founder portfolio |
| `/blog` | blog.html | Blog page |
| `/services/predictive-maintenance` | services/predictive-maintenance.html | Service sub-page |
| `/services/supply-chain-analytics` | services/supply-chain-analytics.html | Service sub-page |
| `/services/quality-analytics` | services/quality-analytics.html | Service sub-page |
| `/services/energy-management` | services/energy-management.html | Service sub-page |
| `POST /api/contact` | server.js | Contact form endpoint (rate-limited) |

## Design System (Light Theme)
- **Body background**: `#FFFFFF`
- **Alt sections**: `#F0F7FF` (light blue)
- **Primary**: `#2563EB` (Blue)
- **Accent**: `#06B6D4` (Cyan)
- **Headings**: `#0F172A` (dark navy)
- **Body text**: `#64748B` (slate-500)
- **Card borders**: `#E2E8F0`
- **Footer/CTA**: intentionally dark gradient
- **Dark theme**: toggled via `[data-theme="dark"]` on `<html>`, stored in `localStorage` as `ak-theme`

## Key Features
- **Dual theme**: Light + Dark mode toggle on all pages (moon/sun icon in nav)
- **Nav dropdowns**: Solutions and Services have hover dropdowns with sub-page links + icons
- **Individual service pages**: 4 dedicated pages with hero, stats, capabilities, process, CTA
- **Pricing page**: Monthly/Annual toggle with 3 plans (₹49,999 / ₹1,49,999 / Custom)
- **Security**: Helmet security headers + rate-limiting on API endpoints
- **Design tokens**: Centralized CSS variables in `/design-system/tokens/`
- **Docs**: 6 markdown documentation files in `/docs/`
- **Animated counters**: `data-count` attribute on stat numbers

## Running
```bash
npm start       # Production
npm run dev     # Development (nodemon)
```

## Security Notes
- `/private/` is gitignored — use for sensitive brand files
- `.env` is gitignored — use for secrets
- `helmet` sets secure HTTP headers
- `express-rate-limit` limits `/api/*` to 100 requests/15min/IP
