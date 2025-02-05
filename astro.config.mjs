// @ts-check
import { SITE_URL } from './src/consts';
import customTheme from 'shiki/dist/themes/dracula.mjs';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import remarkWebp from './src/plugins/remark-webp.js';

// https://astro.build/config
// https://shiki.style/themes
export default defineConfig({
  site: SITE_URL,
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
    mdx(),
    sitemap(),
    ],
  markdown: {
    shikiConfig: {
      theme: customTheme,
    },
    remarkPlugins: [remarkWebp],
  },
});
