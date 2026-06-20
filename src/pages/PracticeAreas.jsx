import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import { practiceAreas } from '../data/index.js';
import { SectionLabel, GoldDivider, FadeIn, ServiceCard, PageHero, FAQAccordion, ConsultationCTA } from '../components/ui/index.jsx';

// ─── All Practice Areas ───────────────────────────────────────────────────────
export function PracticeAreas() {
  return (
    <>
      <Helmet>
        <title>Practice Areas | Syed & Associates</title>
        <meta name="description" content="Comprehensive legal services including immigration law, family law, corporate law, visa assistance, and overseas Pakistani legal services." />
      </Helmet>
      <PageHero
        label="Our Expertise"
        title="Practice Areas"
        subtitle="Eight specialized practice areas serving Pakistani, American, and overseas clients with precision and cultural understanding."
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <FadeIn key={area.id} delay={i * 0.07}>
                <ServiceCard area={area} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}

// ─── Individual Service Page ───────────────────────────────────────────────────
export function ServiceDetail() {
  const { serviceId } = useParams();
  const area = practiceAreas.find((a) => a.id === serviceId);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center">
          <p className="font-display text-navy-900 text-3xl mb-4">Practice area not found</p>
          <a href="/practice-areas" className="text-gold-500 font-sans text-sm">← View all practice areas</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{area.title} | Syed & Associates</title>
        <meta name="description" content={area.summary} />
      </Helmet>

      <PageHero label="Practice Area" title={area.title} subtitle={area.tagline} />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-14">
            <FadeIn>
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-display text-navy-900 text-3xl mb-4">About This Practice Area</h2>
              <GoldDivider className="mb-6" />
              <p className="text-slate-600 font-sans leading-relaxed text-lg">{area.overview}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel>Common Challenges</SectionLabel>
              <h2 className="font-display text-navy-900 text-3xl mb-6">Problems We Solve</h2>
              <div className="space-y-3">
                {area.problems.map((p) => (
                  <div key={p} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200">
                    <div className="w-1 h-1 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                    <span className="text-slate-600 font-sans text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="font-display text-navy-900 text-3xl mb-6">How We Help</h2>
              <div className="space-y-3">
                {area.howWeHelp.map((h, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle size={17} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-sans text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 className="font-display text-navy-900 text-3xl mb-6">Common Questions</h2>
              <FAQAccordion faqs={area.faqs} />
            </FadeIn>
          </div>

          {/* Sidebar */}
          <FadeIn delay={0.1} className="space-y-6">
            {/* Benefits card */}
            <div className="bg-navy-900 border border-gold-600/20 p-7">
              <h3 className="font-display text-white text-xl mb-5">Why Choose Our Firm</h3>
              <div className="space-y-4">
                {area.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm font-sans leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gold-500 p-7">
              <h3 className="font-display text-navy-900 text-xl mb-3">Ready to Get Started?</h3>
              <p className="text-navy-800 text-sm font-sans mb-5 leading-relaxed">
                Schedule a confidential consultation with Attorney Syed to discuss your {area.title.toLowerCase()} matter.
              </p>
              <a
                href="/book-consultation"
                className="block w-full py-3 bg-navy-900 text-white text-center text-sm font-sans font-semibold hover:bg-navy-800 transition-colors"
              >
                Book Consultation
              </a>
              <a
                href="https://wa.me/12125550100"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 mt-3 border border-navy-800/20 text-navy-900 text-center text-sm font-sans hover:bg-gold-400 transition-colors"
              >
                WhatsApp the Firm
              </a>
            </div>

            {/* Contact info */}
            <div className="border border-slate-200 p-7 space-y-3">
              <h3 className="font-display text-navy-900 text-lg mb-3">Contact</h3>
              <p className="text-slate-500 text-sm font-sans">+1 (212) 555-0100</p>
              <p className="text-slate-500 text-sm font-sans">info@syedlaw.com</p>
              <p className="text-slate-400 text-xs font-sans mt-2">Mon–Fri: 9 AM – 6 PM · Sat: 10 AM – 2 PM</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationCTA title={`Need Help with ${area.title}?`} subtitle={`Attorney Syed is ready to evaluate your ${area.title.toLowerCase()} matter and advise on the best path forward.`} />
    </>
  );
}
