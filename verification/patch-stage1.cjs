// Guarded, reversible mechanical insertion into the production bundle.
const fs = require('node:fs');
const path = require('node:path');
const target = path.resolve(__dirname, '../assets/main-B9-HtP-f.js');
const original = fs.readFileSync(target, 'utf8');
const start = 'u=new vb(r,[{texture:d,atlasUV:Nv(0,0,775.26,371.64)';
const end = 'disappearAt:.95}]),u.resize(e._vw,e._vh))';
const a = original.indexOf(start);
const b = original.indexOf(end, a);
if (original.includes('globalThis.portfolioStage1Text')) { console.log('Already integrated'); process.exit(0); }
if (a < 0 || b < a || original.indexOf(start, a+1) >= 0) throw Error('Stage 1 signature mismatch');
const backup = path.join(__dirname, 'main-before-stage1.js');
if (!fs.existsSync(backup)) fs.copyFileSync(target, backup);
const segment = original.slice(a,b+end.length);
const patched = segment.replace('u=new vb(r,[','u=new vb(r,globalThis.portfolioStage1Text([').replace('disappearAt:.95}]),','disappearAt:.95}],dc)),');
fs.writeFileSync(target, original.slice(0,a)+patched+original.slice(b+end.length));
console.log('Inserted Stage 1 texture adapter; original backed up:',backup);
