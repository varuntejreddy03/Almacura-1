import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

const categories = [
  'Healthspan & Preventive Wellness',
  'Integrative Medicine',
  'Functional Recovery',
  'Regenerative Wellness',
  'Patient Education',
  'Institute Updates'
];

export default function Blog() {
  return (
    <div className="bg-brand-white pt-24">

      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>KNOWLEDGE & INSIGHTS</SectionLabel>
            <h1 className="font-cormorant text-5xl md:text-7xl text-brand-navy mb-6 italic">
              Blogs, Updates & Publications
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto">
              Explore the latest updates, wellness insights, educational articles, and publications from ALMACURA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-brand-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-brand-ice text-brand-teal text-xs font-dm font-semibold uppercase tracking-wider rounded-sm border border-brand-border hover:border-brand-teal transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300 group">
                  <div className="w-full h-40 bg-brand-ice rounded-sm mb-6 flex items-center justify-center">
                    <span className="text-brand-teal/30 font-cormorant text-5xl italic">A</span>
                  </div>
                  <span className="text-brand-teal text-xs font-mono uppercase tracking-widest">{cat}</span>
                  <div className="mt-3 h-4 bg-brand-ice rounded w-3/4 mb-2" />
                  <div className="h-3 bg-brand-ice rounded w-full mb-1" />
                  <div className="h-3 bg-brand-ice rounded w-5/6 mb-6" />
                  <p className="text-brand-muted text-xs italic">Articles and updates will be published here soon.</p>
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
              Stay Updated
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Contact us to learn more about our integrative medicine programs and upcoming wellness events.
            </p>
            <CTAButton variant="primary" to="/contact">
              Get In Touch
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
