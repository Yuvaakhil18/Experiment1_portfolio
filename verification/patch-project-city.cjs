const fs=require('node:fs');
const path=require('node:path');
const file=path.join(__dirname,'../assets/main-B9-HtP-f.js');
let s=fs.readFileSync(file,'utf8');
const edits=[
 ['QS=XS.map((e,t)=>','QS=(globalThis.portfolioBuildings||XS).map((e,t)=>'],
 ['let n=ZS[t]||{x:0,y:0};return{id:', 'let n=e.position||ZS[t]||{x:0,y:0};return{id:'],
 ['let a=`JOIN THE WAITLIST`','let a=`COLLABORATE WITH ME`'],
 ['function DD(e,t){X.play','function DD(e,t){if(globalThis.openPortfolioBuilding){globalThis.openPortfolioBuilding(t.id);return}X.play'],
 ['e._waitlistFlow.openEmail();let t=e.components.ringHit','globalThis.openPortfolioContact();let t=e.components.ringHit'],
 ['if(!e._waitlistOpen&&e._waitlistFlow&&e._waitlistFlow.openEmail){X.play(`click`),globalThis.openPortfolioContact();','if(!e._waitlistOpen){X.play(`click`),globalThis.openPortfolioContact();'],
 ['c.userData._marker=d,e.scene.add(c),o.push(d)','c.userData._marker=d,globalThis.labelPortfolioBuilding?.(c,s,dc,Cr,Zr,Gn),e.scene.add(c),o.push(d)']
];
for(const [a,b] of edits){if(s.includes(b))continue;if(s.split(a).length!==2)throw Error('Ambiguous/missing hook: '+a);s=s.replace(a,b)}
if(!fs.existsSync(file+'.before-project-city'))fs.copyFileSync(file,file+'.before-project-city');
fs.writeFileSync(file,s);
