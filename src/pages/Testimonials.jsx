import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import { ExternalLink, Play, Star } from 'lucide-react';

const placeholders = [1, 2, 3, 4, 5, 6];
const googleReviewUrl = 'https://g.page/r/CYtqRXgkH3lWEBM/review';

export default function Testimonials() {
  return (
    <div className="bg-brand-white pt-24">

      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>PATIENT STORIES</SectionLabel>
            <h1 className="font-cormorant text-5xl md:text-7xl text-brand-navy mb-6 italic">
              Testimonials
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Stories and experiences shared by people who have been part of the ALMACURA care journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center justify-between gap-8 rounded-[2rem] border border-brand-teal/15 bg-brand-ice px-8 py-10 shadow-xl shadow-brand-navy/5 hover:border-brand-teal/40 hover:bg-white transition-all"
            >
              <span className="text-center sm:text-left">
                <span className="flex justify-center sm:justify-start gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </span>
                <span className="block font-cormorant text-3xl md:text-4xl text-brand-navy font-bold">
                  Share Your Google Review
                </span>
                <span className="block text-brand-muted text-sm leading-relaxed mt-3 max-w-xl">
                  Your experience helps other patients understand the ALMACURA care journey.
                </span>
              </span>
              <span className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-4 font-dm text-[10px] font-bold uppercase tracking-[0.24em] text-white group-hover:bg-brand-teal transition-colors">
                Write Review <ExternalLink size={14} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="pt-12 pb-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>VIDEO TESTIMONIALS</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl text-brand-navy mb-16">
              Hear From Our Patients
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholders.map((_, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card overflow-hidden hover:border-brand-teal transition-all duration-300 group">
                  {/* Video placeholder — replace src with actual YouTube embed URL */}
                  <div className="relative w-full aspect-video bg-brand-ice flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-teal/10 border-2 border-brand-teal/30 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-all duration-300">
                      <Play size={24} className="text-brand-teal group-hover:text-white ml-1 transition-colors" />
                    </div>
                    <p className="absolute bottom-3 left-0 right-0 text-center text-brand-muted text-xs italic">
                      Video testimonials will be added here soon.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="h-3 bg-brand-ice rounded w-2/3 mb-2" />
                    <div className="h-2.5 bg-brand-ice rounded w-1/2" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl text-brand-navy mb-6">
              Share Your Experience
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Have you been part of the ALMACURA care journey? We'd love to hear your story.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-teal text-white rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-brand-teal/20 hover:bg-brand-navy transition-all"
            >
              Write Google Review <ExternalLink size={14} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
