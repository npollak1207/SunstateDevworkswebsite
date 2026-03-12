import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const essentials = [
  'Enterprise NVMe Hosting — optimized for high-speed performance',
  'Technical SEO Setup — schema markup & sitemaps',
  'Hack-Fix Guarantee — if it breaks, we fix it free',
  'Global CDN & DDoS Protection — enterprise-grade security',
  'Daily Off-Site Backups — stored securely for instant recovery',
  'Speed Optimization — advanced server-side caching',
  'WAF Firewall — malware scanning & removal',
]

const growthExtras = [
  { label: '1 Hour Dedicated Dev Time', badge: '$150 Value — Free', desc: 'Custom features, fixes, or builds.' },
  { label: 'Premium Plugin Licenses', badge: '$200/yr Value — Free', desc: 'We cover Pro license costs (Elementor, etc).' },
  { label: 'Unlimited Small Content Edits', badge: null, desc: 'Text changes & image swaps are always free.' },
  { label: 'Monthly Growth & SEO Report', badge: null, desc: 'Detailed analytics, keyword tracking & strategy.' },
  { label: 'VIP "Red Phone" Support', badge: null, desc: 'Skip the ticket queue. Text us directly.' },
  { label: 'Staging Environment', badge: null, desc: 'Safe testing ground for all updates.' },
]

const addons = [
  { label: 'CMS Integration', desc: 'Admin panel to edit text', price: '+$800' },
  { label: 'E-Commerce', desc: 'Stripe payments & cart', price: '+$1,500' },
  { label: 'SEO Copywriting', desc: '5 pages of text', price: '+$500' },
  { label: 'Brand Identity', desc: 'Logo, colors & type', price: '+$400' },
  { label: 'Booking System', desc: 'Calendly/Appt scheduling', price: '+$400' },
  { label: 'Analytics Setup', desc: 'GA4 & Search Console', price: '+$300' },
  { label: 'Blog Setup', desc: 'CMS for news & articles', price: '+$600' },
  { label: 'User Portals', desc: 'Member login areas', price: '+$1,000' },
  { label: '✨ AI Chatbot', desc: '24/7 Support Agent', price: '+$600', hot: true },
  { label: 'CRM Sync', desc: 'Connect forms for easy management', price: '+$600' },
  { label: 'Logo Animation', desc: 'Premium motion graphics', price: '+$400' },
  { label: 'Email Templates', desc: 'Branded & professional', price: '+$300' },
  { label: 'Additional Pages', desc: 'Expand site content', price: '+$200/ea' },
]

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Transparent Pricing</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 24 }}>
            No surprises.<br /><span style={{ color: 'var(--orange)' }}>No hidden fees.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Straight pricing on everything we do. You know what you get before you sign anything.
          </p>
        </div>
      </section>

      {/* Build Pricing */}
      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Custom Web Development</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              The Custom Foundation
            </h2>
          </div>

          {/* Main build card */}
          <div style={{
            background: 'var(--navy-mid)',
            border: '1px solid rgba(0,212,200,0.2)',
            borderRadius: 16,
            padding: '48px',
            marginBottom: 40,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--cyan), var(--orange))' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
              <div>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, padding: '4px 12px', borderRadius: 999, background: 'rgba(244,98,42,0.12)', color: 'var(--orange)', border: '1px solid rgba(244,98,42,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>1 of 1 // No Templates</span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 36, marginTop: 16, marginBottom: 8 }}>5-Page Hand-Coded Build</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>A complete, high-performance website tailored to your brand.</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>One-Time Fee</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 72, lineHeight: 1, color: 'var(--cyan)' }}>$2,000</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {[
                { icon: '✓', label: '100% Hand-Coded', desc: 'Zero WordPress bloat. Unhackable & instant load times.' },
                { icon: '✓', label: 'Launch Day Checklist', desc: 'We handle DNS, SSL, Domain Connection & Testing.' },
                { icon: '✓', label: 'Fully Responsive', desc: 'Pixel-perfect design on Mobile, Tablet & Desktop.' },
                { icon: '✓', label: 'Professional Stock Images', desc: 'High-end royalty-free photography sourcing included.' },
                { icon: '✓', label: 'Functional Contact Form', desc: 'Spam-protected. Delivered directly to your inbox.' },
                { icon: '✓', label: 'Google Business Setup', desc: 'Indexing, sitemap submission & map listing verification.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>Add-Ons & Upgrades</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 2 }}>
              {addons.map((a, i) => (
                <div key={i} className="card-lift" style={{
                  background: a.hot ? 'rgba(0,212,200,0.05)' : 'var(--navy-mid)',
                  border: a.hot ? '1px solid rgba(0,212,200,0.2)' : '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 8,
                  padding: '20px 20px',
                }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, marginBottom: 4, color: a.hot ? 'var(--cyan)' : 'var(--off-white)' }}>{a.label}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.4, marginBottom: 12 }}>{a.desc}</p>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: 14, color: 'var(--orange)' }}>{a.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section style={{ padding: '80px 24px 120px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Premium Hosting Solutions</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', marginBottom: 16 }}>Secure Your Investment</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>Enterprise-grade hosting, daily backups, and SEO maintenance from the developers who know your code best.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 32 }}>
              {[['99.9%', 'Uptime'], ['24/7', 'Monitoring'], ['<1hr', 'Response']].map(([v, l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, color: 'var(--cyan)' }}>{v}</p>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {/* Essentials */}
            <div className="card-lift" style={{ background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 40 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Foundation & Security</p>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>The Essentials</h3>
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starting at</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 64, lineHeight: 1, color: 'var(--off-white)' }}>$250<span style={{ fontSize: 18, color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span></p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {essentials.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--cyan)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.4 }}>{e}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 32, border: '1px solid rgba(0,212,200,0.3)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '14px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Get Started
              </Link>
            </div>

            {/* Growth Partner */}
            <div className="card-lift" style={{ background: 'var(--navy)', border: '2px solid var(--orange)', borderRadius: 16, padding: 40, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, padding: '4px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ⚡ Insane Value
              </div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Updates, SEO & Support</p>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Growth Partner</h3>
              <div style={{ marginBottom: 8 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Limited Availability</p>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 64, lineHeight: 1, color: 'var(--orange)' }}>$450<span style={{ fontSize: 18, color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span></p>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)' }}>Total Value: $850+/mo</p>
              </div>
              <div style={{ background: 'rgba(244,98,42,0.08)', border: '1px solid rgba(244,98,42,0.15)', borderRadius: 8, padding: '10px 16px', marginBottom: 24 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Includes Everything in Essentials +</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {growthExtras.map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>★</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13 }}>{e.label}</p>
                        {e.badge && <span style={{ background: 'rgba(0,212,200,0.1)', color: 'var(--cyan)', fontFamily: 'Space Mono, monospace', fontSize: 9, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.04em' }}>{e.badge}</span>}
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1.4 }}>{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', marginTop: 32, background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, padding: '16px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Questions?</p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1, marginBottom: 24 }}>
          Not sure which plan?<br /><span style={{ color: 'var(--orange)' }}>Let&apos;s talk it through.</span>
        </h2>
        <Link href="/contact" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Schedule a Free Call →
        </Link>
      </section>
    </>
  )
}
