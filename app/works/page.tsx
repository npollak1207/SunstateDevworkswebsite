'use client'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Reveal from '@/components/Reveal'
import { Arrow, CTASection } from '@/components/editorial'
import { ProjectRender } from '@/components/work/Frames'
import ProjectLinks from '@/components/work/ProjectLinks'
import { PROJECTS, caseStudyHref, type Project, type Tag } from '@/lib/projects'

const allTags: ('All' | Tag)[] = ['All', 'Web', 'iOS', 'Android', 'Web App', 'E-Commerce', 'AI', 'Branding', 'SEO', 'IT', 'Game']
const clientMarks = ['Liberty Military Housing', 'Easy Landscape Solutions', 'Cloak Wraps', 'Zona Pest Solutions', 'Peak Pest Control', 'Butter Pest Control', 'DWGS', 'Canyon Supply Co']
const heroStats = [
  { num: '50+', label: 'Projects shipped' },
  { num: '4.9★', label: 'Avg rating' },
  { num: '<1.2s', label: 'Avg load time' },
  { num: '100%', label: 'Custom code' },
]

function Metrics({ p }: { p: Project }) {
  if (!p.metrics.length) return null
  return (
    <div style={{ display: 'flex', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '16px 0', marginBottom: 18 }}>
      {p.metrics.slice(0, 3).map((m, i) => (
        <div key={m.label} style={{ flex: 1, paddingLeft: i > 0 ? 18 : 0, borderLeft: i > 0 ? '1px solid var(--line)' : 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 5, letterSpacing: '-0.02em' }}>{m.value}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ p, flip, priority }: { p: Project; flip: boolean; priority: boolean }) {
  const href = caseStudyHref(p)
  return (
    <article className="lift" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden' }}>
      <div className={`feat-grid${flip ? ' feat-flip' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr' }}>
        <div className="feat-text" style={{ padding: 'clamp(28px, 3.4vw, 46px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>· {p.location}</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)' }}>{p.year}</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: 16 }}>
            <Link href={href} className="feat-title" style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.25s' }}>{p.title}</Link>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{p.summary}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 4, padding: '12px 15px', marginBottom: 22 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{p.highlight}</p>
          </div>
          <Metrics p={p} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 22 }}>
            {p.tech.slice(0, 5).map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', border: '1px solid var(--line-2)', borderRadius: 2, padding: '4px 9px', letterSpacing: '0.04em' }}>{t}</span>)}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href={href} className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 12 }}>
              Read the case study <span className="btn-arrow"><Arrow s={13} /></span>
            </Link>
            <ProjectLinks links={p.links.filter((l) => l.kind !== 'repo')} status={p.status} compact />
          </div>
        </div>
        <Link href={href} aria-label={`${p.title} case study`} className="feat-side" style={{ background: 'var(--paper-2)', borderLeft: '1px solid var(--line)', padding: 'clamp(28px, 3.4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none' }}>
          <div className="feat-render" style={{ transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}>
            <ProjectRender project={p} priority={priority} />
          </div>
        </Link>
      </div>
    </article>
  )
}

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

      <CTASection
        eyebrow="Your project is next"
        title={<>Your project<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>goes here.</span></>}
        blurb="One call. We scope it, plan it, and build it right."
      />

      <style>{`
        .feat-flip > .feat-text { order: 2; }
        .feat-flip > .feat-side { order: 1; border-left: none !important; border-right: 1px solid var(--line); }
        .feat-grid { grid-template-columns: 1fr 1.15fr; }
        .feat-flip { grid-template-columns: 1.15fr 1fr !important; }
        .feat-title:hover { color: var(--accent-deep) !important; }
        .feat-side:hover .feat-render { transform: translateY(-4px); }
        @media (max-width: 1024px) {
          .feat-grid, .feat-flip { grid-template-columns: 1fr !important; }
          .feat-flip > .feat-text { order: 1; }
          .feat-side, .feat-flip > .feat-side { order: 2; border-left: none !important; border-right: none !important; border-top: 1px solid var(--line) !important; }
        }
        @media (max-width: 860px) { .stats-banner { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 460px) { .stats-banner { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
