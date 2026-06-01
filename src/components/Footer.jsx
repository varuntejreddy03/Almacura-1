import { Link } from 'react-router-dom';
import { Mail, Phone, Star, MapPin, ExternalLink, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

const googleReviewsUrl = 'https://share.google/4stVSowu4gN7VPjFy';
const linktreeUrl = 'https://linktr.ee/almacura.health';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/almacura.health', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@ALMACURAHEALTH', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/almacura.health', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/AlmacuraHealth', label: 'X / Twitter' },
];

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
      { name: 'DSCB Pain Portal Block', path: '/therapies/dscb' },
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
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all"
                  aria-label={label}>
                  <Icon size={14} />
                </a>
              ))}
              {/* WhatsApp */}
              <a href="https://wa.me/919966030085" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all"
                aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              {/* Threads */}
              <a href="https://www.threads.com/@almacura.health" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all"
                aria-label="Threads">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="https://www.pinterest.com/almacurahealth" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-teal hover:bg-white/10 hover:border-brand-teal/30 transition-all"
                aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
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
                <span>ALMACURA @ Nightingale Hospital, X Roads, Nagarjuna Sagar Ring Rd, near Santoshnagar, Saidabad, Hyderabad 500059</span>
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
                href={linktreeUrl}
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


