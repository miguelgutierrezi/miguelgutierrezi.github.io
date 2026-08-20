# Miguel Gutierrez Portfolio

Personal portfolio built with Angular and deployed as a static site through Firebase Hosting. It presents Miguel's profile, projects, professional experience, and courses in Spanish and English.

## Technology

- Angular 11
- TypeScript
- Sass
- Firebase Hosting
- Karma/Jasmine unit tests

## Local development

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The application reloads automatically when source files change.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the application |
| `npm test` | Run unit tests with coverage |
| `npm run lint` | Run the Angular lint task |
| `npm run e2e` | Run end-to-end tests |
| `npm run test:web` | Run tests and serve the coverage report |

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

## Generated project history

This project was originally generated with Angular CLI. The Angular CLI remains useful for local development and build tasks; the improvement roadmap describes the changes needed to make the portfolio easier to maintain as its content grows.
