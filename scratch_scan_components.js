const fs = require('fs');
const path = require('path');

const compDir = 'components';
const components = fs.readdirSync(compDir)
  .filter(f => f.endsWith('.tsx'))
  .map(f => f.replace('.tsx', ''));

const allFiles = [];
function getFiles(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = dir + '/' + f.name;
    if (f.isDirectory()) getFiles(full);
    else if (f.name.endsWith('.tsx') || f.name.endsWith('.ts')) allFiles.push(full);
  }
}
getFiles('app');
getFiles('components');
getFiles('lib');

console.log('--- COMPONENT USAGE SCAN ---');
components.forEach(comp => {
  let count = 0;
  const compFile = 'components/' + comp + '.tsx';
  allFiles.forEach(f => {
    if (f === compFile) return;
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(comp)) count++;
  });
  console.log(`${comp}: ${count > 0 ? `Used (${count} files)` : 'UNUSED (Dead code)'}`);
});

