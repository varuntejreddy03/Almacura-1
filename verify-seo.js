/**
 * SEO Verification Script for ALMACURA
 * Checks that all prerendered HTML files have unique, correct metadata
 * Run: node verify-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

const routes = [
  '/',
  '/about',
  '/about/founder',
  '/about/team',
  '/contact',
  '/services',
  '/services/integrative-medicine',
  '/services/functional-gynaecology',
  '/services/healthspan-optimization',
  '/services/longevity',
  '/services/diagnostics',
  '/services/nutrition',
  '/therapies',
  '/therapies/hbot',
  '/therapies/eecp',
  '/therapies/prp',
  '/therapies/ozone',
  '/therapies/hydrogen',
  '/therapies/hifem',
  '/therapies/hifu',
  '/therapies/dscb',
  '/programs',
  '/programs/detox',
  '/faq',
  '/blog',
  '/testimonials',
];

function extractMetadata(html) {
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i);
  const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/i);
  const h1Match = html.match(/<h1[^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/h1>/i);
  
  return {
    title: titleMatch ? titleMatch[1].trim() : null,
    description: descMatch ? descMatch[1].trim() : null,
    canonical: canonicalMatch ? canonicalMatch[1].trim() : null,
    ogTitle: ogTitleMatch ? ogTitleMatch[1].trim() : null,
    ogUrl: ogUrlMatch ? ogUrlMatch[1].trim() : null,
    h1: h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : null,
  };
}

function getHtmlPath(route) {
  if (route === '/') {
    return path.join(distPath, 'index.html');
  }
  return path.join(distPath, route.slice(1), 'index.html');
}

function verify() {
  console.log('🔍 SEO Verification Report for ALMACURA\n');
  console.log('='.repeat(100));
  
  const results = [];
  const titles = new Map();
  const descriptions = new Map();
  const canonicals = new Map();
  
  let errors = 0;
  let warnings = 0;
  
  for (const route of routes) {
    const htmlPath = getHtmlPath(route);
    
    if (!fs.existsSync(htmlPath)) {
      console.log(`❌ MISSING: ${route} - File not found: ${htmlPath}`);
      errors++;
      continue;
    }
    
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const meta = extractMetadata(html);
    
    results.push({ route, ...meta });
    
    // Track duplicates
    if (meta.title) {
      if (titles.has(meta.title)) {
        titles.get(meta.title).push(route);
      } else {
        titles.set(meta.title, [route]);
      }
    }
    
    if (meta.description) {
      if (descriptions.has(meta.description)) {
        descriptions.get(meta.description).push(route);
      } else {
        descriptions.set(meta.description, [route]);
      }
    }
    
    if (meta.canonical) {
      if (canonicals.has(meta.canonical)) {
        canonicals.get(meta.canonical).push(route);
      } else {
        canonicals.set(meta.canonical, [route]);
      }
    }
  }
  
  // Print results table
  console.log('\nRoute'.padEnd(45) + 'Title'.padEnd(50) + 'Status');
  console.log('-'.repeat(100));
  
  for (const r of results) {
    const status = [];
    if (!r.title) status.push('NO TITLE');
    if (!r.description) status.push('NO DESC');
    if (!r.canonical) status.push('NO CANONICAL');
    
    const statusStr = status.length > 0 ? `⚠️  ${status.join(', ')}` : '✅';
    const titleStr = r.title ? r.title.substring(0, 47) + (r.title.length > 47 ? '...' : '') : 'MISSING';
    
    console.log(r.route.padEnd(45) + titleStr.padEnd(50) + statusStr);
    
    if (status.length > 0) warnings++;
  }
  
  // Check for duplicates
  console.log('\n' + '='.repeat(100));
  console.log('DUPLICATE ANALYSIS');
  console.log('='.repeat(100));
  
  const duplicateTitles = [...titles.entries()].filter(([_, routes]) => routes.length > 1);
  const duplicateDescs = [...descriptions.entries()].filter(([_, routes]) => routes.length > 1);
  const duplicateCanonicals = [...canonicals.entries()].filter(([_, routes]) => routes.length > 1);
  
  if (duplicateTitles.length > 0) {
    console.log('\n❌ DUPLICATE TITLES:');
    for (const [title, routes] of duplicateTitles) {
      console.log(`   "${title.substring(0, 60)}..."`);
      console.log(`   Found in: ${routes.join(', ')}`);
      errors++;
    }
  } else {
    console.log('\n✅ All titles are unique');
  }
  
  if (duplicateDescs.length > 0) {
    console.log('\n❌ DUPLICATE DESCRIPTIONS:');
    for (const [desc, routes] of duplicateDescs) {
      console.log(`   "${desc.substring(0, 60)}..."`);
      console.log(`   Found in: ${routes.join(', ')}`);
      errors++;
    }
  } else {
    console.log('✅ All descriptions are unique');
  }
  
  if (duplicateCanonicals.length > 0) {
    console.log('\n❌ DUPLICATE CANONICALS:');
    for (const [canonical, routes] of duplicateCanonicals) {
      console.log(`   "${canonical}"`);
      console.log(`   Found in: ${routes.join(', ')}`);
      errors++;
    }
  } else {
    console.log('✅ All canonicals are unique');
  }
  
  // Canonical correctness check
  console.log('\n' + '='.repeat(100));
  console.log('CANONICAL URL VERIFICATION');
  console.log('='.repeat(100));
  
  let canonicalErrors = 0;
  for (const r of results) {
    const expectedCanonical = `https://www.almacura.in${r.route}`;
    if (r.canonical && r.canonical !== expectedCanonical) {
      console.log(`\n⚠️  ${r.route}`);
      console.log(`   Expected: ${expectedCanonical}`);
      console.log(`   Found:    ${r.canonical}`);
      canonicalErrors++;
    }
  }
  
  if (canonicalErrors === 0) {
    console.log('\n✅ All canonical URLs are correct (self-referencing)');
  }
  
  // Summary
  console.log('\n' + '='.repeat(100));
  console.log('SUMMARY');
  console.log('='.repeat(100));
  console.log(`\nTotal routes checked: ${routes.length}`);
  console.log(`Files found: ${results.length}`);
  console.log(`Errors: ${errors}`);
  console.log(`Warnings: ${warnings}`);
  
  if (errors === 0 && warnings === 0) {
    console.log('\n🎉 All SEO checks passed! Ready for deployment.\n');
  } else {
    console.log('\n⚠️  Please fix the issues above before deployment.\n');
  }
  
  return errors === 0;
}

// Run verification
const success = verify();
process.exit(success ? 0 : 1);
