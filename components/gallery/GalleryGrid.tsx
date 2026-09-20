"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "@/components/gallery/Lightbox";

interface GalleryGridProps {
  folder: string;
  count: number;
}

export default function GalleryGrid({
  folder,
  count,
}: GalleryGridProps) {
  // Automatyczne generowanie tablicy zdjęć na podstawie folderu i liczby (np. /images/weddings/1.jpg)
  const images = Array.from({ length: count }, (_, index) => `/images/${folder}/${index + 1}.jpg`);
  const category = folder;

  const [currentImage, setCurrentImage] =
    useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setCurrentImage(null);
  }, []);

  const previousImage = useCallback(() => {
    setCurrentImage((current) => {
      if (current === null) return null;

      return current === 0
        ? images.length - 1
        : current - 1;
    });
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentImage((current) => {
      if (current === null) return null;

      return current === images.length - 1
        ? 0
        : current + 1;
    });
  }, [images.length]);

  return (
    <>
      <section
        id="gallery"
        className="bg-[#090909] px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-16 text-center md:mb-24"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-neutral-500">
              Gallery
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-wide text-white md:text-6xl">
              Selected Work
            </h2>

            <div className="mx-auto mt-8 h-px w-12 bg-white/30" />
          </motion.div>

          {images.length > 0 ? (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {images.map((image, index) => (
                <motion.button
                  key={image}
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(
                      index * 0.04,
                      0.3
                    ),
                  }}
                  onClick={() =>
                    setCurrentImage(index)
                  }
                  className="group relative mb-5 block w-full break-inside-avoid cursor-zoom-in overflow-hidden bg-neutral-900 text-left"
                  aria-label={`Open ${category} photograph ${
                    index + 1
                  }`}
                >
                  <img
                    src={image}
                    alt={`${category} photography ${
                      index + 1
                    }`}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                  <div className="pointer-events-none absolute bottom-5 right-5 translate-y-2 text-[10px] uppercase tracking-[0.35em] text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/80">
                    View
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-neutral-500">
              No photographs yet.
            </div>
          )}

        </div>
      </section>

      <Lightbox
        images={images}
        current={currentImage}
        onClose={closeLightbox}
        onPrev={previousImage}
        onNext={nextImage}
      />
    </>
  );
}