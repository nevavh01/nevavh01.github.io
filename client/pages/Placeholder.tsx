import { Link, useLocation } from "react-router-dom";
import { Star, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Placeholder() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const pageName = location.pathname.replace("/", "");
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-brand text-brand" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Startup</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/about"
              className="bg-brand text-brand-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-amber-500 transition-colors"
            >
              Join Us
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-3 text-sm text-gray-700 font-medium border-b border-gray-50 hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
          <Star className="w-8 h-8 fill-brand text-brand" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{displayName}</h1>
        <p className="text-gray-500 max-w-sm mb-8">
          This page is coming soon. Continue prompting to fill in this section's content.
        </p>
        <Link
          to="/"
          className="bg-brand text-brand-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-amber-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-brand text-brand" />
            <span className="font-bold text-gray-900">Startup</span>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Startup. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-gray-500 hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
