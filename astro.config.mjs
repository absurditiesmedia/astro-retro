// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import customTheme from 'shiki/dist/themes/tokyo-night.mjs';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
  // https://shiki.style/themes

export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
    shikiConfig: {
      theme: customTheme,
    },
  },

});
