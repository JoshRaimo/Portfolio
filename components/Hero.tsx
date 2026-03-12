"use client";

import { motion } from "framer-motion";

/**
 * Hero - Landing section with intro, title, and social links.
 * Fade-in animation and smooth button hover/tap effects.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Greeting */}
        <p className="text-lg text-slate-600 mb-2">Hi, I&apos;m</p>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          Josh Raimo
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-slate-600 mb-10">
          Software Engineer
        </p>

        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://github.com/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
