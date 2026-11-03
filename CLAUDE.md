# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on port 8080 (host "::")
npm run build      # production build -> dist/
npm run build:dev  # build in development mode
npm run lint       # eslint .
npm run preview
```

There is no test suite. Both `package-lock.json` and `pnpm-lock.yaml` exist; npm is what the README uses.

## Architecture

Single-page personal portfolio (Spanish-language content) built with Vite + React 18 + TypeScript (SWC), Tailwind CSS 3 and shadcn/ui. Path alias `@/` → `src/`. TypeScript is loose (`strictNullChecks` and `noImplicitAny` off).

- `src/App.tsx` sets up React Query, tooltip/toast providers and React Router with only `/` (`pages/Index.tsx`) and a `*` → `NotFound` route.
- `pages/Index.tsx` is just a vertical composition of section components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`) between `Navbar` and `Footer`, plus `ScrollToTop`. Each section is a self-contained component in `src/components/`; content is hardcoded in the components, not loaded from data files.
- `Reveal.tsx` is the shared scroll-reveal wrapper used by sections for entrance animations.
- Contact: `ContactForm.tsx` uses `@formspree/react` (`useForm`) and takes a `formspreeKey` prop; `ContactSection.tsx` renders it with the real form id(s). `src/components/freelance/` (Services, Pricing, its own ContactForm) is currently not imported anywhere.
- `src/components/ui/` is shadcn/ui generated code (config in `components.json`); `lib/utils.ts` provides `cn`. Prefer adding components via the shadcn CLI rather than hand-writing them.
- `public/projects/` holds project screenshots referenced by `ProjectsSection`.

## Theming

Dark-first design with an orange accent. All colors are HSL CSS variables in `src/index.css` (`:root` and `.dark` define the same palette) consumed through `tailwind.config.ts`; change the theme there rather than hardcoding colors in components. Inter is loaded via Google Fonts `@import` in `index.css`.

## Repo notes

Untracked tooling/artifacts at the repo root (`.agents/`, `.taste-skill/`, `.playwright-mcp/`, `skills-lock.json`, and many `*.png` design-iteration screenshots) are not part of the app.
