import Image from 'next/image'
import type { DiagramLane, Project, ProjectRender as RenderSpec } from '@/lib/projects'

// Device frames for project renders. Plain components (no hooks) so they work
// in both the client-side /works index and the server-rendered case studies.

const PHONE_W = 600
const PHONE_H = 1298
const DESKTOP_W = 1600
const DESKTOP_H = 1000

export function BrowserFrame({ src, alt, url, priority, sizes = '(max-width: 860px) 92vw, 720px', w = DESKTOP_W, h = DESKTOP_H }: {
  src: string; alt: string; url?: string; priority?: boolean; sizes?: string; w?: number; h?: number
}) {
  const host = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : ''
  return (
    <div style={{ borderRadius: 10, overflow: 'hidden', background: 'var(--card)', border: '1px solid var(--line-2)', boxShadow: '0 34px 70px -34px rgba(23,20,15,0.42)' }}>
      <div aria-hidden style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', borderBottom: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        {['#E8705A', '#E9B949', '#7FB069'].map((c) => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.85 }} />)}
        {host && (
          <span style={{ marginLeft: 10, flex: 1, maxWidth: 320, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 999, padding: '3px 12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{host}</span>
        )}
      </div>
      <Image src={src} alt={alt} width={w} height={h} priority={priority} sizes={sizes} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
  )
}

export function PhoneFrame({ src, alt, priority, sizes = '(max-width: 640px) 60vw, 280px', w = PHONE_W, h = PHONE_H, bare }: {
  src: string; alt: string; priority?: boolean; sizes?: string; w?: number; h?: number; bare?: boolean
}) {
  // bare: the image is already a finished store graphic with its own device art
  if (bare) {
    return (
      <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 30px 60px -30px rgba(23,20,15,0.5)' }}>
        <Image src={src} alt={alt} width={w} height={h} priority={priority} sizes={sizes} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    )
  }
  return (
    <div style={{ borderRadius: 28, padding: 7, background: 'var(--ink)', boxShadow: '0 30px 60px -30px rgba(23,20,15,0.5)' }}>
      <div style={{ borderRadius: 22, overflow: 'hidden', background: '#fff' }}>
        <Image src={src} alt={alt} width={w} height={h} priority={priority} sizes={sizes} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </div>
  )
}

/** A phone turned sideways, for landscape games. */
export function LandscapeFrame({ src, alt, priority, sizes = '(max-width: 860px) 92vw, 720px', w, h }: {
  src: string; alt: string; priority?: boolean; sizes?: string; w: number; h: number
}) {
  return (
    <div style={{ borderRadius: 30, padding: 9, background: 'var(--ink)', boxShadow: '0 34px 70px -34px rgba(23,20,15,0.5)' }}>
      <div style={{ borderRadius: 22, overflow: 'hidden', background: '#000' }}>
        <Image src={src} alt={alt} width={w} height={h} priority={priority} sizes={sizes} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </div>
  )
}

/** The project's hero render: browser + phone for sites, a fan of phones for apps. */
export function ProjectRender({ project, size = 'card', priority }: { project: Project; size?: 'card' | 'hero'; priority?: boolean }) {
  const r: RenderSpec = project.render
  const hero = size === 'hero'

  if (r.kind === 'web') {
    return (
      <div style={{ position: 'relative', paddingRight: hero ? '9%' : '11%', paddingBottom: hero ? '5%' : '7%' }}>
        <BrowserFrame src={r.desktop} alt={`${project.title} website on desktop`} url={r.url} priority={priority} sizes={hero ? '(max-width: 860px) 92vw, 1100px' : '(max-width: 1024px) 86vw, 560px'} />
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: hero ? '21%' : '27%' }}>
          <PhoneFrame src={r.mobile} alt={`${project.title} website on mobile`} priority={priority} sizes={hero ? '(max-width: 860px) 24vw, 240px' : '(max-width: 1024px) 26vw, 160px'} />
        </div>
      </div>
    )
  }

  if (r.kind === 'browser') {
    return <BrowserFrame src={r.desktop} alt={`${project.title} in the browser`} url={r.url} priority={priority} sizes={hero ? '(max-width: 860px) 92vw, 1100px' : '(max-width: 1024px) 86vw, 560px'} w={r.w} h={r.h} />
  }

  if (r.kind === 'diagram') return <SystemsDiagram label={r.label} lanes={r.lanes} hero={hero} />

  if (r.kind === 'landscape') {
    return <LandscapeFrame src={r.src} alt={`${project.title} gameplay`} priority={priority} w={r.w} h={r.h} sizes={hero ? '(max-width: 860px) 92vw, 1000px' : '(max-width: 1024px) 86vw, 560px'} />
  }

  if (r.screens.length === 1) {
    return (
      <div style={{ maxWidth: hero ? 340 : 230, margin: '0 auto' }}>
        <PhoneFrame src={r.screens[0]} alt={`${project.title} screen`} priority={priority} w={r.w} h={r.h} bare={r.bare} sizes={hero ? '340px' : '230px'} />
      </div>
    )
  }

  // app: three phones, middle one raised
  const [a, b, c] = r.screens
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: hero ? 'clamp(16px, 3vw, 40px)' : 'clamp(10px, 1.6vw, 18px)', alignItems: 'end', maxWidth: hero ? 1000 : 520, margin: '0 auto' }}>
      <div style={{ transform: 'translateY(9%)' }}><PhoneFrame src={a} alt={`${project.title} app screen`} priority={priority} w={r.w} h={r.h} bare={r.bare} sizes={hero ? '(max-width: 640px) 30vw, 300px' : '160px'} /></div>
      <PhoneFrame src={b} alt={`${project.title} app screen`} priority={priority} w={r.w} h={r.h} bare={r.bare} sizes={hero ? '(max-width: 640px) 30vw, 300px' : '160px'} />
      <div style={{ transform: 'translateY(9%)' }}><PhoneFrame src={c} alt={`${project.title} app screen`} priority={priority} w={r.w} h={r.h} bare={r.bare} sizes={hero ? '(max-width: 640px) 30vw, 300px' : '160px'} /></div>
    </div>
  )
}

