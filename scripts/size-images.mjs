// Pre-sizes the site's raster images so next/image never needs Vercel's
// on-demand optimizer (its quota ran out and started answering 402).
//
//   npm run images
//
// For every source image it writes WebP copies at each width in WIDTHS that is
// smaller than the original, into public/sized/ with a content hash in the
// filename (so they can be cached forever), and records the original width +
// hash in lib/image-manifest.json. lib/image-loader.ts reads that manifest to
// point each srcset entry at the right copy. Re-run after adding or replacing
// images; an image missing from the manifest is served as the original file.
import { createHash } from 'node:crypto'
import { readFile, readdir, rm, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { WIDTHS } from '../lib/image-widths.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const OUT = path.join(PUBLIC, 'sized')
const SOURCES = ['work', 'about.png'] // dirs are walked recursively
const EXT = /\.(webp|png|jpe?g)$/i

async function walk(p) {
  const full = path.join(PUBLIC, p)
  if (EXT.test(p)) return [p]
  const entries = await readdir(full, { withFileTypes: true })
  const nested = await Promise.all(entries.map((e) => e.isDirectory() || EXT.test(e.name) ? walk(path.join(p, e.name)) : []))
  return nested.flat()
}

await rm(OUT, { recursive: true, force: true })
const files = (await Promise.all(SOURCES.map(walk))).flat().sort()
const manifest = {}
let bytes = 0, count = 0

for (const rel of files) {
  const buf = await readFile(path.join(PUBLIC, rel))
  const { width } = await sharp(buf).metadata()
  const hash = createHash('sha1').update(buf).digest('hex').slice(0, 8)
  const src = '/' + rel.split(path.sep).join('/')
  // Non-WebP originals (the 29 MB about.png) must never be served directly.
  const keepOriginal = /\.webp$/i.test(rel)
  const widths = WIDTHS.filter((w) => w < width)
  if (!keepOriginal && !widths.length) widths.push(width)
  for (const w of widths) {
    const out = path.join(OUT, rel.replace(EXT, `-${w}.${hash}.webp`))
    await mkdir(path.dirname(out), { recursive: true })
    const data = await sharp(buf).resize({ width: w }).webp({ quality: 75, effort: 6 }).toBuffer()
    await writeFile(out, data)
    bytes += data.length; count++
  }
  manifest[src] = { w: width, h: hash, ...(keepOriginal ? {} : { o: 0 }) }
}

await writeFile(path.join(ROOT, 'lib/image-manifest.json'), JSON.stringify(manifest, null, 0) + '\n')
console.log(`${files.length} sources -> ${count} sized copies, ${(bytes / 1048576).toFixed(1)} MB`)
