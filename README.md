# EaseBuild

Portfolio site for **EaseBuild** — showcases live web applications built for businesses.

## Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS
- Static content in `src/content/projects.json`
- Deploy on [Vercel](https://vercel.com) (free tier)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add a project

1. Edit `src/content/projects.json`
2. Add a screenshot under `public/projects/` (optional SVG or PNG)
3. Commit and push — Vercel redeploys automatically

## Deploy to Vercel

1. Push this repo to GitHub (`easebuild`)
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Optional env vars:
   - `NEXT_PUBLIC_SITE_URL` = `https://easebuild.in`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = your email
4. Point domain **easebuild.in** to Vercel DNS

## Deploy to EC2 (GitHub Actions)

Same pattern as `charted_accountant_crm`: push to `prod` or `feature_1.0` → CI → SSH deploy to EC2.

See [.github/GITHUB_ACTIONS_SETUP.md](.github/GITHUB_ACTIONS_SETUP.md) for secrets, environments, and bootstrap steps.

Quick start:

1. Create GitHub environments `production` and `staging` with `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`
2. Push `prod` and `feature_1.0` branches
3. Run **Bootstrap EC2** workflow once per machine
4. Push to `prod` to deploy

## Projects

| Slug | Live URL |
|------|----------|
| cafirmops | https://cafirmops.in |
