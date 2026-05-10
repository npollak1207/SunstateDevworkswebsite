'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import HeroTyping from '@/components/HeroTyping'
import HeroVisual from '@/components/HeroVisual'


const services = [
  {
    icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    title: 'Web Development',
    tag: '01',
    desc: 'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and Google rankings that actually move.',
    color: 'var(--cyan)',
    href: '/services/web-development',
    wide: true,
    tech: ['Next.js', 'TypeScript', 'Node.js'],
  },
  {
    icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    title: 'Mobile Apps',
    tag: '02',
    desc: 'iOS & Android apps built with React Native and SwiftUI. From MVP to App Store — we ship fast and we ship right.',
    color: 'var(--orange)',
    href: '/services/mobile-apps',
    wide: false,
    tech: ['SwiftUI', 'React Native', 'Expo'],
  },
  {
    icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
    ),
    title: 'Branding & Identity',
    tag: '03',
    desc: 'Logo, color systems, typography, brand guides. Identity that holds up everywhere, every time.',
    color: 'var(--cyan)',
    href: '/services/branding',
    wide: false,
    tech: ['Figma', 'Adobe CC', 'Motion'],
  },
  {
    icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    ),
    title: 'AI & Automation',
    tag: '04',
    desc: 'Custom AI integrations, chatbots, and workflow automation. Your team stays the same size. Output multiplies.',
    color: 'var(--orange)',
    href: '/services/ai-automation',
    wide: true,
    tech: ['Claude API', 'OpenAI', 'n8n'],
  },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: '30 minutes. We learn your business, goals, and what success actually looks like for you.', color: 'var(--cyan)' },
  { num: '02', title: 'Proposal & Scope', desc: 'Written scope, timeline, and flat-rate price. No hourly surprises. You approve before we start.', color: 'var(--orange)' },
  { num: '03', title: 'Design & Build', desc: 'We build in sprints and share progress weekly. You stay in the loop without being in the weeds.', color: 'var(--cyan)' },
  { num: '04', title: 'Launch & Handoff', desc: 'We handle DNS, SSL, and go-live. Then we hand you the keys — or keep maintaining it. Your call.', color: 'var(--orange)' },
]

const whyItems = [
  { label: 'No Blame Game', desc: 'We host what we build. One team, complete accountability. No finger-pointing between your dev and your host.', c: 'var(--cyan)' },
  { label: 'Code Experts', desc: 'Servers tuned for your architecture. Not a generic shared host that bogs down under traffic.', c: 'var(--orange)' },
  { label: 'Direct Access', desc: 'Local Arizona team. Real humans. No ticket queues, no call centers, no delays.', c: 'var(--cyan)' },
  { label: 'You Own Everything', desc: '100% of the code is yours on delivery. No proprietary platforms, no lock-in. Ever.', c: 'var(--orange)' },
]

const featuredProjects = [
  {
    title: 'Liberty Military Housing',
    cat: 'AI Dashboard',
    tag: 'Next.js · Python · OpenAI',
    accent: 'var(--cyan)',
    num: '01',
    stat: '60% fewer support tickets',
    desc: 'AI-driven construction management platform — natural language queries, real-time housing data across thousands of units.',
    href: '/works',
  },
  {
    title: 'ELS Platform',
    cat: 'iOS App · Web Dashboard',
    tag: 'SwiftUI · Firebase · Stripe',
    accent: 'var(--orange)',
    num: '02',
    stat: '20hrs saved per week',
    desc: 'Business-in-a-box for Easy Landscape Solutions — scheduling, invoicing, CRM, and real-time P&L in one native app.',
    href: 'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624',
  },
  {
    title: 'Cloak Wraps',
    cat: 'Web · Branding',
    tag: 'Next.js · CSS · Animation',
    accent: 'var(--cyan)',
    num: '03',
    stat: "Tempe's #1 wrap studio",
    desc: "Full rebrand and cinematic website for Tempe's premier vehicle wrap and PPF studio.",
    href: 'https://www.cloakwraps.com',
  },
]

