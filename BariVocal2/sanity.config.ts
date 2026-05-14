import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// ✅ ここを直す
import schemaTypes from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'vocal-cms-2',

  projectId: 'tgv066pc',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
