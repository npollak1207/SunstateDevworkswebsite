import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import HeroTyping from '@/components/HeroTyping'

const services = [
  { icon: '⌨️', title: 'Web Development', tag: '01', desc: 'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and Google rankings that actually move.', color: 'var(--cyan)' },
  { icon: '📱', title: 'Mobile Apps', tag: '02', desc: 'iOS & Android apps built with React Native and SwiftUI. From MVP to App Store — we ship fast and we ship right.', color: 'var(--orange)' },
  { icon: '✦', title: 'Branding & Identity', tag: '03', desc: 'Logo, color systems, typography, brand guides. Identity that holds up everywhere — from business cards to billboards.', color: 'var(--cyan)' },
  { icon: '◈', title: 'AI & Automation', tag: '04', desc: 'Custom AI integrations, chatbots, and workflow automation. Your team stays the same size. Output multiplies.', color: 'var(--orange)' },
]

const stats = [
  { val: '100%', label: 'Hand-coded' },
  { val: '<1hr', label: 'Response Time' },
  { val: '99.9%', label: 'Uptime SLA' },
  { val: '5★', label: 'Client Rating' },
]

const marqueeItems = ['Web Dev','✦','Mobile Apps','◈','Branding','✦','AI Build','◈','SEO','✦','Automation','◈','Swift','✦','Next.js','◈','Web Dev','✦','Mobile Apps','◈','Branding','✦','AI Build','◈','SEO','✦','Automation','◈','Swift','✦','Next.js','◈']

const process = [
  { num: '01', title: 'Discovery Call', desc: '30 minutes. We learn your business, goals, and what success actually looks like for you.', icon: '◎' },
  { num: '02', title: 'Proposal & Scope', desc: 'Written scope, timeline, and flat-rate price. No hourly surprises. You approve before we start.', icon: '◈' },
  { num: '03', title: 'Design & Build', desc: 'We build in sprints and share progress weekly. You stay in the loop without being in the weeds.', icon: '⌨️' },
  { num: '04', title: 'Launch & Handoff', desc: 'We handle DNS, SSL, and go-live. Then we hand you the keys — or keep maintaining it. Your call.', icon: '✦' },
]

const testimonials = [
  { name: 'Marcus T.', role: 'Owner, Ironclad Contracting', body: 'These guys built our site in two weeks and it already ranks on the first page for three of our main keywords. Night and day from our old WordPress mess.', rating: 5 },
  { name: 'Priya S.', role: 'Founder, Bloom Wellness', body: 'The booking system integration saved us probably 10 hours a week. They actually understood what we needed instead of just building what we asked for.', rating: 5 },
  { name: 'Derek L.', role: 'CEO, Flux Media Group', body: 'We had a tight deadline and a complicated build. They hit the deadline, the code is clean, and the site is blazing fast. Exactly what a dev shop should be.', rating: 5 },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.04) 1px, transparent 1px)', backgroundSize: '72px 72px', zIndex: 0 }} />
        {/* Glows */}
        <div style={{ position: 'absolute', top: '20%', right: '-15%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.07) 0%, transparent 65%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 65%)', zIndex: 0 }} />
        {/* Diagonal accent line */}
        <div style={{ position: 'absolute', top: 0, right: '25%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,212,200,0.1), transparent)', zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,200,0.07)', border: '1px solid rgba(0,212,200,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 36 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', boxShadow: '0 0 8px var(--cyan)' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gilbert, Arizona · Available Now</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7.5vw, 108px)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 12, maxWidth: 1000 }}>
            We build<br />
          </h1>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7.5vw, 108px)', lineHeight: 0.95, letterSpacing: '-0.025em', marginBottom: 36, minHeight: '1.1em' }}>
            <HeroTyping />
          </h1>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.75, marginBottom: 48 }}>
            Custom code. No templates, no page builders, no lock-in.
            Web, mobile, branding, and AI — you own 100% of everything.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 72 }}>
            <Link href="/contact" className="glow-pulse" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Start a Project →
            </Link>
            <Link href="/works" style={{ border: '1px solid rgba(0,212,200,0.25)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'rgba(0,212,200,0.04)' }}>
              View Works
            </Link>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: 680, background: 'var(--navy-mid)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '22px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', marginBottom: 4 }}>{s.val}</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div style={{ background: 'var(--orange)', padding: '13px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'white', marginRight: 28 }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 72 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What We Build</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Full-stack capabilities.<br /><span style={{ color: 'var(--cyan)' }}>Zero outside dependencies.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 3 }}>
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '40px 32px', borderTop: `3px solid ${s.color}`, position: 'relative', height: '100%' }}>
                  <span style={{ position: 'absolute', top: 28, right: 28, fontFamily: 'Space Mono, monospace', fontSize: 11, color: s.color, opacity: 0.4 }}>{s.tag}</span>
                  <div style={{ fontSize: 30, marginBottom: 18 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 21, marginBottom: 10, color: 'var(--off-white)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>How It Works</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                From idea to launch.<br /><span style={{ color: 'var(--orange)' }}>No confusion.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ padding: '36px 28px', position: 'relative', borderLeft: `2px solid ${i % 2 === 0 ? 'rgba(0,212,200,0.2)' : 'rgba(244,98,42,0.2)'}` }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', letterSpacing: '0.1em', marginBottom: 16, display: 'block' }}>{p.num}</span>
                  <div style={{ fontSize: 28, marginBottom: 14, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: '-5%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <ScrollReveal>
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Why Sunstate</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
                One team.<br /><span style={{ color: 'var(--orange)' }}>Total accountability.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
                We host what we build, maintain what we deploy, and fix what breaks.
                No pointing fingers at your hosting company or some &quot;other developer.&quot;
                Just one team, one relationship, complete ownership.
              </p>
              <Link href="/about" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--cyan)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '2px solid var(--cyan)', paddingBottom: 4 }}>
                About the Studio →
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'No Blame Game', desc: 'We host what we build. Complete accountability, one team.', icon: '◉', c: 'var(--cyan)' },
              { label: 'Code Experts', desc: 'Servers tuned for your architecture. Not generic shared hosting.', icon: '◈', c: 'var(--orange)' },
              { label: 'Direct Access', desc: 'Local Arizona team. Real humans. No ticket queues or call centers.', icon: '✦', c: 'var(--cyan)' },
              { label: 'You Own Everything', desc: 'No proprietary lock-in. 100% of the code is yours. Always.', icon: '⬡', c: 'var(--orange)' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-lift" style={{ display: 'flex', gap: 18, padding: '20px 24px', background: 'var(--navy-mid)', borderLeft: `3px solid ${item.c}`, borderRadius: '0 8px 8px 0' }}>
                  <span style={{ color: item.c, fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Social Proof</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Don&apos;t take our word for it.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift" style={{ background: 'var(--navy)', padding: '36px 32px', borderTop: `3px solid ${i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)'}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: 'var(--orange)', fontSize: 14 }}>★</span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--off-white)', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>
                    &quot;{t.body}&quot;
                  </p>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)' }}>{t.name}</p>
                    <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(0,212,200,0.018) 24px, rgba(0,212,200,0.018) 48px)' }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.07) 0%, transparent 70%)' }} />
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>Ready?</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Your next digital asset<br /><span style={{ color: 'var(--cyan)' }}>starts with a call.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              No pressure. Just a 30-minute discovery call to see if we are a fit.
            </p>
            <Link href="/contact" className="glow-pulse" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, padding: '20px 56px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Schedule Discovery Call →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
