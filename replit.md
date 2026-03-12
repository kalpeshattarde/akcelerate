# AKcelerate – AI Manufacturing Analytics Platform

## Overview
A professional enterprise SaaS-style website for AKcelerate, providing AI-powered manufacturing analytics, predictive maintenance, supply chain intelligence, and Industry 4.0 transformation services. Built with a WingzSphere-inspired light theme.

## Architecture
- **Runtime**: Node.js 20 with Express (static file server)
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS animations, Lucide Icons
- **Fonts**: Google Fonts (Poppins + Inter)
- **Port**: 5000 (0.0.0.0)

## Project Structure
```
├── server/
│   └── server.js         # Express server (port 5000, host 0.0.0.0)
├── public/
│   ├── index.html        # Homepage (Hero + Integration strip + all CTA links)
│   ├── solutions.html    # Solutions page (Benefits + Use Cases)
│   ├── services.html     # Services page (Capabilities + Implementation + Process)
│   ├── case-studies.html # Case Studies page (Case Studies + Resources)
│   ├── about.html        # About page (What We Do + Founder + Team + FAQ)
│   ├── contact.html      # Contact page (form + WhatsApp + info)
│   ├── css/
│   │   └── styles.css    # Full light theme CSS
│   └── js/
│       └── script.js     # Charts (Chart.js), AOS init, FAQ accordion, counter animation, form validation
```

## Pages & Routes
- `/` or `/index.html` — Homepage with Hero section, integration strip, cross-page navigation
- `/solutions.html` — Core Benefits (6 cards) + Use Cases (4 cards)
- `/services.html` — Platform Capabilities (4 cards) + Implementation Architecture + ROI chart + 5-step Process
- `/case-studies.html` — 3 Case Studies (Automotive/FMCG/Pharma) + 4 Resource cards
- `/about.html` — What We Do + OEE chart + Founder (Kalpesh Attarde) + Team (4) + FAQ (6 items)
- `/contact.html` — Validated contact form, WhatsApp integration, contact info, stats

## Design System (Light Theme)
- **Body background**: #FFFFFF (white)
- **Alt sections**: #F0F7FF (light blue-gray)
- **Primary**: #2563EB (Blue)
- **Accent**: #06B6D4 (Cyan)
- **Teal**: #0FCCCE
- **Headings**: #0F172A (dark navy)
- **Body text**: #64748B (slate-500)
- **Card borders**: #E2E8F0
- **Footer/CTA**: dark gradient (intentionally dark)
- **Typography**: Poppins (headings) + Inter (body)

## Navigation
Each page highlights its own nav item in blue (color:#2563EB, font-weight:600). All nav links point to dedicated pages:
- Home → `/`
- Solutions → `solutions.html`
- Services → `services.html`
- Case Studies → `case-studies.html`
- About → `about.html`
- Contact → `contact.html`

## Running
```bash
npm start       # Production
npm run dev     # Development (nodemon)
```

## Founder
Kalpesh Attarde — Founder & CEO
Phone: +91 8208555380
Email: akcelerateindia@gmail.com
Location: Mumbai, India
