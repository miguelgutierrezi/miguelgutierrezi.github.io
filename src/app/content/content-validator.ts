import {
  ContentValidationIssue,
  ContentValidationResult,
  Course,
  Experience,
  LocalizedString,
  LocalizedStringList,
  NavItem,
  PortfolioContent,
  Project,
  SectionId,
  SocialLink,
  UiCopy
} from '../models/portfolio.models';

const SECTION_IDS: SectionId[] = ['about', 'projects', 'experience', 'courses'];

const UI_KEYS: (keyof UiCopy)[] = [
  'profileHeading',
  'aboutCode',
  'aboutTitle',
  'emailLabel',
  'projectsHeading',
  'projectsCode',
  'projectsTitle',
  'viewRepository',
  'experienceHeading',
  'experienceCode',
  'experienceTitle',
  'seeMore',
  'responsibilitiesHeading',
  'close',
  'coursesHeading',
  'coursesCode',
  'coursesTitle',
  'viewCredential',
  'switchToEnglish',
  'switchToSpanish',
  'menuToggle',
  'footerCredit',
  'previousProject',
  'nextProject'
];

const UI_FALLBACK: UiCopy = {
  profileHeading: { es: 'Sobre mí', en: 'About me' },
  aboutCode: { es: '// 01. SOBRE MÍ', en: '// 01. ABOUT' },
  aboutTitle: { es: 'Trayectoria', en: 'Background' },
  emailLabel: { es: 'Correo', en: 'Email' },
  projectsHeading: { es: 'Mis proyectos', en: 'My projects' },
  projectsCode: { es: '// 03. PROYECTOS', en: '// 03. PROJECTS' },
  projectsTitle: { es: 'Sistemas Destacados', en: 'Featured Systems' },
  viewRepository: { es: 'Ver repositorio', en: 'View repository' },
  experienceHeading: { es: 'Experiencia laboral', en: 'Professional History' },
  experienceCode: { es: '// 02. EXPERIENCIA', en: '// 02. EXPERIENCE' },
  experienceTitle: { es: 'Historial Laboral', en: 'Work History' },
  seeMore: { es: 'Ver más', en: 'See more' },
  responsibilitiesHeading: { es: 'Funciones', en: 'Responsibilities' },
  close: { es: 'Cerrar', en: 'Close' },
  coursesHeading: { es: 'Mis cursos', en: 'My courses' },
  coursesCode: { es: '// 04. APRENDIZAJE', en: '// 04. LEARNING' },
  coursesTitle: { es: 'Cursos y Certificaciones', en: 'Courses & Certifications' },
  viewCredential: { es: 'Ver credencial', en: 'See credential' },
  switchToEnglish: { es: 'English', en: 'English' },
  switchToSpanish: { es: 'Español', en: 'Español' },
  menuToggle: { es: 'Abrir o cerrar menú', en: 'Toggle navigation' },
  footerCredit: { es: 'Hecho con Angular • 2026', en: 'Built with Angular • 2026' },
  previousProject: { es: 'Proyecto anterior', en: 'Previous project' },
  nextProject: { es: 'Proyecto siguiente', en: 'Next project' }
};

/**
 * Validate and normalize unknown portfolio payloads (local or future CMS).
 * Always returns a fresh PortfolioContent object; never mutates the input.
 */
