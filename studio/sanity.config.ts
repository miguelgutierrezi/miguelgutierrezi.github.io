import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

/**
 * Set projectId after creating a project at https://www.sanity.io/manage
 * Dataset stays `production` unless you intentionally use another.
 */
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'xm49cfca'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'miguelgutierrez-portfolio',
  title: 'Miguel Gutiérrez — Portfolio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
