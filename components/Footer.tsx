import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy-mid)',
      borderTop: '1px solid rgba(0,212,200,0.1)',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Image src="/logo.png" alt="Sunstate Devworks" width={40} height={40} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--off-white)' }}>
                Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
              Custom digital products built from scratch. Gilbert, Arizona.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Navigate</p>
            {[['/', 'Home'], ['/works', 'Works'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14, marginBottom: 8, transition: 'color 0.2s' }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Services</p>
            {['Web Development', 'Mobile Apps', 'Branding & Identity', 'AI & Automation', 'Hosting & Maintenance'].map(s => (
              <p key={s} style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 8 }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</p>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 8 }}>Gilbert, Arizona</p>
            <Link href="/contact" style={{
              display: 'inline-block',
              marginTop: 16,
              background: 'var(--orange)',
              color: 'white',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 12,
              padding: '10px 20px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Start a Project
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 12, fontFamily: 'Space Mono, monospace' }}>
            © {new Date().getFullYear()} Sunstate Devworks. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 12 }}>
            Built with <span style={{ color: 'var(--orange)' }}>♥</span> in Arizona
          </p>
        </div>
      </div>
    </footer>
  )
}
