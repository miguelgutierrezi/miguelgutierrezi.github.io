# CMS Strategy

## Product requirement

A headless CMS is required so Miguel can update CV and portfolio content online without changing Angular code or deploying for every text or media edit. That editorial workflow is a first-class product goal, not an optional experiment.

The CMS is still **not** the runtime foundation of the site. The application should fetch or build from structured content and retain a local fallback so outages never produce an empty portfolio.

## Recommendation

**Chosen for this portfolio:** **Sanity** with **runtime** read via the Sanity CDN (`*.apicdn.sanity.io`), validated through `validatePortfolioContent`, and merged over the typed local fallback **per collection**. Schema definitions live in `/studio` (slice 1: site/profile/project; slice 2: experience/course/navigation). Day-to-day editing targets a **custom admin UI** (separate app) with an authenticated write proxy — not Sanity Studio as the primary UI. The public portfolio navbar **Login** only redirects via `environment.adminLoginUrl`. `ui` chrome labels remain local for now.

Prefer a **hosted** headless CMS with a clear editorial UI when the goal is “edit online without touching the repo.” Sanity and Storyblok both fit; Decap remains an alternative when Git-based editing is preferred.

**Build-time fetch** is a valid alternative if zero client dependency on Sanity is required; it needs a publish webhook → CI redeploy and is deferred unless that constraint appears.

## Options

| Option | Strengths | Tradeoffs | Fit |
| --- | --- | --- | --- |
| Sanity | Flexible schemas, strong developer tooling, localization | Requires setup for preview and hosting | Best general fit for online edits |
| Storyblok | Friendly visual editor and component-oriented content | Pricing and platform dependency should be checked | Best editor experience |
| Decap CMS | Git-based, transparent, no separate content database | Less polished media workflow; edits still tied to Git | Use only if Git-first editing is preferred |
| Firebase/Firestore | Already related to the deployment ecosystem | Adds runtime data, security rules, and a custom admin surface | Defer unless dynamic data is needed |

## Content model

The CMS should model content around these entities:

- `siteSettings`: name, title, summary, social links, SEO defaults.
- `profile`: localized introduction, skills, availability, profile image.
- `project`: localized title and description, technologies, repository URL, demo URL, image, featured flag, sort order.
- `experience`: company, role, dates, localized summary, responsibilities, technologies.
- `course`: institution, title, date, credential URL, localized description.
- `navigation`: localized labels and ordering.

Prefer localized fields over separate `spanishProjects` and `englishProjects` arrays. Stable IDs should identify content independently from its translated text.

## Security and reliability

- Never expose CMS write tokens in the Angular portfolio bundle.
- Use a public read-only API or fetch content during a trusted build step.
- Allow each browser origin in Sanity Manage → API → CORS (e.g. `http://localhost:4200` and Firebase Hosting). A missing origin yields 403 and local fallback.
- Validate remote content before rendering it.
- Keep a local fallback for outages, malformed entries, or an unavailable preview environment.
- Writes go through a separate admin app + authenticated proxy. Portfolio Login is a redirect only (`environment.adminLoginUrl`).

## Adoption sequence

1. Define and implement the typed local content model. ✓
2. Migrate current portfolio data into that model. ✓
3. Confirm the fields needed for day-to-day CV and project updates. ✓
4. Prototype CMS schemas (slice 1 + slice 2). ✓
5. Add preview, read path, and local fallback behavior. ✓ (runtime CDN + per-collection merge)
6. Complete editorial data via custom admin; optionally migrate `ui` chrome labels last.

**Admin handoff:** when starting the sibling admin repo, use [admin-app-brief.md](./admin-app-brief.md) as the source contract.
