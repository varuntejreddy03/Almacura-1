import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

const clinicalVision = [
  'Integrative & Preventive Healthcare',
  'Healthspan Optimization',
  'Functional & Regenerative Wellness',
  'Recovery & Rehabilitation Support',
  'Personalized Wellness Pathways',
  'Non-Surgical Advanced Therapies',
  'Metabolic & Circulatory Wellness Support',
  'Long-Term Functional Health Improvement'
];

const integrativeFocus = [
  'Hyperbaric Oxygen Therapy (HBOT)',
  'EECP Therapy',
  'Photobiomodulation Therapy',
  'Ozone Therapy',
  'Hydrogen Therapy',
  'Functional Recovery Programs',
  'Lifestyle & Wellness Optimization',
  'Regenerative Supportive Therapies'
];

export default function Founder() {
  return (
    <main className="bg-brand-white pt-24">

      {/* Hero */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <ScrollReveal variant="fadeLeft">
              <img
                src="/doctorr.jpeg"
                alt="Dr. K. Vijaya Shekar Reddy"
                className="w-full max-w-sm rounded-sm object-cover mx-auto shadow-xl"
              />
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <SectionLabel>FOUNDER & MENTOR — ALMACURA</SectionLabel>
              <h1 className="font-cormorant text-5xl md:text-6xl text-brand-navy mt-4 mb-3 italic leading-tight">
                Dr. K. Vijaya Shekar Reddy
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {['MBBS', 'MS'].map((c) => (
                  <span key={c} className="glass-card px-4 py-1.5">
                    <span className="font-mono text-brand-teal text-xs uppercase tracking-wider">{c}</span>
                  </span>
                ))}
              </div>
              <p className="text-brand-blue font-dm font-semibold text-sm mb-8 uppercase tracking-wider">
                General Surgeon | Integrative Medicine Advocate
              </p>
              <div className="space-y-5 text-brand-muted leading-relaxed">
                <p>
                  Dr. K. Vijaya Shekar Reddy is a senior General Surgeon with more than three decades of clinical, general and laparoscopic surgical experience. Through years of managing complex chronic and lifestyle-related health conditions, he recognized the growing need for a broader healthcare approach that extends beyond conventional symptom-based treatment and supports long-term recovery, resilience, and overall well-being.
                </p>
                <p>
                  This vision led to the establishment of ALMACURA — a specialized institute focused on Integrative Medicine, Healthspan Optimization, Functional & Regenerative Gynecology, and advanced non-invasive wellness therapies. His approach combines modern clinical medicine with evidence-informed supportive and regenerative technologies designed to help individuals improve functional health, vitality, recovery, and quality of life through structured and personalized care pathways.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clinical Vision & Integrative Focus */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                <SectionLabel>FOUNDER'S CLINICAL VISION</SectionLabel>
                <ul className="space-y-3 mt-6">
                  {clinicalVision.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0 mt-2" />
                      <span className="text-brand-muted text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full hover:border-brand-teal transition-all duration-300">
                <SectionLabel>AREAS OF INTEGRATIVE FOCUS</SectionLabel>
                <ul className="space-y-3 mt-6">
                  {integrativeFocus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                      <span className="text-brand-muted text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>FOUNDER'S NOTE</SectionLabel>
            <div className="border-l-4 border-brand-gold pl-8 mt-8">
              <blockquote className="font-cormorant text-3xl md:text-4xl italic text-brand-navy leading-relaxed mb-6">
                "At ALMACURA, our goal is not only to support recovery from illness, but also to help individuals improve vitality, functional wellness, and long-term quality of life through integrative, patient-centric healthcare."
              </blockquote>
              <p className="font-dm font-semibold text-brand-teal text-sm uppercase tracking-widest">
                – Dr. K. Vijaya Shekar Reddy
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-6">
              Experience Integrative Medicine
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Schedule a consultation to discuss your health optimization goals and explore personalized therapeutic protocols.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-dm uppercase"
                style={{
                  background: '#0B6E6E',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  padding: '16px 36px',
                  fontSize: '13px',
                  letterSpacing: '1.5px',
                  fontWeight: 600,
                  boxShadow: '0 6px 24px rgba(11,110,110,0.35)'
                }}
              >
                Book Consultation
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
