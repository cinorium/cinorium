const fs = require('fs');

const file = process.argv[2] || 'scratch_test_lh.json';
const lh = JSON.parse(fs.readFileSync(file, 'utf8'));

console.log('=== AUDIT RESULTS FOR ' + lh.requestedUrl + ' ===');
console.log('Device Form Factor:', lh.configSettings?.formFactor);

for (const catId of ['performance', 'accessibility', 'best-practices', 'seo']) {
  const cat = lh.categories[catId];
  if (!cat) continue;
  console.log(`\n--- ${cat.title.toUpperCase()} (Score: ${Math.round(cat.score * 100)}) ---`);
  
  cat.auditRefs.forEach(ref => {
    const a = lh.audits[ref.id];
    if (a && a.score !== null && a.score < 1) {
      console.log(`[FAILED: ${ref.id}] (score: ${a.score}) ${a.title}`);
      if (a.displayValue) console.log(`  Value: ${a.displayValue}`);
      if (a.explanation) console.log(`  Explanation: ${a.explanation}`);
      if (a.details?.items?.length) {
        console.log(`  Items (${a.details.items.length}):`);
        a.details.items.slice(0, 3).forEach(it => {
          const summary = it.node?.snippet || it.url || it.label || JSON.stringify(it);
          console.log(`    - ${String(summary).slice(0, 120)}`);
        });
      }
    }
  });
}

console.log('\n--- CORE WEB VITALS & METRICS ---');
const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
  'speed-index',
  'interactive'
];
metrics.forEach(m => {
  const a = lh.audits[m];
  if (a) console.log(`${a.title}: ${a.displayValue} (score: ${a.score})`);
});

