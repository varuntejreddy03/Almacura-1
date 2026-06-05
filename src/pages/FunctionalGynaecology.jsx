import { motion } from 'framer-motion';
import { Leaf, Heart, Activity, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FunctionalGynaecology() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full overflow-hidden bg-brand-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-40 pb-20">
        {/* Soft elegant background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c8940cbb1158?auto=format&fit=crop&q=80&w=2000" 
            alt="Women's wellness and elegant consultation" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/90 to-brand-white/40"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
                Women's Wellness
              </span>
              <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy leading-[1.1] mb-6">
                Functional & Regenerative <span className="italic text-brand-teal font-normal">Gynaecology</span>
              </h1>
              <p className="font-dm text-xl text-brand-text mb-10 max-w-xl leading-relaxed">
                A modern, non-surgical approach to improving women's health, vitality, and overall well-being.
              </p>
              
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-brand-navy text-white rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-xl shadow-brand-navy/10 hover:bg-brand-teal transition-all flex items-center justify-center gap-3"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Areas of Focus</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            <p className="font-dm text-lg text-brand-text mt-6 max-w-2xl mx-auto">
              Addressing root causes to restore function and comfort in every stage of a woman's life.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Hormonal Imbalance', icon: Activity },
              { title: 'Menopause Symptoms', icon: Shield },
              { title: 'Pelvic Floor Dysfunction', icon: Heart },
              { title: 'Urinary Concerns', icon: Leaf },
              { title: 'Sexual Wellness', icon: Heart },
              { title: 'Vaginal Health', icon: Shield }
            ].map((area, i) => (
              <motion.div 
                variants={itemFadeIn}
                key={i} 
                className="bg-brand-ice border border-brand-teal/10 rounded-[2rem] p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-brand-teal/50 group-hover:text-brand-teal shadow-sm transition-colors">
                  <area.icon className="w-8 h-8" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-brand-navy">{area.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Timeline */}
      <section className="py-24 bg-brand-ice relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Our Approach</h2>
            <p className="font-dm text-lg text-brand-teal max-w-2xl mx-auto italic">
              A structured pathway to optimal feminine wellness.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 max-w-4xl mx-auto">
            {[
              { step: '01', name: 'Assessment' },
              { step: '02', name: 'Functional Restoration' },
              { step: '03', name: 'Regenerative Therapies' }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center"
              >
                <div className="bg-white p-8 rounded-[2rem] border border-brand-teal/10 text-center w-64 shadow-sm relative group hover:border-brand-teal/30 transition-colors">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-dm font-bold text-sm shadow-lg">
                    {phase.step}
                  </span>
                  <h3 className="font-dm font-bold text-brand-navy text-lg">{phase.name}</h3>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex text-brand-teal/30 px-4">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
                {i < 2 && (
                  <div className="flex md:hidden text-brand-teal/30 py-4">
                    <ArrowRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-6">Advanced Therapeutic Modalities</h2>
              <p className="font-dm text-lg text-brand-text mb-8 leading-relaxed">
                We utilize state-of-the-art, non-surgical modalities designed to safely and effectively restore tissue function and promote natural regeneration.
              </p>
              
              <ul className="space-y-6">
                {[
                  { id: 'tissue', title: 'HIFU - Women Wellness Therapy', desc: 'Focused ultrasound support for tissue tone, comfort, and non-surgical restoration.', path: '/therapies/hifu' },
                  { id: 'pelvic', title: 'HIFEM - Pelvic Chair Therapy', desc: 'Electromagnetic pelvic floor activation for strength, control, and recovery support.', path: '/therapies/hifem' },
                  { id: 'hormonal', title: 'Hormonal & Metabolic Optimization', desc: 'Comprehensive balancing for systemic wellness and stage-specific support.', path: '/contact' },
                  { id: 'prp', title: 'PRP-Based Procedures', desc: 'Utilising your body\'s own growth factors for tissue repair.', path: '/therapies/prp' }
                ].map((therapy, i) => (
                  <li id={therapy.id} key={therapy.id} className="scroll-mt-36 flex items-start gap-4 p-4 rounded-2xl bg-brand-ice border border-brand-teal/5 hover:border-brand-teal/20 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-dm font-bold text-brand-navy mb-1">{therapy.title}</h4>
                      <p className="font-dm text-base font-medium text-brand-navy/80">{therapy.desc}</p>
                      <Link to={therapy.path} className="inline-flex items-center gap-2 mt-3 font-dm text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal hover:text-brand-navy transition-colors">
                        View pathway <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-navy/10"
            >
              <img
                src="/Functional Gynecology.jpeg"
                alt="Functional gynaecology care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-teal/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


