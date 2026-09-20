"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface GalleryHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function GalleryHero({
  title,
  subtitle,
  image,
}: GalleryHeroProps) {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Background */}

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}

      <div className="relative z-20 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-8xl font-light uppercase tracking-[0.35em] text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-gray-300 text-lg tracking-[0.15em]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.8 }}
          className="mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 uppercase tracking-[0.3em] text-sm text-white transition duration-500 hover:bg-white hover:text-black"
          >
            <ArrowLeft size={18} />
            Home
          </Link>
        </motion.div>

      </div>

    </section>
  );
}