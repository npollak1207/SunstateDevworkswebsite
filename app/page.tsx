'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import SunHero from '@/components/SunHero'
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal'

/* ────────────────────────────── content ────────────────────────────── */

const stats = [
  { n: '50+', l: 'Products shipped' },
  { n: '4.9★', l: 'Client rating' },
  { n: '<1.2s', l: 'Avg load time' },
  { n: '100%', l: 'Code ownership' },
]

const clients = ['Liberty Military Housing', 'Easy Landscape Solutions', 'Cloak Wraps', 'Zona Pest Solutions', 'Peak Pest Control', 'Canyon Cleaning Solutions', 'The Mystical Universe', 'DWGS', 'Canyon Supply Co']

const capabilities = [
  { num: '01', title: 'Web Development', desc: 'Hand-coded sites and web apps on Next.js. No WordPress, no page builders. Just fast, custom, and entirely yours.', tags: ['Next.js', 'TypeScript', 'Node'], href: '/services/web-development' },
  { num: '02', title: 'Mobile Apps', desc: 'Native iOS and Android, from MVP to the App Store. Built with SwiftUI and React Native, shipped fast and shipped right.', tags: ['SwiftUI', 'React Native', 'Expo'], href: '/services/mobile-apps' },
  { num: '03', title: 'Branding & Identity', desc: 'Logos, color systems, typography and guidelines that make a small team look like the category leader.', tags: ['Figma', 'Motion', 'Systems'], href: '/services/branding' },
  { num: '04', title: 'AI & Automation', desc: 'Custom AI, chatbots and workflow automation that multiply your output without growing your headcount.', tags: ['Claude', 'OpenAI', 'n8n'], href: '/services/ai-automation' },
]

const work = [
  { num: '01', cat: 'AI Dashboard', title: 'Liberty Military Housing', stat: '−60% support tickets', desc: 'An AI construction-management platform running natural-language queries across thousands of housing units in real time.', tags: ['Next.js', 'Python', 'OpenAI'], href: '/works', kind: 'dashboard', external: false },
  { num: '02', cat: 'iOS App · Web Dashboard', title: 'ELS Platform', stat: '20 hrs saved / week', desc: 'A business-in-a-box for Easy Landscape Solutions. Scheduling, invoicing, CRM and live P&L in one native app.', tags: ['SwiftUI', 'Firebase', 'Stripe'], href: 'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624', kind: 'app', external: true },
  { num: '03', cat: 'Web · Branding', title: 'Cloak Wraps', stat: "Tempe's #1 wrap studio", desc: "A full rebrand and cinematic website for Tempe's premier vehicle-wrap and PPF studio.", tags: ['Next.js', 'Brand', 'Motion'], href: 'https://www.cloakwraps.com', kind: 'brand', external: true },
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'A 30-minute call to learn your business, your goals, and what winning actually looks like for you.' },
  { num: '02', title: 'Proposal & Scope', desc: 'A written scope, timeline, and flat-rate price. You approve everything before a single line is written.' },
  { num: '03', title: 'Design & Build', desc: 'We build in weekly sprints and share progress as we go, so you stay in the loop and never in the weeds.' },
  { num: '04', title: 'Launch & Handoff', desc: 'We handle DNS, SSL and go-live, then hand you the keys, or keep maintaining it. Entirely your call.' },
]

const pillars = [
  { k: 'You own everything', v: '100% of the code, design and data is yours on delivery. No proprietary platforms. No licensing. No lock-in, ever.' },
  { k: 'Hand-coded, never templated', v: 'Every project is written from scratch. That is why our sites load in under a second, rank, and never break on a plugin update.' },
  { k: 'Local & accountable', v: 'A Gilbert, Arizona studio. Real people, direct access, and one team that owns the entire outcome end to end.' },
]

