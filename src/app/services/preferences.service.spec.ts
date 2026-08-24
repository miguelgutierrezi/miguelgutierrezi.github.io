import { TestBed } from '@angular/core/testing';
import { DEFAULT_PREFERENCES } from '../models/portfolio.models';
import { PreferencesService } from './preferences.service';

const STORAGE_KEY = 'portfolio.preferences';

describe('PreferencesService', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    TestBed.resetTestingModule();
  });

  it('uses defaults when storage is empty', () => {
    const service = TestBed.inject(PreferencesService);

    expect(service.snapshot).toEqual(DEFAULT_PREFERENCES);
  });

  it('restores a valid stored language and section', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 1, language: 'en', section: 'projects' }),
    );

    const service = TestBed.inject(PreferencesService);

    expect(service.snapshot).toEqual({
      version: 1,
      language: 'en',
      section: 'projects',
    });
  });

  it('ignores invalid stored values', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 1, language: 'fr', section: 'about' }),
    );

    const service = TestBed.inject(PreferencesService);

    expect(service.snapshot).toEqual(DEFAULT_PREFERENCES);
  });

  it('writes language changes to localStorage', () => {
    const service = TestBed.inject(PreferencesService);

    service.setLanguage('en');

    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')).toEqual({
      version: 1,
      language: 'en',
      section: DEFAULT_PREFERENCES.section,
    });
    expect(service.snapshot.language).toBe('en');
  });

  it('migrates legacy sessionStorage language and section labels', () => {
    sessionStorage.setItem('language', 'English');
    sessionStorage.setItem('option', 'Projects');

    const service = TestBed.inject(PreferencesService);

    expect(service.snapshot).toEqual({
      version: 1,
      language: 'en',
      section: 'projects',
    });
  });

  it('keeps rendering when localStorage throws', () => {
    const original = localStorage.setItem;
    localStorage.setItem = () => {
      throw new Error('quota');
    };

    try {
      const service = TestBed.inject(PreferencesService);
      expect(() => service.setLanguage('en')).not.toThrow();
      expect(service.snapshot.language).toBe('en');
    } finally {
      localStorage.setItem = original;
    }
  });
});
