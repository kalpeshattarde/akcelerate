# AKcelerate — Premium AI, Data, Automation & Business Consulting

## Overview
Enterprise SaaS-style website for AKcelerate — a premium AI, Data, Automation and Business Consulting firm serving 13+ industries. Services span 8 solution areas: Business Automation, AI/ML Solutions, Business Consulting, Website & SaaS Development, Automated Analytics, Data Visualization, Cloud & DevOps, and MLOps.

**Founder:** Kalpesh Attarde | +91 9529314215 | officialkalpeshattarde@gmail.com | Mumbai, India

## Brand Positioning
- **Primary Pitch**: "Build Smarter Business with AI & Automation"
- **8 Solution Areas**: Business Automation, AI/ML Solutions, Business Consulting, SaaS Dev, Automated Analytics, Data Visualization, Cloud & DevOps, MLOps
- **13+ Industries**: Manufacturing, FMCG, Healthcare, Retail, FinTech, Education, Real Estate, Logistics, IT/Tech, E-commerce, Startups, SMBs, Enterprises
- **Contact**: WhatsApp `wa.me/919529314215`

## Architecture
- **Runtime**: Node.js 20 + Express 4
- **Security**: Helmet + express-rate-limit
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS (Animate on Scroll), Lucide Icons
- **Fonts**: Google Fonts — Poppins (headings) + Inter (body)
- **Port**: 5000, Host: 0.0.0.0

## All Pages & Routes (No Dead Links)

### Main Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | index.html | Homepage — Hero, integrations, features, stats |
| `/solutions` | solutions.html | Solutions overview (8 areas with Learn more links) |
| `/services` | services.html | Services and consulting overview |
| `/case-studies` | case-studies.html | Real-world results |
| `/about` | about.html | Company about page + team |
| `/contact` | contact.html | Contact form + WhatsApp |
| `/pricing` | pricing.html | 3-tier pricing (Starter/Professional/Enterprise) |
| `/gallery` | gallery.html | Platform dashboard gallery |
| `/founder` | founder.html | Kalpesh Attarde profile page |
| `/blog` | blog.html | Blog listing (6 article cards) |
| `/careers` | careers.html | Careers page (5 open roles) |
| `/privacy` | privacy.html | Privacy policy |
| `/terms` | terms.html | Terms of service |
| `/resources` | resources.html | Resource library |
| `/completed-projects` | completed-projects.html | Completed projects |

### Individual Solution Pages (NEW — March 2026)
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

### Blog Article Pages
| Route | File |
|-------|------|
| `/blog/generative-ai-operations` | blog/generative-ai-operations.html |
| `/blog/data-to-intelligence` | blog/data-to-intelligence.html |
| `/blog/msme-growth-strategies` | blog/msme-growth-strategies.html |
| `/blog/ml-deployment-guide` | blog/ml-deployment-guide.html |
| `/blog/ai-manufacturing-adoption` | blog/ai-manufacturing-adoption.html |
| `/blog/data-driven-brand` | blog/data-driven-brand.html |

### Legacy Service Sub-Pages (still linked in nav)
| Route | File |
|-------|------|
| `/services/predictive-maintenance` | services/predictive-maintenance.html |
| `/services/supply-chain-analytics` | services/supply-chain-analytics.html |
| `/services/quality-analytics` | services/quality-analytics.html |
| `/services/energy-management` | services/energy-management.html |

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
│   ├── about.html                # About page + team photos
│   ├── contact.html              # Contact form
│   ├── pricing.html              # Pricing (3 plans + monthly/annual toggle)
│   ├── gallery.html              # Gallery/portfolio
│   ├── founder.html              # Founder portfolio (Kalpesh Attarde)
│   ├── blog.html                 # Blog listing
│   ├── careers.html              # Careers (5 open roles)
│   ├── privacy.html              # Privacy policy
│   ├── terms.html                # Terms of service
│   ├── resources.html            # Resource library
│   ├── completed-projects.html   # Completed projects
│   ├── solutions/                # Individual solution pages (NEW)
│   │   ├── business-automation.html
│   │   ├── ai-ml.html
│   │   ├── business-consulting.html
│   │   ├── saas-dev.html
│   │   ├── automated-analytics.html
│   │   ├── data-visualization.html
│   │   ├── cloud-devops.html
│   │   └── mlops.html
│   ├── services/                 # Legacy service sub-pages
│   │   ├── predictive-maintenance.html
│   │   ├── supply-chain-analytics.html
│   │   ├── quality-analytics.html
│   │   └── energy-management.html
│   ├── blog/                     # Blog article pages
│   │   ├── ai-manufacturing-adoption.html
│   │   └── [other articles]
│   ├── images/                   # Team photos + assets
│   │   ├── kalpesh-attarde.jpeg  # Founder photo
│   │   ├── rakesh-chaudhari.jpeg # Team member photo
│   │   └── kaushal-bharambe.png  # Team member photo
│   ├── css/styles.css            # Main stylesheet (light + dark themes)
│   └── js/main.js                # Theme toggle, AOS, charts, FAQ, counters
├── design-system/                # Design token library
│   ├── index.css
│   └── tokens/ (colors, typography, spacing, shadows, radius)
├── brand-kit/                    # Brand assets
├── docs/                         # Documentation (6 markdown files)
├── AGENT_MEMORY.md               # Persistent agent memory log
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
- **Footer/CTA**: dark gradient (`#1E3A8A → #0F172A → #164E63`)
- **Dark theme**: toggled via `[data-theme="dark"]` on `<html>`, stored in `localStorage` as `ak-theme`

## Key Features
- **Dual theme**: Light + Dark mode toggle on all pages
- **Nav dropdowns**: Solutions dropdown links directly to all 8 individual solution pages; Services dropdown has pricing + case studies
- **8 dedicated solution pages**: Each has hero image, stats bar, 6-service cards, 4-step process, industries section, CTA, and 3 related solutions
- **Real team photos**: Kalpesh Attarde, Rakesh Chaudhari, Kaushal Bharambe on homepage, about, and founder pages
- **Pricing page**: Monthly/Annual toggle with 3 plans (₹49,999 / ₹1,49,999 / Custom)
- **Security**: Helmet headers + rate-limiting on API endpoints
- **Animated counters**: `data-count` attribute on stat numbers
- **AOS animations**: Animate-on-scroll across all pages

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
