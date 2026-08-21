# Admin app brief (handoff)

**Audience:** agents and developers starting `cv-admin-panel` (or any sibling admin repo) while reusing this portfolio’s architecture.

**How to use:** read this file first, then skim the linked docs. Produce the admin project’s own `docs/` (architecture, security, roadmap) **from this contract** — do not invent a second CMS or put write tokens in the public portfolio.

## Workspace context

Typical layout under `CV-Workspace/`:

| Path | Role |
| --- | --- |
| `miguelgutierrezi.github.io/` | Public Angular CV (this repo) — **read-only** Sanity CDN |
| `cv-admin-panel/` | Custom editorial UI + authenticated **write** path (separate app) |

Portfolio Login button redirects to `environment.adminLoginUrl` (prod: `https://cv-admin-panel.web.app`).

## Portfolio status (do not re-litigate)

Already done in the public site:

- Angular 22, typed `PortfolioContent`, local fallback + Sanity runtime adapter
- CMS schemas slice 1 + 2 in `/studio` (hosted: https://miguel-gutierrez-cv.sanity.studio/)
- SEO (`SeoService`, robots/sitemap), Firebase headers
- Navbar Login → external admin URL only

Still pending (often done **via** the admin):

- Finish seeding projects / experience / courses / navigation in Sanity
- Confirm Sanity CORS includes admin origins (`localhost:4300`, `cv-admin-panel.web.app`) + redeploy CV after `adminLoginUrl` change

## Non-negotiables

1. **Never** put Sanity write tokens in the portfolio client bundle.
2. Admin is a **separate deployable** (not a microfrontend inside the CV).
3. **Content types are code-defined** in Sanity schemas. The admin does **CRUD of documents**, not runtime schema creation.
4. Public site keeps **local fallback**; CMS outage must not empty the CV.
5. Prefer Angular for the admin UI (same stack as the portfolio) unless there is a strong reason not to.
6. Single-author auth is enough (e.g. Firebase Auth email/password or equivalent) + server-side proxy.

## System shape

```text
[Browser: Portfolio] --GET--> Sanity CDN (published)
[Browser: Admin UI]  --auth--> [Write proxy] --token--> Sanity Mutations API
                                      |
                                 secrets only here
```

Suggested proxy hosts: Firebase Cloud Functions / Cloud Run, or Cloudflare Worker. Portfolio stays on Firebase Hosting.

## Sanity project (shared)

| Key | Value |
| --- | --- |
| Project ID | `xm49cfca` |
| Dataset | `production` |
| API version (portfolio) | `2025-01-01` |
| Studio (schemas UI) | https://miguel-gutierrez-cv.sanity.studio/ |
| Schema source of truth | `miguelgutierrezi.github.io/studio/schemaTypes/` |

CORS: every browser origin that calls Sanity (portfolio **and** admin, if the admin reads CDN directly) must be listed in Sanity Manage → API → CORS.

## Content types the admin must support (MVP → later)

Align field names with schemas + `src/app/models/portfolio.models.ts`.

| Priority | Type | Notes |
| --- | --- | --- |
| MVP | Login / session | Required before any write |
| MVP | `siteSettings` | Singleton |
| MVP | `profile` | Singleton |
| MVP | `project` | List + form; **`detail` required** or portfolio mapper drops the doc |
| Next | `experience` | List + form; slug = stable id |
| Next | `course` | List + form; optional `credentialUrl` |
| Next | `navigation` | Singleton with `items[]` |
| Later | `ui` chrome labels | Still local in portfolio; migrate only if needed |

Localized fields are always `{ es, en }` (or localized string lists). Stable ids = Sanity `slug.current`.

Reference seed copy: `studio/seed/slice1-documents.md`, `studio/seed/slice2-documents.md`.

## Portfolio integration checklist (when admin ships)

1. Deploy admin (e.g. `https://….web.app`).
2. Set `environment.prod.ts` → `adminLoginUrl`.
3. Add admin origin (+ portfolio Firebase URL) to Sanity CORS.
4. Smoke: Login from CV → admin; edit project title → publish → CV shows change via CDN.
5. Keep Studio deploy optional (`cd studio && npm run deploy`) for schema changes only.

## Suggested delivery phases for the admin repo

1. **Docs bootstrap** — copy/adapt this brief into `docs/` (architecture, security, roadmap).
2. **Scaffold** — Angular app + env (`sanityProjectId`, `dataset`, proxy URL); no write token in client.
3. **Auth** — single-user login gate.
4. **Proxy** — authenticated endpoint(s) that call Sanity mutations / patches with a server token.
5. **MVP screens** — site, profile, projects (with detail).
6. **Slice 2 screens** — experience, courses, navigation.
7. **Polish** — validation mirroring portfolio rules, image URL helpers, deploy + CORS.

## Docs to read in this portfolio repo

| Doc | Why |
| --- | --- |
| [cms-strategy.md](./cms-strategy.md) | CMS decision, security, sequence |
| [architecture.md](./architecture.md) | Content/presentation split, adapters |
| [improvement-plan.md](./improvement-plan.md) | Phase status |
| [persistence-strategy.md](./persistence-strategy.md) | What **not** to store in browser storage |
| `../studio/README.md` | Studio setup + hosted URL |
| `../CLAUDE.md` + `.cursor/rules/cms-security.mdc` | Agent constraints |

## Out of scope for v1 admin

- Creating/editing Sanity **schemas** from the UI
- Multi-tenant / multi-author workflows
- Replacing the public Angular CV
- Microfrontends / Module Federation with the portfolio

## Prompt starter (for an agent in `cv-admin-panel`)

> Read `../miguelgutierrezi.github.io/docs/admin-app-brief.md` and the linked CMS/architecture docs. Create the initial documentation set for this admin app (architecture, security, roadmap) that implements that contract: separate Angular admin, authenticated write proxy to Sanity project `xm49cfca`, document CRUD only for existing schemas, no write tokens in the client. Do not redesign the public portfolio.
