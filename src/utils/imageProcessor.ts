import fs from 'fs-extra';
import path from "path";
import sharp from "sharp";

const isBuild = process.argv.includes('build');

const IMAGE_DIR = isBuild ?  "dist/optimized-images" : "public/optimized-images";

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
