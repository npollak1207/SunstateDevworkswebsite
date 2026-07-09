import Link from 'next/link'
import Reveal from './Reveal'
import { Arrow, SectionLabel, CTASection } from './editorial'

export type ServiceData = {
  num: string
  title: string
  tagline: string
  intro: string
  included: string[]
  approach: { t: string; d: string }[]
  faqs: { q: string; a: string }[]
  titleAccent: string // the word to render in serif accent
}

const otherServices = [
  { title: 'Web Development', href: '/services/web-development' },
  { title: 'Mobile Apps', href: '/services/mobile-apps' },
  { title: 'Branding & Identity', href: '/services/branding' },
  { title: 'AI & Automation', href: '/services/ai-automation' },
]

export default function ServiceTemplate({ data }: { data: ServiceData }) {
  const titleMain = data.title.replace(data.titleAccent, '').trim()
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(56px, 9vh, 96px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26, flexWrap: 'wrap' }}>
              <Link href="/" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Home</Link>
              <span style={{ color: 'var(--faint)', fontSize: 11 }}>/</span>
              <Link href="/services" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Services</Link>
              <span style={{ color: 'var(--faint)', fontSize: 11 }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>{data.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              Service {data.num} · {data.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 6.6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 900 }}>
              {titleMain} <span className="serif-em" style={{ color: 'var(--accent)' }}>{data.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 640, marginBottom: 40 }}>{data.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link>
              <Link href="/works" className="btn btn-ghost">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">What&apos;s included</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 52, maxWidth: 720 }}>
              Everything in the <span className="serif-em">box.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(14px, 2vw, 24px)' }}>
            {data.included.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 24px', height: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)' }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">How we approach it</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 52, maxWidth: 720 }}>
              Built with <span className="serif-em">intent.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {data.approach.map((a, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{ padding: 'clamp(28px, 3vw, 40px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 220, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 'clamp(24px, 4vh, 48px)' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12 }}>{a.t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)' }}>{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section style={{ padding: 'clamp(72px, 10vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <Reveal><SectionLabel index="03">Questions</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4.2vw, 52px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 40 }}>
                Good to <span className="serif-em">know.</span>
              </h2>
            </Reveal>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {data.faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(17px, 2vw, 21px)', letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 10 }}>{f.q}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 720 }}>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section style={{ padding: 'clamp(56px, 8vh, 90px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel>More capabilities</SectionLabel></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {otherServices.filter((s) => s.title !== data.title).map((s) => (
              <Link key={s.href} href={s.href} className="area-cell" style={{ padding: '22px 20px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, transition: 'background 0.2s' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{s.title}</span>
                <span className="area-arrow" style={{ color: 'var(--accent)', transition: 'transform 0.25s', display: 'inline-flex' }}><Arrow s={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .area-cell:hover { background: var(--paper-2) !important; }
        .area-cell:hover .area-arrow { transform: translateX(3px); }
      `}</style>
    </>
  )
}
