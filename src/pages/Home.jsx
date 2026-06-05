import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, Brain, Droplets, Microscope, Activity, Wind, CheckCircle, Heart, Shield, ArrowRight, Calendar, MapPin, Phone, MessageSquare, Clock, ChevronRight, TrendingUp, Leaf, HeartPulse, FlaskConical, Flame, Sun } from 'lucide-react';
import SuitabilityModal from '../components/SuitabilityModal';

export default function Home() {
  const [isSuitabilityOpen, setIsSuitabilityOpen] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
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
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section - Reverted to Preferred Design */}
      <section className="relative min-h-screen flex items-center pt-44 md:pt-52 pb-12 lg:pt-56 lg:pb-24">
        {/* Background Design & Overlay */}
        <div className="absolute inset-0 z-0 bg-brand-ice/30">
          <img 
            src="/hero-design-bg.png" 
            alt="Professional medical background" 
            className="w-full h-full object-cover object-center mix-blend-overlay opacity-60"
          />
          
          {/* Professional Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b6e6e08_1px,transparent_1px),linear-gradient(to_bottom,#0b6e6e08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Subtle Noise Texture for Premium Feel */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* Depth Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-dm text-[11px] md:text-[13px] font-bold tracking-[0.4em] text-brand-teal uppercase mb-8 block leading-relaxed max-w-2xl">
                Institute of Integrative Medicine, <br className="hidden md:block" /> Healthspan Optimization & Functional Gynaecology
              </span>
              <h1 className="font-cormorant text-6xl md:text-8xl lg:text-[100px] font-bold text-brand-navy leading-[0.95] mb-8 tracking-tight">
                All Paths to <span className="italic text-brand-teal">Vitality</span>
              </h1>
              <p className="font-dm text-xl text-brand-text mb-12 max-w-2xl leading-relaxed opacity-90">
                ALMACURA combines clinical medicine with structured integrative approaches to address disease, long-term vitality, and functional well-being.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-[11px] tracking-[0.2em] uppercase shadow-2xl shadow-brand-navy/20 hover:bg-brand-teal transition-all flex items-center justify-center gap-3"
                  >
                    Book Doctor Consultation
                  </motion.button>
                </Link>
                <motion.button 
                  onClick={() => setIsSuitabilityOpen(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 border border-brand-teal/30 text-brand-teal rounded-full font-dm font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-brand-teal/5 transition-all flex items-center justify-center"
                >
                  Check Therapy Suitability (Free)
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <SuitabilityModal isOpen={isSuitabilityOpen} onClose={() => setIsSuitabilityOpen(false)} />

      {/* 2. Three Core Pillars Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
              A Comprehensive Approach to Health
            </h2>
            <p className="font-dm text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-8 leading-relaxed">
              A unified clinical model addressing disease, recovery, and long-term vitality.
            </p>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full opacity-50"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Pillar 1 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-brand-teal/10 transition-all duration-700 group flex flex-col hover:-translate-y-2">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white">
                <Heart className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Integrative Medicine</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For patients with existing medical conditions.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Cardiovascular disease', 'Diabetes complications', 'Chronic fatigue', 'Chronic pain', 'Allergic & inflammatory disorders', 'Autoimmune disorders', 'Neurological disorders', 'Stress-related disorders'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy font-dm text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Diagnosis <ArrowRight className="w-3 h-3 text-brand-teal" /> Treatment <ArrowRight className="w-3 h-3 text-brand-teal" /> Recovery
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-brand-teal/10 transition-all duration-700 group flex flex-col hover:-translate-y-2">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm mb-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl group-hover:shadow-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white">
                <TrendingUp className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Healthspan Optimization</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For long-term vitality and prevention.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Metabolic health', 'Energy optimization', 'Preventive care', 'Healthy aging', 'Gut health', 'Neuro-emotional balance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy font-dm text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Assessment <ArrowRight className="w-3 h-3 text-brand-teal" /> Optimization <ArrowRight className="w-3 h-3 text-brand-teal" /> Prevention
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div variants={itemFadeIn} className="bg-brand-light border border-brand-teal/10 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-brand-teal/10 transition-all duration-700 group flex flex-col hover:-translate-y-2">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white">
                <Leaf className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-cormorant text-xl md:text-2xl font-bold text-brand-navy mb-2">Functional & Regenerative Gynaecology</h3>
              <p className="font-dm text-xs text-brand-teal font-bold tracking-wide uppercase mb-5">For women's health and quality of life.</p>
              
              <ul className="space-y-2.5 mb-6">
                {['Hormonal imbalance', 'Menopausal symptoms', 'Pelvic health issues', 'Sexual wellness', 'Post-delivery recovery', 'Vaginal health'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy font-dm text-sm font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-3 border border-brand-teal/5 mt-auto">
                <p className="font-dm text-[10px] text-brand-navy font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                  Assessment <ArrowRight className="w-3 h-3 text-brand-teal" /> Restoration <ArrowRight className="w-3 h-3 text-brand-teal" /> Regeneration
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Integrated Clinical Model Section */}
      <section className="py-12 md:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">One Unified Clinical Pathway</h2>
            <p className="font-dm text-xl text-white/80 max-w-2xl mx-auto">
              Treat illness. Restore function. Optimise vitality. Support lifelong wellness.
            </p>
          </motion.div>

          {/* Responsive Timeline */}
          <div className="relative mt-16 mb-10 max-w-6xl mx-auto">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
              {['Assessment', 'Diagnosis', 'Integrative Treatment', 'Restoration', 'Regeneration', 'Optimization', 'Healthspan'].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative w-16 h-16 rounded-full border border-brand-gold/30 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:border-brand-gold group-hover:bg-white/10 transition-all duration-300 shadow-lg shadow-brand-gold/5 z-10">
                    <span className="font-cormorant text-brand-gold font-bold text-xl">{index + 1}</span>
                  </div>
                  <span className="font-dm text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors leading-relaxed">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vitality Axis Section */}
      <section className="py-12 md:py-24 bg-brand-beige">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-6">The Science of Vitality</h2>
              <p className="font-dm text-lg text-brand-text mb-8">
                Health depends on interconnected systems. ALMACURA therapies are designed to restore and optimise these systems for true, lasting well-being.
              </p>
              <div className="w-16 h-1 bg-brand-teal rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {[
                { name: 'Circulation', icon: HeartPulse },
                { name: 'Oxygen Delivery', icon: Wind },
                { name: 'Cellular Energy', icon: Flame },
                { name: 'Inflammation Balance', icon: FlaskConical },
                { name: 'Gut Health', icon: Target },
                { name: 'Neuro-Emotional Balance', icon: Sun }
              ].map((system, i) => (
                <motion.div 
                  variants={itemFadeIn}
                  key={i} 
                  className="bg-white rounded-[2rem] p-8 text-center shadow-xl shadow-brand-navy/5 hover:-translate-y-2 transition-all duration-500 border border-brand-teal/5 group"
                >
                  <div className="w-16 h-16 bg-brand-ice rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    <system.icon size={32} />
                  </div>
                  <h4 className="font-dm text-sm font-bold text-brand-navy tracking-wide uppercase">{system.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Signature Programs Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Signature Programs</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Integrative Medicine Programs</h3>
              <ul className="space-y-4">
                {[
                  'Cardiac Recovery & Circulation Program',
                  'Diabetes Complication Recovery Program',
                  'Pain Recovery Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-base font-semibold text-brand-navy flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Healthspan Optimization Programs</h3>
              <ul className="space-y-4">
                {[
                  'Vitality & Energy Restoration Program',
                  'Executive Healthspan Optimization Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-base font-semibold text-brand-navy flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-ice rounded-[2rem] p-8 border border-brand-teal/10"
            >
              <h3 className="font-cormorant text-2xl font-bold text-brand-navy mb-6">Women's Health Programs</h3>
              <ul className="space-y-4">
                {[
                  'Hormonal Balance Program',
                  'Menopause Support Program',
                  'Pelvic Health & Recovery Program',
                  'Intimate Wellness & Regeneration Program'
                ].map((prog, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 shadow-sm border border-brand-teal/5 font-dm text-base font-semibold text-brand-navy flex items-center gap-3 group hover:border-brand-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-teal group-hover:scale-150 transition-transform"></div>
                    {prog}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/programs">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-brand-navy border border-brand-teal/20 rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-sm hover:border-brand-teal hover:bg-brand-ice transition-all inline-flex items-center gap-3"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Therapies Section */}
      <section className="py-12 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-teal/5"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-white mb-4">Advanced Therapeutic Modalities</h2>
            <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Hyperbaric Oxygen Therapy (HBOT)', img: '/therapy-hbot.jpg', slug: 'hbot' },
              { name: 'EECP Therapy', img: '/therapy-eecp.jpg', slug: 'eecp' },
              { name: 'Ozone Therapy', img: '/therapy-ozone.jpg', slug: 'ozone' },
              { name: 'HIFEM - Pelvic Chair', img: '/HIFEM Pelvic Chair therapy.jpeg', slug: 'hifem' },
              { name: 'HIFU - Women Wellness', img: '/therapy-hifu.jpg', slug: 'hifu' },
              { name: 'PRP Therapy', img: '/therapy-prp.jpg', slug: 'prp' },
              { name: 'DSCB - Pain Portal Block', img: '/therapy-dscb.jpg', slug: 'dscb' },
              { name: 'Hydrogen Therapy', img: '/therapy-hydrogen.jpg', slug: 'hydrogen' }
            ].map((therapy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-2xl"
              >
                <Link to={`/therapies/${therapy.slug}`}>
                  <img src={therapy.img} alt={therapy.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h4 className="font-cormorant text-2xl md:text-3xl font-bold text-white mb-3 leading-tight transition-transform duration-500 group-hover:-translate-y-2">{therapy.name}</h4>
                    <p className="font-dm text-xs text-brand-gold uppercase tracking-[0.3em] font-bold flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="w-8 h-[1px] bg-brand-gold"></span>
                      View Protocol
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/therapies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-dm font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-brand-navy transition-all inline-flex items-center gap-3"
              >
                View All Therapies <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Patient Journey Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-brand-navy mb-4">Your Health Restoration Journey</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {['Consultation', 'Assessment', 'Diagnosis', 'Program', 'Therapy', 'Recovery', 'Optimization'].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 lg:gap-6"
              >
                <div className="bg-brand-ice text-brand-teal font-dm font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full border border-brand-teal/20 shadow-sm">
                  {step}
                </div>
                {i < 6 && <ArrowRight className="text-brand-teal/40 w-5 h-5 hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why ALMACURA Section */}
      <section className="py-16 md:py-32 bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-brand-teal/10"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Why ALMACURA</h2>
            <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: 'Hospital-Based Integrative Model' },
              { title: 'Combines Multiple Validated Systems' },
              { title: 'Structured Program-Based Protocols' },
              { title: 'Focus on Root Causes and Function' },
              { title: '30+ Years Clinical Leadership' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-gold" />
                </div>
                <p className="font-dm text-base md:text-lg font-bold leading-snug text-white/95">{feature.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-16 md:py-32 bg-brand-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-brand-navy mb-8">Start Your Health Restoration Journey</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-brand-navy text-white rounded-full font-dm font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:bg-brand-teal transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </motion.button>
              </Link>
              <a href="https://wa.me/919966030085" target="_blank" rel="noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#25D366] text-white rounded-full font-dm font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Now
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}




