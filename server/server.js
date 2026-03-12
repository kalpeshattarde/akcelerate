require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// ── Security Middleware ──────────────────────────
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── General Middleware ────────────────────────────
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── Static files ──────────────────────────────────
app.use(express.static(path.join(__dirname, '../public')));
app.use('/design-system', express.static(path.join(__dirname, '../design-system')));

// ── Main Pages ────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/solutions', (req, res) => res.sendFile(path.join(__dirname, '../public/solutions.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, '../public/services.html')));
app.get('/case-studies', (req, res) => res.sendFile(path.join(__dirname, '../public/case-studies.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../public/about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, '../public/contact.html')));
app.get('/pricing', (req, res) => res.sendFile(path.join(__dirname, '../public/pricing.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, '../public/gallery.html')));
app.get('/founder', (req, res) => res.sendFile(path.join(__dirname, '../public/founder.html')));
app.get('/blog', (req, res) => res.sendFile(path.join(__dirname, '../public/blog.html')));
app.get('/careers', (req, res) => res.sendFile(path.join(__dirname, '../public/careers.html')));
app.get('/privacy', (req, res) => res.sendFile(path.join(__dirname, '../public/privacy.html')));
app.get('/terms', (req, res) => res.sendFile(path.join(__dirname, '../public/terms.html')));
app.get('/resources', (req, res) => res.sendFile(path.join(__dirname, '../public/resources.html')));
app.get('/completed-projects', (req, res) => res.sendFile(path.join(__dirname, '../public/completed-projects.html')));

// ── Blog Article Pages ────────────────────────────
app.get('/blog/generative-ai-operations', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/generative-ai-operations.html')));
app.get('/blog/data-to-intelligence', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/data-to-intelligence.html')));
app.get('/blog/msme-growth-strategies', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/msme-growth-strategies.html')));
app.get('/blog/ml-deployment-guide', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/ml-deployment-guide.html')));
app.get('/blog/ai-manufacturing-adoption', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/ai-manufacturing-adoption.html')));
app.get('/blog/data-driven-brand', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/blog/data-driven-brand.html')));

// ── Individual Service Pages ──────────────────────
app.get('/services/predictive-maintenance', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/services/predictive-maintenance.html')));
app.get('/services/supply-chain-analytics', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/services/supply-chain-analytics.html')));
app.get('/services/quality-analytics', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/services/quality-analytics.html')));
app.get('/services/energy-management', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/services/energy-management.html')));

// ── API Endpoints ─────────────────────────────────
app.post('/api/contact', apiLimiter, (req, res) => {
  const { name, email, company, message } = req.body;

  // Basic server-side validation
  if (!name || name.trim().length < 2) return res.status(400).json({ error: 'Invalid name.' });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Invalid email.' });
  if (!message || message.trim().length < 20) return res.status(400).json({ error: 'Message too short.' });

  console.log('📧 Contact Form:', { name, email, company, timestamp: new Date().toISOString() });

  res.json({
    success: true,
    message: 'Thank you for your inquiry. We will be in touch within 24 hours.'
  });
});

// ── 404 Handler ───────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/index.html'));
});

// ── Error Handler ─────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Start Server ──────────────────────────────────
app.listen(PORT, HOST, () => {
  console.log(`\n🚀 AKcelerate website running on http://${HOST}:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Security: Helmet + Rate Limiting enabled\n`);
});
