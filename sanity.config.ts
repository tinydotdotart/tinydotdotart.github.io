import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'TinyDotDotArt Portfolio Admin',

  projectId: (import.meta.env && import.meta.env.PUBLIC_SANITY_PROJECT_ID) || process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: (import.meta.env && import.meta.env.PUBLIC_SANITY_DATASET) || process.env.PUBLIC_SANITY_DATASET || '',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
