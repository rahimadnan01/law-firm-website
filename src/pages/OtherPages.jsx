import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { testimonials, blogPosts } from '../data/index.js';
import { SectionLabel, GoldDivider, FadeIn, TestimonialCard, BlogCard, PageHero, ConsultationCTA } from '../components/ui/index.jsx';

// ─── Testimonials Page ────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Syed & Associates</title>
        <meta name="description" content="Read what clients say about Attorney Imran Syed — immigration, family law, corporate, and overseas Pakistani legal services." />
      </Helmet>
      <PageHero label="What Clients Say" title="Testimonials" subtitle="Real results. Real clients. Hear directly from those Attorney Syed has served." />
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.08}>
                <TestimonialCard t={t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}

// ─── Blog Index ───────────────────────────────────────────────────────────────
export function Blog() {
  return (
    <>
      <Helmet>
        <title>Legal Insights & Blog | Syed & Associates</title>
        <meta name="description" content="Immigration law updates, business law guidance, and legal insights for Pakistani-American communities from Attorney Imran Syed." />
      </Helmet>
      <PageHero label="Legal Insights" title="The Firm Blog" subtitle="Practical legal guidance on immigration, business, family law, and overseas Pakistani legal matters." />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}

// ─── Blog Detail ──────────────────────────────────────────────────────────────
export function BlogDetail() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="font-display text-navy-900 text-3xl mb-4">Article not found</p>
          <a href="/blog" className="text-gold-500 font-sans text-sm">← Back to blog</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Syed & Associates</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <PageHero label={post.category} title={post.title} subtitle={`${post.date} · ${post.readTime}`} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="prose prose-slate max-w-none font-sans">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Understanding the legal landscape in this area requires careful attention to both federal regulations and state-specific rules. Attorney Syed's practice has encountered and resolved numerous cases involving these exact circumstances.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The most important step clients can take is seeking qualified legal counsel early. Many complications arise not from the underlying legal issues themselves, but from initial procedural missteps that compound over time.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about your specific situation, we encourage you to schedule a consultation with Attorney Syed to receive personalized guidance tailored to your circumstances.
              </p>
            </div>
            <div className="mt-10 p-6 bg-slate-50 border border-slate-200">
              <p className="text-xs text-slate-400 font-sans italic">
                This article is for informational purposes only and does not constitute legal advice. Consult with a qualified attorney for guidance on your specific situation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <ConsultationCTA />
    </>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Syed & Associates</title>
        <meta name="description" content="Contact Attorney Imran Syed for immigration, family law, corporate, and overseas Pakistani legal matters. Phone, email, WhatsApp available." />
      </Helmet>
      <PageHero label="Get in Touch" title="Contact the Firm" subtitle="Reach Attorney Syed via phone, email, or WhatsApp for prompt and confidential assistance." />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-display text-navy-900 text-3xl mb-4">How Can We Help?</h2>
              <GoldDivider className="mb-8" />
              {sent ? (
                <div className="bg-navy-900 border border-gold-600/20 p-10 text-center">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mx-auto mb-5 text-gold-400">
                    ✓
                  </div>
                  <h3 className="font-display text-white text-2xl mb-3">Message Received</h3>
                  <p className="text-slate-400 font-sans">We will respond within one business day. For urgent matters, call or WhatsApp us directly.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-600 text-xs font-sans tracking-wide mb-2">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handle} className="w-full border border-slate-200 focus:border-gold-400 outline-none px-4 py-3 text-sm font-sans text-navy-900 transition-colors" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-sans tracking-wide mb-2">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={handle} className="w-full border border-slate-200 focus:border-gold-400 outline-none px-4 py-3 text-sm font-sans text-navy-900 transition-colors" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-600 text-xs font-sans tracking-wide mb-2">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handle} className="w-full border border-slate-200 focus:border-gold-400 outline-none px-4 py-3 text-sm font-sans text-navy-900 transition-colors" placeholder="+1 (212) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-sans tracking-wide mb-2">Legal Matter</label>
                      <select name="subject" value={form.subject} onChange={handle} className="w-full border border-slate-200 focus:border-gold-400 outline-none px-4 py-3 text-sm font-sans text-navy-900 bg-white transition-colors">
                        <option value="">Select a practice area</option>
                        <option>Immigration Law</option>
                        <option>Family Law</option>
                        <option>Corporate Law</option>
                        <option>Contract Drafting</option>
                        <option>Property Disputes</option>
                        <option>Visa Assistance</option>
                        <option>Overseas Pakistani Services</option>
                        <option>Business Registration</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-sans tracking-wide mb-2">Brief Description *</label>
                    <textarea name="message" required value={form.message} onChange={handle} rows={5} className="w-full border border-slate-200 focus:border-gold-400 outline-none px-4 py-3 text-sm font-sans text-navy-900 transition-colors resize-none" placeholder="Briefly describe your legal matter…" />
                  </div>
                  <p className="text-slate-400 text-xs font-sans italic">All communications are confidential and protected by attorney-client privilege.</p>
                  <button type="submit" className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-sans font-semibold text-sm tracking-wide transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact info */}
          <FadeIn delay={0.1} className="space-y-6">
            {[
              { icon: Phone, label: 'Phone', lines: ['+1 (212) 555-0100', 'Mon–Fri, 9 AM – 6 PM EST'], href: 'tel:+12125550100' },
              { icon: Mail, label: 'Email', lines: ['info@syedlaw.com', 'We respond within 24 hours'], href: 'mailto:info@syedlaw.com' },
              { icon: MessageCircle, label: 'WhatsApp', lines: ['+1 (212) 555-0100', 'Available for overseas clients'], href: 'https://wa.me/12125550100' },
              { icon: MapPin, label: 'Office', lines: ['350 Fifth Avenue, Suite 4200', 'New York, NY 10118'], href: null },
            ].map(({ icon: Icon, label, lines, href }) => (
              <div key={label} className="border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 border border-gold-300 flex items-center justify-center">
                    <Icon size={15} className="text-gold-500" />
                  </div>
                  <span className="text-navy-900 font-display text-lg">{label}</span>
                </div>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    {lines.map((l, i) => <p key={i} className={`text-sm font-sans ${i === 0 ? 'text-gold-500' : 'text-slate-400'}`}>{l}</p>)}
                  </a>
                ) : (
                  lines.map((l, i) => <p key={i} className={`text-sm font-sans ${i === 0 ? 'text-slate-600' : 'text-slate-400'}`}>{l}</p>)
                )}
              </div>
            ))}

            <div className="bg-navy-900 border border-gold-600/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={15} className="text-gold-500" />
                <span className="text-white font-display text-lg">Office Hours</span>
              </div>
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between text-slate-400"><span>Monday – Friday</span><span className="text-white">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between text-slate-400"><span>Saturday</span><span className="text-white">10:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between text-slate-400"><span>Sunday</span><span className="text-slate-500">Closed</span></div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-slate-100 h-48 flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <MapPin size={24} className="text-slate-400 mx-auto mb-2" />
                <p className="text-slate-400 text-xs font-sans">350 Fifth Avenue, Suite 4200</p>
                <p className="text-slate-400 text-xs font-sans">New York, NY 10118</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 text-xs font-sans mt-2 block">View on Google Maps →</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// ─── Book Consultation ────────────────────────────────────────────────────────
