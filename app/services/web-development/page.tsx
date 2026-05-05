import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'


const features = [
  {
    title: 'Zero WordPress',
    desc: 'No plugins, no theme conflicts, no mystery updates that break your site at 2am. Every line of code is intentional and ours.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: 'var(--cyan)',
  },
  {
    title: 'Built to Rank',
    desc: 'Performance, Core Web Vitals, semantic HTML, structured data — SEO is baked in from line 1, not bolted on at the end.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: 'var(--orange)',
  },
  {
    title: 'You Own the Code',
    desc: 'On delivery, every file, every repo, every database is 100% yours. We don\'t hold code hostage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: 'var(--cyan)',
  },
  {
    title: 'Instant Load Times',
    desc: 'Static generation, edge caching, optimized assets. We target 100 on Lighthouse — and usually hit it.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: 'var(--orange)',
  },
  {
    title: 'Responsive by Default',
    desc: 'Four-breakpoint system, tested on real devices, iOS Safari fixes included. No surprise mobile layouts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'var(--cyan)',
  },
  {
    title: 'CMS When You Need It',
    desc: 'Headless CMS options (Sanity, Contentful, custom) for content you actually need to update yourself. Not bolted-on admin panels.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    color: 'var(--orange)',
  },
]

const techStack = [
  { cat: 'Framework', items: ['Next.js 15', 'React 19', 'TypeScript'] },
  { cat: 'Styling', items: ['CSS Modules', 'Tailwind CSS', 'Framer Motion'] },
  { cat: 'Backend', items: ['Node.js', 'Laravel', 'REST & GraphQL'] },
  { cat: 'Data', items: ['Supabase', 'PostgreSQL', 'Prisma ORM'] },
  { cat: 'Infra', items: ['Cloudflare', 'Vercel', 'NVMe VPS'] },
  { cat: 'CMS', items: ['Sanity', 'Contentful', 'Custom Admin'] },
]

const deliverables = [
  'Complete source code & Git repo',
  'Design system & component library',
  'Technical documentation',
  'DNS & SSL configuration',
  'Google Analytics + Search Console setup',
  'Performance audit report',
  'Sitemap & robots.txt',
  '30-day post-launch support',
]

const projectTypes = [
  { label: 'Marketing Sites', desc: 'For businesses that need to look elite and rank on Google.' },
  { label: 'Web Applications', desc: 'Custom SaaS, dashboards, portals — anything with real logic.' },
  { label: 'E-Commerce', desc: 'Headless commerce, custom storefronts, no Shopify tax.' },
  { label: 'Landing Pages', desc: 'High-conversion pages built for a specific goal.' },
  { label: 'Portals & Dashboards', desc: 'Internal tools, client portals, admin systems.' },
  { label: 'Site Rebuilds', desc: 'Escape the WordPress nightmare. We migrate cleanly.' },
]

const faqs = [
  { q: 'How long does a website take?', a: 'A standard marketing site runs 2–4 weeks. Complex web apps or large multi-page sites can run 6–12 weeks. We scope the timeline in writing before we start.' },
  { q: 'Do I need to provide designs?', a: 'No. We handle design. If you have brand assets, great — we use them. If you\'re starting from scratch, we build the brand and the site together.' },
  { q: 'What if I already have a designer?', a: 'We can work from Figma files or any design handoff. We\'ve done it both ways — either works.' },
  { q: 'Will I be able to update content myself?', a: 'Yes. If content updates are part of your workflow, we build a CMS into the project. If you don\'t need it, we skip it and keep things simple.' },
  { q: 'Do you do hosting?', a: 'Yes. We host what we build on our NVMe infrastructure, tuned for your stack. No shared hosting sluggishness. Optionally, you can self-host — we\'ll document everything.' },
]

export default function WebDevelopmentPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.05) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: 0, left: '30%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,212,200,0.06), transparent)', opacity: 0.6 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>→</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Web Development</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="service-header-grid">
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>01 — Service</p>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 32 }}>
                Web<br /><span style={{ color: 'var(--cyan)' }}>Development</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                Hand-coded, custom websites and web applications built from scratch. No templates. No page builders. Code that performs, ranks, and scales.
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

            {/* Stats column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { val: '100', label: 'Lighthouse score target', suffix: '' },
                { val: '<2s', label: 'Target first contentful paint', suffix: '' },
                { val: '100%', label: 'Hand-written code, zero templates', suffix: '' },
                { val: '99.9%', label: 'Uptime SLA on managed hosting', suffix: '' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.04)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', lineHeight: 1, minWidth: 80 }}>{s.val}</span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What You Get</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 64 }}>
              Built right.<br /><span style={{ color: 'var(--cyan)' }}>The first time.</span>
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

      {/* ── Project Types + Deliverables ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col-grid">
          <div>
            <ScrollReveal>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Project Types</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>
                What we<br /><span style={{ color: 'var(--orange)' }}>actually build</span>
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {projectTypes.map((p, i) => (
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
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Deliverables</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 40 }}>
                Everything<br /><span style={{ color: 'var(--cyan)' }}>handed over</span>
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {deliverables.map((d, i) => (
                <ScrollReveal key={i} delay={i * 40 + 100}>
                  <div style={{ background: 'var(--navy-mid)', padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'center', border: '1px solid rgba(0,212,200,0.06)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--off-white)' }}>{d}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>Tech Stack</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 32 }}>
            {techStack.map((s, i) => (
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

      {/* ── FAQ ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 56 }}>
              Common<br /><span style={{ color: 'var(--cyan)' }}>questions</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--navy-mid)', padding: '28px 32px', borderLeft: '3px solid rgba(0,212,200,0.2)' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--off-white)' }}>{f.q}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.012) 20px, rgba(0,212,200,0.012) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, marginBottom: 24 }}>
              Ready to build<br /><span style={{ color: 'var(--cyan)' }}>something real?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 40, maxWidth: 400, margin: '0 auto 40px' }}>
              Discovery call is 30 minutes and free. We figure out scope, timeline, and cost — then put it in writing.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                Start a Project →
              </Link>
              <Link href="/pricing" style={{ border: '1px solid rgba(0,212,200,0.3)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                See Pricing
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
