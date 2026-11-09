const fs = require('fs');

const files = [];
function findFiles(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) findFiles(dir + '/' + f.name);
    else if (f.name.endsWith('.tsx') || f.name.endsWith('.ts')) files.push(dir + '/' + f.name);
  }
}
findFiles('app');
findFiles('components');
findFiles('lib');

const servicesContent = fs.readFileSync('app/services/page.tsx', 'utf8');
const idMatches = new Set(Array.from(servicesContent.matchAll(/id=["']([^"']+)["']/g), m => m[1]));
console.log('Existing IDs in app/services/page.tsx:', Array.from(idMatches));

console.log('\n--- BROKEN /services# ANCHOR AUDIT ---');
const brokenAnchors = new Map();
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const anchors = Array.from(c.matchAll(/\/services#([a-zA-Z0-9_-]+)/g), m => m[1]);
  anchors.forEach(a => {
    if (!idMatches.has(a)) {
      if (!brokenAnchors.has(a)) brokenAnchors.set(a, []);
      brokenAnchors.get(a).push(f);
    }
  });
});

for (const [anchor, sources] of brokenAnchors.entries()) {
  console.log(`Anchor: #${anchor}`);
  sources.forEach(s => console.log(`  used in: ${s}`));
}

console.log('\n--- ALL INTERNAL LINKS AUDIT ---');
const internalLinks = new Set();
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hrefs = Array.from(c.matchAll(/href=["'](\/[^"']*)["']/g), m => m[1]);
  hrefs.forEach(h => internalLinks.add(h));
});

console.log(`Total unique internal hrefs found: ${internalLinks.size}`);
for (const href of Array.from(internalLinks).sort()) {
  console.log('  ', href);
}