export function validatePortfolioContent(raw: unknown): ContentValidationResult {
  const issues: ContentValidationIssue[] = [];

  if (!isRecord(raw)) {
    issues.push({ path: '$', message: 'Portfolio payload must be a plain object.' });
    return { content: emptyPortfolio(), issues };
  }

  const siteRaw = isRecord(raw['site']) ? raw['site'] : {};
  const profileRaw = isRecord(raw['profile']) ? raw['profile'] : {};

  const name = asTrimmedString(siteRaw['name']);
  if (!name) {
    issues.push({ path: 'site.name', message: 'Site name is required.' });
  }

  const brandHandle = asTrimmedString(siteRaw['brandHandle']) ?? '';
  if (!brandHandle) {
    issues.push({ path: 'site.brandHandle', message: 'Site brandHandle is required.' });
  }

  const emails = asStringArray(siteRaw['emails'])
    .map((email) => email.trim())
    .filter(Boolean);
  if (emails.length === 0) {
    issues.push({ path: 'site.emails', message: 'At least one email is required.' });
  }

  const socialLinks = uniqueById(
    asArray(siteRaw['socialLinks'])
      .map((link, index) => parseSocialLink(link, `site.socialLinks[${index}]`, issues))
      .filter((link): link is SocialLink => link !== null),
    'site.socialLinks',
    issues
  );

  const profileImageUrl = parseUrl(profileRaw['imageUrl'], 'profile.imageUrl', issues, {
    allowEmpty: false,
    allowLocalAsset: true
  });

  const role = parseLocalizedString(profileRaw['role'], 'profile.role', issues);
  const pitch = parseLocalizedString(profileRaw['pitch'], 'profile.pitch', issues);
  const focusAreas =
    parseLocalizedList(profileRaw['focusAreas'], 'profile.focusAreas', issues) ?? { es: [], en: [] };

  const paragraphs = asArray(profileRaw['paragraphs'])
    .map((paragraph, index) => parseLocalizedString(paragraph, `profile.paragraphs[${index}]`, issues))
    .filter((paragraph): paragraph is LocalizedString => paragraph !== null);

  const navigation = uniqueById(
    asArray(raw['navigation'])
      .map((item, index) => parseNavItem(item, `navigation[${index}]`, issues))
      .filter((item): item is NavItem => item !== null),
    'navigation',
    issues
  );

  const projects = uniqueById(
    asArray(raw['projects'])
      .map((project, index) => parseProject(project, `projects[${index}]`, issues))
      .filter((project): project is Project => project !== null),
    'projects',
    issues
  ).sort((a, b) => a.sortOrder - b.sortOrder);

  const experience = uniqueById(
    asArray(raw['experience'])
      .map((job, index) => parseExperience(job, `experience[${index}]`, issues))
      .filter((job): job is Experience => job !== null),
    'experience',
    issues
  ).sort((a, b) => a.sortOrder - b.sortOrder);

  const courses = uniqueById(
    asArray(raw['courses'])
      .map((course, index) => parseCourse(course, `courses[${index}]`, issues))
      .filter((course): course is Course => course !== null),
    'courses',
    issues
  ).sort((a, b) => a.sortOrder - b.sortOrder);

  const ui = parseUiCopy(raw['ui'], issues);

  const content: PortfolioContent = {
    site: {
      name: name ?? '',
      brandHandle: brandHandle || (name ?? ''),
      emails,
      socialLinks
    },
    profile: {
      imageUrl: profileImageUrl ?? '',
      role: role ?? { es: '', en: '' },
      pitch: pitch ?? { es: '', en: '' },
      paragraphs,
      focusAreas
    },
    navigation,
    projects,
    experience,
    courses,
    ui
  };

  return { content, issues };
}

export function isValidUrl(
  value: unknown,
  options: { allowEmpty?: boolean; allowLocalAsset?: boolean } = {}
): boolean {
  return parseUrl(value, 'url', [], options) !== null;
}

function parseSocialLink(value: unknown, path: string, issues: ContentValidationIssue[]): SocialLink | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Social link must be an object.' });
    return null;
  }

  const id = asTrimmedString(value['id']);
  const label = asTrimmedString(value['label']);
  if (!id || !label) {
    issues.push({ path, message: 'Social link requires id and label.' });
    return null;
  }

  const url = parseUrl(value['url'], `${path}.url`, issues, { allowLocalAsset: false });
  const iconUrl = parseUrl(value['iconUrl'], `${path}.iconUrl`, issues, {
    allowEmpty: true,
    allowLocalAsset: true
  });
  if (url === null || iconUrl === null) {
    return null;
  }

  return { id, label, url, iconUrl };
}

function parseNavItem(value: unknown, path: string, issues: ContentValidationIssue[]): NavItem | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Navigation item must be an object.' });
    return null;
  }

  const id = value['id'];
  if (!isSectionId(id)) {
    issues.push({ path: `${path}.id`, message: 'Navigation item has an invalid section id.' });
    return null;
  }

  const label = parseLocalizedString(value['label'], `${path}.label`, issues);
  if (!label) {
    return null;
  }

  return { id, label };
}

