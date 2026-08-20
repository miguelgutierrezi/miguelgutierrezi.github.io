# UI Modernization

## Product direction

The site should feel like a focused engineering portfolio: clear, editorial, and credible. It should help a recruiter, collaborator, or technical lead understand who Miguel is, what he builds, and how to inspect the work within a few seconds.

## Proposed information hierarchy

1. Compact navigation with language control and direct section links.
2. Profile hero with role, short value proposition, location or availability, and primary contact action.
3. Selected projects with visible outcomes, stack, repository/demo actions, and consistent imagery.
4. Experience timeline with concise impact statements.
5. Courses and certifications as supporting evidence.
6. Contact and social links in the footer.

## One-page navigation decision

The portfolio should use one primary page with anchored sections rather than tabs that replace the visible content. The navigation should link to stable sections such as `#about`, `#projects`, `#experience`, `#courses`, and `#contact`.

This approach keeps the complete professional story available to visitors and search engines, preserves context while scrolling, supports shareable section URLs, and works naturally with semantic HTML. The active section can still be highlighted in the navbar, and the selected language can remain a persistent preference.

Use separate routes only when content needs a dedicated reading experience or its own search result, for example `/projects/project-name` or `/articles/article-name`.

## Visual system

- Define CSS custom properties for background, surface, text, muted text, accent, border, spacing, and focus colors.
- Choose one expressive display typeface and one highly readable body typeface; load them intentionally and provide fallbacks.
- Use a restrained neutral foundation with one clear accent color instead of a generic framework-only appearance.
- Keep cards compact with consistent radii, borders, and internal spacing.
- Use a responsive grid with stable image aspect ratios to prevent layout shift.
- Use motion for page-load reveals and meaningful state changes, with `prefers-reduced-motion` support.

## Interaction and accessibility

- Use semantic `header`, `nav`, `main`, `section`, and `footer` landmarks.
- Ensure every interactive element is keyboard reachable and has a visible focus state.
- Add descriptive `alt` text to meaningful images and empty alt text to decorative images.
- Use real buttons and links rather than clickable generic containers.
- Maintain readable line lengths and a minimum contrast ratio suitable for body text.
- Do not rely on color alone to communicate state.
- Preserve the selected language and section after reload.

## Performance and SEO

- Prefer local, optimized WebP or AVIF images for important content.
- Lazy-load below-the-fold images and define dimensions before they load.
- Add page title, description, canonical URL, Open Graph metadata, and JSON-LD for a person/portfolio where appropriate.
- Review third-party image and logo URLs; replace unstable sources with local or licensed assets.
- Measure Core Web Vitals and Lighthouse before and after the redesign.

## Acceptance checks

- No horizontal scrolling at common mobile widths.
- The first viewport communicates identity and primary action without excessive scrolling.
- Navigation moves to each main section and updates the URL fragment without losing page context.
- Project cards remain readable with long translated titles and descriptions.
- All controls work with keyboard navigation.
- Reduced-motion mode removes non-essential animation.
