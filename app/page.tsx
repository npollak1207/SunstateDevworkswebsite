import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import HeroTyping from '@/components/HeroTyping'

const services = [
  { icon: '⌨️', title: 'Web Development', tag: '01', desc: 'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and Google rankings that actually move.', color: 'var(--cyan)', wide: true },
  { icon: '📱', title: 'Mobile Apps', tag: '02', desc: 'iOS & Android apps built with React Native and SwiftUI. From MVP to App Store — we ship fast and we ship right.', color: 'var(--orange)', wide: false },
  { icon: '✦', title: 'Branding & Identity', tag: '03', desc: 'Logo, color systems, typography, brand guides. Identity that holds up everywhere.', color: 'var(--cyan)', wide: false },
  { icon: '◈', title: 'AI & Automation', tag: '04', desc: 'Custom AI integrations, chatbots, and workflow automation. Your team stays the same size. Output multiplies.', color: 'var(--orange)', wide: true },
]

const stats = [
  { val: '100%', label: 'Hand-coded', icon: '⌨️' },
  { val: '<1hr',  label: 'Response Time', icon: '⚡' },
  { val: '99.9%', label: 'Uptime SLA', icon: '◎' },
  { val: '5★',   label: 'Client Rating', icon: '✦' },
]

const row1 = ['Web Development','✦','Mobile Apps','◈','Branding','✦','AI & Automation','◈','Next.js','✦','SwiftUI','◈','React Native','✦','SEO','◈','Custom Code','✦','No Templates','◈']
const row2 = ['Gilbert Arizona','◈','Hand-Coded','✦','You Own It','◈','No Lock-In','✦','Laravel','◈','Supabase','✦','Stripe','◈','TypeScript','✦','100% Custom','◈','Fast Delivery','✦']

const process = [
  { num: '01', title: 'Discovery Call', desc: '30 minutes. We learn your business, goals, and what success actually looks like for you.', color: 'var(--cyan)' },
  { num: '02', title: 'Proposal & Scope', desc: 'Written scope, timeline, and flat-rate price. No hourly surprises. You approve before we start.', color: 'var(--orange)' },
  { num: '03', title: 'Design & Build', desc: 'We build in sprints and share progress weekly. You stay in the loop without being in the weeds.', color: 'var(--cyan)' },
  { num: '04', title: 'Launch & Handoff', desc: 'We handle DNS, SSL, and go-live. Then we hand you the keys — or keep maintaining it. Your call.', color: 'var(--orange)' },
]

const whyItems = [
  { label: 'No Blame Game', desc: 'We host what we build. One team, complete accountability. No finger-pointing.', icon: '◉', c: 'var(--cyan)' },
  { label: 'Code Experts', desc: 'Servers tuned for your architecture. Not a generic shared host that bogs down under traffic.', icon: '◈', c: 'var(--orange)' },
  { label: 'Direct Access', desc: 'Local Arizona team. Real humans. No ticket queues, no call centers, no delays.', icon: '✦', c: 'var(--cyan)' },
  { label: 'You Own Everything', desc: '100% of the code is yours on delivery. No proprietary platforms, no lock-in. Ever.', icon: '⬡', c: 'var(--orange)' },
]

const featuredProjects = [
  { title: 'Con Gusto', cat: 'Mobile App', tag: 'React Native · Laravel', accent: 'var(--cyan)', num: '01' },
  { title: 'SunState Hardscape', cat: 'Web + Branding', tag: 'HTML · CSS · JS', accent: 'var(--orange)', num: '02' },
  { title: 'ELS Platform', cat: 'iOS App', tag: 'SwiftUI · Supabase', accent: 'var(--cyan)', num: '03' },
]

const testimonials = [
  { name: 'Marcus T.', role: 'Owner, Ironclad Contracting', body: 'These guys built our site in two weeks and it already ranks on the first page for three of our main keywords. Night and day from our old WordPress mess.', rating: 5 },
  { name: 'Priya S.', role: 'Founder, Bloom Wellness', body: 'The booking system integration saved us probably 10 hours a week. They actually understood what we needed instead of just building what we asked for.', rating: 5 },
  { name: 'Derek L.', role: 'CEO, Flux Media Group', body: 'We had a tight deadline and a complicated build. They hit the deadline, the code is clean, and the site is blazing fast. Exactly what a dev shop should be.', rating: 5 },
]

// Duplicate items so the seamless loop never shows a gap
const makeLoop = (arr: string[]) => [...arr, ...arr, ...arr]

