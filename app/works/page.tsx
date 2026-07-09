'use client'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Reveal from '@/components/Reveal'
import { Arrow, CTASection } from '@/components/editorial'

type Metric = { value: string; label: string }
type Testimonial = { name: string; role: string; body: string; initials: string }
type Project = {
  num: string; title: string; cat: string; year: string; url?: string; repo?: string
  desc: string; highlight: string; metrics: Metric[]; tech: string[]; tags: string[]
  testimonial?: Testimonial; featured?: boolean
}

const projects: Project[] = [
  {
    num: '01', title: 'Liberty Military Housing', cat: 'AI Dashboard', year: '2024',
    tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    desc: 'A centralized, AI-driven construction-management platform that turned thousands of data points across military housing renovations into a real-time source of truth.',
    highlight: 'A natural-language interface: managers ask questions in plain English and the AI returns live data visualizations instantly.',
    metrics: [{ value: '−60%', label: 'Support tickets' }, { value: '10k+', label: 'Housing units' }, { value: '4 wks', label: 'Build time' }],
    tags: ['AI', 'Web App'], featured: true,
  },
  {
    num: '02', title: 'ELS Platform', cat: 'iOS App · Web Dashboard', year: '2024',
    tech: ['SwiftUI', 'Firebase', 'Stripe API', 'Mapbox'],
    url: 'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624',
    desc: 'A full business-in-a-box iOS app and web dashboard for Easy Landscape Solutions, replacing five disconnected apps with one unified platform for scheduling, invoicing, CRM and real-time P&L tracking.',
    highlight: 'A custom financial module tracks profitability per job in real time, something no off-the-shelf software could provide.',
    metrics: [{ value: '20 hrs', label: 'Saved per week' }, { value: '5 to 1', label: 'Apps replaced' }, { value: 'Live', label: 'On App Store' }],
    tags: ['iOS', 'Web App'],
    testimonial: { name: 'Alex M.', role: 'Owner, Easy Landscape Solutions', body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything. We got back at least 20 hours a week and finally know where our money is going.', initials: 'AM' },
    featured: true,
  },
  {
    num: '03', title: 'Cloak Wraps', cat: 'Web · Branding', year: '2024',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'CSS'],
    url: 'https://www.cloakwraps.com',
    desc: "A premium custom website for Tempe's leading vehicle-wrap and PPF studio. Full rebrand with a cinematic hero video, animated service pages and a bespoke quote-request flow.",
    highlight: 'An EV-specialist studio page built to capture the fast-growing Tesla and Rivian wrap market in the Phoenix Valley.',
    metrics: [{ value: '#1', label: 'Tempe wrap studio' }, { value: 'EV', label: 'Specialist page' }],
    tags: ['Web', 'Branding'],
    testimonial: { name: 'Zach H.', role: 'Owner, Cloak Wraps', body: 'I wanted something that looked as premium as the work we do on cars. They nailed it. The site is clean, fast, and gets compliments from customers before they even walk in the door.', initials: 'ZH' },
  },
  {
    num: '04', title: 'Zona Pest Solutions', cat: 'Web · SEO', year: '2024',
    tech: ['Next.js', 'TypeScript', 'FieldRoutes API', 'SEO'],
    url: 'https://www.zonapestsolutions.com',
    desc: "A modern website and SEO strategy for Scottsdale and Mesa's top-rated pest-control company. Built to rank, convert, and integrate with their FieldRoutes customer portal.",
    highlight: 'A subscription-plan architecture designed to drive $59 to $99 per month in recurring revenue directly from the site.',
    metrics: [{ value: '#1', label: 'Scottsdale & Mesa' }, { value: '$59+', label: 'Monthly plans' }],
    tags: ['Web', 'SEO'],
    testimonial: { name: 'Billy W.', role: 'Owner, Zona Pest Solutions', body: 'The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa in a few months. These guys know what they are doing.', initials: 'BW' },
  },
  {
    num: '05', title: 'Easy Landscape Solutions', cat: 'Web · Branding', year: '2024',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    url: 'https://www.easylandscapesolutions.com',
    desc: 'A full rebrand and custom site for a Gilbert hardscape and artificial-turf company. Before-and-after drag slider, a consultation form with photo uploads, and ROC-license trust signals.',
    highlight: 'An interactive before-and-after drag comparison, built custom with no plugins and no libraries, in pure JavaScript.',
    metrics: [{ value: '67+', label: 'Five-star reviews' }, { value: 'ROC', label: 'Licensed trust' }],
    tags: ['Web', 'Branding'],
  },
  {
    num: '06', title: 'Canyon Cleaning Solutions', cat: 'Web', year: '2025',
    tech: ['Next.js', 'TypeScript', 'CSS'],
    url: 'https://canyon-cleaning-solutions-tmr5.vercel.app',
    desc: 'A clean, conversion-focused website for a residential and commercial cleaning company. Service-area pages, an instant quote-request flow, and trust-building social proof.',
    highlight: 'Structured for local SEO from the ground up, with service-area pages built to rank city by city.',
    metrics: [{ value: '5', label: 'Service areas' }, { value: 'Live', label: 'On Vercel' }],
    tags: ['Web'],
  },
  {
    num: '07', title: 'The Mystical Universe', cat: 'Web App · iOS App', year: '2025',
    tech: ['Next.js 16', 'SwiftUI', 'Supabase', 'LiveKit'],
    url: 'https://www.justmystical.com', repo: 'https://github.com/npollak1207/mystical-universe',
    desc: 'A two-platform fan universe for a YouTube channel: part editorial magazine, part TMDB-powered review hub, part Discord-style community with live watch parties. One Supabase backend powers a Next.js web app and a native SwiftUI iOS app with full feature parity.',
    highlight: 'Web and iOS share a single Postgres backend governed by row-level security, plus LiveKit voice and video watch parties with native CallKit on iOS.',
    metrics: [{ value: '2', label: 'Native clients' }, { value: '1', label: 'Shared backend' }, { value: 'Live', label: 'Watch parties' }],
    tags: ['Web App', 'iOS', 'AI'], featured: true,
  },
  {
    num: '08', title: 'MyFlix', cat: 'Web App · Streaming', year: '2025',
    tech: ['React', 'TypeScript', 'Vite', 'Jellyfin'],
    url: 'https://myflix-steel-six.vercel.app', repo: 'https://github.com/npollak1207/myflix',
    desc: 'A private, self-hosted "Netflix for yourself": a cinematic streaming front-end built over a Jellyfin media server. Adaptive 4K HLS playback, dynamic color theming, Continue Watching, collections and a polished custom player.',
    highlight: 'A custom React UI over Jellyfin delivers 4K adaptive HLS, skip-intro and autoplay-next, reachable privately over Tailscale with zero public ports.',
    metrics: [{ value: '4K', label: 'Adaptive HLS' }, { value: '0', label: 'Public ports' }, { value: 'Private', label: 'Self-host' }],
    tags: ['Web App'],
  },
  {
    num: '09', title: 'DWGS', cat: 'Web · Branding', year: '2025',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: 'https://www.dwgsusa.com',
    desc: 'A bold, military-inspired marketing site for a property-maintenance and renovation contractor specializing in military housing and multifamily portfolios. Split-screen hero, services grid and industry pages built to win over property managers.',
    highlight: 'A stencil-and-olive brand system engineered to read as rugged and dependable, anchored by their 15+ year military-housing specialty and nationwide reach.',
    metrics: [{ value: '15+', label: 'Years experience' }, { value: '10', label: 'Service lines' }],
    tags: ['Web', 'Branding'],
  },
  {
    num: '10', title: 'Canyon Supply Co', cat: 'E-Commerce · SEO', year: '2025',
    tech: ['Next.js', 'Supabase', 'Stripe', 'SEO'],
    url: 'https://canyonsupplyco.vercel.app',
    desc: 'A full e-commerce storefront for a Phoenix cleaning-equipment supplier: pressure washers, jetters, chemicals and parts. Product catalog, cart, Stripe checkout, blog and an admin dashboard, all built for local search.',
    highlight: 'An authorized-dealer catalog with Supabase-backed inventory and Stripe checkout, structured for Phoenix-area local SEO from the ground up.',
    metrics: [{ value: '20+', label: 'Years in Phoenix' }, { value: 'Stripe', label: 'Live checkout' }],
    tags: ['Web', 'SEO'],
  },
]

