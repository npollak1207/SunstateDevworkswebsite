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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(13, 27, 42, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,200,0.1)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Sunstate Devworks" width={44} height={44} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--off-white)', letterSpacing: '0.02em' }}>
            Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {links.slice(0, -1).map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                color: pathname === l.href ? 'var(--cyan)' : 'var(--text-muted)',
                transition: 'color 0.2s',
                letterSpacing: '0.02em',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: 'var(--orange)',
              color: 'white',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              padding: '10px 22px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
          >
            Let&apos;s Build
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--off-white)',
            padding: 8,
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{
          background: 'var(--navy-mid)',
          borderTop: '1px solid rgba(0,212,200,0.1)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'Syne, sans-serif',
                fontSize: 18,
                fontWeight: 600,
                color: pathname === l.href ? 'var(--cyan)' : 'var(--off-white)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
