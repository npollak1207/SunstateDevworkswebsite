'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setVisible(false)
    setDismissed(false)
    const fn = () => {
      const scrolled = window.scrollY > 600
      setVisible(scrolled && !dismissed)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [pathname, dismissed])

  if (pathname === '/contact') return null

  return (
    <div className={`sticky-cta${visible && !dismissed ? ' visible' : ''}`}>
      <div style={{
        background: 'var(--navy-mid)',
        borderTop: '1px solid rgba(0,212,200,0.15)',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
      }}>
        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--off-white)' }}>
          Ready to build something real?{' '}
          <span style={{ color: 'var(--cyan)' }}>We&apos;re available now.</span>
        </p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/contact" style={{
            background: 'var(--orange)', color: 'white',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13,
            padding: '10px 24px', borderRadius: 6, textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            boxShadow: '0 0 30px rgba(244,98,42,0.3)',
          }}>
            Start a Project →
          </Link>
          <button
            onClick={() => { setDismissed(true); setVisible(false) }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 6, lineHeight: 1 }}
            aria-label="Dismiss"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
