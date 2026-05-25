export const therapiesData = {
  hbot: {
    title: "Hyperbaric Oxygen Therapy (HBOT)",
    subtitle: "Enhanced tissue oxygenation under pressure",
    img: "/therapy-hbot.png",
    description: "Breathing pure oxygen in a pressurized chamber to enhance tissue oxygenation.",
    sessionDuration: "60-90 minutes",
    typicalCourse: "20-40 sessions",
    nonInvasive: true,
    benefits: [
      "Faster healing",
      "Improved brain function",
      "Reduced inflammation",
      "Enhanced tissue regeneration",
      "Improved circulation",
      "Cellular repair stimulation"
    ],
    usedFor: [
      "Non-healing wounds",
      "Stroke recovery",
      "Chronic fatigue",
      "Neurological conditions",
      "Post-surgery recovery"
    ],
    notSuitableFor: [
      "Certain lung conditions",
      "Untreated pneumothorax",
      "Severe claustrophobia (without sedation)",
      "High fever"
    ],
    procedure: [
      "Patient enters pressurized chamber",
      "Breathes 100% oxygen at controlled pressure",
      "Pressure increases tissue oxygenation",
      "Session monitored by medical staff",
      "Gradual depressurization at end"
    ],
    relatedTherapies: ['ozone', 'red-light', 'hydrogen']
  },
  ozone: {
    title: "Ozone Therapy",
    subtitle: "Medical ozone for oxygen metabolism enhancement",
    img: "/therapy-ozone.png",
    description: "Use of medical-grade ozone to stimulate the immune system and improve oxygen delivery.",
    sessionDuration: "30-45 minutes",
    typicalCourse: "10-20 sessions",
    nonInvasive: false,
    benefits: [
      "Enhanced oxygen metabolism",
      "Immune system modulation",
      "Antimicrobial effects",
      "Cellular detoxification",
      "Inflammatory response regulation"
    ],
    usedFor: [
      "Chronic infections",
      "Autoimmune conditions",
      "Chronic fatigue",
      "Circulatory disorders",
      "Wound healing"
    ],
    notSuitableFor: [
      "G6PD deficiency",
      "Hyperthyroidism",
      "Thrombocytopenia",
      "Recent myocardial infarction"
    ],
    procedure: [
      "Medical-grade ozone preparation",
      "Administration via selected protocol (Autohemotherapy or Insufflation)",
      "Controlled dosage delivery",
      "Patient monitoring during session"
    ],
    relatedTherapies: ['hbot', 'hydrogen', 'iv-therapy']
  },
  'iv-therapy': {
    title: "IV Nutrient Therapy",
    subtitle: "Direct cellular nourishment",
    img: "/therapy-hydrogen.png",
    description: "Intravenous administration of vitamins, minerals, and antioxidants for maximum absorption.",
    sessionDuration: "45-60 minutes",
    typicalCourse: "Weekly or bi-weekly",
    nonInvasive: false,
    benefits: [
      "100% nutrient absorption",
      "Boosted energy levels",
      "Enhanced immune support",
      "Detoxification",
      "Cellular hydration"
    ],
    usedFor: [
      "Nutrient deficiencies",
      "Chronic fatigue",
      "Immune boost",
      "Dehydration",
      "Performance recovery"
    ],
    notSuitableFor: [
      "Severe kidney disease",
      "Certain heart conditions",
      "Allergy to specific nutrients"
    ],
    procedure: [
      "Consultation to determine nutrient mix",
      "Sterile IV insertion by medical professional",
      "Controlled drip of nutrient solution",
      "Relaxation in comfortable lounge"
    ],
    relatedTherapies: ['ozone', 'hydrogen', 'nutrition']
  },
  hydrogen: {
    title: "Hydrogen Therapy",
    subtitle: "Selective antioxidant for oxidative stress reduction",
    img: "/therapy-hydrogen.png",
    description: "Inhalation of molecular hydrogen gas to neutralize harmful free radicals.",
    sessionDuration: "30-60 minutes",
    typicalCourse: "20-40 sessions",
    nonInvasive: true,
    benefits: [
      "Selective antioxidant action",
      "Reduced oxidative stress",
      "Neuroprotective effects",
      "Anti-inflammatory properties",
      "Metabolic optimization"
    ],
    usedFor: [
      "Brain health",
      "Metabolic disorders",
      "Inflammatory conditions",
      "Longevity support",
      "Athletic recovery"
    ],
    notSuitableFor: [],
    procedure: [
      "Medical-grade hydrogen gas inhalation",
      "Relaxed breathing through nasal cannula",
      "Controlled concentration delivery",
      "Can be combined with other therapies"
    ],
    relatedTherapies: ['ozone', 'red-light', 'hbot']
  },
  'red-light': {
    title: "Red Light Therapy",
    subtitle: "Mitochondrial energy optimization",
    img: "/therapy-redlight.png",
    description: "Exposing the body to low-level red and near-infrared light to stimulate cellular energy.",
    sessionDuration: "20-30 minutes",
    typicalCourse: "10-20 sessions",
    nonInvasive: true,
    benefits: [
      "Mitochondrial energy production",
      "Reduced oxidative stress",
      "Skin health & anti-aging",
      "Tissue repair acceleration",
      "Pain reduction"
    ],
    usedFor: [
      "Skin rejuvenation",
      "Muscle recovery",
      "Joint pain",
      "Sleep optimization",
      "Energy enhancement"
    ],
    notSuitableFor: [
      "Certain eye conditions (without protection)",
      "Light-sensitive medications"
    ],
    procedure: [
      "Targeted light exposure with specific panels",
      "Mitochondrial activation through red light",
      "Comfortable, non-thermal treatment"
    ],
    relatedTherapies: ['hbot', 'hydrogen', 'acupuncture']
  },
  acupuncture: {
    title: "Acupuncture",
    subtitle: "Balancing energy and biological systems",
    img: "/therapy-pain.png",
    description: "Traditional practice of inserting thin needles at specific points to balance the body's flow of energy (Qi).",
    sessionDuration: "45-60 minutes",
    typicalCourse: "6-10 sessions",
    nonInvasive: false,
    benefits: [
      "Pain relief",
      "Stress reduction",
      "Hormonal balance",
      "Improved circulation",
      "Enhanced recovery"
    ],
    usedFor: [
      "Chronic pain",
      "Fertility support",
      "Hormonal imbalances",
      "Stress & anxiety",
      "Migraines"
    ],
    notSuitableFor: [
      "Bleeding disorders",
      "Presence of a pacemaker (for electro-acupuncture)",
      "Extreme needle phobia"
    ],
    procedure: [
      "Mapping of meridian points",
      "Insertion of sterile, ultra-fine needles",
      "Controlled stimulation and relaxation",
      "Needle removal after retention period"
    ],
    relatedTherapies: ['red-light', 'nutrition', 'ozone']
  },
  hifem: {
    title: "HIFEM - Pelvic Chair Therapy",
    subtitle: "High-Intensity Focused Electromagnetic Technology",
    img: "/therapy-gynaecology.png",
    description: "A non-invasive procedure for pelvic floor strengthening and urinary incontinence treatment.",
    sessionDuration: "28 minutes",
    typicalCourse: "6 sessions (twice weekly)",
    nonInvasive: true,
    benefits: [
      "Pelvic floor muscle strengthening",
      "Improvement in urinary incontinence",
      "Enhanced sexual wellness",
      "Post-delivery core restoration",
      "Non-surgical functional repair"
    ],
    usedFor: [
      "Stress incontinence",
      "Urge incontinence",
      "Pelvic organ prolapse (mild)",
      "Postpartum recovery",
      "Sexual dysfunction"
    ],
    notSuitableFor: [
      "Pregnancy",
      "Metal implants in treatment area",
      "Pacemakers",
      "Recent surgery in pelvic region"
    ],
    procedure: [
      "Patient remains fully clothed",
      "Sitting on specialized HIFEM chair",
      "Controlled electromagnetic stimulation",
      "Equivalent to thousands of pelvic floor contractions",
      "Post-session evaluation"
    ],
    relatedTherapies: ['hifu', 'iv-therapy']
  },
  hifu: {
    title: "HIFU - Women Wellness Therapy",
    subtitle: "High-Intensity Focused Ultrasound for Restoration",
    img: "/therapy-gynaecology.png",
    description: "Advanced non-surgical ultrasonic technology for vaginal rejuvenation and tissue tightening.",
    sessionDuration: "30-45 minutes",
    typicalCourse: "1-3 sessions",
    nonInvasive: true,
    benefits: [
      "Tissue tightening and rejuvenation",
      "Enhanced lubrication and comfort",
      "Improved structural integrity",
      "Non-invasive regenerative response",
      "Zero downtime restoration"
    ],
    usedFor: [
      "Vaginal laxity",
      "Post-menopausal dryness",
      "Structural weakness",
      "Mild urinary leakage",
      "Aesthetic functional improvement"
    ],
    notSuitableFor: [
      "Active pelvic infections",
      "Menstruation during session",
      "Pregnancy",
      "Recent gynecological surgery"
    ],
    procedure: [
      "Clinical diagnostic baseline",
      "Precise ultrasound energy delivery",
      "Thermal stimulation of collagen production",
      "Deep tissue layer targeting",
      "Immediate return to daily activity"
    ],
    relatedTherapies: ['hifem', 'iv-therapy']
  },
  eecp: {
    title: "EECP Therapy",
    subtitle: "Enhanced External Counter Pulsation",
    img: "/therapy-eecp.png",
    description: "A non-invasive treatment that improves blood flow to the heart and systemic circulation.",
    sessionDuration: "60 minutes",
    typicalCourse: "35 sessions (daily)",
    nonInvasive: true,
    benefits: [
      "Natural bypass stimulation",
      "Enhanced cardiovascular efficiency",
      "Improved exercise tolerance",
      "Systemic circulation boost",
      "Reduced angina symptoms"
    ],
    usedFor: [
      "Chronic stable angina",
      "Heart failure (compensated)",
      "Ischemic heart disease",
      "Diabetic circulatory issues",
      "Athletic performance recovery"
    ],
    notSuitableFor: [
      "Severe aortic regurgitation",
      "Severe peripheral vascular disease",
      "DVT (Deep Vein Thrombosis)",
      "High blood pressure (>170/110)"
    ],
    procedure: [
      "Application of pressure cuffs on legs",
      "ECG-synchronized inflation/deflation",
      "Diastolic augmentation of blood flow",
      "Continuous cardiac monitoring",
      "Restoration of circulatory dynamics"
    ],
    relatedTherapies: ['hbot', 'ozone', 'iv-therapy']
  },
  prp: {
    title: "PRP Therapy",
    subtitle: "Platelet-rich plasma for regenerative support",
    img: "/therapy-prp.png",
    description: "A regenerative protocol using concentrated platelets and growth factors from the patient's own blood to support tissue repair.",
    sessionDuration: "30-60 minutes",
    typicalCourse: "3-6 sessions",
    nonInvasive: false,
    benefits: [
      "Tissue repair support",
      "Growth factor activation",
      "Joint and soft tissue recovery",
      "Skin and hair restoration support",
      "Minimal downtime"
    ],
    usedFor: [
      "Musculoskeletal injuries",
      "Joint discomfort",
      "Tendon and ligament recovery",
      "Skin rejuvenation",
      "Hair restoration support"
    ],
    notSuitableFor: [
      "Active infection",
      "Severe platelet disorders",
      "Uncontrolled systemic illness",
      "Anticoagulant use without physician review"
    ],
    procedure: [
      "Clinical suitability review",
      "Small blood sample collection",
      "Platelet concentration preparation",
      "Targeted application or injection",
      "Recovery and follow-up guidance"
    ],
    relatedTherapies: ['red-light', 'dscb', 'iv-therapy']
  },
  dscb: {
    title: "DSCB - Pain Management Therapies",
    subtitle: "Deep Spinal & Cellular Blockade",
    img: "/therapy-pain.png",
    description: "Advanced clinical protocols for managing chronic and acute pain through localized neuro-modulation.",
    sessionDuration: "30-60 minutes",
    typicalCourse: "As per clinical evaluation",
    nonInvasive: false,
    benefits: [
      "Rapid pain signal interruption",
      "Reduced dependency on oral analgesics",
      "Improved mobility and function",
      "Targeted anti-inflammatory effect",
      "Long-term pain pathway modulation"
    ],
    usedFor: [
      "Chronic back & neck pain",
      "Radiculopathy (Sciatica)",
      "Neuropathic pain",
      "Joint-related inflammatory pain",
      "Post-surgical pain syndromes"
    ],
    notSuitableFor: [
      "Active systemic infection",
      "Coagulation disorders",
      "Allergy to local anesthetics",
      "Infection at injection site"
    ],
    procedure: [
      "Precision imaging-guided localization",
      "Delivery of therapeutic agents to target nerves",
      "Monitoring of sensory/motor response",
      "Clinical observation period",
      "Home-care protocol briefing"
    ],
    relatedTherapies: ['red-light', 'acupuncture', 'iv-therapy']
  },
  yoga: {
    title: "Regenerative Yoga Therapy",
    subtitle: "Clinical yoga for physiological regulation and stress management",
    img: "/therapy-pain.png",
    description: "Yoga therapy at ALMACURA is not fitness — it is a clinical tool for physiological regulation, stress management, and long-term functional recovery.",
    sessionDuration: "45-60 minutes",
    typicalCourse: "Ongoing / as prescribed",
    nonInvasive: true,
    benefits: [
      "Improving physiological balance",
      "Regulating stress-response systems",
      "Supporting cellular recovery",
      "Enhancing long-term resilience",
      "Improving flexibility and mobility",
      "Reducing chronic pain burden"
    ],
    usedFor: [
      "Stress & burnout recovery",
      "Chronic fatigue support",
      "Musculoskeletal rehabilitation",
      "Metabolic wellness support",
      "Post-illness functional recovery"
    ],
    notSuitableFor: [
      "Acute injury without medical clearance",
      "Severe cardiovascular instability"
    ],
    procedure: [
      "Clinical assessment of functional capacity",
      "Personalized yoga protocol design",
      "Supervised therapeutic sessions",
      "Integration with other ALMACURA therapies",
      "Progress monitoring and protocol adjustment"
    ],
    relatedTherapies: ['red-light', 'hbot', 'infrared-sauna']
  },
  'infrared-sauna': {
    title: "Infrared Sauna",
    subtitle: "Deep thermal heat for cellular detoxification & recovery",
    img: "/therapy-sauna.png",
    description: "Exposing the body to infrared heat wavelengths to stimulate circulation, promote detoxification, and support cellular repair.",
    sessionDuration: "30-45 minutes",
    typicalCourse: "2-3 times per week",
    nonInvasive: true,
    benefits: [
      "Deep cellular detoxification",
      "Improved circulation & vascular function",
      "Muscle recovery & pain relief",
      "Stress reduction & deep relaxation",
      "Caloric burn & metabolic support",
      "Skin purification & health"
    ],
    usedFor: [
      "Chronic fatigue & pain",
      "Muscle soreness & joint stiffness",
      "Detoxification support",
      "Cardiovascular wellness support",
      "Stress & sleep management"
    ],
    notSuitableFor: [
      "Pregnancy",
      "Recent myocardial infarction or unstable angina",
      "Severe dehydration",
      "Heat insensitivity"
    ],
    procedure: [
      "Pre-session hydration and vitals check",
      "Placement in private infrared cabin",
      "Customized wavelength & temperature setting",
      "Relaxation during the controlled heating cycle",
      "Post-session cooldown & electrolyte rehydration"
    ],
    relatedTherapies: ['hbot', 'red-light', 'ozone']
  }
};

