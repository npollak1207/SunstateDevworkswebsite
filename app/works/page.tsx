'use client'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectVisual from '@/components/ProjectVisual'

type Metric = { value: string; label: string }
type Testimonial = { name: string; role: string; body: string; initials: string; rating: number }

type Project = {
  num: string
  title: string
  cat: string
  tag: string
  accent: string
  tech: string[]
  year: string
  url?: string
  repo?: string
  desc: string
  highlight: string
  metrics: Metric[]
  tags: string[]
  testimonial?: Testimonial
  featured?: boolean
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Liberty Military Housing',
    cat: 'AI Dashboard',
    tag: 'Web App · AI · CMS',
    accent: 'var(--cyan)',
    tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    year: '2024',
    desc: 'A centralized AI-driven construction management platform that turned thousands of data points across military housing renovations into a real-time source of truth.',
    highlight: 'Natural language interface — managers ask questions in plain English, the AI returns live data visualizations instantly.',
    metrics: [
      { value: '−60%', label: 'Support Tickets' },
      { value: '10k+', label: 'Housing Units' },
      { value: '4 wks', label: 'Build Time' },
    ],
    tags: ['AI', 'Web App'],
    featured: true,
  },
  {
    num: '02',
    title: 'ELS Platform',
    cat: 'iOS App · Web Dashboard',
    tag: 'SwiftUI · Firebase · Stripe',
    accent: 'var(--orange)',
    tech: ['SwiftUI', 'Firebase', 'Stripe API', 'Mapbox'],
    year: '2024',
    url: 'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624',
    desc: 'A full business-in-a-box iOS app and web dashboard for Easy Landscape Solutions — replacing 5 disconnected apps with one unified platform for scheduling, invoicing, CRM, and real-time P&L tracking.',
    highlight: 'Custom financial module tracks profitability per job in real time — something no off-the-shelf software could provide.',
    metrics: [
      { value: '20 hrs', label: 'Saved Per Week' },
      { value: '5 → 1', label: 'Apps Replaced' },
      { value: 'Live', label: 'On App Store' },
    ],
    tags: ['iOS', 'Web App'],
    testimonial: {
      name: 'Alex M.',
      role: 'Owner, Easy Landscape Solutions',
      body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything. We got back at least 20 hours a week and actually know where our money is going now.',
      initials: 'AM',
      rating: 5,
    },
    featured: true,
  },
  {
    num: '03',
    title: 'Cloak Wraps',
    cat: 'Web · Branding',
    tag: 'Next.js · CSS · Animation',
    accent: 'var(--cyan)',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'CSS'],
    year: '2024',
    url: 'https://www.cloakwraps.com',
    desc: "Premium custom website for Tempe's leading vehicle wrap and PPF studio. Full rebrand with cinematic hero video, animated service pages, and a bespoke quote request flow.",
    highlight: 'EV specialist studio page built to capture the fast-growing Tesla / Rivian wrap market in the Phoenix Valley.',
    metrics: [
      { value: '#1', label: 'Tempe Wrap Studio' },
      { value: 'EV', label: 'Specialist Page' },
    ],
    tags: ['Web', 'Branding'],
    testimonial: {
      name: 'Zach H.',
      role: 'Owner, Cloak Wraps',
      body: 'I wanted something that looked as premium as the work we do on cars. They nailed it. The site is clean, fast, and gets compliments from customers before they even walk in the door.',
      initials: 'ZH',
      rating: 5,
    },
  },
  {
    num: '04',
    title: 'Zona Pest Solutions',
    cat: 'Web · SEO',
    tag: 'Next.js · SEO · FieldRoutes',
    accent: 'var(--orange)',
    tech: ['Next.js', 'TypeScript', 'FieldRoutes API', 'SEO'],
    year: '2024',
    url: 'https://www.zonapestsolutions.com',
    desc: "Modern website and SEO strategy for Scottsdale and Mesa's top-rated pest control company. Built to rank, convert, and integrate with their FieldRoutes customer portal.",
    highlight: 'Subscription plan architecture designed to drive $59–$99/mo recurring revenue directly from the site.',
    metrics: [
      { value: '#1', label: 'Scottsdale & Mesa' },
      { value: '$59+', label: 'Monthly Plans' },
    ],
    tags: ['Web', 'SEO'],
    testimonial: {
      name: 'Billy W.',
      role: 'Owner, Zona Pest Solutions',
      body: 'The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa in a few months. These guys know what they\'re doing.',
      initials: 'BW',
      rating: 5,
    },
  },
  {
    num: '05',
    title: 'Easy Landscape Solutions',
    cat: 'Web · Branding',
    tag: 'HTML · CSS · JS',
    accent: 'var(--cyan)',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    year: '2024',
    url: 'https://www.easylandscapesolutions.com',
    desc: 'Full rebrand and custom site for a Gilbert, AZ hardscape and artificial turf company. Before/after drag slider, consultation form with photo uploads, and ROC license trust signals.',
    highlight: 'Interactive before/after drag comparison built custom — no plugins, no libraries, pure JS.',
    metrics: [
      { value: '67+', label: 'Five-Star Reviews' },
      { value: 'ROC', label: 'Licensed Trust' },
    ],
    tags: ['Web', 'Branding'],
  },
  {
    num: '06',
    title: 'Canyon Cleaning Solutions',
    cat: 'Web',
    tag: 'Next.js · CSS',
    accent: 'var(--orange)',
    tech: ['Next.js', 'TypeScript', 'CSS'],
    year: '2025',
    url: 'https://canyon-cleaning-solutions-tmr5.vercel.app',
    desc: 'Clean, conversion-focused website for a residential and commercial cleaning company. Service area pages, instant quote request flow, and trust-building social proof sections.',
    highlight: 'Structured for local SEO from the ground up — service area pages built to rank city by city.',
    metrics: [
      { value: '5', label: 'Service Areas' },
      { value: 'Live', label: 'On Vercel' },
    ],
    tags: ['Web'],
  },
  {
    num: '07',
    title: 'The Mystical Universe',
    cat: 'Web App · iOS App',
    tag: 'Next.js · SwiftUI · Supabase',
    accent: 'var(--cyan)',
    tech: ['Next.js 16', 'SwiftUI', 'Supabase', 'LiveKit'],
    year: '2025',
    url: 'https://www.justmystical.com',
    repo: 'https://github.com/npollak1207/mystical-universe',
    desc: 'A two-platform fan universe for a YouTube channel — part editorial magazine, part TMDB-powered review hub, part Discord-style community with live watch parties. One Supabase backend powers a Next.js web app and a native SwiftUI iOS app with full feature parity.',
    highlight: 'Web and iOS share a single Postgres backend governed by row-level security — plus LiveKit voice/video watch parties with native CallKit on iOS.',
    metrics: [
      { value: '2', label: 'Native Clients' },
      { value: '1', label: 'Shared Backend' },
      { value: 'Live', label: 'Watch Parties' },
    ],
    tags: ['Web App', 'iOS', 'AI'],
    featured: true,
  },
  {
    num: '08',
    title: 'MyFlix',
    cat: 'Web App · Streaming',
    tag: 'React · Vite · Jellyfin',
    accent: 'var(--orange)',
    tech: ['React', 'TypeScript', 'Vite', 'Jellyfin'],
    year: '2025',
    url: 'https://myflix-steel-six.vercel.app',
    repo: 'https://github.com/npollak1207/myflix',
    desc: 'A private, self-hosted "Netflix for yourself" — a cinematic streaming front-end built over a Jellyfin media server. Adaptive 4K HLS playback, dynamic color theming, Continue Watching, collections, and a polished custom player.',
    highlight: 'Custom React UI over Jellyfin delivers 4K adaptive HLS, skip-intro, and autoplay-next — reachable privately over Tailscale with zero public ports.',
    metrics: [
      { value: '4K', label: 'Adaptive HLS' },
      { value: '0', label: 'Public Ports' },
      { value: 'Self-Host', label: 'Private' },
    ],
    tags: ['Web App'],
  },
  {
    num: '09',
    title: 'DWGS',
    cat: 'Web · Branding',
    tag: 'Next.js · Tailwind',
    accent: 'var(--cyan)',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: '2025',
    url: 'https://www.dwgsusa.com',
    desc: 'Bold, military-inspired marketing site for a property maintenance and renovation contractor specializing in military housing and multifamily portfolios. Split-screen hero, services grid, and industry pages built to win over property managers.',
    highlight: 'Stencil-and-olive brand system engineered to read as rugged and dependable — anchored by their 15+ year military-housing specialty and nationwide reach.',
    metrics: [
      { value: '15+', label: 'Years Experience' },
      { value: '10', label: 'Service Lines' },
    ],
    tags: ['Web', 'Branding'],
  },
  {
    num: '10',
    title: 'Canyon Supply Co',
    cat: 'E-Commerce · SEO',
    tag: 'Next.js · Supabase · Stripe',
    accent: 'var(--orange)',
    tech: ['Next.js', 'Supabase', 'Stripe', 'SEO'],
    year: '2025',
    url: 'https://canyonsupplyco.vercel.app',
    desc: 'Full e-commerce storefront for a Phoenix cleaning-equipment supplier — pressure washers, jetters, chemicals, and parts. Product catalog, cart, Stripe checkout, blog, and an admin dashboard, all built for local search.',
    highlight: 'Authorized-dealer catalog with Supabase-backed inventory and Stripe checkout — structured for Phoenix-area local SEO from the ground up.',
    metrics: [
      { value: '20+', label: 'Years In Phoenix' },
      { value: 'Stripe', label: 'Live Checkout' },
    ],
    tags: ['Web', 'SEO'],
  },
]

