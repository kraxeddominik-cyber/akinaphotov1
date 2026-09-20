"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image + Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "url('/images/Hero/Hero.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />

      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.055]"
        style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle at 0 0,
              transparent 0,
              rgba(255,255,255,0.8) 1px,
              transparent 2px
            )
          `,
          backgroundSize: "5px 5px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mb-6 text-[10px] uppercase tracking-[0.55em] text-white/60 sm:text-xs"
        >
          Photography Portfolio
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-5xl
            font-light
            tracking-[0.16em]
            text-white
            sm:text-6xl
            md:text-8xl
            lg:text-9xl
          "
        >
          AKINAPHOTO
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 56 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mx-auto mt-8 h-px bg-white/50"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.85,
          }}
          className="
            mx-auto
            mt-8
            max-w-xl
            text-sm
            font-light
            leading-7
            tracking-[0.08em]
            text-white/70
            sm:text-base
          "
        >
          Capturing timeless stories through light, emotion and detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.15,
          }}
          className="mt-12"
        >
          <a
            href="#portfolio"
            className="
              group
              inline-flex
              items-center
              gap-5
              border
              border-white/35
              px-8
              py-4
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-white
              hover:bg-white
              hover:text-black
              sm:text-xs
            "
          >
            Explore Portfolio

            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.7,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-4
          text-white/50
          transition-colors
          duration-300
          hover:text-white
        "
      >
        <span className="text-[9px] uppercase tracking-[0.45em]">
          Scroll
        </span>

        <div className="relative h-12 w-px overflow-hidden bg-white/20">
          <motion.div
            className="absolute left-0 top-0 h-5 w-px bg-white"
            animate={{
              y: [-20, 48],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.a>
    </section>
  );
}