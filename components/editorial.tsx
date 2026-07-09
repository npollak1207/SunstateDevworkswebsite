import Link from 'next/link'
import Reveal from './Reveal'

/* Shared "Engineering Studio" building blocks used across all pages. */

export const CITIES: { name: string; slug: string; tag: string }[] = [
  { name: 'Gilbert', slug: 'web-design-gilbert', tag: 'Home Base' },
  { name: 'Phoenix', slug: 'web-design-phoenix', tag: 'Web Design' },
  { name: 'Scottsdale', slug: 'web-design-scottsdale', tag: 'Web Design' },
  { name: 'Chandler', slug: 'web-design-chandler', tag: 'Web & Apps' },
  { name: 'Mesa', slug: 'web-design-mesa', tag: 'Web Design' },
  { name: 'Tempe', slug: 'web-design-tempe', tag: 'Web & Branding' },
  { name: 'Peoria', slug: 'web-design-peoria', tag: 'Web Design' },
  { name: 'Glendale', slug: 'web-design-glendale', tag: 'Web Design' },
  { name: 'Queen Creek', slug: 'web-design-queen-creek', tag: 'Web Design' },
  { name: 'Surprise', slug: 'web-design-surprise', tag: 'Web Design' },
  { name: 'Ahwatukee', slug: 'web-design-ahwatukee', tag: 'Web & Apps' },
  { name: 'Paradise Valley', slug: 'web-design-paradise-valley', tag: 'Branding' },
]

export const PHONE_DISPLAY = '(480) 793-9161'
export const PHONE_TEL = '+14807939161'

export function Arrow({ s = 16 }: { s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
}

export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
      {index && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--accent)' }}>{index}</span>}
      <span style={{ width: 28, height: 1, background: 'var(--line-2)' }} />
      <span className="eyebrow">{children}</span>
    </div>
  )
}

/** Interior page header — lighter than the home hero, with a corner sun-glow + grid. */
export function PageHeader({
  eyebrow, breadcrumb, title, sub, ctas = true,
}: {
  eyebrow: string
  breadcrumb?: { label: string; href?: string }[]
  title: React.ReactNode
  sub: string
  ctas?: boolean
}) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(56px, 9vh, 96px)' }}>
      <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)' }} />
      <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        {breadcrumb && (
          <Reveal>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26, flexWrap: 'wrap' }}>
              {breadcrumb.map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  {i > 0 && <span style={{ color: 'var(--faint)', fontSize: 11 }}>/</span>}
                  {b.href
                    ? <Link href={b.href} className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>{b.label}</Link>
                    : <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>{b.label}</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 6.6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 960 }}>
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 620, marginBottom: ctas ? 40 : 0 }}>{sub}</p>
        </Reveal>
        {ctas && (
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link>
              <Link href="/works" className="btn btn-ghost">See Our Work</Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/** Closing call-to-action used at the bottom of most pages. */
export function CTASection({
  eyebrow = 'Booking new projects · Gilbert, AZ',
  title,
  blurb = 'Tell us what you are building. We will send back a plan, a timeline, and a flat price, usually within one business day.',
}: {
  eyebrow?: string
  title?: React.ReactNode
  blurb?: string
}) {
  return (
    <section style={{ padding: 'clamp(88px, 13vh, 170px) clamp(20px, 5vw, 44px)', position: 'relative', overflow: 'hidden', textAlign: 'center', background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
      <div aria-hidden style={{ position: 'absolute', bottom: '-42%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.12) 0%, transparent 58%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 26, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(38px, 7vw, 100px)', lineHeight: 0.94, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28 }}>
            {title ?? <>Let&apos;s build something<br />that <span className="serif-em" style={{ color: 'var(--accent)' }}>outshines.</span></>}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 520, margin: '0 auto 40px' }}>{blurb}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">{PHONE_DISPLAY}</a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: 'flex', gap: 'clamp(18px, 4vw, 40px)', justifyContent: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.04em', color: 'var(--faint)' }}>
            <span>◐ ~1 business-day reply</span>
            <span>◐ Flat-rate quotes</span>
            <span>◐ 100% code ownership</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
