/**
 * Seed Sanity from `src/app/content/portfolio.content.ts`.
 *
 * Default: create missing docs only (match collections by slug, singletons by _type).
 * Does not overwrite the smoke-test project title or other existing editorial edits.
 *
 *   cd studio
 *   npx sanity exec seed/seed-from-local.ts --with-user-token
 *
 * Optional:
 *   --dry-run     print planned creates, no writes
 *   --replace     createOrReplace even if a matching slug/_type already exists
 */
import {getCliClient} from 'sanity/cli'
import {LOCAL_PORTFOLIO_CONTENT} from '../../src/app/content/portfolio.content'

const PLACEHOLDER_IMAGE =
  'https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg'

type Loc = {es: string; en: string}

const client = getCliClient({apiVersion: '2025-01-01'})
const replace = process.argv.includes('--replace')
const dryRun = process.argv.includes('--dry-run')

function key(prefix: string, id: string, index = 0): string {
  const safe = `${prefix}-${id}-${index}`.replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 64)
  return safe || `${prefix}-${index}`
}

function loc(value: Loc, typeName: 'localizedString' | 'localizedText') {
  return {_type: typeName, es: value.es, en: value.en}
}

function locList(value: {es: string[]; en: string[]}) {
  return {_type: 'localizedStringList', es: value.es, en: value.en}
}

function buildDocuments() {
  const content = LOCAL_PORTFOLIO_CONTENT
  const docs: Array<{_id: string; _type: string; [key: string]: unknown}> = []

  docs.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: content.site.name,
    brandHandle: content.site.brandHandle,
    emails: content.site.emails,
    socialLinks: content.site.socialLinks.map((link, index) => ({
      _key: key('social', link.id, index),
      id: link.id,
      label: link.label,
      url: link.url,
      ...(link.iconUrl ? {iconUrl: link.iconUrl} : {}),
    })),
  })

  docs.push({
    _id: 'profile',
    _type: 'profile',
    imageUrl: content.profile.imageUrl,
    role: loc(content.profile.role, 'localizedString'),
    pitch: loc(content.profile.pitch, 'localizedText'),
    paragraphs: content.profile.paragraphs.map((p, index) => ({
      _key: key('para', String(index), index),
      ...loc(p, 'localizedText'),
    })),
    focusAreas: locList(content.profile.focusAreas),
  })

  docs.push({
    _id: 'navigation',
    _type: 'navigation',
    items: content.navigation.map((item, index) => ({
      _key: key('nav', item.id, index),
      id: item.id,
      label: loc(item.label, 'localizedString'),
    })),
  })

  for (const project of content.projects) {
    docs.push({
      _id: `project-${project.id}`,
      _type: 'project',
      slug: {_type: 'slug', current: project.id},
      title: project.title,
      description: loc(project.description, 'localizedText'),
      technologies: project.technologies,
      technologyIconUrls: project.technologyIconUrls,
      imageUrl: project.imageUrl,
      featured: project.featured,
      sortOrder: project.sortOrder,
      ...(project.repositoryUrl ? {repositoryUrl: project.repositoryUrl} : {}),
      ...(project.demoUrl ? {demoUrl: project.demoUrl} : {}),
      detail: {
        summary: loc(project.detail.summary, 'localizedText'),
        role: loc(project.detail.role, 'localizedString'),
        duration: loc(project.detail.duration, 'localizedString'),
        team: loc(project.detail.team, 'localizedString'),
        year: project.detail.year,
        client: loc(project.detail.client, 'localizedString'),
        body: project.detail.body.map((p, index) => ({
          _key: key('body', project.id, index),
          ...loc(p, 'localizedText'),
        })),
        features: project.detail.features.map((f, index) => ({
          _key: key('feat', f.id, index),
          id: f.id,
          icon: f.icon,
          title: loc(f.title, 'localizedString'),
          description: loc(f.description, 'localizedText'),
        })),
        gallery: project.detail.gallery.map((g, index) => ({
          _key: key('gal', g.id, index),
          id: g.id,
          imageUrl: g.imageUrl,
          title: loc(g.title, 'localizedString'),
          caption: loc(g.caption, 'localizedText'),
        })),
      },
    })
  }

  for (const item of content.experience) {
    docs.push({
      _id: `experience-${item.id}`,
      _type: 'experience',
      slug: {_type: 'slug', current: item.id},
      company: item.company,
      role: loc(item.role, 'localizedString'),
      duration: loc(item.duration, 'localizedString'),
      responsibilities: locList(item.responsibilities),
      imageUrl: item.imageUrl.trim() || PLACEHOLDER_IMAGE,
      sortOrder: item.sortOrder,
    })
  }

  for (const item of content.courses) {
    docs.push({
      _id: `course-${item.id}`,
      _type: 'course',
      slug: {_type: 'slug', current: item.id},
      title: loc(item.title, 'localizedString'),
      institution: item.institution,
      date: loc(item.date, 'localizedString'),
      imageUrl: item.imageUrl,
      sortOrder: item.sortOrder,
      ...(item.credentialUrl ? {credentialUrl: item.credentialUrl} : {}),
    })
  }

  return docs
}

