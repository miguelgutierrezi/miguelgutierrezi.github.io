export type LocaleCode = 'es' | 'en';

export type SectionId = 'about' | 'projects' | 'experience' | 'courses';

export type LocalizedString = Record<LocaleCode, string>;

export type LocalizedStringList = Record<LocaleCode, string[]>;

export function localize(value: LocalizedString, locale: LocaleCode): string {
  return value[locale] ?? value.es;
}

export function localizeList(value: LocalizedStringList, locale: LocaleCode): string[] {
  return value[locale] ?? value.es;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  iconUrl: string;
}

export interface SiteSettings {
  name: string;
  emails: string[];
  socialLinks: SocialLink[];
}

export interface ProfileContent {
  imageUrl: string;
  paragraphs: LocalizedString[];
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  technologyIconUrls: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  featured: boolean;
  sortOrder: number;
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  duration: LocalizedString;
  responsibilities: LocalizedStringList;
  imageUrl: string;
  sortOrder: number;
}

export interface Course {
  id: string;
  title: LocalizedString;
  institution: string;
  date: LocalizedString;
  imageUrl: string;
  credentialUrl?: string;
  sortOrder: number;
}

export interface NavItem {
  id: SectionId;
  label: LocalizedString;
}

/** Section titles, buttons, and chrome labels — not editorial CV body copy. */
export interface UiCopy {
  profileHeading: LocalizedString;
  emailLabel: LocalizedString;
  projectsHeading: LocalizedString;
  viewRepository: LocalizedString;
  experienceHeading: LocalizedString;
  seeMore: LocalizedString;
  responsibilitiesHeading: LocalizedString;
  close: LocalizedString;
  coursesHeading: LocalizedString;
  viewCredential: LocalizedString;
  switchToEnglish: LocalizedString;
  switchToSpanish: LocalizedString;
  menuToggle: LocalizedString;
}

export interface PortfolioContent {
  site: SiteSettings;
  profile: ProfileContent;
  projects: Project[];
  experience: Experience[];
  courses: Course[];
  navigation: NavItem[];
  ui: UiCopy;
}

export interface UserPreferences {
  version: 1;
  language: LocaleCode;
  section: SectionId;
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  version: 1,
  language: 'es',
  section: 'about'
};

export interface ContentValidationIssue {
  path: string;
  message: string;
}

export interface ContentValidationResult {
  content: PortfolioContent;
  issues: ContentValidationIssue[];
}
