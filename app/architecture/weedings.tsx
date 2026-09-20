import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wedding Photography | AKINAPHOTO",
  description:
    "Wedding photography by AKINAPHOTO. Authentic emotions, timeless moments and unforgettable stories.",
};

export default function WeddingsPage() {
  return (
    <main className="bg-[#090909]">
      <GalleryHero
        title="Weddings"
        subtitle="Love. Memories. Forever."
        image="/images/weddings/hero.jpg"
      />

      <GalleryCTA
        title="Your story deserves to be remembered."
        description="If you're planning your wedding and looking for natural, timeless photography, I'd love to hear your story."
      />

      <Footer />
    </main>
  );
}