/**
 * About - Developer introduction and skill categories.
 * Content based on Joshua Raimo's resume.
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

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-white border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          About
        </h2>

        {/* Introduction - based on resume career summary */}
        <p className="text-slate-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
          I have 4+ years of experience with hands-on full-stack development through
          academic and capstone projects. I build and deploy web applications using
          modern JavaScript frameworks, RESTful APIs, databases, and cloud services.
          I'm comfortable working in Agile environments and delivering features end-to-end.
        </p>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-600 text-sm"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
