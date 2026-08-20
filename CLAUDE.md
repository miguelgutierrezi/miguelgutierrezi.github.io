# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Context

Personal portfolio for Miguel Gutiérrez, built with Angular 11 (TypeScript + Sass) and deployed as a static site on Firebase Hosting. It's a one-page site in Spanish and English covering profile, projects, experience, courses, and contact. No custom backend.

## Stack

- Angular 11, RxJS 6, Bootstrap 4, Karma/Jasmine, Protractor (e2e)
- Sass for styles; Firebase Hosting rewrites all routes to `index.html` (SPA)
- Structure: `src/app/components/home/` (profile, projects, experience, courses), `src/app/components/shared/` (navbar, loading-spinner), `src/app/components/not-found/`, `src/assets/`, `src/environments/`
- Product/architecture decisions live in `docs/` (`architecture.md`, `cms-strategy.md`, `ui-modernization.md`, `persistence-strategy.md`, `improvement-plan.md`) — consult before architectural changes

## Commands

- `npm start` — dev server at `http://localhost:4200/`
- `npm run build` — production build
- `npm test` — unit tests with coverage (`ng test --code-coverage --watch=false`)
- `npm run test:web` — tests + serve coverage report
- `npm run lint` — `ng lint`
- `npm run e2e` — Protractor e2e tests
- Deploy: `npm run build` then `firebase deploy --only hosting`

## Product principles

- Keep the site static, inexpensive to operate, and free of a custom backend unless a real need appears.
- Angular is the long-term framework; modernize incrementally rather than rewriting.
- One main page with anchored sections (`/#projects`, `#about`, `#experience`, `#courses`, `#contact`), not tabs that replace the visible content. Dedicated routes only for detail views (e.g. a single project/article).
- Delivery order for larger work: stack modernization → typed local content model → UI → CMS → hardening.

## Architecture rules

- Components render and handle interaction; they do not own large content datasets.
- Content flows through a typed content model and a `ContentService`/adapter boundary:
  ```ts
  interface ContentSource {
    loadPortfolio(): Observable<PortfolioContent>;
  }
  ```
  Local content is the first adapter; a CMS adapter is added later without touching section components. Services validate/normalize content before exposing it to the UI; if a remote fetch fails, fall back to local content and log the failure.
- Use stable IDs and localized fields per entity instead of parallel Spanish/English arrays (no `spanishProjects` / `englishProjects`).
- Target folders: `models/`, `content/`, `services/`, `components/`, `assets/`.
- Do not call CMS APIs directly from templates or individual section components.
- Do not introduce a custom backend or admin app unless a real need appears.

## Persistence rules

- Persist only low-risk presentation preferences: selected language, active home section, dismiss-state of non-critical notices.
- Use `localStorage` (never `sessionStorage`) behind a small, testable service.
- Keep a versioned object with stable internal values, e.g. `{ "version": 1, "language": "en", "section": "projects" }` — translate labels only at render time.
- Validate on init and ignore invalid values; fall back to defaults when storage is missing, invalid, or unavailable. Storage failures must never break rendering.
- Never store portfolio content, credentials, personal data, or analytics identifiers in browser storage.

## UI, accessibility, and SEO

- Product goal: a clear, editorial, credible engineering portfolio — who Miguel is, what he builds, and how to contact him should be obvious within seconds.
- Page hierarchy: compact nav + language switch + section anchors → profile hero (role, pitch, availability, CTA) → featured projects (outcome, stack, repo/demo, image) → experience, courses, contact/footer.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`. Real buttons/links, not clickable `div`s. Keyboard reachability and visible focus states.
- Descriptive `alt` text for meaningful images, empty `alt` for decorative ones. Don't rely on color alone; keep body text contrast readable.
- No horizontal scroll on common mobile sizes. Responsive grid with stable aspect ratios. Keep motion subtle and respect `prefers-reduced-motion`.
- Prefer local optimized assets (WebP/AVIF) for important images/logos over unstable remote URLs; lazy-load below-the-fold images.
- Add useful metadata when touching the page: title, description, canonical URL, Open Graph, and structured data (JSON-LD) where appropriate.

## CMS strategy and security

- The CMS is a product requirement (edit CV/portfolio online without code changes) but only after the local typed content model is stable — it's an editorial source, not a runtime foundation, and always needs a local fallback.
- Preferred: Sanity or Storyblok for real online editing; Decap only if Git-based editing is prioritized. Defer Firebase/Firestore unless dynamic data becomes necessary.
- Entities: `siteSettings`, `profile`, `project`, `experience`, `course`, `navigation` — localized fields, stable IDs, no duplicated ES/EN arrays.
- Never expose CMS write tokens in the Angular client bundle. Validate remote content before rendering. No authentication until the editorial flow requires it.
- Sequence: typed local model → migrate data → measure editing pain → prototype schema (profile/projects first) → preview + fallback → remaining sections.

## Modernization rules

- Upgrade Angular one major version at a time; build and tests must be green before moving to the next.
- Keep Node.js aligned with the Angular version being upgraded (document with `.nvmrc` or equivalent).
- Update TypeScript, CLI, and test tooling as required by each major.
- Remove obsolete/unused dependencies during modernization (e.g. jQuery) when no longer needed.
- After each major: run unit tests, production build, a smoke test, and accessibility checks where applicable.
- Do not mix a major dependency upgrade with an unrelated visual redesign.
- Firebase Hosting remains the deploy target while the portfolio stays static. Do not rewrite to another framework; pursue SEO/performance gains via Angular upgrades, hosting, assets, and content architecture instead.

## Working style

- Before architectural changes, consult `docs/` (`architecture.md`, `improvement-plan.md`, `cms-strategy.md`, `ui-modernization.md`, `persistence-strategy.md`).
- Preserve the existing static hosting model unless the task explicitly changes it.
- Prefer precise, surgical changes that fit current codebase conventions over broad refactors.
