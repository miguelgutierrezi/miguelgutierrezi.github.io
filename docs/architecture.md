# Architecture Direction

## Principles

- Keep the portfolio statically deployable and inexpensive to operate.
- Separate content from presentation.
- Keep components responsible for rendering and interaction, not large content datasets.
- Prefer typed, validated data over duplicated object literals.
- Treat the CMS as the editorial source for day-to-day CV updates, while keeping a local content fallback so external services remain non-blocking at build and runtime.
- Keep Angular as the long-term application framework and upgrade it incrementally (currently Angular 22 on Node >= 24.15).
- Keep the main portfolio as one routed page with semantic sections and URL fragments.

## Target shape

```text
Content source (local JSON/TypeScript or CMS)
        |
        v
Content adapter and validation
        |
        v
Typed portfolio models
        |
        +--> Language and preference services
        |
        v
Presentational Angular components
        |
        v
Static hosting and CDN
```

## Suggested boundaries

- `models/`: interfaces and domain types.
- `content/`: local fallback content and translation data.
- `services/`: content loading, language selection, preferences, and analytics if added later.
- `components/`: page sections and reusable visual components.
- `assets/`: local fonts, icons, and important portfolio imagery.

The exact folders can follow the current project conventions; the important boundary is that components should consume a typed content model rather than own the complete portfolio database.

## Content loading

Use a `ContentService` with an adapter interface. The first adapter can read local content. A CMS adapter can be added later without changing profile, project, or experience components.

```ts
interface ContentSource {
  loadPortfolio(): Observable<PortfolioContent>;
}
```

The service should validate or normalize content before exposing it to the UI. If a remote CMS request fails, the local fallback should be used and the failure should be observable in logs or monitoring.

## Migration guidance

Do not mix CMS calls directly into templates or individual section components. Do not introduce a custom database or admin app when a hosted headless CMS already covers online CV editing. A static site plus a hosted CMS is the intended operating model for this portfolio.

## Stack modernization path

The application should remain on Angular while its dependencies are modernized. Upgrade one Angular major version at a time, use the migration recommendations for that version, and validate the build and tests before continuing. Keep the Node.js version aligned with the Angular version being upgraded.

Remove unused framework and UI dependencies during the modernization work, but avoid combining unrelated visual refactors with a major dependency jump. Do not bundle third-party minified JavaScript through `angular.json` `scripts` (jQuery/Bootstrap JS caused non-reproducible build crashes via sourcemap processing). Bootstrap CSS may remain until the UI redesign. Firebase Hosting remains an appropriate target because the portfolio does not require a long-running server.

Angular remains the long-term framework for this portfolio. Content-first rendering, SEO, and performance improvements should be addressed through Angular upgrades, better static hosting configuration, optimized assets, and the content architecture described above.

## Page and route structure

The primary route should render the complete portfolio one-pager. Section navigation should use stable fragment IDs, allowing links such as `/#projects` while keeping the page context intact. Dedicated Angular routes should be added only for deeper content, such as project details or articles, rather than for the main portfolio sections.
