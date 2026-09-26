import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/app/gallery";

export const metadata: Metadata = {
  title: "Portrait Photography | AKINAPHOTO",
  description:
    "Portrait photography by AKINAPHOTO. Authentic character, emotion and timeless imagery.",
};

export default function PortraitsPage() {
  const images = getGalleryImages("portraits");

  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Portraits"
        subtitle="Character. Emotion. Identity."
        image="/images/portraits/hero.jpg"
      />

      <GalleryGrid
        images={images}
        category="Portraits"
      />

      <GalleryCTA
        title="Every portrait tells a different story."
        description="Let's create natural and timeless portraits that capture personality, character and genuine emotion."
      />

      <Footer />
    </main>
  );
}