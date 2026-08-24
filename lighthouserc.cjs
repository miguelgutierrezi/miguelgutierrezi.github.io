/** @type {import('@lhci/cli').Config} */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist/personal-presentation-miguel-gutierrez/browser',
      isSinglePageApplication: true,
      numberOfRuns: 1,
      url: [
        'http://localhost/',
        'http://localhost/projects/nodejs-scheduler-back',
        'http://localhost/not-found',
      ],
      settings: {
        // Focus CI on a11y signal; perf varies a lot on shared runners.
        onlyCategories: ['accessibility', 'best-practices', 'seo'],
        // GitHub Actions / Ubuntu: Chrome needs --no-sandbox (AppArmor userns).
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
  },
};
