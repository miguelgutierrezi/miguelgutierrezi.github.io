# Persistence Strategy

## What should persist

Persist only low-risk presentation preferences:

- Selected language.
- Selected home section, if the section-switching interaction remains part of the design.
- Optional dismissal state for non-critical UI notices.

Portfolio content should not be stored in browser storage. It belongs in the versioned content layer or CMS.

## Storage choice

Use `localStorage` for language and navigation preferences. Unlike `sessionStorage`, it survives browser restarts and matches the expected behavior of a personal site. Store a small versioned object, for example:

```json
{
  "version": 1,
  "language": "en",
  "section": "projects"
}
```

Use stable internal values such as `en`, `es`, `about`, and `projects`; translate labels only at render time.

## Behavior

1. Define defaults in one preferences service.
2. Read and validate stored values during app initialization.
3. Fall back to defaults when the stored value is missing or invalid.
4. Write preferences immediately after a user changes them.
5. Keep storage access behind a service so components remain easy to test.
6. Guard browser-only APIs if server-side rendering is introduced later.

## Privacy and resilience

Do not store personal data, credentials, tokens, or analytics identifiers in this preference object. Storage failures, including disabled browser storage or quota errors, should not prevent the portfolio from rendering.

## Testing

Add tests for:

- Default preferences when storage is empty.
- Valid stored language and section values.
- Invalid values being ignored.
- Changes being written to storage.
- Rendering continuing when storage access throws.
