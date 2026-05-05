'use client'
import Link from 'next/link'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const projects = [
  {
    num: '01',
    title: 'Liberty Military Housing',
    cat: 'AI Dashboard',
    tag: 'Web App · AI · CMS',
    accent: 'var(--cyan)',
    tech: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    year: '2024',
    desc: 'A centralized AI-driven construction management platform that turned thousands of data points across military housing renovations into a real-time source of truth.',
    result: '60% reduction in support tickets',
    resultLabel: 'Support Tickets',
    highlight: 'Natural language interface — managers ask questions in plain English, the AI returns live data visualizations instantly.',
    tags: ['AI', 'Web App'],
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
    result: '20hrs saved per week',
    resultLabel: 'Admin Time',
    highlight: 'Custom financial module tracks profitability per job in real time — something no off-the-shelf software could provide.',
    tags: ['iOS', 'Web App'],
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
    result: "Tempe's #1 wrap studio",
    resultLabel: 'Market Position',
    highlight: 'EV specialist studio page built to capture the fast-growing Tesla / Rivian wrap market in the Phoenix Valley.',
    tags: ['Web', 'Branding'],
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
    result: '#1 in Scottsdale & Mesa',
    resultLabel: 'Local SEO Rank',
    highlight: 'Subscription plan architecture designed to drive $59–$99/mo recurring revenue directly from the site.',
    tags: ['Web', 'SEO'],
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
    result: '67+ five-star reviews',
    resultLabel: 'Google Reviews',
    highlight: 'Interactive before/after drag comparison built custom — no plugins, no libraries, pure JS.',
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
    result: 'Live on Vercel',
    resultLabel: 'Deployment',
    highlight: 'Structured for local SEO from the ground up — service area pages built to rank city by city.',
    tags: ['Web'],
  },
]

const allTags = ['All', 'Web', 'iOS', 'Web App', 'AI', 'Branding', 'SEO']

export default function WorksPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(active))

  return (
      <>
        {/* ── Header ── */}
        <section style={{ padding: '160px 24px 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div style={{ position: 'absolute', right: '-5%', top: '10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 70%)' }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Selected Work</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 7vw, 100px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
                1 of 1.<br /><span style={{ color: 'var(--orange)' }}>Every time.</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 17, lineHeight: 1.8, maxWidth: 380 }}>
                Every project is custom. No templates, no shortcuts, no recycled layouts. Six clients. Six completely different builds.
              </p>
            </div>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 56 }}>
              {allTags.map(tag => (
                  <button
                      key={tag}
                      onClick={() => setActive(tag)}
                      style={{
                        fontFamily: 'Space Mono, monospace', fontSize: 11,
                        padding: '8px 18px', borderRadius: 999,
                        border: `1px solid ${active === tag ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`,
                        background: active === tag ? 'rgba(0,212,200,0.1)' : 'transparent',
                        color: active === tag ? 'var(--cyan)' : 'var(--text-muted)',
                        cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
                        transition: 'all 0.2s',
                      }}
                  >
                    {tag}
                  </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project list ── */}
        <section style={{ padding: '0 24px 140px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
            {filtered.map((p, i) => (
                <ScrollReveal key={p.num} delay={i * 50}>
                  <div style={{ background: 'var(--navy-mid)', borderLeft: `4px solid ${p.accent}`, overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', alignItems: 'stretch' }} className="project-card-grid">

                      {/* Left: content */}
                      <div style={{ padding: '48px 52px' }}>
                        {/* Meta row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: p.accent }}>{p.num}</span>
                          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)' }} />
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.cat}</span>
                          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.12)' }} />
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)' }}>{p.year}</span>
                        </div>

                        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 20, color: 'var(--off-white)' }}>
                          {p.title}
                        </h2>

                        <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 540, marginBottom: 24 }}>{p.desc}</p>

                        {/* Highlight callout */}
                        <div style={{ background: `rgba(${p.accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.06)`, border: `1px solid rgba(${p.accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.15)`, borderRadius: 8, padding: '12px 16px', marginBottom: 28, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--off-white)', lineHeight: 1.6 }}>{p.highlight}</p>
                        </div>

                        {/* Tech badges */}
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 32 }}>
                          {p.tech.map(t => (
                              <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '4px 10px', letterSpacing: '0.04em' }}>{t}</span>
                          ))}
                        </div>

                        {/* CTA */}
                        {p.url ? (
                            <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1px solid rgba(${p.accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.3)`, color: p.accent, fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '11px 24px', borderRadius: 7, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'background 0.2s' }}>
                              {p.url.includes('apple.com') ? 'View on App Store' : 'Visit Site'}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </a>
                        ) : (
                            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5 }}>Private Client · NDA</span>
                        )}
                      </div>

                      {/* Right: stat panel */}
                      <div style={{ background: 'var(--navy)', borderLeft: '1px solid rgba(255,255,255,0.04)', padding: '48px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                        {/* Ghost number */}
                        <span style={{ position: 'absolute', bottom: -16, right: -4, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 110, color: p.accent === 'var(--cyan)' ? 'rgba(0,212,200,0.04)' : 'rgba(244,98,42,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{p.num}</span>

                        {/* Key result */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Key Result</p>
                          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 40px)', color: p.accent, lineHeight: 1, marginBottom: 6 }}>{p.result}</p>
                          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.resultLabel}</p>
                        </div>

                        {/* Tag pills */}
                        <div style={{ position: 'relative', zIndex: 1, marginTop: 32 }}>
                          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Category</p>
                          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {p.tags.map(t => (
                                <span key={t} style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, padding: '4px 10px', borderRadius: 4, background: `rgba(${p.accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.08)`, border: `1px solid rgba(${p.accent === 'var(--cyan)' ? '0,212,200' : '244,98,42'},0.2)`, color: p.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,212,200,0.012) 20px, rgba(0,212,200,0.012) 40px)' }} />
          <ScrollReveal>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Project 07</p>
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
        .project-card-grid { grid-template-columns: 1fr 320px; }
        @media (max-width: 900px) {
          .project-card-grid { grid-template-columns: 1fr !important; }
          .project-card-grid > div:last-child { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.04) !important; }
        }
        @media (max-width: 600px) {
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
      </>
  )
}