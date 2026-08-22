// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
