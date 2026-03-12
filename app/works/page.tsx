import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Con Gusto',
    category: 'Mobile App',
    tag: 'React Native · Laravel',
    desc: 'Property management app with biometric auth, job timelines, global search, and a Laravel 12 backend. iOS & Android.',
    accent: 'var(--cyan)',
    num: '01',
    status: 'Live',
  },
  {
    id: 2,
    title: 'SunState Hardscape',
    category: 'Web + Branding',
    tag: 'HTML · CSS · JS',
    desc: 'Brand identity and a full custom-coded marketing site for a Phoenix-area hardscape company. Zero page builders.',
    accent: 'var(--orange)',
    num: '02',
    status: 'Live',
  },
  {
    id: 3,
    title: 'ELS Platform',
    category: 'iOS App',
    tag: 'SwiftUI · Supabase',
    desc: 'Custom iOS scheduling and management app with real-time Supabase backend, calendar screens, and multi-role access.',
    accent: 'var(--cyan)',
    num: '03',
    status: 'In Dev',
  },
  {
    id: 4,
    title: 'Client AI Assistant',
    category: 'AI & Automation',
    tag: 'Claude API · Node.js',
    desc: 'Embedded 24/7 AI support agent for a service business. Custom knowledge base, lead capture, and CRM sync.',
    accent: 'var(--orange)',
    num: '04',
    status: 'Live',
  },
  {
    id: 5,
    title: 'E-Commerce Build',
    category: 'Web Development',
    tag: 'Next.js · Stripe',
    desc: 'Full custom e-commerce solution with Stripe payments, inventory management, and an admin dashboard.',
    accent: 'var(--cyan)',
    num: '05',
    status: 'Live',
  },
  {
    id: 6,
    title: 'Brand Identity Suite',
    category: 'Branding',
    tag: 'Identity · Motion',
    desc: 'Full brand identity including logo design, animated logo variants, color systems, and complete brand guide.',
    accent: 'var(--orange)',
    num: '06',
    status: 'Delivered',
  },
]

const cats = ['All', 'Web Development', 'Mobile App', 'Branding', 'AI & Automation']

export default function WorksPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Portfolio</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.02em', maxWidth: 800 }}>
            Work that<br /><span style={{ color: 'var(--orange)' }}>speaks</span> for<br /><span style={{ WebkitTextStroke: '2px var(--cyan)', color: 'transparent' }}>itself.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.7, maxWidth: 480, marginTop: 24 }}>
            Custom builds across web, mobile, branding, and AI. Every project is a 1 of 1.
          </p>
        </div>
      </section>

      {/* Filter chips */}
      <div style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {cats.map((c, i) => (
            <span key={c} style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 11,
              padding: '8px 18px',
              borderRadius: 999,
              border: `1px solid ${i === 0 ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`,
              background: i === 0 ? 'rgba(0,212,200,0.1)' : 'transparent',
              color: i === 0 ? 'var(--cyan)' : 'var(--text-muted)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <section style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 2 }}>
          {projects.map((p) => (
            <div key={p.id} className="card-lift" style={{
              background: 'var(--navy-mid)',
              padding: '48px 40px',
              position: 'relative',
              borderBottom: `4px solid ${p.accent}`,
              overflow: 'hidden',
              cursor: 'pointer',
            }}>
              {/* Number watermark */}
              <span style={{
                position: 'absolute',
                bottom: -20,
                right: -10,
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 120,
                color: 'rgba(255,255,255,0.02)',
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>{p.num}</span>

              {/* Status badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 10,
                  padding: '4px 12px',
                  borderRadius: 999,
                  background: p.status === 'In Dev' ? 'rgba(244,98,42,0.12)' : 'rgba(0,212,200,0.1)',
                  color: p.status === 'In Dev' ? 'var(--orange)' : 'var(--cyan)',
                  border: `1px solid ${p.status === 'In Dev' ? 'rgba(244,98,42,0.25)' : 'rgba(0,212,200,0.2)'}`,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {p.status}
                </span>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: p.accent, opacity: 0.6 }}>{p.num}</span>
              </div>

              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                {p.category}
              </p>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, marginBottom: 12, lineHeight: 1.1 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>
              <span style={{
                display: 'inline-block',
                fontFamily: 'Space Mono, monospace',
                fontSize: 10,
                color: 'var(--text-muted)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 4,
                padding: '4px 10px',
                letterSpacing: '0.06em',
              }}>
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Got a Project?</p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1, marginBottom: 32 }}>
          Yours could be<br /><span style={{ color: 'var(--orange)' }}>next.</span>
        </h2>
        <Link href="/contact" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Start a Conversation →
        </Link>
      </section>
    </>
  )
}
