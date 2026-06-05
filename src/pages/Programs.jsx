import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Target, Zap, Clock, Sparkles, Brain, Heart, Leaf, ChevronRight, MessageCircle, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';

export default function Programs() {
  const programs = [
    {
      id: 'detox',
      title: 'Detox Program',
      icon: Leaf,
      desc: 'Systemic detoxification protocols focusing on cellular health and liver optimization.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Cellular Cleansing', 'Metabolic Reset', 'Antioxidant Support']
    },
    {
      id: 'energy',
      title: 'Energy Boost Program',
      icon: Zap,
      desc: 'Mitochondrial revitalization through oxygenation and nutrient optimization.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Mitochondrial Activation', 'ATP Synthesis Support', 'Fatigue Reduction']
    },
    {
      id: 'longevity',
      title: 'Longevity Program',
      icon: Clock,
      desc: 'Advanced protocols for biological age optimization and cellular resilience.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Cellular Repair', 'DNA Support', 'Systemic Anti-aging']
    },
    {
      id: 'fertility',
      title: 'Fertility Support Program',
      icon: Heart,
      desc: 'Integrative approach to reproductive health and hormonal balance.',
      benefit: 'Bundled therapies + better outcomes',
      features: ['Hormonal Balance', 'Pelvic Health', 'Biological Optimization']
    }
  ];

  return (
    <div className="bg-brand-white pt-32 pb-24 px-6 sm:px-8 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center mb-20 max-w-[900px] mx-auto">
            <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
              Treatment Bundles
            </span>
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-8">
              Clinical <span className="italic text-brand-teal font-normal">Programs</span>
            </h1>
            <p className="text-brand-muted text-xl leading-relaxed italic max-w-2xl font-cormorant border-l-4 border-brand-teal/20 pl-8">
              "Designed for better results - bundled therapies for comprehensive health outcomes."
            </p>
          </div>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {programs.map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 0.1}>
              <div id={p.id} className="scroll-mt-36 bg-white p-6 lg:p-8 rounded-[1.5rem] shadow-xl shadow-brand-navy/5 border border-brand-teal/10 hover:border-brand-teal/30 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-ice/50 rounded-bl-full group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-ice flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-cormorant text-2xl text-brand-navy font-bold mb-3">{p.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-8">{p.desc}</p>
                  
                  <div className="space-y-3 mb-8">
                    {p.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                          <ChevronRight size={12} />
                        </div>
                        <span className="font-dm font-bold text-[9px] uppercase tracking-[0.2em] text-brand-navy/70 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="mb-6 p-4 bg-brand-ice/60 rounded-2xl border border-white">
                      <div className="font-dm font-bold text-[8px] uppercase tracking-[.3em] text-brand-teal mb-1">Outcome Focus</div>
                      <div className="text-brand-navy font-dm font-bold text-[10px] tracking-widest uppercase leading-tight">{p.benefit}</div>
                    </div>
                    
                    <Link to="/contact">
                      <button className="w-full py-4 bg-brand-navy text-white rounded-2xl font-dm font-bold text-[10px] uppercase tracking-[.3em] hover:bg-brand-teal transition-all shadow-xl shadow-brand-navy/10 flex items-center justify-center gap-2">
                        Enquire <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Global Strategy Section */}
        <section className="py-20 px-8 sm:px-12 bg-brand-navy rounded-[2.5rem] text-white overflow-hidden relative border border-brand-teal/20 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,110,110,0.2),transparent_60%)]" />
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-dm text-[10px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
                Why Programs?
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-white mb-6">Precision Bundling</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
                Clinical programs combine synergistic therapies to achieve biological outcomes that single treatments cannot reach alone. Our programs are supervised by medical professionals throughout the duration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-navy rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-brand-teal hover:text-white transition-all shadow-2xl">
                    Connect for Pricing Structure
                  </button>
                </Link>
                <a href="https://wa.me/919966030085" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white rounded-full font-dm font-bold text-[11px] uppercase tracking-[.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                    <MessageCircle size={18} /> Protocol Talk
                  </button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full">
              {[
                { title: 'Better Biological Synergism', icon: Activity },
                { title: 'Bundled Pricing Models', icon: ShieldCheck },
                { title: 'Structured Recovery Timeline', icon: Clock },
                { title: 'Measurable Outcome Tracking', icon: Microscope }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[1.5rem] flex items-center gap-5 group hover:border-brand-teal/40 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal">
                    <item.icon size={20} />
                  </div>
                  <span className="font-dm font-bold text-xs uppercase tracking-widest text-white/90">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
