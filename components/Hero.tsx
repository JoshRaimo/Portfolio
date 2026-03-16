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
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 relative"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Greeting */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">Hi, I&apos;m</p>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Josh Raimo
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10">
          Software Engineer
        </p>

        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://github.com/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll-down arrow */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.a
          href="#about"
          className="text-slate-400 hover:text-slate-200 transition-colors inline-flex"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, 6, 0],
          }}
          transition={{
            opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
