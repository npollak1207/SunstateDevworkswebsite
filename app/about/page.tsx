import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { SectionLabel, CTASection } from '@/components/editorial'
import { openGraphBase } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'About the Studio',
  description: 'Sunstate DevWorks is a boutique design and engineering studio in Gilbert, Arizona. Custom web, mobile, branding and AI, with 100% code ownership and no lock-in.',
  alternates: { canonical: 'https://sunstatedevworks.com/about' },
  openGraph: {
    ...openGraphBase,
    url: 'https://sunstatedevworks.com/about',
    title: 'About the Studio | Sunstate DevWorks',
    description: 'A boutique design and engineering studio in Gilbert, Arizona. Custom web, mobile, branding and AI, with 100% code ownership.',
  },
}

const story = [
  'We started Sunstate DevWorks because we were tired of watching clients get burned by agencies that handed them locked-down WordPress installs and disappeared the moment the invoice cleared.',
  'So we flipped the model. Every line of code we write is yours. Every site we host, we built. When something breaks, there is no phone tree; you text us directly.',
  'We work across web, mobile, branding and AI. Most studios make you hire three vendors for that. We do not. One relationship, one point of contact, complete accountability.',
  'We are based in Gilbert, Arizona. Not a co-working space with a foosball table and six interns, but an actual technical studio that ships real products.',
]

const values = [
  { title: 'Ownership first', desc: 'We never lock you into proprietary tools. You own 100% of the code, the domain, and every deliverable.' },
  { title: 'No bloat', desc: 'No WordPress, no page builders, no drag-and-drop shortcuts. Just clean, performant, hand-written code.' },
  { title: 'Radical transparency', desc: 'You see the same numbers we do. Pricing is flat-rate and quoted up front, scope is documented, and we say no when we should.' },
  { title: 'Local & accountable', desc: 'Based in Gilbert, Arizona. Not a remote farm or an offshore agency. A real team you can reach directly.' },
]

const stack = [
  { cat: 'Web', items: ['Next.js', 'React', 'HTML/CSS', 'TypeScript', 'Node.js'] },
  { cat: 'Mobile', items: ['SwiftUI', 'React Native', 'Expo', 'Xcode'] },
  { cat: 'Backend', items: ['Laravel', 'Supabase', 'PostgreSQL', 'REST APIs'] },
  { cat: 'AI & Tools', items: ['Claude API', 'OpenAI', 'Automation', 'n8n'] },
  { cat: 'Design', items: ['Figma', 'Brand Identity', 'Motion Graphics', 'Adobe CC'] },
  { cat: 'Infra', items: ['Cloudflare', 'NVMe Hosting', 'CI/CD', 'SSL/DNS'] },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(56px, 9vh, 96px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 78% 10%, #000, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 78% 10%, #000, transparent 70%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-20%', right: '-6%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} className="about-hero">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                About the studio
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 0.93, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 640 }}>
                Built different.<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>On purpose.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 560 }}>
                Sunstate DevWorks is a boutique design and engineering studio in Gilbert, Arizona. We design and build custom digital products: websites, mobile apps, brands and AI tools for businesses that need serious digital infrastructure.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="about-img">
            <Image src="/about.png" alt="Sunstate DevWorks" width={520} height={520} style={{ objectFit: 'contain', opacity: 0.95, maxWidth: '100%', height: 'auto' }} />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">The story</SectionLabel></Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {story.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p style={{ fontFamily: i === 0 ? 'var(--font-serif)' : 'var(--font-body)', fontStyle: i === 0 ? 'italic' : 'normal', fontSize: i === 0 ? 'clamp(22px, 3vw, 30px)' : 17, lineHeight: i === 0 ? 1.4 : 1.8, color: i === 0 ? 'var(--ink)' : 'var(--muted)', letterSpacing: i === 0 ? '-0.01em' : 0 }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(80px, 11vh, 140px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">How we operate</SectionLabel></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div style={{ padding: 'clamp(30px, 3vw, 42px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 210, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 'clamp(24px, 4vh, 44px)' }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--muted)' }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="03">Tech stack</SectionLabel></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 'clamp(24px, 3vw, 40px)' }}>
            {stack.map((s, i) => (
              <Reveal key={s.cat} delay={i * 0.05}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>{s.cat}</p>
                  {s.items.map((item) => <p key={item} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, color: 'var(--ink-2)', marginBottom: 8 }}>{item}</p>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Gilbert, Arizona"
        title={<>Sound like a fit?<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>Let&apos;s find out.</span></>}
        blurb="Tell us what you are building. We will send back a plan, a timeline, and a flat price, usually within one business day."
      />

      <style>{`
        @media (max-width: 900px) {
          .about-hero { grid-template-columns: 1fr !important; }
          .about-img { display: none !important; }
        }
      `}</style>
    </>
  )
}
