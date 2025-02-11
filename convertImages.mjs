import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

// Define your image directories
const directories = [
  "public/about",
  "public/home",
  "public/home-1",
  "public/portfolio",
  "public",
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️ Warning: Directory ${dir} does not exist. Skipping...`);
    return;
  }

  fs.readdirSync(dir).forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    if ([".jpg", ".jpeg", ".png", ".svg"].includes(ext)) {
      const inputPath = path.join(dir, file);
      const outputWebP = path.join(dir, `${path.basename(file, ext)}.webp`);
      const outputAvif = path.join(dir, `${path.basename(file, ext)}.avif`);

      sharp(inputPath)
        .toFormat("webp")
        .toFile(outputWebP)
        .then(() => console.log(`✅ Converted: ${file} → WebP`))
        .catch((err) => console.error(`❌ WebP Error: ${file}`, err));

      sharp(inputPath)
        .toFormat("avif")
        .toFile(outputAvif)
        .then(() => console.log(`✅ Converted: ${file} → AVIF`))
        .catch((err) => console.error(`❌ AVIF Error: ${file}`, err));
    }
  });
});

console.log("✅ Images converted to WebP & AVIF!");
