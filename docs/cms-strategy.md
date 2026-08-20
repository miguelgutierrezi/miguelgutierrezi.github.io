# CMS Strategy

## Product requirement

A headless CMS is required so Miguel can update CV and portfolio content online without changing Angular code or deploying for every text or media edit. That editorial workflow is a first-class product goal, not an optional experiment.

The CMS is still **not** the runtime foundation of the site. The application should fetch or build from structured content and retain a local fallback so outages never produce an empty portfolio.

## Recommendation

Prefer a **hosted** headless CMS with a clear editorial UI when the goal is “edit online without touching the repo.” The preferred first evaluation is **Sanity** or **Storyblok**. Both support structured content, media management, localized fields, previews, and a public read path.

**Decap CMS** remains a strong alternative when keeping content in Git matters more than a fully hosted editor. It still avoids hard-coding content in components, but edits typically flow through Git commits rather than a pure online CV workflow—so it is a weaker fit for the stated product goal.

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

- Never expose CMS write tokens in the Angular bundle.
- Use a public read-only API or fetch content during a trusted build step.
- Validate remote content before rendering it.
- Keep a local fallback for outages, malformed entries, or an unavailable preview environment.
- Do not add multi-user authentication until an editorial workflow actually needs multiple authors or private drafts. A single-author CMS login in the vendor studio is expected and fine.

## Adoption sequence

1. Define and implement the typed local content model.
2. Migrate current portfolio data into that model.
3. Confirm the fields needed for day-to-day CV and project updates.
4. Prototype one CMS schema with profile, experience, and projects.
5. Add preview, read path, and local fallback behavior.
6. Migrate the remaining sections and remove duplicated component data.