const testimonials = [
  { name: 'Alex M.', role: 'Owner, Easy Landscape Solutions', body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything — scheduling, invoicing, P&L tracking, client comms. We got back at least 20 hours a week and actually know where our money is going now.', rating: 5, initials: 'AM' },
  { name: 'Billy W.', role: 'Owner, Zona Pest Solutions', body: 'The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa in a few months. These guys know what they\'re doing.', rating: 5, initials: 'BW' },
  { name: 'Zach H.', role: 'Owner, Cloak Wraps', body: 'I wanted something that looked as premium as the work we do on cars. They nailed it. The site is clean, fast, and gets compliments from customers before they even walk in the door.', rating: 5, initials: 'ZH' },
]

const row1 = ['Web Development','✦','Mobile Apps','◈','Branding','✦','AI & Automation','◈','Next.js','✦','SwiftUI','◈','React Native','✦','SEO','◈','Custom Code','✦','No Templates','◈']
const row2 = ['Gilbert Arizona','◈','Hand-Coded','✦','You Own It','◈','No Lock-In','✦','Laravel','◈','Supabase','✦','Stripe','◈','TypeScript','✦','100% Custom','◈','Fast Delivery','✦']
const makeLoop = (arr: string[]) => [...arr, ...arr, ...arr]

// Stack tech logos as simple SVG badges
const stackLogos = [
  { label: 'Next.js' },
  { label: 'SwiftUI' },
  { label: 'React Native' },
  { label: 'Laravel' },
  { label: 'Supabase' },
  { label: 'TypeScript' },
]


function ProjectCardVisual({ num, accent }: { num: string; accent: string }) {
  const ac = accent === 'var(--cyan)' ? '#00D4C8' : '#F4622A'
  const acA = accent === 'var(--cyan)' ? 'rgba(0,212,200,' : 'rgba(244,98,42,'

  if (num === '01') {
    // AI Dashboard
    const bars = [55, 72, 48, 88, 63, 79, 91, 67]
    return (
      <div style={{ height: 110, marginBottom: 24, borderRadius: 8, background: `${acA}0.04)`, border: `1px solid ${acA}0.1)`, position: 'relative', overflow: 'hidden', padding: '12px 14px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: ac, letterSpacing: '0.06em', textTransform: 'uppercase' }}>AI Dashboard · Live</span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: ac }}>−60% tickets</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 52 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? ac : `${acA}${0.15 + i * 0.04})`, borderRadius: '2px 2px 0 0' }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {['Housing Units', 'Open Tickets', 'AI Resolved'].map((l, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: 1, background: i === 0 ? ac : `${acA}0.3)` }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 7, color: 'rgba(255,255,255,0.35)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (num === '02') {
    // iOS App
    return (
      <div style={{ height: 110, marginBottom: 24, borderRadius: 8, background: `${acA}0.04)`, border: `1px solid ${acA}0.1)`, position: 'relative', overflow: 'hidden', padding: '10px 14px', boxSizing: 'border-box', display: 'flex', gap: 10 }}>
        <div style={{ width: 52, flexShrink: 0, background: 'rgba(0,0,0,0.25)', borderRadius: 8, padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2, width: '60%', margin: '0 auto 2px' }} />
          <div style={{ flex: 1, background: `${acA}0.12)`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: ac }}>$24.5k</span>
          </div>
          <div style={{ height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }} />
          <div style={{ height: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }} />
          <div style={{ height: 8, background: `${acA}0.15)`, borderRadius: 2, margin: '0 2px' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: ac, letterSpacing: '0.04em' }}>ELS Business App</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 7, color: 'rgba(255,255,255,0.3)' }}>iOS</span>
          </div>
          {['Scheduling', 'Invoicing', 'P&L Tracking'].map((l, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: `${acA}${0.1 + i * 0.05})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: ac, opacity: 0.7 }} />
              </div>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 2, flex: 1 }} />
            </div>
          ))}
          <div style={{ marginTop: 'auto', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 9, color: `${acA}0.7)` }}>20 hrs/week saved</div>
        </div>
      </div>
    )
  }

  // Cloak Wraps — Web + Branding
  return (
    <div style={{ height: 110, marginBottom: 24, borderRadius: 8, background: `${acA}0.04)`, border: `1px solid ${acA}0.1)`, position: 'relative', overflow: 'hidden', padding: '10px 14px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
        {['#0A0A0A', '#1A1A2E', ac, 'rgba(255,255,255,0.15)'].map((c, i) => (
          <div key={i} style={{ width: 18, height: 18, borderRadius: 4, background: c, border: '1px solid rgba(255,255,255,0.08)' }} />
        ))}
        <div style={{ marginLeft: 'auto', fontFamily: 'Space Mono, monospace', fontSize: 7, color: 'rgba(255,255,255,0.35)', lineHeight: '18px' }}>Brand System</div>
      </div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--off-white)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>CLOAK</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
        <div style={{ height: 5, background: ac, borderRadius: 2, width: '35%' }} />
        <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 2, flex: 1 }} />
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        <div style={{ height: 22, background: ac, borderRadius: 3, width: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 7, color: '#000', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get Quote</span>
        </div>
        <div style={{ height: 22, background: 'rgba(255,255,255,0.05)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', flex: 1 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 8, right: 10, fontFamily: 'Space Mono, monospace', fontSize: 7, color: `${acA}0.5)` }}>Tempe&apos;s #1 wrap studio</div>
    </div>
  )
}

function ProjectCard({ p, isExternal }: { p: { title: string; cat: string; tag: string; accent: string; num: string; stat: string; desc: string }, isExternal: boolean }) {
  return (
      <div className="card-lift" style={{ background: 'var(--navy)', padding: '36px 32px', borderBottom: `3px solid ${p.accent}`, position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '100%', boxSizing: 'border-box' }}>
        <ProjectCardVisual num={p.num} accent={p.accent} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: p.accent === 'var(--cyan)' ? 'rgba(0,212,200,0.08)' : 'rgba(244,98,42,0.08)', border: `1px solid ${p.accent === 'var(--cyan)' ? 'rgba(0,212,200,0.2)' : 'rgba(244,98,42,0.2)'}`, borderRadius: 4, padding: '4px 10px', marginBottom: 14 }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent, letterSpacing: '0.04em' }}>{p.stat}</span>
        </div>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{p.cat}</p>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, marginBottom: 10, lineHeight: 1.05, color: 'var(--off-white)' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '4px 10px' }}>{p.tag}</span>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6, color: p.accent, fontSize: 13, fontFamily: 'Syne, sans-serif', fontWeight: 700 }} className="project-arrow">
          {isExternal ? 'View Project' : 'See All Work'}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
  )
}

const compareRows = [
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    label: 'Load Speed', wp: '2 – 5s avg', us: '< 1.2s avg', wix: '2 – 4s avg',
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    label: 'Code Ownership', wp: 'Plugin-locked', us: '100% yours', wix: 'Platform-locked',
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    label: 'Custom Design', wp: 'Shared themes', us: 'Fully unique', wix: 'Shared templates',
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    label: 'SEO Performance', wp: 'Moderate', us: 'Maximum', wix: 'Limited',
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    label: 'Platform Lock-in', wp: 'Theme-dependent', us: 'None — ever', wix: 'Cannot export',
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>,
    label: 'Ongoing Bloat', wp: 'Plugin updates', us: 'Zero', wix: 'Platform updates',
  },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Most marketing sites ship in 3–5 weeks. Larger web apps or full redesigns typically run 6–10 weeks. We give you a fixed timeline in the proposal — no moving goalposts.' },
  { q: 'Do I own the code when the project is done?', a: '100%. Every line of code, every asset, every database. You get a full handoff — no subscriptions, no licensing, no lock-in of any kind.' },
  { q: 'Do you use WordPress or page builders?', a: 'Never. Everything we ship is hand-written code — Next.js, SwiftUI, React Native, Laravel. That\'s why our sites load fast, rank well, and don\'t break when a plugin updates.' },
  { q: 'How does pricing work? Do you charge hourly?', a: 'Flat-rate only. You see the full number before we start. No hourly billing, no scope-creep invoices, no surprise charges. See our pricing page for ranges.' },
  { q: 'Do you offer maintenance after launch?', a: 'Yes — we offer optional monthly care plans that cover hosting, updates, uptime monitoring, and priority support. Or we can hand you the keys entirely. Your choice.' },
  { q: 'Are you local to Arizona or do you work remotely?', a: 'We\'re based in Gilbert, AZ and serve clients across the Phoenix metro and nationwide. We do discovery and check-in calls over video, and can meet in person for local clients.' },
]

export default function HomePage() {
  const loop1 = makeLoop(row1)
  const loop2 = makeLoop(row2)
  const [showStickyBtn, setShowStickyBtn] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setShowStickyBtn(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
      <>
        {/* ─────────────────── HERO ─────────────────── */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Grid bg */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.035) 1px, transparent 1px)', backgroundSize: '72px 72px', zIndex: 0 }} />
          {/* Glows */}
          <div style={{ position: 'absolute', top: '15%', right: '-10%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 65%)', zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: '0%', left: '-15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 65%)', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: 0, right: '22%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,212,200,0.08) 40%, rgba(244,98,42,0.06) 70%, transparent 100%)', zIndex: 0 }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">
            {/* Left: text */}
            <div>
              {/* Availability badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,200,0.06)', border: '1px solid rgba(0,212,200,0.18)', borderRadius: 999, padding: '6px 16px', marginBottom: 40 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block', boxShadow: '0 0 10px var(--cyan)' }} />
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gilbert, Arizona · Available Now</span>
              </div>

              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 6vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: 36 }}>
                <span style={{ display: 'block', color: 'var(--off-white)' }}>We build</span>
                <span style={{ display: 'block', minHeight: '1.05em' }}><HeroTyping /></span>
              </h1>

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(16px, 1.5vw, 19px)', color: 'var(--text-muted)', maxWidth: 460, lineHeight: 1.8, marginBottom: 48 }}>
                Custom code. No templates, no page builders, no lock-in.
                Web, mobile, branding, and AI —{' '}
                <span style={{ color: 'var(--off-white)', fontWeight: 500 }}>you own 100% of everything.</span>
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
                <Link href="/contact" className="glow-pulse" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 38px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Start a Project →
                </Link>
                <Link href="/works" style={{ border: '1px solid rgba(0,212,200,0.22)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 38px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', background: 'rgba(0,212,200,0.03)' }}>
                  View Works
                </Link>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: 0, marginBottom: 48, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28 }} className="hero-stats">
                {[
                  { num: '15+', label: 'Projects Shipped' },
                  { num: '4.9★', label: 'Avg Rating' },
                  { num: '<1.2s', label: 'Avg Load Time' },
                  { num: '100%', label: 'Code Ownership' },
                ].map((s, i) => (
                  <div key={s.label} style={{ flex: 1, paddingRight: 20, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingLeft: i > 0 ? 20 : 0 }}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', lineHeight: 1.1, marginBottom: 4 }}>{s.num}</div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack badges */}
              <div>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Built with</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {stackLogos.map(s => (
                      <span key={s.label} style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '5px 10px', letterSpacing: '0.04em' }}>{s.label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: animated hero visual */}
            <div className="hero-visual">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ─────────────────── MARQUEE ─────────────────── */}
        <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(0,212,200,0.08)', borderBottom: '1px solid rgba(0,212,200,0.08)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--orange)', padding: '12px 0', overflow: 'hidden' }}>
            <div className="marquee-fwd" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
              {loop1.map((item, i) => (
                  <span key={i} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: i % 2 === 0 ? 'white' : 'rgba(255,255,255,0.5)', marginRight: 32 }}>{item}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--navy-light)', padding: '11px 0', overflow: 'hidden' }}>
            <div className="marquee-back" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
              {loop2.map((item, i) => (
                  <span key={i} style={{ fontFamily: 'Space Mono, monospace', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: i % 2 === 0 ? 'var(--cyan)' : 'rgba(0,212,200,0.35)', marginRight: 28 }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────── SERVICES ─────────────────── */}
        <section style={{ padding: '120px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
                <div>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>What We Build</p>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                    Full-stack capabilities.<br /><span style={{ color: 'var(--cyan)' }}>Zero outside dependencies.</span>
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento row 1: wide + narrow */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2, marginBottom: 2 }} className="services-row">
              {[services[0], services[1]].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <Link href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                      <div className="card-lift service-card" style={{ background: 'var(--navy-mid)', padding: '44px 36px', borderLeft: `4px solid ${s.color}`, height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                        <span style={{ position: 'absolute', bottom: -20, right: 16, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 100, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}>{s.tag}</span>
                        <div style={{ color: s.color, marginBottom: 20 }}>{s.icon}</div>
                        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{s.tag} — {s.title}</p>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: i === 0 ? 32 : 24, marginBottom: 14, lineHeight: 1.05, color: 'var(--off-white)' }}>{s.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 480, marginBottom: 24 }}>{s.desc}</p>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
                          {s.tech.map(t => (
                              <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: s.color, background: s.color === 'var(--cyan)' ? 'rgba(0,212,200,0.08)' : 'rgba(244,98,42,0.08)', border: `1px solid ${s.color === 'var(--cyan)' ? 'rgba(0,212,200,0.2)' : 'rgba(244,98,42,0.2)'}`, borderRadius: 4, padding: '3px 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t}</span>
                          ))}
                        </div>
                        <div className="service-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'gap 0.2s' }}>
                          Explore service <span>→</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
              ))}
            </div>

            {/* Bento row 2: narrow + wide */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }} className="services-row">
              {[services[2], services[3]].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 100 + 200}>
                    <Link href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                      <div className="card-lift service-card" style={{ background: 'var(--navy-mid)', padding: '44px 36px', borderLeft: `4px solid ${s.color}`, height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                        <span style={{ position: 'absolute', bottom: -20, right: 16, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 100, color: 'rgba(255,255,255,0.025)', lineHeight: 1, pointerEvents: 'none' }}>{s.tag}</span>
                        <div style={{ color: s.color, marginBottom: 20 }}>{s.icon}</div>
                        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{s.tag} — {s.title}</p>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: i === 1 ? 32 : 24, marginBottom: 14, lineHeight: 1.05, color: 'var(--off-white)' }}>{s.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
                          {s.tech.map(t => (
                              <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: s.color, background: s.color === 'var(--cyan)' ? 'rgba(0,212,200,0.08)' : 'rgba(244,98,42,0.08)', border: `1px solid ${s.color === 'var(--cyan)' ? 'rgba(0,212,200,0.2)' : 'rgba(244,98,42,0.2)'}`, borderRadius: 4, padding: '3px 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t}</span>
                          ))}
                        </div>
                        <div className="service-arrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'gap 0.2s' }}>
                          Explore service <span>→</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── COMPARISON ─────────────────── */}
        <section style={{ padding: '120px 24px', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,200,0.25), transparent)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,212,200,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>

            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 72 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Why Custom Code</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 16 }}>
                  Not all websites<br /><span style={{ color: 'var(--cyan)' }}>are built equal.</span>
                </h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--text-muted)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
                  Templates look the same. Plugins slow you down. Custom code is the only way to truly own your performance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>

              {/* ════════════════ DESKTOP TABLE (≥ 640px) ════════════════ */}
              <div className="compare-desktop" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 0 80px rgba(0,212,200,0.04)', overflow: 'hidden' }}>

                {/* Header row */}
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr' }}>
                  <div style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.06)' }} />
                  <div style={{ padding: '20px 16px 24px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Theme + Plugins</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: 'rgba(255,255,255,0.4)', lineHeight: 1.1 }}>WordPress</div>
                  </div>
                  <div style={{ padding: '20px 16px 24px', textAlign: 'center', background: 'rgba(0,212,200,0.07)', borderBottom: '2px solid rgba(0,212,200,0.25)', borderLeft: '2px solid rgba(0,212,200,0.25)', borderRight: '2px solid rgba(0,212,200,0.25)', borderTop: '3px solid #00D4C8', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'var(--cyan)', color: '#000', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(0,212,200,0.35)' }}>✦ Best Choice</div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(0,212,200,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Custom Code</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--cyan)', lineHeight: 1.1 }}>Sunstate<br/>Devworks</div>
                  </div>
                  <div style={{ padding: '20px 16px 24px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Website Builders</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: 'rgba(255,255,255,0.4)', lineHeight: 1.1 }}>Wix /<br/>Squarespace</div>
                  </div>
                </div>

                {/* Feature rows */}
                {compareRows.map((row, ri) => (
                  <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr' }}>
                    <div style={{ padding: '22px 20px', display: 'flex', alignItems: 'center', gap: 10, background: ri % 2 === 0 ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.12)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ color: 'var(--cyan)', opacity: 0.55, flexShrink: 0 }}>{row.icon}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.07em', textTransform: 'uppercase', lineHeight: 1.45 }}>{row.label}</span>
                    </div>
                    <div style={{ padding: '22px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: ri % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,80,80,0.45)" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.35 }}>{row.wp}</span>
                    </div>
                    <div style={{ padding: '22px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: ri % 2 === 0 ? 'rgba(0,212,200,0.05)' : 'rgba(0,212,200,0.08)', borderTop: '1px solid rgba(0,212,200,0.1)', borderLeft: '2px solid rgba(0,212,200,0.22)', borderRight: '2px solid rgba(0,212,200,0.22)' }}>
                      <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(0,212,200,0.18)', border: '1.5px solid rgba(0,212,200,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(0,212,200,0.15)' }}><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#00D4C8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--off-white)', textAlign: 'center', lineHeight: 1.35 }}>{row.us}</span>
                    </div>
                    <div style={{ padding: '22px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: ri % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,80,80,0.45)" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.35 }}>{row.wix}</span>
                    </div>
                  </div>
                ))}

                {/* Bottom CTA row */}
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr' }}>
                  <div style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.04)' }} />
                  <div style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.04)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>Standard tier</span>
                  </div>
                  <div style={{ background: 'rgba(0,212,200,0.06)', borderTop: '1px solid rgba(0,212,200,0.15)', borderLeft: '2px solid rgba(0,212,200,0.22)', borderRight: '2px solid rgba(0,212,200,0.22)', borderBottom: '2px solid rgba(0,212,200,0.22)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link href="/contact" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 11, color: '#000', background: 'var(--cyan)', padding: '10px 20px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(0,212,200,0.3)' }}>
                      Start a Project →
                    </Link>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.04)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>Standard tier</span>
                  </div>
                </div>

              </div>

              {/* ════════════════ MOBILE LAYOUT (< 640px) ════════════════ */}
              <div className="compare-mobile" style={{ display: 'none' }}>

                {/* Column headers — 3 equal cols, no label col */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3, marginBottom: 3, borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                  {/* WordPress */}
                  <div style={{ padding: '16px 10px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 7, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Plugins</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.1 }}>WordPress</div>
                  </div>
                  {/* Sunstate */}
                  <div style={{ padding: '14px 10px 16px', textAlign: 'center', background: 'rgba(0,212,200,0.08)', borderTop: '3px solid #00D4C8', borderLeft: '2px solid rgba(0,212,200,0.3)', borderRight: '2px solid rgba(0,212,200,0.3)', borderBottom: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'var(--cyan)', color: '#000', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: '0 3px 12px rgba(0,212,200,0.35)' }}>✦ Best</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: 'var(--cyan)', lineHeight: 1.1 }}>Sunstate<br/>Devworks</div>
                  </div>
                  {/* Wix */}
                  <div style={{ padding: '16px 10px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 7, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Builder</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.1 }}>Wix /<br/>Squarespace</div>
                  </div>
                </div>

                {/* Feature rows — label bar + 3 cells */}
                {compareRows.map((row, ri) => (
                  <div key={row.label} style={{ marginBottom: ri < compareRows.length - 1 ? 3 : 0 }}>
                    {/* Full-width label bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'rgba(0,0,0,0.25)', borderLeft: '2px solid rgba(0,212,200,0.2)' }}>
                      <span style={{ color: 'var(--cyan)', opacity: 0.6, flexShrink: 0 }}>{row.icon}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{row.label}</span>
                    </div>
                    {/* 3 value cells */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
                      {/* WP */}
                      <div style={{ padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: ri % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)', borderTop: 'none' }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,80,80,0.5)" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.22)', textAlign: 'center', lineHeight: 1.3 }}>{row.wp}</span>
                      </div>
                      {/* Sunstate */}
                      <div style={{ padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: ri % 2 === 0 ? 'rgba(0,212,200,0.06)' : 'rgba(0,212,200,0.09)', borderLeft: '2px solid rgba(0,212,200,0.25)', borderRight: '2px solid rgba(0,212,200,0.25)', borderTop: '1px solid rgba(0,212,200,0.12)', borderBottom: 'none' }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(0,212,200,0.2)', border: '1.5px solid rgba(0,212,200,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 8px rgba(0,212,200,0.2)' }}><svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#00D4C8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: 'var(--off-white)', textAlign: 'center', lineHeight: 1.3 }}>{row.us}</span>
                      </div>
                      {/* Wix */}
                      <div style={{ padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, background: ri % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)', borderTop: 'none' }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,80,80,0.5)" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.22)', textAlign: 'center', lineHeight: 1.3 }}>{row.wix}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Mobile CTA */}
                <div style={{ marginTop: 3, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '14px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0 0 0 12px' }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.12)' }}>Standard</span>
                  </div>
                  <div style={{ background: 'rgba(0,212,200,0.07)', borderLeft: '2px solid rgba(0,212,200,0.25)', borderRight: '2px solid rgba(0,212,200,0.25)', borderBottom: '2px solid rgba(0,212,200,0.25)', padding: '14px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link href="/contact" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 10, color: '#000', background: 'var(--cyan)', padding: '8px 12px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap', textAlign: 'center', display: 'block', boxShadow: '0 3px 16px rgba(0,212,200,0.3)' }}>
                      Start →
                    </Link>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '14px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0 0 12px 0' }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'rgba(255,255,255,0.12)' }}>Standard</span>
                  </div>
                </div>

              </div>

            </ScrollReveal>

          </div>
        </section>

        {/* ─────────────────── FEATURED PROJECTS ─────────────────── */}
        <section style={{ padding: '80px 24px 120px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Selected Work</p>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                    1 of 1.<br /><span style={{ color: 'var(--orange)' }}>Every time.</span>
                  </h2>
                </div>
                <Link href="/works" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 4 }}>
                  View All Work →
                </Link>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="projects-grid">
              {featuredProjects.map((p, i) => {
                const isExternal = p.href.startsWith('http')
                return (
                    <ScrollReveal key={i} delay={i * 90}>
                      {isExternal ? (
                          <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                            <ProjectCard p={p} isExternal={true} />
                          </a>
                      ) : (
                          <Link href={p.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                            <ProjectCard p={p} isExternal={false} />
                          </Link>
                      )}
                    </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────── PROCESS ─────────────────── */}
        <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 72 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>How It Works</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                  Idea to launch.<br /><span style={{ color: 'var(--orange)' }}>No confusion.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Desktop timeline */}
            <div className="process-desktop" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, var(--cyan), var(--orange), var(--cyan), var(--orange))', opacity: 0.25 }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                {process.map((p, i) => (
                    <ScrollReveal key={i} delay={i * 100}>
                      <div style={{ padding: '0 20px', textAlign: 'center' }}>
                        <div style={{ width: 56, height: 56, borderRadius: '50%', border: `2px solid ${p.color}`, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', position: 'relative', zIndex: 1 }}>
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: p.color, fontWeight: 700 }}>{p.num}</span>
                        </div>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 10, color: 'var(--off-white)' }}>{p.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
                      </div>
                    </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Mobile timeline — vertical */}
            <div className="process-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
              {process.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < process.length - 1 ? 32 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', border: `2px solid ${p.color}`, background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: p.color, fontWeight: 700 }}>{p.num}</span>
                      </div>
                      {i < process.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.06)', marginTop: 8 }} />}
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 8, color: 'var(--off-white)' }}>{p.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── WHY US ─────────────────── */}
        <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }} className="why-grid">
              <ScrollReveal>
                <div style={{ position: 'sticky', top: 100 }}>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Why Sunstate</p>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
                    One team.<br /><span style={{ color: 'var(--orange)' }}>Total<br />accountability.</span>
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
                    We host what we build, maintain what we deploy, and fix what breaks.
                    No blame game. No runaround. One relationship from start to forever.
                  </p>
                  <Link href="/about" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--cyan)', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '2px solid var(--cyan)', paddingBottom: 4 }}>
                    About the Studio →
                  </Link>
                </div>
              </ScrollReveal>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {whyItems.map((item, i) => (
                    <ScrollReveal key={i} delay={i * 80}>
                      <div className="card-lift" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, padding: '28px', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ width: 48, height: 48, borderRadius: 10, background: `rgba(${item.c === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.08)`, border: `1px solid rgba(${item.c === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.c, flexShrink: 0 }}>
                          {item.c === 'var(--cyan)' ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                          )}
                        </div>
                        <div>
                          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 6, color: 'var(--off-white)' }}>{item.label}</p>
                          <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── TESTIMONIALS ─────────────────── */}
        <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-5%', top: '20%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.04) 0%, transparent 70%)' }} />
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 72 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Client Results</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                  Don&apos;t take our word<br /><span style={{ color: 'var(--cyan)' }}>for it.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Big featured quote */}
            <ScrollReveal>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(0,212,200,0.12)', borderRadius: 16, padding: '56px 64px', marginBottom: 2, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 24, left: 40, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 120, color: 'rgba(0,212,200,0.06)', lineHeight: 1, pointerEvents: 'none' }}>&ldquo;</div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 24 }}>
                  {Array.from({ length: 5 }).map((_, j) => <span key={j} style={{ color: 'var(--orange)', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.5, color: 'var(--off-white)', marginBottom: 32, maxWidth: 800, position: 'relative', zIndex: 1 }}>
                  &ldquo;{testimonials[0].body}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,212,200,0.12)', border: '2px solid rgba(0,212,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: 'var(--cyan)' }}>{testimonials[0].initials}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--cyan)' }}>{testimonials[0].name}</p>
                    <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Smaller two cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="testimonial-grid">
              {testimonials.slice(1).map((t, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '36px', borderTop: `3px solid ${i === 0 ? 'var(--orange)' : 'var(--cyan)'}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', gap: 2, marginBottom: 18 }}>
                        {Array.from({ length: t.rating }).map((_, j) => <span key={j} style={{ color: 'var(--orange)', fontSize: 13 }}>★</span>)}
                      </div>
                      <p style={{ color: 'var(--off-white)', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>&ldquo;{t.body}&rdquo;</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 0 ? 'rgba(244,98,42,0.12)' : 'rgba(0,212,200,0.12)', border: `2px solid ${i === 0 ? 'rgba(244,98,42,0.3)' : 'rgba(0,212,200,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, color: i === 0 ? 'var(--orange)' : 'var(--cyan)' }}>{t.initials}</span>
                        </div>
                        <div>
                          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: i === 0 ? 'var(--orange)' : 'var(--cyan)' }}>{t.name}</p>
                          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── FAQ ─────────────────── */}
        <section style={{ padding: '120px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ marginBottom: 64, textAlign: 'center' }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Common Questions</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                  Everything you<br /><span style={{ color: 'var(--orange)' }}>want to know.</span>
                </h2>
              </div>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    style={{ width: '100%', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 0, padding: '24px 28px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, borderLeft: `3px solid ${faqOpen === i ? 'var(--orange)' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.2s' }}
                  >
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: faqOpen === i ? 'var(--off-white)' : 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: faqOpen === i ? 'rgba(244,98,42,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${faqOpen === i ? 'rgba(244,98,42,0.3)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: faqOpen === i ? 'var(--orange)' : 'var(--text-muted)', fontSize: 18, lineHeight: 1, transition: 'all 0.2s', transform: faqOpen === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  {faqOpen === i && (
                    <div style={{ background: 'rgba(0,0,0,0.15)', borderLeft: '3px solid var(--orange)', padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.04)', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85 }}>{faq.a}</p>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div style={{ marginTop: 48, textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-muted)', marginBottom: 16 }}>Still have questions?</p>
                <Link href="/contact" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--cyan)', textDecoration: 'none', borderBottom: '2px solid var(--cyan)', paddingBottom: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Ask us directly →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────────── SERVICE AREAS ─────────────────── */}
        <section style={{ padding: '100px 24px', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,200,0.15), transparent)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px', zIndex: 0 }} />
          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="areas-grid">
                {/* Left: copy */}
                <div>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Service Areas</p>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20 }}>
                    Built in Gilbert.<br /><span style={{ color: 'var(--cyan)' }}>Serving all of<br />metro Phoenix.</span>
                  </h2>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>
                    We&apos;re based in Gilbert, AZ — right in the heart of the East Valley. We work with businesses across the entire greater Phoenix area, from Scottsdale to Peoria, Chandler to Queen Creek, and everywhere in between.
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, maxWidth: 420 }}>
                    All projects are managed in-house. No outsourcing, no overseas handoffs. When you call, you talk to the person who built your site.
                  </p>
                </div>
                {/* Right: city grid */}
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
                    {[
                      { city: 'Gilbert',        tag: 'Home Base',      accent: true,  href: '/web-design-gilbert' },
                      { city: 'Phoenix',         tag: 'Web Design',     accent: false, href: '/web-design-phoenix' },
                      { city: 'Scottsdale',      tag: 'Web Design',     accent: false, href: '/web-design-scottsdale' },
                      { city: 'Chandler',        tag: 'Web & Apps',     accent: false, href: '/web-design-chandler' },
                      { city: 'Mesa',            tag: 'Web Design',     accent: false, href: '/web-design-mesa' },
                      { city: 'Tempe',           tag: 'Web & Branding', accent: false, href: '/web-design-tempe' },
                      { city: 'Peoria',          tag: 'Web Design',     accent: false, href: '/web-design-peoria' },
                      { city: 'Glendale',        tag: 'Web Design',     accent: false, href: '/web-design-glendale' },
                      { city: 'Queen Creek',     tag: 'Web Design',     accent: false, href: '/web-design-queen-creek' },
                      { city: 'Surprise',        tag: 'Web Design',     accent: false, href: '/web-design-surprise' },
                      { city: 'Ahwatukee',       tag: 'Web & Apps',     accent: false, href: '/web-design-ahwatukee' },
                      { city: 'Paradise Valley', tag: 'Branding',       accent: false, href: '/web-design-paradise-valley' },
                    ].map((item) => {
                      const inner = (
                        <>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                              <path d="M4 0C1.79 0 0 1.79 0 4c0 3 4 6 4 6s4-3 4-6c0-2.21-1.79-4-4-4zm0 5.5C3.17 5.5 2.5 4.83 2.5 4S3.17 2.5 4 2.5 5.5 3.17 5.5 4 4.83 5.5 4 5.5z" fill={item.accent ? '#00D4C8' : 'rgba(255,255,255,0.25)'} />
                            </svg>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: item.accent ? 'var(--cyan)' : 'rgba(255,255,255,0.75)', lineHeight: 1.1 }}>{item.city}</span>
                            {item.href && <svg width="9" height="9" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 'auto', opacity: 0.4 }}><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </div>
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: item.accent ? 'rgba(0,212,200,0.5)' : 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', textTransform: 'uppercase', paddingLeft: 14 }}>{item.tag}</span>
                        </>
                      )
                      const sharedStyle = {
                        padding: '16px 14px',
                        background: item.accent ? 'rgba(0,212,200,0.07)' : 'rgba(255,255,255,0.02)',
                        border: item.accent ? '1px solid rgba(0,212,200,0.2)' : '1px solid rgba(255,255,255,0.05)',
                        display: 'flex' as const, flexDirection: 'column' as const, gap: 4,
                        textDecoration: 'none', transition: 'background 0.15s, border-color 0.15s',
                      }
                      return item.href
                        ? <Link key={item.city} href={item.href} className="area-card" style={sharedStyle}>{inner}</Link>
                        : <div key={item.city} style={sharedStyle}>{inner}</div>
                    })}
                  </div>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 12, textAlign: 'center' }}>
                    + Nationwide remote projects welcome
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────────── CTA ─────────────────── */}
        <section style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }} className="cta-grid">
            <div style={{ padding: '80px 64px', borderRight: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.06) 0%, transparent 70%)' }} />
              <ScrollReveal>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Ready?</p>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 20 }}>
                  One call.<br />That&apos;s all<br /><span style={{ color: 'var(--cyan)' }}>it takes.</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75 }}>
                  30-minute discovery call. No pressure. We figure out if we&apos;re a fit — and if we are, we move fast.
                </p>
              </ScrollReveal>
            </div>
            <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
              <ScrollReveal delay={100}>
                <Link href="/contact" className="glow-pulse" style={{ display: 'block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, padding: '22px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 12 }}>
                  Schedule Discovery Call →
                </Link>
                <Link href="/pricing" style={{ display: 'block', border: '1px solid rgba(0,212,200,0.2)', color: 'var(--cyan)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '18px 36px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center', background: 'rgba(0,212,200,0.03)', marginBottom: 16 }}>
                  See Pricing First
                </Link>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Typically respond within 2 hours
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sticky mobile CTA */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, padding: '12px 16px', background: 'rgba(7,11,20,0.92)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(0,212,200,0.12)', transform: showStickyBtn ? 'translateY(0)' : 'translateY(110%)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', pointerEvents: showStickyBtn ? 'auto' : 'none' }} className="sticky-cta">
          <Link href="/contact" className="glow-pulse" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '14px 24px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Start a Project →
          </Link>
        </div>

        <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .service-card:hover .service-arrow { gap: 10px; }
        .card-lift:hover .project-arrow { transform: translateX(4px); }
        .area-card:hover { background: rgba(0,212,200,0.06) !important; border-color: rgba(0,212,200,0.18) !important; }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card-hide { display: none !important; }
        }
        /* Comparison layout toggle */
        .compare-desktop { display: block; }
        .compare-mobile   { display: none !important; }
        @media (max-width: 640px) {
          .compare-desktop { display: none !important; }
          .compare-mobile   { display: block !important; }
        }

        @media (max-width: 900px) {
          .areas-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-row { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          div[style*="position: sticky"] { position: static !important; }
          .process-desktop { display: none !important; }
          .process-mobile { display: flex !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
          .hero-stats { gap: 0; }
          .hero-stats > div { padding-left: 10px !important; padding-right: 10px !important; }
          .hero-stats > div:first-child { padding-left: 0 !important; }
          .compare-grid { gap: 2px !important; }
        }
        /* Hide sticky CTA on desktop — already has a full CTA section */
        @media (min-width: 900px) {
          .sticky-cta { display: none !important; }
        }
      `}</style>
      </>
  )
}