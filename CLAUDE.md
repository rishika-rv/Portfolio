# Rishika Vishwakarma — Portfolio

## Project Overview
Next.js portfolio website for an AI/ML and Full-Stack Engineer.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-based config, no tailwind.config)
- Framer Motion
- next-themes (dark/light mode)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build

## Architecture
- `src/app/` — Next.js App Router pages
- `src/components/sections/` — page sections (Hero, About, Skills, etc.)
- `src/components/ui/` — reusable UI components
- `src/components/layout/` — Navbar, Footer
- `src/components/providers/` — ThemeProvider
- `src/hooks/` — custom React hooks
- `src/lib/` — constants, utilities, **central config**

## Central Configuration
Personal info, social URLs, photo path, resume path, and project-link placeholders are in `src/lib/config.ts`.
Edit that file to update shared profile details.

## Theme
- Light: #F8FAFC bg, #111827 text, #4338CA accent
- Dark: #0B1020 bg, #F3F4F6 text, #A5B4FC accent

## Notes
- GitHub/LinkedIn icons are custom SVGs in `src/components/ui/Icons.tsx` (lucide-react removed them)
- Animated sections use `"use client"` for Framer Motion
- Command palette: Ctrl+K
- Contact is via email link with a copy-email option; no external form service is used
- Profile image: `public/images/rishika-formal.jpeg`
- Resume: `public/resume/RishikaVishwakarma.pdf`
