import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Macro Photography | AKINAPHOTO",
  description:
    "Macro photography by AKINAPHOTO. A curated collection focused on detail, texture and the hidden beauty of small subjects.",
};

export default function MacroPage() {
  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Macro"
        subtitle="Tiny details. Extraordinary world."
        image="/images/macro/hero.jpg"
      />

      <GalleryGrid
        folder="macro"
        count={8}
      />

      <GalleryCTA
        title="Discover beauty in the smallest details."
        description="Macro photography reveals a world that often goes unnoticed. Let's create something unique together."
      />

      <Footer />
    </main>
  );
}