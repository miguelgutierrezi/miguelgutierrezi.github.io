# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Context

Personal portfolio for Miguel Gutiérrez, built with Angular 22 (TypeScript + Sass) and deployed as a static site on Firebase Hosting. It's a one-page site in Spanish and English covering profile, projects, experience, courses, and contact. No custom backend.

## Stack

- Angular 22, RxJS 7, `@angular/build` application builder — **no Bootstrap** (CSS/JS removed; UI uses design tokens + Sass only)
- **Node.js >= 24.15** required for local install/build (see `.nvmrc`)
- Sass for styles with design tokens + **Geist Sans / Geist Mono** (`@fontsource/geist-*`); Firebase Hosting rewrites all routes to `index.html` (SPA)
- Build output: `dist/personal-presentation-miguel-gutierrez/browser` (Firebase `public`)
- `npm run build` uses **production** by default; do not put third-party minified bundles under `angular.json` `scripts` (historically Bootstrap JS caused sourcemap crash / exit 134)
- Structure: `src/app/models/`, `src/app/content/`, `src/app/services/` (content + preferences + Sanity adapter), `src/app/components/home/` (profile, projects, experience, courses), `src/app/components/shared/` (navbar, loading-spinner), `src/app/components/not-found/`, `src/app/components/project-detail/`, `studio/` (Sanity), `src/assets/`, `src/environments/`
- Content: `ContentService` / `ContentSource` → `SanityContentAdapter` (runtime CDN when `environment.cms.enabled` + `projectId`; on miss/failure → `LocalContentAdapter` + `content-validator.ts`). Never put CMS write tokens in the client. Slice 1: siteSettings, profile, project. Slice 2: experience, course, navigation (per-collection merge; empty → local). `ui` still local. Studio: `/studio` — see `studio/README.md`. Validator accepts `unknown`, returns a fresh normalized object, unique IDs, URL/`assets/`/`tel:`/`mailto:` checks. Preferences in `PreferencesService` (`localStorage`).
- **Phase 2 UI done**. **Phase 3 CMS** slice 1 + slice 2 schemas/adapter **and seed** done. **Phase 4 hardening:** `SeoService`, robots/sitemap, Firebase headers, `environment.siteUrl`. **Phase 5 quality gates done:** ESLint + Vitest + `npm run ci` in GitHub Actions. Product/architecture decisions in `docs/`.

## Commands

- `nvm use` then `npm install` / `npm start` — dev server at `http://localhost:4200/`
- `npm run lint` — ESLint (`angular-eslint`) on `src/**/*.ts` and `src/**/*.html`
- `npm test` — Vitest unit tests (`ng test --watch=false --coverage`); `npm run test:watch` for watch mode
- `npm run build` — production build
- `npm run ci` — **primary validation:** lint + test + production build
- `npm run watch` — development configuration with watch
- `npm run studio:install` then `npm run studio` — Sanity Studio local (`studio/`). Hosted: https://miguel-gutierrez-cv.sanity.studio/ (`cd studio && npm run deploy`)
- Deploy: `npm run build` then `npx firebase-tools deploy --only hosting` (or a global Firebase CLI)
- CI/CD: GitHub Actions (`.github/workflows/ci.yml`, `deploy.yml`, PR preview) run `npm run ci` before artifact/deploy. Secret: `FIREBASE_SERVICE_ACCOUNT`. CircleCI is removed.
- There is **no** e2e suite yet

## Product principles

- Keep the site static, inexpensive to operate, and free of a custom backend unless a real need appears.
- Angular is the long-term framework; modernize incrementally rather than rewriting.
- One main page with anchored sections (`/#projects`, `#about`, `#experience`, `#courses`), not tabs that replace the visible content. Contact lives in the footer (`#contact`) and is **not** a nav/burger item. Dedicated project case studies use `/projects/:id` (Figma `4:678` / `4:1170` / `4:1019` / `4:866`).
- Delivery order for larger work: stack ✓ → typed local content ✓ → UI Phase 2 ✓ → CMS slice 1+2 (adapter) ✓ → **hardening SEO/headers ✓** → admin go-live ✓ → seed editorial ✓ → **quality gates (ESLint + Vitest → CI) ✓**.

## Figma MCP (Phase 2)

- Project config: `.cursor/mcp.json` → remote server `https://mcp.figma.com/mcp`
- Connect via Cursor Settings → MCP → Connect (OAuth). Prefer frame links: in Figma, Copy link to selection for Desktop / Tablet L/P / Mobile, one prompt per breakpoint.
- See `.cursor/rules/figma-mcp-workflow.mdc`

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
- Editorial writes go through a **separate admin UI + authenticated write proxy** (not this static portfolio). Navbar **Login** only redirects via `environment.adminLoginUrl` (empty = hidden). Never put write tokens in the portfolio client.

## Persistence rules