const allTags = ['All', 'Web', 'iOS', 'Web App', 'AI', 'Branding', 'SEO']
const clientMarks = ['Liberty Military Housing', 'Easy Landscape Solutions', 'Cloak Wraps', 'Zona Pest Solutions', 'Canyon Cleaning', 'DWGS', 'Canyon Supply Co']
const heroStats = [
  { num: '50+', label: 'Projects shipped' },
  { num: '4.9★', label: 'Avg rating' },
  { num: '<1.2s', label: 'Avg load time' },
  { num: '100%', label: 'Custom code' },
]

function Stars() {
  return <span style={{ display: 'flex', gap: 2, marginBottom: 8 }}>{[...Array(5)].map((_, i) => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}</span>
}

function ProjectCTA({ p }: { p: Project }) {
  if (!p.url && !p.repo) return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Private client · NDA</span>
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      {p.url && (
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: 12 }}>
          {p.url.includes('apple.com') ? 'View on App Store' : 'Visit Site'}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
          View Code
        </a>
      )}
    </div>
  )
}

function Metrics({ p, big }: { p: Project; big?: boolean }) {
  return (
    <div style={{ display: 'flex', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '16px 0', marginBottom: 18 }}>
      {p.metrics.map((m, i) => (
        <div key={m.label} style={{ flex: 1, paddingLeft: i > 0 ? 18 : 0, borderLeft: i > 0 ? '1px solid var(--line)' : 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: big ? 28 : 19, color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 5, letterSpacing: '-0.02em' }}>{m.value}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
        </div>
      ))}
    </div>
  )
}

