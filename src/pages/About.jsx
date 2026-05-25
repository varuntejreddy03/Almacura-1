import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Activity, Leaf, CheckCircle, ArrowRight, Search, Zap, ShieldCheck } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { teamMembers } from '../data/teamData';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="w-full pt-40 pb-24 min-h-screen bg-brand-white">
      {/* 1. Hero Section - The Institute Identity */}
      <section className="relative px-6 sm:px-8 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>ESTABLISHED CLINICAL EXCELLENCE</SectionLabel>
            <h1 className="font-cormorant text-[clamp(40px,7vw,72px)] font-bold text-brand-navy leading-tight tracking-tight mt-8 mb-12">
              Modern Clinical <br className="hidden md:block" /> <span className="italic text-brand-teal">Integrative Medicine</span>
            </h1>
            <p className="font-cormorant text-2xl md:text-3xl text-brand-navy italic leading-relaxed opacity-80 max-w-3xl mx-auto border-l-4 border-brand-teal/20 pl-10 text-left">
              "ALMACURA is a clinical institute dedicated to restoring health, enhancing vitality, and improving quality of life through a structured model integrating modern medicine with specialized therapeutics."
            </p>
          </motion.div>
        </div>

        {/* Core Pillars Grid - Professional Grade */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 max-w-7xl mx-auto"
        >
          {[
            { title: 'Clinical Medicine', desc: 'Modern diagnostic baseline', icon: Shield },
            { title: 'Integrative Care', desc: 'Synergistic modalities', icon: Heart },
            { title: 'Healthspan', desc: 'Biological optimization', icon: Activity },
            { title: 'Functional Gynae', desc: 'Regenerative restoration', icon: Leaf }
          ].map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-[3rem] border border-brand-teal/5 shadow-2xl shadow-brand-navy/5 hover:border-brand-teal/20 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-ice rounded-2xl flex items-center justify-center mb-8 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">{item.title}</h3>
              <p className="font-dm text-[11px] text-brand-teal font-bold uppercase tracking-[0.2em]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. Core Verticals Section */}
      <section className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <motion.div {...fadeInUp} className="bg-brand-ice p-16 rounded-[4rem] border border-brand-teal/5">
              <SectionLabel>FUNCTIONAL PATHWAY</SectionLabel>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-10">Healthspan Optimization</h2>
              <p className="font-dm text-lg text-brand-navy/60 mb-12">Focusing on early detection and metabolic correction to maintain peak biological output.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Early Detection', icon: Search },
                  { title: 'Metabolic Correction', icon: Activity },
                  { title: 'Energy Enhancement', icon: Zap },
                  { title: 'Disease Prevention', icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl flex items-center gap-4 shadow-sm border border-brand-teal/5">
                    <item.icon className="text-brand-teal w-5 h-5" />
                    <span className="font-dm text-xs font-bold text-brand-navy uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-16 rounded-[4rem] border border-brand-teal/10 shadow-2xl shadow-brand-navy/5">
              <SectionLabel>WOMEN'S HEALTH</SectionLabel>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-10">Functional Gynaecology</h2>
              <p className="font-dm text-lg text-brand-navy/60 mb-12">Non-surgical, function-oriented restoration protocols for hormonal and pelvic health.</p>
              
              <ul className="space-y-5">
                {['Hormonal Balance', 'Menopause Management', 'Pelvic Floor Health', 'Sexual Wellness', 'Tissue Regeneration'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-brand-ice flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-dm text-xs font-bold text-brand-navy uppercase tracking-[0.2em]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Clinical Philosophy - The Big Reveal */}
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="text-center">
              <SectionLabel>OUR CORE PHILOSOPHY</SectionLabel>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy leading-none italic mt-8 mb-16 opacity-[0.03] select-none uppercase tracking-tighter">Clinical Insight</h2>
              <div className="relative -mt-32 z-10">
                <p className="font-cormorant text-3xl md:text-4xl text-brand-teal italic mb-16 leading-relaxed">
                  "Moving beyond symptomatic relief to achieve measurable biological restoration."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 text-left">
                  {[
                    { title: 'Root Cause Resolution', desc: 'Identifying underlying biological drivers rather than just managing symptoms.' },
                    { title: 'Functional Restoration', desc: 'Utilizing non-invasive protocols to return physiological systems to their optimal state.' },
                    { title: 'Vitality Enhancement', desc: 'Optimizing energy production and cellular health for improved quality of life.' },
                    { title: 'Longevity Support', desc: 'Evidence-based strategies to slow biological aging and maintain independence.' }
                  ].map((obj, i) => (
                    <div key={i} className="group border-l-2 border-brand-teal/10 pl-8 py-2 hover:border-brand-teal transition-all duration-500">
                      <h4 className="font-dm text-[11px] font-bold text-brand-navy uppercase tracking-[0.3em] mb-4 group-hover:text-brand-teal transition-colors">{obj.title}</h4>
                      <p className="font-dm text-[13px] text-brand-navy/60 leading-relaxed uppercase tracking-widest">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Specialists */}
      <section id="specialists" className="scroll-mt-32 py-40 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <SectionLabel>CLINICAL LEADERSHIP</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mt-8 italic leading-tight">Meet Our Specialists</h2>
            <div className="w-24 h-1.5 bg-brand-teal/20 mx-auto rounded-full mt-10"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((doc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[3.5rem] overflow-hidden mb-10 bg-white border border-brand-teal/10 shadow-2xl shadow-brand-navy/5 relative">
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-10 text-center">
                    <p className="text-brand-teal font-dm text-[10px] font-bold uppercase tracking-[0.4em] mb-4">{doc.role}</p>
                    <h4 className="text-white font-cormorant text-2xl font-bold mb-4">{doc.name}</h4>
                    <Link to="/contact">
                      <button className="px-8 py-3 bg-white text-brand-navy rounded-full font-dm font-bold text-[9px] uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all">Contact Specialist</button>
                    </Link>
                  </div>
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110" />
                </div>
                <div className="text-center px-4">
                  <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-2">{doc.name}</h3>
                  <p className="font-dm text-[10px] font-bold text-brand-teal uppercase tracking-[0.3em] mb-4">{doc.role}</p>
                  <p className="font-dm text-[11px] text-brand-navy/50 uppercase tracking-widest leading-relaxed">{doc.qualification}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 bg-brand-white relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="bg-brand-navy rounded-[5rem] p-20 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(11,110,110,0.3)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-cormorant text-5xl md:text-7xl text-white mb-10 leading-tight">Begin Your Path to <span className="italic text-brand-teal">Vitality</span></h2>
              <p className="font-dm text-lg text-white/50 mb-16 uppercase tracking-[0.3em] leading-relaxed">
                Schedule a clinical assessment with our multidisciplinary team today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-16 py-6 bg-brand-teal text-white rounded-full font-dm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-brand-navy transition-all shadow-2xl shadow-brand-teal/20">
                    Schedule Assessment
                  </button>
                </Link>
                <Link to="/therapies" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white rounded-full font-dm font-bold text-xs uppercase tracking-[0.4em] hover:bg-white/10 transition-all">
                    Explore Protocols
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