const testimonials = [
  { body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything. We got back at least 20 hours a week and finally know where our money is going.', name: 'Alex M.', role: 'Owner, Easy Landscape Solutions' },
  { body: 'The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking across Scottsdale and Mesa in a few months.', name: 'Billy W.', role: 'Owner, Zona Pest Solutions' },
  { body: 'I wanted something that looked as premium as the work we do on cars. They nailed it. Clean, fast, and it gets compliments before customers even walk in the door.', name: 'Zach H.', role: 'Owner, Cloak Wraps' },
  { body: 'Our old site did nothing for us. Sunstate rebuilt it from scratch and now it actually looks like the professional operation we are. It loads instantly and customers have a much easier time reaching us.', name: 'Aspen C.', role: 'Owner, Peak Pest Control' },
  { body: 'They built sites for both of my businesses and nailed the look on each one. Clean, fast, and simple for customers to get in touch. Working with a local team that actually answers made the whole thing painless.', name: 'Cole T.', role: 'Owner, Canyon Cleaning & Canyon Supply Co' },
  { body: 'Exactly what I wanted, done right the first time. The site is fast, it is mine to keep, and it makes us look far bigger than we are. I could not recommend them more.', name: 'Matt A.', role: 'Owner, DWGS' },
  { body: 'They understood the vibe we were going for immediately and built something that truly feels like us. Beautiful, fast, and easy for our team to run. Our customers notice the difference the moment they land on it.', name: 'The Mystical Universe', role: 'Team' },
]

const cities = [
  { city: 'Gilbert', tag: 'Home Base', href: '/web-design-gilbert', home: true },
  { city: 'Phoenix', tag: 'Web Design', href: '/web-design-phoenix' },
  { city: 'Scottsdale', tag: 'Web Design', href: '/web-design-scottsdale' },
  { city: 'Chandler', tag: 'Web & Apps', href: '/web-design-chandler' },
  { city: 'Mesa', tag: 'Web Design', href: '/web-design-mesa' },
  { city: 'Tempe', tag: 'Web & Branding', href: '/web-design-tempe' },
  { city: 'Peoria', tag: 'Web Design', href: '/web-design-peoria' },
  { city: 'Glendale', tag: 'Web Design', href: '/web-design-glendale' },
  { city: 'Queen Creek', tag: 'Web Design', href: '/web-design-queen-creek' },
  { city: 'Surprise', tag: 'Web Design', href: '/web-design-surprise' },
  { city: 'Ahwatukee', tag: 'Web & Apps', href: '/web-design-ahwatukee' },
  { city: 'Paradise Valley', tag: 'Branding', href: '/web-design-paradise-valley' },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Most marketing sites ship in 3 to 5 weeks. Larger web apps or full redesigns typically run 6 to 10 weeks. You get a fixed timeline in the proposal, with no moving goalposts.' },
  { q: 'Do I own the code when the project is done?', a: '100%. Every line of code, every asset, every database. You get a full handoff, with no subscriptions, no licensing, and no lock-in of any kind.' },
  { q: 'Do you use WordPress or page builders?', a: 'Never. Everything we ship is hand-written in Next.js, SwiftUI, React Native or Laravel. That is why our sites load fast, rank well, and do not break when a plugin updates.' },
  { q: 'How does pricing work? Do you charge hourly?', a: 'Flat-rate only. You see the full number before we start, with no hourly billing, no scope-creep invoices, and no surprise charges. Marketing sites typically run $3k to $15k; apps start around $15k and scale with scope. Reach out and we will send exact numbers for your project.' },
  { q: 'Do you offer maintenance after launch?', a: 'Yes. Optional monthly care plans cover hosting, updates, uptime monitoring and priority support. Or we hand you the keys entirely. Your choice.' },
  { q: 'Are you local to Arizona?', a: 'We are based in Gilbert, AZ and serve the entire Phoenix metro and clients nationwide. Discovery and check-ins happen over video; local clients can meet in person.' },
]

/* ────────────────────────────── generated work visuals ────────────────────────────── */

function WorkVisual({ kind }: { kind: string }) {
  const shell: React.CSSProperties = { position: 'relative', aspectRatio: '16 / 11', background: 'var(--paper-2)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }

  if (kind === 'dashboard') {
    const bars = [46, 62, 40, 78, 55, 70, 88, 60]
    return (
      <div style={shell}>
        <div style={{ position: 'absolute', inset: 0, padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>AI Dashboard · Live</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--accent-deep)' }}>−60%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, flex: 1, marginBottom: 12 }}>
            {bars.map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'var(--accent)' : 'var(--paper-3)', borderRadius: '2px 2px 0 0' }} />)}
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {['Units', 'Open', 'Resolved'].map((l, i) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--line-strong)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'app') {
    return (
      <div style={shell}>
        <div style={{ position: 'absolute', inset: 0, padding: 20, display: 'flex', gap: 14 }}>
          <div style={{ width: '32%', background: 'var(--ink)', borderRadius: 12, padding: 10, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ height: 3, width: '50%', margin: '0 auto', borderRadius: 2, background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ background: 'var(--accent)', borderRadius: 6, padding: '10px 0', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#fff' }}>$24.5k</span>
            </div>
            <div style={{ height: 10, borderRadius: 3, background: 'rgba(255,255,255,0.10)' }} />
            <div style={{ height: 10, borderRadius: 3, background: 'rgba(255,255,255,0.10)' }} />
            <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,122,61,0.5)' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9, paddingTop: 4 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>ELS Business · iOS</span>
            {['Scheduling', 'Invoicing', 'P&L Tracking'].map((l) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ width: 20, height: 20, borderRadius: 5, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--ink-2)' }}>{l}</span>
              </div>
            ))}
            <span style={{ marginTop: 'auto', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'var(--accent-deep)' }}>20 hrs / week saved</span>
          </div>
        </div>
      </div>
    )
  }

  // brand
  return (
    <div style={shell}>
      <div style={{ position: 'absolute', inset: 0, padding: 22, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          {['#14110B', '#2A2620', 'var(--accent)', 'var(--paper-3)'].map((c, i) => <span key={i} style={{ width: 26, height: 26, borderRadius: 5, background: c, border: '1px solid var(--line)' }} />)}
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)', alignSelf: 'center' }}>Brand System</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--ink)', marginBottom: 14 }}>CLOAK</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
          <div style={{ background: 'var(--accent)', borderRadius: 4, padding: '8px 16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>Get Quote</span>
          </div>
          <div style={{ flex: 1, borderRadius: 4, border: '1px solid var(--line-2)' }} />
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────── shared bits ────────────────────────────── */

function SectionLabel({ index, children, center = false }: { index: string; children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, justifyContent: center ? 'center' : 'flex-start' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--accent)' }}>{index}</span>
      <span style={{ width: 28, height: 1, background: 'var(--line-2)' }} />
      <span className="eyebrow">{children}</span>
    </div>
  )
}

const Arrow = ({ s = 16 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)

/* Count-up numeral. Parses a leading symbol + number + trailing unit
   (e.g. "<1.2s", "4.9★", "50+") and animates the numeric part on mount. */
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const reduce = useReducedMotion()
  const m = value.match(/^(\D*)([\d.]+)(.*)$/)
  const [display, setDisplay] = useState(reduce || !m ? value : `${m[1]}0${m[3]}`)
  useEffect(() => {
    if (!m || reduce) { setDisplay(value); return }
    const prefix = m[1], target = parseFloat(m[2]), suffix = m[3]
    const decimals = m[2].includes('.') ? m[2].split('.')[1].length : 0
    let raf = 0, startT = 0
    const dur = 1200
    const to = setTimeout(() => {
      const tick = (t: number) => {
        if (!startT) startT = t
        const p = Math.min((t - startT) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay * 1000)
    return () => { clearTimeout(to); cancelAnimationFrame(raf) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>{display}</>
}

/* Magnetic wrapper — child drifts slightly toward the cursor. No-op under reduced motion. */
function Magnetic({ children, strength = 0.28 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const [t, setT] = useState({ x: 0, y: 0 })
  if (reduce) return <>{children}</>
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setT({ x: (e.clientX - (r.left + r.width / 2)) * strength, y: (e.clientY - (r.top + r.height / 2)) * strength })
  }
  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ display: 'inline-flex', transform: `translate(${t.x}px, ${t.y}px)`, transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {children}
    </span>
  )
}

/* Wraps a work item in the correct link (external vs internal). */
function WorkLink({ p, children }: { p: { href: string; external: boolean }; children: React.ReactNode }) {
  return p.external
    ? <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{children}</a>
    : <Link href={p.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{children}</Link>
}

/* Live Gilbert, AZ local time (MST, no DST) — a small "active studio" signal.
   Renders only after mount so server/client HTML never mismatch. */
function LocalClock() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Phoenix' }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30000)
    return () => clearInterval(id)
  }, [])
  if (!time) return null
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--faint)' }}>
      <span aria-hidden="true" style={{ width: 1, height: 11, background: 'var(--line-2)' }} />
      {time} MST
    </span>
  )
}

/* Signature horizon divider — echoes the SunHero horizon line + coordinate tag. */
function HorizonRule({ label = '33.35°N · 111.79°W' }: { label?: string }) {
  return (
    <div aria-hidden="true" style={{ padding: '0 clamp(20px, 5vw, 44px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', height: 52 }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--line-2) 14%, var(--line-2) 86%, transparent)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--paper)', padding: '0 18px' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--faint)' }}>{label}</span>
        </div>
      </div>
    </div>
  )
}

