const words = [
  'I start with a question.',
  'I explore what could be.',
  'I shape the first idea.',
  'I test it in the real world.',
  'I learn what needs to change.',
  'I refine it until it works.'
];

await import('/stage3-content.js');
const regions = [[0,0,856,381],[881,0,860,518],[1765,0,735,283,true],[0,699,1024,363],[1042,737,952,502],[563,1073,975,370,true]];
let shardTexture, captionTexture;
function lettering(ctx, text, width, height) {
  let size = height * 0.55;
  ctx.font = `${size}px PortfolioSceneSerif, serif`;
  size *= Math.min(1, width * 0.90 / ctx.measureText(text).width);
  ctx.font = `${size}px PortfolioSceneSerif, serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#d5ffe2'; ctx.strokeStyle = '#183c32';
  ctx.lineWidth = Math.max(2,size*.025); ctx.lineJoin = 'round';
  ctx.strokeText(text,width/2,height/2); ctx.fillText(text,width/2,height/2);
}
globalThis.portfolioStage2Shards = (original, CanvasTexture) => {
  if (!shardTexture) {
    const canvas = document.createElement('canvas');
    canvas.width = original.image.width; canvas.height = original.image.height;
    const ctx = canvas.getContext('2d');
    regions.forEach(([x,y,w,h,rot],i) => {
      ctx.save(); ctx.translate(x,y);
      if (rot) { ctx.translate(h,0); ctx.rotate(Math.PI/2); }
      lettering(ctx,words[i],w,h); ctx.restore();
    });
    shardTexture = new CanvasTexture(canvas);
    shardTexture.colorSpace = original.colorSpace;
  }
  return shardTexture;
};
globalThis.portfolioStage2Caption = (items, CanvasTexture) => {
  if (!captionTexture) {
    const canvas = document.createElement('canvas'); canvas.width=1024;
    canvas.height=Math.round(1024/items[0].aspect);
    lettering(canvas.getContext('2d'),'Ideas need testing.',canvas.width,canvas.height);
    captionTexture=new CanvasTexture(canvas);
  }
  return items.map(item=>({...item,texture:captionTexture,atlasUV:{offset:[0,0],scale:[1,1]}}));
};

