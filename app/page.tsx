import Link from 'next/link'

const services = [
  { icon: '⌨️', title: 'Web Development', tag: '01', desc: 'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and rankings that actually move.', color: 'var(--cyan)' },
  { icon: '📱', title: 'Mobile Apps', tag: '02', desc: 'iOS & Android apps built with React Native and Swift. From MVP to App Store — we ship.', color: 'var(--orange)' },
  { icon: '✦', title: 'Branding & Identity', tag: '03', desc: 'Logo, color systems, typography, and brand guides. Identity that holds up everywhere.', color: 'var(--cyan)' },
  { icon: '◈', title: 'AI & Automation', tag: '04', desc: 'Custom AI integrations, chatbots, and workflow automation. Your team, amplified.', color: 'var(--orange)' },
]

const stats = [
  { val: '100%', label: 'Hand-coded' },
  { val: '<1hr', label: 'Response Time' },
  { val: '99.9%', label: 'Uptime SLA' },
  { val: '5★', label: 'Client Rating' },
]

const marqueeItems = ['Web Dev','✦','Mobile Apps','◈','Branding','✦','AI Build','◈','SEO','✦','Automation','◈','Web Dev','✦','Mobile Apps','◈','Branding','✦','AI Build','◈','SEO','✦','Automation','◈']

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.08) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.07) 0%, transparent 70%)', zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,200,0.08)', border: '1px solid rgba(0,212,200,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gilbert, Arizona · Available Now</span>
          </div>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 900 }}>
            Not a template.<br />
            <span style={{ color: 'var(--cyan)' }}>Not</span> a{' '}
            <span style={{ WebkitTextStroke: '2px var(--orange)', color: 'transparent' }}>builder.</span>
            <br />
            <span style={{ color: 'var(--orange)' }}>1 of 1.</span>
          </h1>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
            We write clean, high-performance code for businesses that need a serious digital asset. Web, mobile, branding, and AI — you own 100% of everything we build.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Start a Project →
            </Link>
            <Link href="/works" style={{ border: '1px solid rgba(0,212,200,0.3)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              View Works
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, marginTop: 80, maxWidth: 700, background: 'rgba(255,255,255,0.04)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '24px 16px', background: 'var(--navy-mid)', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', marginBottom: 4 }}>{s.val}</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: 'var(--orange)', padding: '14px 0', overflow: 'hidden', borderTop: '2px solid rgba(255,255,255,0.1)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginRight: 32 }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 72 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What We Build</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
              Full-stack capabilities.<br /><span style={{ color: 'var(--cyan)' }}>Zero dependencies.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {services.map((s, i) => (
              <div key={i} className="card-lift" style={{ background: 'var(--navy-mid)', padding: '40px 32px', borderTop: `3px solid ${s.color}`, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 32, right: 32, fontFamily: 'Space Mono, monospace', fontSize: 11, color: s.color, opacity: 0.5 }}>{s.tag}</span>
                <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, marginBottom: 12, color: 'var(--off-white)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '120px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: 'rgba(0,212,200,0.04)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Why Sunstate</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
                One team.<br /><span style={{ color: 'var(--orange)' }}>Total accountability.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                We host what we build, maintain what we deploy, and fix what breaks. No pointing fingers at your hosting company — just one team with complete ownership.
              </p>
              <Link href="/about" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--cyan)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '2px solid var(--cyan)', paddingBottom: 4 }}>
                About Us →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { label: 'No Blame Game', desc: 'We host what we build. Complete accountability, one team.', icon: '◉' },
                { label: 'Code Experts', desc: 'Servers tuned for your architecture. Not generic shared hosting.', icon: '◈' },
                { label: 'Direct Access', desc: 'Local Arizona team. Real humans. No ticket queues or call centers.', icon: '✦' },
                { label: 'You Own Everything', desc: 'No proprietary lock-in. You own 100% of the code, always.', icon: '⬡' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, padding: '20px 24px', background: 'var(--navy)', borderLeft: `3px solid ${i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)'}`, borderRadius: '0 8px 8px 0' }}>
                  <span style={{ color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.02) 20px, rgba(0,212,200,0.02) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>Ready?</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Your next digital asset<br /><span style={{ color: 'var(--cyan)' }}>starts with a call.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 480, margin: '0 auto 48px' }}>
            No pressure. Just a 30-minute discovery call to see if we are a fit.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, padding: '20px 52px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 0 60px rgba(244,98,42,0.25)' }}>
            Schedule Discovery Call →
          </Link>
        </div>
      </section>
    </>
  )
}