export function BookConsultation() {
  return (
    <>
      <Helmet>
        <title>Book a Consultation | Syed & Associates</title>
        <meta name="description" content="Schedule a confidential consultation with Attorney Imran Syed. Available for immigration, corporate, family law, and overseas Pakistani legal matters." />
      </Helmet>
      <PageHero label="Schedule a Meeting" title="Book a Consultation" subtitle="Select a time that works for you. Consultations available in English and Urdu." />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { step: '01', title: 'Choose a Time', desc: 'Select an available slot using the scheduler below.' },
                { step: '02', title: 'Describe Your Matter', desc: 'Briefly outline your legal situation when prompted.' },
                { step: '03', title: 'Meet with Attorney Syed', desc: 'Receive personalized legal guidance — in English or Urdu.' },
              ].map((s) => (
                <div key={s.step} className="text-center border border-slate-200 p-7">
                  <div className="text-gold-400 font-display text-4xl mb-3">{s.step}</div>
                  <h3 className="font-display text-navy-900 text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Calendly placeholder */}
            <div className="border border-gold-400/30 bg-slate-50 p-12 text-center">
              <div className="w-16 h-16 border border-gold-300 flex items-center justify-center mx-auto mb-5">
                <Clock size={24} className="text-gold-500" />
              </div>
              <h3 className="font-display text-navy-900 text-2xl mb-3">Scheduling Calendar</h3>
              <p className="text-slate-500 font-sans mb-6 max-w-md mx-auto">
                Replace this block with a Calendly embed. Add your Calendly inline embed widget here with your scheduling link.
              </p>
              <code className="block bg-slate-200 text-slate-600 text-xs font-mono p-4 rounded mb-6 text-left max-w-lg mx-auto">
                {`<!-- Calendly inline widget -->\n<div class="calendly-inline-widget" \n  data-url="https://calendly.com/YOUR_USERNAME"\n  style="min-width:320px;height:700px;">\n</div>`}
              </code>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-sans font-semibold text-sm tracking-wide transition-colors"
              >
                Set Up Calendly →
              </a>
            </div>

            {/* Consultation notes */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="border border-slate-200 p-6">
                <h4 className="font-display text-navy-900 text-lg mb-3">What to Prepare</h4>
                <ul className="space-y-2 text-slate-500 text-sm font-sans">
                  {['A brief summary of your legal issue', 'Relevant dates and timelines', 'Any documents or notices received', 'Questions you want answered'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold-500 mt-0.5">·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-slate-200 p-6">
                <h4 className="font-display text-navy-900 text-lg mb-3">Consultation Details</h4>
                <ul className="space-y-2 text-slate-500 text-sm font-sans">
                  {['Flat consultation fee — no surprises', '45-minute initial consultation', 'Available via Zoom, phone, or in-person', 'English and Urdu available'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold-500 mt-0.5">·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────
export function PrivacyPolicy() {
  return (
    <>
      <Helmet><title>Privacy Policy | Syed & Associates</title></Helmet>
      <PageHero label="Legal" title="Privacy Policy" subtitle={`Last updated: June 1, 2025`} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-10 font-sans text-slate-600 leading-relaxed">
          {[
            { title: '1. Information We Collect', body: 'We collect information you provide directly, including your name, email address, phone number, and details about your legal matter when you submit a contact form or book a consultation. We may also collect technical information such as IP address and browser type through standard web analytics.' },
            { title: '2. How We Use Your Information', body: 'Information you provide is used solely to respond to your inquiry, schedule consultations, and provide legal services. We do not sell, rent, or share your personal information with third parties for marketing purposes.' },
            { title: '3. Attorney-Client Privilege', body: 'Communications submitted through this website that relate to legal matters may be protected by attorney-client privilege once an attorney-client relationship is established. Submitting a contact form does not, by itself, create an attorney-client relationship.' },
            { title: '4. Data Security', body: 'We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.' },
            { title: '5. Cookies', body: 'This website may use cookies and similar tracking technologies for analytics and performance purposes. You can control cookie settings through your browser preferences.' },
            { title: '6. Contact Us', body: 'For questions about this Privacy Policy, contact us at: info@syedlaw.com or 350 Fifth Avenue, Suite 4200, New York, NY 10118.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-display text-navy-900 text-xl mb-3">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ─── Legal Disclaimer ─────────────────────────────────────────────────────────
export function LegalDisclaimer() {
  return (
    <>
      <Helmet><title>Legal Disclaimer | Syed & Associates</title></Helmet>
      <PageHero label="Legal" title="Legal Disclaimer" subtitle="Important information about the use of this website." />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-10 font-sans text-slate-600 leading-relaxed">
          {[
            { title: 'No Attorney-Client Relationship', body: 'The information on this website is provided for general informational purposes only. Accessing or using this website does not create an attorney-client relationship between you and Syed & Associates or any attorney at the firm.' },
            { title: 'Not Legal Advice', body: 'Nothing on this website constitutes legal advice. Legal advice can only be given by a licensed attorney who has been retained and who has knowledge of your specific facts and circumstances. You should consult a qualified attorney before acting on any information found on this website.' },
            { title: 'No Guarantee of Results', body: 'Past results and client testimonials described on this website are not a guarantee of similar results in future matters. Every legal case is different, and outcomes depend on the specific facts and applicable law.' },
            { title: 'Attorney Advertising', body: 'This website may constitute attorney advertising under applicable state bar rules. Prior results do not guarantee a similar outcome.' },
            { title: 'Jurisdiction', body: 'Attorney Imran A. Syed is licensed to practice law in Texas and New York, and before the United States District Court for the Southern District of New York and the U.S. Court of Appeals for the Second Circuit. This website is not intended to constitute the solicitation of legal business from potential clients in states where such activity is prohibited.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-display text-navy-900 text-xl mb-3">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
