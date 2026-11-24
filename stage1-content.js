// Stage 1 uses the original sprite layout and animation, with personal text.
const face = new FontFace('PortfolioSceneSerif', 'url(/assets/fonts/STKBureau-SerifBook.otf)');
try { await face.load(); document.fonts.add(face); }
catch (error) { console.warn('Scene font unavailable; using serif fallback.', error); }

const panels = [
  ['I’m', 'Yuvaakhil, a curious builder.'],
  ['I learn by', 'turning questions into projects.'],
  ['With AI as', 'a partner, I bring ideas to life.'],
  ['Every project', 'moves me toward engineering.'],
];
const textures = [];
globalThis.portfolioStage1Text = (items, CanvasTexture) => items.map((item, index) => {
  if (!textures[index]) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = Math.round(canvas.width / item.aspect);
    const ctx = canvas.getContext('2d');
    const lines = panels[index];
    // Mixed-case serif, with a larger lead line, echoes the original atlas.
    // Fit each line independently without changing the sprite's geometry.
    let size = canvas.height * 0.35;
    ctx.font = `${size}px PortfolioSceneSerif, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#122d29';
    ctx.strokeStyle = 'rgba(244,255,245,0.88)';
    ctx.lineJoin = 'round';
    lines.forEach((line, i) => {
      let lineSize = size * (i === 0 && index !== 0 ? 1.08 : 1);
      ctx.font = `${lineSize}px PortfolioSceneSerif, serif`;
      lineSize *= Math.min(1, canvas.width * 0.94 / ctx.measureText(line).width);
      ctx.font = `${lineSize}px PortfolioSceneSerif, serif`;
      const y = canvas.height * (i === 0 ? 0.32 : 0.70);
      // A narrow light edge keeps the dark lettering readable over the garden.
      ctx.lineWidth = Math.max(2, lineSize * 0.025);
      ctx.strokeText(line, canvas.width / 2, y);
      ctx.fillText(line, canvas.width / 2, y);
    });
    const texture = new CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = texture.magFilter;
    textures[index] = texture;
  }
  return {...item, texture: textures[index], atlasUV: {offset:[0,0],scale:[1,1]}, rotate:false};
});
await import('/loader-y.js');
await import('/stage2-content.js');
await import('/assets/main-B9-HtP-f.js?branding=yuva-1');