/** A schematic of systems run for clients, for IT work that has no screens to show. */
export function SystemsDiagram({ label, lanes, hero }: { label: string; lanes: DiagramLane[]; hero?: boolean }) {
  return (
    <div style={{ borderRadius: 10, background: 'var(--ink-bg)', border: '1px solid var(--ink-line)', padding: hero ? 'clamp(22px, 3vw, 40px)' : 'clamp(16px, 2vw, 24px)', boxShadow: '0 34px 70px -34px rgba(23,20,15,0.55)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: hero ? 26 : 16 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7FB069', boxShadow: '0 0 0 4px rgba(127,176,105,0.18)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: hero ? 11 : 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--on-dark-muted)' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: hero ? 18 : 10 }}>
        {lanes.map((lane) => (
          <div key={lane.label}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: hero ? 10.5 : 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-2)', marginBottom: hero ? 9 : 6 }}>{lane.label}</p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${lane.nodes.length}, 1fr)`, gap: hero ? 10 : 6 }}>
              {lane.nodes.map((n) => (
                <div key={n.title} style={{ border: '1px solid var(--ink-line)', borderRadius: 4, padding: hero ? '12px 14px' : '8px 9px', background: 'rgba(255,255,255,0.04)', minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: hero ? 15 : 11.5, color: 'var(--on-dark)', lineHeight: 1.2 }}>{n.title}</div>
                  {n.sub && <div style={{ fontFamily: 'var(--font-mono)', fontSize: hero ? 10 : 8, letterSpacing: '0.03em', color: 'var(--on-dark-muted)', marginTop: 4, lineHeight: 1.45 }}>{n.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
