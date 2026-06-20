import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, ExternalLink, X } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-gold-600/20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 border border-gold-400 flex items-center justify-center">
              <Scale size={18} className="text-gold-400" />
            </div>
            <div>
              <div className="font-display text-white font-semibold text-lg leading-none">
                Syed <span className="text-gold-400">&</span> Associates
              </div>
              <div className="text-gold-400/50 text-[9px] tracking-[0.2em] uppercase font-sans mt-0.5">
                Attorneys at Law
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm font-sans leading-relaxed mb-6">
            A premier U.S. law firm serving Pakistani, American, and overseas clients with precision, integrity, and cultural understanding.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 border border-navy-600 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-600 transition-colors" title="LinkedIn">
              <ExternalLink size={16} />
            </a>
            <a href="#" aria-label="X / Twitter" className="w-9 h-9 border border-navy-600 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-600 transition-colors">
              <X size={16} />
            </a>
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="font-display text-white text-lg mb-5">Practice Areas</h4>
          <ul className="space-y-2.5">
            {['Immigration Law', 'Family Law', 'Corporate Law', 'Contract Drafting', 'Property Disputes', 'Visa Assistance', 'Overseas Pakistani Services', 'Business Registration'].map((area) => (
              <li key={area}>
                <Link
                  to={`/practice-areas/${area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`}
                  className="text-slate-400 hover:text-gold-400 text-sm font-sans transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-gold-600/40 group-hover:bg-gold-400 transition-colors flex-shrink-0" />
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-white text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: 'About the Firm', to: '/about' },
              { label: 'Testimonials', to: '/testimonials' },
              { label: 'Legal Insights', to: '/blog' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Book Consultation', to: '/book-consultation' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Legal Disclaimer', to: '/legal-disclaimer' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-400 hover:text-gold-400 text-sm font-sans transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-gold-600/40 group-hover:bg-gold-400 transition-colors flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white text-lg mb-5">Contact</h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+12125550100" className="flex items-start gap-3 text-slate-400 hover:text-gold-400 transition-colors group">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold-600 group-hover:text-gold-400" />
                <div className="text-sm font-sans">
                  <div>+1 (212) 555-0100</div>
                  <div className="text-slate-500 text-xs mt-0.5">Mon–Fri, 9 AM – 6 PM EST</div>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:info@syedlaw.com" className="flex items-start gap-3 text-slate-400 hover:text-gold-400 transition-colors group">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-gold-600 group-hover:text-gold-400" />
                <span className="text-sm font-sans">info@syedlaw.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-600" />
                <div className="text-sm font-sans">
                  <div>350 Fifth Avenue, Suite 4200</div>
                  <div>New York, NY 10118</div>
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-6 p-4 border border-gold-600/20 bg-navy-800/50">
            <div className="text-gold-400 text-xs font-sans tracking-widest uppercase mb-1">Office Hours</div>
            <div className="text-slate-400 text-sm font-sans">Monday – Friday: 9:00 AM – 6:00 PM</div>
            <div className="text-slate-400 text-sm font-sans">Saturday: 10:00 AM – 2:00 PM</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs font-sans">
            © {year} Syed & Associates, Attorneys at Law. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-sans text-center">
            Attorney advertising. Prior results do not guarantee similar outcomes.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-gold-400 text-xs font-sans transition-colors">Privacy Policy</Link>
            <Link to="/legal-disclaimer" className="text-slate-500 hover:text-gold-400 text-xs font-sans transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
