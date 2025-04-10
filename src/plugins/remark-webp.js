import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';
import { visit } from 'unist-util-visit';

const isBuild = process.argv.includes('build');

const IMAGE_DIR = isBuild ?  "dist/optimized-images" : "public/optimized-images";

export default function remarkWebp() {
  return async (tree, file) => {
    const promises = [];

    visit(tree, 'image', (node) => {
      const originalSrc = node.url;
      
      if (!originalSrc.startsWith('/')) return; // Ignore external images
      
      const ext = path.extname(originalSrc);
      const baseName = path.basename(originalSrc, ext);
      const optimizedPath = `/optimized-images/${baseName}.webp`;
      const fullInputPath = path.join(process.cwd(), 'public', originalSrc);
      const fullOutputPath = path.join(process.cwd(), IMAGE_DIR, `${baseName}.webp`);

      // Ensure directory exists
      fs.ensureDirSync(IMAGE_DIR);

      // Convert and save WebP image if it doesn't exist
      if (!fs.existsSync(fullOutputPath)) {
        const promise = sharp(fullInputPath)
          .toFormat('webp')
          .toFile(fullOutputPath)
          .catch((err) => console.error(`Error processing ${originalSrc}:`, err));

        promises.push(promise);
      }

      // Replace Markdown image path with optimized WebP
      node.url = optimizedPath;
    });

    await Promise.all(promises);
  };
}
