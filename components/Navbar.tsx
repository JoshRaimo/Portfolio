/**
 * Navbar - Fixed top navigation bar.
 * Responsive layout with links; can be extended in later steps.
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="/" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">
          Josh Raimo
        </a>

        {/* Navigation links - placeholder for future sections */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}
