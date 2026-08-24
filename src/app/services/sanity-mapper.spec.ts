import { LOCAL_PORTFOLIO_CONTENT } from '../content/portfolio.content';
import { mapNavigation, mapProjects, mapSiteSettings, mergeCmsSlice } from './sanity-mapper';

describe('sanity-mapper', () => {
  it('maps site settings from a Sanity document', () => {
    const mapped = mapSiteSettings({
      name: 'Miguel Ángel Gutiérrez Ibagué',
      brandHandle: 'miguel.gutierrez',
      emails: ['a@example.com'],
      socialLinks: [{ id: 'github', label: 'GitHub', url: 'https://github.com/miguelgutierrezi' }],
    });

    expect(mapped?.name).toBe('Miguel Ángel Gutiérrez Ibagué');
    expect(mapped?.socialLinks[0].iconUrl).toBe('');
  });

  it('maps project ids from slug.current', () => {
    const mapped = mapProjects([
      {
        slug: { current: 'nodejs-scheduler-back' },
        title: 'NodeJS Scheduler Back',
        description: { es: 'API', en: 'API' },
        technologies: ['Node.js'],
        technologyIconUrls: ['https://example.com/node.png'],
        imageUrl: 'https://example.com/cover.jpg',
        featured: true,
        sortOrder: 1,
        detail: {
          summary: { es: 'Resumen', en: 'Summary' },
          role: { es: 'Backend', en: 'Backend' },
          duration: { es: '3 meses', en: '3 months' },
          team: { es: 'Solo', en: 'Solo' },
          year: '2019',
          client: { es: 'Personal', en: 'Personal' },
          body: [{ es: 'Cuerpo', en: 'Body' }],
          features: [
            {
              id: 'nsb-api',
              icon: 'api',
              title: { es: 'API', en: 'API' },
              description: { es: 'CRUD', en: 'CRUD' },
            },
          ],
          gallery: [
            {
              id: 'nsb-cover',
              imageUrl: 'https://example.com/cover.jpg',
              title: { es: 'Agenda', en: 'Agenda' },
              caption: { es: 'Cover', en: 'Cover' },
            },
          ],
        },
      },
    ]);

    expect(mapped).toHaveLength(1);
    expect(mapped[0].id).toBe('nodejs-scheduler-back');
  });

  it('maps navigation from a document with items', () => {
    const mapped = mapNavigation({
      items: [
        { id: 'about', label: { es: 'Sobre Mí', en: 'About' } },
        { id: 'unknown', label: { es: 'X', en: 'X' } },
      ],
    });

    expect(mapped).toEqual([{ id: 'about', label: { es: 'Sobre Mí', en: 'About' } }]);
  });

  it('keeps local collections when the remote slice is empty', () => {
    const merged = mergeCmsSlice(LOCAL_PORTFOLIO_CONTENT, {
      site: { ...LOCAL_PORTFOLIO_CONTENT.site, name: 'Remote Name' },
      projects: [],
      experience: [],
      courses: [],
      navigation: [],
    });

    expect(merged.site.name).toBe('Remote Name');
    expect(merged.projects).toBe(LOCAL_PORTFOLIO_CONTENT.projects);
    expect(merged.experience).toBe(LOCAL_PORTFOLIO_CONTENT.experience);
    expect(merged.ui).toBe(LOCAL_PORTFOLIO_CONTENT.ui);
  });

  it('replaces a collection when remote has at least one valid item', () => {
    const remoteProjects = [LOCAL_PORTFOLIO_CONTENT.projects[0]];
    const merged = mergeCmsSlice(LOCAL_PORTFOLIO_CONTENT, { projects: remoteProjects });

    expect(merged.projects).toBe(remoteProjects);
    expect(merged.projects).toHaveLength(1);
  });
});
