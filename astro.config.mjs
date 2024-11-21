// @ts-check
import customTheme from 'shiki/dist/themes/tokyo-night.mjs';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
// https://shiki.style/themes
export default defineConfig({
  site: 'http://absurditiesmedia.com',
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
