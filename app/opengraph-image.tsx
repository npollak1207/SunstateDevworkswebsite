import { ImageResponse } from 'next/og'

// Default social share image for every page that doesn't define its own.
export const alt = 'Sunstate DevWorks: custom web, mobile apps, branding and AI from Gilbert, Arizona'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const q = (n: number) => Math.round(n * 100) / 100
const RAYS = Array.from({ length: 9 }, (_, i) => {
  const a = ((198 + i * 18) * Math.PI) / 180
  const rOut = i % 2 === 0 ? 13.8 : 12.2
  return {
    x1: q(16 + Math.cos(a) * 9), y1: q(21 + Math.sin(a) * 9),
    x2: q(16 + Math.cos(a) * rOut), y2: q(21 + Math.sin(a) * rOut),
    w: i % 2 === 0 ? 1.5 : 1,
  }
})

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#F4F1EA', color: '#17140F' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width={72} height={72} viewBox="0 0 32 32" fill="none">
            {RAYS.map((r, i) => <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="#17140F" strokeWidth={r.w} strokeLinecap="round" />)}
            <path d="M9 21 A7 7 0 0 1 23 21 Z" fill="#F04E23" />
            <line x1="4" y1="21" x2="28" y2="21" stroke="#17140F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em' }}>Sunstate DevWorks</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.035em', maxWidth: 980 }}>
            Custom web, apps &amp; AI, hand-coded in Arizona.
          </div>
          <div style={{ marginTop: 32, fontSize: 30, color: '#3A352D' }}>
            Web design · Mobile apps · Branding · AI automation
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#726C5C' }}>
          <div>Gilbert · Phoenix · Scottsdale · Chandler · Mesa · Tempe</div>
          <div style={{ color: '#F04E23' }}>sunstatedevworks.com</div>
        </div>
      </div>
    ),
    size,
  )
}
