"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Variants for smooth, fluid animations - separate transitions for enter vs hover.
 */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  hover: {
    y: -6,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * ProjectCard - Reusable card with hover animations and smooth button effects.
 */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex flex-col rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-zinc-600 transition-[box-shadow,border-color] duration-300 ease-out"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-30px" }}
      custom={index}
    >
      {/* Project image - links to case study */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block shrink-0 w-full aspect-video overflow-hidden bg-slate-200 dark:bg-zinc-800"
        aria-label={`${project.title} screenshot`}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: project.imagePosition ?? "50% 50%",
          }}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-zinc-800 dark:border dark:border-zinc-700 text-slate-700 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 dark:bg-zinc-800 border border-zinc-700 dark:border-zinc-600 text-slate-100 dark:text-slate-100 text-sm font-medium rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-700 hover:text-white transition-colors"
            >
              View Case Study
            </Link>
          </motion.div>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-white text-zinc-900 dark:text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-200 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
