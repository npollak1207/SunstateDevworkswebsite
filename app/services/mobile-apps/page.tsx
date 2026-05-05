import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const features = [
  {
    title: 'iOS & Android — Both',
    desc: 'React Native for true cross-platform, SwiftUI for native iOS when performance demands it. We pick the right tool for your project.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'From MVP to Production',
    desc: 'We scope tightly, ship fast, and iterate. Your first version gets to market without the bloat that slows most apps down.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'App Store Submission',
    desc: 'We handle TestFlight, App Store Connect, Google Play setup, and the entire submission process. You don\'t need an Apple dev account until we need one.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Real Native Feel',
    desc: 'Haptic feedback, native navigation patterns, platform-specific gestures. Not a web app stuffed in a shell.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'Auth & Backend Included',
    desc: 'Biometric auth, Supabase or Laravel backend, real-time data, push notifications. We build the full stack, not just the front.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Offline-First Option',
    desc: 'Local caching, background sync, graceful offline states. Apps that work whether or not there\'s a signal.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2" strokeLinecap="round"/></svg>,
    color: 'var(--cyan)',
  },
]

const techStack = [
  { cat: 'iOS', items: ['SwiftUI', 'UIKit', 'Xcode', 'TestFlight'] },
  { cat: 'Cross-Platform', items: ['React Native', 'Expo', 'TypeScript'] },
  { cat: 'Backend', items: ['Supabase', 'Laravel', 'PostgreSQL'] },
  { cat: 'Auth', items: ['Biometric', 'OAuth 2.0', 'JWT', 'Sanctum'] },
  { cat: 'Features', items: ['Push Notifications', 'Real-Time', 'Stripe', 'Maps'] },
  { cat: 'Deployment', items: ['App Store', 'Google Play', 'OTA Updates'] },
]

const appTypes = [
  { label: 'Business & Productivity', desc: 'Job management, scheduling, CRM integrations, internal tools.' },
  { label: 'Marketplace Apps', desc: 'Two-sided platforms, booking systems, service marketplaces.' },
  { label: 'Client Portals', desc: 'Customer-facing apps for your existing business — status, docs, comms.' },
  { label: 'Social & Community', desc: 'Feed-based apps, profiles, messaging, user-generated content.' },
  { label: 'SaaS Mobile', desc: 'Mobile companion apps for your existing web product.' },
  { label: 'Field Service Tools', desc: 'GPS, offline mode, photo capture, signature collection — for crews in the field.' },
]

const faqs = [
  { q: 'React Native or SwiftUI — which should we use?', a: 'React Native wins when you need both iOS and Android fast. SwiftUI is better when iOS performance, native integrations, or Apple ecosystem depth matter more than cross-platform coverage. We scope this on the discovery call.' },
  { q: 'How long does an app take?', a: 'An MVP with core functionality runs 6–10 weeks. More complex apps with custom backends, complex UI, or real-time features can run 3–5 months. We define "done" in writing before we start.' },
  { q: 'Can you work with an existing backend?', a: 'Yes. If you have an API, we write to it. If you have a Laravel or Node backend, we integrate cleanly. We\'ve done both new and existing-backend projects.' },
  { q: 'Do you handle App Store submissions?', a: 'Yes, fully. App Store Connect setup, provisioning profiles, screenshots, review submissions — the whole process. We\'ve shipped apps before and know the common rejection reasons to avoid.' },
  { q: 'What happens if Apple rejects the app?', a: 'We fix it. App Store rejections are part of our process, not an extra billing event. We handle revisions until it\'s approved.' },
]

export default function MobileAppsPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(244,98,42,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(244,98,42,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', left: '-5%', top: '20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>→</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mobile Apps</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="service-header-grid">
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>02 — Service</p>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 32 }}>
                Mobile<br /><span style={{ color: 'var(--orange)' }}>Apps</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                iOS and Android apps built with SwiftUI and React Native. From MVP to App Store — real native quality, shipped fast.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                  Start a Project →
                </Link>
                <Link href="/pricing" style={{ border: '1px solid rgba(244,98,42,0.3)', color: 'var(--orange)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Phone mockup visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 220 }}>
                {/* Phone frame */}
                <div style={{ background: 'var(--navy-mid)', border: '2px solid rgba(244,98,42,0.2)', borderRadius: 36, padding: '16px 10px', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                  {/* Notch */}
                  <div style={{ width: 80, height: 24, background: 'var(--navy)', borderRadius: 12, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                  </div>
                  {/* Screen content */}
                  <div style={{ background: 'var(--navy)', borderRadius: 20, padding: 16, minHeight: 320 }}>
                    <div style={{ height: 6, background: 'rgba(244,98,42,0.4)', borderRadius: 3, width: '50%', marginBottom: 8 }} />
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 3, width: '80%', marginBottom: 16 }} />
                    {[1,2,3].map(i => (
                      <div key={i} style={{ background: 'var(--navy-mid)', borderRadius: 10, padding: '10px 12px', marginBottom: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: i % 2 === 0 ? 'rgba(244,98,42,0.15)' : 'rgba(0,212,200,0.1)', flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 2, width: '70%', marginBottom: 4 }} />
                          <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, width: '50%' }} />
                        </div>
                      </div>
                    ))}
                    <div style={{ height: 36, background: 'rgba(244,98,42,0.15)', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ height: 4, background: 'rgba(244,98,42,0.5)', borderRadius: 2, width: '40%' }} />
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div style={{ width: 60, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '12px auto 0' }} />
                </div>
                {/* Floating badge */}
                <div style={{ position: 'absolute', top: -16, right: -32, background: 'var(--navy-mid)', border: '1px solid rgba(0,212,200,0.2)', borderRadius: 10, padding: '10px 14px', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>App Store</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--off-white)', lineHeight: 1 }}>4.9 ★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What You Get</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 64 }}>
              Apps that feel<br /><span style={{ color: 'var(--orange)' }}>native. Because they are.</span>
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

      {/* ── App Types + Stack ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="two-col-grid">
          <div>
            <ScrollReveal>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>App Types</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>
                What we<br /><span style={{ color: 'var(--orange)' }}>actually build</span>
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {appTypes.map((p, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'start', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color: 'var(--orange)', fontFamily: 'Space Mono, monospace', fontSize: 11, marginTop: 2, flexShrink: 0 }}>→</span>
                    <div>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 4, color: 'var(--off-white)' }}>{p.label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal delay={100}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>Tech Stack</p>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {techStack.map((s, i) => (
                <div key={i}>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: i % 2 === 0 ? 'var(--orange)' : 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>{s.cat}</p>
                  {s.items.map(item => (
                    <p key={item} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--text-muted)', marginBottom: 5 }}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 48 }}>
              Common<br /><span style={{ color: 'var(--orange)' }}>questions</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--navy)', padding: '28px 32px', borderLeft: '3px solid rgba(244,98,42,0.25)' }}>
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
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(244,98,42,0.012) 20px, rgba(244,98,42,0.012) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, marginBottom: 24 }}>
              Your app idea<br /><span style={{ color: 'var(--orange)' }}>deserves real code.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 400, margin: '0 auto 40px' }}>
              30-minute discovery call. We scope the MVP, price it flat-rate, and ship it.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                Start a Project →
              </Link>
              <Link href="/works" style={{ border: '1px solid rgba(244,98,42,0.3)', color: 'var(--orange)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                See Our Apps
              </Link>
            </div>
          </ScrollReveal>
        </div>
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
