import { ImageResponse } from 'next/og'
import { SUN_PATH } from '@/components/SunGlyph'

// Default social share image for every page that doesn't define its own.
export const alt = 'Sunstate DevWorks: custom web, mobile apps, branding and AI from Mesa, Arizona'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#F4F1EA', color: '#17140F' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width={96} height={60} viewBox="0 0.5 32 20" fill="none">
            <path d={SUN_PATH} fill="#F04B1F" />
            <line x1="1.4" y1="18.6" x2="30.6" y2="18.6" stroke="#17140F" strokeWidth="2.3" strokeLinecap="round" />
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
          <div>Mesa · Gilbert · Phoenix · Scottsdale · Chandler · Tempe</div>
          <div style={{ color: '#F04E23' }}>sunstatedevworks.com</div>
        </div>
      </div>
    ),
    size,
  )
}
