const { execSync } = require('child_process');
const fs = require('fs');

const routes = [
  { name: 'services', path: '/services' },
  { name: 'marketing-strategy', path: '/marketing-strategy' },
  { name: 'paid-advertising', path: '/paid-advertising' },
  { name: 'contact', path: '/contact' },
  { name: 'journal', path: '/journal' }
];

console.log('Running Lighthouse baseline on key routes...');
const results = [];

for (const r of routes) {
  for (const mode of ['mobile', 'desktop']) {
    const outFile = `scratch_lh_${r.name}_${mode}.json`;
    const flags = mode === 'desktop' ? '--preset=desktop' : '';
    const cmd = `npx.cmd lighthouse http://localhost:3005${r.path} --output=json --output-path=${outFile} --chrome-flags="--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage" ${flags} --only-categories=performance,accessibility,best-practices,seo --quiet`;
    
    console.log(`Auditing ${r.path} (${mode})...`);
    try {
      execSync(cmd, { stdio: 'pipe' });
      const lh = JSON.parse(fs.readFileSync(outFile, 'utf8'));
      const row = {
        route: r.path,
        mode,
        perf: Math.round(lh.categories.performance?.score * 100),
        a11y: Math.round(lh.categories.accessibility?.score * 100),
        bp: Math.round(lh.categories['best-practices']?.score * 100),
        seo: Math.round(lh.categories.seo?.score * 100),
        fcp: lh.audits['first-contentful-paint']?.displayValue,
        lcp: lh.audits['largest-contentful-paint']?.displayValue,
        tbt: lh.audits['total-blocking-time']?.displayValue,
        cls: lh.audits['cumulative-layout-shift']?.displayValue
      };
      results.push(row);
      console.log(`  -> Perf: ${row.perf}, A11y: ${row.a11y}, BP: ${row.bp}, SEO: ${row.seo} | LCP: ${row.lcp}, TBT: ${row.tbt}`);
    } catch (err) {
      console.error(`  -> Failed: ${err.message}`);
    }
  }
}

fs.writeFileSync('scratch_baseline_summary.json', JSON.stringify(results, null, 2));
console.log('Finished batch audit.');

