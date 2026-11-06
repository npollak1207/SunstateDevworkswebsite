import Link from 'next/link'
import { Arrow } from '@/components/editorial'
import { ProjectRender } from './Frames'
import ProjectLinks from './ProjectLinks'
import { caseStudyHref, type Project } from '@/lib/projects'

// The project card used on /works and the homepage: copy on one side, a render
// of the real product on the other, linking to the case study. Render
// <ProjectCardStyles /> once on any page that uses it.

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

export default function ProjectCard({ p, flip = false, priority = false, as: Heading = 'h2' }: { p: Project; flip?: boolean; priority?: boolean; as?: 'h2' | 'h3' }) {
  const href = caseStudyHref(p)
  return (
    <article className="lift" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden' }}>
      <div className={`pc-grid${flip ? ' pc-flip' : ''}`}>
        <div className="pc-text" style={{ padding: 'clamp(28px, 3.4vw, 46px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>· {p.location}</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)' }}>{p.year}</span>
          </div>
          <Heading style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: 16 }}>
            <Link href={href} className="pc-title" style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.25s' }}>{p.title}</Link>
          </Heading>
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
        <Link href={href} aria-label={`${p.title} case study`} className="pc-side" style={{ background: 'var(--paper-2)', padding: 'clamp(28px, 3.4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none' }}>
          <div className="pc-render" style={{ transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}>
            <ProjectRender project={p} priority={priority} />
          </div>
        </Link>
      </div>
    </article>
  )
}

export function ProjectCardStyles() {
  return (
    <style>{`
      .pc-grid { display: grid; grid-template-columns: 1fr 1.15fr; }
      .pc-grid > .pc-side { border-left: 1px solid var(--line); }
      .pc-flip { grid-template-columns: 1.15fr 1fr; }
      .pc-flip > .pc-text { order: 2; }
      .pc-flip > .pc-side { order: 1; border-left: none; border-right: 1px solid var(--line); }
      .pc-title:hover { color: var(--accent-deep) !important; }
      .pc-side:hover .pc-render { transform: translateY(-4px); }
      @media (max-width: 1024px) {
        .pc-grid, .pc-flip { grid-template-columns: 1fr; }
        .pc-flip > .pc-text { order: 1; }
        .pc-grid > .pc-side, .pc-flip > .pc-side { order: 2; border-left: none; border-right: none; border-top: 1px solid var(--line); }
      }
    `}</style>
  )
}
