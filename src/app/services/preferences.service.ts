import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DEFAULT_PREFERENCES,
  LocaleCode,
  SectionId,
  UserPreferences
} from '../models/portfolio.models';

const STORAGE_KEY = 'portfolio.preferences';
const LEGACY_LANGUAGE_KEY = 'language';
const LEGACY_OPTION_KEY = 'option';
const LEGACY_POSITION_KEY = 'position';

const SECTION_IDS: SectionId[] = ['about', 'projects', 'experience', 'courses'];

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private readonly preferencesSubject: BehaviorSubject<UserPreferences>;

  constructor() {
    this.preferencesSubject = new BehaviorSubject<UserPreferences>(this.readInitialPreferences());
  }

  get preferences$(): Observable<UserPreferences> {
    return this.preferencesSubject.asObservable();
  }

  get snapshot(): UserPreferences {
    return this.preferencesSubject.value;
  }

  setLanguage(language: LocaleCode): void {
    this.update({ language });
  }

  toggleLanguage(): LocaleCode {
    const next: LocaleCode = this.snapshot.language === 'es' ? 'en' : 'es';
    this.setLanguage(next);
    return next;
  }

  setSection(section: SectionId): void {
    this.update({ section });
  }

  private update(partial: Partial<UserPreferences>): void {
    const next: UserPreferences = {
      ...this.snapshot,
      ...partial,
      version: 1
    };
    this.preferencesSubject.next(next);
    this.write(next);
  }

  private readInitialPreferences(): UserPreferences {
    const stored = this.readFromLocalStorage();
    if (stored) {
      return stored;
    }

    const migrated = this.migrateLegacySessionStorage();
    this.write(migrated);
    return migrated;
  }

  private readFromLocalStorage(): UserPreferences | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw) as Partial<UserPreferences>;
      return this.validate(parsed);
    } catch {
      return null;
    }
  }

  private migrateLegacySessionStorage(): UserPreferences {
    const preferences = { ...DEFAULT_PREFERENCES };

    try {
      const legacyLanguage = sessionStorage.getItem(LEGACY_LANGUAGE_KEY);
      if (legacyLanguage === 'English') {
        preferences.language = 'en';
      } else if (legacyLanguage === 'Spanish') {
        preferences.language = 'es';
      }

      const legacyOption = sessionStorage.getItem(LEGACY_OPTION_KEY);
      const fromOption = this.sectionFromLegacyLabel(legacyOption);
      if (fromOption) {
        preferences.section = fromOption;
      } else {
        const legacyPosition = sessionStorage.getItem(LEGACY_POSITION_KEY);
        if (legacyPosition !== null) {
          const index = Number(legacyPosition);
          if (!Number.isNaN(index) && SECTION_IDS[index]) {
            preferences.section = SECTION_IDS[index];
          }
        }
      }
    } catch {
      // Ignore unavailable sessionStorage and keep defaults.
    }

    return preferences;
  }

  private sectionFromLegacyLabel(label: string | null): SectionId | null {
    switch (label) {
      case 'Sobre mí':
      case 'About':
        return 'about';
      case 'Proyectos':
      case 'Projects':
        return 'projects';
      case 'Experiencia':
      case 'Experience':
        return 'experience';
      case 'Cursos':
      case 'Courses':
        return 'courses';
      default:
        return null;
    }
  }

  private validate(value: Partial<UserPreferences>): UserPreferences | null {
    if (!value || value.version !== 1) {
      return null;
    }
    if (value.language !== 'es' && value.language !== 'en') {
      return null;
    }
    if (!value.section || !SECTION_IDS.includes(value.section)) {
      return null;
    }
    return {
      version: 1,
      language: value.language,
      section: value.section
    };
  }

  private write(preferences: UserPreferences): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // Storage failures must not break rendering.
    }
  }
}
