# Copilot instructions

## Context

This repo is a personal portfolio built with Angular 22, TypeScript, Sass, and Firebase Hosting. It is a static one-page site in Spanish and English with sections for profile, projects, experience, courses, and contact.

Local toolchain: **Node.js >= 24.15** (see `.nvmrc`). Builders are `@angular/build:*` (application, dev-server, unit-test). `npm run build` uses **production** by default; deploy from `dist/personal-presentation-miguel-gutierrez/browser`. CI is **GitHub Actions** (not CircleCI) and runs `npm run ci` (lint + Vitest + production build) plus Lighthouse a11y (`npm run lighthouse`, `lighthouserc.cjs`) on PRs. Live/preview deploys need secret `FIREBASE_SERVICE_ACCOUNT`. **No Bootstrap** (removed; styles are tokens + Sass only). Do not add third-party minified JS under `angular.json` `scripts`. UI uses design tokens + Geist fonts; the home page is a **one-pager with section anchors** (not tab-swapped content). There is no e2e suite.

## Product principles

- Keep the site static, inexpensive to operate, and easy to deploy.
- Keep Angular as the long-term framework and modernize it incrementally.
- Keep the main experience as one page with anchored sections (`#about`, `#experience`, `#projects`, `#courses`), not tabs that replace the visible content. Contact stays in the footer only (not in nav/burger). Project case studies use `/projects/:id` (Figma `4:678` / `4:1170` / `4:1019` / `4:866`).
- Separate content from presentation.
- Prefer typed, validated data over duplicated object literals.
- Treat the CMS as the editorial source for day-to-day CV updates, but always keep a local fallback.
- Never expose CMS write tokens in the Angular client.

## Architecture rules

- Components should render and handle interaction, not own large content datasets.
- Content should flow through typed models in `src/app/models/`, local data in `src/app/content/`, and `ContentService` / `ContentSource`. Provider: `SanityContentAdapter` (runtime CDN when `environment.cms.enabled`; else / on failure → `LocalContentAdapter`). Validate with `validatePortfolioContent(unknown)` (new object, never mutates source). Studio schemas in `/studio` (hosted: https://miguel-gutierrez-cv.sanity.studio/). CMS slices: site/profile/projects + experience/courses/navigation (per-collection merge; empty → local). `ui` still local. Social URLs may be `http(s)`, `tel:`, or `mailto:`.
- Preferences (`language`, `section`) go through `PreferencesService` and `localStorage`, not ad-hoc `sessionStorage` in components.
- Use stable IDs and localized fields instead of separate Spanish and English arrays.
- Do not call CMS APIs directly from templates or individual section components.
- Custom admin is a **separate app** with an authenticated write proxy. Portfolio navbar Login only redirects via `environment.adminLoginUrl` (omit/empty to hide). Never put write tokens in this client. Add Sanity **CORS origins** for `http://localhost:4200` and production hosts or the CDN returns 403 and the adapter falls back to local.

## Persistence rules

- Persist only low-risk preferences such as language and the active home section.
- Use `localStorage`, not `sessionStorage`, behind a small service.
- Keep preference keys stable and versioned.
- Fall back to defaults when storage is missing, invalid, or unavailable.
- Never store portfolio content, credentials, or personal data in browser storage.

## UI, accessibility, and SEO

- Aim for a clear, editorial, credible portfolio that communicates who Miguel is and what he builds within seconds.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`.
- Ensure keyboard reachability, visible focus states, and real buttons or links.
- Use descriptive `alt` text for meaningful images and empty `alt` for decorative images.
- Avoid horizontal scrolling on common mobile sizes.
- Prefer local optimized assets for important images and logos.
- Keep motion subtle and respect `prefers-reduced-motion`.
- Add useful metadata when working on the page: title, description, canonical URL, Open Graph, and structured data where appropriate (`SeoService` + `src/index.html` fallbacks; `environment.siteUrl`).

## Modernization rules

- Upgrade Angular one major version at a time.
- Keep Node.js aligned with the Angular version being upgraded (today: Node >= 24.15 with Angular 22).
- Update TypeScript, CLI, and tooling as required by each Angular major.
- Remove obsolete dependencies during modernization when they are no longer needed.
- Gate each major on a successful `npm run ci` (lint + Vitest + production build) and a manual smoke check. Skip e2e (none yet). Do not migrate the NgModule app to standalone / `inject()` / OnPush as part of a quality-gate or upgrade task.
- Do not mix a major dependency upgrade with an unrelated visual redesign.

## Testing policy

- Unit tests are Vitest via `@angular/build:unit-test`. Specs: `content-validator`, `PreferencesService`, `sanity-mapper`, `portfolio.models`.
- Linter: `npm run lint` (`angular-eslint`). Keep `prefer-standalone` / `prefer-inject` / `prefer-on-push-component-change-detection` off (NgModule app).
- Validate routine changes with `npm run ci` (lint + test + production build). For UI work, also smoke-check `npm start`. After UI/a11y-sensitive changes, run `npm run build && npm run lighthouse` when practical.
- GitHub Actions runs `npm run ci` on PRs/push and before live/preview deploy; `ci.yml` also runs Lighthouse (`categories:accessibility` ≥ 0.9 on home, project detail, 404).
- There is **no** e2e suite; do not add Playwright/Cypress unless the user asks.

## Agent documentation sync (mandatory)

**Hard rule for every agent (Cursor, Claude Code, Copilot, or any other) and every change:** in the **same** change set, keep these three surfaces aligned with the same meaning:

1. `CLAUDE.md`
2. `.github/copilot-instructions.md`
3. `.cursor/rules/*.mdc`

A change that updates only application code or `docs/` without reviewing these three is incomplete. For tiny content/typo edits, still review all three; if none need edits, say so explicitly when finishing the task. Never update only one of the three and leave the others stale.

## Working style

- Before architectural changes, consult the docs in `docs/` (including `admin-app-brief.md` when working on the sibling admin app).
- Preserve the existing static hosting model unless the task explicitly changes it.
- Prefer precise, surgical changes that fit the current codebase conventions.
- Keep the implementation aligned with the documented delivery order: stack done → typed local content model done → UI Phase 2 done → CMS Sanity runtime slice 1+2 (adapter) → hardening SEO/headers done → admin go-live done → seed done → quality gates (ESLint + Vitest → CI) done.

## Figma

- MCP: `.cursor/mcp.json` with `https://mcp.figma.com/mcp`. Authenticate in Cursor Settings → MCP. Pass Figma frame links (Copy link to selection) for each breakpoint. Mobile open menu: node `4:12`.
