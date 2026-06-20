import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import { PracticeAreas, ServiceDetail } from './pages/PracticeAreas.jsx';
import {
  Testimonials,
  Blog,
  BlogDetail,
  Contact,
  BookConsultation,
  PrivacyPolicy,
  LegalDisclaimer,
} from './pages/OtherPages.jsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="practice-areas/:serviceId" element={<ServiceDetail />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-consultation" element={<BookConsultation />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
        </Route>
      </Routes>
    </>
  );
}
