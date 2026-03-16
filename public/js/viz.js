/* ─────────────────────────────────────────────────────────────
   AKcelerate Visualization Library  –  viz.js
   Animated canvas replacements for all solution pages.
   Usage: AKviz.init('canvasId', 'mode');
   Modes: neural | flow | analytics | dataviz | cloud | mlops | saas | strategy | industries
───────────────────────────────────────────────────────────── */
(function (G) {
  'use strict';

  const AKviz = {};

  /* ── utilities ── */
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function setupCanvas(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var dpr = window.devicePixelRatio || 1;
    var ctx = el.getContext('2d');
    // Read fallback dimensions from HTML attributes (not CSS %, which parses wrong)
    var cssH = parseInt(el.getAttribute('height')) || 380;
    var cssW = parseInt(el.getAttribute('width')) || 800;
    function resize() {
      var rect = el.getBoundingClientRect();
      var w = (rect.width > 0 ? rect.width : null) ||
              (el.parentElement ? el.parentElement.offsetWidth : 0) ||
              el.offsetWidth || parseInt(cssW) || 800;
      var h = (rect.height > 0 ? rect.height : null) ||
              (el.parentElement ? el.parentElement.offsetHeight : 0) ||
              el.offsetHeight || parseInt(cssH) || 380;
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      el.style.width = w + 'px';
      el.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', function() { resize(); });
    return {
      el: el, ctx: ctx,
      get w() {
        var r = el.getBoundingClientRect();
        return (r.width > 0 ? r.width : null) || el.offsetWidth || parseInt(cssW) || 800;
      },
      get h() {
        var r = el.getBoundingClientRect();
        return (r.height > 0 ? r.height : null) || el.offsetHeight || parseInt(cssH) || 380;
      }
    };
  }

  /* ════════════════════════════════════════════════════════════
     MODE: neural  –  Neural Network (AI/ML page)
  ════════════════════════════════════════════════════════════ */
  function modeNeural(c) {
    const layers = [3, 5, 5, 4, 2];
    let nodes = [], edges = [], pulses = [], t = 0;
    function build() {
      nodes = []; edges = [];
      const W = c.w, H = c.h;
      const colX = layers.map((_, i) => W * 0.12 + (W * 0.76) * i / (layers.length - 1));
      layers.forEach((n, li) => {
        const startY = H / 2 - (n - 1) * 38;
        for (let ni = 0; ni < n; ni++) {
          nodes.push({ x: colX[li], y: startY + ni * 38, layer: li, pulse: Math.random() });
        }
      });
      let base = 0;
      layers.forEach((n, li) => {
        if (li === layers.length - 1) return;
        const next = layers[li + 1];
        for (let a = 0; a < n; a++) for (let b = 0; b < next; b++) {
          edges.push({ a: base + a, b: base + n + b, speed: rnd(0.003, 0.009) });
        }
        base += n;
      });
    }
    build();
    window.addEventListener('resize', build);
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;
      // edges
      edges.forEach(e => {
        const a = nodes[e.a], b = nodes[e.b];
        const alpha = 0.08 + 0.06 * Math.sin(t * 1.5 + e.speed * 100);
        ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
      // pulses along edges
      if (Math.random() < 0.04) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ edge: e, p: 0, speed: rnd(0.012, 0.025) });
      }
      pulses = pulses.filter(pu => {
        pu.p += pu.speed;
        if (pu.p > 1) return false;
        const a = nodes[pu.edge.a], b = nodes[pu.edge.b];
        const x = lerp(a.x, b.x, pu.p), y = lerp(a.y, b.y, pu.p);
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 7);
        grd.addColorStop(0, 'rgba(167,139,250,0.95)');
        grd.addColorStop(1, 'rgba(139,92,246,0)');
        ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = grd; ctx.fill();
        return true;
      });
      // nodes
      nodes.forEach(n => {
        n.pulse += 0.03;
        const glow = 0.15 + 0.08 * Math.sin(n.pulse);
        const r = 7 + 2 * Math.sin(n.pulse * 0.7);
        const g1 = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
        g1.addColorStop(0, `rgba(167,139,250,${glow + 0.3})`);
        g1.addColorStop(1, 'rgba(139,92,246,0)');
        ctx.beginPath(); ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = g1; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = '#7C3AED'; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, r - 2, 0, Math.PI * 2);
        ctx.fillStyle = '#A78BFA'; ctx.fill();
      });
      // layer labels
      const lbls = ['Input', 'Hidden 1', 'Hidden 2', 'Output', 'Predict'];
      const cols = layers.map((_, i) => c.w * 0.12 + (c.w * 0.76) * i / (layers.length - 1));
      ctx.font = '10px Inter,sans-serif'; ctx.fillStyle = 'rgba(167,139,250,0.5)'; ctx.textAlign = 'center';
      lbls.forEach((l, i) => ctx.fillText(l, cols[i], H - 10));
      // floating metrics
      drawMetrics(ctx, W, H, [
        { label: 'Model Accuracy', value: '95.4%', color: '#A78BFA' },
        { label: 'Training Time', value: '2.3h', color: '#06B6D4' },
        { label: 'Predictions/sec', value: '12K+', color: '#10B981' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: flow  –  Automation Flowchart (Business Automation)
  ════════════════════════════════════════════════════════════ */
  function modeFlow(c) {
    const nodes = [
      { id: 'T', label: 'Trigger', x: 0.12, y: 0.38, w: 100, h: 36, color: '#2563EB' },
      { id: 'F', label: 'Filter', x: 0.30, y: 0.38, w: 90, h: 36, color: '#0891B2' },
      { id: 'A', label: 'Action A', x: 0.52, y: 0.22, w: 100, h: 36, color: '#059669' },
      { id: 'B', label: 'Action B', x: 0.52, y: 0.56, w: 100, h: 36, color: '#7C3AED' },
      { id: 'N', label: 'Notify', x: 0.74, y: 0.22, w: 90, h: 36, color: '#D97706' },
      { id: 'D', label: 'Done ✓', x: 0.74, y: 0.56, w: 90, h: 36, color: '#10B981' }
    ];
    const edges = [
      { from: 'T', to: 'F' }, { from: 'F', to: 'A' }, { from: 'F', to: 'B' },
      { from: 'A', to: 'N' }, { from: 'B', to: 'D' }
    ];
    let pulses = [], t = 0;
    function getNode(id) { return nodes.find(n => n.id === id); }
    function nodePos(n) {
      return { x: n.x * c.w, y: n.y * c.h };
    }
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;
      // edges
      edges.forEach(e => {
        const a = nodePos(getNode(e.from)), b = nodePos(getNode(e.to));
        ctx.strokeStyle = 'rgba(37,99,235,0.25)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = -t * 15;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        ctx.setLineDash([]);
      });
      // inject pulses
      if (Math.random() < 0.025) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ e, p: 0, speed: rnd(0.008, 0.018) });
      }
      pulses = pulses.filter(pu => {
        pu.p += pu.speed;
        if (pu.p > 1) return false;
        const a = nodePos(getNode(pu.e.from)), b = nodePos(getNode(pu.e.to));
        const x = lerp(a.x, b.x, pu.p), y = lerp(a.y, b.y, pu.p);
        const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, 'rgba(96,165,250,1)');
        g.addColorStop(1, 'rgba(37,99,235,0)');
        ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        return true;
      });
      // nodes
      nodes.forEach(n => {
        const { x, y } = nodePos(n);
        const glow = 0.15 + 0.06 * Math.sin(t * 2 + n.x * 10);
        const g2 = ctx.createRoundRect ? null : null;
        // glow
        ctx.shadowColor = n.color; ctx.shadowBlur = 12 * glow * 6;
        // box
        const rx = x - n.w / 2, ry = y - n.h / 2;
        ctx.fillStyle = n.color + '22';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.5;
        roundRect(ctx, rx, ry, n.w, n.h, 8);
        ctx.fill(); ctx.stroke();
        ctx.shadowBlur = 0;
        // label
        ctx.font = 'bold 11px Inter,sans-serif';
        ctx.fillStyle = '#E2E8F0';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, x, y + 4);
      });
      drawMetrics(ctx, W, H, [
        { label: 'ROI Gain', value: '315%', color: '#2563EB' },
        { label: 'Hrs Saved', value: '40h+', color: '#06B6D4' },
        { label: 'Deploy', value: '3–4wks', color: '#10B981' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: analytics  –  Animated Bar Chart (Automated Analytics)
  ════════════════════════════════════════════════════════════ */
  function modeAnalytics(c) {
    const bars = [
      { label: 'Jan', target: 0.45, color: '#06B6D4' },
      { label: 'Feb', target: 0.60, color: '#2563EB' },
      { label: 'Mar', target: 0.55, color: '#06B6D4' },
      { label: 'Apr', target: 0.80, color: '#8B5CF6' },
      { label: 'May', target: 0.72, color: '#2563EB' },
      { label: 'Jun', target: 0.90, color: '#10B981' },
      { label: 'Jul', target: 0.68, color: '#F59E0B' },
      { label: 'Aug', target: 0.95, color: '#06B6D4' }
    ];
    let vals = bars.map(() => 0), phase = 0, line = [];
    for (let i = 0; i < 60; i++) line.push(0.3 + 0.4 * Math.sin(i * 0.18) + 0.1 * Math.random());
    let lineOff = 0;
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      phase += 0.012;
      vals = vals.map((v, i) => lerp(v, bars[i].target, 0.04));
      // grid lines
      ctx.strokeStyle = 'rgba(148,163,184,0.1)';
      ctx.lineWidth = 1;
      for (let g = 1; g <= 4; g++) {
        const y = H * 0.82 - (H * 0.62) * (g / 4);
        ctx.beginPath(); ctx.moveTo(W * 0.05, y); ctx.lineTo(W * 0.95, y); ctx.stroke();
        ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.5)'; ctx.textAlign = 'right';
        ctx.fillText(Math.round(g * 25) + '%', W * 0.04, y + 3);
      }
      // bars
      const bw = (W * 0.85) / (bars.length * 1.6);
      const gap = (W * 0.85 - bw * bars.length) / (bars.length + 1);
      bars.forEach((b, i) => {
        const bh = vals[i] * H * 0.62;
        const bx = W * 0.07 + gap + i * (bw + gap);
        const by = H * 0.82 - bh;
        // glow
        const grd = ctx.createLinearGradient(bx, by, bx, H * 0.82);
        grd.addColorStop(0, b.color);
        grd.addColorStop(1, b.color + '44');
        ctx.fillStyle = grd;
        roundRectFill(ctx, bx, by, bw, bh, 4);
        // pulse cap
        const pulse = 0.7 + 0.3 * Math.sin(phase * 3 + i * 0.8);
        ctx.fillStyle = `rgba(255,255,255,${pulse * 0.8})`;
        roundRectFill(ctx, bx, by, bw, 3, 2);
        // label
        ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.7)'; ctx.textAlign = 'center';
        ctx.fillText(b.label, bx + bw / 2, H * 0.89);
        // value above
        if (vals[i] > 0.1) {
          ctx.font = 'bold 9px Inter,sans-serif'; ctx.fillStyle = b.color;
          ctx.fillText(Math.round(vals[i] * 100) + '%', bx + bw / 2, by - 5);
        }
      });
      // trend line overlay
      lineOff = (lineOff + 0.3) % (W * 0.9 / 59);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(16,185,129,0.6)'; ctx.lineWidth = 2;
      line.forEach((v, i) => {
        const x = W * 0.07 + (i / 59) * W * 0.86;
        const y = H * 0.82 - v * H * 0.55;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();
      drawMetrics(ctx, W, H, [
        { label: 'Reports/Day', value: '240+', color: '#06B6D4' },
        { label: 'Data Sources', value: '180+', color: '#2563EB' },
        { label: 'Latency', value: '<50ms', color: '#10B981' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: dataviz  –  Interactive Dashboard (Data Visualization)
  ════════════════════════════════════════════════════════════ */
  function modeDataviz(c) {
    let angle = 0, lineData = [];
    for (let i = 0; i < 80; i++) lineData.push(0.25 + 0.5 * Math.sin(i * 0.2) + 0.15 * Math.random());
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      angle += 0.008;
      const half = W / 2;
      // ── left: animated donut ──
      const cx = half * 0.42, cy = H * 0.45, r = Math.min(cx, cy) * 0.55;
      const slices = [
        { pct: 0.28, color: '#F59E0B', label: 'Sales' },
        { pct: 0.22, color: '#2563EB', label: 'Ops' },
        { pct: 0.18, color: '#06B6D4', label: 'HR' },
        { pct: 0.17, color: '#10B981', label: 'Mktg' },
        { pct: 0.15, color: '#8B5CF6', label: 'Finance' }
      ];
      let a = angle;
      slices.forEach(s => {
        const end = a + s.pct * Math.PI * 2;
        const glow = ctx.createRadialGradient(cx, cy, r * 0.5, cx, cy, r);
        glow.addColorStop(0, s.color + '55');
        glow.addColorStop(1, s.color);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, a, end);
        ctx.closePath();
        ctx.fillStyle = glow; ctx.fill();
        ctx.strokeStyle = '#0D1117'; ctx.lineWidth = 2; ctx.stroke();
        // label
        const ma = a + (end - a) / 2;
        const lx = cx + Math.cos(ma) * r * 0.72;
        const ly = cy + Math.sin(ma) * r * 0.72;
        ctx.font = 'bold 9px Inter,sans-serif';
        ctx.fillStyle = '#F1F5F9'; ctx.textAlign = 'center';
        ctx.fillText(s.label, lx, ly);
        a = end;
      });
      // donut hole
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.48, 0, Math.PI * 2);
      ctx.fillStyle = '#0D1117'; ctx.fill();
      ctx.font = 'bold 12px Inter,sans-serif'; ctx.fillStyle = '#F59E0B'; ctx.textAlign = 'center';
      ctx.fillText('Live', cx, cy - 7);
      ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = '#94A3B8';
      ctx.fillText('Dashboard', cx, cy + 8);
      // ── right: line chart ──
      const lx = half * 1.05, ly = H * 0.15, lw = half * 0.88, lh = H * 0.58;
      ctx.strokeStyle = 'rgba(148,163,184,0.08)'; ctx.lineWidth = 1;
      for (let g = 0; g <= 4; g++) {
        const gy = ly + lh - (g / 4) * lh;
        ctx.beginPath(); ctx.moveTo(lx, gy); ctx.lineTo(lx + lw, gy); ctx.stroke();
      }
      // area fill
      ctx.beginPath();
      lineData.forEach((v, i) => {
        const px = lx + (i / (lineData.length - 1)) * lw;
        const py = ly + lh - v * lh;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.lineTo(lx + lw, ly + lh); ctx.lineTo(lx, ly + lh); ctx.closePath();
      const ag = ctx.createLinearGradient(lx, ly, lx, ly + lh);
      ag.addColorStop(0, 'rgba(6,182,212,0.35)');
      ag.addColorStop(1, 'rgba(6,182,212,0.02)');
      ctx.fillStyle = ag; ctx.fill();
      // line
      ctx.beginPath();
      lineData.forEach((v, i) => {
        const px = lx + (i / (lineData.length - 1)) * lw;
        const py = ly + lh - v * lh;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.strokeStyle = '#06B6D4'; ctx.lineWidth = 2; ctx.stroke();
      // moving dot
      const di = Math.floor((Date.now() / 40) % lineData.length);
      const dpx = lx + (di / (lineData.length - 1)) * lw;
      const dpy = ly + lh - lineData[di] * lh;
      ctx.beginPath(); ctx.arc(dpx, dpy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#06B6D4'; ctx.fill();
      ctx.beginPath(); ctx.arc(dpx, dpy, 9, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6,182,212,0.4)'; ctx.lineWidth = 2; ctx.stroke();
      drawMetrics(ctx, W, H, [
        { label: 'Dashboards', value: '120+', color: '#F59E0B' },
        { label: 'Charts Built', value: '600+', color: '#06B6D4' },
        { label: 'Refresh Rate', value: 'Live', color: '#10B981' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: cloud  –  Server Cluster Topology (Cloud & DevOps)
  ════════════════════════════════════════════════════════════ */
  function modeCloud(c) {
    const servers = [
      { label: 'Dev', icon: '⚙', x: 0.18, y: 0.30, color: '#2563EB' },
      { label: 'Staging', icon: '🔵', x: 0.42, y: 0.20, color: '#06B6D4' },
      { label: 'DB', icon: '🗄', x: 0.42, y: 0.65, color: '#8B5CF6' },
      { label: 'Prod', icon: '✅', x: 0.72, y: 0.30, color: '#10B981' },
      { label: 'CDN', icon: '🌐', x: 0.72, y: 0.65, color: '#F59E0B' },
      { label: 'Monitor', icon: '📊', x: 0.88, y: 0.48, color: '#EC4899' }
    ];
    const links = [[0,1],[0,2],[1,3],[2,3],[1,2],[3,4],[3,5],[4,5]];
    let packets = [], t = 0;
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;
      // links
      links.forEach(([ai, bi]) => {
        const a = servers[ai], b = servers[bi];
        const ax = a.x * W, ay = a.y * H, bx = b.x * W, by = b.y * H;
        ctx.strokeStyle = 'rgba(99,102,241,0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      });
      // inject packets
      if (Math.random() < 0.04) {
        const li = links[Math.floor(Math.random() * links.length)];
        packets.push({ ai: li[0], bi: li[1], p: 0, speed: rnd(0.006, 0.015) });
      }
      packets = packets.filter(pk => {
        pk.p += pk.speed;
        if (pk.p > 1) return false;
        const a = servers[pk.ai], b = servers[pk.bi];
        const x = lerp(a.x * W, b.x * W, pk.p);
        const y = lerp(a.y * H, b.y * H, pk.p);
        const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
        g.addColorStop(0, 'rgba(99,102,241,0.95)');
        g.addColorStop(1, 'rgba(99,102,241,0)');
        ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        return true;
      });
      // server nodes
      servers.forEach(s => {
        const sx = s.x * W, sy = s.y * H;
        const pulse = 0.8 + 0.2 * Math.sin(t * 2 + s.x * 10);
        const g2 = ctx.createRadialGradient(sx, sy, 0, sx, sy, 34);
        g2.addColorStop(0, s.color + '33');
        g2.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g2;
        ctx.beginPath(); ctx.arc(sx, sy, 34, 0, Math.PI * 2); ctx.fill();
        // server box
        ctx.shadowColor = s.color; ctx.shadowBlur = 15 * pulse;
        roundRectFill(ctx, sx - 34, sy - 20, 68, 40, 10, s.color + '22');
        ctx.strokeStyle = s.color; ctx.lineWidth = 1.5;
        roundRectStroke(ctx, sx - 34, sy - 20, 68, 40, 10);
        ctx.shadowBlur = 0;
        // label
        ctx.font = 'bold 10px Inter,sans-serif'; ctx.fillStyle = '#E2E8F0'; ctx.textAlign = 'center';
        ctx.fillText(s.label, sx, sy + 4);
        // status dot
        ctx.beginPath(); ctx.arc(sx + 24, sy - 12, 4, 0, Math.PI * 2);
        ctx.fillStyle = s.color; ctx.fill();
      });
      drawMetrics(ctx, W, H, [
        { label: 'Uptime', value: '99.9%', color: '#10B981' },
        { label: 'Deploy Freq', value: '8×/day', color: '#2563EB' },
        { label: 'MTTR', value: '4min', color: '#06B6D4' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: mlops  –  ML Lifecycle Wheel (MLOps)
  ════════════════════════════════════════════════════════════ */
  function modeMLops(c) {
    const stages = [
      { label: 'Data Prep', color: '#2563EB' },
      { label: 'Training', color: '#8B5CF6' },
      { label: 'Evaluation', color: '#06B6D4' },
      { label: 'Deploy', color: '#10B981' },
      { label: 'Monitor', color: '#F59E0B' },
      { label: 'Retrain', color: '#EC4899' }
    ];
    let spinAngle = 0, active = 0, switchT = 0;
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      spinAngle += 0.004;
      switchT += 0.016;
      if (switchT > 2.5) { active = (active + 1) % stages.length; switchT = 0; }
      const cx = W * 0.42, cy = H * 0.5;
      const R = Math.min(cx, cy) * 0.72;
      const slice = (Math.PI * 2) / stages.length;
      stages.forEach((s, i) => {
        const a1 = spinAngle + i * slice - slice / 2;
        const a2 = a1 + slice - 0.05;
        const isActive = i === active;
        const r = isActive ? R : R * 0.88;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, a1, a2);
        ctx.closePath();
        ctx.fillStyle = isActive ? s.color + 'BB' : s.color + '33';
        ctx.fill();
        ctx.strokeStyle = isActive ? s.color : s.color + '55';
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();
        const ma = a1 + slice / 2;
        const lr = isActive ? R * 0.65 : R * 0.57;
        const lx = cx + Math.cos(ma) * lr;
        const ly = cy + Math.sin(ma) * lr;
        ctx.font = `${isActive ? 'bold ' : ''}10px Inter,sans-serif`;
        ctx.fillStyle = isActive ? '#F1F5F9' : 'rgba(148,163,184,0.7)';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(s.label, lx, ly);
      });
      // center
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = '#0D1117'; ctx.fill();
      ctx.strokeStyle = stages[active].color; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = 'bold 11px Inter,sans-serif';
      ctx.fillStyle = stages[active].color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('MLOps', cx, cy - 8);
      ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = '#94A3B8';
      ctx.fillText(stages[active].label, cx, cy + 8);
      ctx.textBaseline = 'alphabetic';
      // pipeline on right
      const px = W * 0.72, pstages = ['Collect', 'Preprocess', 'Train', 'Serve', 'Track'];
      pstages.forEach((ps, i) => {
        const py = H * 0.18 + i * H * 0.15;
        const isAct = i === active % pstages.length;
        ctx.fillStyle = isAct ? '#2563EB22' : 'rgba(30,40,60,0.5)';
        ctx.strokeStyle = isAct ? '#2563EB' : 'rgba(99,102,241,0.25)';
        ctx.lineWidth = 1;
        roundRectFill(ctx, px - 55, py - 14, 110, 28, 8, ctx.fillStyle);
        roundRectStroke(ctx, px - 55, py - 14, 110, 28, 8);
        ctx.font = `${isAct ? 'bold ' : ''}10px Inter,sans-serif`;
        ctx.fillStyle = isAct ? '#93C5FD' : 'rgba(148,163,184,0.6)';
        ctx.textAlign = 'center';
        ctx.fillText(ps, px, py + 4);
        if (i < pstages.length - 1) {
          const arrowY = py + 14;
          ctx.strokeStyle = isAct ? '#2563EB88' : 'rgba(99,102,241,0.2)';
          ctx.lineWidth = 1; ctx.beginPath();
          ctx.moveTo(px, arrowY); ctx.lineTo(px, arrowY + H * 0.15 - 14); ctx.stroke();
        }
      });
      drawMetrics(ctx, W, H, [
        { label: 'Models Live', value: '50+', color: '#8B5CF6' },
        { label: 'Drift Detected', value: '99%', color: '#06B6D4' },
        { label: 'Re-train Cycle', value: '24h', color: '#10B981' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: saas  –  Build Pipeline (Website & SaaS Dev)
  ════════════════════════════════════════════════════════════ */
  function modeSaas(c) {
    const stages = [
      { label: 'Spec', icon: '📋', color: '#2563EB' },
      { label: 'Design', icon: '🎨', color: '#8B5CF6' },
      { label: 'Code', icon: '💻', color: '#06B6D4' },
      { label: 'Test', icon: '🧪', color: '#F59E0B' },
      { label: 'Deploy', icon: '🚀', color: '#10B981' }
    ];
    let active = 0, progress = 0, t = 0;
    const lines = ['> Initializing repo...', '> Installing deps...', '> Building assets...', '> Running tests...', '> Deploying to cloud...', '> ✅ Live at prod.saas.io'];
    let lineIdx = 0, lineT = 0;
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016; progress += 0.008;
      if (progress >= 1) { progress = 0; active = (active + 1) % stages.length; lineIdx = (lineIdx + 1) % lines.length; }
      // pipeline bar
      const barY = H * 0.35, bw = (W * 0.82) / stages.length, gap = (W * 0.82 - bw * stages.length) / (stages.length + 1);
      stages.forEach((s, i) => {
        const bx = W * 0.08 + gap + i * (bw + gap);
        const isDone = i < active;
        const isCurr = i === active;
        const alpha = isDone ? 1 : isCurr ? 0.85 : 0.3;
        // glow for active
        if (isCurr) { ctx.shadowColor = s.color; ctx.shadowBlur = 20; }
        ctx.fillStyle = isDone || isCurr ? s.color + (isDone ? 'BB' : '55') : 'rgba(30,40,60,0.6)';
        ctx.strokeStyle = isDone || isCurr ? s.color : 'rgba(99,102,241,0.2)';
        ctx.lineWidth = isCurr ? 2 : 1;
        roundRectFill(ctx, bx, barY - 30, bw, 60, 12, ctx.fillStyle);
        roundRectStroke(ctx, bx, barY - 30, bw, 60, 12);
        ctx.shadowBlur = 0;
        ctx.font = '18px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(s.icon, bx + bw / 2, barY - 3);
        ctx.font = `${isCurr ? 'bold ' : ''}10px Inter,sans-serif`;
        ctx.fillStyle = isCurr ? '#E2E8F0' : 'rgba(148,163,184,0.6)';
        ctx.fillText(s.label, bx + bw / 2, barY + 18);
        // progress bar below active
        if (isCurr) {
          ctx.fillStyle = 'rgba(30,40,60,0.4)';
          roundRectFill(ctx, bx, barY + 32, bw, 5, 3, 'rgba(30,40,60,0.4)');
          ctx.fillStyle = s.color;
          roundRectFill(ctx, bx, barY + 32, bw * progress, 5, 3, s.color);
        }
        // connector
        if (i < stages.length - 1) {
          const cx2 = bx + bw, cy2 = barY;
          ctx.strokeStyle = isDone ? stages[i].color + '66' : 'rgba(99,102,241,0.15)';
          ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
          ctx.beginPath(); ctx.moveTo(cx2, cy2); ctx.lineTo(cx2 + gap, cy2); ctx.stroke();
          ctx.setLineDash([]);
        }
      });
      // terminal output
      const tx = W * 0.08, ty = H * 0.58, tw = W * 0.84, th = H * 0.28;
      ctx.fillStyle = 'rgba(13,17,23,0.8)';
      roundRectFill(ctx, tx, ty, tw, th, 10, 'rgba(13,17,23,0.8)');
      ctx.strokeStyle = 'rgba(99,102,241,0.2)'; ctx.lineWidth = 1;
      roundRectStroke(ctx, tx, ty, tw, th, 10);
      ctx.font = '9px "Courier New",monospace'; ctx.fillStyle = '#22D3EE'; ctx.textAlign = 'left';
      for (let i = Math.max(0, lineIdx - 3); i <= lineIdx; i++) {
        ctx.fillStyle = i === lineIdx ? '#22D3EE' : 'rgba(100,200,220,0.4)';
        ctx.fillText(lines[i % lines.length], tx + 14, ty + 20 + (i - Math.max(0, lineIdx - 3)) * 18);
      }
      // blinking cursor
      if (Math.floor(t * 2) % 2 === 0) {
        ctx.fillStyle = '#22D3EE';
        ctx.fillRect(tx + 14 + ctx.measureText(lines[lineIdx % lines.length]).width, ty + 8 + (Math.min(lineIdx, 3)) * 18, 6, 12);
      }
      drawMetrics(ctx, W, H, [
        { label: 'Apps Delivered', value: '80+', color: '#10B981' },
        { label: 'Deploy Time', value: '3–4wk', color: '#2563EB' },
        { label: 'Tech Stack', value: '15+', color: '#8B5CF6' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: strategy  –  KPI Roadmap (Business Consulting)
  ════════════════════════════════════════════════════════════ */
  function modeStrategy(c) {
    const kpis = [
      { label: 'Assess', target: 0.82, color: '#F97316' },
      { label: 'Roadmap', target: 0.70, color: '#2563EB' },
      { label: 'Execute', target: 0.91, color: '#10B981' },
      { label: 'Scale', target: 0.65, color: '#8B5CF6' }
    ];
    let vals = kpis.map(() => 0), t = 0;
    const milestones = ['Discovery', 'Analysis', 'Strategy', 'Pilot', 'Launch', 'Growth'];
    let milestoneT = 0, activeMilestone = 0;
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016; milestoneT += 0.016;
      if (milestoneT > 2.2) { activeMilestone = (activeMilestone + 1) % milestones.length; milestoneT = 0; }
      vals = vals.map((v, i) => lerp(v, kpis[i].target, 0.03));
      // ── KPI gauges top ──
      kpis.forEach((k, i) => {
        const cx = W * (0.14 + i * 0.24), cy = H * 0.32, r = H * 0.18;
        // track
        ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI * 0.8, Math.PI * 2.2);
        ctx.strokeStyle = 'rgba(30,40,60,0.6)'; ctx.lineWidth = 8; ctx.lineCap = 'round';
        ctx.stroke();
        // fill
        const sweep = (Math.PI * 1.4) * vals[i];
        ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI * 0.8, Math.PI * 0.8 + sweep);
        const g = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
        g.addColorStop(0, k.color + '88'); g.addColorStop(1, k.color);
        ctx.strokeStyle = g; ctx.lineWidth = 8; ctx.lineCap = 'round';
        ctx.stroke();
        // center text
        ctx.font = 'bold 15px Inter,sans-serif'; ctx.fillStyle = k.color; ctx.textAlign = 'center';
        ctx.fillText(Math.round(vals[i] * 100) + '%', cx, cy + 5);
        ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.7)';
        ctx.fillText(k.label, cx, cy + r + 16);
      });
      // ── milestone timeline ──
      const tx = W * 0.06, ty = H * 0.67, tw = W * 0.88;
      const step = tw / (milestones.length - 1);
      milestones.forEach((m, i) => {
        const mx = tx + i * step;
        const isDone = i < activeMilestone;
        const isAct = i === activeMilestone;
        // connector
        if (i < milestones.length - 1) {
          ctx.beginPath(); ctx.moveTo(mx, ty); ctx.lineTo(mx + step, ty);
          ctx.strokeStyle = isDone ? '#2563EB' : 'rgba(99,102,241,0.2)'; ctx.lineWidth = 2; ctx.stroke();
        }
        // node
        const cr = isAct ? 9 : 7;
        if (isAct) { ctx.shadowColor = '#2563EB'; ctx.shadowBlur = 15; }
        ctx.beginPath(); ctx.arc(mx, ty, cr, 0, Math.PI * 2);
        ctx.fillStyle = isDone || isAct ? '#2563EB' : 'rgba(30,40,60,0.8)'; ctx.fill();
        ctx.strokeStyle = isDone || isAct ? '#60A5FA' : 'rgba(99,102,241,0.3)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.font = `${isAct ? 'bold ' : ''}9px Inter,sans-serif`;
        ctx.fillStyle = isAct ? '#93C5FD' : 'rgba(148,163,184,0.65)'; ctx.textAlign = 'center';
        ctx.fillText(m, mx, ty + 20);
      });
      drawMetrics(ctx, W, H, [
        { label: 'Revenue ↑', value: '3.2×', color: '#F97316' },
        { label: 'Cost ↓', value: '28%', color: '#10B981' },
        { label: 'ROI', value: '380%', color: '#2563EB' }
      ]);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: industries  –  Industry Hub (used on all solution pages)
  ════════════════════════════════════════════════════════════ */
  function modeIndustries(c) {
    const inds = [
      { label: 'Manufacturing', color: '#2563EB' },
      { label: 'FinTech', color: '#F59E0B' },
      { label: 'Healthcare', color: '#10B981' },
      { label: 'Retail', color: '#EC4899' },
      { label: 'Logistics', color: '#06B6D4' },
      { label: 'SaaS', color: '#8B5CF6' },
      { label: 'E-comm', color: '#F97316' },
      { label: 'Real Estate', color: '#14B8A6' },
      { label: 'Education', color: '#84CC16' },
      { label: 'Startups', color: '#FB7185' },
      { label: 'SMBs', color: '#A78BFA' },
      { label: 'Enterprise', color: '#60A5FA' }
    ];
    let t = 0, spinSpeed = 0.003;
    let orbitR, cx, cy;
    function recalc() { cx = c.w * 0.5; cy = c.h * 0.5; orbitR = Math.min(c.w, c.h) * 0.36; }
    recalc();
    window.addEventListener('resize', recalc);
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += spinSpeed;
      // orbit ring
      ctx.beginPath(); ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99,102,241,0.1)'; ctx.lineWidth = 1; ctx.stroke();
      // spokes + nodes
      inds.forEach((ind, i) => {
        const a = t + (i / inds.length) * Math.PI * 2;
        const nx = cx + Math.cos(a) * orbitR;
        const ny = cy + Math.sin(a) * orbitR;
        // spoke
        ctx.strokeStyle = ind.color + '33'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny); ctx.stroke();
        // pulse packet
        const pp = ((t * 0.5 + i * 0.3) % 1);
        const ppx = lerp(cx, nx, pp), ppy = lerp(cy, ny, pp);
        const pg = ctx.createRadialGradient(ppx, ppy, 0, ppx, ppy, 5);
        pg.addColorStop(0, ind.color + 'CC'); pg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(ppx, ppy, 5, 0, Math.PI * 2);
        ctx.fillStyle = pg; ctx.fill();
        // node
        const nr = 22;
        const gn = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr * 1.5);
        gn.addColorStop(0, ind.color + '30'); gn.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gn; ctx.beginPath(); ctx.arc(nx, ny, nr * 1.5, 0, Math.PI * 2); ctx.fill();
        roundRectFill(ctx, nx - nr, ny - 13, nr * 2, 26, 8, ind.color + '22');
        ctx.strokeStyle = ind.color + '88'; ctx.lineWidth = 1;
        roundRectStroke(ctx, nx - nr, ny - 13, nr * 2, 26, 8);
        ctx.font = '8.5px Inter,sans-serif'; ctx.fillStyle = '#CBD5E1'; ctx.textAlign = 'center';
        ctx.fillText(ind.label, nx, ny + 4);
      });
      // center hub
      const hr = Math.min(W, H) * 0.1;
      const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, hr);
      hg.addColorStop(0, 'rgba(37,99,235,0.5)'); hg.addColorStop(1, 'rgba(37,99,235,0.05)');
      ctx.beginPath(); ctx.arc(cx, cy, hr, 0, Math.PI * 2); ctx.fillStyle = hg; ctx.fill();
      ctx.strokeStyle = 'rgba(99,102,241,0.5)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = 'bold 12px Inter,sans-serif'; ctx.fillStyle = '#93C5FD'; ctx.textAlign = 'center';
      ctx.fillText('AKcelerate', cx, cy - 6);
      ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.7)';
      ctx.fillText('12 Industries', cx, cy + 10);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ════════════════════════════════════════════════════════════
     MODE: about  –  Company Growth + Team Stats
  ════════════════════════════════════════════════════════════ */
  function modeAbout(c) {
    const pts = [12, 18, 22, 28, 35, 45, 60, 75, 90, 108, 130, 150];
    let vals = pts.map(() => 0), t = 0;
    const stats = [
      { label: 'Years', value: 5, color: '#2563EB', icon: '📅' },
      { label: 'Clients', value: 120, color: '#10B981', icon: '🤝' },
      { label: 'Projects', value: 340, color: '#8B5CF6', icon: '💼' },
      { label: 'Countries', value: 8, color: '#F59E0B', icon: '🌍' }
    ];
    let dispVals = stats.map(() => 0);
    function frame() {
      const ctx = c.ctx, W = c.w, H = c.h;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;
      vals = vals.map((v, i) => lerp(v, pts[i] / 150, 0.04));
      dispVals = dispVals.map((v, i) => lerp(v, stats[i].value, 0.05));
      // ── growth line chart (top 55% of canvas) ──
      const lx = W * 0.06, ly = H * 0.05, lw = W * 0.88, lh = H * 0.45;
      // grid
      ctx.strokeStyle = 'rgba(148,163,184,0.07)'; ctx.lineWidth = 1;
      for (let g = 1; g <= 4; g++) {
        const gy = ly + lh - (g / 4) * lh;
        ctx.beginPath(); ctx.moveTo(lx, gy); ctx.lineTo(lx + lw, gy); ctx.stroke();
      }
      // area
      ctx.beginPath();
      vals.forEach((v, i) => {
        const px = lx + (i / (vals.length - 1)) * lw;
        const py = ly + lh - v * lh;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.lineTo(lx + lw, ly + lh); ctx.lineTo(lx, ly + lh); ctx.closePath();
      const ag = ctx.createLinearGradient(lx, ly, lx, ly + lh);
      ag.addColorStop(0, 'rgba(37,99,235,0.4)'); ag.addColorStop(1, 'rgba(37,99,235,0.03)');
      ctx.fillStyle = ag; ctx.fill();
      ctx.beginPath();
      vals.forEach((v, i) => {
        const px = lx + (i / (vals.length - 1)) * lw;
        const py = ly + lh - v * lh;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.strokeStyle = '#2563EB'; ctx.lineWidth = 2; ctx.stroke();
      // dots + year labels
      const years = ['2019','2020','2021','2022','2023','2024','2025'];
      vals.forEach((v, i) => {
        if (i % 2 !== 0) return;
        const px = lx + (i / (vals.length - 1)) * lw;
        const py = ly + lh - v * lh;
        ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#2563EB'; ctx.fill();
        ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(37,99,235,0.4)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.font = '8px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.5)'; ctx.textAlign = 'center';
        ctx.fillText(years[i / 2] || '', px, ly + lh + 14);
      });
      ctx.font = '9px Inter,sans-serif'; ctx.fillStyle = '#60A5FA'; ctx.textAlign = 'left';
      ctx.fillText('Client Growth Trajectory', lx, ly - 4);
      // ── stat cards (bottom 35% of canvas) ──
      stats.forEach((s, i) => {
        const cw = (W - W * 0.08) / stats.length - 8;
        const cx = W * 0.04 + i * (cw + 8);
        const cy = H * 0.62;
        roundRectFill(ctx, cx, cy, cw, H * 0.28, 10, s.color + '15');
        ctx.strokeStyle = s.color + '40'; ctx.lineWidth = 1;
        roundRectStroke(ctx, cx, cy, cw, H * 0.28, 10);
        ctx.font = '18px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(s.icon, cx + cw / 2, cy + 28);
        ctx.font = 'bold 16px Inter,sans-serif'; ctx.fillStyle = s.color;
        ctx.fillText(Math.round(dispVals[i]) + (s.value > 10 ? '+' : ''), cx + cw / 2, cy + 52);
        ctx.font = '8px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.7)';
        ctx.fillText(s.label, cx + cw / 2, cy + 67);
      });
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ── shared: metrics overlay (bottom right) ── */
  function drawMetrics(ctx, W, H, metrics) {
    metrics.forEach((m, i) => {
      const mw = 90, mh = 36, gap = 8;
      const mx = W - (metrics.length - i) * (mw + gap) + gap / 2;
      const my = H - mh - 10;
      roundRectFill(ctx, mx, my, mw, mh, 8, 'rgba(13,17,23,0.75)');
      ctx.strokeStyle = m.color + '55'; ctx.lineWidth = 1;
      roundRectStroke(ctx, mx, my, mw, mh, 8);
      ctx.font = 'bold 13px Inter,sans-serif'; ctx.fillStyle = m.color; ctx.textAlign = 'center';
      ctx.fillText(m.value, mx + mw / 2, my + 16);
      ctx.font = '7px Inter,sans-serif'; ctx.fillStyle = 'rgba(148,163,184,0.65)';
      ctx.fillText(m.label, mx + mw / 2, my + 29);
    });
  }

  /* ── canvas helpers ── */
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }
  function roundRectFill(ctx, x, y, w, h, r, color) {
    if (color) ctx.fillStyle = color;
    roundRect(ctx, x, y, w, h, r); ctx.fill();
  }
  function roundRectStroke(ctx, x, y, w, h, r) {
    roundRect(ctx, x, y, w, h, r); ctx.stroke();
  }

  /* ── public API ── */
  AKviz.init = function (id, mode) {
    var c = setupCanvas(id);
    if (!c) return;
    var map = {
      neural: modeNeural, flow: modeFlow, analytics: modeAnalytics,
      dataviz: modeDataviz, cloud: modeCloud, mlops: modeMLops,
      saas: modeSaas, strategy: modeStrategy, industries: modeIndustries,
      about: modeAbout
    };
    if (map[mode]) map[mode](c);
  };

  G.AKviz = AKviz;
})(window);
