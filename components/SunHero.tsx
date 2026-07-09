'use client'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

/**
 * Signature "Sunstate" motif — a precision-engineered sun RISING over a horizon.
 * Layered like a real desert sunrise: sunburst haze, sky-wash, bloom, a banded
 * disc that melts into the horizon, orbit rings, ground light-spill, ticks.
 *
 * The horizon (viewBox y=300) is anchored to `horizon` (a % of hero height) via
 * translateY, so it lands at the same spot on every screen. The viewBox extends
 * well above y=0 so the rays fade out instead of being clipped into a hard box.
 *
 * Subtle scroll parallax + mount rise; respects reduced motion.
 */

const EASE = [0.22, 1, 0.36, 1] as const

// Round trig-derived coords to a fixed precision so SSR (Node) and client (browser)
// stringify identically — Math.sin/cos can differ in the last ULP across engines,
// which otherwise triggers a hydration mismatch.
const q = (n: number) => Math.round(n * 100) / 100

// viewBox: minY -320, height 780 → horizon (y=300) sits at (300+320)/780 = 79.49% down
const HORIZON_FRAC = 79.49

// horizontal "atmosphere" bands — thin up top, thickening as the disc melts into the horizon
const BANDS = [
  { y: 188, h: 2 }, { y: 205, h: 2.5 }, { y: 220, h: 3.5 }, { y: 234, h: 4.5 },
  { y: 247, h: 5.5 }, { y: 259, h: 7 }, { y: 270, h: 8.5 }, { y: 281, h: 10 }, { y: 292, h: 12 },
]

// rhythmic sunburst: [outer radius, stroke width] cycling every 4 rays
const RAY_STEPS = [
  { r: 600, w: 1.7 },
  { r: 505, w: 0.7 },
  { r: 552, w: 1.0 },
  { r: 505, w: 0.7 },
]

// wide, soft "god-ray" beams among the thin rays (degrees; upper hemisphere in SVG's y-down space)
const BEAMS = [201, 233, 266, 299, 332]

// warm embers/dust motes drifting up from the horizon (deterministic so SSR matches client)
const EMBERS = [
  { x: 250, y: 296, r: 3.4, d: 13.0, delay: 0.0 },
  { x: 332, y: 290, r: 2.6, d: 15.0, delay: 3.5 },
  { x: 430, y: 295, r: 3.0, d: 12.0, delay: 1.4 },
  { x: 496, y: 292, r: 2.2, d: 16.0, delay: 5.2 },
  { x: 560, y: 298, r: 2.0, d: 18.0, delay: 9.4 },
  { x: 648, y: 297, r: 2.4, d: 11.5, delay: 2.7 },
  { x: 704, y: 293, r: 3.2, d: 13.5, delay: 2.0 },
  { x: 772, y: 288, r: 2.4, d: 17.0, delay: 6.4 },
  { x: 838, y: 296, r: 3.6, d: 12.5, delay: 0.8 },
  { x: 912, y: 290, r: 2.6, d: 15.5, delay: 4.0 },
  { x: 968, y: 294, r: 3.0, d: 14.0, delay: 7.2 },
  { x: 190, y: 292, r: 2.8, d: 16.5, delay: 8.6 },
]

