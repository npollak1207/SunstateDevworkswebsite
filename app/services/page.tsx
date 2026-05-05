'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { WebDevVisual, MobileVisual, BrandingVisual, AIVisual } from '@/components/ServiceVisuals'


const services = [
  {
    num: '01',
    title: 'Web Development',
    href: '/services/web-development',
    accent: 'var(--cyan)',
    tag: 'Websites · Web Apps · E-Commerce',
    desc: 'Hand-coded, 100% custom websites and web applications. Zero WordPress, zero templates, zero bloat. Built to rank, built to last, built to perform.',
    bullets: [
      'Next.js, React, TypeScript — real stack',
      'Lighthouse 100 target, every project',
      'SEO architecture from line one',
      'You own 100% of the code on delivery',
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    Visual: WebDevVisual,
  },
  {
    num: '02',
    title: 'Mobile Apps',
    href: '/services/mobile-apps',
    accent: 'var(--orange)',
    tag: 'iOS · Android · React Native · SwiftUI',
    desc: 'iOS and Android apps built with SwiftUI and React Native. From MVP to App Store submission — real native feel, no web-app-in-a-shell shortcuts.',
    bullets: [
      'SwiftUI for iOS, React Native for cross-platform',
      'Biometric auth, push notifications, offline mode',
      'Full App Store submission handled',
      'Supabase or Laravel backend included',
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    Visual: MobileVisual,
  },
  {
    num: '03',
    title: 'Branding & Identity',
    href: '/services/branding',
    accent: 'var(--cyan)',
    tag: 'Logo · Color · Typography · Brand Guide',
    desc: 'Identity that holds up everywhere — digital, print, social. Built on strategy before aesthetics. Logo to brand guidelines, fully delivered.',
    bullets: [
      'Logo + all marks, every format',
      'Complete color system (HEX, CMYK, RGB)',
      'Typography pairing + usage rules',
      'Brand guidelines PDF + all source files',
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    Visual: BrandingVisual,
  },
  {
    num: '04',
    title: 'AI & Automation',
    href: '/services/ai-automation',
    accent: 'var(--orange)',
    tag: 'Chatbots · Workflows · API Integrations',
    desc: 'Custom AI integrations and workflow automation. Your team stays the same size — your output multiplies. Built for businesses that run on repetition.',
    bullets: [
      'Custom AI chatbots trained on your data',
      'Workflow automation via n8n & custom pipelines',
      'Claude API, OpenAI, Gemini integrations',
      'Document intelligence & internal knowledge bots',
    ],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    Visual: AIVisual,
  },
]

const whyUs = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, label: 'One Studio, Four Capabilities', desc: 'No vendor juggling. Web, mobile, brand, and AI — all from the same team.', c: 'var(--cyan)' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: 'You Own Everything', desc: '100% of code, files, and domains handed to you on delivery. No lock-in.', c: 'var(--orange)' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, label: 'Flat-Rate Pricing', desc: 'Written scope, written price, no hourly surprises. You approve before we start.', c: 'var(--cyan)' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Gilbert, Arizona', desc: 'Local team. Real humans. No call centers. You can text us directly.', c: 'var(--orange)' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', left: '-10%', top: '20%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.05) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', right: '-5%', bottom: '0%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>What We Do</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="header-grid">
            <div>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: 32 }}>
                Full-stack<br /><span style={{ color: 'var(--cyan)' }}>capabilities.</span><br />
                <span style={{ WebkitTextStroke: '2px var(--orange)', color: 'transparent', fontSize: 'clamp(40px, 5.5vw, 80px)' }}>Zero dependencies.</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480 }}>
                We handle everything in-house — web, mobile, brand, and AI. One team, one relationship, complete accountability from start to forever.
              </p>
            </div>

            {/* Quick-links index */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {services.map((s, i) => (
                <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
                  <div className="card-lift" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.04)', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.accent, minWidth: 24 }}>{s.num}</span>
                      <div>
                        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--off-white)', marginBottom: 2 }}>{s.title}</p>
                        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{s.tag}</p>
                      </div>
                    </div>
                    <span style={{ color: s.accent, fontSize: 18, flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section style={{ padding: '40px 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.04)', borderLeft: `4px solid ${s.accent}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 0, alignItems: 'stretch' }} className="service-card-grid">

                  {/* Content */}
                  <div style={{ padding: '52px 56px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                      <div style={{ color: s.accent }}>{s.icon}</div>
                      <div>
                        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{s.num} — Service</p>
                        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--off-white)' }}>{s.title}</h2>
                      </div>
                    </div>

                    <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: 16 }}>{s.tag}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>{s.desc}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 36 }} className="bullets-grid">
                      {s.bullets.map((b, j) => (
                        <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.accent} strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--off-white)', lineHeight: 1.5 }}>{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={s.href} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: s.accent === 'var(--cyan)' ? 'transparent' : 'var(--orange)',
                      color: s.accent === 'var(--cyan)' ? 'var(--cyan)' : 'white',
                      border: s.accent === 'var(--cyan)' ? '1px solid rgba(0,212,200,0.3)' : 'none',
                      fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13,
                      padding: '13px 28px', borderRadius: 8, textDecoration: 'none',
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                    }} className={s.accent === 'var(--orange)' ? 'glow-pulse' : ''}>
                      Explore {s.title} <span>→</span>
                    </Link>
                  </div>

                  {/* Animated visual panel */}
                  <div style={{ background: 'var(--navy)', borderLeft: '1px solid rgba(255,255,255,0.04)', padding: '48px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <span style={{ position: 'absolute', bottom: -12, right: -4, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 120, color: s.accent === 'var(--cyan)' ? 'rgba(0,212,200,0.04)' : 'rgba(244,98,42,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{s.num}</span>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Live preview</p>
                      <s.Visual />
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Why One Studio ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Why One Studio</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Most studios make you hire<br /><span style={{ color: 'var(--cyan)' }}>three vendors for this.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="why-grid">
            {whyUs.map((w, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="card-lift" style={{ background: 'var(--navy)', padding: '32px 28px', borderTop: `3px solid ${w.c}`, height: '100%' }}>
                  <div style={{ color: w.c, marginBottom: 16 }}>{w.icon}</div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, marginBottom: 8, color: 'var(--off-white)' }}>{w.label}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Every Project</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Same process.<br /><span style={{ color: 'var(--orange)' }}>Every time.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="process-grid">
            {[
              { num: '01', title: 'Discovery Call', desc: '30 minutes. We learn your business, goals, and what winning looks like for you.', c: 'var(--cyan)' },
              { num: '02', title: 'Proposal & Scope', desc: 'Written scope, timeline, flat-rate price. You approve before we touch a single file.', c: 'var(--orange)' },
              { num: '03', title: 'Build & Update', desc: 'Sprint-based delivery with weekly progress check-ins. In the loop without being in the weeds.', c: 'var(--cyan)' },
              { num: '04', title: 'Launch & Handoff', desc: 'DNS, SSL, go-live, keys handed to you. Or we keep maintaining it — your call.', c: 'var(--orange)' },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{ background: 'var(--navy-mid)', padding: '36px 28px', borderTop: `3px solid ${p.c}`, position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <span style={{ position: 'absolute', bottom: -8, right: 12, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 80, color: p.c === 'var(--cyan)' ? 'rgba(0,212,200,0.04)' : 'rgba(244,98,42,0.04)', lineHeight: 1, pointerEvents: 'none' }}>{p.num}</span>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', border: `2px solid ${p.c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: p.c }}>{p.num}</span>
                  </div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, marginBottom: 10, color: 'var(--off-white)' }}>{p.title}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.012) 20px, rgba(0,212,200,0.012) 40px)' }} />
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 28 }}>
              Not sure which<br /><span style={{ color: 'var(--orange)' }}>service you need?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.75 }}>
              That&apos;s what the discovery call is for. 30 minutes, no pressure — we figure it out together.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '18px 44px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }} className="glow-pulse">
                Schedule Discovery Call →
              </Link>
              <Link href="/pricing" style={{ border: '1px solid rgba(0,212,200,0.25)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '18px 44px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                See Pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <style>{`
        .header-grid { grid-template-columns: 1fr 1fr; }
        .service-card-grid { grid-template-columns: 1fr 380px; }
        .bullets-grid { grid-template-columns: 1fr 1fr; }
        .why-grid { grid-template-columns: repeat(4, 1fr); }
        .process-grid { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1100px) {
          .service-card-grid { grid-template-columns: 1fr !important; }
          .service-card-grid > div:last-child { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; }
        }
        @media (max-width: 900px) {
          .header-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .bullets-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}
