'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const serviceLinks = [
  { href: '/services/web-development', label: 'Web Development', num: '01', desc: 'Custom sites & web apps', color: 'var(--cyan)' },
  { href: '/services/mobile-apps', label: 'Mobile Apps', num: '02', desc: 'iOS & Android native apps', color: 'var(--orange)' },
  { href: '/services/branding', label: 'Branding & Identity', num: '03', desc: 'Logo, color, type & brand guide', color: 'var(--cyan)' },
  { href: '/services/ai-automation', label: 'AI & Automation', num: '04', desc: 'Chatbots, workflows, integrations', color: 'var(--orange)' },
]

const topLinks = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
]

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/services/web-development', label: 'Web Dev', sub: true },
  { href: '/services/mobile-apps', label: 'Mobile Apps', sub: true },
  { href: '/services/branding', label: 'Branding', sub: true },
  { href: '/services/ai-automation', label: 'AI & Auto', sub: true },
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close dropdown on route change
  useEffect(() => { setDropdownOpen(false); setOpen(false) }, [pathname])

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120)
  }

  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(13,27,42,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,200,0.1)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/logo.png" alt="Sunstate Devworks" width={40} height={40} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--off-white)', letterSpacing: '0.02em' }}>
              Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hide-mobile">
            {topLinks.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                textDecoration: 'none',
                color: pathname === l.href ? 'var(--cyan)' : 'var(--text-muted)',
                transition: 'color 0.2s',
                position: 'relative',
              }}>
                {l.label}
                {pathname === l.href && (
                  <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 2, background: 'var(--cyan)', borderRadius: 2 }} />
                )}
              </Link>
            ))}

            {/* Services dropdown trigger */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            >
              <Link
                href="/services"
                style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  textDecoration: 'none',
                  color: isServicesActive ? 'var(--cyan)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center', gap: 5, position: 'relative',
                }}
              >
                Services
                <svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {isServicesActive && (
                  <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 2, background: 'var(--cyan)', borderRadius: 2 }} />
                )}
              </Link>

              {/* Dropdown panel */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                width: 380,
                background: 'var(--navy-mid)',
                border: '1px solid rgba(0,212,200,0.12)',
                borderRadius: 12,
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                opacity: dropdownOpen ? 1 : 0,
                pointerEvents: dropdownOpen ? 'auto' : 'none',
                transform: dropdownOpen
                    ? 'translateX(-50%) translateY(0)'
                    : 'translateX(-50%) translateY(-8px)',
                transition: 'opacity 0.18s ease, transform 0.18s ease',
              }}>
                {/* Top: all services link */}
                <Link href="/services" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isServicesActive && pathname === '/services' ? 'rgba(0,212,200,0.04)' : 'transparent' }}>
                    <div>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--off-white)', marginBottom: 2 }}>All Services</p>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Web · Mobile · Brand · AI</p>
                    </div>
                    <span style={{ color: 'var(--cyan)', fontSize: 16 }}>→</span>
                  </div>
                </Link>

                {/* Individual service links */}
                {serviceLinks.map((s, i) => {
                  const active = pathname === s.href
                  return (
                    <Link key={i} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                      <div style={{
                        padding: '14px 20px',
                        borderBottom: i < serviceLinks.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        display: 'flex', alignItems: 'center', gap: 14,
                        background: active ? 'rgba(255,255,255,0.03)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                        onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
                        onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                      >
                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.color, minWidth: 20 }}>{s.num}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: active ? s.color : 'var(--off-white)', marginBottom: 1 }}>{s.label}</p>
                          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.03em' }}>{s.desc}</p>
                        </div>
                        <span style={{ color: active ? s.color : 'rgba(255,255,255,0.15)', fontSize: 14 }}>→</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <Link href="/contact" style={{
              background: 'var(--orange)', color: 'white',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
              padding: '10px 22px', borderRadius: 6, textDecoration: 'none',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              boxShadow: '0 0 20px rgba(244,98,42,0.3)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}>
              Let&apos;s Build
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="show-mobile"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--off-white)', padding: 8 }}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' open' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <Image src="/logo.png" alt="Sunstate Devworks" width={36} height={36} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--off-white)' }}>
              Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
            </span>
          </Link>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 8 }} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
          {mobileLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: l.sub ? 'Space Mono, monospace' : 'Syne, sans-serif',
                fontWeight: l.sub ? 400 : 800,
                fontSize: l.sub ? 11 : 'clamp(24px, 6vw, 36px)',
                color: pathname === l.href
                  ? 'var(--cyan)'
                  : l.sub ? 'var(--text-muted)' : 'var(--off-white)',
                textDecoration: 'none',
                padding: l.sub ? '8px 0 8px 20px' : '10px 0',
                borderBottom: l.sub ? 'none' : '1px solid rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                letterSpacing: l.sub ? '0.08em' : '0',
                textTransform: l.sub ? 'uppercase' : 'none',
                opacity: 0,
                animation: open ? `fadeSlide 0.4s ease forwards ${i * 0.04 + 0.05}s` : 'none',
              }}
            >
              {l.label}
              {!l.sub && <span style={{ color: 'var(--orange)', fontSize: 20 }}>→</span>}
            </Link>
          ))}
        </div>

        <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{ display: 'block', textAlign: 'center', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            Let&apos;s Build →
          </Link>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 16, textAlign: 'center' }}>
            Gilbert, Arizona · Available Now
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (min-width: 769px) {
          .mobile-drawer { display: none !important; }
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
