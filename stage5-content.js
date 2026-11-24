const stage5Projects = [
  { name: 'Akhil Personal OS', status: 'Live', summary: 'A futuristic portfolio experienced as an operating system, with dashboard navigation, themed environments, custom visuals, and a playable Snake game.', url: 'https://yuvaakhil18.github.io/akhil-personal-os/' },
  { name: 'AssetBrain AI Assistant', status: 'Live demo', summary: 'An AI-assisted assistant for organizing assets, documents, relationships, and cited answers.', url: 'https://assetbrain-ai-assistant-ubk5.vercel.app/' },
  { name: 'Yunetra', status: 'Team project', summary: 'A peer-to-peer learning exchange platform matching people who want to learn with people who can teach.', url: 'https://yunetra-vision-that-unites-potentia.vercel.app/' },
  { name: 'Drift — Life Saver AI Assistant', status: 'Case study', summary: 'An AI-assisted accountability and scheduling concept exploring progress graphs, memory, and calendar-aware intervention.' },
  { name: 'Legal Intelligence', status: 'In progress', summary: 'An AI-assisted platform for summarizing, explaining, and analyzing legal documents. Security work is still ongoing.' },
  { name: 'Redrob', status: 'Hackathon project', summary: 'A résumé-ranking decision-support system created with a large dataset for the India.Runs Hackathon.' },
];
stage5Projects.push({name:'TerraTrace',status:'Hackathon project',summary:'An AI-assisted carbon-footprint tracking and reduction project.'});
// Keep the original compressed 8192x4096 city, orientation and sampling.
// The generated preview is not suitable as a production texture.
globalThis.portfolioCityTexture=(original)=>original;
let stage5Panel; let stage5Index = 0;
const positions=[{x:-.05,y:.10},{x:.115,y:.09},{x:.045,y:.105},{x:.063,y:-.12},{x:-.095,y:-.12},{x:-.045,y:-.10},{x:-.115,y:.045}];
const originalBuildingMedia = [
  { logo: 'nike', video: 'Nike-Card.mp4' },
  { logo: 'openai', video: 'ChatGPT-Card.mp4' },
  { logo: 'google', video: 'Google-Card.mp4' },
  { logo: 'spotify', video: 'Spotify-Card.mp4' },
  { logo: 'nike', video: 'Nike-Card.mp4' },
  { logo: 'openai', video: 'ChatGPT-Card.mp4' },
  { logo: 'google', video: 'Google-Card.mp4' },
];
globalThis.portfolioBuildings=stage5Projects.map((p,i)=>({...p,...originalBuildingMedia[i],position:positions[i],role:p.name,description:p.summary,tools:[]}));
globalThis.openPortfolioBuilding=(id)=>{stage5Index=Number(id.slice(1));stage5EnsurePanel().hidden=false;stage5Render();};
globalThis.labelPortfolioBuilding=(group, data, Texture, Mesh, Plane, Material)=>{
  const canvas=document.createElement('canvas'); canvas.width=1024; canvas.height=160;
  const ctx=canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='rgba(17,28,24,.86)'; ctx.roundRect(8,8,1008,144,24,24); ctx.fill();
  ctx.fillStyle='#f4f1e9'; ctx.font='bold 54px "Supply Sans", Arial, sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  const label=data.company || data.name; ctx.fillText(label.length>22 ? `${label.slice(0,20)}…` : label,512,82);
  const texture=new Texture(canvas); texture.needsUpdate=true;
  const material=new Material({map:texture,transparent:true,depthWrite:false,depthTest:false});
  const sign=new Mesh(new Plane(.72,.112),material); sign.position.set(0,.13,.04); sign.renderOrder=20; sign.userData.portfolioLabel=true; group.add(sign);
};
globalThis.openPortfolioContact=()=>{
 let dialog=document.querySelector('#portfolio-contact');
 if(!dialog){dialog=document.createElement('dialog');dialog.id='portfolio-contact';dialog.innerHTML='<div class="portfolio-contact-kicker">CENTRAL HEADQUARTERS / CONNECTION</div><h2>Collaborate with me</h2><p class="portfolio-contact-lead">Have an idea worth building, a product to shape, or a creative technical problem to explore?</p><p class="portfolio-contact-copy">I am open to freelance work, collaborations, and conversations about interactive software and AI-assisted development.</p><div class="portfolio-contact-links"><a href="mailto:yuvaakhil2318@gmail.com">Email Yuvaakhil</a><a href="https://github.com/Yuvaakhil18" target="_blank" rel="noopener">GitHub</a><a href="https://www.linkedin.com/in/c-yuva-akhil2318/" target="_blank" rel="noopener">LinkedIn</a></div><form method="dialog"><button class="portfolio-contact-close">Return to the city</button></form>';document.body.append(dialog)}dialog.showModal();
};
const stage5Render = () => {
  if (!stage5Panel) return;
  const p = stage5Projects[stage5Index];
  stage5Panel.querySelector('.portfolio-stage5-title').textContent = p.name;
  stage5Panel.querySelector('.portfolio-stage5-status').textContent = p.status;
  stage5Panel.querySelector('.portfolio-stage5-summary').textContent = p.summary;
  stage5Panel.querySelector('.portfolio-stage5-count').textContent = `${String(stage5Index + 1).padStart(2, '0')} / ${String(stage5Projects.length).padStart(2, '0')}`;
  const link = stage5Panel.querySelector('.portfolio-stage5-link'); link.hidden = !p.url; if (p.url) link.href = p.url;
};
const stage5EnsurePanel = () => {
  if (stage5Panel) return stage5Panel;
  stage5Panel = document.createElement('section'); stage5Panel.className = 'portfolio-stage5-panel'; stage5Panel.setAttribute('aria-label', 'Yuvaakhil portfolio projects');
  stage5Panel.innerHTML = `<div class="portfolio-stage5-kicker">PROJECTS / WORK / DIRECTION</div><h2 class="portfolio-stage5-title"></h2><div class="portfolio-stage5-status"></div><p class="portfolio-stage5-summary"></p><div class="portfolio-stage5-actions"><button type="button" class="portfolio-stage5-prev" aria-label="Previous project">←</button><span class="portfolio-stage5-count"></span><button type="button" class="portfolio-stage5-next" aria-label="Next project">→</button><a class="portfolio-stage5-link" target="_blank" rel="noopener noreferrer">Open project</a></div><div class="portfolio-stage5-contact"><span>Have an idea worth building?</span><a href="mailto:yuvaakhil2318@gmail.com?subject=Collaboration%20with%20Yuvaakhil">Collaborate with me</a></div>`;
  document.body.appendChild(stage5Panel);
  stage5Panel.querySelector('.portfolio-stage5-prev').onclick = () => { stage5Index = (stage5Index - 1 + stage5Projects.length) % stage5Projects.length; stage5Render(); };
  stage5Panel.querySelector('.portfolio-stage5-next').onclick = () => { stage5Index = (stage5Index + 1) % stage5Projects.length; stage5Render(); };
  stage5Render();
  stage5Panel.querySelector('.portfolio-stage5-prev').remove();
  stage5Panel.querySelector('.portfolio-stage5-next').remove();
  stage5Panel.querySelector('.portfolio-stage5-count').hidden=true;
  const close=document.createElement('button');close.textContent='Close project';close.onclick=()=>{stage5Panel.hidden=true};stage5Panel.append(close);
  return stage5Panel;
};
const stage5Relabel = () => {
  const controls = document.querySelectorAll('.s5-pad-btn');
  controls.forEach((b) => { const l = b.getAttribute('aria-label') || ''; if (/next company/i.test(l)) b.setAttribute('aria-label', 'Next project'); if (/previous company/i.test(l)) b.setAttribute('aria-label', 'Previous project'); });
  if (!controls.length && stage5Panel) stage5Panel.hidden = true;
};
// Render only on creation or a project change. Observing our own text writes
// previously caused an endless microtask loop that blocked input and painting.
stage5Relabel();
setInterval(stage5Relabel, 500);
