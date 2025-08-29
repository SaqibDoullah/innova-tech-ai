# Innova Tech AI

Monorepo-style project with a React/Vite frontend and a lightweight Node/Express backend for API and email (Nodemailer). UI uses Tailwind + Radix primitives; motion via Framer Motion; voice/agent features via `@vapi-ai/web`.

## Features
- ⚡ Fast React 18 app with Vite
- 🎨 Tailwind CSS + Radix UI + Lucide icons
- 🎬 Framer Motion animations
- 🗺️ Client-side routing (React Router 6)
- 📣 Voice / AI agent hooks with `@vapi-ai/web`
- ✉️ Email sending via backend (`nodemailer`)
- 🔐 .env-based configuration

## Repository Layout
```
.
├─ backend/              # Express server (API, email)
├─ plugins/              # Vite plugins / custom tooling
├─ public/               # Static assets
├─ src/                  # React app source
├─ index.html            # Vite entry HTML
├─ tailwind.config.js    # Tailwind config
├─ postcss.config.js     # PostCSS config
├─ vite.config.js        # Vite config
└─ .vscode/              # Editor settings
```

## Prerequisites
- **Node.js 18+** (use the version in `.nvmrc` if present)
- **npm** or **pnpm/yarn**

## Setup

### 1) Install dependencies
```bash
# root (frontend)
npm install

# backend
cd backend
npm install
```

### 2) Environment variables

Create `.env` files as needed.

**Frontend (`.env` in project root or `.env.local`):**
> Only expose safe, public keys on the client.
```env
VITE_APP_NAME=Innova Tech AI
# VAPI public config (example)
VITE_VAPI_ORG_ID=your_public_org_id
VITE_VAPI_AGENT_ID=your_public_agent_id
```

**Backend (`backend/.env`):**
```env
PORT=5001
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5173

# Email (Nodemailer examples)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
FROM_EMAIL=no-reply@yourdomain.com
```

> Never commit `.env` files.

## Development

### Run frontend (Vite)
```bash
npm run dev
```
Vite will print the local dev URL (commonly `http://localhost:5173`).

### Run backend (Express)
```bash
cd backend
node server.js
```
Server listens on `PORT` (default `5001`). Ensure `CORS_ORIGIN` matches your frontend dev URL.

## Build & Preview (Frontend)
```bash
# Build
npm run build

# Preview the built app locally
npm run preview
```
The compiled assets go to `dist/`.

## Common Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Production build
- `npm run preview` – Preview built site
- (backend) `node server.js` – Start API server

## Integrations

### Vapi (Client)
- Import and initialize from `@vapi-ai/web` within your React code (e.g., in a provider or a feature module).
- Use `VITE_` prefixed env vars for any client config you need at build time.

### Email (Backend)
- `nodemailer` uses your `SMTP_*` settings from `backend/.env`.
- Add an API route in `backend/server.js` (e.g., `POST /api/send-email`) that consumes form data from the frontend and sends mail.

## Styling & UI
- Tailwind utilities drive layout/styles.
- Radix UI provides accessible primitives; pair with your Tailwind classes.
- Motion via Framer Motion components where needed.

## Deployment Notes
- **Frontend**: Deploy contents of `dist/` to your static host (e.g., Hostinger static site or any CDN).
- **Backend**: Deploy `/backend` Node app to a Node-compatible host (set `PORT`, `CORS_ORIGIN`, and SMTP vars).
- If serving frontend and backend from the same origin in production, point the frontend to your backend origin and tighten CORS accordingly.

## Linting / Formatting
- ESLint is included; configure rules in `.eslintrc` (or use `eslint-config-react-app` defaults).

## Troubleshooting
- CORS errors → check `CORS_ORIGIN` and ports.
- 4xx/5xx from email route → verify SMTP credentials and that less-secure app access/firewall rules aren’t blocking.
- Env not picked up → restart dev server after changing `.env` files.

## License
Proprietary (update if applicable).
