const fs = require('node:fs');
const file = 'assets/main-B9-HtP-f.js';
let source = fs.readFileSync(file, 'utf8');
const needle = 's=t.map(([e,t,n,r],i)=>({texture:h,atlasUV:Nv(e,t,n,r),aspect:Pv(n,r),baseScale:.35,anchor:`center-center`,appearAt:o[i][0],disappearAt:o[i][1]}));m=new vb(e.textScene,s)';
const replacement = 's=t.map(([e,t,n,r],i)=>({texture:h,atlasUV:Nv(e,t,n,r),aspect:Pv(n,r),baseScale:.35,anchor:`center-center`,appearAt:o[i][0],disappearAt:o[i][1]}));s=globalThis.portfolioStage4Text?globalThis.portfolioStage4Text(s,dc):s;m=new vb(e.textScene,s)';
if (source.includes('globalThis.portfolioStage4Text?')) { console.log('Stage 4 already patched'); process.exit(0); }
if (!source.includes(needle)) throw new Error('Stage 4 text hook not found');
fs.copyFileSync(file, 'verification/main-before-stage4.js');
fs.writeFileSync(file, source.replace(needle, replacement));
console.log('Patched Stage 4 text hook');
