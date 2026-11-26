// Stage 4 keeps the original cloud, map, camera and timing systems.
// Only the text atlas pixels are replaced.
const stage4Lines = [
  ['My journey', 'is still taking shape.'],
  ['I study', 'Computer Science and Engineering.'],
  ['At Raghu Engineering College,', 'I learn by building.'],
  ['Every project', 'turns a lesson into practice.'],
  ['I am learning', 'how ideas become useful software.'],
  ['', ''],
  ['', ''],
  ['', ''],
];
const stage4Regions = [[483.53,960.06,622.09,175.83],[1083.94,1769.27,963.5,278.73],[0,1192.84,579.84,361.65],[1313.72,1281.75,734.56,336.67],[581.43,1135.89,732.38,335.67],[1240.79,930.09,803.79,351.66],[0,1848.2,750.18,199.8],[0,1555.48,769.93,292.71]];
let stage4Texture;
function stage4Fit(ctx, text, width, size) {
  let value = size;
  ctx.font = `${value}px PortfolioSceneSerif, Georgia, serif`;
  value *= Math.min(1, width / ctx.measureText(text).width);
  ctx.font = `${value}px PortfolioSceneSerif, Georgia, serif`;
  return value;
}
globalThis.portfolioStage4Text = (items, CanvasTexture) => {
  if (!stage4Texture) {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 2048;
    const ctx = canvas.getContext('2d');
    stage4Regions.forEach(([x,y,w,h], index) => {
      const [lead, detail] = stage4Lines[index];
      ctx.save(); ctx.beginPath(); ctx.rect(x,y,w,h); ctx.clip();
      ctx.clearRect(x,y,w,h);
      ctx.fillStyle = '#122d29'; ctx.strokeStyle = 'rgba(244,255,245,0.88)';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const leadSize = stage4Fit(ctx, lead, w * .92, h * .30);
      ctx.lineWidth = Math.max(2, leadSize * .025);
      ctx.strokeText(lead, x + w/2, y + h * .36);
      ctx.fillText(lead, x + w/2, y + h * .36);
      const detailSize = stage4Fit(ctx, detail, w * .92, h * .20);
      ctx.lineWidth = Math.max(2, detailSize * .025);
      ctx.strokeText(detail, x + w/2, y + h * .70);
      ctx.fillText(detail, x + w/2, y + h * .70);
      ctx.restore();
    });
    stage4Texture = new CanvasTexture(canvas);
    stage4Texture.colorSpace = items[0]?.texture?.colorSpace;
    stage4Texture.generateMipmaps = false;
    stage4Texture.wrapS = 1001;
    stage4Texture.wrapT = 1001;
    stage4Texture.minFilter = 1006;
    stage4Texture.magFilter = 1006;
  }
  return items.map((item, index) => {
    const [x, y, w, h] = stage4Regions[index];
    const inset = 3;
    return {...item, texture: stage4Texture, atlasUV: {offset:[(x + inset)/2048, 1-(y + h - inset)/2048], scale:[(w - inset*2)/2048, (h - inset*2)/2048]}};
  });
};
await import('/stage5-content.js');
