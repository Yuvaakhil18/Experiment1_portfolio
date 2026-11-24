// Decode the original atlas with the bundled Basis decoder; no dependencies.
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const root = path.resolve(__dirname, '..');
function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type), data]);
  let crc = 0xffffffff;
  for (const b of body) {
    crc ^= b;
    for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  const out = Buffer.alloc(data.length + 12);
  out.writeUInt32BE(data.length); body.copy(out, 4);
  out.writeUInt32BE((crc ^ 0xffffffff) >>> 0, out.length - 4);
  return out;
}
(async () => {
  const basis = await require('../vendor/basis/basis_transcoder.js')({wasmBinary: fs.readFileSync(path.join(root, 'vendor/basis/basis_transcoder.wasm'))});
  basis.initializeBasis();
  const file = new basis.KTX2File(new Uint8Array(fs.readFileSync(path.join(root, 'assets/atlases/texts.ktx2'))));
  try {
    if (!file.isValid() || !file.startTranscoding()) throw Error('Invalid atlas');
    const w = file.getWidth(), h = file.getHeight();
    const rgba = new Uint8Array(file.getImageTranscodedSizeInBytes(0, 0, 0, 13));
    if (!file.transcodeImage(rgba, 0, 0, 0, 13, 0, -1, -1)) throw Error('Decode failed');
    const rows = Buffer.alloc(h * (w * 4 + 1));
    for (let y = 0; y < h; y++) Buffer.from(rgba.buffer, y*w*4, w*4).copy(rows, y*(w*4+1)+1);
    const header = Buffer.alloc(13); header.writeUInt32BE(w); header.writeUInt32BE(h,4); header[8]=8; header[9]=6;
    const out = path.join(__dirname, 'texts-original.png');
    fs.writeFileSync(out, Buffer.concat([Buffer.from('89504e470d0a1a0a','hex'), chunk('IHDR',header), chunk('IDAT',zlib.deflateSync(rows)),chunk('IEND',Buffer.alloc(0))]));
    console.log(out);
  } finally { file.close(); file.delete(); }
})().catch(e=>{console.error(e);process.exitCode=1});
