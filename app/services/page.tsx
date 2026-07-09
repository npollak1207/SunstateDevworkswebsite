import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { Arrow, SectionLabel, CTASection } from '@/components/editorial'

export const metadata: Metadata = {
  title: 'Services | Web, Mobile, Branding & AI',
  description: 'Full-stack digital services from one Gilbert studio: custom web development, mobile apps, branding and AI automation. Hand-coded, no templates, 100% yours.',
  alternates: { canonical: 'https://sunstatedevworks.com/services' },
  openGraph: {
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
  { label: 'Flat-rate pricing', desc: 'A written scope and a written price. No hourly surprises. You approve the full number before we start.' },
  { label: 'Local to Gilbert, AZ', desc: 'A real, local team. No call centers, no ticket queues. You can text us directly and reach a human.' },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: 'Thirty minutes to learn your business, your goals, and what winning actually looks like for you.' },
  { num: '02', title: 'Proposal & Scope', desc: 'A written scope, timeline and flat-rate price. You approve everything before we touch a single file.' },
  { num: '03', title: 'Build & Update', desc: 'Sprint-based delivery with weekly progress check-ins. You stay in the loop without being in the weeds.' },
  { num: '04', title: 'Launch & Handoff', desc: 'DNS, SSL and go-live handled, then the keys are yours. Or we keep maintaining it. Your call.' },
]

export default function ServicesPage() {
  return (
    <>
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
              <Link href="/pricing" className="btn btn-ghost">See Pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities index */}
      <section style={{ padding: 'clamp(72px, 10vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">Capabilities</SectionLabel></Reveal>
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
          <Reveal><SectionLabel index="02">Why one studio</SectionLabel></Reveal>
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
          <Reveal><SectionLabel index="03">Every project</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 52 }}>
              The same process, <span className="serif-em">every time.</span>
            </h2>
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

      <CTASection
        title={<>Not sure which service<br />you <span className="serif-em" style={{ color: 'var(--accent)' }}>need?</span></>}
        blurb="That is what the discovery call is for. Thirty minutes, no pressure, and we figure it out together."
      />
    </>
  )
}
