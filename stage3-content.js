import '/stage3-papers.js';
// Stage 3 keeps the original nine animated text panels and replaces only their lettering.
const stage3Panels = [
  ['Money measures', 'a price.'],
  ['Paper marks', 'a milestone.'],
  ['Neither shows', 'what I build.'],
  ['Practice gives', 'meaning.'],
  ['I learn by', 'building.'],
  ['AI helps me', 'explore.'],
  ['Challenges become', 'practice.'],
  ['Work becomes', 'proof.'],
  ['Beyond paper,', 'work remains.'],
];

const stage3Textures = [];
function drawStage3Panel(canvas, lines, aspect) {
  canvas.width = 1200;
  canvas.height = Math.max(360, Math.round(canvas.width / aspect));
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#d9ffe6';
  ctx.strokeStyle = 'rgba(21, 45, 37, 0.78)';
  ctx.lineJoin = 'round';
  const maxWidth = canvas.width * 0.90;
  const baseSize = Math.min(canvas.height * 0.34, 190);
  lines.forEach((line, index) => {
    let size = baseSize * (index === 0 ? 1.04 : 0.90);
    ctx.font = `${size}px PortfolioSceneSerif, Georgia, serif`;
    size *= Math.min(1, maxWidth / ctx.measureText(line).width);
    ctx.font = `${size}px PortfolioSceneSerif, Georgia, serif`;
    ctx.lineWidth = Math.max(2, size * 0.018);
    const y = canvas.height * (index === 0 ? 0.36 : 0.66);
    ctx.strokeText(line, canvas.width / 2, y);
    ctx.fillText(line, canvas.width / 2, y);
  });
}

globalThis.portfolioStage3Text = (items, CanvasTexture) => items.map((item, index) => {
  if (!stage3Textures[index]) {
    const canvas = document.createElement('canvas');
    drawStage3Panel(canvas, stage3Panels[index], item.aspect);
    const texture = new CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = texture.magFilter;
    stage3Textures[index] = texture;
  }
  return { ...item, texture: stage3Textures[index], atlasUV: { offset: [0, 0], scale: [1, 1] } };
});
await import('/stage4-content.js');