function parseProject(value: unknown, path: string, issues: ContentValidationIssue[]): Project | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Project must be an object.' });
    return null;
  }

  const id = asTrimmedString(value['id']);
  const title = asTrimmedString(value['title']);
  if (!id || !title) {
    issues.push({ path, message: 'Project requires id and title.' });
    return null;
  }

  const description = parseLocalizedString(value['description'], `${path}.description`, issues);
  if (!description) {
    return null;
  }

  const imageUrl = parseUrl(value['imageUrl'], `${path}.imageUrl`, issues, { allowLocalAsset: true });
  if (imageUrl === null) {
    return null;
  }

  const repositoryUrl = parseOptionalUrl(value['repositoryUrl'], `${path}.repositoryUrl`, issues, {
    allowLocalAsset: false
  });
  if (repositoryUrl === undefined) {
    return null;
  }

  const demoUrl = parseOptionalUrl(value['demoUrl'], `${path}.demoUrl`, issues, {
    allowLocalAsset: false
  });
  if (demoUrl === undefined) {
    return null;
  }

  const sortOrder = parseSortOrder(value['sortOrder'], `${path}.sortOrder`, issues);
  if (sortOrder === null) {
    return null;
  }

  const technologies = asStringArray(value['technologies'])
    .map((tech) => tech.trim())
    .filter(Boolean);

  const rawIcons = asArray(value['technologyIconUrls']);
  const technologyIconUrls: string[] = [];
  rawIcons.forEach((icon, index) => {
    const parsed = parseUrl(icon, `${path}.technologyIconUrls[${index}]`, issues, {
      allowLocalAsset: true
    });
    if (parsed !== null) {
      technologyIconUrls.push(parsed);
    }
  });

  return {
    id,
    title,
    description,
    technologies,
    technologyIconUrls,
    imageUrl,
    featured: Boolean(value['featured']),
    sortOrder,
    ...(repositoryUrl !== null ? { repositoryUrl } : {}),
    ...(demoUrl !== null ? { demoUrl } : {})
  };
}

function parseExperience(value: unknown, path: string, issues: ContentValidationIssue[]): Experience | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Experience entry must be an object.' });
    return null;
  }

  const id = asTrimmedString(value['id']);
  const company = asTrimmedString(value['company']);
  if (!id || !company) {
    issues.push({ path, message: 'Experience requires id and company.' });
    return null;
  }

  const role = parseLocalizedString(value['role'], `${path}.role`, issues);
  const duration = parseLocalizedString(value['duration'], `${path}.duration`, issues);
  const responsibilities = parseLocalizedList(value['responsibilities'], `${path}.responsibilities`, issues);
  if (!role || !duration || !responsibilities) {
    return null;
  }

  const imageUrl = parseUrl(value['imageUrl'], `${path}.imageUrl`, issues, {
    allowEmpty: true,
    allowLocalAsset: true
  });
  if (imageUrl === null) {
    return null;
  }

  const sortOrder = parseSortOrder(value['sortOrder'], `${path}.sortOrder`, issues);
  if (sortOrder === null) {
    return null;
  }

  return {
    id,
    company,
    role,
    duration,
    responsibilities,
    imageUrl,
    sortOrder
  };
}

function parseCourse(value: unknown, path: string, issues: ContentValidationIssue[]): Course | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Course must be an object.' });
    return null;
  }

  const id = asTrimmedString(value['id']);
  const institution = asTrimmedString(value['institution']);
  if (!id || !institution) {
    issues.push({ path, message: 'Course requires id and institution.' });
    return null;
  }

  const title = parseLocalizedString(value['title'], `${path}.title`, issues);
  const date = parseLocalizedString(value['date'], `${path}.date`, issues);
  if (!title || !date) {
    return null;
  }

  const imageUrl = parseUrl(value['imageUrl'], `${path}.imageUrl`, issues, { allowLocalAsset: true });
  if (imageUrl === null) {
    return null;
  }

  const credentialUrl = parseOptionalUrl(value['credentialUrl'], `${path}.credentialUrl`, issues, {
    allowLocalAsset: false
  });
  if (credentialUrl === undefined) {
    return null;
  }

  const sortOrder = parseSortOrder(value['sortOrder'], `${path}.sortOrder`, issues);
  if (sortOrder === null) {
    return null;
  }

  return {
    id,
    title,
    institution,
    date,
    imageUrl,
    sortOrder,
    ...(credentialUrl !== null ? { credentialUrl } : {})
  };
}

function parseUiCopy(value: unknown, issues: ContentValidationIssue[]): UiCopy {
  if (!isRecord(value)) {
    issues.push({ path: 'ui', message: 'UI copy is missing or invalid; using built-in fallbacks.' });
    return cloneLocalizedMap(UI_FALLBACK);
  }

  const result = cloneLocalizedMap(UI_FALLBACK);
  for (const key of UI_KEYS) {
    const parsed = parseLocalizedString(value[key], `ui.${key}`, issues);
    if (parsed) {
      result[key] = parsed;
    }
  }
  return result;
}

