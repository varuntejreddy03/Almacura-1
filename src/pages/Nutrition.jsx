import { Activity, CheckCircle, Clock, Droplets, HeartPulse, Leaf, Microscope, TrendingUp, Waves } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export default function Nutrition() {
  const assessmentCards = [
    {
      icon: Microscope,
      title: 'Micronutrient Deficiency Testing',
      description: 'Comprehensive analysis of vitamin, mineral, and essential nutrient status to identify deficiencies impacting cellular function and therapeutic outcomes.'
    },
    {
      icon: Activity,
      title: 'Metabolic Evaluation',
      description: 'Assessment of glucose metabolism, insulin sensitivity, lipid profile, and metabolic markers to guide nutritional intervention strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Personalized Dietary Correction',
      description: 'Evidence-based nutritional protocols designed to address identified deficiencies, support therapeutic interventions, and optimize metabolic health.'
    }
  ];
  const therapySupport = [
    { label: 'HBOT', icon: Waves, color: 'text-cyan-600', bg: 'bg-cyan-500/10', border: 'border-cyan-500/25', note: 'Optimized oxygen utilization' },
    { label: 'EECP', icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-500/10', border: 'border-rose-500/25', note: 'Cardiovascular nutrition support' },
    { label: 'Longevity', icon: Clock, color: 'text-amber-700', bg: 'bg-amber-500/10', border: 'border-amber-500/25', note: 'Cellular health optimization' },
    { label: 'PRP', icon: Droplets, color: 'text-fuchsia-700', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/25', note: 'Collagen synthesis support' }
  ];

  return (
    <div className="bg-brand-white pt-24">
      {/* Hero */}
      <section className="min-h-[60vh] relative flex items-center justify-center px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>METABOLIC INTERVENTION</SectionLabel>
            <h1 className="font-cormorant text-6xl md:text-8xl text-brand-navy mb-8">
              Nutrition Is Clinical Correction.
            </h1>
            <p className="text-brand-muted text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Not generic diet charts. Not guesswork supplementation. This is targeted metabolic intervention designed to restore your vitality based on your unique biochemistry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>NUTRITIONAL ASSESSMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Diagnostic-Driven Nutrition
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {assessmentCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:border-brand-green transition-all duration-300">
                  <card.icon className="mb-6 text-brand-green" size={40} strokeWidth={1.5} />
                  <h3 className="font-dm font-semibold text-brand-navy text-xl mb-4 uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Nutrition Support */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionLabel>SUPPORTING YOUR THERAPY</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Nutrition Underpins Every Protocol
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-brand-navy/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(11,110,110,0.14),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(194,157,88,0.16),transparent_38%)]" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-[1.5rem] border border-brand-green/25 bg-brand-green/10 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-brand-green/30 bg-white text-brand-green shadow-lg">
                      <Leaf size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-cormorant text-4xl font-bold text-brand-navy">Nutrition</h3>
                    <p className="mt-2 font-dm text-[10px] font-bold uppercase tracking-[0.24em] text-brand-green">
                      Clinical correction hub
                    </p>
                  </div>

                  {therapySupport.map(({ label, icon: Icon, color, bg, border, note }) => (
                    <div key={label} className={`rounded-[1.25rem] border ${border} ${bg} p-5`}>
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white ${color} shadow-sm`}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="font-dm text-xs font-bold uppercase tracking-[0.22em] text-brand-navy">{label}</div>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="space-y-6 text-brand-muted leading-relaxed">
                <p>
                  Nutritional status directly impacts therapeutic outcomes. Micronutrient deficiencies impair cellular function, reduce treatment efficacy, and limit recovery potential.
                </p>
                <p>
                  Our nutrition protocols are not generic dietary recommendations. They are targeted metabolic interventions designed to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={18} />
                    <span>Support HBOT outcomes through optimized oxygen utilization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={18} />
                    <span>Enhance EECP effectiveness via cardiovascular nutrition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={18} />
                    <span>Maximize PRP regenerative potential through collagen synthesis support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={18} />
                    <span>Amplify longevity protocols with cellular health optimization</span>
                  </li>
                </ul>
                <p className="text-brand-navy font-dm font-medium">
                  Every nutritional recommendation is based on your diagnostic findings and therapeutic goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Protocol Examples */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionLabel>INTERVENTION EXAMPLES</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-16">
              Targeted Nutritional Protocols
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                condition: 'Vitamin D Deficiency',
                impact: 'Impairs immune function, reduces bone health, affects mood regulation',
                intervention: 'Therapeutic vitamin D3 supplementation with monitoring to achieve optimal serum levels (40-60 ng/mL)'
              },
              {
                condition: 'Omega-3 Insufficiency',
                impact: 'Increases inflammation, impairs cardiovascular health, reduces cellular membrane integrity',
                intervention: 'High-dose EPA/DHA supplementation targeting anti-inflammatory ratios and cardiovascular protection'
              },
              {
                condition: 'Magnesium Depletion',
                impact: 'Affects energy production, muscle function, cardiovascular health, and stress response',
                intervention: 'Bioavailable magnesium forms (glycinate, threonate) dosed to correct deficiency and support ATP synthesis'
              },
              {
                condition: 'Protein Inadequacy',
                impact: 'Limits tissue repair, reduces PRP effectiveness, impairs immune function',
                intervention: 'Calculated protein intake optimization (1.2-2.0 g/kg) with amino acid profile assessment'
              }
            ].map((protocol, index) => (
              <ScrollReveal key={protocol.condition} delay={index * 0.1}>
                <div className="glass-card p-8 hover:border-brand-green transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-mono text-brand-green text-xs uppercase tracking-wider mb-2">
                        Condition
                      </div>
                      <div className="text-brand-navy font-dm font-medium">
                        {protocol.condition}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-brand-teal text-xs uppercase tracking-wider mb-2">
                        Clinical Impact
                      </div>
                      <div className="text-brand-muted text-sm">
                        {protocol.impact}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-brand-gold text-xs uppercase tracking-wider mb-2">
                        Intervention
                      </div>
                      <div className="text-brand-muted text-sm">
                        {protocol.intervention}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up */}
      <section className="py-24 px-6 bg-brand-ice">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionLabel>MONITORING & REASSESSMENT</SectionLabel>
            <h2 className="font-cormorant text-5xl md:text-6xl text-brand-navy mb-8">
              Continuous Optimization
            </h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                Nutritional interventions are monitored through periodic biomarker reassessment. We track deficiency correction, metabolic improvements, and therapeutic outcome enhancement.
              </p>
              <p>
                Dietary protocols are adjusted based on clinical response, treatment phase, and evolving health goals. This is not static supplementation — this is dynamic metabolic optimization.
              </p>
              <p className="text-brand-navy font-dm font-medium">
                Nutrition is not an afterthought. It is integral to every therapeutic protocol at ALMACURA.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <CTAButton variant="primary" to="/contact">
                Schedule Nutritional Assessment
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
