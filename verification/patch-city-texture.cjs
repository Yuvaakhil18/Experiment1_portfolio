const fs=require('node:fs');const p=require('node:path').join(__dirname,'../assets/main-B9-HtP-f.js');let s=fs.readFileSync(p,'utf8');
const from='e.assetLoader.getAsset(`worldMap`)';const to='globalThis.portfolioCityTexture(e.assetLoader.getAsset(`worldMap`),dc)';
if(!s.includes(to)){if(s.split(from).length!==3)throw Error('Unexpected world map hooks');s=s.split(from).join(to);fs.writeFileSync(p,s)}
