import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "k9f2u0i2",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});