import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

/**
 * Projects - Displays project cards in a responsive grid.
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
          Projects
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Full-stack applications built with modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
