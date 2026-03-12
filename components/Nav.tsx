'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

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
          <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hide-mobile">
            {links.slice(0, -1).map(l => (
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

      {/* Mobile full-screen drawer */}
      <div className={`mobile-drawer${open ? ' open' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Drawer header */}
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

        {/* Nav links */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px' }}>
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(32px, 8vw, 48px)',
              color: pathname === l.href ? 'var(--cyan)' : 'var(--off-white)',
              textDecoration: 'none',
              padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              opacity: 0,
              animation: open ? `fadeSlide 0.4s ease forwards ${i * 0.06 + 0.1}s` : 'none',
            }}>
              {l.label}
              <span style={{ color: 'var(--orange)', fontSize: 24 }}>→</span>
            </Link>
          ))}
        </div>

        {/* Bottom info */}
        <div style={{ padding: '24px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
