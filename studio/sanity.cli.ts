import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'xm49cfca'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
/** Hosted Studio URL: https://<studioHost>.sanity.studio */
const studioHost = process.env.SANITY_STUDIO_HOST || 'miguel-gutierrez-cv'

export default defineCliConfig({
  api: {projectId, dataset},
  studioHost,
})