const allTags = ['All', 'Web', 'iOS', 'Web App', 'AI', 'Branding', 'SEO']

const clientMarks = [
  'Liberty Military Housing',
  'Easy Landscape Solutions',
  'Cloak Wraps',
  'Zona Pest Solutions',
  'Canyon Cleaning',
  'DWGS',
  'Canyon Supply Co',
]

const heroStats = [
  { num: '10', label: 'Projects Shipped' },
  { num: '4.9★', label: 'Avg Rating' },
  { num: '<1.2s', label: 'Avg Load Time' },
  { num: '100%', label: 'Custom Code' },
]

function colorRgb(accent: string) {
  return accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'
}

function TestimonialBlock({ t, accent }: { t: Testimonial; accent: string }) {
  const rgb = colorRgb(accent)
  return (
    <div style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.12)`, borderRadius: 10, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 40, height: 40, borderRadius: '50%', background: `rgba(${rgb},0.15)`, border: `1px solid rgba(${rgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, color: accent, letterSpacing: '0.02em' }}>{t.initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={accent} stroke="none"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" /></svg>
          ))}
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--off-white)', lineHeight: 1.65, marginBottom: 8, fontStyle: 'italic' }}>&ldquo;{t.body}&rdquo;</p>
        <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          <span style={{ color: 'var(--off-white)' }}>{t.name}</span> · {t.role}
        </p>
      </div>
    </div>
  )
}

