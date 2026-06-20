# Syed & Associates – Law Firm Website

A premium, production-ready law firm website built with **React + Vite + Tailwind CSS**.

## 🚀 Tech Stack
- React 18 + Vite
- Tailwind CSS 3
- React Router DOM 7
- Framer Motion 12
- Lucide React icons
- React Helmet Async (SEO)

## 📁 Folder Structure
```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout wrapper
│   └── ui/            # Reusable UI components (ServiceCard, TestimonialCard, BlogCard, FAQAccordion, etc.)
├── pages/             # All page components (Home, About, PracticeAreas, OtherPages)
├── data/              # All site content (practice areas, testimonials, blog posts, FAQs, attorney info)
└── App.jsx            # Routing setup
```

## ⚙️ Setup
```bash
npm install
npm run dev       # Development server → http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

## 📄 Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Attorney |
| `/practice-areas` | All Practice Areas |
| `/practice-areas/:serviceId` | Individual Service Page |
| `/testimonials` | Testimonials |
| `/blog` | Blog / Legal Insights |
| `/blog/:postId` | Blog Article |
| `/contact` | Contact |
| `/book-consultation` | Book Consultation (Calendly placeholder) |
| `/privacy-policy` | Privacy Policy |
| `/legal-disclaimer` | Legal Disclaimer |

## 📅 Calendly Integration
In `src/pages/OtherPages.jsx` → `BookConsultation` component, replace the placeholder block with your Calendly embed:
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

## 🎨 Design System
- **Colors**: Navy 900 (#0A0F1E), Gold 500 (#C49A2A), Slate backgrounds
- **Display font**: Cormorant Garamond (elegant law firm feel)
- **Body font**: Inter (clean, readable)
- **Animations**: Framer Motion (fade-in on scroll, page transitions, carousel)

## ✏️ Content Editing
All site content is in `src/data/index.js`:
- `practiceAreas` — edit service content, FAQs, benefits
- `testimonials` — add/edit client reviews
- `blogPosts` — add blog posts
- `globalFaqs` — homepage FAQ section
- `attorney` — biography, education, bar admissions

## 🌐 Deployment
Compatible with Vercel, Netlify, or any static hosting:
```bash
npm run build
# Upload /dist folder
```
For client-side routing add a redirect rule:
- **Netlify**: `public/_redirects` → `/* /index.html 200`
- **Vercel**: Automatic (no config needed)
# law-firm-website
