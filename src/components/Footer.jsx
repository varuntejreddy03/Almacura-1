import { Link } from 'react-router-dom';
import { Mail, Phone, Star, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const googleReviewsUrl = 'https://www.google.com/search?q=Almacura+Institute+Hyderabad+Google+Reviews';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About Almacura', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Blog', path: '/blog' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Clinical Programs', path: '/programs' },
      { name: 'Patient FAQs', path: '/faq' },
      { name: 'Sitemap', path: '/sitemap' }
    ]
  },
  {
    title: 'Core Specialties',
    links: [
      { name: 'Integrative Medicine', path: '/integrative-medicine' },
      { name: 'Healthspan Optimization', path: '/healthspan-optimization' },
      { name: 'Functional Gynaecology', path: '/functional-gynaecology' },
      { name: 'Longevity Protocols', path: '/longevity' },
      { name: 'Diagnostics', path: '/diagnostics' },
      { name: 'Nutrition', path: '/nutrition' }
    ]
  },
  {
    title: 'Therapies',
    links: [
      { name: 'HBOT Oxygen Therapy', path: '/therapies/hbot' },
      { name: 'EECP Therapy', path: '/therapies/eecp' },
      { name: 'HIFEM Pelvic Chair', path: '/therapies/hifem' },
      { name: 'HIFU Women Wellness', path: '/therapies/hifu' },
      { name: 'PRP Therapy', path: '/therapies/prp' },
      { name: 'DSCB Pain Management', path: '/therapies/dscb' },
      { name: 'Regenerative Yoga', path: '/therapies/yoga' },
      { name: 'All Therapies', path: '/therapies' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr_1fr] gap-12">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img
                  src="/logo.png"
                  alt="ALMACURA - All Paths to Vitality"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-cormorant text-2xl font-bold text-white leading-none">ALMACURA</p>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.28em] mt-2">All Paths to Vitality</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Institute of Integrative Medicine, Healthspan Optimization & Functional Gynaecology.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com/almacura" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://instagram.com/almacuravitality" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://linkedin.com/company/almacura" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://youtube.com/@almacura" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all" aria-label="YouTube">
                <Youtube size={14} />
              </a>
              <a href="https://twitter.com/almacura" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all" aria-label="X (Twitter)">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-white/70 hover:text-brand-teal transition-colors text-[13px] tracking-wide inline-flex min-h-0"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-dm font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Clinical Support
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919966030085" className="font-medium text-white hover:text-brand-teal transition-colors">
                    +91 9966030085
                  </a>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase mt-1">Phone & WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <a href="mailto:info@almacura.in" className="hover:text-brand-teal transition-colors font-medium">
                  info@almacura.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-brand-teal mt-1 flex-shrink-0" />
                <span>ALMACURA, Nightingale Hospital, X Road, Nagarjuna Sagar Rd, Saidabad, Hyderabad 500059</span>
              </li>
              <li className="pt-2">
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 hover:border-brand-teal/30 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={10} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </span>
                    <span className="text-[10px] font-dm font-bold text-white uppercase tracking-widest group-hover:text-brand-teal transition-colors">
                      Google Reviews
                    </span>
                  </span>
                  <ExternalLink size={14} className="text-white/40 group-hover:text-brand-teal transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linktree / Connect With Us */}
        <div className="border-t border-white/5 pt-10 mt-12">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 border border-white/10 rounded-2xl p-8">
            <img
              src="/linktree-qr.jpeg"
              alt="ALMACURA Linktree QR Code"
              className="w-28 h-28 object-contain rounded-xl flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-dm font-bold text-white text-sm uppercase tracking-widest mb-2">Connect With Us</h4>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Scan the QR code or visit our official links page to access our social media profiles, updates, and important online resources.
              </p>
              <a
                href="https://linktr.ee/nightingalehospital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-teal text-white text-xs font-dm font-bold uppercase tracking-widest rounded-full hover:bg-brand-blue transition-all"
              >
                Open Links <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 mt-8">
          <p className="text-white/30 text-[10px] leading-relaxed uppercase tracking-widest text-center max-w-4xl mx-auto">
            <span className="text-white/50 block mb-2">Clinical Disclaimer</span>
            Almacura therapies are integrative and supportive protocols. They are not a replacement for conventional medical diagnostics or treatments prescribed by your primary physician. Results vary by biological profile. Always consult our medical team for individual suitability.
          </p>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/20 text-[10px] font-dm tracking-[0.3em] uppercase">
              &copy; {new Date().getFullYear()} ALMACURA INSTITUTE. CLINICAL EXCELLENCE SINCE 1994.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/privacy" className="text-white/30 hover:text-white transition-colors text-[9px] uppercase tracking-[0.2em] font-dm">Privacy</Link>
              <Link to="/terms" className="text-white/30 hover:text-white transition-colors text-[9px] uppercase tracking-[0.2em] font-dm">Terms</Link>
              <Link to="/disclaimer" className="text-white/30 hover:text-white transition-colors text-[9px] uppercase tracking-[0.2em] font-dm">Disclaimer</Link>
              <Link to="/sitemap" className="text-white/30 hover:text-white transition-colors text-[9px] uppercase tracking-[0.2em] font-dm">Sitemap</Link>
            </div>
          </div>
          <span className="text-white/10 text-[9px] tracking-[0.3em] uppercase text-center">
            India's Leading Integrative Medicine Network
          </span>
        </div>
      </div>
    </footer>
  );
}
