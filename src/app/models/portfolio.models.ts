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
  /** Short handle shown in the nav logo, e.g. `miguel.gutierrez`. */
  brandHandle: string;
  emails: string[];
  socialLinks: SocialLink[];
}

export interface ProfileContent {
  imageUrl: string;
  /** Role badge in the hero (e.g. Systems Engineer). */
  role: LocalizedString;
  /** Short hero pitch under the name. */
  pitch: LocalizedString;
  paragraphs: LocalizedString[];
  /** Focus / specialty tags under the about copy. */
  focusAreas: LocalizedStringList;
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  /** Text technology labels for cards (preferred over icon URLs in the UI). */
  technologies: string[];
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
  aboutCode: LocalizedString;
  aboutTitle: LocalizedString;
  emailLabel: LocalizedString;
  projectsHeading: LocalizedString;
  projectsCode: LocalizedString;
  projectsTitle: LocalizedString;
  viewRepository: LocalizedString;
  experienceHeading: LocalizedString;
  experienceCode: LocalizedString;
  experienceTitle: LocalizedString;
  seeMore: LocalizedString;
  responsibilitiesHeading: LocalizedString;
  close: LocalizedString;
  coursesHeading: LocalizedString;
  coursesCode: LocalizedString;
  coursesTitle: LocalizedString;
  viewCredential: LocalizedString;
  switchToEnglish: LocalizedString;
  switchToSpanish: LocalizedString;
  menuToggle: LocalizedString;
  footerCredit: LocalizedString;
  previousProject: LocalizedString;
  nextProject: LocalizedString;
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
