import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { Arrow, SectionLabel, CTASection, CITIES } from '@/components/editorial'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Services | Web, Mobile, Branding & AI',
  description: 'Full-stack digital services from one Gilbert studio: custom web development, mobile apps, branding and AI automation. Hand-coded, no templates, 100% yours.',
  alternates: { canonical: 'https://sunstatedevworks.com/services' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/services',
    title: 'Services | Sunstate DevWorks',
    description: 'Full-stack digital services from one Gilbert studio: web, mobile, branding and AI automation. Hand-coded, no templates, 100% yours.',
  },
}

const services = [
  { num: '01', title: 'Web Development', href: '/services/web-development', tag: 'Websites · Web Apps · E-Commerce', desc: 'Hand-coded, 100% custom websites and web applications. No WordPress, no templates, no bloat. Built to rank, built to last, built to perform.', tags: ['Next.js', 'TypeScript', 'Node'] },
  { num: '02', title: 'Mobile Apps', href: '/services/mobile-apps', tag: 'iOS · Android · React Native', desc: 'Native iOS and Android apps built with SwiftUI and React Native. From MVP to App Store submission, with a real native feel and no shortcuts.', tags: ['SwiftUI', 'React Native', 'Expo'] },
  { num: '03', title: 'Branding & Identity', href: '/services/branding', tag: 'Logo · Color · Type · Guidelines', desc: 'Identity that holds up everywhere, from digital to print to social. Strategy before aesthetics. Logo through full brand guidelines, delivered.', tags: ['Figma', 'Motion', 'Systems'] },
  { num: '04', title: 'AI & Automation', href: '/services/ai-automation', tag: 'Chatbots · Workflows · Integrations', desc: 'Custom AI integrations and workflow automation. Your team stays the same size while your output multiplies. Built for businesses that run on repetition.', tags: ['Claude', 'OpenAI', 'n8n'] },
]

const whyUs = [
  { label: 'One studio, four capabilities', desc: 'No vendor juggling. Web, mobile, brand and AI all come from the same team that owns the outcome.' },
  { label: 'You own everything', desc: '100% of the code, files and domains are handed to you on delivery. No proprietary platforms, no lock-in.' },
  { label: 'Clear scope up front', desc: 'A written scope and timeline before any work starts. You approve the plan, then we build it.' },
  { label: 'Local to Gilbert, AZ', desc: 'A real, local team. No call centers, no ticket queues. You can text us directly and reach a human.' },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: 'Thirty minutes to learn your business, your goals, and what winning actually looks like for you.' },
  { num: '02', title: 'Proposal & Scope', desc: 'A written scope and timeline. You approve everything before we touch a single file.' },
  { num: '03', title: 'Build & Update', desc: 'Sprint-based delivery with weekly progress check-ins. You stay in the loop without being in the weeds.' },
  { num: '04', title: 'Launch & Handoff', desc: 'DNS, SSL and go-live handled, then the keys are yours. Or we keep maintaining it. Your call.' },
]

const SITE = 'https://sunstatedevworks.com'

const intro = [
  'Most digital projects touch more than one discipline. A new website needs a brand that holds up, a mobile app needs a backend and a marketing site, and an AI tool only pays off when it plugs into the systems you already run. Splitting that work across three or four vendors means handoffs, finger-pointing and nobody owning the result.',
  'Sunstate DevWorks puts design, code, mobile and AI under one roof in Gilbert, Arizona. The same team that designs your brand builds your site, ships your app and wires in the automation, so everything shares one design system, one codebase strategy and one point of contact. When the project is done, you own 100% of the code, files and accounts.',
]

