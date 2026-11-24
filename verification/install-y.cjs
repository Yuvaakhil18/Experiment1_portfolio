const fs=require('node:fs');
const file='assets/main-B9-HtP-f.js';
let s=fs.readFileSync(file,'utf8');
const start=s.indexOf('handleInput(e,t,n){');
const end=s.indexOf('_checkZeroGesture(){',start);
if(start<0||end<0)throw Error('Gesture boundary missing');
s=s.slice(0,start)+'handleInput(e,t,n){globalThis.portfolioYInput(this,e,t,n)}'+s.slice(end);
s=s.replaceAll('DRAW A ZERO','TRACE THE Y').replaceAll('assets/brand/nav_logo_white.svg','assets/brand/yuva.svg').replaceAll('assets/ui/zero_icon.jpg','assets/brand/yuva-icon.svg');
fs.writeFileSync(file,s);
