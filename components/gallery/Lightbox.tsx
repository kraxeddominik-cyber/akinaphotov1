"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: string[];
  current: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  current,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (current === null) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [current, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {current !== null && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Zamknij */}
          <button
            onClick={onClose}
            className="absolute right-8 top-8 text-white transition hover:scale-110"
          >
            <X size={34} />
          </button>

          {/* Poprzednie */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-8 text-white transition hover:scale-110"
          >
            <ChevronLeft size={42} />
          </button>

          {/* Następne */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white transition hover:scale-110"
          >
            <ChevronRight size={42} />
          </button>

          {/* Zdjęcie */}
          <motion.img
            key={images[current]}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Licznik */}
          <div className="absolute bottom-8 text-sm tracking-[0.3em] uppercase text-gray-300">
            {current + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}