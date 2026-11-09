const fs = require('fs');
const path = require('path');

const routes = [
  'app/page.tsx',
  'app/services/page.tsx',
  'app/marketing-strategy/page.tsx',
  'app/seo-services/page.tsx',
  'app/content-marketing/page.tsx',
  'app/paid-advertising/page.tsx',
  'app/web-development/page.tsx',
  'app/about/page.tsx',
  'app/journal/page.tsx',
  'app/contact/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/return-policy/page.tsx'
];

console.log('--- METADATA & SEO AUDIT ---');
routes.forEach(r => {
  if (!fs.existsSync(r)) {
    console.log(`MISSING FILE: ${r}`);
    return;
  }
  const c = fs.readFileSync(r, 'utf8');
  const hasMeta = c.includes('export const metadata') || c.includes('generateMetadata');
  const titleMatch = c.match(/title:\s*["']([^"']+)["']/);
  const descMatch = c.match(/description:\s*["']([^"']+)["']/);
  const canonMatch = c.match(/canonical:\s*["']([^"']+)["']/);
  const robotsMatch = c.match(/robots:\s*\{([^}]+)\}/);

  console.log(`\nRoute: ${r}`);
  console.log(`  Has metadata: ${hasMeta}`);
  console.log(`  Title: ${titleMatch ? titleMatch[1] : 'NONE or template'}`);
  console.log(`  Desc: ${descMatch ? descMatch[1].slice(0, 70) + '...' : 'NONE'}`);
  console.log(`  Canonical: ${canonMatch ? canonMatch[1] : 'NONE'}`);
  if (robotsMatch) {
    console.log(`  Robots: ${robotsMatch[1].replace(/\s+/g, ' ')}`);
  }
});

