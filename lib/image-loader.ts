import manifest from './image-manifest.json'
import { WIDTHS } from './image-widths.mjs'

// next/image loader that serves the pre-sized copies made by
// scripts/size-images.mjs instead of Vercel's on-demand optimizer.
// For each srcset width it picks the smallest pre-sized copy at least that
// wide; past the largest copy it serves the original (already WebP). Images
// missing from the manifest are served as-is.

type Entry = { w: number; h: string; o?: 0 }
const MANIFEST = manifest as Record<string, Entry>

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const e = MANIFEST[src]
  if (!e) return src
  const sized = WIDTHS.filter((w) => w < e.w || (e.o === 0 && w === e.w))
  const pick = sized.find((w) => w >= width) ?? (e.o === 0 ? sized[sized.length - 1] : undefined)
  if (pick === undefined) return src
  return `/sized${src.replace(/\.(webp|png|jpe?g)$/i, `-${pick}.${e.h}.webp`)}`
}
