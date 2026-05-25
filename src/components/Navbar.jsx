import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    subLinks: [
      { name: 'Institute Overview', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Patient FAQs', path: '/faq' },
      { name: 'Blog', path: '/blog' },
      { name: 'Testimonials', path: '/testimonials' }
    ]
  },
  {
    name: 'Therapies',
    path: '/therapies',
    subLinks: [
      { name: 'HBOT Oxygen Therapy', path: '/therapies/hbot' },
      { name: 'EECP Therapy', path: '/therapies/eecp' },
      { name: 'HIFEM Pelvic Chair', path: '/therapies/hifem' },
      { name: 'HIFU Women Wellness', path: '/therapies/hifu' },
      { name: 'PRP Therapy', path: '/therapies/prp' },
      { name: 'DSCB Pain Management', path: '/therapies/dscb' },
      { name: 'Regenerative Yoga', path: '/therapies/yoga' },
      { name: 'View All Therapies', path: '/therapies' }
    ]
  },
  { 
    name: 'Programs', 
    path: '/programs',
    subLinks: [
      { name: 'Detox Protocol', path: '/programs#detox' },
      { name: 'Energy Revitalization', path: '/programs#energy' },
      { name: 'Longevity Strategy', path: '/longevity' },
      { name: 'View All Programs', path: '/programs' }
    ]
  },
  { name: 'Healthspan', path: '/healthspan-optimization' },
  { 
    name: 'Functional Gynaecology', 
    path: '/functional-gynaecology',
    subLinks: [
      { name: 'Pelvic Health (HIFEM)', path: '/functional-gynaecology#pelvic' },
      { name: 'Tissue Tonification (HIFU)', path: '/functional-gynaecology#tissue' },
      { name: 'Hormonal Optimization', path: '/functional-gynaecology#hormonal' },
      { name: 'Clinical Overview', path: '/functional-gynaecology' }
    ]
  },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const desktopLinks = navLinks.filter((link) => link.name !== 'Contact');
  const isActive = (link) => {
    const linkPath = link.path.split('#')[0];
    return (
      location.pathname === linkPath ||
      Boolean(link.subLinks?.some((sub) => location.pathname === sub.path.split('#')[0]))
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
      >
        {/* Top Bar - Administrative & Mission */}
        <div className="bg-brand-navy text-white/60 py-2 px-8 hidden sm:block border-b border-brand-teal/20 pointer-events-auto shadow-sm shadow-brand-navy/5">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            <span className="text-[9px] font-dm font-bold tracking-[0.3em] uppercase">Institute of Integrative Medicine, Healthspan Optimization & Functional Gynaecology</span>
            <div className="flex gap-6 items-center">
              <span className="text-[9px] font-dm font-bold tracking-[0.3em] uppercase text-brand-teal">Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className={`transition-all duration-700 ${scrolled ? 'pt-2' : 'pt-4'}`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <div 
              className={`flex items-center justify-between transition-all duration-700 rounded-full px-8 py-4 ${
                scrolled 
                  ? 'bg-white/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(11,110,110,0.12)] border border-brand-teal/10' 
                  : 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm'
              }`}
            >
              {/* Logo - Left */}
              <Link to="/" className="flex items-center gap-5 group flex-shrink-0">
                <div className="h-10 w-10 rounded-full border border-brand-navy/10 overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/logo.png"
                    alt="ALMACURA"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col border-l border-brand-navy/10 pl-5">
                  <span className="font-cormorant text-[20px] font-bold tracking-[0.3em] text-brand-navy leading-none">
                    ALMACURA
                  </span>
                </div>
              </Link>

              {/* Nav Links - Desktop Visibility from 'lg' breakpoint */}
              <div className="hidden lg:flex items-center gap-1 lg:gap-3 ml-auto">
                <nav className="flex items-center gap-0.5 lg:gap-1">
                  {desktopLinks.map((link) => {
                    const active = isActive(link);
                    return (
                    <div key={link.path} className="relative group/nav">
                      <Link
                        to={link.path}
                        className={`relative font-dm text-[9px] lg:text-[10px] font-bold tracking-[0.18em] uppercase transition-all flex items-center h-10 gap-1 px-2 lg:px-3 rounded-full focus:outline-none ${
                          active ? 'text-brand-teal bg-brand-teal/5' : 'text-brand-navy/60 hover:text-brand-teal hover:bg-brand-teal/5'
                        }`}
                      >
                        {link.name}
                        {link.subLinks && <ChevronDown size={10} className="group-hover/nav:rotate-180 transition-transform duration-300 opacity-50" />}
                        {active && (
                          <motion.span
                            layoutId="activeDesktopNav"
                            className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-brand-teal"
                          />
                        )}
                      </Link>

                      {/* Dropdown Menu - Enhanced visibility and separation */}
                      {link.subLinks && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-[100]">
                          <div className="bg-white border border-brand-teal/15 rounded-2xl p-2 shadow-[0_30px_100px_rgba(11,35,63,0.15)] min-w-[260px]">
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="flex items-center justify-between gap-4 px-5 py-3.5 font-dm text-[10px] font-bold tracking-[0.15em] text-brand-navy hover:text-brand-teal hover:bg-brand-teal/5 rounded-xl transition-all uppercase"
                              >
                                <span>{sub.name}</span>
                                <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                  })}
                </nav>
                
                {location.pathname !== '/contact' && (
                  <Link to="/contact" className="ml-2">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brand-navy text-white px-6 lg:px-8 py-3 rounded-full font-dm font-bold text-[9px] lg:text-[10px] tracking-[0.25em] uppercase shadow-xl shadow-brand-navy/10 hover:shadow-brand-teal/20 hover:bg-brand-teal transition-all flex items-center justify-center min-w-[130px] lg:min-w-[150px]"
                    >
                      CONTACT
                    </motion.button>
                  </Link>
                )}
              </div>

              {/* Mobile Menu Button - Appears below 'lg' */}
              <div className="lg:hidden flex items-center h-10">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileMenuOpen}
                  className="p-3 rounded-full hover:bg-brand-teal/5 text-brand-navy transition-colors pointer-events-auto"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="fixed inset-0 z-[60] xl:hidden"
          >
            {/* Ultra-High-Fidelity Backdrop */}
            <div className="absolute inset-0 bg-white/98 backdrop-blur-[40px]"></div>
            
            <div className="relative h-full flex flex-col justify-between px-8 py-14 z-10 overflow-hidden">
              {/* Close Button Inside Menu */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="absolute top-6 right-6 p-4 text-brand-navy hover:text-brand-teal transition-colors"
              >
                <X size={32} />
              </button>

              {/* Header inside menu */}
              <div className="flex flex-col items-center">
                <span className="font-dm text-[9px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-3">Institute Menu</span>
                <div className="w-10 h-[1.5px] bg-brand-teal/20"></div>
              </div>

              {/* Main Links Container - Scrollable if needed */}
              <div className="w-full flex flex-col items-center gap-1.5 overflow-y-auto pt-4 pb-8 no-scrollbar">
                {navLinks.map((link, index) => {
                  const linkIsActive = isActive(link);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: shouldReduceMotion ? 0 : index * 0.04,
                        duration: 0.3
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative inline-block py-2 font-cormorant transition-all duration-300 ${
                          linkIsActive
                            ? 'text-brand-teal font-bold italic'
                            : 'text-brand-navy hover:text-brand-teal'
                        }`}
                        style={{ fontSize: '26px' }}
                      >
                        {link.name}
                        {linkIsActive && (
                          <motion.div 
                            layoutId="activeTabMobile"
                            className="absolute -bottom-1 left-2 right-2 h-[1px] bg-brand-teal"
                          />
                        )}
                      </Link>

                      {/* Mobile Sub-links */}
                      {link.subLinks && (
                        <div className="flex flex-col items-center gap-2 mt-1 mb-4">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="font-dm text-[10px] font-bold tracking-[0.2em] text-brand-navy/40 uppercase hover:text-brand-teal py-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA & Contact Bar */}
              <div className="flex flex-col items-center gap-6 mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-brand-navy text-white font-dm font-bold uppercase tracking-[0.2em] text-[10px] rounded-full shadow-xl shadow-brand-navy/10 transition-all"
                    >
                      CONTACT
                    </motion.button>
                  </Link>
                  <div className="flex flex-col items-center gap-2 mt-6 opacity-40 font-dm text-[8px] uppercase tracking-widest font-bold text-brand-navy">
                    <span>Direct: +91 99660 30085</span>
                    <span>info@almacura.in</span>
                  </div>
                </motion.div>

                {/* Decorative Brand Mark - Reduced scale */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.02 }}
                  transition={{ delay: 0.6 }}
                  className="font-cormorant text-5xl font-bold uppercase tracking-[0.4em] text-brand-navy leading-none pointer-events-none select-none"
                >
                  ALMA
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
