import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const stack = [
  { cat: 'Web', items: ['Next.js', 'React', 'HTML/CSS', 'TypeScript', 'Node.js'] },
  { cat: 'Mobile', items: ['SwiftUI', 'React Native', 'Expo', 'Xcode'] },
  { cat: 'Backend', items: ['Laravel', 'Supabase', 'PostgreSQL', 'REST APIs'] },
  { cat: 'AI & Tools', items: ['Claude API', 'OpenAI', 'Automation', 'n8n'] },
  { cat: 'Design', items: ['Figma', 'Brand Identity', 'Motion Graphics', 'Adobe CC'] },
  { cat: 'Infra', items: ['Cloudflare', 'NVMe Hosting', 'CI/CD', 'SSL/DNS'] },
]

const values = [
  { title: 'Ownership First', desc: 'We never lock you into proprietary tools. You own 100% of the code, domain, and every deliverable.', accent: 'var(--cyan)' },
  { title: 'No Bloat', desc: 'No WordPress, no page builders, no drag-and-drop shortcuts. Just clean, performant, hand-written code.', accent: 'var(--orange)' },
  { title: 'Radical Transparency', desc: 'You see the same numbers we do. Pricing is public, scope is documented, and we say no when we need to.', accent: 'var(--cyan)' },
  { title: 'Local & Accountable', desc: 'Based in Gilbert, Arizona. Not a remote farm or offshore agency. A real team you can reach directly.', accent: 'var(--orange)' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: 0, top: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>About the Studio</p>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.02em', maxWidth: 700, marginBottom: 32 }}>
                Built different.<br /><span style={{ color: 'var(--orange)' }}>On purpose.</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 560 }}>
                Sunstate Devworks is a boutique digital studio based in Gilbert, Arizona. We design and build custom digital products — websites, mobile apps, brands, and AI tools — for businesses that need serious digital infrastructure.
              </p>
            </div>
            <div style={{ paddingTop: 80 }}>
              <Image
                src="/logo.png"
                alt="Sunstate Devworks"
                width={200}
                height={200}
                style={{ objectFit: 'contain', opacity: 0.9 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>The Story</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              "We started Sunstate Devworks because we were frustrated watching clients get burned by agencies that handed them locked-down WordPress installs, disappearing after the invoice cleared.",
              "So we flipped the model. Every line of code we write is yours. Every site we host, we built. When something breaks, there's no phone tree — you text us directly.",
              "We work across web, mobile, branding, and AI. Most studios make you hire three vendors for that. We don't. One relationship, one point of contact, complete accountability.",
              "We're based in Gilbert, Arizona. Not a co-working space in Scottsdale with a foosball table and six interns — an actual technical studio that ships real products.",
            ].map((p, i) => (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.9, color: i === 0 ? 'var(--off-white)' : 'var(--text-muted)', borderLeft: i === 0 ? '3px solid var(--cyan)' : '3px solid transparent', paddingLeft: i === 0 ? 20 : 23 }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>How We Operate</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
            {values.map((v, i) => (
              <div key={i} className="card-lift" style={{ background: 'var(--navy-mid)', padding: '40px 32px', borderTop: `4px solid ${v.accent}` }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, marginBottom: 12, color: 'var(--off-white)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>Tech Stack</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 24 }}>
            {stack.map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{s.cat}</p>
                {s.items.map(item => (
                  <p key={item} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--text-muted)', marginBottom: 6 }}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.015) 20px, rgba(0,212,200,0.015) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, marginBottom: 24 }}>
            Sound like a fit?<br /><span style={{ color: 'var(--cyan)' }}>Let&apos;s find out.</span>
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Start a Project →
            </Link>
            <Link href="/pricing" style={{ border: '1px solid rgba(0,212,200,0.3)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
