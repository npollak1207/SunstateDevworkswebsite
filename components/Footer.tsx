import Link from 'next/link'
import SunGlyph from '@/components/SunGlyph'

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_TEL = '+14807939161'

const columns = [
  {
    title: 'Studio',
    links: [
      { href: '/works', label: 'Work' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/mobile-apps', label: 'Mobile Apps' },
      { href: '/services/branding', label: 'Branding & Identity' },
      { href: '/services/ai-automation', label: 'AI & Automation' },
    ],
  },
  {
    title: 'Service Areas',
    links: [
      { href: '/web-design-gilbert', label: 'Gilbert' },
      { href: '/web-design-scottsdale', label: 'Scottsdale' },
      { href: '/web-design-chandler', label: 'Chandler' },
      { href: '/web-design-phoenix', label: 'Phoenix' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', padding: 'clamp(64px, 9vh, 96px) clamp(20px, 5vw, 44px) 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 48, marginBottom: 'clamp(48px, 8vh, 80px)' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'auto', minWidth: 220 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 11, textDecoration: 'none', marginBottom: 20 }}>
              <SunGlyph size={26} />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Sunstate Devworks</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 3 }}>Design & Engineering Studio</span>
              </span>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 260, marginBottom: 22 }}>
              Custom digital products, engineered from scratch in Gilbert, Arizona. You own 100% of everything we build.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '13px 22px' }}>
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow" style={{ marginBottom: 18, color: 'var(--accent)' }}>{col.title}</p>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className="ft-link" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--muted)', textDecoration: 'none', marginBottom: 11, width: 'fit-content' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="eyebrow" style={{ marginBottom: 18, color: 'var(--accent)' }}>Get in touch</p>
            <a href={`tel:${PHONE_TEL}`} className="ft-link" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--ink)', textDecoration: 'none', marginBottom: 11 }}>{PHONE_DISPLAY}</a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--muted)', marginBottom: 11 }}>Gilbert, Arizona</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--faint)', display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} /> Booking now
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--faint)', letterSpacing: '0.02em' }}>
            © {new Date().getFullYear()} Sunstate Devworks. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Link href="/privacy" className="ft-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--faint)', textDecoration: 'none', letterSpacing: '0.02em' }}>Privacy</Link>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--faint)', letterSpacing: '0.02em' }}>Hand-coded in Arizona ☀</p>
          </div>
        </div>
      </div>

      <style>{`
        .ft-link { transition: color 0.2s; }
        .ft-link:hover { color: var(--accent-deep) !important; }
      `}</style>
    </footer>
  )
}
