import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const projects = [
  { id: 1, title: 'Con Gusto', category: 'Mobile App', tag: 'React Native · Laravel 12', desc: 'Property management app with biometric auth, animated job timelines, global search, skeleton loaders, and haptic feedback. iOS & Android.', accent: 'var(--cyan)', num: '01', status: 'Live', year: '2024' },
  { id: 2, title: 'SunState Hardscape', category: 'Web + Branding', tag: 'HTML · CSS · JS', desc: 'Full brand identity and a hand-coded 18-page marketing site for a Phoenix-area hardscape company. Four-breakpoint responsive. Zero page builders.', accent: 'var(--orange)', num: '02', status: 'Live', year: '2024' },
  { id: 3, title: 'ELS Platform', category: 'iOS App', tag: 'SwiftUI · Supabase', desc: 'Custom iOS scheduling and management app with real-time Supabase backend, calendar screens, and multi-role access control.', accent: 'var(--cyan)', num: '03', status: 'In Dev', year: '2025' },
  { id: 4, title: 'Client AI Assistant', category: 'AI & Automation', tag: 'Claude API · Node.js', desc: 'Embedded 24/7 AI support agent for a service business. Custom knowledge base, lead capture flow, and CRM sync on form submit.', accent: 'var(--orange)', num: '04', status: 'Live', year: '2024' },
  { id: 5, title: 'E-Commerce Build', category: 'Web Development', tag: 'Next.js · Stripe', desc: 'Full custom e-commerce with Stripe payments, inventory management, order tracking, and an admin dashboard. Sub-1s load times.', accent: 'var(--cyan)', num: '05', status: 'Live', year: '2024' },
  { id: 6, title: 'Brand Identity Suite', category: 'Branding', tag: 'Identity · Motion', desc: 'Full brand identity including logo, animated logo variants, color system, typography, and a 40-page brand guide.', accent: 'var(--orange)', num: '06', status: 'Delivered', year: '2024' },
]

export default function WorksPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Portfolio</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', maxWidth: 800, marginBottom: 32 }}>
            Work that<br />
            <span style={{ color: 'var(--orange)' }}>speaks</span> for<br />
            <span style={{ WebkitTextStroke: '2px var(--cyan)', color: 'transparent' }}>itself.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.75, maxWidth: 480 }}>
            Every project is a 1 of 1. Custom built, hand-coded, client-owned.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '20px 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 3 }}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 60}>
              <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '48px 40px', position: 'relative', borderBottom: `4px solid ${p.accent}`, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Watermark */}
                <span style={{ position: 'absolute', bottom: -24, right: -8, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 130, color: 'rgba(255,255,255,0.02)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{p.num}</span>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, padding: '4px 12px', borderRadius: 999, background: p.status === 'In Dev' ? 'rgba(244,98,42,0.1)' : 'rgba(0,212,200,0.08)', color: p.status === 'In Dev' ? 'var(--orange)' : 'var(--cyan)', border: `1px solid ${p.status === 'In Dev' ? 'rgba(244,98,42,0.2)' : 'rgba(0,212,200,0.15)'}`, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {p.status}
                  </span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>{p.year}</span>
                </div>

                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{p.category}</p>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 30, marginBottom: 14, lineHeight: 1.05 }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 24, flex: 1 }}>{p.desc}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '4px 10px', letterSpacing: '0.05em' }}>{p.tag}</span>
                  <span style={{ color: p.accent, fontSize: 18 }}>→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px 100px', background: 'var(--navy-mid)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <ScrollReveal>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Got a Project?</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 32 }}>
            Yours could be<br /><span style={{ color: 'var(--orange)' }}>next.</span>
          </h2>
          <Link href="/contact" className="glow-pulse" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Start a Conversation →
          </Link>
        </ScrollReveal>
      </section>
    </>
  )
}
