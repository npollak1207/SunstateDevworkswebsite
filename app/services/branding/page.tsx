import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const features = [
  {
    title: 'Logo & Mark Design',
    desc: 'Primary logo, alternate marks, icons, and favicon. Delivered in every format — SVG, PNG, PDF, black & white, color.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'Color System',
    desc: 'A complete palette — primary, secondary, neutral, semantic. Specified in HEX, RGB, HSL, and CMYK for both digital and print.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22C6.49 22 2 17.52 2 12.07C2 6.83 6.28 2 12 2s10 4.83 10 10.07A10 10 0 0 1 12 22z"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Typography System',
    desc: 'Curated font pairings — display, body, mono. Usage rules for headings, subheads, captions, and UI text.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'Brand Voice & Guidelines',
    desc: 'Tone, messaging framework, do\'s and don\'ts. So every piece of copy — from your site to your emails — feels like you.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Business Collateral',
    desc: 'Business cards, letterhead, email signatures, presentation templates. Everything you need to look the part.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'Social & Digital Assets',
    desc: 'Profile images, banner templates, post formats optimized for Instagram, LinkedIn, and Facebook — sized and exported ready-to-use.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
    color: 'var(--orange)',
  },
]

const deliverables = [
  'Primary logo + alternate variations',
  'Full color system (HEX, RGB, CMYK)',
  'Typography pairings & usage rules',
  'Brand voice & messaging guide',
  'Business card + letterhead design',
  'Email signature template',
  'Social media kit (8+ formats)',
  'Brand guidelines PDF (20–30 pages)',
  'All source files (Figma, AI, EPS)',
  'Font licensing guidance',
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Brand audit, competitor review, audience mapping, and a deep conversation about what you stand for.' },
  { num: '02', title: 'Direction', desc: 'We present 2–3 distinct brand directions — mood boards, visual concepts, directional logos. You choose one.' },
  { num: '03', title: 'Design', desc: 'Full identity build-out on your chosen direction. 2 rounds of revisions included.' },
  { num: '04', title: 'Delivery', desc: 'Brand guidelines PDF, all source files, every format. Ready to use the day we hand over.' },
]

const faqs = [
  { q: 'What if I hate all the initial concepts?', a: 'It\'s rare, but if none of the directions land, we go back to discovery, identify what missed, and try again. We don\'t walk away from a failed concept — we figure out why and fix it.' },
  { q: 'Can you just refresh my existing brand?', a: 'Yes. Brand refresh is its own project type — we evolve what\'s working and fix what isn\'t, without scrapping your existing equity.' },
  { q: 'Do you do branding AND the website?', a: 'Yes, and it\'s actually how we prefer to work. Building the brand and the site together means the identity is native to the design, not applied after. We offer package pricing for both.' },
  { q: 'How long does branding take?', a: 'A full brand identity runs 3–5 weeks. Brand + website combined runs 6–10 weeks.' },
  { q: 'Do I own the brand files?', a: 'Completely. All Figma files, Illustrator files, fonts sourced under commercial license — everything is handed to you on delivery. We retain no rights.' },
]

export default function BrandingPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-5%', bottom: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>→</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Branding & Identity</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="service-header-grid">
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>03 — Service</p>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 32 }}>
                Branding<br />&amp; <span style={{ color: 'var(--cyan)', WebkitTextStroke: '0px' }}>Identity</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                Identity that holds up everywhere — digital, print, signage, social. Built on strategy, not just aesthetics.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                  Start a Project →
                </Link>
                <Link href="/pricing" style={{ border: '1px solid rgba(0,212,200,0.25)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Brand visual */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Color swatches */}
              <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px', overflow: 'hidden' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Color System</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['#0D1B2A', '#00D4C8', '#F4622A', '#F0EDE6', '#7A8FA6'].map((c, i) => (
                    <div key={i} style={{ flex: 1, height: 48, borderRadius: 8, background: c, border: '1px solid rgba(255,255,255,0.06)' }} />
                  ))}
                </div>
              </div>
              {/* Typography preview */}
              <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Typography</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, color: 'var(--off-white)', lineHeight: 1, marginBottom: 4 }}>Display Aa</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--text-muted)', marginBottom: 4 }}>Body text. Clean. Readable.</p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.08em' }}>MONO · LABELS · CODE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What You Get</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 64 }}>
              Identity that<br /><span style={{ color: 'var(--cyan)' }}>means something.</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-lift" style={{ background: 'var(--navy)', padding: '36px 32px', borderTop: `3px solid ${f.color}`, height: '100%' }}>
                  <div style={{ color: f.color, marginBottom: 20 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 10, color: 'var(--off-white)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process + Deliverables ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="two-col-grid">
          <div>
            <ScrollReveal>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>The Process</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>
                Strategy first.<br /><span style={{ color: 'var(--orange)' }}>Aesthetics follow.</span>
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {processSteps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div style={{ display: 'flex', gap: 20, paddingBottom: i < processSteps.length - 1 ? 28 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid var(--orange)', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--orange)' }}>{s.num}</span>
                      </div>
                      {i < processSteps.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />}
                    </div>
                    <div style={{ paddingTop: 8, paddingBottom: i < processSteps.length - 1 ? 20 : 0 }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 6, color: 'var(--off-white)' }}>{s.title}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Deliverables</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>
                Everything<br /><span style={{ color: 'var(--cyan)' }}>handed over</span>
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {deliverables.map((d, i) => (
                <ScrollReveal key={i} delay={i * 40 + 100}>
                  <div style={{ background: 'var(--navy-mid)', padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'center', border: '1px solid rgba(0,212,200,0.06)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--off-white)' }}>{d}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 48 }}>
              Common<br /><span style={{ color: 'var(--cyan)' }}>questions</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--navy)', padding: '28px 32px', borderLeft: '3px solid rgba(0,212,200,0.2)' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--off-white)' }}>{f.q}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.01) 20px, rgba(0,212,200,0.01) 40px)' }} />
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, marginBottom: 24 }}>
              Time to look<br /><span style={{ color: 'var(--cyan)' }}>the part.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 400, margin: '0 auto 40px' }}>
              30-minute discovery call. We figure out what your brand needs to become — then build it.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                Start a Project →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <style>{`
        .service-header-grid { grid-template-columns: 1fr 1fr; }
        .features-grid { grid-template-columns: repeat(3, 1fr); }
        .two-col-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .service-header-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .two-col-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}
