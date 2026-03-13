import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

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
        className="min-h-[50vh] flex items-center justify-center px-6 py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
      >
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Skills</h2>
          <p className="text-slate-600 dark:text-slate-400">Content coming soon.</p>
        </AnimatedSection>
      </section>
      <Contact />
    </main>
  );
}
