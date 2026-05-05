'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// ── Eased counter ──────────────────────────────────────────────────────────────
function useCounter(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, trigger])
  return count
}

// ── SVG icon library ───────────────────────────────────────────────────────────
const IC = {
  Code:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  File:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Shield: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  Pin:    () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Zap:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Check:  () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Arrow:  () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Phone:  () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.2a2 2 0 012-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.2a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  TrendUp:() => <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  Web:    () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Mobile: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round"/></svg>,
  AI:     () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  Brand:  () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
}

const MQ1 = ['Web Development','◆','Mobile Apps','◆','Branding','◆','AI & Automation','◆','Next.js','◆','SwiftUI','◆','Custom Code','◆','No Templates','◆','You Own It','◆','Gilbert AZ','◆']
const MQ2 = ['Hand-Coded','◇','100% Custom','◇','No Lock-In','◇','TypeScript','◇','Supabase','◇','Stripe','◇','Fast Delivery','◇','Claude API','◇','n8n','◇','React Native','◇']
const loop = (a: string[]) => [...a,...a,...a]

// ── Page ───────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [scrolled,   setScrolled]   = useState(false)
  const [progress,   setProgress]   = useState(0)
  const [statsVis,   setStatsVis]   = useState(false)
  const [chartReady, setChartReady] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const statsRef  = useRef<HTMLDivElement>(null)
  const glowRef   = useRef<HTMLDivElement>(null)
  const glowT     = useRef({ x:0, y:0 })
  const glowC     = useRef({ x:0, y:0 })

  const c1 = useCounter(47,  2000, statsVis)
  const c2 = useCounter(100, 1800, statsVis)
  const c3 = useCounter(50,  1500, statsVis)
  const c4 = useCounter(3,   1200, statsVis)

  // Scroll progress
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(window.scrollY / total)
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lerped mouse spotlight
  useEffect(() => {
    const onMove = (e: MouseEvent) => { glowT.current = { x: e.clientX, y: e.clientY } }
    let raf: number
    const tick = () => {
      const t = glowT.current, c = glowC.current
      c.x += (t.x - c.x) * 0.05
      c.y += (t.y - c.y) * 0.05
      if (glowRef.current) {
        glowRef.current.style.left = `${c.x}px`
        glowRef.current.style.top  = `${c.y}px`
      }
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  // Stats observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVis(true) }, { threshold: 0.25 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  // Chart draw trigger
  useEffect(() => { const t = setTimeout(() => setChartReady(true), 900); return () => clearTimeout(t) }, [])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('lp-in') }),
      { threshold: 0.07, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.lp-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, company: '',
          service: form.service, budget: 'Google Ads Lead',
          message: `Phone: ${form.phone || 'Not provided'}\n\n${form.message}`,
        }),
      })
      setStatus(r.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        /* ── Animations ── */
        @keyframes lp-blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(50px,-35px) scale(1.07)} 66%{transform:translate(-30px,45px) scale(0.94)} }
        @keyframes lp-blob2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-55px,25px) scale(1.09)} 70%{transform:translate(35px,-40px) scale(0.93)} }
        @keyframes lp-blob3 { 0%,100%{transform:translate(0,0) scale(1)} 55%{transform:translate(45px,35px) scale(1.05)} }
        @keyframes lp-fade-up   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lp-badge-in  { from{opacity:0;transform:translateY(-12px) scale(0.95)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes lp-dot-pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
        @keyframes lp-shine     { from{background-position:200% center} to{background-position:-200% center} }
        @keyframes lp-mock-float{ 0%,100%{transform:translateY(0) rotate(-1.5deg)} 50%{transform:translateY(-18px) rotate(-1.5deg)} }
        @keyframes lp-badge-a   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes lp-badge-b   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes lp-badge-c   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes lp-chart-draw{ from{stroke-dashoffset:420} to{stroke-dashoffset:0} }
        @keyframes lp-pt-pulse  { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes lp-live-blink{ 0%,100%{opacity:1;box-shadow:0 0 6px var(--cyan)} 50%{opacity:0.4;box-shadow:none} }
        @keyframes lp-spin-border{ to{transform:rotate(360deg)} }
        @keyframes lp-bar-fill  { from{width:0} to{width:100%} }
        @keyframes lp-progress-glow { 0%,100%{box-shadow:0 0 6px rgba(0,212,200,0.5)} 50%{box-shadow:0 0 12px rgba(244,98,42,0.5)} }
        @keyframes lp-count-in  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

        .lp-blob-1 { animation:lp-blob1 24s ease-in-out infinite; }
        .lp-blob-2 { animation:lp-blob2 30s ease-in-out infinite; }
        .lp-blob-3 { animation:lp-blob3 20s ease-in-out infinite; }
        .lp-hero-tag  { animation:lp-badge-in 0.5s ease both; }
        .lp-hero-h1   { animation:lp-fade-up 0.7s ease 0.15s both; }
        .lp-hero-sub  { animation:lp-fade-up 0.7s ease 0.30s both; }
        .lp-hero-btns { animation:lp-fade-up 0.7s ease 0.45s both; }
        .lp-hero-trust{ animation:lp-fade-up 0.7s ease 0.60s both; }
        .lp-mock-float{ animation:lp-mock-float 6s ease-in-out infinite; transform-origin:center; }
        .lp-ba { animation:lp-badge-a 4s ease-in-out infinite; }
        .lp-bb { animation:lp-badge-b 5.5s ease-in-out 0.8s infinite; }
        .lp-bc { animation:lp-badge-c 3.8s ease-in-out 0.4s infinite; }
        .lp-dot-live { animation:lp-live-blink 1.8s ease-in-out infinite; }
        .lp-dot-pulse{ animation:lp-dot-pulse 2s ease-in-out infinite; }
        .lp-data-pt  { animation:lp-pt-pulse 2.2s ease-in-out infinite; }
        .lp-data-pt:nth-child(2){ animation-delay:0.5s }
        .lp-data-pt:nth-child(3){ animation-delay:1s }
        .lp-data-pt:nth-child(4){ animation-delay:1.5s }

        /* Chart line */
        .lp-chart-path { stroke-dasharray:420; stroke-dashoffset:420; }
        .lp-chart-path.lp-chart-on { animation:lp-chart-draw 2s cubic-bezier(0.4,0,0.2,1) forwards; }

        /* Reveal */
        .lp-reveal { opacity:0; transform:translateY(24px); transition:opacity 0.65s ease,transform 0.65s ease; }
        .lp-reveal.lp-in { opacity:1; transform:translateY(0); }
        .lp-stagger > .lp-reveal:nth-child(1){ transition-delay:0s }
        .lp-stagger > .lp-reveal:nth-child(2){ transition-delay:0.08s }
        .lp-stagger > .lp-reveal:nth-child(3){ transition-delay:0.16s }
        .lp-stagger > .lp-reveal:nth-child(4){ transition-delay:0.24s }

        /* Shimmer headline */
        .lp-shine {
          background:linear-gradient(90deg,var(--cyan) 0%,#f0ede6 28%,var(--cyan) 52%,var(--cyan) 100%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:lp-shine 4s linear infinite;
        }

        /* Header */
        .lp-header {
          position:fixed; top:0; left:0; right:0; z-index:100;
          padding:20px 24px;
          transition:background 0.3s ease,padding 0.3s ease,backdrop-filter 0.3s ease;
        }
        .lp-header.lp-scrolled {
          padding:12px 24px;
          background:rgba(13,27,42,0.96);
          border-bottom:1px solid rgba(0,212,200,0.12);
          backdrop-filter:blur(24px);
        }

        /* Grid background */
        .lp-grid-bg {
          background-image:
            linear-gradient(rgba(0,212,200,0.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(0,212,200,0.03) 1px,transparent 1px);
          background-size:64px 64px;
        }

        /* Primary CTA */
        .lp-btn-p {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--orange); color:#fff;
          font-family:'Syne',sans-serif; font-weight:800;
          font-size:15px; letter-spacing:0.06em; text-transform:uppercase;
          padding:15px 32px; border-radius:8px;
          text-decoration:none; border:none; cursor:pointer;
          transition:transform 0.2s ease,box-shadow 0.2s ease;
          animation:glowPulse 3s ease-in-out infinite;
          white-space:nowrap;
        }
        .lp-btn-p:hover  { transform:translateY(-2px); box-shadow:0 14px 44px rgba(244,98,42,0.45); }
        .lp-btn-p:active { transform:scale(0.97); }

        /* Secondary CTA */
        .lp-btn-s {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:var(--cyan);
          border:1.5px solid rgba(0,212,200,0.35);
          font-family:'Syne',sans-serif; font-weight:700;
          font-size:15px; letter-spacing:0.06em; text-transform:uppercase;
          padding:15px 32px; border-radius:8px; text-decoration:none;
          transition:background 0.2s ease,border-color 0.2s ease,transform 0.2s ease;
          white-space:nowrap;
        }
        .lp-btn-s:hover  { background:rgba(0,212,200,0.07); border-color:rgba(0,212,200,0.6); transform:translateY(-2px); }
        .lp-btn-s:active { transform:scale(0.97); }

        /* Stat cards */
        .lp-stat-card {
          border:1px solid rgba(255,255,255,0.06); background:rgba(19,34,53,0.5);
          border-radius:12px; backdrop-filter:blur(12px);
          transition:transform 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease;
          overflow:hidden;
        }
        .lp-stat-card:hover { transform:translateY(-4px); border-color:rgba(0,212,200,0.25); box-shadow:0 12px 40px rgba(0,212,200,0.08); }

        /* Stat animated bar */
        .lp-stat-bar { height:2px; border-radius:1px; }
        .lp-stat-bar.lp-bar-on { animation:lp-bar-fill 1.6s cubic-bezier(0.4,0,0.2,1) forwards; }

        /* Service cards */
        .lp-svc-card {
          background:var(--navy-mid); border:1px solid rgba(255,255,255,0.06);
          border-left:3px solid var(--cyan); position:relative; overflow:hidden;
          transition:transform 0.3s ease,box-shadow 0.3s ease;
        }
        .lp-svc-card.or { border-left-color:var(--orange); }
        .lp-svc-card:hover { transform:translateY(-5px); box-shadow:0 20px 60px rgba(0,212,200,0.1); }
        .lp-svc-card.or:hover { box-shadow:0 20px 60px rgba(244,98,42,0.1); }

        /* Project cards */
        .lp-proj-card {
          background:var(--navy-mid); border:1px solid rgba(255,255,255,0.07);
          border-top:3px solid var(--cyan); overflow:hidden;
          transition:transform 0.3s ease,box-shadow 0.3s ease;
        }
        .lp-proj-card.or { border-top-color:var(--orange); }
        .lp-proj-card:hover { transform:translateY(-6px); box-shadow:0 24px 64px rgba(0,212,200,0.12); }
        .lp-proj-card.or:hover { box-shadow:0 24px 64px rgba(244,98,42,0.12); }

        /* Testimonial cards */
        .lp-testi-card {
          background:var(--navy-mid); border:1px solid rgba(255,255,255,0.07);
          transition:transform 0.3s ease,box-shadow 0.3s ease;
        }
        .lp-testi-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(0,0,0,0.2); }

        /* Why cards */
        .lp-why-card {
          background:rgba(19,34,53,0.5); border:1px solid rgba(255,255,255,0.06);
          border-radius:12px;
          transition:transform 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease;
        }
        .lp-why-card:hover { transform:translateY(-5px); border-color:rgba(0,212,200,0.2); box-shadow:0 16px 48px rgba(0,212,200,0.07); }
        .lp-why-icon-wrap { transition:transform 0.3s ease,box-shadow 0.3s ease; }
        .lp-why-card:hover .lp-why-icon-wrap { transform:translateY(-2px); }

        /* Rotating border on form */
        .lp-form-border {
          position:relative; border-radius:17px; padding:1.5px; overflow:hidden;
        }
        .lp-form-border::before {
          content:'';
          position:absolute; inset:-80%;
          background:conic-gradient(from 0deg at 50% 50%,transparent 0deg,transparent 100deg,rgba(0,212,200,0.5) 160deg,rgba(244,98,42,0.4) 220deg,transparent 280deg,transparent 360deg);
          animation:lp-spin-border 7s linear infinite;
        }
        .lp-form-inner {
          position:relative; z-index:1;
          background:var(--navy-mid); border-radius:16px;
        }

        /* Inputs */
        .lp-input {
          width:100%; background:rgba(13,27,42,0.8);
          border:1px solid rgba(255,255,255,0.09); border-radius:8px;
          padding:13px 16px; color:var(--off-white);
          font-family:'DM Sans',sans-serif; font-size:15px;
          outline:none; transition:border-color 0.2s ease,box-shadow 0.2s ease,background 0.2s ease;
        }
        .lp-input:focus { border-color:var(--cyan); box-shadow:0 0 0 3px rgba(0,212,200,0.09); background:rgba(0,212,200,0.02); }
        .lp-input::placeholder { color:var(--text-muted); }
        .lp-input option { background:var(--navy-mid); color:var(--off-white); }

        /* Submit */
        .lp-submit {
          width:100%; background:var(--orange); color:#fff; border:none;
          border-radius:8px; padding:16px; cursor:pointer;
          font-family:'Syne',sans-serif; font-weight:800;
          font-size:16px; letter-spacing:0.07em; text-transform:uppercase;
          transition:transform 0.2s ease,box-shadow 0.2s ease;
          animation:glowPulse 3s ease-in-out infinite;
        }
        .lp-submit:hover  { transform:translateY(-2px); box-shadow:0 14px 44px rgba(244,98,42,0.45); }
        .lp-submit:active { transform:scale(0.97); }
        .lp-submit:disabled { opacity:0.6; cursor:not-allowed; transform:none; animation:none; }

        /* Responsive */
        @media(max-width:1024px){
          .lp-hero-split { grid-template-columns:1fr !important; }
          .lp-hero-vis   { display:none !important; }
        }
        @media(max-width:900px){
          .lp-svc-grid  { grid-template-columns:1fr !important; }
          .lp-proj-grid { grid-template-columns:1fr !important; }
          .lp-why-grid  { grid-template-columns:1fr 1fr !important; }
          .lp-form-split{ grid-template-columns:1fr !important; }
          .lp-testi-grid{ grid-template-columns:1fr !important; }
          .lp-stats-grid{ grid-template-columns:1fr 1fr !important; }
          .lp-proc-grid { grid-template-columns:1fr 1fr !important; }
          .lp-proc-line { display:none !important; }
        }
        @media(max-width:640px){
          .lp-btns-row  { flex-direction:column !important; align-items:stretch !important; }
          .lp-trust-row { flex-direction:column !important; align-items:flex-start !important; gap:8px !important; }
          .lp-tsep      { display:none !important; }
          .lp-why-grid  { grid-template-columns:1fr !important; }
          .lp-proc-grid { grid-template-columns:1fr !important; }
          .lp-hdr-phone { display:none !important; }
        }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <div style={{
        position:'fixed', top:0, left:0, zIndex:200,
        height:2,
        background:'linear-gradient(90deg,var(--cyan),var(--orange))',
        width:`${progress * 100}%`,
        transition:'width 0.08s linear',
        boxShadow:'0 0 8px rgba(0,212,200,0.6)',
        animation:'lp-progress-glow 3s ease-in-out infinite',
      }} />

      {/* ── HEADER ── */}
      <header className={`lp-header${scrolled?' lp-scrolled':''}`}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Image src="/logo.png" alt="Sunstate DevWorks" width={148} height={38} style={{objectFit:'contain'}} priority />
          <div style={{display:'flex',alignItems:'center',gap:20}}>
            <a className="lp-hdr-phone" href="tel:+14807939161" style={{fontFamily:'Space Mono,monospace',fontSize:13,color:'var(--off-white)',textDecoration:'none',display:'flex',alignItems:'center',gap:6}}>
              <IC.Phone />(480) 793-9161
            </a>
            <a href="#contact-form" className="lp-btn-p" style={{padding:'10px 20px',fontSize:13,animation:'none'}}>
              Free Quote →
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="lp-grid-bg" style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:'120px 24px 80px',position:'relative',overflow:'hidden'}}>
        {/* Mouse spotlight */}
        <div ref={glowRef} style={{position:'fixed',top:0,left:0,width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.06) 0%,transparent 65%)',transform:'translate(-50%,-50%)',pointerEvents:'none',zIndex:0,transition:'none'}} />

        {/* Background blobs */}
        <div className="lp-blob-1" style={{position:'absolute',top:'-10%',left:'-5%',width:900,height:900,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.1) 0%,transparent 70%)',pointerEvents:'none',zIndex:0}} />
        <div className="lp-blob-2" style={{position:'absolute',bottom:'-12%',right:'-6%',width:720,height:720,borderRadius:'50%',background:'radial-gradient(circle,rgba(244,98,42,0.08) 0%,transparent 70%)',pointerEvents:'none',zIndex:0}} />
        <div className="lp-blob-3" style={{position:'absolute',top:'30%',right:'18%',width:420,height:420,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.055) 0%,transparent 70%)',pointerEvents:'none',zIndex:0}} />

        {/* Vertical accent line */}
        <div style={{position:'absolute',top:0,right:'28%',width:1,height:'100%',background:'linear-gradient(to bottom,transparent,rgba(0,212,200,0.07) 30%,rgba(244,98,42,0.05) 70%,transparent)',pointerEvents:'none',zIndex:0}} />

        <div className="lp-hero-split" style={{maxWidth:1200,margin:'0 auto',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>

          {/* Left: Text */}
          <div>
            <div className="lp-hero-tag" style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(0,212,200,0.06)',border:'1px solid rgba(0,212,200,0.2)',borderRadius:999,padding:'6px 16px',marginBottom:32}}>
              <span className="lp-dot-pulse" style={{width:6,height:6,borderRadius:'50%',background:'var(--cyan)',display:'inline-block',boxShadow:'0 0 8px var(--cyan)'}} />
              <span style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--cyan)',letterSpacing:'0.12em',textTransform:'uppercase'}}>Gilbert, AZ · Available Now</span>
            </div>

            <h1 className="lp-hero-h1" style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(44px,6vw,86px)',lineHeight:1.0,letterSpacing:'-0.025em',marginBottom:24}}>
              Your Website<br/>Should Work<br/><span className="lp-shine">As Hard As You</span>
            </h1>

            <p className="lp-hero-sub" style={{fontFamily:'DM Sans,sans-serif',fontSize:'clamp(16px,1.8vw,19px)',color:'var(--text-muted)',lineHeight:1.85,maxWidth:480,marginBottom:40}}>
              Hand-coded custom websites, mobile apps, and AI tools — by Arizona&apos;s top dev team.
              No templates. No bloat.{' '}
              <strong style={{color:'var(--off-white)'}}>You own 100% of the code.</strong>
            </p>

            <div className="lp-hero-btns lp-btns-row" style={{display:'flex',gap:14,marginBottom:44,flexWrap:'wrap'}}>
              <a href="#contact-form" className="lp-btn-p" style={{fontSize:16,padding:'16px 36px'}}>
                Get My Free Quote <IC.Arrow />
              </a>
              <a href="#services" className="lp-btn-s" style={{fontSize:16,padding:'16px 36px'}}>
                See Our Work ↓
              </a>
            </div>

            <div className="lp-hero-trust lp-trust-row" style={{display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
              <div style={{display:'flex',gap:2}}>{'★★★★★'.split('').map((s,i)=><span key={i} style={{color:'#FFD700',fontSize:15}}>{s}</span>)}</div>
              <span style={{fontFamily:'DM Sans,sans-serif',fontSize:13,color:'var(--off-white)'}}>5.0 Rated</span>
              <span className="lp-tsep" style={{color:'rgba(255,255,255,0.15)'}}>|</span>
              <span style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--text-muted)'}}>47+ Projects</span>
              <span className="lp-tsep" style={{color:'rgba(255,255,255,0.15)'}}>|</span>
              <span style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--text-muted)'}}>100% Satisfaction</span>
            </div>
          </div>

          {/* Right: Animated Analytics Dashboard */}
          <div className="lp-hero-vis" style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:40}}>
            <div className="lp-mock-float" style={{width:'100%',maxWidth:460}}>
              {/* Main dashboard card */}
              <div style={{background:'rgba(19,34,53,0.94)',border:'1px solid rgba(0,212,200,0.15)',borderRadius:16,overflow:'hidden',boxShadow:'0 48px 100px rgba(0,0,0,0.45),0 0 0 1px rgba(255,255,255,0.04)'}}>
                {/* Dashboard header */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 18px',borderBottom:'1px solid rgba(255,255,255,0.06)',background:'rgba(13,27,42,0.7)'}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{display:'flex',gap:5}}>
                      {['rgba(244,98,42,0.7)','rgba(255,200,0,0.5)','rgba(0,212,200,0.5)'].map((c,i)=><div key={i} style={{width:9,height:9,borderRadius:'50%',background:c}} />)}
                    </div>
                    <span style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',marginLeft:4}}>Project Analytics</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:6}}>
                    <div className="lp-dot-live" style={{width:6,height:6,borderRadius:'50%',background:'var(--cyan)'}} />
                    <span style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--cyan)',letterSpacing:'0.08em'}}>LIVE</span>
                  </div>
                </div>

                <div style={{padding:'18px 20px 20px'}}>
                  {/* Traffic row */}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:14}}>
                    <div>
                      <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>Monthly Traffic</div>
                      <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:26,color:'var(--off-white)',lineHeight:1}}>24,817</div>
                    </div>
                    <div style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--cyan)',background:'rgba(0,212,200,0.09)',border:'1px solid rgba(0,212,200,0.2)',borderRadius:4,padding:'4px 10px'}}>↑ +127%</div>
                  </div>

                  {/* Chart */}
                  <div style={{position:'relative',height:72,marginBottom:16,borderRadius:6,overflow:'hidden'}}>
                    <svg width="100%" height="72" viewBox="0 0 280 72" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lp-cg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(0,212,200,0.3)" />
                          <stop offset="100%" stopColor="rgba(0,212,200,0)" />
                        </linearGradient>
                      </defs>
                      <path d="M0,58 C28,54 48,40 78,34 C108,28 128,16 158,14 C188,12 208,30 238,24 C258,20 268,15 280,11 L280,72 L0,72 Z" fill="url(#lp-cg)" />
                      <path className={`lp-chart-path${chartReady?' lp-chart-on':''}`} d="M0,58 C28,54 48,40 78,34 C108,28 128,16 158,14 C188,12 208,30 238,24 C258,20 268,15 280,11" stroke="var(--cyan)" strokeWidth="2" fill="none" strokeLinecap="round" />
                      {[[78,34],[158,14],[238,24],[280,11]].map(([x,y],i)=>(
                        <circle key={i} cx={x} cy={y} r="3.5" fill="var(--cyan)" className="lp-data-pt" />
                      ))}
                    </svg>
                  </div>

                  {/* Metric tiles */}
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:16}}>
                    {[
                      {lbl:'Page Speed',val:'98',sub:'/100',c:'var(--cyan)'},
                      {lbl:'AZ Ranking',val:'#1',sub:'Local',c:'var(--orange)'},
                    ].map((m,i)=>(
                      <div key={i} style={{background:'rgba(13,27,42,0.7)',border:`1px solid ${m.c==='var(--cyan)'?'rgba(0,212,200,0.14)':'rgba(244,98,42,0.14)'}`,borderRadius:8,padding:'10px 12px'}}>
                        <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:5}}>{m.lbl}</div>
                        <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,color:m.c,lineHeight:1}}>
                          {m.val}<span style={{fontSize:11,color:'var(--text-muted)',fontWeight:400}}> {m.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent projects */}
                  <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:12}}>
                    <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:9}}>Recent Projects</div>
                    {[
                      {name:'Cloak Wraps',    status:'Live',     c:'var(--cyan)',   active:true },
                      {name:'ELS Platform',   status:'Active',   c:'var(--orange)', active:false},
                      {name:'Zona Pest',      status:'Complete', c:'rgba(255,255,255,0.2)',active:false},
                    ].map((p,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:i<2?7:0}}>
                        <div style={{display:'flex',alignItems:'center',gap:6}}>
                          <div style={{width:6,height:6,borderRadius:'50%',background:p.c,boxShadow:p.active?`0 0 6px ${p.c}`:'none'}} />
                          <span style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--off-white)'}}>{p.name}</span>
                        </div>
                        <span style={{fontFamily:'Space Mono,monospace',fontSize:9,color:p.c,background:p.active?'rgba(0,212,200,0.07)':'rgba(255,255,255,0.03)',border:`1px solid ${p.active?'rgba(0,212,200,0.18)':'rgba(255,255,255,0.06)'}`,borderRadius:4,padding:'2px 8px'}}>{p.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="lp-ba" style={{position:'absolute',top:-28,right:-28,background:'rgba(13,27,42,0.94)',border:'1px solid rgba(0,212,200,0.28)',borderRadius:12,padding:'12px 16px',boxShadow:'0 12px 40px rgba(0,0,0,0.4)'}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--cyan)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>Performance</div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:24,color:'var(--off-white)',lineHeight:1}}>98<span style={{fontSize:13,color:'var(--cyan)'}}>/100</span></div>
            </div>
            <div className="lp-bb" style={{position:'absolute',bottom:20,right:-36,background:'rgba(13,27,42,0.94)',border:'1px solid rgba(244,98,42,0.28)',borderRadius:12,padding:'12px 16px',boxShadow:'0 12px 40px rgba(0,0,0,0.4)'}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--orange)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>Organic Traffic</div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,color:'var(--off-white)',lineHeight:1}}>↑ 127%</div>
            </div>
            <div className="lp-bc" style={{position:'absolute',bottom:90,left:-36,background:'rgba(13,27,42,0.94)',border:'1px solid rgba(0,212,200,0.18)',borderRadius:12,padding:'12px 16px',boxShadow:'0 12px 40px rgba(0,0,0,0.4)'}}>
              <div style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--text-muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:4}}>Code Quality</div>
              <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:15,color:'var(--cyan)',lineHeight:1}}>Custom Built ✓</div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:120,background:'linear-gradient(transparent,var(--navy))',pointerEvents:'none'}} />
      </section>

      {/* ── MARQUEE ── */}
      <div style={{background:'var(--navy-mid)',borderTop:'1px solid rgba(0,212,200,0.07)',borderBottom:'1px solid rgba(0,212,200,0.07)',overflow:'hidden'}}>
        <div style={{background:'var(--orange)',padding:'11px 0',overflow:'hidden'}}>
          <div className="marquee-fwd" style={{display:'flex',whiteSpace:'nowrap',width:'max-content'}}>
            {loop(MQ1).map((item,i)=>(
              <span key={i} style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:i%2===0?'#fff':'rgba(255,255,255,0.5)',marginRight:30}}>{item}</span>
            ))}
          </div>
        </div>
        <div style={{background:'var(--navy-light)',padding:'10px 0',overflow:'hidden'}}>
          <div className="marquee-back" style={{display:'flex',whiteSpace:'nowrap',width:'max-content'}}>
            {loop(MQ2).map((item,i)=>(
              <span key={i} style={{fontFamily:'Space Mono,monospace',fontWeight:700,fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:i%2===0?'var(--cyan)':'rgba(0,212,200,0.35)',marginRight:28}}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{background:'var(--navy-mid)',borderBottom:'1px solid rgba(255,255,255,0.04)',padding:'64px 24px'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <div className="lp-stagger lp-stats-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {[
              {val:c1, suf:'+',  lbl:'Projects Delivered', color:'var(--cyan)'},
              {val:c2, suf:'%',  lbl:'Client Satisfaction', color:'var(--orange)'},
              {val:`${(c3/10).toFixed(1)}`, suf:'★', lbl:'Average Rating', color:'var(--cyan)'},
              {val:c4, suf:'+',  lbl:'Years in Arizona', color:'var(--orange)'},
            ].map((s,i)=>(
              <div key={i} className="lp-reveal lp-stat-card" style={{padding:'36px 24px 28px'}}>
                <div style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(40px,4.5vw,62px)',lineHeight:1,color:s.color,letterSpacing:'-0.02em'}}>{s.val}{s.suf}</div>
                <div style={{fontFamily:'Space Mono,monospace',fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--text-muted)',marginTop:10,marginBottom:16}}>{s.lbl}</div>
                <div className={`lp-stat-bar${statsVis?' lp-bar-on':''}`} style={{background:s.color,opacity:0.5,width:statsVis?undefined:0}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{padding:'120px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',left:'-8%',top:'20%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.04) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="lp-reveal" style={{marginBottom:56}}>
            <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--cyan)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14}}>What We Build</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(30px,4vw,54px)',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              Full-stack capabilities.<br/><span style={{color:'var(--cyan)'}}>Zero outside dependencies.</span>
            </h2>
          </div>

          <div className="lp-svc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2}}>
            {[
              {Icon:IC.Web,   title:'Web Development',    desc:'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and search rankings that actually move.',tech:['Next.js','TypeScript','Node.js'],color:'var(--cyan)',num:'01',or:false},
              {Icon:IC.Mobile,title:'Mobile Apps',        desc:'iOS & Android apps built with React Native and SwiftUI. From MVP to App Store — we ship fast and we ship right.',tech:['SwiftUI','React Native','Firebase'],color:'var(--orange)',num:'02',or:true},
              {Icon:IC.AI,    title:'AI & Automation',    desc:'Custom AI integrations, chatbots, and workflow automation. Your team stays the same size. Output multiplies.',tech:['Claude API','OpenAI','n8n'],color:'var(--cyan)',num:'03',or:false},
              {Icon:IC.Brand, title:'Branding & Identity',desc:'Logo, color systems, typography, brand guides. Identity that holds up everywhere, every time.',tech:['Figma','Adobe CC','Motion'],color:'var(--orange)',num:'04',or:true},
            ].map((s,i)=>(
              <div key={i} className={`lp-reveal lp-svc-card${s.or?' or':''}`} style={{padding:'40px 36px'}}>
                <span style={{position:'absolute',bottom:-16,right:12,fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:90,color:'rgba(255,255,255,0.022)',lineHeight:1,pointerEvents:'none'}}>{s.num}</span>
                <div style={{color:s.color,marginBottom:18}}><s.Icon /></div>
                <p style={{fontFamily:'Space Mono,monospace',fontSize:10,color:s.color,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:14}}>{s.num} — {s.title}</p>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:22,marginBottom:12,color:'var(--off-white)',lineHeight:1.1}}>{s.title}</h3>
                <p style={{color:'var(--text-muted)',fontSize:14,lineHeight:1.8,marginBottom:20}}>{s.desc}</p>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {s.tech.map(t=><span key={t} style={{fontFamily:'Space Mono,monospace',fontSize:9,color:s.color,background:s.or?'rgba(244,98,42,0.08)':'rgba(0,212,200,0.08)',border:`1px solid ${s.or?'rgba(244,98,42,0.2)':'rgba(0,212,200,0.2)'}`,borderRadius:4,padding:'3px 8px',letterSpacing:'0.05em',textTransform:'uppercase'}}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="lp-reveal" style={{textAlign:'center',marginTop:52}}>
            <a href="#contact-form" className="lp-btn-p" style={{fontSize:16,padding:'16px 40px'}}>
              Get a Free Quote <IC.Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{padding:'80px 24px 120px',background:'var(--navy-mid)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,var(--cyan),transparent)'}} />
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="lp-reveal" style={{marginBottom:56}}>
            <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--orange)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14}}>Selected Work</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(28px,4vw,52px)',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              1 of 1.<br/><span style={{color:'var(--orange)'}}>Every time.</span>
            </h2>
          </div>

          <div className="lp-stagger lp-proj-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2}}>
            {[
              {title:'Liberty Military Housing',cat:'AI Dashboard',tag:'Next.js · Python · OpenAI',accent:'var(--cyan)',num:'01',stat:'60% fewer support tickets',desc:'AI-driven construction management platform with natural language queries and real-time housing data across thousands of units.',or:false},
              {title:'ELS Platform',           cat:'iOS App · Web Dashboard',tag:'SwiftUI · Firebase · Stripe',accent:'var(--orange)',num:'02',stat:'20hrs saved per week',desc:'Business-in-a-box for a landscaping company — scheduling, invoicing, CRM, and real-time P&L in one native app.',or:true},
              {title:'Cloak Wraps',            cat:'Web · Branding',tag:'Next.js · CSS · Animation',accent:'var(--cyan)',num:'03',stat:"Tempe's #1 wrap studio",desc:"Full rebrand and cinematic website for Tempe's premier vehicle wrap and PPF studio.",or:false},
            ].map((p,i)=>(
              <div key={i} className={`lp-reveal lp-proj-card${p.or?' or':''}`} style={{padding:'32px'}}>
                <div style={{height:88,background:p.or?'rgba(244,98,42,0.05)':'rgba(0,212,200,0.05)',border:`1px solid ${p.or?'rgba(244,98,42,0.1)':'rgba(0,212,200,0.1)'}`,borderRadius:8,position:'relative',overflow:'hidden',marginBottom:20}}>
                  <span style={{position:'absolute',bottom:-14,right:8,fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:78,color:p.or?'rgba(244,98,42,0.07)':'rgba(0,212,200,0.07)',lineHeight:1}}>{p.num}</span>
                  <div style={{position:'absolute',inset:12,display:'flex',flexDirection:'column',gap:5}}>
                    <div style={{height:7,background:p.or?'rgba(244,98,42,0.2)':'rgba(0,212,200,0.2)',borderRadius:2,width:'55%'}} />
                    <div style={{height:5,background:'rgba(255,255,255,0.06)',borderRadius:2,width:'75%'}} />
                    <div style={{height:5,background:'rgba(255,255,255,0.04)',borderRadius:2,width:'40%'}} />
                    <div style={{flex:1}} />
                    <div style={{height:20,background:p.or?'rgba(244,98,42,0.12)':'rgba(0,212,200,0.12)',borderRadius:4,width:'35%'}} />
                  </div>
                </div>
                <div style={{display:'inline-flex',alignItems:'center',gap:5,background:p.or?'rgba(244,98,42,0.08)':'rgba(0,212,200,0.08)',border:`1px solid ${p.or?'rgba(244,98,42,0.2)':'rgba(0,212,200,0.2)'}`,borderRadius:4,padding:'4px 10px',marginBottom:14}}>
                  <IC.TrendUp /><span style={{fontFamily:'Space Mono,monospace',fontSize:10,color:p.accent,letterSpacing:'0.04em'}}>{p.stat}</span>
                </div>
                <p style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:8}}>{p.cat}</p>
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,marginBottom:10,lineHeight:1.05,color:'var(--off-white)'}}>{p.title}</h3>
                <p style={{color:'var(--text-muted)',fontSize:13,lineHeight:1.75,marginBottom:14}}>{p.desc}</p>
                <span style={{fontFamily:'Space Mono,monospace',fontSize:9,color:'var(--text-muted)',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:4,padding:'3px 8px'}}>{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{padding:'120px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',right:'-5%',top:'15%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.04) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="lp-reveal" style={{marginBottom:64}}>
            <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--cyan)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14}}>Client Results</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(28px,4vw,52px)',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              Don&apos;t take our word<br/><span style={{color:'var(--cyan)'}}>for it.</span>
            </h2>
          </div>

          {/* Featured */}
          <div className="lp-reveal" style={{background:'var(--navy-mid)',border:'1px solid rgba(0,212,200,0.12)',borderRadius:16,padding:'52px 60px',marginBottom:2,position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:16,left:32,fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:140,color:'rgba(0,212,200,0.05)',lineHeight:1,pointerEvents:'none',userSelect:'none'}}>&ldquo;</div>
            <div style={{display:'flex',gap:2,marginBottom:20}}>{'★★★★★'.split('').map((_,j)=><span key={j} style={{color:'var(--orange)',fontSize:15}}>★</span>)}</div>
            <p style={{fontFamily:'Syne,sans-serif',fontWeight:600,fontSize:'clamp(16px,2.2vw,23px)',lineHeight:1.55,color:'var(--off-white)',marginBottom:28,maxWidth:760,position:'relative',zIndex:1}}>
              &ldquo;We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything — scheduling, invoicing, P&L tracking, client comms. We got back at least{' '}
              <span style={{color:'var(--cyan)'}}>20 hours a week</span> and actually know where our money is going now.&rdquo;
            </p>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(0,212,200,0.1)',border:'2px solid rgba(0,212,200,0.28)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:14,color:'var(--cyan)'}}>AM</span>
              </div>
              <div>
                <p style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:14,color:'var(--cyan)'}}>Alex M.</p>
                <p style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',marginTop:3}}>Owner, Easy Landscape Solutions</p>
              </div>
            </div>
          </div>

          <div className="lp-testi-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2}}>
            {[
              {name:'Billy W.',role:'Owner, Zona Pest Solutions',initials:'BW',color:'var(--orange)',body:"The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa in a few months. These guys know what they're doing."},
              {name:'Zach H.',role:'Owner, Cloak Wraps',initials:'ZH',color:'var(--cyan)',body:"I wanted something that looked as premium as the work we do on cars. They nailed it. The site is clean, fast, and gets compliments from customers before they even walk in the door."},
            ].map((t,i)=>(
              <div key={i} className="lp-reveal lp-testi-card" style={{padding:'36px',borderTop:`3px solid ${t.color}`,display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',gap:2,marginBottom:16}}>{'★★★★★'.split('').map((_,j)=><span key={j} style={{color:'var(--orange)',fontSize:13}}>★</span>)}</div>
                <p style={{color:'var(--off-white)',fontSize:14,lineHeight:1.8,fontStyle:'italic',flex:1,marginBottom:24}}>&ldquo;{t.body}&rdquo;</p>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:t.color==='var(--cyan)'?'rgba(0,212,200,0.1)':'rgba(244,98,42,0.1)',border:`2px solid ${t.color==='var(--cyan)'?'rgba(0,212,200,0.28)':'rgba(244,98,42,0.28)'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:12,color:t.color}}>{t.initials}</span>
                  </div>
                  <div>
                    <p style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:13,color:t.color}}>{t.name}</p>
                    <p style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',marginTop:2}}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{padding:'100px 24px',background:'var(--navy-mid)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,var(--orange),transparent)'}} />
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="lp-reveal" style={{textAlign:'center',marginBottom:64}}>
            <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--orange)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14}}>Why Sunstate DevWorks</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(28px,4vw,52px)',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              One team.{' '}<span style={{color:'var(--orange)'}}>Total accountability.</span>
            </h2>
          </div>
          <div className="lp-stagger lp-why-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
            {[
              {Icon:IC.Code,  title:'You Own 100%',     desc:'No proprietary platforms, no lock-in. The code is yours on delivery — forever.',color:'var(--cyan)'},
              {Icon:IC.File,  title:'Flat-Rate Pricing',desc:'Written scope upfront. No hourly surprises. You approve before we write a single line.',color:'var(--orange)'},
              {Icon:IC.Shield,title:'One Team, One Bill',desc:'We build it, host it, and maintain it. No blame game between your dev and your host.',color:'var(--cyan)'},
              {Icon:IC.Pin,   title:'Local Arizona',    desc:'Real humans in Gilbert, AZ. Direct access to your team — no call centers, ever.',color:'var(--orange)'},
            ].map((c,i)=>(
              <div key={i} className="lp-reveal lp-why-card" style={{padding:'32px 24px'}}>
                <div className="lp-why-icon-wrap" style={{width:48,height:48,borderRadius:12,background:`rgba(${c.color==='var(--cyan)'?'0,212,200':'244,98,42'},0.08)`,border:`1px solid rgba(${c.color==='var(--cyan)'?'0,212,200':'244,98,42'},0.18)`,display:'flex',alignItems:'center',justifyContent:'center',color:c.color,marginBottom:20,boxShadow:`0 0 0 0 rgba(${c.color==='var(--cyan)'?'0,212,200':'244,98,42'},0.15)`}}>
                  <c.Icon />
                </div>
                <div style={{width:28,height:2,background:c.color,borderRadius:1,marginBottom:14,opacity:0.6}} />
                <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:17,marginBottom:10,color:'var(--off-white)',lineHeight:1.2}}>{c.title}</h3>
                <p style={{color:'var(--text-muted)',fontSize:13,lineHeight:1.75}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{padding:'100px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto'}}>
          <div className="lp-reveal" style={{textAlign:'center',marginBottom:72}}>
            <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--cyan)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:14}}>How It Works</p>
            <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(28px,4vw,52px)',lineHeight:1.05,letterSpacing:'-0.02em'}}>
              From idea to launch.<br/><span style={{color:'var(--cyan)'}}>No confusion.</span>
            </h2>
          </div>
          <div style={{position:'relative'}}>
            {/* Connecting line */}
            <div className="lp-proc-line" style={{position:'absolute',top:26,left:'12.5%',right:'12.5%',height:1,background:'linear-gradient(90deg,var(--cyan),var(--orange),var(--cyan),var(--orange))',opacity:0.18,zIndex:0}} />
            <div className="lp-stagger lp-proc-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:2,position:'relative',zIndex:1}}>
              {[
                {num:'01',title:'Discovery Call',   desc:'30 minutes. We learn your business, goals, and what success looks like for you.',color:'var(--cyan)'},
                {num:'02',title:'Proposal & Scope', desc:'Written scope, timeline, flat-rate price. You approve before we start.',color:'var(--orange)'},
                {num:'03',title:'Design & Build',   desc:'We build in sprints and share progress weekly. You stay in the loop.',color:'var(--cyan)'},
                {num:'04',title:'Launch & Handoff', desc:'We handle DNS, SSL, and go-live. Then we hand you the keys — or maintain it.',color:'var(--orange)'},
              ].map((p,i)=>(
                <div key={i} className="lp-reveal" style={{padding:'0 20px',textAlign:'center'}}>
                  <div style={{width:52,height:52,borderRadius:'50%',border:`2px solid ${p.color}`,background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 28px',position:'relative'}}>
                    <span style={{fontFamily:'Space Mono,monospace',fontSize:12,color:p.color,fontWeight:700}}>{p.num}</span>
                  </div>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:17,marginBottom:10,color:'var(--off-white)'}}>{p.title}</h3>
                  <p style={{color:'var(--text-muted)',fontSize:13,lineHeight:1.75}}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / FORM ── */}
      <section id="contact-form" className="lp-grid-bg" style={{padding:'100px 24px',position:'relative',overflow:'hidden',background:'var(--navy-mid)'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,var(--cyan),transparent)'}} />
        <div style={{position:'absolute',top:'-10%',right:'-5%',width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(244,98,42,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'-10%',left:'-5%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,0.05) 0%,transparent 70%)',pointerEvents:'none'}} />

        <div style={{maxWidth:1100,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="lp-form-split" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'start'}}>

            {/* Left: headline */}
            <div className="lp-reveal">
              <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--orange)',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:16}}>Ready to Build?</p>
              <h2 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'clamp(32px,4vw,56px)',lineHeight:1.0,letterSpacing:'-0.02em',marginBottom:24}}>
                Let&apos;s build something<br/><span style={{color:'var(--cyan)'}}>that converts.</span>
              </h2>
              <p style={{color:'var(--text-muted)',fontSize:16,lineHeight:1.85,marginBottom:40}}>
                Fill out the form and we&apos;ll reply within 2 hours. No fluff, no pressure — just a straight conversation about what we can build together.
              </p>

              {/* Urgency */}
              <div style={{background:'rgba(244,98,42,0.06)',border:'1px solid rgba(244,98,42,0.18)',borderRadius:10,padding:'16px 20px',marginBottom:36,display:'flex',gap:12,alignItems:'flex-start'}}>
                <div style={{color:'var(--orange)',flexShrink:0,marginTop:1}}><IC.Zap /></div>
                <div>
                  <p style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:14,color:'var(--orange)',marginBottom:4}}>Limited Availability</p>
                  <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--text-muted)',lineHeight:1.6}}>We take on 3–5 new projects per month to maintain quality. Reach out now to secure your spot.</p>
                </div>
              </div>

              {/* Checklist */}
              <div style={{display:'flex',flexDirection:'column',gap:13}}>
                {['Reply within 2 hours during business hours','Free 30-min discovery call to scope your project','Written scope with flat-rate price — zero surprises','No pressure, no obligation'].map((item,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:12}}>
                    <div style={{width:20,height:20,borderRadius:'50%',background:'rgba(0,212,200,0.08)',border:'1px solid rgba(0,212,200,0.28)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:'var(--cyan)'}}>
                      <IC.Check />
                    </div>
                    <span style={{fontFamily:'DM Sans,sans-serif',fontSize:14,color:'var(--off-white)'}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form with rotating border */}
            <div className="lp-reveal">
              {status === 'success' ? (
                <div style={{background:'rgba(0,212,200,0.05)',border:'1px solid rgba(0,212,200,0.22)',borderRadius:16,padding:'60px 40px',textAlign:'center'}}>
                  <div style={{width:72,height:72,borderRadius:'50%',background:'rgba(0,212,200,0.1)',border:'2px solid rgba(0,212,200,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px'}}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:28,color:'var(--cyan)',marginBottom:12}}>We got your message!</h3>
                  <p style={{color:'var(--text-muted)',fontSize:15,lineHeight:1.8}}>Expect a reply within 2 hours. A confirmation is on its way to your inbox now.</p>
                </div>
              ) : (
                <div className="lp-form-border">
                  <div className="lp-form-inner" style={{padding:'36px'}}>
                    <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:16}}>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                        <div>
                          <label style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:6}}>Name *</label>
                          <input className="lp-input" type="text" placeholder="Jane Smith" required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
                        </div>
                        <div>
                          <label style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:6}}>Email *</label>
                          <input className="lp-input" type="email" placeholder="jane@company.com" required value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
                        </div>
                      </div>
                      <div>
                        <label style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:6}}>Phone</label>
                        <input className="lp-input" type="tel" placeholder="(480) 000-0000" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} />
                      </div>
                      <div>
                        <label style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:6}}>Service Needed</label>
                        <select className="lp-input" value={form.service} onChange={e=>setForm(f=>({...f,service:e.target.value}))}>
                          <option value="">Select a service...</option>
                          <option value="Web Development">Website Design &amp; Development</option>
                          <option value="Mobile App">Mobile App (iOS / Android)</option>
                          <option value="AI & Automation">AI &amp; Automation</option>
                          <option value="Branding & Identity">Branding &amp; Identity</option>
                          <option value="Multiple Services">Multiple Services</option>
                        </select>
                      </div>
                      <div>
                        <label style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:6}}>Tell us about your project *</label>
                        <textarea className="lp-input" rows={4} placeholder="What are you building? What's your timeline and budget range?" required style={{resize:'vertical',minHeight:100}} value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
                      </div>

                      {status === 'error' && (
                        <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--orange)',textAlign:'center'}}>
                          Something went wrong — email us at{' '}
                          <a href="mailto:contact@sunstatedevworks.com" style={{color:'var(--orange)'}}>contact@sunstatedevworks.com</a>
                        </p>
                      )}

                      <button type="submit" className="lp-submit" disabled={status==='loading'}>
                        {status==='loading' ? 'Sending...' : 'Get My Free Quote →'}
                      </button>

                      <p style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',textAlign:'center',letterSpacing:'0.06em',textTransform:'uppercase'}}>
                        Reply in under 2 hours · No spam, ever
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:'var(--navy)',borderTop:'1px solid rgba(255,255,255,0.05)',padding:'28px 24px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <p style={{fontFamily:'Space Mono,monospace',fontSize:11,color:'var(--text-muted)',letterSpacing:'0.05em'}}>
            © 2025 Sunstate DevWorks · Gilbert, AZ · All rights reserved
          </p>
          <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
            <a href="/privacy" style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--text-muted)',textDecoration:'none',letterSpacing:'0.06em',textTransform:'uppercase'}}>Privacy Policy</a>
            <a href="mailto:contact@sunstatedevworks.com" style={{fontFamily:'Space Mono,monospace',fontSize:10,color:'var(--cyan)',textDecoration:'none'}}>contact@sunstatedevworks.com</a>
          </div>
        </div>
      </footer>
    </>
  )
}
