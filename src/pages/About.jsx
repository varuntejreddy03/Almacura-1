import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Activity, Leaf } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import ScrollReveal from '../components/ScrollReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const pillars = [
  { title: 'Integrative Medicine', desc: 'Bridging conventional and root-cause healing', icon: Shield },
  { title: 'Healthspan Optimization', desc: 'Preventive & regenerative wellness', icon: Activity },
  { title: 'Functional Gynaecology', desc: 'Advanced non-invasive women\'s care', icon: Heart },
  { title: 'Lifestyle Healing', desc: 'Personalized, compassionate care', icon: Leaf }
];

export default function About() {
  return (
    <main className="w-full bg-brand-white">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 sm:px-8 bg-brand-ice relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(11,110,110,0.07) 0%, transparent 60%)' }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>INSTITUTE OVERVIEW</SectionLabel>
            <h1 className="font-cormorant text-[clamp(40px,7vw,72px)] font-bold text-brand-navy leading-tight mt-6 mb-8">
              About <span className="italic text-brand-teal">ALMACURA</span>
            </h1>
            <p className="font-dm text-lg text-brand-muted leading-relaxed max-w-3xl mx-auto">
              A modern institute dedicated to Integrative Medicine, Healthspan Optimization, and Functional & Regenerative Gynecology - established within the trusted environment of{' '}
              <a
                href="https://www.nightingalhospitals.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-teal underline underline-offset-4 hover:text-brand-navy transition-colors"
              >
                Nightingale Hospital
              </a>
              , Hyderabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-6 sm:px-8 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((item, i) => (
              <div key={i} className="group glass-card p-8 hover:border-brand-teal transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-ice rounded-xl flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="font-dm text-xs text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 sm:px-8 bg-brand-ice">
        <div className="max-w-4xl mx-auto space-y-10">

          <ScrollReveal>
            <div className="glass-card p-10">
              <p className="font-dm text-base text-brand-text leading-relaxed">
                ALMACURA was created to bring advanced, future-ready healthcare closer to everyday families through compassionate and scientifically guided care. As chronic health conditions, stress, hormonal imbalance, fatigue, and lifestyle-related disorders continue to rise, ALMACURA focuses on bridging the gap between conventional medicine and deeper root-cause healing approaches.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-10">
              <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4 italic">Our Integrated Healthcare Model</h2>
              <p className="font-dm text-base text-brand-text leading-relaxed">
                Our integrated healthcare model combines modern clinical medicine with advanced regenerative therapies, preventive healthcare, women's wellness programs, and lifestyle-based healing to support long-term health and whole-body wellness.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-10 border-l-4 border-brand-teal">
              <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4 italic">Functional & Regenerative Gynecology</h2>
              <p className="font-dm text-base text-brand-text leading-relaxed">
                Special emphasis is placed on modern women's care through Functional & Regenerative Gynecology — supporting hormonal balance, menopausal wellness, pelvic health, post-delivery recovery, and intimate wellness with dignity, privacy, and advanced non-invasive technologies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-10">
              <h2 className="font-cormorant text-3xl font-bold text-brand-navy mb-4 italic">A New Era of Healthcare</h2>
              <p className="font-dm text-base text-brand-text leading-relaxed">
                More than a treatment center, ALMACURA represents a new era of healthcare focused on innovation, preventive wellness, personalized care, and compassionate medical excellence — helping individuals and families move toward healthier, stronger, and more fulfilling lives.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 sm:px-8 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="border-l-4 border-brand-gold pl-8">
              <blockquote className="font-cormorant text-3xl md:text-4xl italic text-brand-navy leading-relaxed mb-4">
                "Moving beyond symptomatic relief to achieve measurable biological restoration — helping individuals and families live healthier, stronger, and more fulfilling lives."
              </blockquote>
              <p className="font-dm text-brand-teal text-sm font-semibold uppercase tracking-widest">— ALMACURA Institute</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Begin Your Health Journey
            </h2>
            <p className="font-dm text-base text-brand-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact us or visit our center today for a personalized health consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-dm uppercase"
                  style={{ background: '#0B6E6E', color: '#fff', borderRadius: '6px', padding: '16px 36px', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 600, boxShadow: '0 6px 24px rgba(11,110,110,0.3)' }}
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link to="/therapies">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="font-dm uppercase"
                  style={{ border: '2px solid #0B6E6E', color: '#0B6E6E', background: 'transparent', borderRadius: '6px', padding: '16px 36px', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 600 }}
                >
                  Explore Therapies
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
