import { LOCAL_PORTFOLIO_CONTENT } from './portfolio.content';
import { validatePortfolioContent } from './content-validator';

describe('validatePortfolioContent', () => {
  it('accepts the local portfolio payload without issues', () => {
    const result = validatePortfolioContent(LOCAL_PORTFOLIO_CONTENT);

    expect(result.issues).toEqual([]);
    expect(result.content.site.name).toBe(LOCAL_PORTFOLIO_CONTENT.site.name);
    expect(result.content.projects).toHaveLength(LOCAL_PORTFOLIO_CONTENT.projects.length);
    expect(result.content.experience).toHaveLength(LOCAL_PORTFOLIO_CONTENT.experience.length);
    expect(result.content.courses).toHaveLength(LOCAL_PORTFOLIO_CONTENT.courses.length);
  });

  it('does not mutate the source object', () => {
    const source = structuredClone(LOCAL_PORTFOLIO_CONTENT);
    const result = validatePortfolioContent(source);

    expect(result.content).not.toBe(source);
    expect(source).toEqual(LOCAL_PORTFOLIO_CONTENT);
  });

  it('records an issue and returns empty content for a non-object payload', () => {
    const result = validatePortfolioContent(null);

    expect(result.issues.some((issue) => issue.path === '$')).toBe(true);
    expect(result.content.site.name).toBe('');
    expect(result.content.projects).toEqual([]);
  });

  it('rejects a project that is missing required detail', () => {
    const payload = structuredClone(LOCAL_PORTFOLIO_CONTENT);
    delete (payload.projects[0] as { detail?: unknown }).detail;

    const result = validatePortfolioContent(payload);
    const detailIssues = result.issues.filter((issue) => issue.path.includes('.detail'));

    expect(detailIssues.length).toBeGreaterThan(0);
    expect(result.content.projects.every((project) => project.id !== payload.projects[0].id)).toBe(
      true,
    );
  });

  it('rejects duplicate project ids', () => {
    const payload = structuredClone(LOCAL_PORTFOLIO_CONTENT);
    payload.projects[1].id = payload.projects[0].id;

    const result = validatePortfolioContent(payload);

    expect(result.issues.some((issue) => issue.message.toLowerCase().includes('duplicate'))).toBe(
      true,
    );
  });
});
