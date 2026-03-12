/**
 * Hero - Landing section with intro, title, and social links.
 * Displays name, role, and buttons linking to GitHub and LinkedIn.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12"
    >
      <div className="max-w-2xl mx-auto text-center">
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
          <a
            href="https://github.com/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/joshraimo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