export const therapyList = [
  {
    slug: 'hbot',
    icon: 'Waves',
    title: 'Hyperbaric Oxygen Therapy (HBOT)',
    shortDescription: 'Enhance tissue oxygenation and cellular repair in a pressurized chamber.'
  },
  {
    slug: 'ozone',
    icon: 'Wind',
    title: 'Ozone Therapy',
    shortDescription: 'Boost immune function and enhance oxygen metabolism with medical-grade ozone.'
  },
  {
    slug: 'iv-therapy',
    icon: 'Syringe',
    title: 'IV Nutrient Therapy',
    shortDescription: 'Direct cellular nourishment with specialized vitamin and mineral infusions.'
  },
  {
    slug: 'hydrogen',
    icon: 'Atom',
    title: 'Hydrogen Therapy',
    shortDescription: 'Neutralize oxidative stress and protect brain health with molecular hydrogen.'
  },
  {
    slug: 'red-light',
    icon: 'Lightbulb',
    title: 'Red Light Therapy',
    shortDescription: 'Stimulate mitochondrial energy and promote cellular repair with infrared light.'
  },
  {
    slug: 'acupuncture',
    icon: 'ShieldAlert',
    title: 'Acupuncture',
    shortDescription: 'Restore biological balance and manage pain through evidence-informed meridian therapy.'
  },
  {
    slug: 'hifem',
    icon: 'Zap',
    title: 'HIFEM - Pelvic Chair Therapy',
    shortDescription: 'Non-invasive electromagnetic stimulation for pelvic floor strengthening and wellness.'
  },
  {
    slug: 'hifu',
    icon: 'Waves',
    title: 'HIFU - Women Wellness Therapy',
    shortDescription: 'Advanced ultrasonic technology for non-surgical vaginal rejuvenation and tightening.'
  },
  {
    slug: 'eecp',
    icon: 'Activity',
    title: 'EECP Therapy',
    shortDescription: 'Improve cardiac blood flow and systemic circulation through external counter-pulsation.'
  },
  {
    slug: 'prp',
    icon: 'Sparkles',
    title: 'PRP Therapy',
    shortDescription: 'Use platelet-rich plasma protocols to support tissue repair and regenerative recovery.'
  },
  {
    slug: 'dscb',
    icon: 'Shield',
    title: 'DSCB - Pain Management',
    shortDescription: 'Precision clinical blocks for managing chronic pain and restoring mobility.'
  },
  {
    slug: 'yoga',
    icon: 'Leaf',
    title: 'Regenerative Yoga Therapy',
    shortDescription: 'Clinical yoga for physiological regulation, stress management, and functional recovery support.'
  },
  {
    slug: 'infrared-sauna',
    icon: 'Flame',
    title: 'Infrared Sauna',
    shortDescription: 'Deep thermal heat for cellular detoxification, cardiovascular efficiency, and muscle recovery.'
  }
];
