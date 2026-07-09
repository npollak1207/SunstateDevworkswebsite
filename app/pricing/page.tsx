import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { SectionLabel, CTASection } from '@/components/editorial'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, flat-rate pricing. Hand-coded 5-page builds from $2,000, clear add-ons, and enterprise hosting plans. No hidden fees, no hourly surprises.',
  alternates: { canonical: 'https://sunstatedevworks.com/pricing' },
  openGraph: {
    url: 'https://sunstatedevworks.com/pricing',
    title: 'Pricing | Sunstate DevWorks',
    description: 'Transparent, flat-rate pricing. Hand-coded builds from $2,000, clear add-ons, and enterprise hosting plans. No hidden fees.',
  },
}

const buildFeatures = [
  { label: '100% hand-coded', desc: 'Zero WordPress bloat. Unhackable and instant load times.' },
  { label: 'Launch-day checklist', desc: 'We handle DNS, SSL, domain connection and testing.' },
  { label: 'Fully responsive', desc: 'Pixel-perfect on mobile, tablet and desktop.' },
  { label: 'Professional stock imagery', desc: 'High-end royalty-free photography sourcing included.' },
  { label: 'Functional contact form', desc: 'Spam-protected and delivered straight to your inbox.' },
  { label: 'Google Business setup', desc: 'Indexing, sitemap submission and map listing verification.' },
]

const addons = [
  { label: 'CMS Integration', desc: 'Admin panel to edit text', price: '+$800' },
  { label: 'E-Commerce', desc: 'Stripe payments and cart', price: '+$1,500' },
  { label: 'SEO Copywriting', desc: '5 pages of text', price: '+$500' },
  { label: 'Brand Identity', desc: 'Logo, colors and type', price: '+$400' },
  { label: 'Booking System', desc: 'Calendly / appointment scheduling', price: '+$400' },
  { label: 'Analytics Setup', desc: 'GA4 and Search Console', price: '+$300' },
  { label: 'Blog Setup', desc: 'CMS for news and articles', price: '+$600' },
  { label: 'User Portals', desc: 'Member login areas', price: '+$1,000' },
  { label: 'AI Chatbot', desc: '24/7 support agent', price: '+$600', hot: true },
  { label: 'CRM Sync', desc: 'Connect forms for easy management', price: '+$600' },
  { label: 'Logo Animation', desc: 'Premium motion graphics', price: '+$400' },
  { label: 'Email Templates', desc: 'Branded and professional', price: '+$300' },
  { label: 'Additional Pages', desc: 'Expand site content', price: '+$200/ea' },
]

const essentials = [
  'Enterprise NVMe hosting, tuned for high-speed performance',
  'Technical SEO setup with schema markup and sitemaps',
  'Hack-fix guarantee: if it breaks, we fix it free',
  'Global CDN and DDoS protection, enterprise-grade security',
  'Daily off-site backups stored securely for instant recovery',
  'Speed optimization with advanced server-side caching',
  'WAF firewall with malware scanning and removal',
]