export default function SunHero({ horizon = '45%' }: { horizon?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const rise = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -44])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.32])

  const rays = Array.from({ length: 56 })

  return (
    <div ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div style={{ position: 'absolute', inset: 0, y, opacity: fade }}>
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          initial={{ y: reduce ? 0 : 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <svg
            viewBox="0 -320 1200 780"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: 'absolute', top: horizon, left: '50%', transform: `translate(-50%, -${HORIZON_FRAC}%)`, width: 'min(1240px, 128vw)', height: 'auto' }}
          >
            <defs>
              <radialGradient id="sunDisc" cx="50%" cy="70%" r="70%">
                <stop offset="0%" stopColor="#FFE7BC" />
                <stop offset="24%" stopColor="#FFC578" />
                <stop offset="48%" stopColor="#FF974E" />
                <stop offset="72%" stopColor="#F5602B" />
                <stop offset="88%" stopColor="rgba(236,83,36,0.85)" />
                <stop offset="96%" stopColor="rgba(240,78,35,0.42)" />
                <stop offset="100%" stopColor="rgba(240,78,35,0)" />
              </radialGradient>
              {/* bright inner highlight (sun's hot core, set slightly high) */}
              <radialGradient id="core" cx="50%" cy="38%" r="42%">
                <stop offset="0%" stopColor="rgba(255,248,232,0.85)" />
                <stop offset="55%" stopColor="rgba(255,236,200,0.18)" />
                <stop offset="100%" stopColor="rgba(255,236,200,0)" />
              </radialGradient>
              {/* soft sunburst haze behind the rays */}
              <radialGradient id="burstHaze" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,150,80,0.20)" />
                <stop offset="40%" stopColor="rgba(245,110,45,0.10)" />
                <stop offset="100%" stopColor="rgba(245,110,45,0)" />
              </radialGradient>
              <radialGradient id="skyWash" cx="50%" cy="60%" r="60%">
                <stop offset="0%" stopColor="rgba(255,150,85,0.26)" />
                <stop offset="42%" stopColor="rgba(245,120,60,0.12)" />
                <stop offset="78%" stopColor="rgba(240,110,50,0.03)" />
                <stop offset="100%" stopColor="rgba(240,110,50,0)" />
              </radialGradient>
              <radialGradient id="spill" cx="50%" cy="0%" r="72%">
                <stop offset="0%" stopColor="rgba(255,140,80,0.16)" />
                <stop offset="100%" stopColor="rgba(255,140,80,0)" />
              </radialGradient>
              {/* ray fade: transparent at the outer tip, warm near the disc */}
              <linearGradient id="rayFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(190,52,24,0)" />
                <stop offset="70%" stopColor="rgba(214,74,38,0.32)" />
                <stop offset="100%" stopColor="rgba(198,58,28,0.62)" />
              </linearGradient>
              <linearGradient id="rim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,244,224,0.95)" />
                <stop offset="100%" stopColor="rgba(255,244,224,0)" />
              </linearGradient>
              <linearGradient id="hzLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(23,20,15,0)" />
                <stop offset="16%" stopColor="rgba(23,20,15,0.4)" />
                <stop offset="50%" stopColor="rgba(23,20,15,0.55)" />
                <stop offset="84%" stopColor="rgba(23,20,15,0.4)" />
                <stop offset="100%" stopColor="rgba(23,20,15,0)" />
              </linearGradient>
              <filter id="bloom" x="-70%" y="-70%" width="240%" height="240%">
                <feGaussianBlur stdDeviation="34" />
              </filter>
              {/* god-ray beam fade (user space, centered on the sun) */}
              <radialGradient id="beamGrad" gradientUnits="userSpaceOnUse" cx="600" cy="300" r="560">
                <stop offset="0%" stopColor="rgba(255,205,150,0)" />
                <stop offset="16%" stopColor="rgba(255,193,128,0.20)" />
                <stop offset="55%" stopColor="rgba(255,175,105,0.09)" />
                <stop offset="100%" stopColor="rgba(255,175,105,0)" />
              </radialGradient>
              <filter id="bloomWide" x="-90%" y="-90%" width="280%" height="280%"><feGaussianBlur stdDeviation="62" /></filter>
              <filter id="bloomTight" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="17" /></filter>
              <filter id="beamBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="9" /></filter>
              <filter id="bandSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6" /></filter>
              <filter id="discFeather" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9" /></filter>
              {/* fine grain to de-band the disc gradient */}
              <filter id="sunGrain" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              {/* clip only removes everything BELOW the horizon; leaves the top open for rays */}
              <clipPath id="aboveHorizon"><rect x="-800" y="-1200" width="2800" height="1500" /></clipPath>
              <clipPath id="sunClip"><circle cx="600" cy="300" r="185" /></clipPath>
            </defs>

            {/* ground light-spill (below horizon) — radial so it fades on all sides */}
            <ellipse cx="600" cy="300" rx="480" ry="150" fill="url(#spill)" />

            <g clipPath="url(#aboveHorizon)">
              {/* atmosphere — radial washes only (they fade before the SVG edges, so no hard box) */}
              <ellipse cx="600" cy="300" rx="680" ry="440" fill="url(#skyWash)" />
              <motion.circle cx="600" cy="300" r="330" fill="rgba(255,146,78,0.20)" filter="url(#bloomWide)" style={{ y: rise }} />
              <circle cx="600" cy="300" r="470" fill="url(#burstHaze)" className="sun-atmo" />
              <motion.circle cx="600" cy="300" r="185" fill="rgba(255,124,64,0.5)" filter="url(#bloom)" style={{ y: rise }} className="sun-shimmer" />

              {/* god-ray beams — soft volumetric wedges, drifting slowly */}
              <g className="sun-godrays" style={{ transformOrigin: '600px 300px', animation: reduce ? 'none' : 'slowSpin 240s linear infinite reverse' }} filter="url(#beamBlur)">
                {BEAMS.map((deg, i) => {
                  const a = (deg * Math.PI) / 180
                  const w = 0.085, R = 560
                  const p1 = `${q(600 + Math.cos(a - w) * R)},${q(300 + Math.sin(a - w) * R)}`
                  const p2 = `${q(600 + Math.cos(a + w) * R)},${q(300 + Math.sin(a + w) * R)}`
                  return <polygon key={i} points={`600,300 ${p1} ${p2}`} fill="url(#beamGrad)" />
                })}
              </g>

              {/* sunburst — rotation on inner group, parallax on outer */}
              <motion.g style={{ y: rise }}>
                <g className="sun-rays" style={{ transformOrigin: '600px 300px' }} opacity="0.5">
                  {rays.map((_, i) => {
                    const a = (i / rays.length) * Math.PI * 2
                    const step = RAY_STEPS[i % RAY_STEPS.length]
                    const r1 = 198
                    return (
                      <line key={i}
                        x1={q(600 + Math.cos(a) * r1)} y1={q(300 + Math.sin(a) * r1)}
                        x2={q(600 + Math.cos(a) * step.r)} y2={q(300 + Math.sin(a) * step.r)}
                        stroke="url(#rayFade)" strokeWidth={step.w} strokeLinecap="round"
                      />
                    )
                  })}
                </g>
              </motion.g>

              {/* technical orbit rings */}
              {[236, 300, 372].map((r, i) => (
                <circle key={r} cx="600" cy="300" r={r} fill="none" stroke="rgba(23,20,15,0.11)" strokeWidth="1" strokeDasharray={i === 1 ? '2 10' : undefined} />
              ))}

              {/* hot halo behind the disc + hot smear along the horizon */}
              <motion.circle cx="600" cy="300" r="210" fill="rgba(255,224,176,0.45)" filter="url(#bloomTight)" style={{ y: rise }} />
              <ellipse cx="600" cy="300" rx="300" ry="20" fill="rgba(255,240,206,0.55)" filter="url(#bloomTight)" />

              {/* the rising disc — feathered edge so it melts into the sky */}
              <motion.g style={{ y: rise }}>
                <circle cx="600" cy="300" r="178" fill="url(#sunDisc)" filter="url(#discFeather)" />
                <circle cx="600" cy="300" r="185" fill="url(#core)" clipPath="url(#sunClip)" />

                {/* fine grain to break gradient banding on the disc */}
                <rect x="415" y="115" width="370" height="185" clipPath="url(#sunClip)" filter="url(#sunGrain)" opacity="0.14" style={{ mixBlendMode: 'overlay' }} />

                {/* sunset atmosphere bands — softened so the disc melts into the horizon */}
                <g clipPath="url(#sunClip)" filter="url(#bandSoft)">
                  {BANDS.map((b, i) => (
                    <rect key={i} x="408" y={b.y} width="384" height={b.h} fill="var(--paper)" opacity={0.2 + (i / (BANDS.length - 1)) * 0.5} />
                  ))}
                </g>

                {/* fine measurement ring + rim light */}
                <circle cx="600" cy="300" r="196" fill="none" stroke="rgba(23,20,15,0.10)" strokeWidth="1" strokeDasharray="1 6" />
                <path d="M 430 300 A 170 170 0 0 1 770 300" fill="none" stroke="url(#rim)" strokeWidth="2" clipPath="url(#sunClip)" opacity="0.7" />

                {/* orbiting node with a faint radial guide */}
                <g style={{ transformOrigin: '600px 300px', animation: reduce ? 'none' : 'slowSpin 30s linear infinite' }}>
                  <line x1="600" y1="300" x2="600" y2="34" stroke="rgba(23,20,15,0.10)" strokeWidth="1" />
                  <circle cx="600" cy="34" r="4.5" fill="#17140F" />
                  <circle cx="600" cy="34" r="9" fill="none" stroke="rgba(23,20,15,0.36)" strokeWidth="1" />
                </g>
              </motion.g>

              {/* rising embers — glowing motes drifting up from the horizon (in front of the disc) */}
              {EMBERS.map((e, i) => (
                <g key={i} className="sun-ember" style={{ animationDuration: `${e.d}s`, animationDelay: `${e.delay}s`, transformOrigin: `${e.x}px ${e.y}px` }}>
                  <circle cx={e.x} cy={e.y} r={e.r * 2.6} fill="rgba(255,190,120,0.30)" />
                  <circle cx={e.x} cy={e.y} r={e.r} fill="rgba(255,242,214,0.95)" />
                </g>
              ))}
            </g>

            {/* horizon line + coordinate ticks */}
            <line x1="0" y1="300" x2="1200" y2="300" stroke="url(#hzLine)" strokeWidth="1.4" />
            {Array.from({ length: 41 }).map((_, i) => {
              const x = 40 + i * 28
              const major = i % 4 === 0
              const edge = Math.min(i, 40 - i) / 12
              return <line key={i} x1={x} y1="300" x2={x} y2={major ? 314 : 308} stroke="rgba(23,20,15,0.3)" strokeWidth="1" opacity={Math.min(1, edge)} />
            })}
            <text x="600" y="332" textAnchor="middle" fill="rgba(23,20,15,0.38)" style={{ font: '10px var(--font-mono, monospace)', letterSpacing: '0.14em' }}>33.35°N · 111.79°W · GILBERT, AZ</text>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
