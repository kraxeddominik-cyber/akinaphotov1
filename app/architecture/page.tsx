import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/app/gallery";

export const metadata: Metadata = {
  title: "Architecture Photography | AKINAPHOTO",
  description:
    "Architecture photography by AKINAPHOTO. Form, geometry, light and timeless design.",
};

export default function ArchitecturePage() {
  const images =
    getGalleryImages("architecture");

  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Architecture"
        subtitle="Form. Light. Geometry."
        image="/images/architecture/hero.jpg"
      />

      <GalleryGrid
        images={images}
        category="Architecture"
      />

      <GalleryCTA
        title="Architecture deserves a different perspective."
        description="From modern structures to timeless interiors, let's capture design, light and atmosphere with precision."
      />

      <Footer />
    </main>
  );
}