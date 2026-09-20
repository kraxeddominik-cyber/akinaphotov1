"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 bg-[#090909] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gray-500">
            About
          </p>

          <h2
            className={`${playfair.className} text-5xl leading-tight md:text-7xl`}
          >
            Behind the Camera
          </h2>
        </motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] overflow-hidden"
          >
            <Image
              src="/images/about/about.jpg"
              alt="Photographer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`${playfair.className} mb-8 text-4xl leading-tight md:text-5xl`}
            >
              Photography is more than taking pictures.
            </h3>

            <p className="mb-8 text-lg leading-8 text-gray-400">
            I am Akina — a soul storyteller, capturing fleeting moments and preserving them forever.
            Welcome to my artistic realm, where my passion comes to life through every image I create.
            </p>

            <p className="mb-8 text-lg leading-8 text-gray-400">
            I am inspired by the essence of life, the beauty of nature, and the limitless world of motoring — elements that shape and define my creative vision.
            </p>

            <p className="text-lg leading-8 text-gray-400">
            I embrace breaking boundaries, walking my own path, and facing every challenge with courage.
I warmly invite you to create something extraordinary together.
            </p>

            <div className="mt-14">
              <span
                className={`${playfair.className} text-3xl italic text-white/90`}
              >
                — See you behind the lens. Akina
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}