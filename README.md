# Miguel Gutierrez Portfolio

Personal portfolio built with Angular and deployed as a static site through Firebase Hosting. It presents Miguel's profile, projects, professional experience, and courses in Spanish and English.

## Technology

- Angular 22
- TypeScript 6
- Sass
- Bootstrap 4 (CSS only; no jQuery/Bootstrap JS global scripts)
- Firebase Hosting
- Node.js >= 24.15 (required for local install/build; see `.nvmrc`)

## Local development

Use **Node.js 24+** (see `.nvmrc`). With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
npm install
npm start
```

Open `http://localhost:4200/`. The application reloads automatically when source files change.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server (development configuration) |
| `npm run build` | Production build — **primary validation** (`defaultConfiguration: production`) |
| `npm run watch` | Rebuild on change using the development configuration |
| `npm test` | Legacy unit-test script — **do not rely on it**; specs are incomplete/unreliable |
| `npm run test:web` | Legacy coverage viewer — skip unless rewriting the suite |

There is no `lint` or `e2e` script: the old Angular lint target and Protractor e2e target were removed with the toolchain upgrade.

Agents and contributors should validate changes with `npm run build` (and a manual check of `npm start` for UI work), not with the current test suite.

## Deployment

The project is configured for Firebase Hosting. The application builder writes to `dist/personal-presentation-miguel-gutierrez/browser` (configured in `firebase.json`).

### Manual

```bash
npm run build
npx firebase-tools deploy --only hosting
```

### GitHub Actions (replaces CircleCI)

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| `.github/workflows/ci.yml` | Push / PR to `master` | `npm ci` + `npm run build` (primary validation) |
| `.github/workflows/deploy.yml` | Push to `master` (and manual) | Build + deploy to Firebase **live** |
| `.github/workflows/firebase-hosting-pull-request.yml` | PR to `master` | Build + Firebase **preview** channel |

Required GitHub secret:

- `FIREBASE_SERVICE_ACCOUNT` — JSON of a Firebase/GCP service account with Hosting Admin (create via Firebase console or `firebase init hosting:github`)

Project ID: `miguel-angel-gutierrez-ibague`

The hosting configuration rewrites application routes to `index.html` so Angular routing works when a route is opened directly. CircleCI has been removed.

## Project structure

- `src/app/models/`: typed portfolio domain models.
- `src/app/content/`: local fallback portfolio content.
- `src/app/services/`: content loading and preferences (`localStorage`).
- `src/app/components/home/`: profile, projects, experience, courses, and home sections.
- `src/app/components/shared/`: reusable navigation and loading components.
- `src/assets/`: local static assets.
- `src/environments/`: environment-specific configuration.
- `docs/`: architecture and product improvement documentation.

## Improvement roadmap

The current application is intentionally static, but the next evolution is documented in [docs/improvement-plan.md](docs/improvement-plan.md). Delivery order:

1. Baseline and incremental modernization of Angular, TypeScript, Node.js, and build tooling (**done**: Angular 22 / Node 24; reproducible `npm run build` without global jQuery/Bootstrap JS scripts).
2. Moving portfolio content into a typed, reusable local content model, with language preferences in `localStorage` (**done**).
3. Modernizing the visual system, responsive layout, accessibility, and SEO.
4. Integrating a headless CMS so CV and portfolio content can be updated online without code changes, with a local fallback and no write credentials in the client.
5. Production hardening (CI, metadata, performance, and dependency health) — **CI migrated to GitHub Actions** (CircleCI removed); remaining: metadata/SEO/Lighthouse automation.
6. Keeping Angular as the long-term framework for the portfolio.

Supporting decisions are documented in:

- [Architecture direction](docs/architecture.md)
- [CMS strategy](docs/cms-strategy.md)
- [UI modernization](docs/ui-modernization.md)
- [Persistence strategy](docs/persistence-strategy.md)

## Agent guidance

**Mandatory for every agent and every change:** keep these three surfaces in sync in the same change set:

- [`CLAUDE.md`](CLAUDE.md)
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
- [`.cursor/rules/`](.cursor/rules/)

A change is incomplete if only code or `docs/` were updated without reviewing those three.

## Generated project history

This project was originally generated with Angular CLI. The Angular CLI remains useful for local development and build tasks; the improvement roadmap describes the changes needed to make the portfolio easier to maintain as its content grows.
