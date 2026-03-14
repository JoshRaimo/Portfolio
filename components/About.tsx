import AnimatedSection from "@/components/AnimatedSection";

/**
 * About - Developer introduction.
 * Content based on Joshua Raimo's resume.
 */
export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            About
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I have 4+ years of experience with hands-on full-stack development through
            academic and capstone projects. I build and deploy web applications using
            modern JavaScript frameworks, RESTful APIs, databases, and cloud services.
            I&apos;m comfortable working in Agile environments and delivering features end-to-end.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
