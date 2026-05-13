'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_TEL = '+14807939161'

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
      <Link href={href} className="nav-link" data-active={active} style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
        textDecoration: 'none',
        color: active ? 'var(--off-white)' : 'var(--text-muted)',
        padding: '8px 12px', borderRadius: 8,
        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
        position: 'relative',
        display: 'inline-block',
      }}>
        {label}
        <span className="nav-underline" data-active={active} />
      </Link>
  )
}

export default function Nav() {
  const [bgOpacity, setBgOpacity]       = useState(0)
  const [scrollPct, setScrollPct]       = useState(0)
  const [open, setOpen]                 = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname   = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setBgOpacity(Math.min(y / 80, 1))
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(docH > 0 ? Math.min((y / docH) * 100, 100) : 0)
    }
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('resize', fn)
    return () => {
      window.removeEventListener('scroll', fn)
      window.removeEventListener('resize', fn)
    }
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
  const scrolled = bgOpacity > 0.05

  return (
      <>
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'border-color 0.35s ease',
          background: `rgba(13,27,42,${0.92 * bgOpacity})`,
          backdropFilter: scrolled ? `blur(${20 * bgOpacity}px) saturate(1.4)` : 'none',
          WebkitBackdropFilter: scrolled ? `blur(${20 * bgOpacity}px) saturate(1.4)` : 'none',
          borderBottom: `1px solid rgba(0,212,200,${0.1 * bgOpacity})`,
        }}>
          <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

            {/* Wordmark */}
            <Link href="/" className="wordmark-link" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
              <span className="live-dot" aria-hidden="true" />
              <span className="wordmark-slash" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, fontWeight: 400, letterSpacing: '0.06em', userSelect: 'none', color: 'var(--cyan)' }}>//</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, letterSpacing: '-0.025em', lineHeight: 1 }}>
                <span className="wordmark-sunstate">Sunstate</span><span className="wordmark-devworks">Devworks</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="nav-desktop">
              <NavLink href="/" label="Home" active={isActive('/')} />

              {/* Services dropdown */}
              <div onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ position: 'relative' }}>
                <button className="nav-link" data-active={isSvc} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  background: isSvc ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  color: isSvc ? 'var(--off-white)' : 'var(--text-muted)',
                  padding: '8px 12px', borderRadius: 8,
                  position: 'relative',
                } as React.CSSProperties}>
                  Services
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                       style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <span className="nav-underline" data-active={isSvc} />
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

              {/* Phone — click-to-call */}
              <a href={`tel:${PHONE_TEL}`} className="nav-phone" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                marginLeft: 8, marginRight: 4,
                fontFamily: 'Space Mono, monospace', fontSize: 13, fontWeight: 400,
                color: 'var(--text-muted)', textDecoration: 'none',
                padding: '8px 10px', borderRadius: 8,
                transition: 'color 0.2s ease',
                letterSpacing: '0.02em',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>

              {/* CTA button */}
              <Link href="/contact" className="nav-cta" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--orange)', color: 'white',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14,
                padding: '11px 24px', borderRadius: 8,
                textDecoration: 'none',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                boxShadow: '0 0 0 rgba(244,98,42,0)',
                transition: 'box-shadow 0.3s ease, transform 0.2s ease',
              }}>
                Let&apos;s Build
                <svg className="nav-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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

          {/* Scroll progress bar */}
          <div aria-hidden="true" style={{
            position: 'absolute', left: 0, bottom: 0, height: 2, width: `${scrollPct}%`,
            background: 'linear-gradient(90deg, var(--cyan) 0%, var(--orange) 100%)',
            boxShadow: '0 0 8px rgba(0,212,200,0.45)',
            transition: 'width 0.08s linear',
            pointerEvents: 'none',
          }} />
        </header>

        {/* Mobile overlay */}
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }} />

        {/* Mobile drawer — slides from right */}
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
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
            <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
              <span className="wordmark-slash" style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, fontWeight: 400, letterSpacing: '0.06em', userSelect: 'none', color: 'var(--cyan)' }}>//</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, letterSpacing: '-0.025em', lineHeight: 1 }}>
                <span className="wordmark-sunstate">Sunstate</span><span className="wordmark-devworks">Devworks</span>
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
            <a href={`tel:${PHONE_TEL}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10, padding: '12px', borderRadius: 10, border: '1px solid rgba(0,212,200,0.2)', background: 'rgba(0,212,200,0.04)', color: 'var(--cyan)', fontFamily: 'Space Mono, monospace', fontSize: 13, textDecoration: 'none', letterSpacing: '0.04em' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
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
        @keyframes wordmarkFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slashPulse {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1; }
        }
        @keyframes liveDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,212,200,0.55), 0 0 8px rgba(0,212,200,0.55); }
          70%      { box-shadow: 0 0 0 8px rgba(0,212,200,0),    0 0 10px rgba(0,212,200,0.55); }
        }
        @keyframes navCtaGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(244,98,42,0); }
          50%      { box-shadow: 0 0 24px rgba(244,98,42,0.4); }
        }
        .wordmark-sunstate {
          color: #f0f4f8;
          text-shadow: 0 0 28px rgba(255,255,255,0.12);
        }
        .wordmark-devworks {
          background: linear-gradient(90deg, #00d4c8 0%, #7ef9f4 35%, #f4622a 65%, #00d4c8 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: wordmarkFlow 5s linear infinite;
          filter: drop-shadow(0 0 10px rgba(0,212,200,0.5));
        }
        .wordmark-slash {
          animation: slashPulse 3.2s ease-in-out infinite;
        }
        .wordmark-link {
          transition: transform 0.2s ease;
        }
        .wordmark-link:hover {
          transform: scale(1.03);
        }
        .wordmark-link:hover .wordmark-devworks {
          filter: drop-shadow(0 0 16px rgba(0,212,200,0.75));
        }

        /* Live dot */
        .live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--cyan);
          display: inline-block;
          animation: liveDotPulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* Magic underline + lift */
        .nav-link {
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .nav-link:hover {
          color: var(--off-white) !important;
          transform: translateY(-1px);
        }
        .nav-underline {
          position: absolute;
          bottom: 2px; left: 50%;
          width: 18px; height: 2px;
          background: var(--cyan); border-radius: 2px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .nav-underline[data-active="true"] { transform: translateX(-50%) scaleX(1); }
        .nav-link:hover .nav-underline { transform: translateX(-50%) scaleX(1); }

        /* Phone */
        .nav-phone:hover {
          color: var(--cyan) !important;
          background: rgba(0,212,200,0.06);
        }

        /* CTA */
        .nav-cta {
          animation: navCtaGlow 3.5s ease-in-out infinite;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(244,98,42,0.55) !important;
        }
        .nav-cta-arrow {
          transition: transform 0.2s ease;
        }
        .nav-cta:hover .nav-cta-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 980px) {
          .nav-phone { display: none !important; }
        }
        @media (min-width: 769px) { .nav-hamburger { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
      `}</style>
      </>
  )
}