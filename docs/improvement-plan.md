# Portfolio Improvement Plan

## Purpose

This document defines the roadmap for evolving the portfolio from a static Angular presentation into a maintainable, content-driven personal site. The priorities are a reliable toolchain, a typed content model, visual quality, online editorial updates without code changes, accessibility, and low operational overhead.

## Current baseline

- Angular 22 single-page application (upgraded from Angular 11), application builder, TypeScript 6.
- Node.js >= 24.15 documented in `.nvmrc` / `engines`.
- Firebase Hosting deployment with an SPA rewrite to `index.html`; public dir `dist/.../browser`.
- CI/CD: **GitHub Actions** (`.github/workflows/`) — build on PR/push; deploy live on `master`; preview channels on PRs. CircleCI removed.
- Required secret: `FIREBASE_SERVICE_ACCOUNT`.
- Portfolio content lives in a typed local content layer (`src/app/content/`) consumed via `ContentService`; components no longer own ES/EN datasets.
- Language and section preferences persist in `localStorage` via `PreferencesService` (legacy `sessionStorage` values are migrated once).
- Remote image and technology-logo URLs remain embedded in content data (asset localization is Phase 2).
- Bootstrap 4 CSS remains for layout utilities; jQuery and Bootstrap JS were removed from the build pipeline.

## Goals

1. Keep the application buildable on a supported Node.js and Angular toolchain.
2. Make portfolio and CV content editable without changing Angular components or redeploying for every text change.
3. Modernize the UI for fast scanning, responsive behavior, accessibility, and stronger visual hierarchy.
4. Provide reliable language and preference persistence where it improves the user experience.
5. Improve performance, SEO, testing, and deployment confidence.
6. Keep the operating model simple enough for a personal portfolio.

## Non-goals

- Building a multi-user publishing platform.
- Adding authentication before a real multi-author or private-draft need appears.
- Introducing a custom backend solely to store a few portfolio fields.
- Rewriting the application framework before the content and UX problems are addressed.
- Treating the CMS as the only source of truth with no local fallback.

## Recommended delivery phases

### Phase 0: Baseline and stack modernization — **done**

Unlocked a maintainable, reproducible toolchain before larger product work.

- Documented Node via `.nvmrc` / `engines` (**Node >= 24.15** with Angular 22).
- Upgraded Angular incrementally from 11 → 22; migrated to the application builder.
- Firebase `public` points at `dist/.../browser`.
- Removed obsolete packages and targets: tslint, codelyzer, protractor/`e2e`, Angular `lint` script/target, in-repo `firebase-tools`, jQuery, Popper, and Bootstrap **JS** global scripts (kept Bootstrap CSS only).
- Navbar collapse is handled in Angular (no Bootstrap JS / jQuery).
- `npm run build` defaults to **production** (`defaultConfiguration: production`). Development builds use `ng serve` / `npm run watch` / `--configuration development` and no longer process third-party minified JS sourcemaps via `scripts`.
- Do not treat legacy unit tests as a gate.

Primary validation for Phase 0 closure: a clean, reproducible `npm run build` (exit 0) on Node 24.

Next focus: Phase 1 (typed local content model).

### Phase 1: Content architecture — **done**

Typed content layer shared by the UI and a future CMS.

- Typed models in `src/app/models/portfolio.models.ts` (`PortfolioContent`, profile, project, experience, course, navigation, `UiCopy`, preferences).
- Local content in `src/app/content/portfolio.content.ts` with localized fields and stable IDs (no parallel ES/EN arrays).
- Validation in `src/app/content/content-validator.ts`: accepts `unknown`, returns a **new** normalized `PortfolioContent` (never mutates the source), enforces unique IDs per collection, records an issue for every rejected entry (including invalid `sortOrder`), and validates external URLs with `new URL()` plus separate `assets/` local paths.
- `ContentSource` + `LocalContentAdapter` + `ContentService` so components consume content instead of owning datasets.
- `PreferencesService` with versioned `localStorage` (`language`, `section`) and one-time migration from legacy `sessionStorage`.
- Section titles and chrome labels live in `PortfolioContent.ui` (not hard-coded in templates).