- Persist only low-risk presentation preferences: selected language, active home section, dismiss-state of non-critical notices.
- Use `localStorage` (never `sessionStorage`) behind a small, testable service.
- Keep a versioned object with stable internal values, e.g. `{ "version": 1, "language": "en", "section": "projects" }` — translate labels only at render time.
- Validate on init and ignore invalid values; fall back to defaults when storage is missing, invalid, or unavailable. Storage failures must never break rendering.
- Never store portfolio content, credentials, personal data, or analytics identifiers in browser storage.

## UI, accessibility, and SEO

- Product goal: a clear, editorial, credible engineering portfolio — who Miguel is, what he builds, and how to contact him should be obvious within seconds.
- Page hierarchy: compact nav + language switch + **Login** (optional, redirects to external admin) + section anchors → profile hero → featured projects → experience, courses, contact/footer.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`. Real buttons/links, not clickable `div`s. Keyboard reachability and visible focus states.
- Descriptive `alt` text for meaningful images, empty `alt` for decorative ones. Don't rely on color alone; keep body text contrast readable.
- No horizontal scroll on common mobile sizes. Responsive grid with stable aspect ratios. Keep motion subtle and respect `prefers-reduced-motion`.
- Prefer local optimized assets (WebP/AVIF) for important images/logos over unstable remote URLs; lazy-load below-the-fold images.
- Add useful metadata when touching the page: title, description, canonical URL, Open Graph, and structured data (JSON-LD) where appropriate. Runtime updates go through `SeoService`; static fallbacks live in `src/index.html`. Canonical origin: `environment.siteUrl`.

## CMS strategy and security

- **Chosen:** Sanity + runtime CDN (`SanityContentAdapter`); local fallback always. Studio in `/studio`.
- Slice 1: `siteSettings`, `profile`, `project` (+ detail). Slice 2: `experience`, `course`, `navigation` (empty remote collections keep local). `ui` still local.
- Configure with `environment.cms` (`enabled`, `projectId`, `dataset`, `apiVersion`) and `environment.adminLoginUrl` (navbar Login → external admin). Never expose write tokens in the Angular client. Allow browser origins under Sanity Manage → API → CORS (`http://localhost:4200` + production hosts) or the client falls back to local content. Validate remote content before rendering.
- Sequence next: custom admin + proxy (see `docs/admin-app-brief.md`) → complete editorial data → optional `ui` in CMS.

## Modernization rules

- Upgrade Angular one major version at a time; `npm run ci` (lint + Vitest + production build) must succeed before moving to the next.
- Keep Node.js aligned with the Angular version being upgraded (today: Node >= 24.15 via `.nvmrc` with Angular 22).
- Update TypeScript, CLI, and tooling as required by each major.
- Remove obsolete/unused dependencies during modernization when no longer needed (jQuery, Popper, and Bootstrap CSS/JS are fully removed).
- After each major: `npm run ci` and a manual smoke test of the app; accessibility checks where applicable. Skip e2e (none yet). Quality gates do **not** include migrating the NgModule app to standalone / `inject()` / OnPush.
- Do not mix a major dependency upgrade with an unrelated visual redesign.
- Do not put third-party minified bundles in `angular.json` `scripts` unless they are proven safe with the application builder.
- Firebase Hosting remains the deploy target while the portfolio stays static. Do not rewrite to another framework; pursue SEO/performance gains via Angular upgrades, hosting, assets, and content architecture instead.

## Testing policy

- Unit tests are Vitest via `@angular/build:unit-test`. Specs: `content-validator`, `PreferencesService`, `sanity-mapper`, `portfolio.models`.
- Linter: `npm run lint` (`angular-eslint`). Do not enable `prefer-standalone` / `prefer-inject` / `prefer-on-push-component-change-detection` as part of routine work (NgModule app).
- Validate routine changes with `npm run ci` (lint + test + production build). For UI work, also smoke-check `npm start`.
- GitHub Actions runs `npm run ci` on PRs/push and before live/preview deploy.
- There is **no** e2e suite; do not add Playwright/Cypress unless the user asks.

## Agent documentation sync (mandatory)

**Hard rule for every agent (Cursor, Claude Code, Copilot, or any other) and every change:** in the **same** change set, keep these three surfaces aligned with the same meaning:

1. `CLAUDE.md`
2. `.github/copilot-instructions.md`
3. `.cursor/rules/*.mdc` (edit/add the matching rule; remove stale guidance)

A change that updates only application code or `docs/` without reviewing these three is incomplete. For tiny content/typo edits, still review all three; if none need edits, say so explicitly when finishing the task. Never update only one of the three and leave the others stale.

## Working style

- Before architectural changes, consult `docs/` (`architecture.md`, `improvement-plan.md`, `cms-strategy.md`, `ui-modernization.md`, `persistence-strategy.md`).
- Preserve the existing static hosting model unless the task explicitly changes it.
- Prefer precise, surgical changes that fit current codebase conventions over broad refactors.
- Validate with `npm run ci`; do not run e2e (none yet).