export default function HomePage() {
  const loop1 = makeLoop(row1)
  const loop2 = makeLoop(row2)

  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.035) 1px, transparent 1px)', backgroundSize: '72px 72px', zIndex: 0 }} />
        {/* Glows */}
        <div style={{ position: 'absolute', top: '15%', right: '-10%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 65%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '-15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 65%)', zIndex: 0 }} />
        {/* Vertical accent */}
        <div style={{ position: 'absolute', top: 0, right: '22%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,212,200,0.08) 40%, rgba(244,98,42,0.06) 70%, transparent 100%)', zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Availability badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,200,0.06)', border: '1px solid rgba(0,212,200,0.18)', borderRadius: 999, padding: '6px 16px', marginBottom: 40 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', boxShadow: '0 0 10px var(--cyan)' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gilbert, Arizona · Available Now</span>
          </div>

          {/* Unified headline — one h1, two lines */}
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 8vw, 116px)', lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: 36 }}>
            <span style={{ display: 'block', color: 'var(--off-white)' }}>We build</span>
            <span style={{ display: 'block', minHeight: '1.05em' }}><HeroTyping /></span>
          </h1>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--text-muted)', maxWidth: 520, lineHeight: 1.8, marginBottom: 48 }}>
            Custom code. No templates, no page builders, no lock-in.
            Web, mobile, branding, and AI —{' '}
            <span style={{ color: 'var(--off-white)', fontWeight: 500 }}>you own 100% of everything.</span>
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 }}>
            <Link href="/contact" className="glow-pulse" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 38px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Start a Project →
            </Link>
            <Link href="/works" style={{ border: '1px solid rgba(0,212,200,0.22)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 38px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(0,212,200,0.03)' }}>
              View Works
            </Link>
          </div>

          {/* Stats — horizontal rule style */}
          <div style={{ display: 'flex', gap: 0, maxWidth: 720, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '20px 0', paddingLeft: i === 0 ? 0 : 24, paddingRight: 24, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 18, opacity: 0.6 }}>{s.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── MARQUEE (2 rows, opposite directions, truly infinite) ─────────────────── */}
      <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(0,212,200,0.08)', borderBottom: '1px solid rgba(0,212,200,0.08)', overflow: 'hidden', padding: '0' }}>
        {/* Row 1 — forward */}
        <div style={{ background: 'var(--orange)', padding: '12px 0', overflow: 'hidden' }}>
          <div className="marquee-fwd" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
            {loop1.map((item, i) => (
              <span key={i} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: i % 2 === 0 ? 'white' : 'rgba(255,255,255,0.5)', marginRight: 32 }}>{item}</span>
            ))}
          </div>
        </div>
        {/* Row 2 — reverse */}
        <div style={{ background: 'var(--navy-light)', padding: '11px 0', overflow: 'hidden' }}>
          <div className="marquee-back" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
            {loop2.map((item, i) => (
              <span key={i} style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: i % 2 === 0 ? 'var(--cyan)' : 'rgba(0,212,200,0.35)', marginRight: 28 }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────── SERVICES (asymmetric bento grid) ─────────────────── */}
      <section style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>What We Build</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                  Full-stack capabilities.<br /><span style={{ color: 'var(--cyan)' }}>Zero outside dependencies.</span>
                </h2>
              </div>
              <Link href="/contact" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 4, whiteSpace: 'nowrap' }}>
                All Services →
              </Link>
            </div>
          </ScrollReveal>

          {/* Bento: row 1 = wide + narrow, row 2 = narrow + wide */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3, marginBottom: 3 }}>
            {[services[0], services[1]].map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '44px 36px', borderLeft: `4px solid ${s.color}`, height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', bottom: -20, right: 16, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 100, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}>{s.tag}</span>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{s.tag} — {s.title}</p>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: i === 0 ? 32 : 24, marginBottom: 14, lineHeight: 1.05 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 480 }}>{s.desc}</p>
                  <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Learn more <span>→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 3 }}>
            {[services[2], services[3]].map((s, i) => (
              <ScrollReveal key={i} delay={i * 100 + 200}>
                <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '44px 36px', borderLeft: `4px solid ${s.color}`, height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', bottom: -20, right: 16, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 100, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}>{s.tag}</span>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{s.tag} — {s.title}</p>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: i === 1 ? 32 : 24, marginBottom: 14, lineHeight: 1.05 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
                  <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Learn more <span>→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── FEATURED PROJECTS ─────────────────── */}
      <section style={{ padding: '80px 24px 120px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Selected Work</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                  1 of 1.<br /><span style={{ color: 'var(--orange)' }}>Every time.</span>
                </h2>
              </div>
              <Link href="/works" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 4 }}>
                View All Work →
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={i} delay={i * 90}>
                <div className="card-lift" style={{ background: 'var(--navy)', padding: '36px 32px', borderBottom: `3px solid ${p.accent}`, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                  <span style={{ position: 'absolute', bottom: -16, right: 8, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 96, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}>{p.num}</span>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{p.cat}</p>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, marginBottom: 16, lineHeight: 1.05 }}>{p.title}</h3>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '4px 10px' }}>{p.tag}</span>
                  <div style={{ marginTop: 24, color: p.accent, fontSize: 20 }}>→</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── PROCESS (horizontal timeline) ─────────────────── */}
      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 72 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>How It Works</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Idea to launch.<br /><span style={{ color: 'var(--orange)' }}>No confusion.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline connector */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, var(--cyan), var(--orange), var(--cyan), var(--orange))', opacity: 0.25 }} className="hide-mobile" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
              {process.map((p, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div style={{ padding: '0 20px 0', textAlign: 'center' }}>
                    {/* Step circle */}
                    <div style={{ width: 56, height: 56, borderRadius: '50%', border: `2px solid ${p.color}`, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', position: 'relative', zIndex: 1 }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: p.color, fontWeight: 700 }}>{p.num}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 10, color: 'var(--off-white)' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── WHY US (editorial split) ─────────────────── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }}>
            <ScrollReveal>
              <div style={{ position: 'sticky', top: 100 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Why Sunstate</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
                  One team.<br /><span style={{ color: 'var(--orange)' }}>Total<br />accountability.</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
                  We host what we build, maintain what we deploy, and fix what breaks.
                  No blame game. No runaround. One relationship from start to forever.
                </p>
                <Link href="/about" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--cyan)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '2px solid var(--cyan)', paddingBottom: 4 }}>
                  About the Studio →
                </Link>
              </div>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {whyItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="card-lift" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, padding: '28px 28px', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: `rgba(${item.c === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.08)`, border: `1px solid rgba(${item.c === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: item.c, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{item.label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── TESTIMONIALS (featured pullquote + grid) ─────────────────── */}
      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-5%', top: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.04) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 72 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Client Results</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Don&apos;t take our word<br /><span style={{ color: 'var(--cyan)' }}>for it.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Big featured quote */}
          <ScrollReveal>
            <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(0,212,200,0.12)', borderRadius: 16, padding: '56px 64px', marginBottom: 3, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 24, left: 40, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 120, color: 'rgba(0,212,200,0.06)', lineHeight: 1, pointerEvents: 'none' }}>&ldquo;</div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 24 }}>
                {Array.from({ length: 5 }).map((_, j) => <span key={j} style={{ color: 'var(--orange)', fontSize: 16 }}>★</span>)}
              </div>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.5, color: 'var(--off-white)', marginBottom: 32, maxWidth: 800, position: 'relative', zIndex: 1 }}>
                &ldquo;{testimonials[0].body}&rdquo;
              </p>
              <div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--cyan)' }}>{testimonials[0].name}</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{testimonials[0].role}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Smaller two cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            {testimonials.slice(1).map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '36px 36px', borderTop: `3px solid ${i === 0 ? 'var(--orange)' : 'var(--cyan)'}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 18 }}>
                    {Array.from({ length: t.rating }).map((_, j) => <span key={j} style={{ color: 'var(--orange)', fontSize: 13 }}>★</span>)}
                  </div>
                  <p style={{ color: 'var(--off-white)', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>&ldquo;{t.body}&rdquo;</p>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: i === 0 ? 'var(--orange)' : 'var(--cyan)' }}>{t.name}</p>
                    <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA (full-bleed, editorial) ─────────────────── */}
      <section style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }}>
          {/* Left — text */}
          <div style={{ padding: '80px 64px', borderRight: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 70%)' }} />
            <ScrollReveal>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Ready?</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 20 }}>
                Your next<br />digital asset<br /><span style={{ color: 'var(--cyan)' }}>starts here.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75 }}>
                No pressure. A 30-minute discovery call to see if we are a fit.
              </p>
            </ScrollReveal>
          </div>
          {/* Right — action */}
          <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
            <ScrollReveal delay={100}>
              <Link href="/contact" className="glow-pulse" style={{ display: 'block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, padding: '22px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 12 }}>
                Schedule Discovery Call →
              </Link>
              <Link href="/pricing" style={{ display: 'block', border: '1px solid rgba(0,212,200,0.2)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '18px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center', background: 'rgba(0,212,200,0.03)' }}>
                See Pricing First
              </Link>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Typically respond within 2 hours
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          /* Services bento → single col */
          section > div > div[style*="grid-template-columns: 2fr 1fr"],
          section > div > div[style*="grid-template-columns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
          }
          /* Why Us → stack */
          section > div > div[style*="grid-template-columns: 5fr 7fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Sticky left col */
          div[style*="position: sticky"] {
            position: static !important;
          }
          /* CTA split → stack */
          section > div[style*="grid-template-columns: 1fr 1fr"][style*="min-height"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="border-right: 1px solid rgba(255,255,255,0.06)"] {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          /* Featured projects → stack */
          section > div > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          /* Process grid → 2 col */
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          /* Testimonial bottom → stack */
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          /* Stats → 2 col */
          div[style*="repeat(4, 1fr)"] {
            flex-wrap: wrap !important;
          }
        }
        @media (max-width: 600px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}
