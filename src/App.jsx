import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Founder'));
const Programs = lazy(() => import('./pages/Programs'));
const Therapies = lazy(() => import('./pages/Therapies'));
const FunctionalGynaecology = lazy(() => import('./pages/FunctionalGynaecology'));
const IntegrativeMedicine = lazy(() => import('./pages/IntegrativeMedicine'));
const HealthspanOptimization = lazy(() => import('./pages/HealthspanOptimization'));
const Longevity = lazy(() => import('./pages/Longevity'));
const Diagnostics = lazy(() => import('./pages/Diagnostics'));
const Nutrition = lazy(() => import('./pages/Nutrition'));
const Founder = lazy(() => import('./pages/Founder'));
const Team = lazy(() => import('./pages/Team'));
const ForDoctors = lazy(() => import('./pages/ForDoctors'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Contact = lazy(() => import('./pages/Contact'));
const TherapyDetail = lazy(() => import('./pages/TherapyDetail'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="min-h-[70vh] bg-brand-beige pt-40 flex items-start justify-center">
      <div className="h-12 w-12 rounded-full border border-brand-teal/20 border-t-brand-teal animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const anchor = decodeURIComponent(hash.slice(1));
    window.requestAnimationFrame(() => {
      const element = document.getElementById(anchor);
      if (!element) {
        window.scrollTo(0, 0);
        return;
      }

      const headerOffset = 128;
      const targetTop = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-beige min-h-screen selection:bg-brand-teal/20 selection:text-brand-navy">
        <Navbar />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/clinical-programs" element={<Programs />} />
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/therapies/:slug" element={<TherapyDetail />} />
            <Route path="/functional-gynaecology" element={<FunctionalGynaecology />} />
            <Route path="/integrative-medicine" element={<IntegrativeMedicine />} />
            <Route path="/healthspan-optimization" element={<HealthspanOptimization />} />
            <Route path="/longevity" element={<Longevity />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/team" element={<Team />} />
            <Route path="/meet-our-specialists" element={<Team />} />
            <Route path="/for-doctors" element={<ForDoctors />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
