# Rishika Vishwakarma — Portfolio

A personal portfolio for Rishika Vishwakarma, an AI/ML Engineer and Python Developer. Built on the existing Next.js App Router codebase with TypeScript, Tailwind CSS v4, Framer Motion, and next-themes.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` — start the development server
- `npm run lint` — run ESLint
- `npm run build` — create a production build
- `npm run start` — serve the production build

## Project structure

- `src/app/` — App Router entry point, metadata, and global styles
- `src/components/sections/` — portfolio content sections
- `src/components/layout/` — navigation and footer
- `src/components/ui/` — reusable controls and icons
- `src/lib/config.ts` — personal details, social URLs, resume path, and project-link placeholders
- `src/lib/constants.ts` — skills, experience, project details, and navigation content
- `public/resume/RishikaVishwakarma.pdf` — resume download

## Updating portfolio content

Update contact details and social URLs in `src/lib/config.ts`. Replace each `TODO_ADD_GITHUB_URL` value with a verified project repository URL; optional demo URLs can also be added there. Placeholder values are not rendered as links.

The portfolio uses a mail link for contact and does not submit information to an external form service. The hero photo is configured in `src/lib/config.ts` and uses `public/images/rishika-formal.jpeg`.

No production hostname has been provided, so the old template sitemap was removed rather than publishing an incorrect URL. Add a sitemap and production metadata base after the deployment domain is confirmed.

## License and attribution

There is no separate license file in this repository. The personal information, resume, and assets should not be reused without permission.
