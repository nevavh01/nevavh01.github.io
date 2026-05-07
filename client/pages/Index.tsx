import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Star, Globe, ShoppingCart, Settings, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    icon: <Globe className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "Web Design",
    description:
      "Content marketing is nothing but offering users value. It is not just about traffic minion customers.",
  },
  {
    icon: <Settings className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "Web Design",
    description:
      "Content marketing is nothing but offering users value. It is not just about traffic minion customers.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-brand" strokeWidth={1.5} />,
    title: "E-Commerce",
    description:
      "Content marketing is nothing but offering users value. It is not just about traffic minion customers.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navbar */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-brand text-brand" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Startup</span>
          </Link>

          {/* Desktop Nav */}
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/about"
              className="bg-brand text-brand-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-amber-500 transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
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
            <Link
              to="/about"
              className="inline-block mt-4 bg-brand text-brand-foreground px-5 py-2 rounded text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row min-h-[420px]">
            {/* Left: Content */}
            <div className="bg-hero-bg flex-1 flex items-center px-8 md:px-14 py-14 md:py-20">
              <div className="max-w-md">
                <p className="text-brand text-xs font-bold tracking-widest uppercase mb-5">
                  We are new but doing great
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                  We give the power<br />back to the user
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  Content marketing is nothing but offering users value.
                  It is not just about traffic minion customers.
                </p>
                <Link
                  to="/services"
                  className="inline-block bg-brand text-brand-foreground px-7 py-3 rounded text-sm font-semibold hover:bg-amber-500 transition-colors"
                >
                  Explore Us
                </Link>
              </div>
            </div>

            {/* Right: Visual placeholder */}
            <div className="hidden md:flex flex-1 bg-gray-200 items-center justify-center relative overflow-hidden">
              {/* Decorative pattern replacing the photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
              <div className="relative z-10 flex flex-col items-center gap-4 opacity-30">
                {/* Sticky notes grid */}
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-sm"
                      style={{
                        backgroundColor:
                          i % 3 === 0
                            ? "#F59E0B"
                            : i % 3 === 1
                            ? "#FCD34D"
                            : "#E5E7EB",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Abstract shapes */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-brand opacity-10" />
              <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full bg-amber-300 opacity-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-white opacity-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex-shrink-0">
              Services we provide
            </h2>
            <p className="text-gray-500 text-sm md:text-base md:ml-8 md:pb-1 max-w-xs">
              not just about traffic minion customers.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-7 flex flex-col gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 w-fit hover:text-brand hover:border-brand transition-colors"
                >
                  Let's Talk
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
