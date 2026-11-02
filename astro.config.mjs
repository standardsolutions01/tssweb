// Astro configuration — see README.md for an explanation of the project.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The live domain. Used for canonical URLs, sitemap and social previews.
  site: 'https://thestandardsolutions.com',
  // Every page URL ends with "/" (e.g. /about/), matching the brief.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Keep all CSS in files (no inline <style>) so our strict
    // Content-Security-Policy in public/_headers can block inline code.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Never inline scripts or files into the HTML — the Content-Security-Policy
      // only allows our own script FILES, not inline code.
      assetsInlineLimit: 0,
    },
  },
  integrations: [
    sitemap({
      // Keep the 404 page out of the sitemap.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
