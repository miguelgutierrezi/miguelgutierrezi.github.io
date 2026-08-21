export const environment = {
  production: false,
  language: 'Spanish',
  /** Canonical public origin (no trailing slash). Empty → use window.location.origin in SeoService. */
  siteUrl: 'http://localhost:4200',
  /**
   * External admin UI (custom app + write proxy). Navbar Login redirects here.
   * Leave empty to hide the button. Never put write tokens in this file.
   */
  adminLoginUrl: 'http://localhost:4300',
  /**
   * Sanity CMS (read-only CDN). Keep write tokens out of this file.
   * Enable after creating a project and seeding siteSettings + profile + projects.
   */
  cms: {
    enabled: true,
    projectId: 'xm49cfca',
    dataset: 'production',
    apiVersion: '2025-01-01'
  }
};
