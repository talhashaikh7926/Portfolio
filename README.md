# Talha Shaikh — Portfolio

Personal portfolio site built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Showcases full-stack engineering experience with three interactive demo projects inspired by production work.

## Live Demos

| Project | Route | Description |
|---------|-------|-------------|
| Smart Search Engine | `/demos/smart-search` | AI-style product discovery (OpenAI pattern) |
| Booking App Skeleton | `/demos/booking` | Full-stack booking flow with Stripe-ready checkout |
| ERP Dashboard | `/demos/erp-dashboard` | Finance & operations analytics dashboard |

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Deploy — no environment variables required for demos

```bash
# Or deploy via CLI
npx vercel
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   └── demos/            # Interactive project demos
├── components/           # Portfolio UI components
├── data/portfolio.ts     # Resume content & project metadata
└── lib/                  # Demo logic (search, etc.)
```

## CV Note

Production work was completed on employer GitHub accounts per company policy. This portfolio demonstrates the same architectural patterns through standalone demos.

## Contact

- **Email:** talhatwice@gmail.com
- **LinkedIn:** [linkedin.com/in/talha-shaikh-37030a18b](https://linkedin.com/in/talha-shaikh-37030a18b)
- **Location:** London, UK
