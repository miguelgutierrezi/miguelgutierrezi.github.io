import { isExternalHttpUrl, localize, localizeList } from './portfolio.models';

describe('portfolio.models helpers', () => {
  it('localizes strings and lists with a locale fallback to Spanish', () => {
    expect(localize({ es: 'Hola', en: 'Hello' }, 'en')).toBe('Hello');
    expect(localizeList({ es: ['Uno'], en: ['One'] }, 'es')).toEqual(['Uno']);
  });

  it('detects external http(s) urls', () => {
    expect(isExternalHttpUrl('https://github.com/miguelgutierrezi')).toBe(true);
    expect(isExternalHttpUrl('tel:+573108108579')).toBe(false);
    expect(isExternalHttpUrl('assets/photo.jpg')).toBe(false);
  });
});
