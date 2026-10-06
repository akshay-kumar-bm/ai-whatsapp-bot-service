# ai-whatsapp-bot-service

A small Express service that serves a sales landing page and onboarding form for an "AI WhatsApp/Instagram bot for local businesses" offering, and turns each submission into a ready-to-use bot system prompt plus instant lead alerts.

## What it does
- `GET /` renders a landing page (problem, what the bot fixes, target niches, how it works, pricing box) with a WhatsApp click-to-chat CTA.
- `GET /onboard` renders a multi-section onboarding form (business name/type, details, FAQs, languages, owner contact).
- `POST /onboard`:
  1. Builds a customer-specific bot system prompt from the form answers (reply in the customer's language, under 40 words, never invent prices/services, append `[HANDOVER]` on booking/complaint intents, etc.).
  2. Sends a push notification to an ntfy.sh topic (done before the response is sent, so Vercel does not terminate it).
  3. Shows a confirmation page with the generated prompt and next steps.
  4. Appends the submission to `submissions.json` (best-effort backup; serverless filesystems are ephemeral).
  5. Emails an alert via Gmail using Nodemailer, only if credentials are configured.
- Unknown routes return 404.

## Tech stack
Node.js, Express 5, Nodemailer, ntfy.sh (HTTP push), Vercel (`@vercel/node` build). Pages are server-rendered HTML strings in `server.js`.

## Structure
```
server.js       # all routes, HTML templates, prompt builder, notifications
package.json    # express, nodemailer; scripts: start, dev
vercel.json     # routes everything to server.js
.gitignore      # node_modules, .env
```

## Setup
```bash
npm install
npm run dev        # node --watch server.js   (or: npm start)
# http://localhost:3000/   and   /onboard
```
Environment variables (all optional):
- `PORT` (default 3000)
- `NTFY_TOPIC` (ntfy topic for lead alerts)
- `GMAIL_USER`, `GMAIL_PASS` (enable email alerts; use a Gmail app password)

Deploy: push to Vercel; `vercel.json` already routes all paths to `server.js`.

## Limitations / future work
- No actual WhatsApp/Instagram integration lives in this repo; it is the sales funnel and onboarding intake, not the bot runtime.
- Submissions are stored in a local JSON file, which is lost on Vercel; use a database or sheet instead.
- Contact details, the ntfy topic fallback and the notification recipient are hard-coded in `server.js` and should move to env vars.
- Landing-page stats and claims are marketing copy, not measured results.
- No input validation, rate limiting or CSRF protection on the form.
