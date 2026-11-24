const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'assets', 'main-B9-HtP-f.js');
const backup = path.join(__dirname, 'main-before-stage3.js');
let source = fs.readFileSync(file, 'utf8');
if (!fs.existsSync(backup)) fs.writeFileSync(backup, source);
const needle = 'n=new vb(e.textScene,t);n.resize(e._vw,e._vh),e.components.textLayout=n';
const replacement = 'n=new vb(e.textScene,globalThis.portfolioStage3Text?globalThis.portfolioStage3Text(t,As):t);n.resize(e._vw,e._vh),e.components.textLayout=n';
if (source.includes('globalThis.portfolioStage3Text(t,As)')) {
  source = source.replace('globalThis.portfolioStage3Text(t,As)', 'globalThis.portfolioStage3Text(t,dc)');
  fs.writeFileSync(file, source);
  console.log('Corrected Stage 3 texture constructor reference.');
  process.exit(0);
}
if (!source.includes(needle)) throw new Error('Stage 3 text layout hook not found');
source = source.replace(needle, replacement);
fs.writeFileSync(file, source);
console.log('Patched Stage 3 text layout hook.');
