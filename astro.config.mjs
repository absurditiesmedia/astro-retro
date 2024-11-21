// @ts-check
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from './src/consts';
import customTheme from 'shiki/dist/themes/tokyo-night.mjs';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

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
  },
});
