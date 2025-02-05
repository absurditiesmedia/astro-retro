---
title: 'About Astro Retro'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 4 2025'
heroImage: '/absurdities_placeholder3.png'
---

Astro retro is a basic theme, it isn't meant to be pretty in the way expectations for the web have developed. It's meant to be pretty in the way they were once imagined. The layouts are meant to be plain as hypertext is a document. this theme is great for informational sites that do not require special blocks for advertisements and such. 

You can create a blog and a podcast. Podcast options are in `/podcast.congfig.json` Although the podcase was adapted from astropod, and I think you'll still find some vestigial code in here that I haven't optimized away. Sorry about that. I keep finding more... I could probably build podcast functionality from the bottom up at this point faster than finding all of it. Whatever, perhaps in a later version. 

All images embedded in markdown and those specified in blog and podcast metadata are run through a preprocessor to convert them to the modern webp format. I may add the ability to configure this to use different formats such as avif in the future, but it's useful enough as is. 

Most configuration is done withing `/src/consts.ts` and `/src/astro.config.mjs` and I expect the next series of updates I will spend focused on SEO. Of which I've been reading social media integration is of great importance. This will be the death of the internet. It should have been RSS. 

Markdown supports code blocks which are themed with shiki. You can set the color scheme in `/astro.config.mjs`.

the following are available:

```
andromeeda.mjs
aurora-x.mjs
ayu-dark.mjs
catppuccin-frappe.mjs
catppuccin-latte.mjs
catppuccin-macchiato.mjs
catppuccin-mocha.mjs
dark-plus.mjs
dracula.mjs
dracula-soft.mjs
everforest-dark.mjs
everforest-light.mjs
github-dark-default.mjs
github-dark-dimmed.mjs
github-dark-high-contrast.mjs
github-dark.mjs
github-light-default.mjs
github-light-high-contrast.mjs
github-light.mjs
houston.mjs
kanagawa-dragon.mjs
kanagawa-lotus.mjs
kanagawa-wave.mjs
laserwave.mjs
light-plus.mjs
material-theme-darker.mjs
material-theme-lighter.mjs
material-theme.mjs
material-theme-ocean.mjs
material-theme-palenight.mjs
min-dark.mjs
min-light.mjs
monokai.mjs
night-owl.mjs
nord.mjs
one-dark-pro.mjs
one-light.mjs
plastic.mjs
poimandres.mjs
red.mjs
rose-pine-dawn.mjs
rose-pine.mjs
rose-pine-moon.mjs
slack-dark.mjs
slack-ochin.mjs
snazzy-light.mjs
solarized-dark.mjs
solarized-light.mjs
synthwave-84.mjs
tokyo-night.mjs
vesper.mjs
vitesse-black.mjs
vitesse-dark.mjs
vitesse-light.mjs
```

Here's an example with javascript.

```javascript
// Convert an image to WebP and return the new path
export async function optimizeImage(originalPath: string): Promise<string> {
  if (!originalPath.startsWith("/")) return originalPath; // Ignore external images

  const ext = path.extname(originalPath);
  const baseName = path.basename(originalPath, ext);
  const optimizedPath = `/optimized-images/${baseName}.webp`;
  const fullInputPath = path.join(process.cwd(), "public", originalPath);
  const fullOutputPath = path.join(process.cwd(), IMAGE_DIR, `${baseName}.webp`);

  // Ensure output directory exists
  fs.ensureDirSync(IMAGE_DIR);

  // Convert image if it doesn't already exist
  if (!fs.existsSync(fullOutputPath)) {
    try {
      await sharp(fullInputPath).toFormat("webp").toFile(fullOutputPath);
    } catch (err) {
      console.error(`Error processing ${originalPath}:`, err);
    }
  }

  return optimizedPath;
}
```

As for the whole site color scheme, I recommend finding a nice palette on [https://coolors.co], and copying it into `/src/styles/global.css` following the way I've demonstrated. You have support for as many as 9 colors, you can choose to map some of them to the same colors for smallet palettes. Use your creativity. I 
intentionally made the default ugly to encourage you to spend the 10 minutes necessary to choose your own color scheme. 

```css
--page-bg: var(--spring-bud);
--text-primary: var(--penn-blue);
--text-bold: var(--dark-purple);
--text-italic: var(--english-violet);
--link-text:var(--yale-blue);
--header-text:var(--yale-blue);
--link-hover:var(--honolulu-blue);
--accent: var(--hot-magenta);
--accent2: var(--imperial-red);
```