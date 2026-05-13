'use client'
import type { CSSProperties } from 'react'

type Variant = 'compact' | 'featured'

export default function ProjectVisual({ num, accent, variant = 'compact' }: { num: string; accent: string; variant?: Variant }) {
  const ac = accent === 'var(--cyan)' ? '#00D4C8' : '#F4622A'
  const acA = accent === 'var(--cyan)' ? 'rgba(0,212,200,' : 'rgba(244,98,42,'
  const h = variant === 'featured' ? 240 : 110

  const shell: CSSProperties = {
    height: h,
    borderRadius: 10,
    background: `${acA}0.04)`,
    border: `1px solid ${acA}0.1)`,
    position: 'relative',
    overflow: 'hidden',
    padding: variant === 'featured' ? '20px 24px' : '12px 14px',
    boxSizing: 'border-box',
  }
  const labelSize = variant === 'featured' ? 11 : 8
  const headlineSize = variant === 'featured' ? 18 : 13

  if (num === '01') {
    // AI Dashboard — Liberty
    const bars = [55, 72, 48, 88, 63, 79, 91, 67, 54, 82, 70, 60]
    return (
      <div style={shell}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: variant === 'featured' ? 16 : 8 }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: labelSize, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>AI Dashboard · Live</span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: headlineSize, color: ac }}>−60% tickets</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: variant === 'featured' ? 6 : 3, height: variant === 'featured' ? 130 : 52 }}>
          {bars.slice(0, variant === 'featured' ? 12 : 8).map((bh, i) => (
            <div key={i} style={{ flex: 1, height: `${bh}%`, background: i === (variant === 'featured' ? 7 : 7) ? ac : `${acA}${0.15 + i * 0.04})`, borderRadius: '2px 2px 0 0' }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: variant === 'featured' ? 14 : 6, marginTop: variant === 'featured' ? 18 : 8 }}>
          {['Housing Units', 'Open Tickets', 'AI Resolved', 'Avg Resolution'].slice(0, variant === 'featured' ? 4 : 3).map((l, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: variant === 'featured' ? 8 : 6, height: variant === 'featured' ? 8 : 6, borderRadius: 1, background: i === 0 ? ac : `${acA}0.3)` }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (num === '02') {
    // iOS App — ELS
    return (
      <div style={{ ...shell, display: 'flex', gap: variant === 'featured' ? 24 : 10 }}>
        <div style={{ width: variant === 'featured' ? 110 : 52, flexShrink: 0, background: 'rgba(0,0,0,0.3)', borderRadius: variant === 'featured' ? 16 : 8, padding: variant === 'featured' ? 12 : 6, display: 'flex', flexDirection: 'column', gap: variant === 'featured' ? 8 : 4, border: variant === 'featured' ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <div style={{ height: variant === 'featured' ? 6 : 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2, width: '60%', margin: '0 auto 2px' }} />
          <div style={{ flex: 1, background: `${acA}0.12)`, borderRadius: variant === 'featured' ? 8 : 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: variant === 'featured' ? '8px 6px' : '4px 3px' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 8 : 6, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 2 }}>This Week</span>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 22 : 11, color: ac, lineHeight: 1 }}>$24.5k</span>
          </div>
          <div style={{ height: variant === 'featured' ? 28 : 14, background: 'rgba(255,255,255,0.05)', borderRadius: variant === 'featured' ? 6 : 3 }} />
          <div style={{ height: variant === 'featured' ? 28 : 14, background: 'rgba(255,255,255,0.05)', borderRadius: variant === 'featured' ? 6 : 3 }} />
          <div style={{ height: variant === 'featured' ? 16 : 8, background: `${acA}0.15)`, borderRadius: 2, margin: '0 2px' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: variant === 'featured' ? 12 : 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: labelSize, color: ac, letterSpacing: '0.04em' }}>ELS Business App</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: 'rgba(255,255,255,0.3)' }}>iOS · Live</span>
          </div>
          {['Scheduling', 'Invoicing', 'P&L Tracking', 'CRM'].slice(0, variant === 'featured' ? 4 : 3).map((l, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: variant === 'featured' ? 10 : 5 }}>
              <div style={{ width: variant === 'featured' ? 24 : 14, height: variant === 'featured' ? 24 : 14, borderRadius: variant === 'featured' ? 6 : 3, background: `${acA}${0.1 + i * 0.05})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: variant === 'featured' ? 10 : 6, height: variant === 'featured' ? 10 : 6, borderRadius: '50%', background: ac, opacity: 0.75 }} />
              </div>
              {variant === 'featured' && (
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{l}</span>
              )}
              <div style={{ height: variant === 'featured' ? 8 : 6, background: 'rgba(255,255,255,0.06)', borderRadius: 2, flex: 1 }} />
            </div>
          ))}
          <div style={{ marginTop: 'auto', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: variant === 'featured' ? 14 : 9, color: `${acA}0.75)` }}>20 hrs/week saved</div>
        </div>
      </div>
    )
  }

  if (num === '03') {
    // Cloak Wraps — Web + Branding
    return (
      <div style={shell}>
        <div style={{ display: 'flex', gap: variant === 'featured' ? 8 : 4, marginBottom: variant === 'featured' ? 16 : 8 }}>
          {['#0A0A0A', '#1A1A2E', ac, 'rgba(255,255,255,0.15)'].map((c, i) => (
            <div key={i} style={{ width: variant === 'featured' ? 32 : 18, height: variant === 'featured' ? 32 : 18, borderRadius: variant === 'featured' ? 6 : 4, background: c, border: '1px solid rgba(255,255,255,0.08)' }} />
          ))}
          <div style={{ marginLeft: 'auto', fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 10 : 7, color: 'rgba(255,255,255,0.35)', lineHeight: variant === 'featured' ? '32px' : '18px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Brand System</div>
        </div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 56 : 18, color: 'var(--off-white)', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: variant === 'featured' ? 14 : 6 }}>CLOAK</div>
        <div style={{ display: 'flex', gap: 4, marginBottom: variant === 'featured' ? 12 : 6 }}>
          <div style={{ height: variant === 'featured' ? 10 : 5, background: ac, borderRadius: 2, width: '35%' }} />
          <div style={{ height: variant === 'featured' ? 10 : 5, background: 'rgba(255,255,255,0.06)', borderRadius: 2, flex: 1 }} />
        </div>
        <div style={{ display: 'flex', gap: variant === 'featured' ? 8 : 4 }}>
          <div style={{ height: variant === 'featured' ? 38 : 22, background: ac, borderRadius: variant === 'featured' ? 6 : 3, padding: variant === 'featured' ? '0 18px' : '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 12 : 7, color: '#000', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Get Quote</span>
          </div>
          <div style={{ height: variant === 'featured' ? 38 : 22, background: 'rgba(255,255,255,0.05)', borderRadius: variant === 'featured' ? 6 : 3, border: '1px solid rgba(255,255,255,0.1)', flex: 1 }} />
        </div>
        <div style={{ position: 'absolute', bottom: variant === 'featured' ? 12 : 8, right: variant === 'featured' ? 18 : 10, fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: `${acA}0.55)`, letterSpacing: '0.04em' }}>Tempe&apos;s #1 wrap studio</div>
      </div>
    )
  }

  if (num === '04') {
    // Zona Pest — SEO / local search
    const positions = [
      { city: 'Scottsdale, AZ', rank: '#1', pct: 100 },
      { city: 'Mesa, AZ', rank: '#1', pct: 96 },
      { city: 'Phoenix, AZ', rank: '#3', pct: 78 },
    ]
    return (
      <div style={shell}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: variant === 'featured' ? 14 : 8 }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: labelSize, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Local SEO · Live</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: variant === 'featured' ? 6 : 4, height: variant === 'featured' ? 6 : 4, borderRadius: '50%', background: ac, boxShadow: `0 0 6px ${ac}` }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>Tracking 12 keywords</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: variant === 'featured' ? 10 : 5 }}>
          {positions.map((p, i) => (
            <div key={p.city} style={{ display: 'flex', alignItems: 'center', gap: variant === 'featured' ? 12 : 7 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: variant === 'featured' ? 11 : 8, color: 'rgba(255,255,255,0.75)', width: variant === 'featured' ? 110 : 70, flexShrink: 0 }}>{p.city}</span>
              <div style={{ flex: 1, height: variant === 'featured' ? 8 : 5, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, width: `${p.pct}%`, background: `linear-gradient(90deg, ${acA}0.4), ${ac})`, borderRadius: 4 }} />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 16 : 11, color: i === 0 ? ac : 'rgba(255,255,255,0.85)', width: variant === 'featured' ? 28 : 18, textAlign: 'right' }}>{p.rank}</span>
            </div>
          ))}
        </div>
        {variant === 'featured' && (
          <div style={{ marginTop: 16, fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>$59–$99/mo subscription plans · FieldRoutes portal</div>
        )}
      </div>
    )
  }

  if (num === '05') {
    // Easy Landscape — before/after slider
    return (
      <div style={shell}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: variant === 'featured' ? 14 : 8 }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: labelSize, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Before / After</span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 13 : 9, color: ac }}>67+ ★ reviews</span>
        </div>
        <div style={{ position: 'relative', height: variant === 'featured' ? 140 : 56, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Before — dirt/grass tones */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3a2e22 0%, #5a4a35 60%, #6b5a3f 100%)' }} />
          {/* After — green turf tones (right half) */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', right: 0, background: `linear-gradient(135deg, #1e3a2e 0%, #2e5a3f 60%, ${ac} 200%)` }} />
          {/* Drag handle */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: 'rgba(255,255,255,0.85)', boxShadow: '0 0 8px rgba(255,255,255,0.4)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: variant === 'featured' ? 28 : 18, height: variant === 'featured' ? 28 : 18, borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
            <svg width={variant === 'featured' ? 14 : 10} height={variant === 'featured' ? 14 : 10} viewBox="0 0 24 24" fill="none" stroke="#0a1018" strokeWidth="3">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 6 15 12 9 18" style={{ transform: 'translateX(6px)' }} />
            </svg>
          </div>
          {/* Labels */}
          <span style={{ position: 'absolute', top: 6, left: 8, fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Before</span>
          <span style={{ position: 'absolute', top: 6, right: 8, fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 9 : 7, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>After</span>
        </div>
        {variant === 'featured' && (
          <div style={{ marginTop: 14, display: 'flex', gap: 12, fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
            <span>Gilbert, AZ</span><span>·</span><span>Hardscape + Turf</span><span>·</span><span>ROC Licensed</span>
          </div>
        )}
      </div>
    )
  }

  // num === '06' — Canyon Cleaning — service area map + booking
  const areas = [
    { x: 28, y: 38 }, { x: 55, y: 32 }, { x: 72, y: 50 }, { x: 42, y: 62 }, { x: 60, y: 70 },
  ]
  return (
    <div style={shell}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: variant === 'featured' ? 14 : 8 }}>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: labelSize, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Service Areas</span>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: variant === 'featured' ? 13 : 9, color: ac }}>Phoenix Valley</span>
      </div>
      <div style={{ display: 'flex', gap: variant === 'featured' ? 16 : 8, height: variant === 'featured' ? 150 : 60 }}>
        <div style={{ flex: 1, position: 'relative', borderRadius: 6, background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
          {/* Grid lines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${acA}0.06) 1px, transparent 1px), linear-gradient(90deg, ${acA}0.06) 1px, transparent 1px)`, backgroundSize: variant === 'featured' ? '24px 24px' : '12px 12px' }} />
          {/* Pins */}
          {areas.map((a, i) => (
            <div key={i} style={{ position: 'absolute', left: `${a.x}%`, top: `${a.y}%`, transform: 'translate(-50%, -100%)' }}>
              <div style={{ width: variant === 'featured' ? 12 : 7, height: variant === 'featured' ? 12 : 7, borderRadius: '50% 50% 50% 0', background: ac, transform: 'rotate(-45deg)', boxShadow: `0 0 8px ${ac}` }} />
            </div>
          ))}
        </div>
        <div style={{ width: variant === 'featured' ? 140 : 86, display: 'flex', flexDirection: 'column', gap: variant === 'featured' ? 6 : 3 }}>
          {['Mesa', 'Gilbert', 'Chandler', 'Tempe', 'Queen Creek'].slice(0, variant === 'featured' ? 5 : 3).map((c, i) => (
            <div key={c} style={{ display: 'flex', alignItems: 'center', gap: variant === 'featured' ? 8 : 5, padding: variant === 'featured' ? '6px 10px' : '3px 6px', borderRadius: 4, background: i === 0 ? `${acA}0.1)` : 'rgba(255,255,255,0.03)', border: i === 0 ? `1px solid ${acA}0.2)` : '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ width: variant === 'featured' ? 6 : 4, height: variant === 'featured' ? 6 : 4, borderRadius: '50%', background: i === 0 ? ac : 'rgba(255,255,255,0.3)' }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: variant === 'featured' ? 10 : 8, color: i === 0 ? ac : 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
