# Miguel Gutierrez Portfolio

Personal portfolio built with Angular and deployed as a static site through Firebase Hosting. It presents Miguel's profile, projects, professional experience, and courses in Spanish and English.

## Technology

- Angular 11
- TypeScript
- Sass
- Firebase Hosting
- Node.js 16.x (required for local install/build; see `.nvmrc`)

## Local development

Use **Node.js 16** (see `.nvmrc`). Node 24+ is not compatible with Angular 11's toolchain. With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
npm install
npm start
```

Open `http://localhost:4200/`. The application reloads automatically when source files change.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the application (primary validation) |
| `npm run lint` | Run the Angular lint task |
| `npm test` | Legacy unit-test script — **do not rely on it**; specs are incomplete/unreliable |
| `npm run e2e` | Legacy Protractor script — **do not rely on it** |
| `npm run test:web` | Legacy coverage viewer — skip unless rewriting the suite |

Agents and contributors should validate changes with `npm run build` (and a manual check of `npm start` for UI work), not with the current test suite.

## Deployment

The project is configured for Firebase Hosting. Build the application and deploy the generated output using the Firebase CLI configured for this repository:

```bash
npm run build
firebase deploy --only hosting
```

The hosting configuration rewrites application routes to `index.html` so Angular routing works when a route is opened directly.

## Project structure

- `src/app/components/home/`: profile, projects, experience, courses, and home sections.
- `src/app/components/shared/`: reusable navigation and loading components.
- `src/assets/`: local static assets.
- `src/environments/`: environment-specific configuration.
- `docs/`: architecture and product improvement documentation.

## Improvement roadmap

The current application is intentionally static, but the next evolution is documented in [docs/improvement-plan.md](docs/improvement-plan.md). Delivery order:

1. Baseline and incremental modernization of Angular, TypeScript, Node.js, and build tooling.
2. Moving portfolio content into a typed, reusable local content model, with language preferences in `localStorage`.
3. Modernizing the visual system, responsive layout, accessibility, and SEO.
4. Integrating a headless CMS so CV and portfolio content can be updated online without code changes, with a local fallback and no write credentials in the client.
5. Production hardening (CI, metadata, performance, and dependency health).
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
