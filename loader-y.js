// Drawing stays in the original input/render loop. Completion requires all three branches.
globalThis.portfolioYInput = function (loader, x, y, down) {
  if (!loader.isReady || loader.isComplete) return;
  const now = performance.now();
  const state = loader._yuvaGesture ||= { bins: new Set(), last: 0, started: 0, distance: 0, previous: null };
  if (!down) { state.previous = null; return; }
  if (now - state.last > 6000) {
    state.bins.clear(); state.distance = 0; state.started = now; state.previous = null;
  }
  state.last = now;
  const size = Math.min(240, innerWidth * .55, innerHeight * .38);
  const px = x * innerWidth / 2 / size + .5;
  const py = -y * innerHeight / 2 / size + .5;
  const segments = [[.15,.12,.5,.48],[.85,.12,.5,.48],[.5,.48,.5,.9]];
  let best = null;
  segments.forEach(([ax,ay,bx,by], branch) => {
    const dx=bx-ax, dy=by-ay;
    const t=Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/(dx*dx+dy*dy)));
    const distance=Math.hypot(px-ax-t*dx,py-ay-t*dy);
    if (!best || distance<best.distance) best={distance,branch,t};
  });
  if (best.distance > .09) { state.previous=null; return; }
  if (state.previous) {
    const distance=Math.hypot(px-state.previous[0],py-state.previous[1]);
    if (distance < .12) state.distance += distance;
  }
  state.previous=[px,py];
  state.bins.add(best.branch*10+Math.min(9,Math.floor(best.t*10)));
  const covered = segments.every((_,branch)=>Array.from(state.bins).filter(b=>Math.floor(b/10)===branch).length>=8);
  if (!covered || state.distance<.95 || now-state.started<600) return;
  loader.circleCenterUV={x:.5,y:.5};
  if (!loader._nearFired) { loader._nearFired=true; loader.onNearComplete?.(); }
  loader._onZeroComplete();
};
const style=document.createElement('style');
style.textContent=`.loader-circle-stage{width:min(240px,55vw,38vh)!important;height:min(240px,55vw,38vh)!important;background:center/contain no-repeat url('/assets/brand/y-guide.svg')} .loader-circle-ring,.loader-circle-handle{display:none!important}`;
document.head.appendChild(style);
