// Shared brand mark: the hero's banded sun, reduced to a logo. A half-disc
// rising off the horizon, cut by two bands that thicken toward the ground.
// Three solid slices and one line, so it holds its shape down to favicon size.
//
// The bands are real gaps in the path (not paper-colored bars), so the mark
// sits on any surface. No element ids, so it can render many times per page.
// The same path is used by app/icon.svg and app/opengraph-image.tsx.

export const SUN_PATH =
  'M5.53 7.3A13 13 0 0 1 26.47 7.3Z' +
  'M3.66 10.9A13 13 0 0 1 4.66 8.65H27.34A13 13 0 0 1 28.34 10.9Z' +
  'M3 15A13 13 0 0 1 3.17 12.9H28.83A13 13 0 0 1 29 15Z'

/** `size` is the rendered height; the mark is 32:20 wide. */
export default function SunGlyph({ size = 24, sun = 'var(--accent)', horizon = 'var(--ink)' }: { size?: number; sun?: string; horizon?: string }) {
  return (
    <svg width={Math.round(size * 1.6 * 100) / 100} height={size} viewBox="0 0.5 32 20" fill="none" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      <path d={SUN_PATH} fill={sun} />
      <line x1="1.4" y1="18.6" x2="30.6" y2="18.6" stroke={horizon} strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  )
}
