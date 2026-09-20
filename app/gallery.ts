import fs from "fs";
import path from "path";

const supportedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
];

export function getGalleryImages(folder: string): string[] {
  const directory = path.join(
    process.cwd(),
    "public",
    "images",
    folder
  );

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => {
      const extension = path.extname(file).toLowerCase();

      const isImage =
        supportedExtensions.includes(extension);

      const isHero =
        path.parse(file).name.toLowerCase() === "hero";

      return isImage && !isHero;
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map(
      (file) =>
        `/images/${folder}/${encodeURIComponent(file)}`
    );
}