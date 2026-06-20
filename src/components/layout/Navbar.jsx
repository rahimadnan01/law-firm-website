import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Practice Areas',
    to: '/practice-areas',
    sub: [
      { label: 'Immigration Law', to: '/practice-areas/immigration-law' },
      { label: 'Family Law', to: '/practice-areas/family-law' },
      { label: 'Corporate Law', to: '/practice-areas/corporate-law' },
      { label: 'Contract Drafting', to: '/practice-areas/contract-drafting' },
      { label: 'Property Disputes', to: '/practice-areas/property-disputes' },
      { label: 'Visa Assistance', to: '/practice-areas/visa-assistance' },
      { label: 'Overseas Pakistani Services', to: '/practice-areas/overseas-pakistani-services' },
      { label: 'Business Registration', to: '/practice-areas/business-registration' },
    ],
  },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-navy-900 shadow-xl border-b border-gold-600/20'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-gold-600/20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <p className="text-gold-400/70 text-xs tracking-widest uppercase font-sans">
            Serving Pakistani & American Clients Nationwide
          </p>
          <a
            href="tel:+12125550100"
            className="flex items-center gap-2 text-gold-400 hover:text-gold-300 text-xs font-sans tracking-wide transition-colors"
          >
            <Phone size={12} />
            +1 (212) 555-0100
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-gold-400 flex items-center justify-center">
              <Scale size={18} className="text-gold-400" />
            </div>
            <div>
              <div className="font-display text-white font-semibold text-lg leading-none tracking-wide">
                Syed <span className="text-gold-400">&</span> Associates
              </div>
              <div className="text-gold-400/60 text-[9px] tracking-[0.2em] uppercase font-sans mt-0.5">
                Attorneys at Law
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.sub ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-sans tracking-wide transition-colors flex items-center gap-1 ${
                        isActive ? 'text-gold-400' : 'text-slate-200 hover:text-gold-400'
                      }`
                    }
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="opacity-60">
                      <path d="M0 0l5 6 5-6z" />
                    </svg>
                  </NavLink>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 bg-navy-800 border border-gold-600/20 shadow-2xl py-2"
                      >
                        {link.sub.map((s) => (
                          <NavLink
                            key={s.to}
                            to={s.to}
                            className="block px-5 py-2.5 text-sm text-slate-300 hover:text-gold-400 hover:bg-navy-700 font-sans transition-colors"
                          >
                            {s.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-sans tracking-wide transition-colors ${
                      isActive ? 'text-gold-400' : 'text-slate-200 hover:text-gold-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link
              to="/book-consultation"
              className="ml-4 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-sans font-semibold tracking-wide transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900 border-t border-gold-600/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block py-2.5 text-sm font-sans border-b border-navy-700 ${
                        isActive ? 'text-gold-400' : 'text-slate-200'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.sub && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.sub.map((s) => (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          className="block py-2 text-xs text-slate-400 hover:text-gold-400 font-sans"
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/book-consultation"
                className="block mt-4 py-3 text-center bg-gold-500 text-navy-900 text-sm font-sans font-semibold"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
