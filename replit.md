# AKcelerate – AI Manufacturing Analytics Platform

## Overview
A professional enterprise SaaS-style website for AKcelerate, providing AI-powered manufacturing analytics, predictive maintenance, supply chain intelligence, and Industry 4.0 transformation services.

## Architecture
- **Runtime**: Node.js 20 with Express (static file server)
- **Frontend**: HTML5, Tailwind CSS CDN, Vanilla JavaScript
- **Libraries**: Chart.js, AOS animations, Lucide Icons
- **Fonts**: Google Fonts (Poppins + Inter)
- **Port**: 5000 (0.0.0.0)

## Project Structure
```
├── server/
│   ├── server.js       # Express server (port 5000, host 0.0.0.0)
│   └── config.js
├── public/
│   ├── index.html      # Main landing page (all sections)
│   ├── contact.html    # Contact page with validated form
│   ├── css/
│   │   └── styles.css  # Custom CSS (dark theme, gradients, glass cards)
│   └── js/
│       └── script.js   # Charts, AOS, FAQ, form validation, counters
```

## Key Pages
- `/` — Full-featured homepage with Hero, About, Benefits, Capabilities, Use Cases, Case Studies, Process, Founder, Team, Resources, FAQ, CTA
- `/contact` — Contact page with validated form, WhatsApp CTA, contact info

## Design System
- **Primary**: #2563EB (Blue)
- **Accent**: #06B6D4 (Cyan)
- **Teal**: #0FCCCE
- **Background**: #111827 (Dark) / #0D1117 (Darker)
- **Typography**: Poppins (headings) + Inter (body)

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
