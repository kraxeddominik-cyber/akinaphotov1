import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";
import { getGalleryImages } from "@/app/gallery";

export const metadata: Metadata = {
  title: "Automotive Photography | AKINAPHOTO",
  description:
    "Automotive photography by AKINAPHOTO. Design, speed and emotion captured through photography.",
};

export default function AutomotivePage() {
  const images =
    getGalleryImages("automotive");

  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Automotive"
        subtitle="Speed. Design. Emotion."
        image="/images/automotive/hero.jpg"
      />

      <GalleryGrid
        images={images}
        category="Automotive"
      />

      <GalleryCTA
        title="Let's create something exceptional."
        description="Have a car, brand or automotive project you would like to photograph? Let's turn it into a visual story."
      />

      <Footer />
    </main>
  );
}