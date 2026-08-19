# Adisoft Project Roadmap

A responsive executive roadmap dashboard for League of Fishers, Oh! My Sausage, Adisoft Store, and Adisoft Portal. Built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

Import the repository into Vercel and use the detected Next.js defaults, or run `npx vercel` from the project directory. The application has no backend, environment variables, or external service dependencies.

## Content model

All roadmap content lives in `data/projects.ts`; shared project types live in `types/project.ts`. Unknown dates or directions remain explicitly marked as TBC, After Validation, After UAT, or After Production Launch.