function parseLocalizedString(
  value: unknown,
  path: string,
  issues: ContentValidationIssue[]
): LocalizedString | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Localized string requires an object with es and en.' });
    return null;
  }
  const es = asTrimmedString(value['es']);
  const en = asTrimmedString(value['en']);
  if (!es || !en) {
    issues.push({ path, message: 'Localized string requires non-empty es and en values.' });
    return null;
  }
  return { es, en };
}

function parseLocalizedList(
  value: unknown,
  path: string,
  issues: ContentValidationIssue[]
): LocalizedStringList | null {
  if (!isRecord(value)) {
    issues.push({ path, message: 'Localized list requires an object with es and en arrays.' });
    return null;
  }
  const es = asStringArray(value['es']).map((item) => item.trim()).filter(Boolean);
  const en = asStringArray(value['en']).map((item) => item.trim()).filter(Boolean);
  if (es.length === 0 || en.length === 0) {
    issues.push({ path, message: 'Localized list requires non-empty es and en arrays.' });
    return null;
  }
  return { es: [...es], en: [...en] };
}

function parseSortOrder(value: unknown, path: string, issues: ContentValidationIssue[]): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    issues.push({ path, message: 'sortOrder must be a finite number.' });
    return null;
  }
  return value;
}

function parseUrl(
  value: unknown,
  path: string,
  issues: ContentValidationIssue[],
  options: { allowEmpty?: boolean; allowLocalAsset?: boolean } = {}
): string | null {
  const { allowEmpty = false, allowLocalAsset = false } = options;

  if (value === undefined || value === null) {
    if (allowEmpty) {
      return '';
    }
    issues.push({ path, message: 'URL is required.' });
    return null;
  }

  if (typeof value !== 'string') {
    issues.push({ path, message: 'URL must be a string.' });
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    if (allowEmpty) {
      return '';
    }
    issues.push({ path, message: 'URL is required.' });
    return null;
  }

  if (allowLocalAsset && isLocalAssetPath(trimmed)) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      issues.push({ path, message: 'External URL must use http or https.' });
      return null;
    }
    if (!parsed.hostname) {
      issues.push({ path, message: 'External URL is missing a hostname.' });
      return null;
    }
    return parsed.toString();
  } catch {
    issues.push({ path, message: 'URL is invalid.' });
    return null;
  }
}

function parseOptionalUrl(
  value: unknown,
  path: string,
  issues: ContentValidationIssue[],
  options: { allowLocalAsset?: boolean } = {}
): string | null | undefined {
  if (value === undefined || value === null) {
    return null;
  }
  if (typeof value === 'string' && !value.trim()) {
    return null;
  }
  const parsed = parseUrl(value, path, issues, { allowEmpty: false, ...options });
  return parsed === null ? undefined : parsed;
}

function isLocalAssetPath(value: string): boolean {
  return value.startsWith('assets/') || value.startsWith('/assets/');
}

function uniqueById<T extends { id: string }>(
  items: T[],
  collectionPath: string,
  issues: ContentValidationIssue[]
): T[] {
  const seen = new Set<string>();
  const result: T[] = [];
  for (const item of items) {
    if (seen.has(item.id)) {
      issues.push({
        path: collectionPath,
        message: `Duplicate id "${item.id}" was dropped to keep stable tracking.`
      });
      continue;
    }
    seen.add(item.id);
    result.push(item);
  }
  return result;
}

function emptyPortfolio(): PortfolioContent {
  return {
    site: { name: '', brandHandle: '', emails: [], socialLinks: [] },
    profile: {
      imageUrl: '',
      role: { es: '', en: '' },
      pitch: { es: '', en: '' },
      paragraphs: [],
      focusAreas: { es: [], en: [] }
    },
    navigation: [],
    projects: [],
    experience: [],
    courses: [],
    ui: cloneLocalizedMap(UI_FALLBACK)
  };
}

function cloneLocalizedMap(source: UiCopy): UiCopy {
  const clone = {} as UiCopy;
  for (const key of UI_KEYS) {
    clone[key] = { es: source[key].es, en: source[key].en };
  }
  return clone;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isSectionId(value: unknown): value is SectionId {
  return typeof value === 'string' && (SECTION_IDS as string[]).includes(value);
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function asStringArray(value: unknown): string[] {
  return asArray(value).filter((item): item is string => typeof item === 'string');
}

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}