function Tech({ p }: { p: Project }) {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
      {p.tech.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', border: '1px solid var(--line-2)', borderRadius: 2, padding: '4px 9px', letterSpacing: '0.04em' }}>{t}</span>)}
    </div>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="lift" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden' }}>
      <div className="feat-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
        <div style={{ padding: 'clamp(28px, 3.4vw, 46px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>{p.num}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 9, padding: '3px 9px', borderRadius: 2, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', color: 'var(--accent-deep)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Featured</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1, letterSpacing: '-0.025em', marginBottom: 16, color: 'var(--ink)' }}>{p.title}</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 4, padding: '12px 15px', marginBottom: 22 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{p.highlight}</p>
          </div>
          <Metrics p={p} big />
          <Tech p={p} />
          <div style={{ marginTop: 'auto' }}><ProjectCTA p={p} /></div>
        </div>
        <div className="feat-side" style={{ background: 'var(--paper-2)', borderLeft: '1px solid var(--line)', padding: 'clamp(28px, 3.4vw, 46px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {p.testimonial ? (
            <figure>
              <Stars />
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.8vw, 22px)', lineHeight: 1.5, color: 'var(--ink)', marginBottom: 18 }}>“{p.testimonial.body}”</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{p.testimonial.initials}</span>
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{p.testimonial.name}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{p.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 12px', borderRadius: 2, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', color: 'var(--accent-deep)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t}</span>)}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function GridCard({ p }: { p: Project }) {
  return (
    <article className="lift" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)' }}>{p.num}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)' }}>{p.year}</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 12, color: 'var(--ink)' }}>{p.title}</h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
        <Metrics p={p} />
        <Tech p={p} />
        {p.testimonial && (
          <div style={{ borderLeft: '2px solid var(--accent-line)', paddingLeft: 14, marginBottom: 18 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-2)', marginBottom: 6 }}>“{p.testimonial.body}”</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--muted)' }}>{p.testimonial.name} · {p.testimonial.role}</p>
          </div>
        )}
        <div style={{ marginTop: 'auto' }}><ProjectCTA p={p} /></div>
      </div>
    </article>
  )
}

