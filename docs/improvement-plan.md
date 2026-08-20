# Portfolio Improvement Plan

## Purpose

This document defines the roadmap for evolving the portfolio from a static Angular presentation into a maintainable, content-driven personal site. The priorities are a reliable toolchain, a typed content model, visual quality, online editorial updates without code changes, accessibility, and low operational overhead.

## Current baseline

- Angular 11 single-page application.
- Firebase Hosting deployment with an SPA rewrite to `index.html`.
- Portfolio content hard-coded in components.
- Spanish and English content maintained manually in parallel structures.
- Language and selected section are read from `sessionStorage`, but changes are not persisted.
- Remote image and technology-logo URLs are embedded directly in the source.

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

### Phase 0: Baseline and stack modernization

Unlock a maintainable toolchain before larger product work.

- Capture the current production behavior and responsive screenshots.
- Record current build and test results; remove debug logging and document deployment prerequisites.
- Establish a supported Node.js version for the current Angular release and document it with an `.nvmrc` or equivalent.
- Upgrade Angular incrementally, one major version at a time, keeping the application buildable after each step.
- Upgrade TypeScript, Angular CLI, Webpack-related tooling, and test dependencies as required by each Angular version.
- Replace deprecated APIs and remove obsolete dependencies that are not needed by the redesigned UI, including jQuery-related packages where possible.
- Keep Firebase Hosting as the deployment target while the application remains a static portfolio.
- After every major upgrade: run a production build and a manual smoke test of the app. Do **not** gate progress on the legacy Karma/Protractor suites until they are rewritten.

The current build already shows that Angular 11 and its legacy Webpack/PostCSS toolchain are not compatible with the workspace's Node 24 runtime. Local development is pinned to **Node.js 16.x** via `.nvmrc` as an interim bridge until Angular majors are upgraded. Node 14 cannot be compiled on newer macOS toolchains; use the Node 16 binary from nvm.

### Phase 1: Content architecture

Create one typed content layer that both the UI and a future CMS can share. This replaces the earlier split between “baseline content model” and “content architecture.”

- Create typed models for profile, projects, experience, courses, links, technologies, and translations.
- Move all hard-coded portfolio data into a versioned local content layer.
- Remove duplicated Spanish/English arrays in favor of localized fields and stable IDs.
- Add a language service with a single source of truth and `localStorage` persistence.
- Add validation for required fields and external URLs.
- Expose content to components only through a `ContentService` / adapter interface.

### Phase 2: UI modernization

- Establish a small design system for typography, color, spacing, buttons, cards, and responsive breakpoints.
- Redesign the first viewport around a clear profile summary, primary call to action, and selected work.
- Keep the main portfolio as a single one-page experience with anchored sections instead of replacing the page content with tabs.
- Use section navigation for About, Projects, Experience, Courses, and Contact, with the active section reflected in the URL and navigation state.
- Improve project cards with outcomes, technology labels, repository/demo links, and consistent imagery.
- Add keyboard navigation, visible focus states, semantic landmarks, alt text, and contrast checks.
- Optimize remote assets or move important assets into `src/assets`.

### Phase 3: CMS integration (product requirement)

A headless CMS is intentional product scope: update CV and portfolio content online without code changes or a developer deploy for each edit. It is not optional “nice to have,” but it still must sit on top of the typed local model from Phase 1.

- Choose the CMS using [CMS strategy](cms-strategy.md) after the local content model is stable.
- Prefer a hosted CMS with a free or low-cost personal tier, structured localized fields, and a read-only public API (or trusted build-time fetch).
- Keep a local content fallback so the site can still build and render when the CMS is unavailable.
- Add a preview workflow before publishing content changes.
- Never expose CMS write credentials in the Angular client bundle.

### Phase 4: Production hardening

- Add automated build, test, link, accessibility, and Lighthouse checks in CI.
- Add metadata, Open Graph tags, sitemap, robots rules, structured data, and a custom 404 experience.
- Review caching, image formats, security headers, and dependency health.

## Delivery order (summary)

1. Baseline + stack modernization  
2. Typed local content model and preference persistence  
3. UI modernization on that model  
4. CMS for online CV/portfolio edits, with local fallback  
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
