const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── Landing Page ──────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI WhatsApp Bot for Indian Businesses — Akshay Kumar BM</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',system-ui,sans-serif;background:#0a1628;color:#f4ede1;line-height:1.6}
  a{color:inherit;text-decoration:none}
  .wrap{max-width:740px;margin:0 auto;padding:60px 24px}

  /* Hero */
  .hero-tag{display:inline-block;background:#d4af7a;color:#0a1628;padding:6px 20px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:28px}
  h1{font-size:clamp(32px,5vw,52px);font-weight:700;line-height:1.1;margin-bottom:20px}
  h1 span{color:#d4af7a}
  .hero-sub{font-size:19px;color:#c9c1b3;margin-bottom:16px;max-width:620px}
  .news-bar{background:#142339;border-left:3px solid #d4af7a;padding:12px 20px;border-radius:4px;font-size:14px;color:#c9c1b3;margin:24px 0 36px}
  .news-bar strong{color:#d4af7a}

  /* Stats */
  .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:36px 0}
  .stat{background:#142339;border:1px solid rgba(212,175,122,.2);border-radius:12px;padding:24px 20px;text-align:center}
  .stat-num{font-size:42px;font-weight:700;color:#d4af7a;line-height:1}
  .stat-label{font-size:13px;color:#8a9bb0;margin-top:6px}

  /* Pain points */
  h2{font-size:26px;color:#d4af7a;margin:48px 0 20px}
  .pain-list{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:40px}
  .pain-list li{background:#142339;border-radius:10px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;font-size:16px;color:#c9c1b3}
  .pain-list li::before{content:"✗";color:#ef4444;font-weight:700;flex-shrink:0;margin-top:1px}
  .fix-list{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:40px}
  .fix-list li{background:#142339;border-radius:10px;padding:16px 20px;display:flex;gap:14px;align-items:flex-start;font-size:16px;color:#c9c1b3}
  .fix-list li::before{content:"✓";color:#22c55e;font-weight:700;flex-shrink:0;margin-top:1px}

  /* Pricing */
  .price-box{background:#142339;border:1.5px solid #d4af7a;border-radius:16px;padding:36px;margin:36px 0}
  .price-row{display:flex;align-items:center;gap:16px;margin-bottom:8px}
  .strike{font-size:22px;color:#6b7280;text-decoration:line-through}
  .price{font-size:48px;font-weight:700;color:#d4af7a}
  .price-sub{font-size:15px;color:#8a9bb0;margin-bottom:28px}
  .include-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
  .include-list li{font-size:15px;color:#c9c1b3;display:flex;gap:10px}
  .include-list li::before{content:"→";color:#d4af7a}
  .urgency{background:rgba(212,175,122,.1);border:1px solid rgba(212,175,122,.3);border-radius:8px;padding:12px 16px;font-size:14px;font-style:italic;color:#d4af7a;margin-bottom:24px}

  /* CTA */
  .cta{display:block;background:#d4af7a;color:#0a1628;padding:18px 0;border-radius:10px;font-size:18px;font-weight:700;text-align:center;transition:background .2s}
  .cta:hover{background:#e3c08d}
  .cta-ghost{display:block;border:1.5px solid #d4af7a;color:#d4af7a;padding:14px 0;border-radius:10px;font-size:16px;font-weight:600;text-align:center;margin-top:12px;transition:background .2s}
  .cta-ghost:hover{background:rgba(212,175,122,.08)}

  /* Niches */
  .niche-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:40px}
  .niche{background:#142339;border-radius:10px;padding:16px 20px;font-size:15px;color:#c9c1b3}
  .niche strong{color:#f4ede1;display:block;margin-bottom:4px}

  /* How it works */
  .steps{display:flex;flex-direction:column;gap:0;margin-bottom:40px;position:relative}
  .steps::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:rgba(212,175,122,.2)}
  .step{display:flex;gap:20px;align-items:flex-start;padding:0 0 28px}
  .step-num{width:44px;height:44px;border-radius:50%;background:#142339;border:2px solid #d4af7a;display:flex;align-items:center;justify-content:center;color:#d4af7a;font-weight:700;font-size:16px;flex-shrink:0;position:relative;z-index:1}
  .step-body strong{color:#f4ede1;font-size:16px;display:block;margin-bottom:4px}
  .step-body span{color:#8a9bb0;font-size:14px}

  /* Footer */
  footer{text-align:center;padding:48px 24px 32px;color:#6b7280;font-size:13px}
</style>
</head>
<body>
<div class="wrap">

  <div class="hero-tag">New · May 2026</div>
  <h1>Your Customers Are Messaging.<br>Are You <span>Replying?</span></h1>
  <p class="hero-sub">I build AI bots that answer WhatsApp & Instagram DMs 24/7 — trained on your business, delivered in 48 hours.</p>

  <div class="news-bar">
    <strong>📢 Meta just launched Business AI on WhatsApp for India (May 2026).</strong> Early adopters are getting a head start on competitors still on manual replies.
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-num">98%</div>
      <div class="stat-label">WhatsApp open rate<br>(vs 22% for email)</div>
    </div>
    <div class="stat">
      <div class="stat-num">45%</div>
      <div class="stat-label">Response rate on WhatsApp<br>(vs 6% email)</div>
    </div>
    <div class="stat">
      <div class="stat-num">91%</div>
      <div class="stat-label">Indian adults chat with a business weekly</div>
    </div>
  </div>

  <h2>The Problem Every Local Business Has</h2>
  <ul class="pain-list">
    <li>Customer messages at 10pm asking "what are your timings?" — no one replies, lead lost</li>
    <li>Receptionist drowns in "how much does it cost?" messages all day</li>
    <li>Patients book appointments then ghost — no reminder system</li>
    <li>Instagram DMs pile up unread over the weekend</li>
    <li>Competitor has a bot. You're still typing manually.</li>
  </ul>

  <h2>What the Bot Fixes</h2>
  <ul class="fix-list">
    <li>Replies to every WhatsApp & Instagram DM in under 5 seconds — 24/7</li>
    <li>Answers your top FAQs (timings, prices, services, location) automatically</li>
    <li>Sends appointment reminders — cuts no-shows by 40%</li>
    <li>Detects "I want to book" and forwards the lead to your phone instantly</li>
    <li>Replies in English, Hindi, or your local language — auto-detects</li>
  </ul>

  <h2>Who It's For</h2>
  <div class="niche-grid">
    <div class="niche"><strong>Dental Clinics</strong>Appointment booking, FAQ replies, reminder automation</div>
    <div class="niche"><strong>Coaching Centers</strong>Admission enquiries, fee info, batch timings 24/7</div>
    <div class="niche"><strong>Real Estate Agents</strong>Property queries, site visit bookings, follow-ups</div>
    <div class="niche"><strong>Salons & Gyms</strong>Slot bookings, pricing, package info on autopilot</div>
    <div class="niche"><strong>Clinics & Hospitals</strong>Patient queries, OPD timings, doctor availability</div>
    <div class="niche"><strong>D2C & Boutiques</strong>Order queries, product info, Instagram DM replies</div>
  </div>

  <h2>How It Works</h2>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-body"><strong>You pay ₹8,500</strong><span>UPI / Razorpay — 2 minutes</span></div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-body"><strong>Fill the onboarding form</strong><span>5 minutes — your FAQs, timings, prices, contact</span></div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-body"><strong>I build & test the bot</strong><span>48 hours — you'll see it answering real questions</span></div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-body"><strong>Goes live on your WhatsApp + Instagram</strong><span>I walk you through the 10-min setup on a call</span></div>
    </div>
    <div class="step">
      <div class="step-num">5</div>
      <div class="step-body"><strong>7 days free tweaks</strong><span>Change answers, add FAQs, adjust the handover trigger</span></div>
    </div>
  </div>

  <div class="price-box">
    <div class="price-row">
      <span class="strike">₹15,000</span>
      <span class="price">₹8,500</span>
    </div>
    <p class="price-sub">One-time setup · No monthly subscription · UPI / Cards / Razorpay</p>
    <div class="urgency">⏳ First 3 clients this month only. After that, price goes to ₹15,000.</div>
    <ul class="include-list">
      <li>Bot trained on your business (timings, services, prices, FAQs)</li>
      <li>Works on WhatsApp Business + Instagram DMs</li>
      <li>Auto-handover of real leads to your phone</li>
      <li>Google Sheet you can edit anytime to update answers</li>
      <li>Replies in English, Hindi & your local language</li>
      <li>7 days free tweaks after delivery</li>
      <li>100% refund if bot fails your top 5 FAQs after going live</li>
    </ul>
    <a href="/onboard" class="cta">Claim Your Spot — Fill Onboarding Form →</a>
    <a href="https://wa.me/919164623536?text=Hi%20Akshay%2C%20I%20want%20the%20AI%20bot%20demo" class="cta-ghost">Get a free 30-sec demo first →</a>
  </div>

</div>
<footer>Akshay Kumar BM · AI Automation · akshaykumarbedre.bm@gmail.com · +91 91646 23536</footer>
</body>
</html>`);
});

// ── Onboarding Form ───────────────────────────────────────────────────────────
app.get('/onboard', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Onboarding — AI Bot Setup</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',system-ui,sans-serif;background:#0a1628;color:#f4ede1;padding:48px 24px}
  .wrap{max-width:640px;margin:0 auto}
  h1{font-size:32px;font-weight:700;margin-bottom:8px}
  h1 span{color:#d4af7a}
  .sub{color:#8a9bb0;font-size:15px;margin-bottom:40px}
  label{display:block;font-size:14px;color:#d4af7a;font-weight:600;margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase}
  input,select,textarea{width:100%;background:#142339;border:1.5px solid rgba(212,175,122,.25);border-radius:8px;padding:12px 16px;color:#f4ede1;font-size:15px;font-family:inherit;margin-bottom:24px;outline:none;transition:border-color .2s}
  input:focus,select:focus,textarea:focus{border-color:#d4af7a}
  textarea{min-height:120px;resize:vertical}
  select option{background:#142339}
  .section{background:#142339;border-radius:12px;padding:28px;margin-bottom:24px;border:1px solid rgba(212,175,122,.1)}
  .section-title{font-size:18px;font-weight:700;color:#d4af7a;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid rgba(212,175,122,.15)}
  .hint{font-size:13px;color:#6b7280;margin-top:-18px;margin-bottom:20px}
  button{width:100%;background:#d4af7a;color:#0a1628;padding:18px;border:none;border-radius:10px;font-size:18px;font-weight:700;cursor:pointer;font-family:inherit}
  button:hover{background:#e3c08d}
</style>
</head>
<body>
<div class="wrap">
  <h1>Bot <span>Onboarding</span></h1>
  <p class="sub">Takes 5 minutes. Fill this once — I build your bot and deliver in 48 hours.</p>

  <form method="POST" action="/onboard">

    <div class="section">
      <div class="section-title">1. Your Business</div>
      <label>Business Name</label>
      <input type="text" name="business_name" placeholder="e.g. Smile Dental Clinic" required>
      <label>Business Type</label>
      <select name="business_type" required>
        <option value="">Select...</option>
        <option>Dental Clinic</option>
        <option>Medical / General Clinic</option>
        <option>Coaching / Tuition Center</option>
        <option>Real Estate Agent</option>
        <option>Salon / Spa</option>
        <option>Gym / Yoga Studio</option>
        <option>Boutique / Fashion Store</option>
        <option>Restaurant / Cafe</option>
        <option>Other</option>
      </select>
      <label>City</label>
      <input type="text" name="city" placeholder="e.g. Bangalore" required>
      <label>Full Address</label>
      <input type="text" name="address" placeholder="e.g. #12, 3rd Cross, Whitefield, Bangalore" required>
      <label>Working Hours</label>
      <input type="text" name="timings" placeholder="e.g. Mon–Sat 9am–9pm, Sunday Closed" required>
    </div>

    <div class="section">
      <div class="section-title">2. Contact & WhatsApp</div>
      <label>WhatsApp Business Number (with country code)</label>
      <input type="text" name="whatsapp_number" placeholder="e.g. +91 98765 43210" required>
      <label>Instagram Handle (optional)</label>
      <input type="text" name="instagram" placeholder="e.g. @smiledentalblr">
      <label>Owner's Personal WhatsApp (for lead alerts)</label>
      <input type="text" name="owner_whatsapp" placeholder="+91 98765 43210" required>
    </div>

    <div class="section">
      <div class="section-title">3. Services & Prices</div>
      <label>List your main services and prices</label>
      <textarea name="services" placeholder="e.g.
Dental cleaning — ₹800
Teeth whitening — ₹3,500
Root canal — ₹4,000–₹7,000
Braces consultation — Free
Braces treatment — ₹25,000–₹60,000" required></textarea>
    </div>

    <div class="section">
      <div class="section-title">4. Top Customer Questions</div>
      <label>What do customers ask you most on WhatsApp / DMs?</label>
      <p class="hint">Write each question and your answer. More detail = better bot.</p>
      <textarea name="faqs" placeholder="Q: Do you do home visits?
A: No, we only see patients at the clinic.

Q: Is parking available?
A: Yes, free parking in the basement.

Q: Do you accept insurance?
A: We accept Star Health and HDFC Ergo.

Q: How long does a cleaning take?
A: About 30–45 minutes." required></textarea>
    </div>

    <div class="section">
      <div class="section-title">5. Languages</div>
      <label>Which languages should the bot reply in?</label>
      <input type="text" name="languages" placeholder="e.g. English, Hindi, Kannada" required>
      <label>Anything else the bot should know?</label>
      <textarea name="extra" placeholder="e.g. We offer EMI on treatments above ₹10,000. Dr. Sharma only sees patients on Tuesdays."></textarea>
    </div>

    <button type="submit">Submit — I'll Build Your Bot in 48 Hours →</button>
  </form>
</div>
</body>
</html>`);
});

// ── Onboarding Submission → Auto-generate bot config ─────────────────────────
app.post('/onboard', (req, res) => {
  const d = req.body;

  // Auto-generate the system prompt from form data
  const systemPrompt = `You are the WhatsApp and Instagram auto-reply assistant for ${d.business_name}, a ${d.business_type} located in ${d.city}.

BUSINESS FACTS:
- Address: ${d.address}
- Working hours: ${d.timings}
- WhatsApp: ${d.whatsapp_number}
- Services & prices: ${d.services}

KNOWN Q&A:
${d.faqs}

ADDITIONAL INFO:
${d.extra || 'None'}

RULES:
1. Reply in the customer's language (auto-detect). Supported: ${d.languages}.
2. Be warm, friendly, and concise — under 40 words per reply.
3. NEVER invent prices, timings, or services not listed above. If unsure, say: "Let me check with our team — can I take your name and best time to call?"
4. If the customer says: book, appointment, visit, call me, speak to staff, or complaint — reply helpfully and append [HANDOVER].
5. On [HANDOVER], the alert goes to: ${d.owner_whatsapp}
6. End every first reply with: "Anything else I can help with?"
7. Never promise discounts, refunds, or special deals — defer to the team.`;

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Submitted! — AI Bot Setup</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',system-ui,sans-serif;background:#0a1628;color:#f4ede1;padding:48px 24px}
  .wrap{max-width:680px;margin:0 auto}
  .badge{background:#22c55e;color:#fff;padding:6px 20px;border-radius:20px;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;display:inline-block;margin-bottom:24px}
  h1{font-size:34px;font-weight:700;margin-bottom:12px}
  h1 span{color:#d4af7a}
  .sub{color:#8a9bb0;font-size:16px;margin-bottom:40px}
  .card{background:#142339;border-radius:12px;padding:28px;margin-bottom:20px;border:1px solid rgba(212,175,122,.15)}
  .card h2{font-size:16px;color:#d4af7a;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px}
  .prompt-box{background:#0a1628;border:1px solid rgba(212,175,122,.2);border-radius:8px;padding:20px;font-size:13px;color:#c9c1b3;white-space:pre-wrap;line-height:1.7;font-family:monospace;overflow-x:auto}
  .next-steps{list-style:none;display:flex;flex-direction:column;gap:12px}
  .next-steps li{display:flex;gap:14px;font-size:15px;color:#c9c1b3;align-items:flex-start}
  .next-steps li::before{content:"→";color:#d4af7a;flex-shrink:0;margin-top:1px}
  .cta{display:block;background:#d4af7a;color:#0a1628;padding:16px;border-radius:10px;font-size:16px;font-weight:700;text-align:center;margin-top:24px;text-decoration:none}
</style>
</head>
<body>
<div class="wrap">
  <div class="badge">✓ Submitted</div>
  <h1>Onboarding <span>Complete!</span></h1>
  <p class="sub">I'll build and deliver your bot within 48 hours. Check WhatsApp for updates.</p>

  <div class="card">
    <h2>Your Auto-Generated Bot System Prompt</h2>
    <p style="font-size:13px;color:#6b7280;margin-bottom:16px">This is what powers your bot. Copy this into n8n / OpenAI if you want to self-host.</p>
    <div class="prompt-box">${systemPrompt.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
  </div>

  <div class="card">
    <h2>What Happens Next</h2>
    <ul class="next-steps">
      <li>I receive your form data and start building your bot immediately</li>
      <li>Within 24 hours: I send you a test video of the bot answering your FAQs</li>
      <li>Within 48 hours: bot is live on your WhatsApp + Instagram</li>
      <li>I schedule a 10-min call to walk you through the setup</li>
      <li>7 days of free tweaks — just WhatsApp me any changes</li>
    </ul>
    <a href="https://wa.me/919164623536?text=Hi%20Akshay%2C%20I%20just%20submitted%20the%20onboarding%20form%20for%20${encodeURIComponent(d.business_name)}" class="cta">WhatsApp me to confirm receipt →</a>
  </div>
</div>
</body>
</html>`);

  // Log to console
  console.log('\n🔔 NEW CLIENT ONBOARDING:', d.business_name, '|', d.city, '|', d.whatsapp_number);

  // Send instant email notification via Resend
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'akshaykumarbedre.bm@gmail.com',
        subject: `🔔 New Bot Client: ${d.business_name} (${d.city})`,
        html: `<h2>New Onboarding Submission</h2>
<table style="border-collapse:collapse;width:100%">
<tr><td style="padding:8px;font-weight:bold">Business</td><td style="padding:8px">${d.business_name}</td></tr>
<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Type</td><td style="padding:8px">${d.business_type}</td></tr>
<tr><td style="padding:8px;font-weight:bold">City</td><td style="padding:8px">${d.city}</td></tr>
<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Address</td><td style="padding:8px">${d.address}</td></tr>
<tr><td style="padding:8px;font-weight:bold">Timings</td><td style="padding:8px">${d.timings}</td></tr>
<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">WhatsApp</td><td style="padding:8px">${d.whatsapp_number}</td></tr>
<tr><td style="padding:8px;font-weight:bold">Instagram</td><td style="padding:8px">${d.instagram || '-'}</td></tr>
<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Owner WhatsApp</td><td style="padding:8px">${d.owner_whatsapp}</td></tr>
<tr><td style="padding:8px;font-weight:bold">Languages</td><td style="padding:8px">${d.languages}</td></tr>
</table>
<h3 style="margin-top:20px">Services</h3><pre style="background:#f5f5f5;padding:12px">${d.services}</pre>
<h3>FAQs</h3><pre style="background:#f5f5f5;padding:12px">${d.faqs}</pre>
<h3>Extra Notes</h3><pre style="background:#f5f5f5;padding:12px">${d.extra || 'None'}</pre>
<p style="margin-top:20px;color:#888">Reply to this email or WhatsApp the owner at ${d.owner_whatsapp} to follow up.</p>`
      })
    }).catch(err => console.error('Email notification failed:', err.message));
  }
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).send('Not found'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`\n✅ Server running at http://localhost:${PORT}\n   Landing page : http://localhost:${PORT}/\n   Onboarding   : http://localhost:${PORT}/onboard\n`));
