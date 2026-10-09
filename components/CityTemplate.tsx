import Link from 'next/link'
import Reveal from './Reveal'
import { Arrow, SectionLabel, CTASection, CITIES } from './editorial'
import { LOCAL_PROJECTS, type CityContent } from '@/lib/cities'

const SITE = 'https://sunstatedevworks.com'

const services = [
  { num: '01', title: 'Web Development', desc: 'Hand-coded, blazing-fast websites built from scratch. No templates, no WordPress, no page builders.', href: '/services/web-development' },
  { num: '02', title: 'Mobile Apps', desc: 'iOS and Android apps built with SwiftUI and React Native, from first idea to the App Store.', href: '/services/mobile-apps' },
  { num: '03', title: 'Branding & Identity', desc: 'Logo, color system, typography and brand guidelines. Identity work that holds up at every scale.', href: '/services/branding' },
  { num: '04', title: 'AI & Automation', desc: 'Custom AI, chatbots and workflow automation that save real hours every single week.', href: '/services/ai-automation' },
]

const h2 = { fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)' } as const

export default function CityTemplate({ content }: { content: CityContent }) {
  const { city, region, slug, blurb, intro, areas, industries, reasons, projects, faqs } = content
  const nearby = CITIES.filter((c) => c.name !== city)
  const pageUrl = `${SITE}/${slug}`

  // Page-level schema: breadcrumb, the local service offer, and the FAQ shown below.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: `Web Design ${city}`, item: pageUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Web Design & Development in ${city}, AZ`,
        serviceType: 'Web design and development',
        url: pageUrl,
        description: blurb,
        provider: { '@id': `${SITE}/#business` },
        areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: 'Arizona' } },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

      {/* Local intro */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="01">Web design in {city}</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 4.2vw, 52px)', marginBottom: 28 }}>
                Built for how <span className="serif-em">{city}</span> does business.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>Areas we serve</p>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                {areas.map((a) => (
                  <li key={a} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: 999, padding: '7px 12px' }}>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            {intro.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.05}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 18px)', lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 22 }}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">What we build</SectionLabel></Reveal>
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

      {/* Industries */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="03">Who we build for</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ ...h2, fontSize: 'clamp(28px, 4.2vw, 52px)', marginBottom: 44, maxWidth: 760 }}>
              Common <span className="serif-em">{city}</span> projects.
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(28px, 3vw, 44px)' }}>
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.06}>
                <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 22 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--muted)' }}>{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local work */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="04">Recent work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 20, marginBottom: 44 }}>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 4.2vw, 52px)', maxWidth: 760 }}>
                Work from around <span className="serif-em">the Valley.</span>
              </h2>
              <Link href="/works" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)' }}>All projects →</Link>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 'clamp(20px, 2.4vw, 32px)' }}>
            {projects.map((key, i) => {
              const p = LOCAL_PROJECTS[key]
              const inner = (
                <>
                  <span style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: 22 }}>
                    <span style={{ color: 'var(--accent)' }}>{p.location}</span>
                    <span>{p.kind}</span>
                  </span>
                  <h3 className="idx-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12, transition: 'color 0.3s' }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--muted)' }}>{p.desc}</p>
                </>
              )
              const style = { display: 'block', height: '100%', padding: 'clamp(26px, 3vw, 38px)', background: 'var(--card)', border: '1px solid var(--line)', textDecoration: 'none' } as const
              return (
                <Reveal key={key} delay={i * 0.06}>
                  {p.external
                    ? <a href={p.href} target="_blank" rel="noopener noreferrer" className="idx-row" style={style}>{inner}</a>
                    : <Link href={p.href} className="idx-row" style={style}>{inner}</Link>}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local advantage */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="05">Local advantage</SectionLabel></Reveal>
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

      {/* FAQ */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal><SectionLabel index="06">Questions</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ ...h2, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 32 }}>
              {city} web design, <span className="serif-em">answered.</span>
            </h2>
          </Reveal>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="city-faq" open={i === 0} style={{ borderBottom: '1px solid var(--line)' }}>
                  <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 4px', cursor: 'pointer', listStyle: 'none', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(16px, 1.9vw, 20px)', color: 'var(--ink)' }}>
                    {f.q}
                    <svg className="city-faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform 0.25s' }}><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <p style={{ padding: '0 4px 22px', color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.7 }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="07">Also serving</SectionLabel></Reveal>
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
        .city-faq summary::-webkit-details-marker { display: none; }
        .city-faq[open] .city-faq-icon { transform: rotate(180deg); stroke: var(--accent); }
      `}</style>
    </>
  )
}