Next product focus: Phase 2 (UI modernization) on this model.

### Phase 2: UI modernization — **one-pager breakpoints done**

- Desktop, tablet landscape (`max-width: 1279px`), tablet portrait (`max-width: 1023px`), and mobile (`max-width: 767px` / Figma `cv-mobile`) implemented from Figma.
- Mobile: hamburger + fullscreen overlay (Figma `mobile-burger-menu-open` `4:12`, accent `#00F2FE`, slide-in/`translateX`), stacked hero (circular photo), experience as cards, projects carousel 1 card/page with swipe animation, centered footer.
- Anchored sections `#about`, `#experience`, `#projects`, `#courses`. Footer holds contact (`#contact`) but is not listed in nav/burger.
- **Project detail** (`/projects/:id`) implemented for desktop + tablet L/P + mobile (Figma `4:678` / `4:1170` / `4:1019` / `4:866`) with typed `Project.detail` for all projects. Pending: broader a11y/SEO polish and localizing remote assets.

### Phase 3: CMS integration (product requirement) — **slice 1 scaffolded**

- **Decision:** Sanity + **runtime** CDN (`SanityContentAdapter`) with local fallback after `validatePortfolioContent`.
- Studio in [`studio/`](../studio/) — schemas `siteSettings`, `profile`, `project`. Toggle via `environment.cms` (`enabled`, `projectId`, `dataset`, `apiVersion`). Never put write tokens in the Angular client.
- Slice 1: site + profile + projects (incl. detail). Experience, courses, navigation, and `ui` remain local until slice 2.
- Setup: [`studio/README.md`](../studio/README.md). Strategy: [CMS strategy](cms-strategy.md).

### Phase 4: Production hardening — **partially started**

- **Done:** replace CircleCI with GitHub Actions (`ci.yml`, `deploy.yml`, PR preview). Gate on `npm run build` only (no legacy unit/e2e).
- Pending: metadata, Open Graph tags, sitemap, robots rules, and structured data. **404 all breakpoints** (`/not-found`, Figma `21:4` / `23:80` / `23:5` / `21:89`) implemented.
- Pending: broader automated link/accessibility/Lighthouse checks in CI.
- Review caching, image formats, security headers, and dependency health.

## Delivery order (summary)

1. Baseline + stack modernization — **done** (Angular 22 / Node 24)
2. Typed local content model and preference persistence — **done**
3. UI modernization on that model — **done**
4. CMS for online CV/portfolio edits, with local fallback — **slice 1 (Sanity runtime) scaffolded**
5. Production hardening

Angular remains the long-term application framework; upgrade it incrementally rather than rewriting the site.

## Information architecture decision

The primary experience will remain a one-page portfolio. The navigation will move the user between semantic sections such as About, Projects, Experience, Courses, and Contact. This keeps the main story easy to scan while improving shareable URLs, SEO, accessibility, and browser history compared with swapping section content through `*ngIf` tabs.

Separate routes should be reserved for content that needs its own depth or discoverability, such as project detail pages, technical articles, or a blog. The first implementation should use stable section IDs and URL fragments such as `/#projects`.

## Success criteria

- A project or CV entry can be added or edited in the CMS without changing a component template or shipping a code change for that edit alone.
- Switching language survives a browser refresh.
- The home page works on mobile, tablet, and desktop without horizontal scrolling.
- Content is navigable by keyboard and readable by assistive technology.
- Production builds are reproducible; CI and a rewritten test suite are future hardening work (current unit/e2e specs are not a reliable gate).
- CMS downtime does not produce an empty portfolio.

## Decision gates

- Choose the CMS after Phase 1, using the criteria in [CMS strategy](cms-strategy.md). Prefer a hosted editorial experience when the goal is online CV updates without Git or code changes.
- Add a custom backend or multi-user authentication only if analytics or a shared editorial workflow proves it necessary.