async function existingKeys() {
  const data = await client.fetch<{
    site: number
    profile: number
    navigation: number
    projectSlugs: string[]
    experienceSlugs: string[]
    courseSlugs: string[]
  }>(`{
    "site": count(*[_type == "siteSettings"]),
    "profile": count(*[_type == "profile"]),
    "navigation": count(*[_type == "navigation"]),
    "projectSlugs": *[_type == "project"].slug.current,
    "experienceSlugs": *[_type == "experience"].slug.current,
    "courseSlugs": *[_type == "course"].slug.current
  }`)
  return {
    site: data.site > 0,
    profile: data.profile > 0,
    navigation: data.navigation > 0,
    projectSlugs: new Set(data.projectSlugs.filter(Boolean)),
    experienceSlugs: new Set(data.experienceSlugs.filter(Boolean)),
    courseSlugs: new Set(data.courseSlugs.filter(Boolean)),
  }
}

function shouldCreate(
  doc: {_id: string; _type: string; slug?: {current?: string}},
  existing: Awaited<ReturnType<typeof existingKeys>>,
): boolean {
  if (replace) {
    return true
  }
  if (doc._type === 'siteSettings') {
    return !existing.site
  }
  if (doc._type === 'profile') {
    return !existing.profile
  }
  if (doc._type === 'navigation') {
    return !existing.navigation
  }
  const slug = doc.slug?.current
  if (doc._type === 'project') {
    return Boolean(slug) && !existing.projectSlugs.has(slug!)
  }
  if (doc._type === 'experience') {
    return Boolean(slug) && !existing.experienceSlugs.has(slug!)
  }
  if (doc._type === 'course') {
    return Boolean(slug) && !existing.courseSlugs.has(slug!)
  }
  return false
}

async function run() {
  const docs = buildDocuments()
  const existing = await existingKeys()
  const toCreate = docs.filter((doc) => shouldCreate(doc, existing))
  const skipped = docs.filter((doc) => !shouldCreate(doc, existing))

  console.log(
    [
      `dataset ${client.config().dataset} / ${client.config().projectId}`,
      `planned create: ${toCreate.length}`,
      `skip (already in Sanity): ${skipped.length}`,
      replace ? 'mode: --replace' : 'mode: skip existing',
      dryRun ? 'DRY RUN' : 'WRITE',
    ].join(' | '),
  )
  for (const doc of toCreate) {
    const slug = typeof doc['slug'] === 'object' && doc['slug'] && 'current' in (doc['slug'] as object)
      ? (doc['slug'] as {current: string}).current
      : ''
    console.log(`  + ${doc._type} ${doc._id}${slug ? ` (${slug})` : ''}`)
  }
  for (const doc of skipped) {
    console.log(`  · skip ${doc._type} ${doc._id}`)
  }

  if (dryRun || toCreate.length === 0) {
    return
  }

  const tx = client.transaction()
  for (const doc of toCreate) {
    tx.createOrReplace(doc)
  }
  await tx.commit()
  console.log(`Committed ${toCreate.length} document(s). Publish is immediate on production dataset.`)
}

run().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
