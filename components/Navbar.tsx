"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Navbar - Centered sticky nav with pill style.
 */
const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-2 backdrop-blur-md border border-white/10 shadow-lg">
          {/* Desktop: centered links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 rounded-full text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-2 mx-auto max-w-xs overflow-hidden transition-all duration-300 ease-out rounded-2xl ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-2 px-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl py-2.5 px-4 text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
