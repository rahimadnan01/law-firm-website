import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronDown, ChevronRight, Star, Calendar, Clock, ArrowRight,
  Plane, Heart, Briefcase, FileText, Home, Stamp, Globe, Building
} from 'lucide-react';

// ─── Icon map for practice areas ─────────────────────────────────────────────
const iconMap = { Plane, Heart, Briefcase, FileText, Home, Stamp, Globe, Building };

// ─── Section Label ────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <p className="text-gold-500 text-xs tracking-[0.25em] uppercase font-sans mb-3">
      {children}
    </p>
  );
}

// ─── Gold Divider ─────────────────────────────────────────────────────────────
export function GoldDivider({ className = '' }) {
  return <div className={`section-divider ${className}`} />;
}

// ─── Fade In Wrapper ──────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
export function ServiceCard({ area }) {
  const Icon = iconMap[area.icon] || Briefcase;
  return (
    <Link to={`/practice-areas/${area.id}`} className="group block">
      <div className="bg-white border border-slate-200 hover:border-gold-400 p-8 h-full transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
        <div className="w-12 h-12 border border-gold-300 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
          <Icon size={22} className="text-gold-500 group-hover:text-navy-900 transition-colors" />
        </div>
        <h3 className="font-display text-navy-900 text-xl mb-3">{area.title}</h3>
        <p className="text-slate-500 text-sm font-sans leading-relaxed mb-5">{area.summary}</p>
        <span className="text-gold-500 text-xs font-sans tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn more <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
export function TestimonialCard({ t }) {
  return (
    <div className="bg-navy-800 border border-gold-600/20 p-8">
      <div className="flex gap-1 mb-5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#D4A943" stroke="none" />
        ))}
      </div>
      <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6 italic">
        "{t.text}"
      </p>
      <div className="flex items-center gap-4 pt-5 border-t border-navy-600">
        <div className="w-10 h-10 bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400 font-display text-sm">
          {t.initials}
        </div>
        <div>
          <div className="text-white font-sans text-sm font-medium">{t.name}</div>
          <div className="text-gold-400/60 text-xs font-sans">{t.location} · {t.service}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Blog Card ────────────────────────────────────────────────────────────────
export function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="bg-white border border-slate-200 hover:border-gold-400 transition-all duration-300 overflow-hidden group-hover:shadow-lg">
        <div className="bg-navy-800 h-40 relative flex items-end p-5">
          <span className="text-gold-400 text-xs font-sans tracking-widest uppercase bg-navy-900/70 px-3 py-1">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-slate-400 text-xs font-sans mb-3">
            <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
          </div>
          <h3 className="font-display text-navy-900 text-xl leading-snug mb-3 group-hover:text-navy-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm font-sans leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-2 text-gold-500 text-xs font-sans tracking-widest uppercase group-hover:gap-3 transition-all">
            Read article <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
export function FAQAccordion({ faqs, dark = false }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`border transition-colors cursor-pointer ${
            dark
              ? open === i
                ? 'border-gold-600/40 bg-navy-800'
                : 'border-navy-700 bg-navy-800/50 hover:border-navy-600'
              : open === i
              ? 'border-gold-400'
              : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <button
            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`font-display text-lg leading-snug ${dark ? 'text-white' : 'text-navy-900'}`}>
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 mt-1 text-gold-500 transition-transform ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className={`px-6 pb-5 text-sm font-sans leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Consultation CTA Banner ──────────────────────────────────────────────────
export function ConsultationCTA({ title = 'Ready to Discuss Your Legal Matter?', subtitle = 'Schedule a confidential consultation with Attorney Syed today.' }) {
  return (
    <section className="bg-navy-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionLabel>Take the First Step</SectionLabel>
          <h2 className="font-display text-white text-4xl md:text-5xl mb-4">{title}</h2>
          <GoldDivider className="mx-auto my-6" />
          <p className="text-slate-400 font-sans text-lg mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-consultation"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-sans font-semibold text-sm tracking-wide transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-gold-500/40 text-gold-400 hover:border-gold-400 font-sans text-sm tracking-wide transition-colors"
            >
              Contact the Firm
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page Hero ────────────────────────────────────────────────────────────────
export function PageHero({ label, title, subtitle }) {
  return (
    <section className="bg-navy-900 pt-40 pb-20 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,169,67,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,67,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label && <SectionLabel>{label}</SectionLabel>}
          <h1 className="font-display text-white text-5xl md:text-6xl leading-tight mb-5">{title}</h1>
          <GoldDivider className="mx-auto my-6" />
          {subtitle && <p className="text-slate-400 font-sans text-lg leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
