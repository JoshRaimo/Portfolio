import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

/**
 * Home page - Landing page with Hero and sections.
 * Each section has an ID for smooth-scroll navigation.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <section
        id="skills"
        className="min-h-[50vh] flex items-center justify-center px-6 py-20 bg-white border-t border-slate-200"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills</h2>
          <p className="text-slate-600">Content coming soon.</p>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-[50vh] flex items-center justify-center px-6 py-20 bg-slate-50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-slate-600">Content coming soon.</p>
        </div>
      </section>
    </main>
  );
}
