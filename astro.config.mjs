import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// Load environment variables
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const sanityProjectId = process.env.PUBLIC_SANITY_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID || 'k9f2u0i2';
const sanityDataset = process.env.PUBLIC_SANITY_DATASET || env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  site: 'https://tinydotdotart.github.io',
  output: 'static',

  integrations: [
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      studioBasePath: process.env.NODE_ENV === 'development' ? '/admin' : undefined,
      useCdn: false,
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});