export default function WorksPage() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter')
    if (f && allTags.includes(f)) setActive(f)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (active === 'All') params.delete('filter'); else params.set('filter', active)
    const qs = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? '?' + qs : ''}`)
  }, [active])

  const counts = useMemo(() => {
    const out: Record<string, number> = { All: projects.length }
    for (const t of allTags) { if (t !== 'All') out[t] = projects.filter((p) => p.tags.includes(t)).length }
    return out
  }, [])

  const filtered = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))
  const featured = filtered.filter((p) => p.featured && active === 'All')
  const grid = filtered.filter((p) => !(p.featured && active === 'All'))

  return (
    <>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 190px) clamp(20px, 5vw, 44px) clamp(40px, 6vh, 60px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 72% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 22, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            Selected work
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.035em', color: 'var(--ink)' }}>
              1 of 1.<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>Every time.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 17, lineHeight: 1.7, maxWidth: 380 }}>
              A selection of recent builds. Every one custom, with no templates, no shortcuts and no recycled layouts.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 44 }}>
            {allTags.map((tag) => {
              const sel = active === tag
              const c = counts[tag] ?? 0
              const disabled = c === 0 && tag !== 'All'
              return (
                <button key={tag} onClick={() => setActive(tag)} disabled={disabled} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, padding: '8px 15px', borderRadius: 2,
                  border: `1px solid ${sel ? 'var(--accent)' : 'var(--line-2)'}`,
                  background: sel ? 'var(--accent-soft)' : 'transparent',
                  color: sel ? 'var(--accent-deep)' : 'var(--muted)',
                  cursor: disabled ? 'not-allowed' : 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
                  transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 7, opacity: disabled ? 0.4 : 1,
                }}>
                  {tag}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: sel ? 'var(--accent-deep)' : 'var(--faint)' }}>{c}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trusted strip */}
      <section style={{ padding: '20px clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="eyebrow">Trusted by</span>
          {clientMarks.map((c) => <span key={c} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--ink-2)', letterSpacing: '-0.01em' }}>{c}</span>)}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(40px, 6vh, 64px) clamp(20px, 5vw, 44px) clamp(24px, 4vh, 48px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }} className="stats-banner">
          {heroStats.map((s) => (
            <div key={s.label} style={{ padding: '24px 26px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--ink)', lineHeight: 1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(80px, 12vh, 140px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {featured.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 44 }}>
              {featured.map((p, i) => <Reveal key={p.num} delay={i * 0.06}><FeaturedCard p={p} /></Reveal>)}
            </div>
          )}
          {grid.length > 0 && (
            <>
              {featured.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <span className="eyebrow">More work</span>
                  <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                </div>
              )}
              <div className="works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                {grid.map((p, i) => <Reveal key={p.num} delay={i * 0.05}><GridCard p={p} /></Reveal>)}
              </div>
            </>
          )}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed var(--line-2)', borderRadius: 6 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--ink)', marginBottom: 20 }}>No projects in {active} yet.</p>
              <button onClick={() => setActive('All')} className="btn btn-ghost">Show all projects</button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Your project is next"
        title={<>Your project<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>goes here.</span></>}
        blurb="One call. We scope it, price it flat, and build it right."
      />

      <style>{`
        @media (max-width: 1024px) {
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-side { border-left: none !important; border-top: 1px solid var(--line) !important; }
        }
        @media (max-width: 860px) { .works-grid { grid-template-columns: 1fr !important; } .stats-banner { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 460px) { .stats-banner { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
