// Printed content on the existing paper meshes. No geometry or shader changes.
const projects = [
  ['Akhil Personal OS', 'An interactive portfolio imagined as an operating system. Desktop navigation, themed environments and a playable Snake game.', 'Concept and experience direction by Yuvaakhil. Built with AI assistance, primarily OpenAI Codex.'],
  ['Yunetra', 'Students exchange knowledge without money. A peer-to-peer learning platform built with a team.', 'My contribution: frontend design, responsive layouts, animations and interactive elements. Matching and skill validation are in development with teammates.'],
  ['AssetBrain AI Assistant', 'An AI-assisted application with a working public demo.', 'An independent project built through AI-assisted development and iterative prompting.'],
  ['Legal Intelligence', 'Exploring AI-assisted legal document summaries, explanations and corrections.', 'Work in progress. Security safeguards are still being developed. No public demo.'],
  ['Creative development', 'I turn ideas into interactive experiences using AI-assisted development.', 'Comfortable with HTML, CSS, Python, Firebase, Git and GitHub. Learning JavaScript and agentic workflows.'],
  ['My learning journey', 'B.Tech in Computer Science and Engineering at Raghu Engineering College.', 'Expected graduation: 2027. Current CGPA: 7.4. Based in Visakhapatnam, India.']
];
const milestones = [
  ['PromptWars Virtual', 'Top 100 — Challenge 3', 'Certificate of merit'],
  ['IBM / edX', 'Web Development with HTML & CSS', 'Guided project completion'],
  ['IBM / edX', 'Python Basics for Data Science', 'Course completion'],
  ['Infosys Springboard', 'Basics of Python', 'Course completion'],
  ['TCS iON', 'Career Edge — Young Professional', 'Course completion'],
  ['AlgoUniversity', 'GEN-AI Camp', 'Camp completion'],
  ['Accenture / Forage', 'Data Analytics and Visualization', 'Job simulation completion'],
  ['ApexPlanet', 'Virtual Web Development', 'HTML, CSS and JavaScript training • 2026']
];
const cache = new Map();
function paragraph(ctx, text, x, y, width, size) {
  ctx.font = `${size}px PortfolioSceneSerif, Georgia, serif`;
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > width && line) {
      ctx.fillText(line, x, y); y += size * 1.3; line = word;
    } else line = next;
  }
  ctx.fillText(line, x, y);
  return y + size * 1.5;
}
globalThis.portfolioPaperAtlas = (original, regions, kind, CanvasTexture) => {
  if (cache.has(kind)) return cache.get(kind);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 2048;
  const ctx = canvas.getContext('2d');
  const records = kind === 'projects' ? projects : milestones;
  regions.forEach(([x,y,w,h], index) => {
    ctx.save(); ctx.beginPath(); ctx.rect(x,y,w,h); ctx.clip();
    // Certificate meshes face the camera with their local top downward.
    // Rotate the print inside its atlas cell, leaving mesh motion and UVs intact.
    if (kind === 'milestones') {
      ctx.translate(2*x+w, 2*y+h);
      ctx.rotate(Math.PI);
    }
    ctx.fillStyle = '#eee6ce'; ctx.fillRect(x,y,w,h);
    ctx.strokeStyle = '#555344'; ctx.lineWidth = 2;
    ctx.strokeRect(x+18,y+18,w-36,h-36);
    ctx.fillStyle = '#11150f';
    const margin = 36, width = w-margin*2;
    let cursor = y + h*.12;
    cursor = paragraph(ctx, 'YUVAAKHIL', x+margin,cursor,width,24);
    cursor += 24;
    cursor = paragraph(ctx,records[index][0],x+margin,cursor,width,kind==='projects'?58:46);
    cursor += 20;
    const summaries = [
      'An operating-system portfolio with a playable Snake game.',
      'Peer-to-peer learning without money. My role: frontend design and interactions.',
      'An independent AI-assisted application with a public demo.',
      'AI-assisted legal document understanding. Work in progress.',
      'HTML, CSS, Python, Firebase, Git and AI-assisted development.',
      'Raghu Engineering College. B.Tech CSE. Graduation 2027. CGPA 7.4.'
    ];
    cursor = paragraph(ctx,kind==='projects'?summaries[index]:records[index][1],x+margin,cursor,width,kind==='projects'?36:32);
    if(kind!=='projects') paragraph(ctx,records[index][2],x+margin,cursor+16,width,25);
    ctx.restore();
  });
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = original.colorSpace;
  cache.set(kind,texture);
  return texture;
};