const faqs = [
  { q: 'Which service do I need?', a: 'If customers mainly find you online, start with a custom website. If your team or customers need a tool they use every day, that is usually a web app or a mobile app. If you are spending hours on repetitive work, AI and automation can take it off your plate. Branding comes first when you are new or your look no longer matches your business. A discovery call sorts this out in thirty minutes.' },
  { q: 'Can you handle more than one service in the same project?', a: 'Yes, and that is where one studio helps most. We regularly pair branding with a new website, or a mobile app with a web dashboard on the same backend. One team keeps the design, code and timeline consistent across all of it.' },
  { q: 'How long does a project take?', a: 'Most marketing sites ship in 3 to 5 weeks. Larger web apps or full redesigns typically run 6 to 10 weeks. You get a fixed timeline in the proposal before work starts, with no moving goalposts.' },
  { q: 'Do I own what you build?', a: 'Yes, 100%. Every line of code, every design file and every account is handed over at launch, with no subscriptions, no licensing and no proprietary platforms. If you ever want to take it to another developer, you can.' },
]

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE}/services#faq`,
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(56px, 9vh, 96px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(42px, 7vw, 100px)', lineHeight: 0.93, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 960 }}>
              Full-stack capabilities.<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>One studio.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 620, marginBottom: 40 }}>
              We handle everything in-house: web, mobile, brand and AI. One team, one relationship, complete accountability from the first call to long after launch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link>
              <Link href="/works" className="btn btn-ghost">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it fits together */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="01">How it fits together</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4.2vw, 52px)', lineHeight: 1.03, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                Design, code, apps and AI. <span className="serif-em">One team.</span>
              </h2>
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

      {/* Capabilities index */}
      <section style={{ padding: 'clamp(72px, 10vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">Capabilities</SectionLabel></Reveal>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <Link href={s.href} className="idx-row" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 'clamp(18px, 4vw, 60px)', alignItems: 'center', padding: 'clamp(26px, 3.4vw, 40px) 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.05em' }}>{s.num}</span>
                  <span style={{ minWidth: 0 }}>
                    <span className="idx-title" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.6vw, 44px)', letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 8, transition: 'color 0.3s' }}>{s.title}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 620, marginBottom: 14 }}>{s.desc}</span>
                    <span style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                      {s.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--line-2)', borderRadius: 2, padding: '4px 9px' }}>{t}</span>)}
                    </span>
                  </span>
                  <span className="idx-arrow" style={{ color: 'var(--accent)' }}><Arrow s={26} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why one studio */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="03">Why one studio</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 52, maxWidth: 760 }}>
              Most studios make you hire <span className="serif-em">three vendors.</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {whyUs.map((w, i) => (
              <Reveal key={w.label} delay={i * 0.06}>
                <div style={{ padding: 'clamp(28px, 3vw, 38px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 200, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 'clamp(24px, 4vh, 44px)' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 10 }}>{w.label}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(72px, 10vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="04">Every project</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 24 }}>
              The same process, <span className="serif-em">every time.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 680, marginBottom: 44 }}>
              Whether it is a website, an app, a brand or an automation, every project runs the same way. Most marketing sites ship in 3 to 5 weeks, and larger web apps or full redesigns typically run 6 to 10 weeks. The timeline is fixed in writing before work starts.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {process.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.07}>
                <div style={{ padding: 'clamp(28px, 3vw, 40px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 220, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 'clamp(24px, 4vh, 48px)' }}>{p.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="05">Where we work</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4.2vw, 52px)', lineHeight: 1.03, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 20 }}>
                Based in Gilbert. <span className="serif-em">Serving the Valley.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 460 }}>
                We work with businesses across metro Phoenix, from the East Valley to the West Valley, and with clients nationwide over video. Local clients are welcome to meet in person.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="u-link" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: 999, padding: '8px 14px', textDecoration: 'none' }}>Web design {c.name}</Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal><SectionLabel index="06">Questions</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 32 }}>
              Choosing a service, <span className="serif-em">answered.</span>
            </h2>
          </Reveal>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="svc-faq" open={i === 0} style={{ borderBottom: '1px solid var(--line)' }}>
                  <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 4px', cursor: 'pointer', listStyle: 'none', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(16px, 1.9vw, 20px)', color: 'var(--ink)' }}>
                    {f.q}
                    <svg className="svc-faq-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform 0.25s' }}><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <p style={{ padding: '0 4px 22px', color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.7 }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Not sure which service<br />you <span className="serif-em" style={{ color: 'var(--accent)' }}>need?</span></>}
        blurb="That is what the discovery call is for. Thirty minutes, no pressure, and we figure it out together."
      />

      <style>{`
        .svc-faq summary::-webkit-details-marker { display: none; }
        .svc-faq[open] .svc-faq-icon { transform: rotate(180deg); stroke: var(--accent); }
      `}</style>
    </>
  )
}
