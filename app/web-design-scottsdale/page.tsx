import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design Scottsdale AZ | Sunstate DevWorks',
  description: 'Premium web design in Scottsdale, AZ for luxury brands, hospitality, and high-end businesses. Hand-coded custom sites, branding & AI â€” no templates. Gilbert-based studio.',
  keywords: [
    'web design Scottsdale AZ',
    'web designer Scottsdale Arizona',
    'luxury web design Scottsdale',
    'hospitality web design Scottsdale',
    'custom website Scottsdale AZ',
    'Scottsdale digital agency',
    'branding agency Scottsdale AZ',
    'high-end web design Scottsdale',
    'tourism website Scottsdale',
    'mobile app developer Scottsdale AZ',
  ],
  alternates: {
    canonical: 'https://sunstatedevworks.com/web-design-scottsdale',
  },
  openGraph: {
    url: 'https://sunstatedevworks.com/web-design-scottsdale',
    title: 'Web Design Scottsdale AZ | Sunstate DevWorks',
    description: 'Premium web design in Scottsdale, AZ for luxury brands, hospitality & high-end businesses. Hand-coded custom sites, no templates.',
  },
}

const services = [
  { label: 'Web Development', desc: 'Hand-coded, blazing-fast websites built from scratch. No templates, no WordPress, no page builders.', accent: 'var(--cyan)' },
  { label: 'Mobile Apps', desc: 'iOS and Android apps built with SwiftUI and React Native. From idea to App Store.', accent: 'var(--orange)' },
  { label: 'Branding', desc: 'Logo, color system, typography, brand guidelines. Identity work that holds up at every scale.', accent: 'var(--cyan)' },
  { label: 'AI & Automation', desc: 'Custom AI integrations, chatbots, and workflow automation that save real hours every week.', accent: 'var(--orange)' },
]

const localReasons = [
  'Scottsdale commands premium expectations â€” from luxury resorts to high-end retail, your website needs to reflect the caliber of your brand, not a generic template.',
  'We understand Scottsdale\'s hospitality and tourism industry. From spa booking flows to restaurant experiences, we design digital products that convert affluent visitors.',
  'In-person meetings available for Scottsdale clients. We are a short drive from Old Town â€” not an overseas agency working across six time zones.',
  'Scottsdale\'s competitive luxury market means your digital presence must be flawless. We target 100 on Lighthouse and obsess over every pixel.',
]

export default function ScottsdalePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.05) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>â†’</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Web Design Scottsdale</span>
          </div>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Scottsdale, AZ â€” Luxury & Hospitality</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 32, maxWidth: 800 }}>
            Scottsdale Web Design<br /><span style={{ color: 'var(--cyan)' }}>& Development</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 560, marginBottom: 40 }}>
            Sunstate DevWorks builds premium digital products for Scottsdale businesses. Custom-coded websites and apps for luxury brands, hospitality groups, and high-end service providers who cannot afford to look ordinary.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Start a Project â†’
            </Link>
            <Link href="/services" style={{ border: '1px solid rgba(0,212,200,0.25)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What We Build</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 56 }}>
            Full-stack digital<br /><span style={{ color: 'var(--cyan)' }}>for Scottsdale businesses</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: 'var(--navy)', padding: '36px 32px', borderTop: `3px solid ${s.accent}` }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, marginBottom: 12, color: 'var(--off-white)' }}>{s.label}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="loc-two-col">
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Local Advantage</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Why choose a local<br /><span style={{ color: 'var(--orange)' }}>Scottsdale web agency?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8 }}>
              Scottsdale has one of the most discerning markets in Arizona. Your digital presence needs to match the premium standard your clients expect.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {localReasons.map((reason, i) => (
              <div key={i} style={{ background: 'var(--navy-mid)', padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'start', border: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: 'var(--cyan)', fontFamily: 'Space Mono, monospace', fontSize: 13, marginTop: 2, flexShrink: 0 }}>â†’</span>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.012) 20px, rgba(0,212,200,0.012) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Based in Gilbert, AZ Â· Serving Scottsdale</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.0, marginBottom: 24 }}>
            Ready to build something<br /><span style={{ color: 'var(--cyan)' }}>in Scottsdale?</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 420, margin: '0 auto 40px' }}>
            30-minute discovery call, free of charge. We scope the project, put it in writing, and get to work.
          </p>
          <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Get a Free Quote â†’
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .loc-two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}