'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const serviceLinks = [
  { href: '/services/web-development', label: 'Web Development',    num: '01', desc: 'Sites, apps & portals',   icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', color: 'var(--cyan)' },
  { href: '/services/mobile-apps',     label: 'Mobile Apps',        num: '02', desc: 'iOS & Android native',    icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z', color: 'var(--orange)' },
  { href: '/services/branding',        label: 'Branding & Identity', num: '03', desc: 'Logo, color & guide',     icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', color: 'var(--cyan)' },
  { href: '/services/ai-automation',   label: 'AI & Automation',    num: '04', desc: 'Agents & integrations',   icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: 'var(--orange)' },
]

const topLinks = [
  { href: '/works',   label: 'Works' },
  { href: '/about',   label: 'About' },
]

const mobileLinks = [
  { href: '/',                         label: 'Home' },
  { href: '/services',                 label: 'Services' },
  { href: '/services/web-development', label: 'Web Development', sub: true },
  { href: '/services/mobile-apps',     label: 'Mobile Apps',     sub: true },
  { href: '/services/branding',        label: 'Branding',        sub: true },
  { href: '/services/ai-automation',   label: 'AI & Automation', sub: true },
  { href: '/works',    label: 'Works' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
      <Link href={href} style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
        textDecoration: 'none',
        color: active ? 'var(--off-white)' : 'var(--text-muted)',
        padding: '8px 12px', borderRadius: 8,
        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'color 0.2s, background 0.2s',
        position: 'relative',
        display: 'inline-block',
      }}>
        {label}
        {active && (
            <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 18, height: 2, background: 'var(--cyan)', borderRadius: 2 }} />
        )}
      </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled]         = useState(false)
  const [open, setOpen]                 = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname   = usePathname()
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

  useEffect(() => { setDropdownOpen(false); setOpen(false) }, [pathname])

  const onEnter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdownOpen(true) }
  const onLeave = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 150) }

  const isActive = (href: string) => pathname === href
  const isSvc    = pathname.startsWith('/services')

  return (
      <>
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.35s ease, border-color 0.35s ease',
          background: scrolled ? 'rgba(13,27,42,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(0,212,200,0.1)' : 'transparent'}`,
        }}>
          <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(0,212,200,0.1)', border: '1px solid rgba(0,212,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image src="/logo.png" alt="Sunstate Devworks" width={28} height={28} style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, color: 'var(--off-white)', letterSpacing: '-0.01em' }}>
              Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
            </span>
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="nav-desktop">
              <NavLink href="/" label="Home" active={isActive('/')} />

              {/* Services dropdown */}
              <div onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ position: 'relative' }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  background: isSvc ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  color: isSvc ? 'var(--off-white)' : 'var(--text-muted)',
                  padding: '8px 12px', borderRadius: 8,
                  transition: 'color 0.2s, background 0.2s',
                  position: 'relative',
                } as React.CSSProperties}>
                  Services
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                       style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  {isSvc && <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 18, height: 2, background: 'var(--cyan)', borderRadius: 2 }} />}
                </button>

                {/* Dropdown panel */}
                <div style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                  transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
                  width: 360,
                  background: 'rgba(13,27,42,0.97)',
                  border: '1px solid rgba(0,212,200,0.12)',
                  borderRadius: 14,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                  overflow: 'hidden',
                  opacity: dropdownOpen ? 1 : 0,
                  pointerEvents: dropdownOpen ? 'auto' : 'none',
                  backdropFilter: 'blur(24px)',
                  transition: 'opacity 0.18s ease, transform 0.18s ease',
                }}>
                  {/* Header row */}
                  <Link href="/services" style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ padding: '14px 18px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: 'var(--off-white)', marginBottom: 2 }}>All Services</p>
                        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Web · Mobile · Brand · AI</p>
                      </div>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(0,212,200,0.1)', border: '1px solid rgba(0,212,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </Link>

                  {/* Service rows */}
                  <div style={{ padding: '6px 8px' }}>
                    {serviceLinks.map((s) => {
                      const act = pathname === s.href
                      const cyanRgb = '0,212,200'
                      const orangeRgb = '244,98,42'
                      const rgb = s.color === 'var(--cyan)' ? cyanRgb : orangeRgb
                      return (
                          <Link key={s.href} href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                            <div
                                style={{ padding: '10px 10px', borderRadius: 9, marginBottom: 2, display: 'flex', alignItems: 'center', gap: 12, background: act ? 'rgba(255,255,255,0.05)' : 'transparent', transition: 'background 0.15s' }}
                                onMouseEnter={e => { if (!act) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)' }}
                                onMouseLeave={e => { if (!act) (e.currentTarget as HTMLElement).style.background = act ? 'rgba(255,255,255,0.05)' : 'transparent' }}
                            >
                              <div style={{ width: 34, height: 34, borderRadius: 8, background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8"><path d={s.icon}/></svg>
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: act ? s.color : 'var(--off-white)', marginBottom: 1, whiteSpace: 'nowrap' }}>{s.label}</p>
                                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{s.desc}</p>
                              </div>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={act ? s.color : 'rgba(255,255,255,0.2)'} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                          </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              {topLinks.map(l => <NavLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} />)}

              {/* CTA button */}
              <Link href="/contact" style={{
                marginLeft: 10,
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'var(--orange)', color: 'white',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13,
                padding: '9px 20px', borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                transition: 'opacity 0.2s',
              }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                Let&apos;s Build
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </nav>

            {/* Hamburger */}
            <button
                onClick={() => setOpen(o => !o)}
                className="nav-hamburger"
                aria-label="Toggle menu"
                style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            >
              <span style={{ display: 'block', width: 22, height: 2, background: open ? 'var(--cyan)' : 'var(--off-white)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--off-white)', borderRadius: 2, transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: open ? 'var(--cyan)' : 'var(--off-white)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </header>

        {/* Mobile overlay */}
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 98,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }} />

        {/* Mobile drawer — slides from right */}
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 99,
          width: 'min(320px, 88vw)',
          background: 'var(--navy)',
          borderLeft: '1px solid rgba(0,212,200,0.1)',
          display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
        }}>
          {/* Drawer header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
              <div style={{ width: 30, height: 30, borderRadius: 7, background: 'rgba(0,212,200,0.1)', border: '1px solid rgba(0,212,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image src="/logo.png" alt="Sunstate Devworks" width={24} height={24} style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: 'var(--off-white)' }}>
              Sunstate<span style={{ color: 'var(--cyan)' }}>Devworks</span>
            </span>
            </Link>
            <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, cursor: 'pointer', color: 'var(--text-muted)', padding: '6px 8px', display: 'flex', alignItems: 'center' }} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Drawer links */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px' }}>
            {mobileLinks.map((l, i) => {
              const act = pathname === l.href
              return (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: l.sub ? '8px 12px 8px 28px' : '11px 12px',
                    borderRadius: 9, marginBottom: 2,
                    fontFamily: l.sub ? 'Space Mono, monospace' : 'Syne, sans-serif',
                    fontWeight: l.sub ? 400 : 800,
                    fontSize: l.sub ? 11 : 17,
                    color: act ? 'var(--cyan)' : l.sub ? 'var(--text-muted)' : 'var(--off-white)',
                    textDecoration: 'none',
                    letterSpacing: l.sub ? '0.06em' : '0',
                    textTransform: l.sub ? 'uppercase' : 'none',
                    background: act ? 'rgba(0,212,200,0.06)' : 'transparent',
                    opacity: 0,
                    animation: open ? `mobileIn 0.35s ease forwards ${i * 0.035 + 0.05}s` : 'none',
                  }}>
                    {l.label}
                    {!l.sub && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={act ? 'var(--cyan)' : 'rgba(255,255,255,0.2)'} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    )}
                  </Link>
              )
            })}
          </div>

          {/* Drawer footer */}
          <div style={{ padding: '14px 12px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '14px', borderRadius: 10, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Let&apos;s Build
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)', display: 'inline-block' }} />
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Gilbert, AZ · Available Now</p>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes mobileIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (min-width: 769px) { .nav-hamburger { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
      `}</style>
      </>
  )
}
