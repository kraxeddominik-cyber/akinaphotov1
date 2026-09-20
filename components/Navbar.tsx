"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "portfolio", "about", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        <Link
          href="#home"
          className="text-lg font-light tracking-[0.45em] text-white transition duration-300 hover:text-gray-300"
        >
          AKINAPHOTO
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-xs uppercase tracking-[0.35em] text-gray-300 transition duration-300 hover:text-white"
            >
              {link.name}

              <span
                className={`absolute -bottom-3 left-0 h-[1px] bg-white transition-all duration-500 ${
                  active === link.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}