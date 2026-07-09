import Link from 'next/link'
import Reveal from './Reveal'
import { Arrow, SectionLabel, CTASection, CITIES } from './editorial'

const services = [
  { num: '01', title: 'Web Development', desc: 'Hand-coded, blazing-fast websites built from scratch. No templates, no WordPress, no page builders.', href: '/services/web-development' },
  { num: '02', title: 'Mobile Apps', desc: 'iOS and Android apps built with SwiftUI and React Native, from first idea to the App Store.', href: '/services/mobile-apps' },
  { num: '03', title: 'Branding & Identity', desc: 'Logo, color system, typography and brand guidelines. Identity work that holds up at every scale.', href: '/services/branding' },
  { num: '04', title: 'AI & Automation', desc: 'Custom AI, chatbots and workflow automation that save real hours every single week.', href: '/services/ai-automation' },
]

export default function CityTemplate({
  city, region, blurb, reasons,
}: {
  city: string
  region: string
  blurb: string
  reasons: string[]
}) {
  const nearby = CITIES.filter((c) => c.name !== city)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(56px, 9vh, 96px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
              <Link href="/" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Home</Link>
              <span style={{ color: 'var(--faint)', fontSize: 11 }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>Web Design {city}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              {city}, Arizona · {region}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 6.6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 900 }}>
              {city} web design<br />&amp; <span className="serif-em" style={{ color: 'var(--accent)' }}>development.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 620, marginBottom: 40 }}>{blurb}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link>
              <Link href="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">What we build</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 52, maxWidth: 760 }}>
              Full-stack digital for <span className="serif-em">{city} businesses.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <Link href={s.href} className="idx-row" style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(26px, 3vw, 38px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 220, textDecoration: 'none', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 'clamp(24px, 4vh, 44px)' }}>{s.num}</span>
                  <h3 className="idx-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12, transition: 'color 0.3s' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local advantage */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="02">Local advantage</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4.2vw, 52px)', lineHeight: 1.03, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 20 }}>
                Why choose a local <span className="serif-em">{city} team?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 420 }}>
                We are not a faceless remote vendor. We are your neighbors, invested in the success of the businesses around us.
              </p>
            </Reveal>
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {reasons.map((reason, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, padding: '22px 0', borderBottom: '1px solid var(--line)', alignItems: 'start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', paddingTop: 3 }}>0{i + 1}</span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>{reason}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="03">Also serving</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px, 3.6vw, 46px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 40 }}>
              Web design across <span className="serif-em">metro Phoenix.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
              {nearby.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="area-cell" style={{ padding: '18px 16px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 5, transition: 'background 0.2s' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{c.name}</span>
                    <svg className="area-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--faint)" strokeWidth="2" style={{ transition: 'transform 0.25s' }}><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--faint)' }}>{c.tag}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow={`Based in Gilbert, AZ · Serving ${region}`}
        title={<>Ready to build something<br />in <span className="serif-em" style={{ color: 'var(--accent)' }}>{city}?</span></>}
        blurb="A 30-minute discovery call, free of charge. We scope the project, put it in writing, and get to work."
      />

      <style>{`
        .area-cell:hover { background: var(--card) !important; }
        .area-cell:hover .area-arrow { transform: translate(2px, -2px); stroke: var(--accent); }
      `}</style>
    </>
  )
}
