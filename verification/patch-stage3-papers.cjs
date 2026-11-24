const fs = require('node:fs');
const path = require('node:path');
const target = path.resolve(__dirname,'../assets/main-B9-HtP-f.js');
let source = fs.readFileSync(target,'utf8');
if(source.includes('portfolioPaperAtlas')) { console.log('Already integrated'); process.exit(0); }
const changes = [
 ['a=i.length,o=e.assetLoader.getAsset(`certAtlas`),s=i.map', 'a=i.length,o=globalThis.portfolioPaperAtlas(e.assetLoader.getAsset(`certAtlas`),i,"milestones",dc),s=i.map'],
 ['a=e.assetLoader.getAsset(`moneyShredsAtlas`),o=i.map', 'a=globalThis.portfolioPaperAtlas(e.assetLoader.getAsset(`moneyShredsAtlas`),i,"projects",dc),o=i.map']
];
for(const [from,to] of changes){
 if(source.split(from).length!==2) throw Error('Paper signature mismatch');
 source=source.replace(from,to);
}
const backup=path.join(__dirname,'main-before-stage3-papers.js');
if(!fs.existsSync(backup)) fs.copyFileSync(target,backup);
fs.writeFileSync(target,source);
console.log('Connected project and milestone content to existing paper meshes.');
