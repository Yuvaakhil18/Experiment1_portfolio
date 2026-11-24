const fs=require('node:fs'),path=require('node:path');
const file=path.resolve(__dirname,'../assets/main-B9-HtP-f.js');
let source=fs.readFileSync(file,'utf8');
if(source.includes('globalThis.portfolioStage2Shards')) {console.log('Already patched');process.exit(0);}
const changes=[
 ['s=e.getAsset(`spcAtlas`),c=new Map(a.map','s=globalThis.portfolioStage2Shards(e.getAsset(`spcAtlas`),dc),c=new Map(a.map'],
 ['s=new vb(i,[{texture:c,atlasUV:Nv(1092.93','s=new vb(i,globalThis.portfolioStage2Caption([{texture:c,atlasUV:Nv(1092.93'],
 ['appearAt:0,disappearAt:.2}]),s.resize(e._vw,e._vh))','appearAt:0,disappearAt:.2}],dc)),s.resize(e._vw,e._vh))']
];
for(const [from,to] of changes){if(source.split(from).length!==2)throw Error('Signature mismatch: '+from);source=source.replace(from,to);}
const backup=path.join(__dirname,'main-before-stage2.js');
if(!fs.existsSync(backup))fs.copyFileSync(file,backup);
fs.writeFileSync(file,source);
console.log('Stage 2 text hooks applied');
