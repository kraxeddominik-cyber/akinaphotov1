"use client";

import { motion } from "framer-motion";

interface GalleryCTAProps {
  title?: string;
  description?: string;
}

export default function GalleryCTA({
  title = "Let's create something exceptional.",
  description = "Have an idea for a photoshoot? Let's turn it into a visual story.",
}: GalleryCTAProps) {
  return (
    <section className="border-t border-white/10 bg-[#090909] px-6 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-neutral-500">
          Start a project
        </p>

        <h2 className="mt-6 text-4xl font-light leading-tight text-white md:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-7 max-w-xl leading-8 text-neutral-400">
          {description}
        </p>

        <a
          href="/#contact"
          className="group mt-12 inline-flex items-center gap-4 border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
        >
          Contact Me

          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}