/* Testimonial carousel — native scroll-snap track with prev/next controls.
   Robust for any card count, touch/drag-friendly, keyboard-scrollable, reduced-motion aware. */
function tmInitials(name: string) {
  return name.split(' ').filter(w => !/^(the|and|&)$/i.test(w)).map(w => w[0]).slice(0, 2).join('')
}

function TestimonialCarousel({ items }: { items: { body: string; name: string; role: string }[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const sync = () => {
      setAtStart(el.scrollLeft <= 4)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    }
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => { el.removeEventListener('scroll', sync); window.removeEventListener('resize', sync) }
  }, [])

  const nudge = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-tm-card]') as HTMLElement | null
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={trackRef} className="tm-track" role="group" aria-label="Client testimonials" tabIndex={0}
        style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4, scrollbarWidth: 'none' }}>
        {items.map((t) => (
          <figure key={t.name} data-tm-card className="tm-card"
            style={{ flex: '0 0 auto', scrollSnapAlign: 'start', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, padding: '32px 30px 28px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'flex', gap: 3, marginBottom: 18 }}>
              {[...Array(5)].map((_, j) => <svg key={j} width="15" height="15" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
            </span>
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.9vw, 22px)', lineHeight: 1.5, color: 'var(--ink)', marginBottom: 24, flex: 1 }}>
              “{t.body}”
            </blockquote>
            <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid var(--line)' }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{tmInitials(t.name)}</span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{t.name}</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--faint)' }}>Swipe or drag to read more →</p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="button" aria-label="Previous testimonial" onClick={() => nudge(-1)} disabled={atStart} className="tm-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => nudge(1)} disabled={atEnd} className="tm-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────── page ────────────────────────────── */

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <>
      {/* ═══════════════════════ HERO (owns the first screen) ═══════════════════════ */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', paddingTop: 'clamp(112px, 17vh, 200px)', paddingBottom: 'clamp(40px, 8vh, 104px)' }}>
        <SunHero horizon="45%" />
        {/* grounding scrim so text stays crisp over the sun */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 32%, var(--paper) 66%)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px, 5vw, 44px)', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow hero-eyebrow" style={{ marginBottom: 'clamp(14px, 2.4vh, 26px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 10, maxWidth: 'calc(100vw - 32px)', background: 'rgba(244,241,234,0.68)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid var(--line)', borderRadius: 999, padding: '8px 16px' }}
          >
            <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            Gilbert, Arizona
            <span className="hide-mobile">· Design &amp; Engineering Studio</span>
            <LocalClock />
          </motion.p>

          <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(37px, 9.4vw, 120px)', lineHeight: 0.92, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 'clamp(20px, 3vh, 34px)' }}>
            <span className="hl-line">
              <motion.span style={{ display: 'block' }} initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                The studio behind
              </motion.span>
            </span>
            <span className="hl-line">
              <motion.span style={{ display: 'block' }} initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                brands that <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span className="serif-em" style={{ color: 'var(--accent)' }}>outshine.</span>
                  <motion.span aria-hidden="true" style={{ position: 'absolute', left: 0, right: '0.16em', bottom: '0.05em', height: 3, borderRadius: 2, background: 'var(--accent)', transformOrigin: 'left center' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }} />
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.9vw, 20px)', lineHeight: 1.55, color: 'var(--muted)', maxWidth: 640, margin: '0 auto clamp(24px, 3.4vh, 40px)' }}
          >
            We design and engineer custom websites, apps, and brands for companies that refuse to blend in. Every pixel hand-built. Every line of code <span style={{ color: 'var(--ink)', fontWeight: 500 }}>yours to keep.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="hero-cta" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(22px, 3.6vh, 44px)' }}
          >
            <Magnetic><Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link></Magnetic>
            <Link href="/works" className="btn btn-ghost">See Our Work</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.6 }}
            className="hero-stats" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px, 3vw, 34px)', flexWrap: 'wrap' }}
          >
            {stats.map((s, i) => (
              <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 34px)' }}>
                {i > 0 && <span style={{ width: 1, height: 26, background: 'var(--line-2)' }} className="hide-mobile" />}
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--ink)', lineHeight: 1 }}><CountUp value={s.n} delay={0.75 + i * 0.08} /></span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 5 }}>{s.l}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll cue — hides on short viewports (see media query below) */}
        <div className="hero-cue" aria-hidden="true" style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--faint)' }}>Scroll</span>
          <span style={{ position: 'relative', width: 1, height: 34, background: 'linear-gradient(var(--line-strong), transparent)', overflow: 'hidden' }}>
            <span className="hero-cue-dot" style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 11, background: 'var(--accent)' }} />
          </span>
        </div>
      </section>

      {/* ═══════════════════════ TRUST STRIP ═══════════════════════ */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--paper-2)', padding: 'clamp(20px, 3vh, 30px) 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 'clamp(12px, 1.8vh, 20px)' }}>
          <p className="eyebrow">Trusted to build for</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--faint)' }}>9 Arizona businesses · 50+ products shipped</p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
            {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 46, paddingRight: 46 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(18px, 2.4vw, 26px)', letterSpacing: '-0.02em', color: 'var(--ink-2)', whiteSpace: 'nowrap' }}>{c}</span>
                <span style={{ color: 'var(--accent)', fontSize: 12 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CAPABILITIES ═══════════════════════ */}
      <section style={{ padding: 'clamp(88px, 12vh, 150px) clamp(20px, 5vw, 44px)', background: 'linear-gradient(90deg, rgba(23,20,15,0.045) 1px, transparent 1px) 0 0 / 88px 100%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="01">Capabilities</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5.4vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                Everything under<br />one roof.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 360 }}>
                Design, build and ship in-house. No agencies stacked on freelancers stacked on plugins. One team, complete accountability.
              </p>
            </div>
          </Reveal>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {capabilities.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.06}>
                <Link href={c.href} className="idx-row" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 'clamp(18px, 4vw, 60px)', alignItems: 'center', padding: 'clamp(26px, 3.4vw, 40px) 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.05em' }}>{c.num}</span>
                  <span style={{ minWidth: 0 }}>
                    <span className="idx-title" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 3.6vw, 44px)', letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 8, transition: 'color 0.3s' }}>{c.title}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 560, marginBottom: 14 }}>{c.desc}</span>
                    <span style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                      {c.tags.map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--line-2)', borderRadius: 2, padding: '4px 9px' }}>{t}</span>)}
                    </span>
                  </span>
                  <span className="idx-arrow" style={{ color: 'var(--accent)' }}><Arrow s={26} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonRule label="33.35°N · 111.79°W" />

      {/* ═══════════════════════ SELECTED WORK ═══════════════════════ */}
      <section style={{ padding: 'clamp(88px, 12vh, 150px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="02">Selected Work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5.4vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                Proof, not<br /><span className="serif-em">promises.</span>
              </h2>
              <Link href="/works" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                View all work <Arrow s={14} />
              </Link>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: 24 }}>
            {/* Featured project — full-width, editorial split */}
            <Reveal>
              <WorkLink p={work[0]}>
                <div className="lift feat-card" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden' }}>
                  <div className="feat-visual"><WorkVisual kind={work[0].kind} /></div>
                  <div style={{ padding: 'clamp(28px, 3.4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>{work[0].cat}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent-line)', borderRadius: 2, padding: '4px 9px' }}>Featured</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 40px)', letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 14 }}>{work[0].title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--muted)', marginBottom: 22, maxWidth: 480 }}>{work[0].desc}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 2, padding: '7px 12px', marginBottom: 24 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-deep)', letterSpacing: '0.02em' }}>{work[0].stat}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 18, borderTop: '1px solid var(--line)' }}>
                      <span style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        {work[0].tags.map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)' }}>{t}</span>)}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                        {work[0].external ? 'Visit' : 'View'} <Arrow s={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </WorkLink>
            </Reveal>

            {/* Supporting projects */}
            <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 24 }}>
              {work.slice(1).map((p) => (
                <StaggerItem key={p.num} style={{ height: '100%' }}>
                  <WorkLink p={p}>
                    <div className="lift" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <WorkVisual kind={p.kind} />
                      <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>{p.cat}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)' }}>{p.num} / 03</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 25, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 10 }}>{p.title}</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', marginBottom: 18 }}>{p.desc}</p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 2, padding: '6px 11px', marginBottom: 20 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent-deep)', letterSpacing: '0.02em' }}>{p.stat}</span>
                        </div>
                        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                          <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {p.tags.map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)' }}>{t}</span>)}
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                            {p.external ? 'Visit' : 'View'} <Arrow s={13} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </WorkLink>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ APPROACH ═══════════════════════ */}
      <section style={{ padding: 'clamp(88px, 12vh, 150px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Reveal><SectionLabel index="03" center>How we work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5.4vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 'clamp(56px, 8vh, 92px)', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              A process built for momentum.
            </h2>
          </Reveal>
          <div className="timeline">
            <span className="timeline-rail" aria-hidden="true" />
            {processSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span style={{ position: 'relative', width: 40, height: 40, borderRadius: '50%', background: 'var(--paper)', border: '1px solid var(--line-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', marginBottom: 26 }}>{s.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 250 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DARK MANIFESTO (asymmetric editorial split) ═══════════════════════ */}
      <section className="on-dark" style={{ background: 'var(--ink-bg)', color: 'var(--on-dark)', padding: 'clamp(96px, 14vh, 170px) clamp(20px, 5vw, 44px)', position: 'relative', overflow: 'hidden' }}>
        {/* corner glow (top-right) + grid anchored to the same corner — deliberately off-centre so this
            dark section reads differently from the centred, bottom-lit closing CTA */}
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-12%', width: 720, height: 720, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.16) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.4, maskImage: 'radial-gradient(ellipse at 100% 0%, #000, transparent 68%)', WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, #000, transparent 68%)' }} />
        <div className="manifesto-grid" style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
          {/* left — the statement */}
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 26 }}>Why Sunstate</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(36px, 5.2vw, 76px)', lineHeight: 0.98, letterSpacing: '-0.035em', marginBottom: 24 }}>
                No templates.<br />No lock-in.<br /><span className="serif-em" style={{ color: 'var(--accent-2)' }}>No compromises.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.65, color: 'var(--on-dark-muted)', maxWidth: 440, marginBottom: 40 }}>
                Anyone can drag a template into place. We engineer software from the ground up, so it is faster, ranks higher, and belongs to you completely.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Magnetic><Link href="/contact" className="btn btn-accent">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link></Magnetic>
            </Reveal>
          </div>

          {/* right — numbered manifest list (borderless, hairline-separated) */}
          <div style={{ borderTop: '1px solid var(--ink-line)' }}>
            {pillars.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.08}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(16px, 3vw, 28px)', padding: 'clamp(24px, 3vw, 32px) 0', borderBottom: '1px solid var(--ink-line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-2)', paddingTop: 4 }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(19px, 2.2vw, 24px)', letterSpacing: '-0.02em', color: 'var(--on-dark)', marginBottom: 10 }}>{p.k}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--on-dark-muted)' }}>{p.v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section style={{ padding: 'clamp(88px, 12vh, 150px) clamp(20px, 5vw, 44px)', background: 'linear-gradient(90deg, rgba(23,20,15,0.045) 1px, transparent 1px) 0 0 / 88px 100%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal><SectionLabel index="04">Word of mouth</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5.4vw, 72px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', maxWidth: 620 }}>
                Clients who would <span className="serif-em">vouch for us.</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--line)', borderRadius: 4, padding: '12px 16px', background: 'var(--card)' }}>
                <span style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, j) => <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>4.9 average</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 2 }}>Across every engagement</span>
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      <HorizonRule label="Metro Phoenix · Arizona" />

      {/* ═══════════════════════ SERVICE AREAS ═══════════════════════ */}
      <section style={{ padding: 'clamp(88px, 12vh, 150px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div>
            <Reveal><SectionLabel index="05">Service Areas</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 22 }}>
                Built in Gilbert.<br />Serving all of metro Phoenix.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 420, marginBottom: 16 }}>
                We are based in Gilbert, right in the heart of the East Valley, and we build for businesses across the entire greater Phoenix area, from Scottsdale to Peoria and Chandler to Queen Creek.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--faint)' }}>+ Nationwide remote projects welcome</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
              {cities.map((c) => (
                <Link key={c.city} href={c.href} className="area-cell" style={{ padding: '18px 16px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 5, background: c.home ? 'var(--accent-soft)' : 'transparent', transition: 'background 0.2s' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em', color: c.home ? 'var(--accent-deep)' : 'var(--ink)' }}>{c.city}</span>
                    <svg className="area-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c.home ? 'var(--accent)' : 'var(--faint)'} strokeWidth="2" style={{ transition: 'transform 0.25s' }}><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.home ? 'var(--accent)' : 'var(--faint)' }}>{c.tag}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section style={{ padding: 'clamp(72px, 10vh, 130px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal><SectionLabel index="06">Questions</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px, 4.6vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 48 }}>
              Frequently asked.
            </h2>
          </Reveal>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {faqs.map((f, i) => {
              const open = faqOpen === i
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button onClick={() => setFaqOpen(open ? null : i)} aria-expanded={open} aria-controls={`faq-panel-${i}`} id={`faq-trigger-${i}`} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '24px 4px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(17px, 2vw, 21px)', letterSpacing: '-0.01em', color: open ? 'var(--accent-deep)' : 'var(--ink)', transition: 'color 0.25s' }}>{f.q}</span>
                    <span aria-hidden="true" style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)', transition: 'transform 0.3s, background 0.25s, border-color 0.25s', transform: open ? 'rotate(45deg)' : 'none', background: open ? 'var(--accent-soft)' : 'transparent', border: `1px solid ${open ? 'var(--accent-line)' : 'var(--line-2)'}` }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  <motion.div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} aria-hidden={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)', padding: '0 40px 26px 4px', maxWidth: 700 }}>{f.a}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CLOSING CTA ═══════════════════════ */}
      <section className="on-dark" style={{ padding: 'clamp(100px, 15vh, 190px) clamp(20px, 5vw, 44px)', position: 'relative', overflow: 'hidden', textAlign: 'center', background: 'var(--ink-bg)', color: 'var(--on-dark)', borderTop: '1px solid var(--ink-line)' }}>
        <div aria-hidden style={{ position: 'absolute', bottom: '-42%', left: '50%', transform: 'translateX(-50%)', width: 940, height: 940, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.20) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.35, maskImage: 'radial-gradient(ellipse at 50% 100%, #000, transparent 68%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 100%, #000, transparent 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--accent-2)', marginBottom: 26, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              Booking new projects · Gilbert, AZ
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 7.2vw, 108px)', lineHeight: 0.94, letterSpacing: '-0.035em', color: 'var(--on-dark)', marginBottom: 28 }}>
              Let&apos;s build something<br />that <span className="serif-em" style={{ color: 'var(--accent-2)' }}>outshines.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.6, color: 'var(--on-dark-muted)', maxWidth: 520, margin: '0 auto 40px' }}>
              Tell us what you are building. We will send back a plan, a timeline, and a flat price, usually within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a Project <span className="btn-arrow"><Arrow s={15} /></span></Link></Magnetic>
              <a href="tel:+14807939161" className="btn btn-ghost">(480) 793-9161</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 'clamp(18px, 4vw, 40px)', justifyContent: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.04em', color: 'var(--on-dark-muted)' }}>
              <span>◐ ~1 business-day reply</span>
              <span>◐ Flat-rate quotes</span>
              <span>◐ 100% code ownership</span>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .area-cell:hover { background: var(--card) !important; }
        .area-cell:hover .area-arrow { transform: translate(2px, -2px); }
        /* Hero headline mask-reveal — clip desktop, relax on mobile so wrapped lines never get cut */
        .hl-line { display: block; overflow: hidden; padding-bottom: 0.09em; }
        @media (max-width: 600px) { .hl-line { overflow: visible; } }
        /* Scroll cue — a dot falling down a hairline */
        .hero-cue-dot { animation: cueDrop 2.2s ease-in-out infinite; }
        @keyframes cueDrop {
          0% { transform: translateY(-11px); opacity: 0; }
          35% { opacity: 1; }
          100% { transform: translateY(34px); opacity: 0; }
        }
        /* Hide the scroll cue on shorter viewports so it never collides with the stats row */
        @media (max-height: 860px) { .hero-cue { display: none !important; } }
        /* ── Mobile hero tuning ── */
        @media (max-width: 600px) {
          /* never let the cue fight the stats/CTA for the bottom edge on phones */
          .hero-cue { display: none !important; }
          /* full-width, thumb-friendly CTAs stacked in reading order */
          .hero-cta { flex-direction: column; gap: 12px; }
          .hero-cta > * { width: 100%; }
          .hero-cta .btn { width: 100%; justify-content: center; padding: 16px 24px; }
          /* stats as a tidy 2×2 grid instead of a cramped single-row wrap */
          .hero-stats { display: grid !important; grid-template-columns: 1fr 1fr; gap: 22px 16px !important; max-width: 340px; margin: 0 auto; }
          .hero-stats > div { justify-content: center; }
          /* keep the eyebrow pill from crowding its own edges */
          .hero-eyebrow { padding: 7px 14px; gap: 8px; }
        }
        @media (max-width: 380px) {
          /* guard the two long words on the narrowest phones */
          .hero-title { font-size: 34px; }
        }
        /* Featured work — editorial split */
        .feat-card { display: grid; grid-template-columns: 1.15fr 0.85fr; align-items: stretch; }
        .feat-visual { border-right: 1px solid var(--line); }
        .feat-card .feat-visual > div { height: 100%; aspect-ratio: auto; min-height: 340px; }
        @media (max-width: 900px) {
          .feat-card { grid-template-columns: 1fr; }
          .feat-visual { border-right: none; border-bottom: 1px solid var(--line); }
          .feat-card .feat-visual > div { aspect-ratio: 16 / 11; min-height: 0; }
        }
        /* Approach timeline */
        .timeline { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(28px, 3vw, 48px); }
        .timeline-rail { position: absolute; top: 20px; left: 12.5%; right: 12.5%; height: 1px; background: var(--line-2); }
        @media (max-width: 860px) { .timeline { grid-template-columns: repeat(2, 1fr); gap: 48px; } .timeline-rail { display: none; } }
        @media (max-width: 480px) { .timeline { grid-template-columns: 1fr; } }
        /* Testimonial carousel — scroll-snap track, 3 / 2 / 1 cards per view */
        .tm-track { -ms-overflow-style: none; }
        .tm-track::-webkit-scrollbar { display: none; }
        .tm-track:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; border-radius: 4px; }
        .tm-card { width: calc((100% - 48px) / 3); }
        @media (max-width: 900px) { .tm-card { width: calc((100% - 24px) / 2); } }
        @media (max-width: 620px) { .tm-card { width: 100%; } }
        .tm-btn { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--line-2); border-radius: 999px; background: var(--card); color: var(--ink); cursor: pointer; transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s; }
        .tm-btn:hover:not(:disabled) { border-color: var(--ink); transform: translateY(-2px); }
        .tm-btn:disabled { opacity: 0.32; cursor: not-allowed; }
        /* Dark manifesto — asymmetric two-column split, collapses to one column */
        .manifesto-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 88px); align-items: start; }
        @media (max-width: 860px) { .manifesto-grid { grid-template-columns: 1fr; gap: clamp(40px, 6vh, 56px); } }
        /* Short / landscape viewports (e.g. phones held sideways) — release the forced 100svh
           and trim padding so the stacked hero never overflows or clips its stats/CTA */
        @media (max-height: 680px) and (min-width: 601px) {
          .hero-section { min-height: auto !important; padding-top: clamp(96px, 16vh, 116px) !important; padding-bottom: 40px !important; }
        }
      `}</style>
    </>
  )
}
