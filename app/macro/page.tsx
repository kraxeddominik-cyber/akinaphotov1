import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/app/gallery";

export const metadata: Metadata = {
  title: "Macro Photography | AKINAPHOTO",
  description:
    "Macro photography by AKINAPHOTO. Discover extraordinary details hidden in the smallest subjects.",
};

export default function MacroPage() {
  const images = getGalleryImages("macro");

  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Macro"
        subtitle="Tiny details. Extraordinary world."
        image="/images/macro/hero.jpg"
      />

      <GalleryGrid
        images={images}
        category="Macro"
      />

      <GalleryCTA
        title="Discover beauty in the smallest details."
        description="Macro photography reveals a world that often goes unnoticed. Let's create something unique together."
      />

      <Footer />
    </main>
  );
}