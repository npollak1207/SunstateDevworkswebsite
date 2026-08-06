'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SunGlyph from '@/components/SunGlyph'

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_TEL = '+14807939161'

const serviceLinks = [
  { href: '/services/web-development', label: 'Web Development',     num: '01', desc: 'Sites, apps & portals' },
  { href: '/services/mobile-apps',     label: 'Mobile Apps',         num: '02', desc: 'iOS & Android, native' },
  { href: '/services/branding',        label: 'Branding & Identity', num: '03', desc: 'Logo, systems & guides' },
  { href: '/services/ai-automation',   label: 'AI & Automation',     num: '04', desc: 'Agents & integrations' },
]

const topLinks = [
  { href: '/works', label: 'Work' },
  { href: '/about', label: 'Studio' },
]

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/services/web-development', label: 'Web Development', sub: true },
  { href: '/services/mobile-apps', label: 'Mobile Apps', sub: true },
  { href: '/services/branding', label: 'Branding', sub: true },
  { href: '/services/ai-automation', label: 'AI & Automation', sub: true },
  { href: '/works', label: 'Work' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
]

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="nv-link" data-active={active} style={{
      fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.02em',
      textDecoration: 'none', color: active ? 'var(--ink)' : 'var(--muted)',
      padding: '8px 4px', position: 'relative', display: 'inline-block',
    }}>
      {label}
      <span className="nv-underline" data-active={active} />
    </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => {
      const yy = window.scrollY
      setScrolled(yy > 24)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(docH > 0 ? Math.min((yy / docH) * 100, 100) : 0)
    }
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('resize', fn)
    return () => { window.removeEventListener('scroll', fn); window.removeEventListener('resize', fn) }
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => { setDropdownOpen(false); setOpen(false) }, [pathname])

  const onEnter = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdownOpen(true) }
  const onLeave = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 150) }
  const isActive = (href: string) => pathname === href
  const isSvc = pathname.startsWith('/services')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(244,241,234,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        // Fill the notch / status-bar strip so the bar reads as flush with the
        // top of the screen; the inner row is pushed below it.
        paddingTop: 'env(safe-area-inset-top, 0px)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px, 4vw, 44px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>

          {/* Wordmark */}
          <Link href="/" className="wm-link" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', flexShrink: 0 }}>
            <span className="wm-glyph"><SunGlyph size={22} /></span>
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Sunstate Devworks</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 3 }}>Design & Engineering Studio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 26, alignItems: 'center' }} className="nv-desktop">
            <NavLink href="/" label="Home" active={isActive('/')} />

            {/* Services dropdown */}
            <div onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ position: 'relative' }}>
              <button className="nv-link" data-active={isSvc} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.02em',
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: isSvc ? 'var(--ink)' : 'var(--muted)', padding: '8px 4px', position: 'relative',
              }}>
                Services
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}><polyline points="6 9 12 15 18 9" /></svg>
                <span className="nv-underline" data-active={isSvc} />
              </button>

              <div style={{
                position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                width: 340, background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4,
                boxShadow: '0 24px 60px rgba(23,20,15,0.14)', overflow: 'hidden',
                opacity: dropdownOpen ? 1 : 0, pointerEvents: dropdownOpen ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}>
                <div style={{ padding: '8px' }}>
                  {serviceLinks.map((s) => {
                    const act = pathname === s.href
                    return (
                      <Link key={s.href} href={s.href} className="svc-row" style={{
                        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14,
                        padding: '13px 14px', borderRadius: 3, background: act ? 'var(--accent-soft)' : 'transparent',
                      }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.05em', paddingTop: 2 }}>{s.num}</span>
                        <span style={{ flex: 1, minWidth: 0 }}>
                          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--ink)' }}>{s.label}</span>
                          <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>{s.desc}</span>
                        </span>
                        <svg className="svc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--faint)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    )
                  })}
                  <Link href="/services" className="svc-row" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderTop: '1px solid var(--line)', marginTop: 4 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)' }}>All services</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            {topLinks.map(l => <NavLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} />)}

            <a href={`tel:${PHONE_TEL}`} className="nv-phone" style={{
              fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--muted)', textDecoration: 'none',
              letterSpacing: '0.02em', marginLeft: 4, transition: 'color 0.2s',
            }}>{PHONE_DISPLAY}</a>

            <Link href="/contact" className="btn btn-primary nv-cta" style={{ padding: '12px 22px' }}>
              Start a Project
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </nav>

          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)} className="nv-burger" aria-label="Toggle menu" style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: 'var(--ink)', borderRadius: 2, transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        <div aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: 0, height: 2, width: `${scrollPct}%`, background: 'var(--accent)', transition: 'width 0.08s linear', pointerEvents: 'none', opacity: scrolled ? 1 : 0 }} />
      </header>

      {/* Mobile overlay */}
      <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(23,20,15,0.35)', backdropFilter: 'blur(3px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.3s' }} />

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201, width: 'min(340px, 90vw)',
        background: 'var(--paper)', borderLeft: '1px solid var(--line)', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.34s cubic-bezier(0.22,1,0.36,1)',
        boxShadow: '-24px 0 60px rgba(23,20,15,0.16)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', borderBottom: '1px solid var(--line)' }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <SunGlyph size={20} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Sunstate Devworks</span>
          </Link>
          <button onClick={() => setOpen(false)} style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: 3, cursor: 'pointer', color: 'var(--ink)', padding: '7px 9px', display: 'flex' }} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 12px' }}>
          {mobileLinks.map((l, i) => {
            const act = pathname === l.href
            return (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: l.sub ? '9px 14px 9px 30px' : '13px 14px', borderRadius: 3, marginBottom: 1,
                fontFamily: l.sub ? 'var(--font-mono)' : 'var(--font-display)', fontWeight: l.sub ? 400 : 600,
                fontSize: l.sub ? 12 : 19, color: act ? 'var(--accent-deep)' : l.sub ? 'var(--muted)' : 'var(--ink)',
                textDecoration: 'none', letterSpacing: l.sub ? '0.04em' : '-0.01em',
                background: act ? 'var(--accent-soft)' : 'transparent',
                opacity: 0, animation: open ? `mobileIn 0.35s ease forwards ${i * 0.035 + 0.05}s` : 'none',
              }}>
                {l.label}
                {!l.sub && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={act ? 'var(--accent)' : 'var(--faint)'} strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
              </Link>
            )
          })}
        </div>

        <div style={{ padding: '16px 14px 26px', paddingBottom: 'calc(26px + env(safe-area-inset-bottom, 0px))', borderTop: '1px solid var(--line)' }}>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <a href={`tel:${PHONE_TEL}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.02em' }}>{PHONE_DISPLAY}</a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gilbert, AZ · Booking now</p>
          </div>
        </div>
      </div>

      <style>{`
        .wm-glyph { transition: transform 0.4s cubic-bezier(0.22,1,0.36,1); }
        .wm-link:hover .wm-glyph { transform: rotate(-8deg) scale(1.06); }
        .nv-link { transition: color 0.2s ease; }
        .nv-link:hover { color: var(--ink) !important; }
        .nv-underline { position: absolute; bottom: 0; left: 0; width: 100%; height: 1.5px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
        .nv-underline[data-active="true"] { transform: scaleX(1); }
        .nv-link:hover .nv-underline { transform: scaleX(1); }
        .nv-phone:hover { color: var(--ink) !important; }
        .svc-row { transition: background 0.18s; }
        .svc-row:hover { background: var(--paper-2) !important; }
        .svc-row .svc-arrow { transition: transform 0.25s, stroke 0.25s; }
        .svc-row:hover .svc-arrow { transform: translateX(3px); stroke: var(--accent); }
        @media (max-width: 1040px) { .nv-phone { display: none !important; } }
        @media (min-width: 921px) { .nv-burger { display: none !important; } }
        @media (max-width: 920px) { .nv-desktop { display: none !important; } .nv-burger { display: flex !important; } }
      `}</style>
    </>
  )
}
