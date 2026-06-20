import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, BookOpen, Gavel, Globe } from 'lucide-react';
import { attorney } from '../data/index.js';
import { SectionLabel, GoldDivider, FadeIn, PageHero, ConsultationCTA } from '../components/ui/index.jsx';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Attorney Imran Syed | Syed & Associates</title>
        <meta name="description" content="Learn about Attorney Imran A. Syed — Georgetown Law graduate with 12+ years serving Pakistani and American clients in immigration, corporate, and family law." />
      </Helmet>

      <PageHero
        label="The Attorney"
        title="Imran A. Syed"
        subtitle="Georgetown Law · 12+ Years of Federal & State Practice"
      />

      {/* Bio section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-start">
          {/* Photo placeholder */}
          <FadeIn className="lg:col-span-2">
            <div className="bg-navy-900 aspect-[3/4] flex flex-col items-center justify-center relative">
              <div className="w-28 h-28 bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 font-display text-4xl mb-4">
                IS
              </div>
              <p className="text-white font-display text-2xl">Imran A. Syed</p>
              <p className="text-gold-400 text-xs tracking-widest uppercase font-sans mt-1">Attorney at Law</p>
              <div className="absolute bottom-0 left-0 right-0 border-t border-gold-600/20 p-6 space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-sans">
                  <Globe size={13} className="text-gold-500" />
                  Languages: English · Urdu · Punjabi
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-sans">
                  <BookOpen size={13} className="text-gold-500" />
                  Georgetown University Law Center
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-sans">
                  <Gavel size={13} className="text-gold-500" />
                  3 Bar Admissions
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bio text */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <SectionLabel>Biography</SectionLabel>
            <h2 className="font-display text-navy-900 text-4xl md:text-5xl mb-4">Precision. Integrity. Results.</h2>
            <GoldDivider className="mb-8" />
            {attorney.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-600 font-sans leading-relaxed mb-5">{para}</p>
            ))}

            {/* Mission */}
            <div className="mt-8 border-l-2 border-gold-500 pl-6 py-2">
              <p className="text-navy-900 font-display text-xl italic leading-relaxed">
                "{attorney.mission}"
              </p>
              <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mt-3">— Attorney Imran A. Syed</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education & Admissions */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Education */}
          <FadeIn>
            <div className="bg-white border border-slate-200 p-8 h-full">
              <div className="w-10 h-10 border border-gold-300 flex items-center justify-center mb-5">
                <BookOpen size={18} className="text-gold-500" />
              </div>
              <h3 className="font-display text-navy-900 text-2xl mb-5">Education</h3>
              <div className="space-y-5">
                {attorney.education.map((ed) => (
                  <div key={ed.degree} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="text-navy-900 font-sans font-medium text-sm">{ed.degree}</div>
                    <div className="text-slate-500 text-sm font-sans mt-0.5">{ed.school}</div>
                    <div className="text-gold-500 text-xs font-sans mt-0.5">{ed.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bar Admissions */}
          <FadeIn delay={0.1}>
            <div className="bg-white border border-slate-200 p-8 h-full">
              <div className="w-10 h-10 border border-gold-300 flex items-center justify-center mb-5">
                <Gavel size={18} className="text-gold-500" />
              </div>
              <h3 className="font-display text-navy-900 text-2xl mb-5">Bar Admissions</h3>
              <div className="space-y-3">
                {attorney.admissions.map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-gold-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-sans">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Languages & Areas */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-200 p-8 h-full">
              <div className="w-10 h-10 border border-gold-300 flex items-center justify-center mb-5">
                <Globe size={18} className="text-gold-500" />
              </div>
              <h3 className="font-display text-navy-900 text-2xl mb-5">Languages</h3>
              <div className="space-y-3 mb-8">
                {attorney.languages.map((l) => (
                  <div key={l} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-gold-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-sans">{l}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-display text-navy-900 text-2xl mb-5">Serves</h3>
              <div className="space-y-2">
                {['Pakistani Nationals', 'Pakistani-Americans', 'Overseas Pakistanis', 'U.S. Citizens', 'Business Owners', 'Immigrants'].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-gold-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm font-sans">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationCTA title="Work Directly with Attorney Syed" subtitle="Every client receives personal attention from Attorney Syed himself — not a paralegal or junior associate." />
    </>
  );
}
