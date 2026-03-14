import AnimatedSection from "@/components/AnimatedSection";

/**
 * Skills - Skill categories grid (Languages, Cloud & Tools, Databases, Methodologies).
 */
const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (React, Node.js, Express.js)", "Python", "Java", "HTML", "CSS (Tailwind)"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Amazon Web Services (S3)", "Postman", "GitHub", "Git", "VS Code"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Methodologies",
    skills: ["Agile", "Scrum", "Unit Testing", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 text-center">
            Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/60 p-6 hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-slate-600 dark:text-slate-400 text-sm">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
