import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Globe, Users, Award, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { practiceAreas, testimonials, globalFaqs } from '../data/index.js';
import { SectionLabel, GoldDivider, FadeIn, ServiceCard, TestimonialCard, FAQAccordion, ConsultationCTA } from '../components/ui/index.jsx';

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-900 flex items-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,169,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,169,67,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Precision · Integrity · Results
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl xl:text-7xl leading-[1.08] mb-6">
            Legal Excellence
            <br />
            <span className="text-gold-gradient">Without</span>
            <br />
            Compromise
          </h1>
          <GoldDivider className="mb-6" />
          <p className="text-slate-400 font-sans text-lg leading-relaxed mb-10 max-w-xl">
            Serving Pakistani, American, and overseas clients with the precision and discretion of a premier U.S. law firm. Attorney Imran A. Syed brings over twelve years of federal and state legal practice to every case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-consultation"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-sans font-semibold text-sm tracking-wide transition-colors text-center"
            >
              Book a Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/20 text-white hover:border-gold-500/60 hover:text-gold-400 font-sans text-sm tracking-wide transition-colors text-center"
            >
              Contact the Firm
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-6">
            {[
              { n: '12+', label: 'Years of Practice' },
              { n: '1,200+', label: 'Cases Handled' },
              { n: '3', label: 'Bar Admissions' },
              { n: '2', label: 'Languages' },
            ].map(({ n, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-gold-400 text-2xl">{n}</div>
                <div className="text-slate-500 text-xs font-sans tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-600/20" />
            <div className="bg-navy-800 border border-gold-600/20 p-10 relative">
              <h3 className="font-display text-white text-2xl mb-2">Attorney Imran A. Syed</h3>
              <p className="text-gold-400 text-xs tracking-widest uppercase font-sans mb-6">Georgetown Law · 12+ Years Practice</p>
              <div className="space-y-4 mb-8">
                {[
                  'U.S. Immigration Law',
                  'Corporate & Business Law',
                  'Family Law & Divorce',
                  'Pakistani Diaspora Legal Services',
                  'Visa & Consular Processing',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-sans">{area}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-navy-600 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 font-display">
                  IS
                </div>
                <div>
                  <div className="text-white text-sm font-sans font-medium">Consultation Available</div>
                  <div className="text-slate-400 text-xs font-sans">English · Urdu · Punjabi</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const pillars = [
    { icon: Shield, title: 'Direct Attorney Access', desc: 'You work personally with Attorney Syed — not delegated to paralegals or junior associates.' },
    { icon: Globe, title: 'Bilingual Counsel', desc: 'Consultations available in English and Urdu, ensuring complete understanding at every stage.' },
    { icon: Users, title: 'Cultural Fluency', desc: 'Deep understanding of Pakistani legal contexts, documentation standards, and diaspora challenges.' },
    { icon: Award, title: 'Transparent Pricing', desc: 'Fixed-fee arrangements and clear cost estimates before engagement — no billing surprises.' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-14 text-center">
          <SectionLabel>Why Clients Choose Us</SectionLabel>
          <h2 className="font-display text-navy-900 text-4xl md:text-5xl">The Syed Standard</h2>
          <GoldDivider className="mx-auto mt-5" />
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-white border border-slate-200 hover:border-gold-400 transition-colors h-full">
                <div className="w-14 h-14 border border-gold-300 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={24} className="text-gold-500" />
                </div>
                <h3 className="font-display text-navy-900 text-xl mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm font-sans leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Carousel ────────────────────────────────────────────────────
function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const perPage = 3;
  const total = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(idx * perPage, idx * perPage + perPage);

  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2 className="font-display text-white text-4xl md:text-5xl">What Clients Say</h2>
            <GoldDivider className="mt-5" />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIdx((idx - 1 + total) % total)}
              className="w-10 h-10 border border-navy-600 hover:border-gold-600 text-slate-400 hover:text-gold-400 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % total)}
              className="w-10 h-10 border border-navy-600 hover:border-gold-600 text-slate-400 hover:text-gold-400 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </FadeIn>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {visible.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-0.5 transition-all ${i === idx ? 'bg-gold-500 w-8' : 'bg-navy-600 w-4'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Syed & Associates – Premier US Law Firm | Immigration, Corporate & Family Law</title>
        <meta name="description" content="US-based attorney serving Pakistani and American clients in immigration law, family law, corporate law, visa assistance, and overseas Pakistani legal services." />
      </Helmet>

      <Hero />

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-14 text-center">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="font-display text-navy-900 text-4xl md:text-5xl">Practice Areas</h2>
            <GoldDivider className="mx-auto mt-5" />
            <p className="text-slate-500 font-sans mt-5 max-w-2xl mx-auto">
              Comprehensive legal services across the areas that matter most to Pakistani-American families, businesses, and individuals.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <FadeIn key={area.id} delay={i * 0.06}>
                <ServiceCard area={area} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Attorney snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="bg-navy-900 aspect-[4/5] max-w-md flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-24 h-24 bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mx-auto mb-4 text-gold-400 font-display text-3xl">
                  IS
                </div>
                <p className="text-white font-display text-2xl">Imran A. Syed</p>
                <p className="text-gold-400 text-xs tracking-widest uppercase font-sans mt-1">Attorney at Law</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gold-600/20">
                <div className="flex justify-around text-center">
                  <div><div className="text-gold-400 font-display text-2xl">12+</div><div className="text-slate-500 text-xs font-sans">Years</div></div>
                  <div className="w-px bg-navy-700" />
                  <div><div className="text-gold-400 font-display text-2xl">1,200+</div><div className="text-slate-500 text-xs font-sans">Cases</div></div>
                  <div className="w-px bg-navy-700" />
                  <div><div className="text-gold-400 font-display text-2xl">3</div><div className="text-slate-500 text-xs font-sans">Bar Admissions</div></div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SectionLabel>About the Attorney</SectionLabel>
            <h2 className="font-display text-navy-900 text-4xl md:text-5xl mb-4">
              Counsel You Can <br />Count On
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-slate-600 font-sans leading-relaxed mb-4">
              Attorney Imran A. Syed is a U.S.-licensed attorney with over twelve years of practice spanning immigration law, corporate counsel, family law, and cross-border legal services. Born in Lahore and educated at Georgetown University Law Center, he brings a rare combination of cultural fluency and legal expertise.
            </p>
            <p className="text-slate-600 font-sans leading-relaxed mb-8">
              His practice is defined by one principle: every client deserves the same caliber of legal representation regardless of their background or the complexity of their situation.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-navy-800 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 font-sans text-sm tracking-wide transition-colors"
            >
              Full Attorney Biography
            </Link>
          </FadeIn>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="mb-12 text-center">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-display text-navy-900 text-4xl md:text-5xl">Frequently Asked</h2>
            <GoldDivider className="mx-auto mt-5" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQAccordion faqs={globalFaqs} />
          </FadeIn>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