const growthExtras = [
  { label: '1 hour dedicated dev time', badge: '$150 value, free', desc: 'Custom features, fixes, or builds.' },
  { label: 'Premium plugin licenses', badge: '$200/yr value, free', desc: 'We cover Pro license costs.' },
  { label: 'Unlimited small content edits', badge: null, desc: 'Text changes and image swaps are always free.' },
  { label: 'Monthly growth & SEO report', badge: null, desc: 'Detailed analytics, keyword tracking and strategy.' },
  { label: 'VIP "red phone" support', badge: null, desc: 'Skip the ticket queue. Text us directly.' },
  { label: 'Staging environment', badge: null, desc: 'A safe testing ground for all updates.' },
]

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 190px) clamp(20px, 5vw, 44px) clamp(48px, 7vh, 72px)', textAlign: 'center' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 70%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.12) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              Transparent pricing
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 0.94, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 24 }}>
              No surprises.<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>No hidden fees.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
              Straight pricing on everything we do. You know exactly what you get before you sign anything.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Build */}
      <section style={{ padding: 'clamp(40px, 6vh, 72px) clamp(20px, 5vw, 44px) clamp(72px, 10vh, 120px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">Custom web development</SectionLabel></Reveal>

          <Reveal delay={0.05}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: 'clamp(28px, 4vw, 48px)', marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--accent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '5px 12px', borderRadius: 2, background: 'var(--accent-soft)', color: 'var(--accent-deep)', border: '1px solid var(--accent-line)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>1 of 1 · No templates</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 40px)', letterSpacing: '-0.025em', color: 'var(--ink)', marginTop: 18, marginBottom: 8 }}>5-Page Hand-Coded Build</h2>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 15 }}>A complete, high-performance website tailored to your brand.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="eyebrow" style={{ marginBottom: 4 }}>One-time fee</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 72px)', lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.03em' }}>$2,000</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
                {buildFeatures.map((f) => (
                  <div key={f.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--ink)', marginBottom: 2 }}>{f.label}</p>
                      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Add-ons & upgrades</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
              {addons.map((a) => (
                <div key={a.label} style={{ padding: '20px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: a.hot ? 'var(--accent-soft)' : 'transparent' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, marginBottom: 4, color: a.hot ? 'var(--accent-deep)' : 'var(--ink)' }}>{a.hot ? '✦ ' : ''}{a.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 12.5, lineHeight: 1.45, marginBottom: 12 }}>{a.desc}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 14, color: 'var(--accent-deep)' }}>{a.price}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hosting */}
      <section style={{ padding: 'clamp(72px, 10vh, 120px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">Premium hosting & care</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', maxWidth: 620 }}>
                Secure your <span className="serif-em">investment.</span>
              </h2>
              <div style={{ display: 'flex', gap: 32 }}>
                {[['99.9%', 'Uptime'], ['24/7', 'Monitoring'], ['<1hr', 'Response']].map(([v, l]) => (
                  <div key={l}>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--ink)', lineHeight: 1 }}>{v}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 5 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 24 }}>
            {/* Essentials */}
            <Reveal delay={0.05}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: 'clamp(28px, 3vw, 40px)', height: '100%' }}>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Foundation & security</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 8 }}>The Essentials</h3>
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Starting at</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.03em' }}>$250<span style={{ fontSize: 18, color: 'var(--muted)', fontWeight: 400 }}>/mo</span></p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {essentials.map((e) => (
                    <div key={e} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.45 }}>{e}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 32 }}>Get Started</Link>
              </div>
            </Reveal>

            {/* Growth Partner */}
            <Reveal delay={0.12}>
              <div style={{ background: 'var(--card)', border: '2px solid var(--accent)', borderRadius: 6, padding: 'clamp(28px, 3vw, 40px)', position: 'relative', height: '100%' }}>
                <div style={{ position: 'absolute', top: 18, right: 18, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, padding: '4px 11px', borderRadius: 2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Best value</div>
                <p className="eyebrow" style={{ marginBottom: 8, color: 'var(--accent-deep)' }}>Updates, SEO & support</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 8 }}>Growth Partner</h3>
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-deep)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Limited availability</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 60, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.03em' }}>$450<span style={{ fontSize: 18, color: 'var(--muted)', fontWeight: 400 }}>/mo</span></p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>Total value: $850+/mo</p>
                </div>
                <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 3, padding: '10px 14px', marginBottom: 22 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--accent-deep)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Everything in Essentials, plus</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                  {growthExtras.map((e) => (
                    <div key={e.label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: 13, marginTop: 1 }}>★</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--ink)' }}>{e.label}</p>
                          {e.badge && <span style={{ background: 'var(--accent-soft)', color: 'var(--accent-deep)', fontFamily: 'var(--font-mono)', fontSize: 9, padding: '2px 8px', borderRadius: 2, letterSpacing: '0.03em' }}>{e.badge}</span>}
                        </div>
                        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 12.5, lineHeight: 1.45 }}>{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', marginTop: 32 }}>Get Started</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Questions about pricing?"
        title={<>Not sure which plan?<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>Let&apos;s talk it through.</span></>}
        blurb="Tell us about the project and we will recommend the right build and plan, with a flat price up front."
      />
    </>
  )
}
