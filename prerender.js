/**
 * Prerender Script for ALMACURA
 * Generates static HTML files with proper SEO metadata for each route
 * Run after vite build: node prerender.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

const BASE_URL = 'https://www.almacura.in';

// SEO configuration for all routes
const seoConfig = {
  '/': {
    title: 'Integrative Medicine & Functional Gynaecology in Hyderabad | ALMACURA',
    description: 'Discover integrative medicine & functional gynaecology at Almacura. We treat root causes, optimise healthspan, and restore vitality — not just symptoms.',
  },
  '/about': {
    title: 'About ALMACURA | Integrative Medicine & Wellness Experts',
    description: "Learn about Almacura's mission and approach to integrative medicine, functional gynaecology, and healthspan optimisation.",
  },
  '/about/founder': {
    title: 'Dr. K. Vijaya Shekar Reddy | Founder of ALMACURA',
    description: 'Meet Dr. K. Vijaya Shekar Reddy, founder of ALMACURA with 30+ years of clinical experience in integrative medicine.',
  },
  '/about/team': {
    title: 'Our Medical Team | ALMACURA Hyderabad',
    description: 'Meet the expert medical team at ALMACURA dedicated to integrative medicine, functional gynaecology, and healthspan optimization.',
  },
  '/contact': {
    title: 'Contact ALMACURA Hyderabad | Book a Consultation',
    description: "Contact ALMACURA to schedule a consultation for integrative medicine, women's health, regenerative therapies, and wellness programs.",
  },
  '/for-doctors': {
    title: 'For Doctors | Referral Partnership | ALMACURA',
    description: 'Partner with ALMACURA for patient referrals. Learn about our integrative medicine protocols and collaborative care approach.',
  },
  '/programs': {
    title: 'Clinical Programs | ALMACURA',
    description: 'Explore ALMACURA clinical programs including detox, energy revitalization, and longevity strategies.',
  },
  '/programs/detox': {
    title: 'Medical Detox Program | ALMACURA',
    description: 'Safe, medically supervised detoxification programs designed to improve energy, metabolism, and overall health.',
  },
  '/programs/energy-revitalization': {
    title: 'Energy Revitalization Program | ALMACURA',
    description: "Restore your energy levels with ALMACURA's comprehensive energy revitalization program combining advanced therapies.",
  },
  '/programs/longevity-strategy': {
    title: 'Longevity Strategy Program | ALMACURA',
    description: 'Evidence-based longevity strategies for healthy aging, cellular repair, and extending your healthspan.',
  },
  '/services': {
    title: 'Our Services | Integrative Medicine & Wellness | ALMACURA',
    description: "Explore ALMACURA's full range of integrative medicine services including healthspan optimization, functional gynaecology, longevity, diagnostics, and nutrition.",
  },
  '/services/integrative-medicine': {
    title: 'Integrative Medicine | Almacura Institute',
    description: "Almacura's integrative medicine combines modern and holistic care to treat root causes and restore lasting vitality.",
  },
  '/services/healthspan-optimization': {
    title: 'Healthspan Optimization | ALMACURA',
    description: "Optimise your healthspan with Almacura's science-backed protocols for longevity, energy, and disease prevention.",
  },
  '/services/functional-gynaecology': {
    title: 'Functional Gynaecology in Hyderabad | ALMACURA',
    description: "Expert care for hormonal balance, menopause, pelvic health, and women's wellness through functional gynaecology.",
  },
  '/services/longevity': {
    title: 'Longevity & Healthy Aging Programs | ALMACURA',
    description: "Discover Almacura's longevity programs focused on healthy ageing, disease prevention, and extending healthspan.",
  },
  '/services/diagnostics': {
    title: 'Advanced Diagnostics | ALMACURA Hyderabad',
    description: 'Comprehensive diagnostic evaluations for personalized treatment planning, disease prevention, and health optimization.',
  },
  '/services/nutrition': {
    title: 'Clinical Nutrition | ALMACURA',
    description: 'Personalised nutrition plans supporting healing, hormone balance, and healthspan optimisation through targeted metabolic care.',
  },
  '/therapies': {
    title: 'Therapies We Offer | ALMACURA',
    description: 'Explore evidence-based therapies including HBOT, EECP, PRP, HIFEM, HIFU, regenerative medicine, and wellness treatments at ALMACURA.',
  },
  '/therapies/hbot': {
    title: 'Hyperbaric Oxygen Therapy (HBOT) in Hyderabad | ALMACURA',
    description: 'Hyperbaric Oxygen Therapy (HBOT) at Almacura boosts healing, energy, and cellular repair as part of your care plan.',
  },
  '/therapies/eecp': {
    title: 'EECP Therapy for Heart Health | ALMACURA Hyderabad',
    description: 'Non-invasive EECP therapy to improve circulation, cardiac health, and recovery under expert medical supervision at ALMACURA.',
  },
  '/therapies/prp': {
    title: 'PRP Regenerative Therapy | ALMACURA Hyderabad',
    description: 'Discover Platelet-Rich Plasma (PRP) therapy for regenerative healing, tissue repair, and advanced wellness solutions.',
  },
  '/therapies/ozone': {
    title: 'Ozone Therapy in Hyderabad | ALMACURA',
    description: 'Medical-grade ozone therapy at Almacura to stimulate immune function, improve oxygen delivery, and support healing.',
  },
  '/therapies/hydrogen': {
    title: 'Hydrogen Therapy | Almacura Institute',
    description: 'Explore hydrogen therapy at Almacura, an antioxidant-rich treatment supporting recovery and reduced inflammation.',
  },
  '/therapies/hifem': {
    title: 'HIFEM Pelvic Chair Therapy | ALMACURA',
    description: 'Strengthen pelvic floor muscles and improve bladder control with advanced HIFEM Pelvic Chair therapy at ALMACURA.',
  },
  '/therapies/hifu': {
    title: "HIFU Women's Wellness Treatment | ALMACURA",
    description: 'Experience non-surgical HIFU treatment for vaginal rejuvenation, pelvic wellness, and intimate health at ALMACURA.',
  },
  '/therapies/dscb': {
    title: 'Chronic Pain Management Therapy | ALMACURA',
    description: 'Find relief from chronic pain with advanced DSCB Pain Portal Block therapy and personalized pain management programs.',
  },
  '/therapies/iv-therapy': {
    title: 'IV Therapy | Nutrient Infusions | Almacura',
    description: "Almacura's IV therapy delivers vitamins and nutrients directly for faster recovery and enhanced vitality.",
  },
  '/therapies/red-light': {
    title: 'Red Light Therapy | Almacura Institute',
    description: "Almacura's red light therapy supports cellular repair, skin health, and recovery via photobiomodulation.",
  },
  '/therapies/acupuncture': {
    title: 'Acupuncture Therapy | Almacura Institute',
    description: 'Almacura offers acupuncture as part of integrative care to relieve pain, balance hormones, and support wellness.',
  },
  '/therapies/yoga': {
    title: 'Regenerative Yoga Therapy | ALMACURA',
    description: 'Restore mobility, improve flexibility, and support healing through guided regenerative yoga programs at ALMACURA.',
  },
  '/therapies/infrared-sauna': {
    title: 'Infrared Sauna Therapy | ALMACURA Hyderabad',
    description: 'Deep thermal infrared sauna therapy for cellular detoxification, circulation, muscle recovery, and stress relief at ALMACURA.',
  },
  '/blog': {
    title: 'Health Blog | ALMACURA',
    description: 'Read the latest articles on integrative medicine, healthspan optimization, and wellness from ALMACURA experts.',
  },
  '/faq': {
    title: 'Patient FAQs | ALMACURA Healthcare',
    description: 'Find answers to common questions about consultations, therapies, treatment plans, appointments, and patient care at ALMACURA.',
  },
  '/testimonials': {
    title: 'Patient Testimonials | ALMACURA',
    description: 'Read patient experiences and testimonials about their health journey with ALMACURA integrative medicine.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | ALMACURA',
    description: "Read ALMACURA's privacy policy regarding data collection, usage, and protection of patient information.",
  },
  '/terms': {
    title: 'Terms & Conditions | ALMACURA',
    description: "Review the terms and conditions for using ALMACURA's website and services.",
  },
  '/disclaimer': {
    title: 'Medical Disclaimer | ALMACURA',
    description: 'Important medical disclaimer regarding the information and services provided by ALMACURA.',
  },
  '/sitemap': {
    title: 'Sitemap | ALMACURA',
    description: 'Navigate all pages and sections of the ALMACURA website.',
  },
};

// Generate meta tags for a route
function generateMetaTags(route, seo) {
  const canonical = `${BASE_URL}${route}`;
  const title = seo.title;
  const description = seo.description;
  
  return `
    <title>${title}</title>
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${BASE_URL}/logo.png" />
    <meta property="og:site_name" content="ALMACURA" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@AlmacuraHealth" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${BASE_URL}/logo.png" />`;
}

// Read the base index.html
function readBaseHtml() {
  const indexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }
  return fs.readFileSync(indexPath, 'utf-8');
}

// Replace meta tags in HTML
function replaceMetaTags(html, route, seo) {
  const newMetaTags = generateMetaTags(route, seo);
  
  // Remove existing SEO meta tags (title, description, canonical, og:*, twitter:*)
  let modifiedHtml = html
    // Remove title tag
    .replace(/<title>.*?<\/title>/s, '')
    // Remove meta name="title"
    .replace(/<meta\s+name="title"[^>]*>/gi, '')
    // Remove meta name="description"
    .replace(/<meta\s+name="description"[^>]*>/gi, '')
    // Remove canonical link
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    // Remove og: meta tags
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    // Remove twitter: meta tags
    .replace(/<meta\s+property="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');
  
  // Insert new meta tags after <meta name="theme-color">
  modifiedHtml = modifiedHtml.replace(
    /(<meta\s+name="theme-color"[^>]*>)/i,
    `$1${newMetaTags}`
  );
  
  return modifiedHtml;
}

// Create directory recursively
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Main prerender function
function prerender() {
  console.log('🚀 Starting prerender process...\n');
  
  const baseHtml = readBaseHtml();
  const routes = Object.keys(seoConfig);
  const results = [];
  
  for (const route of routes) {
    const seo = seoConfig[route];
    const modifiedHtml = replaceMetaTags(baseHtml, route, seo);
    
    // Determine output path
    let outputPath;
    if (route === '/') {
      outputPath = path.join(distPath, 'index.html');
    } else {
      const routeDir = path.join(distPath, route.slice(1));
      ensureDir(routeDir);
      outputPath = path.join(routeDir, 'index.html');
    }
    
    // Write the file
    fs.writeFileSync(outputPath, modifiedHtml, 'utf-8');
    
    results.push({
      route,
      title: seo.title,
      description: seo.description.substring(0, 60) + '...',
      file: outputPath.replace(distPath, 'dist'),
    });
    
    console.log(`✅ ${route}`);
  }
  
  console.log(`\n📄 Prerendered ${routes.length} routes successfully!\n`);
  
  // Verification summary
  console.log('='.repeat(80));
  console.log('VERIFICATION SUMMARY');
  console.log('='.repeat(80));
  console.log('\nRoute'.padEnd(40) + 'Title (truncated)');
  console.log('-'.repeat(80));
  
  for (const r of results) {
    console.log(r.route.padEnd(40) + r.title.substring(0, 38) + '...');
  }
  
  // Check for duplicates
  console.log('\n' + '='.repeat(80));
  console.log('DUPLICATE CHECK');
  console.log('='.repeat(80));
  
  const titles = results.map(r => r.title);
  const descriptions = results.map(r => seoConfig[r.route].description);
  
  const duplicateTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
  const duplicateDescs = descriptions.filter((d, i) => descriptions.indexOf(d) !== i);
  
  if (duplicateTitles.length > 0) {
    console.log('\n⚠️  Duplicate titles found:');
    [...new Set(duplicateTitles)].forEach(t => console.log(`   - ${t}`));
  } else {
    console.log('\n✅ No duplicate titles');
  }
  
  if (duplicateDescs.length > 0) {
    console.log('\n⚠️  Duplicate descriptions found:');
    [...new Set(duplicateDescs)].forEach(d => console.log(`   - ${d.substring(0, 60)}...`));
  } else {
    console.log('✅ No duplicate descriptions');
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('✨ Prerender complete! Deploy the dist/ folder to Vercel.');
  console.log('='.repeat(80) + '\n');
}

// Run
prerender();