function ProjectCTA({ p }: { p: Project }) {
  const rgb = colorRgb(p.accent)
  if (!p.url && !p.repo) {
    return <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.6 }}>Private Client · NDA</span>
  }
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      {p.url && (
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1px solid rgba(${rgb},0.35)`, color: p.accent, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '11px 24px', borderRadius: 7, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', background: `rgba(${rgb},0.04)`, transition: 'background 0.2s, transform 0.2s' }}>
          {p.url.includes('apple.com') ? 'View on App Store' : 'Visit Site'}
          <svg className="project-cta-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '11px 22px', borderRadius: 7, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.02)', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
          View Code
        </a>
      )}
    </div>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  const rgb = colorRgb(p.accent)
  return (
    <article className="project-card featured-card" style={{ background: 'var(--navy-mid)', borderLeft: `4px solid ${p.accent}`, borderRadius: '0 12px 12px 0', overflow: 'hidden', position: 'relative' }}>
      <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 0, alignItems: 'stretch' }}>
        {/* Left: content */}
        <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent, fontWeight: 600 }}>{p.num}</span>
            <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
            <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)' }}>{p.year}</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'Space Mono, monospace', fontSize: 9, padding: '3px 9px', borderRadius: 999, background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.25)`, color: p.accent, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Featured</span>
          </div>

          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(30px, 3.2vw, 46px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 18, color: 'var(--off-white)' }}>{p.title}</h2>

          <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75, marginBottom: 22 }}>{p.desc}</p>

          <div style={{ background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.15)`, borderRadius: 8, padding: '12px 16px', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--off-white)', lineHeight: 1.6 }}>{p.highlight}</p>
          </div>

          {/* Metric stack */}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`, gap: 16, marginBottom: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {p.metrics.map((m, i) => (
              <div key={m.label} style={{ paddingRight: i < p.metrics.length - 1 ? 16 : 0, borderRight: i < p.metrics.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(22px, 2.4vw, 30px)', color: p.accent, lineHeight: 1, marginBottom: 6 }}>{m.value}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 22 }}>
            {p.tech.map(t => (
              <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '4px 10px', letterSpacing: '0.04em' }}>{t}</span>
            ))}
          </div>

          <div style={{ marginTop: 'auto' }}>
            <ProjectCTA p={p} />
          </div>
        </div>

        {/* Right: visual + testimonial */}
        <div style={{ background: 'var(--navy)', borderLeft: '1px solid rgba(255,255,255,0.04)', padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 22, position: 'relative', overflow: 'hidden' }}>
          <span className="ghost-num" style={{ position: 'absolute', bottom: -28, right: -8, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 200, color: `rgba(${rgb},0.04)`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none', transition: 'color 0.3s ease' }}>{p.num}</span>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <ProjectVisual num={p.num} accent={p.accent} variant="featured" />
          </div>
          {p.testimonial && (
            <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
              <TestimonialBlock t={p.testimonial} accent={p.accent} />
            </div>
          )}
          {!p.testimonial && (
            <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, padding: '5px 11px', borderRadius: 4, background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.2)`, color: p.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function GridCard({ p }: { p: Project }) {
  const rgb = colorRgb(p.accent)
  return (
    <article className="project-card grid-card" style={{ background: 'var(--navy-mid)', borderLeft: `4px solid ${p.accent}`, borderRadius: '0 10px 10px 0', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <span className="ghost-num" style={{ position: 'absolute', top: 10, right: 16, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 64, color: `rgba(${rgb},0.05)`, lineHeight: 1, pointerEvents: 'none', userSelect: 'none', transition: 'color 0.3s ease' }}>{p.num}</span>

      <div style={{ padding: '28px 28px 0', position: 'relative', zIndex: 1 }}>
        <ProjectVisual num={p.num} accent={p.accent} variant="compact" />
      </div>

      <div style={{ padding: '20px 28px 28px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent }}>{p.num}</span>
          <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.12)' }} />
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)' }}>{p.year}</span>
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 24, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 12, color: 'var(--off-white)' }}>{p.title}</h2>

        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>

        {/* Metrics inline */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 16, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 0' }}>
          {p.metrics.map((m, i) => (
            <div key={m.label} style={{ flex: 1, paddingLeft: i > 0 ? 16 : 0, borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: p.accent, lineHeight: 1, marginBottom: 4 }}>{m.value}</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 16 }}>
          {p.tech.map(t => (
            <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '3px 8px', letterSpacing: '0.04em' }}>{t}</span>
          ))}
        </div>

        {p.testimonial && (
          <div style={{ marginBottom: 16 }}>
            <TestimonialBlock t={p.testimonial} accent={p.accent} />
          </div>
        )}

        <div style={{ marginTop: 'auto' }}>
          <ProjectCTA p={p} />
        </div>
      </div>
    </article>
  )
}

export default function WorksPage() {
  const [active, setActive] = useState('All')

  // Hydrate filter from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter')
    if (f && allTags.includes(f)) setActive(f)
  }, [])

  // Push filter to URL without navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (active === 'All') params.delete('filter')
    else params.set('filter', active)
    const qs = params.toString()
    const next = `${window.location.pathname}${qs ? '?' + qs : ''}`
    window.history.replaceState(null, '', next)
  }, [active])

  const counts = useMemo(() => {
    const out: Record<string, number> = { All: projects.length }
    for (const t of allTags) {
      if (t === 'All') continue
      out[t] = projects.filter(p => p.tags.includes(t)).length
    }
    return out
  }, [])

  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active))
  const featured = filtered.filter(p => p.featured && active === 'All')
  const grid = filtered.filter(p => !(p.featured && active === 'All'))

  return (
      <>
        {/* ── Header ── */}
        <section style={{ padding: '160px 24px 60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 70%)' }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Selected Work</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
                1 of 1.<br /><span style={{ color: 'var(--orange)' }}>Every time.</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 380 }}>
                Every project is custom. No templates, no shortcuts, no recycled layouts. Ten projects. Ten completely different builds.
              </p>
            </div>

            {/* Filter tabs with counts */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 48 }}>
              {allTags.map(tag => {
                const sel = active === tag
                const c = counts[tag] ?? 0
                return (
                  <button
                    key={tag}
                    onClick={() => setActive(tag)}
                    className="filter-tab"
                    data-active={sel}
                    disabled={c === 0 && tag !== 'All'}
                    style={{
                      fontFamily: 'Space Mono, monospace', fontSize: 11,
                      padding: '8px 16px', borderRadius: 999,
                      border: `1px solid ${sel ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`,
                      background: sel ? 'rgba(0,212,200,0.1)' : 'transparent',
                      color: sel ? 'var(--cyan)' : 'var(--text-muted)',
                      cursor: c === 0 && tag !== 'All' ? 'not-allowed' : 'pointer',
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      transition: 'all 0.2s',
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      opacity: c === 0 && tag !== 'All' ? 0.35 : 1,
                    }}
                  >
                    {tag}
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, padding: '1px 6px', borderRadius: 999, background: sel ? 'rgba(0,212,200,0.18)' : 'rgba(255,255,255,0.05)', color: sel ? 'var(--cyan)' : 'var(--text-muted)' }}>{c}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Trusted by strip ── */}
        <section style={{ padding: '24px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(13,27,42,0.4)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Trusted by</span>
            {clientMarks.map((c, i) => (
              <span key={c} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--off-white)', opacity: 0.55, letterSpacing: '-0.01em', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)', paddingLeft: i === 0 ? 0 : 28 }}>{c}</span>
            ))}
          </div>
        </section>

        {/* ── Stats banner ── */}
        <section style={{ padding: '40px 24px 60px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', background: 'var(--navy-mid)' }} className="stats-banner">
            {heroStats.map((s, i) => (
              <div key={s.label} style={{ padding: '24px 28px', borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Project list ── */}
        <section style={{ padding: '0 24px 140px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Featured projects (only on "All") */}
            {featured.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
                {featured.map((p, i) => (
                  <ScrollReveal key={p.num} delay={i * 60}>
                    <FeaturedCard p={p} />
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Grid projects */}
            {grid.length > 0 && (
              <>
                {featured.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>More Work</span>
                    <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(0,212,200,0.2), transparent)' }} />
                  </div>
                )}
                <div className="works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                  {grid.map((p, i) => (
                    <ScrollReveal key={p.num} delay={i * 50}>
                      <GridCard p={p} />
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 20px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 12, background: 'rgba(255,255,255,0.02)' }}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--off-white)', marginBottom: 10 }}>No projects in <span style={{ color: 'var(--cyan)' }}>{active}</span> yet.</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>This could be your project. Let&apos;s talk.</p>
                <button onClick={() => setActive('All')} style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, padding: '10px 22px', borderRadius: 999, border: '1px solid rgba(0,212,200,0.3)', background: 'rgba(0,212,200,0.06)', color: 'var(--cyan)', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Show All Projects</button>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.012) 20px, rgba(0,212,200,0.012) 40px)' }} />
          <ScrollReveal>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Project 11</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 28 }}>
                Your project<br /><span style={{ color: 'var(--orange)' }}>goes here.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 400, margin: '0 auto 40px', lineHeight: 1.75 }}>
                One call. We scope it, price it flat, and build it right.
              </p>
              <Link href="/contact" className="glow-pulse" style={{ display: 'inline-block', background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '18px 48px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Start a Project →
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <style>{`
          /* Filter tabs */
          .filter-tab:not([data-active="true"]):hover:not(:disabled) {
            border-color: rgba(0,212,200,0.35) !important;
            color: var(--off-white) !important;
          }

          /* Card hover */
          .project-card {
            transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .project-card:hover {
            transform: translateY(-4px);
          }
          .featured-card:hover {
            box-shadow: 0 14px 50px rgba(0,212,200,0.10), 0 0 0 1px rgba(0,212,200,0.08);
          }
          .grid-card:hover {
            box-shadow: 0 10px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
          }
          .project-card:hover .ghost-num {
            color: rgba(0,212,200,0.10) !important;
          }
          .project-card:hover .project-cta {
            background: rgba(0,212,200,0.1) !important;
          }
          .project-cta:hover .project-cta-arrow {
            transform: translate(2px, -2px);
            transition: transform 0.2s ease;
          }

          /* Featured layout — stack on tablet */
          @media (max-width: 1024px) {
            .featured-grid { grid-template-columns: 1fr !important; }
            .featured-grid > div:last-child { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; }
          }

          /* Grid — stack on tablet */
          @media (max-width: 900px) {
            .works-grid { grid-template-columns: 1fr !important; }
            .stats-banner { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-banner > div:nth-child(2) { border-right: none !important; }
            .stats-banner > div:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.06); }
          }

          @media (max-width: 600px) {
            section { padding-left: 16px !important; padding-right: 16px !important; }
            .stats-banner { grid-template-columns: 1fr !important; }
            .stats-banner > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
            .stats-banner > div:last-child { border-bottom: none !important; }
          }
        `}</style>
      </>
  )
}