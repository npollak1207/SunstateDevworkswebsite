'use client'
import { useEffect, useMemo, useState } from 'react'
import Reveal from '@/components/Reveal'
import { CTASection } from '@/components/editorial'
import ProjectCard, { ProjectCardStyles } from '@/components/work/ProjectCard'
import { PROJECTS, type Tag } from '@/lib/projects'

const allTags: ('All' | Tag)[] = ['All', 'Web', 'iOS', 'Android', 'Web App', 'E-Commerce', 'AI', 'Branding', 'SEO', 'IT', 'Game']
const clientMarks = ['Liberty Military Housing', 'Easy Landscape Solutions', 'Cloak Wraps', 'Zona Pest Solutions', 'Peak Pest Control', 'Butter Pest Control', 'DWGS', 'Canyon Supply Co']
const heroStats = [
  { num: '50+', label: 'Projects shipped' },
  { num: '4.9★', label: 'Avg rating' },
  { num: '<1.2s', label: 'Avg load time' },
  { num: '100%', label: 'Custom code' },
]

export default function WorksPage() {
  const [active, setActive] = useState<'All' | Tag>('All')

  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get('filter')
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the shareable ?filter= once on mount
    if (f && (allTags as string[]).includes(f)) setActive(f as Tag)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (active === 'All') params.delete('filter'); else params.set('filter', active)
    const qs = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? '?' + qs : ''}`)
  }, [active])

  const counts = useMemo(() => {
    const out: Record<string, number> = { All: PROJECTS.length }
    for (const t of allTags) if (t !== 'All') out[t] = PROJECTS.filter((p) => p.tags.includes(t)).length
    return out
  }, [])

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active))

  return (
    <>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 190px) clamp(20px, 5vw, 44px) clamp(40px, 6vh, 60px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 22, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            Selected work · {PROJECTS.length} case studies
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.035em', color: 'var(--ink)' }}>
              1 of 1.<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>Every time.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 17, lineHeight: 1.7, maxWidth: 400 }}>
              Websites, apps and platforms we have designed and built, each with a full case study and a look at the real product. Every one custom, with no templates and no recycled layouts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 44 }}>
            {allTags.map((tag) => {
              const sel = active === tag
              const c = counts[tag] ?? 0
              if (c === 0) return null
              return (
                <button key={tag} onClick={() => setActive(tag)} aria-pressed={sel} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, padding: '8px 15px', borderRadius: 2,
                  border: `1px solid ${sel ? 'var(--accent)' : 'var(--line-2)'}`,
                  background: sel ? 'var(--accent-soft)' : 'transparent',
                  color: sel ? 'var(--accent-deep)' : 'var(--muted)',
                  cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
                  transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 7,
                }}>
                  {tag}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: sel ? 'var(--accent-deep)' : 'var(--faint)' }}>{c}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trusted strip */}
      <section style={{ padding: '20px clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="eyebrow">Trusted by</span>
          {clientMarks.map((c) => <span key={c} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--ink-2)', letterSpacing: '-0.01em' }}>{c}</span>)}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(40px, 6vh, 64px) clamp(20px, 5vw, 44px) clamp(24px, 4vh, 48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }} className="stats-banner">
          {heroStats.map((s) => (
            <div key={s.label} style={{ padding: '24px 26px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--ink)', lineHeight: 1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(80px, 12vh, 140px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={0.04}>
              <ProjectCard p={p} flip={i % 2 === 1} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectCardStyles />

      <CTASection
        eyebrow="Your project is next"
        title={<>Your project<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>goes here.</span></>}
        blurb="One call. We scope it, plan it, and build it right."
      />

      <style>{`
        @media (max-width: 860px) { .stats-banner { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 460px) { .stats-banner { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
