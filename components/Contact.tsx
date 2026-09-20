
"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section
  id="contact"
  className="bg-[#090909] py-32 px-6"
>
      <div className="mx-auto max-w-4xl text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          className="uppercase tracking-[0.45em] text-gray-500 text-sm"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity:0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="mt-6 text-5xl md:text-6xl text-white font-light leading-tight"
        >
          Let's create
          <br />
          something beautiful.
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:.2 }}
          className="mt-8 text-gray-400 leading-8"
        >
          Whether you're planning a wedding,
          portrait session or automotive shoot,
          I'd love to hear your story.
        </motion.p>

        <a
          href="mailto:hello@akinaphoto.com"
          className="
          inline-block
          mt-14
          border
          border-white
          px-10
          py-5
          tracking-[0.35em]
          uppercase
          text-sm
          transition-all
          duration-500
          hover:bg-white
          hover:text-black
          "
        >
          Contact Me
        </a>

      </div>

      <div className="mx-auto mt-28 grid max-w-6xl gap-12 md:grid-cols-3">

        <div className="text-center">

          <MdOutlineMail
            className="mx-auto text-4xl text-white"
          />

          <h3 className="mt-5 text-white text-xl">
            Email
          </h3>

          <p className="mt-3 text-gray-400">
            akinaphoto@gmail.com
          </p>

        </div>

        <div className="text-center">

          <FaInstagram
            className="mx-auto text-4xl text-white"
          />

          <h3 className="mt-5 text-white text-xl">
            Instagram
          </h3>

          <p className="mt-3 text-gray-400">
            @akinaphoto
          </p>

        </div>

        <div className="text-center">

          <HiOutlineLocationMarker
            className="mx-auto text-4xl text-white"
          />

          <h3 className="mt-5 text-white text-xl">
            Location
          </h3>

          <p className="mt-3 text-gray-400">
            Poland · Europe
          </p>

        </div>

      </div>

    </section>
  );
}