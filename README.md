
# Standalone POS Backend

This is a modular POS backend system supporting both online (Stripe) and offline (SQLite) transaction handling.

## 🧱 Structure
- `routes/` – API route handlers
- `controllers/` – Logic and Stripe/DB ops
- `database/` – Includes `offline.db` for offline storage
- `config/` – Environment and currency config

## 🔧 Setup

```bash
npm install
cp .env.example .env  # Fill in your real Stripe key
npm start
```

## 🌐 Routes
- `POST /transactions` – Online payment via Stripe
- `POST /offline/save` – Save offline transaction
- `GET /offline/all` – List offline transactions
- `GET /reports/daily` – Get daily report

## ☁️ Deployment
- Works on [Render.com](https://render.com)
- Set `STRIPE_SECRET_KEY` in environment variables
