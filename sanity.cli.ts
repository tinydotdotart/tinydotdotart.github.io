// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'k9f2u0i2',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  },
  deployment: {
    appId: 'x7v239a30xotmabwcuwjnykx',
  },
});