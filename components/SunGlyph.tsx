// Shared brand mark — a precision "rising sun" that echoes the SunHero motif:
// a half-disc resting on the horizon beneath a rhythmic ray crown, with a soft
// rim-light at the crest. Pure SVG (no element ids), so it can render many times
// per page and inside both server and client components without collisions.
//
// Coords are rounded to 2dp (q) so the server- and client-rendered strings match
// exactly — Math.sin/cos can differ in the last ULP across engines and would
// otherwise trip a hydration mismatch.

const q = (n: number) => Math.round(n * 100) / 100

const CX = 16
const CY = 21 // horizon sits at ~65% down, like the favicon — a balanced "rising" composition
const R_IN = 9

// symmetric fan of 9 rays, 198°–342° around straight-up (270°); alternating
// length + weight gives the same "engineered" rhythm as the hero's sunburst.
const RAYS = Array.from({ length: 9 }, (_, i) => {
  const a = ((198 + i * 18) * Math.PI) / 180
  const long = i % 2 === 0
  const rOut = long ? 13.8 : 12.2
  return {
    x1: q(CX + Math.cos(a) * R_IN), y1: q(CY + Math.sin(a) * R_IN),
    x2: q(CX + Math.cos(a) * rOut), y2: q(CY + Math.sin(a) * rOut),
    w: long ? 1.5 : 1,
  }
})

export default function SunGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* ray crown */}
      <g stroke="var(--ink)" strokeLinecap="round">
        {RAYS.map((r, i) => <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} strokeWidth={r.w} />)}
      </g>
      {/* rising half-disc, resting on the horizon */}
      <path d="M9 21 A7 7 0 0 1 23 21 Z" fill="var(--accent)" />
      {/* soft rim-light near the crest */}
      <path d="M12.1 18.2 A4.8 4.8 0 0 1 19.9 18.2" fill="none" stroke="var(--accent-2)" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      {/* horizon (drawn last for a crisp base line) */}
      <line x1="2.5" y1="21" x2="29.5" y2="21" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
