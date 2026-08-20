# Copilot instructions

## Context

This repo is a personal portfolio built with Angular 11, TypeScript, Sass, and Firebase Hosting. It is a static one-page site in Spanish and English with sections for profile, projects, experience, courses, and contact.

## Product principles

- Keep the site static, inexpensive to operate, and easy to deploy.
- Keep Angular as the long-term framework and modernize it incrementally.
- Keep the main experience as one page with anchored sections, not tabs that replace the visible content.
- Separate content from presentation.
- Prefer typed, validated data over duplicated object literals.
- Treat the CMS as the editorial source for day-to-day CV updates, but always keep a local fallback.
- Never expose CMS write tokens in the Angular client.

## Architecture rules

- Components should render and handle interaction, not own large content datasets.
- Content should flow through a typed content model and a `ContentService`/adapter boundary.
- Use stable IDs and localized fields instead of separate Spanish and English arrays.
- Do not call CMS APIs directly from templates or individual section components.
- Do not introduce a custom backend or admin app unless a real need appears.

## Persistence rules

- Persist only low-risk preferences such as language and the active home section.
- Use `localStorage`, not `sessionStorage`, behind a small testable service.
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
- Add useful metadata when working on the page: title, description, canonical URL, Open Graph, and structured data where appropriate.

## Modernization rules

- Upgrade Angular one major version at a time.
- Keep Node.js aligned with the Angular version being upgraded.
- Update TypeScript, CLI, and test tooling as required by each Angular major.
- Remove obsolete dependencies during modernization when they are no longer needed.
- Validate build and tests before moving to the next major.
- Do not mix a major dependency upgrade with an unrelated visual redesign.

## Working style

- Before architectural changes, consult the docs in `docs/`.
- Preserve the existing static hosting model unless the task explicitly changes it.
- Prefer precise, surgical changes that fit the current codebase conventions.
- Keep the implementation aligned with the documented delivery order: stack -> typed local content model -> UI -> CMS -> hardening.
