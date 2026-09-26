"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const portfolio = [
  {
    title: "Automotive",
    subtitle: "Speed • Design • Emotion",
    image: "/images/automotive/1.JPG",
    href: "/automotive",
  },
  {
    title: "Macro",
    subtitle: "Tiny • Details • Nature",
    image: "/images/macro/1.jpg",
    href: "/macro",
  },
  {
    title: "Architecture",
    subtitle: "Form • Light • Geometry",
    image: "/images/architecture/1.jpg",
    href: "/architecture",
  },
  {
    title: "Portraits",
    subtitle: "Character • Emotion • Identity",
    image: "/images/portraits/1.jpg",
    href: "/portraits",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      id="portfolio"
      className="bg-[#090909] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

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
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-16 text-center md:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-neutral-500">
            Featured Work
          </p>

          <h2 className="mt-5 text-4xl font-light text-white md:text-6xl">
            Selected Stories
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-400">
            A selection of photography focused on
            emotion, detail, design and timeless
            visual storytelling.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {portfolio.map(
            (item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={item.href}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[500px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-[620px]"
                    />

                    <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50" />

                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                        Explore
                      </p>

                      <h3 className="mt-3 text-3xl font-light text-white md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm tracking-wide text-white/70">
                        {item.subtitle}
                      </p>

                      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white">
                        View Gallery

                        <span className="transition-transform duration-500 group-hover:translate-x-2">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>

      </div>
    </section>
  );
}