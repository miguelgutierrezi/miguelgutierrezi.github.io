import {
  LocalizedString,
  LocalizedStringList,
  PortfolioContent,
  ProfileContent,
  Project,
  ProjectDetail,
  ProjectFeature,
  ProjectGalleryItem,
  SiteSettings,
  SocialLink
} from '../models/portfolio.models';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function asNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function asBoolean(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }
  const items = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
  return items.length ? items : undefined;
}

function mapLocalizedString(value: unknown): LocalizedString | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const es = asString(value['es']);
  const en = asString(value['en']);
  if (!es || !en) {
    return undefined;
  }
  return {es, en};
}

function mapLocalizedStringList(value: unknown): LocalizedStringList | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const es = asStringArray(value['es']);
  const en = asStringArray(value['en']);
  if (!es || !en) {
    return undefined;
  }
  return {es, en};
}

function mapLocalizedList(value: unknown): LocalizedString[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }
  const items = value
    .map((item) => mapLocalizedString(item))
    .filter((item): item is LocalizedString => !!item);
  return items.length ? items : undefined;
}

function mapSocialLinks(value: unknown): SocialLink[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }
  const links: SocialLink[] = [];
  for (const item of value) {
    if (!isRecord(item)) {
      continue;
    }
    const id = asString(item['id']);
    const label = asString(item['label']);
    const url = asString(item['url']);
    if (!id || !label || !url) {
      continue;
    }
    links.push({
      id,
      label,
      url,
      iconUrl: asString(item['iconUrl']) ?? ''
    });
  }
  return links.length ? links : undefined;
}

export function mapSiteSettings(value: unknown): SiteSettings | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const name = asString(value['name']);
  const brandHandle = asString(value['brandHandle']);
  const emails = asStringArray(value['emails']);
  const socialLinks = mapSocialLinks(value['socialLinks']);
  if (!name || !brandHandle || !emails || !socialLinks) {
    return undefined;
  }
  return {name, brandHandle, emails, socialLinks};
}

export function mapProfile(value: unknown): ProfileContent | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const imageUrl = asString(value['imageUrl']);
  const role = mapLocalizedString(value['role']);
  const pitch = mapLocalizedString(value['pitch']);
  const paragraphs = mapLocalizedList(value['paragraphs']);
  const focusAreas = mapLocalizedStringList(value['focusAreas']);
  if (!imageUrl || !role || !pitch || !paragraphs || !focusAreas) {
    return undefined;
  }
  return {imageUrl, role, pitch, paragraphs, focusAreas};
}

function mapFeatures(value: unknown): ProjectFeature[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const features: ProjectFeature[] = [];
  for (const item of value) {
    if (!isRecord(item)) {
      continue;
    }
    const id = asString(item['id']);
    const icon = asString(item['icon']);
    const title = mapLocalizedString(item['title']);
    const description = mapLocalizedString(item['description']);
    if (!id || !icon || !title || !description) {
      continue;
    }
    features.push({id, icon, title, description});
  }
  return features;
}

function mapGallery(value: unknown): ProjectGalleryItem[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const gallery: ProjectGalleryItem[] = [];
  for (const item of value) {
    if (!isRecord(item)) {
      continue;
    }
    const id = asString(item['id']);
    const imageUrl = asString(item['imageUrl']);
    const title = mapLocalizedString(item['title']);
    const caption = mapLocalizedString(item['caption']);
    if (!id || !imageUrl || !title || !caption) {
      continue;
    }
    gallery.push({id, imageUrl, title, caption});
  }
  return gallery;
}

function mapDetail(value: unknown): ProjectDetail | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const summary = mapLocalizedString(value['summary']);
  const role = mapLocalizedString(value['role']);
  const duration = mapLocalizedString(value['duration']);
  const team = mapLocalizedString(value['team']);
  const year = asString(value['year']);
  const client = mapLocalizedString(value['client']);
  const body = mapLocalizedList(value['body']);
  if (!summary || !role || !duration || !team || !year || !client || !body) {
    return undefined;
  }
  return {
    summary,
    role,
    duration,
    team,
    year,
    client,
    body,
    features: mapFeatures(value['features']),
    gallery: mapGallery(value['gallery'])
  };
}

function projectIdFromDoc(value: Record<string, unknown>): string | undefined {
  const slug = value['slug'];
  if (isRecord(slug)) {
    return asString(slug['current']);
  }
  return asString(value['id']);
}

export function mapProject(value: unknown): Project | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  const id = projectIdFromDoc(value);
  const title = asString(value['title']);
  const description = mapLocalizedString(value['description']);
  const technologies = asStringArray(value['technologies']);
  const imageUrl = asString(value['imageUrl']);
  const sortOrder = asNumber(value['sortOrder']);
  const detail = mapDetail(value['detail']);
  if (!id || !title || !description || !technologies || !imageUrl || sortOrder === undefined || !detail) {
    return undefined;
  }
  return {
    id,
    title,
    description,
    technologies,
    technologyIconUrls: asStringArray(value['technologyIconUrls']) ?? [],
    repositoryUrl: asString(value['repositoryUrl']),
    demoUrl: asString(value['demoUrl']),
    imageUrl,
    featured: asBoolean(value['featured']) ?? false,
    sortOrder,
    detail
  };
}

export function mapProjects(value: unknown): Project[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .map((item) => mapProject(item))
    .filter((item): item is Project => !!item)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Merge CMS editorial slice (site/profile/projects) over local fallback for the rest.
 */
export function mergeCmsSlice(
  local: PortfolioContent,
  remote: {site?: SiteSettings; profile?: ProfileContent; projects?: Project[]}
): PortfolioContent {
  return {
    ...local,
    site: remote.site ?? local.site,
    profile: remote.profile ?? local.profile,
    projects: remote.projects && remote.projects.length > 0 ? remote.projects : local.projects
  };
}
