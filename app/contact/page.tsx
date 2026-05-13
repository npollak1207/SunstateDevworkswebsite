'use client'
import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_TEL = '+14807939161'
const EMAIL = 'contact@sunstatedevworks.com'

const services = ['Web Development', 'Mobile App', 'Branding & Identity', 'AI & Automation', 'Hosting / Maintenance', 'Not sure yet']
const budgets = ['$3k–$7.5k', '$7.5k–$15k', '$15k–$30k', '$30k+', 'Not sure yet']
const timelines = ['ASAP', '1–2 months', '3+ months', 'Just exploring']

const STORAGE_KEY = 'sunstate-contact-draft'

const faqs = [
  {
    q: 'How much will my project cost?',
    a: 'Marketing sites typically run $3k–$15k. Web apps and mobile apps start around $15k and scale with scope. We give you a flat-rate price up front — no hourly billing, no surprises. See our pricing page for full ranges.',
  },
  {
    q: 'How fast can you start?',
    a: 'Discovery calls are usually booked within 2–3 days. If we\'re a fit, written proposal lands within a week, and kickoff is typically 1–2 weeks after sign-off. Most marketing sites ship in 3–5 weeks total.',
  },
  {
    q: 'Do I really own the code?',
    a: 'Yes — 100%. Every line, every asset, every database. You get a full handoff at launch. No subscriptions, no licensing, no proprietary platforms. If you ever want to take it to another developer, you can.',
  },
]

const recentClients = ['Liberty Military Housing', 'ELS', 'Cloak Wraps', 'Zona Pest', 'Easy Landscape']

const featuredQuote = {
  body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything. We got back at least 20 hours a week.',
  name: 'Alex M.',
  role: 'Owner, Easy Landscape Solutions',
  initials: 'AM',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', timeline: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hydrated, setHydrated] = useState(false)

  // Restore draft from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setForm(p => ({ ...p, ...parsed }))
      }
    } catch {}
    setHydrated(true)
  }, [])

  // Persist draft on change
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
    } catch {}
  }, [form, hydrated])

  const handle = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      try { localStorage.removeItem(STORAGE_KEY) } catch {}
    } catch {
      setStatus('error')
    }
  }

  const valid = {
    name: form.name.trim().length >= 2,
    email: emailRegex.test(form.email.trim()),
    message: form.message.trim().length >= 20,
  }

  const inputStyle = (field: string, hasCheck = false): React.CSSProperties => ({
    width: '100%',
    background: focused === field ? 'rgba(0,212,200,0.04)' : 'var(--navy)',
    border: `1px solid ${focused === field ? 'rgba(0,212,200,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 8,
    padding: hasCheck ? '14px 44px 14px 16px' : '14px 16px',
    color: 'var(--off-white)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxSizing: 'border-box',
  })

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Space Mono, monospace',
    fontSize: 11,
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: 8,
    display: 'block',
  }

  const CheckMark = ({ show }: { show: boolean }) => (
    <span style={{
      position: 'absolute', right: 14, top: '50%',
      width: 22, height: 22, borderRadius: '50%',
      background: 'rgba(40,200,64,0.12)', border: '1px solid rgba(40,200,64,0.35)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: show ? 1 : 0,
      transform: `translateY(-50%) scale(${show ? 1 : 0.6})`,
      transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)',
      pointerEvents: 'none',
    }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  )

  return (
    <>
      {/* Header */}
      <section style={{ padding: '160px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', left: '60%', top: '30%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 24, maxWidth: 700 }}>
            Let&apos;s build<br />
            <span style={{ color: 'var(--orange)' }}>something</span><br />
            <span style={{ WebkitTextStroke: '2px var(--cyan)', color: 'transparent' }}>real.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.75, maxWidth: 480 }}>
            Fill out the form below — or call or email us directly. We respond same day.
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <section style={{ padding: '24px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(13,27,42,0.4)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Recently Shipped</span>
          {recentClients.map((c, i) => (
            <span key={c} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: 'var(--off-white)', opacity: 0.55, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)', paddingLeft: i === 0 ? 0 : 24 }}>{c}</span>
          ))}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80 }} className="contact-grid">

          {/* Form / Success */}
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(40,200,64,0.1)', border: '1px solid rgba(40,200,64,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Message Received</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, marginBottom: 16 }}>
                We got it.<br /><span style={{ color: 'var(--orange)' }}>Talk soon.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 440 }}>
                Check your inbox — we sent a confirmation to <span style={{ color: 'var(--cyan)' }}>{form.email}</span>. Expect to hear from us within a few hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Featured testimonial above form */}
              <div style={{ background: 'rgba(0,212,200,0.04)', border: '1px solid rgba(0,212,200,0.12)', borderRadius: 12, padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,212,200,0.15)', border: '1px solid rgba(0,212,200,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: 'var(--cyan)' }}>{featuredQuote.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--cyan)" stroke="none"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" /></svg>
                    ))}
                  </div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--off-white)', lineHeight: 1.6, marginBottom: 8, fontStyle: 'italic' }}>&ldquo;{featuredQuote.body}&rdquo;</p>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                    <span style={{ color: 'var(--off-white)' }}>{featuredQuote.name}</span> · {featuredQuote.role}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="name-grid">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <div style={{ position: 'relative' }}>
                    <input required style={inputStyle('name', true)} placeholder="John Smith" value={form.name} onChange={e => handle('name', e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                    <CheckMark show={valid.name} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <div style={{ position: 'relative' }}>
                    <input required type="email" style={inputStyle('email', true)} placeholder="john@company.com" value={form.email} onChange={e => handle('email', e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                    <CheckMark show={valid.email} />
                  </div>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company / Business</label>
                <input style={inputStyle('company')} placeholder="Acme Inc." value={form.company} onChange={e => handle('company', e.target.value)} onFocus={() => setFocused('company')} onBlur={() => setFocused('')} />
              </div>

              <div>
                <label style={labelStyle}>Service Needed</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {services.map(s => (
                    <button key={s} type="button" onClick={() => handle('service', s)} style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, padding: '9px 16px', borderRadius: 999, border: `1px solid ${form.service === s ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`, background: form.service === s ? 'rgba(0,212,200,0.1)' : 'transparent', color: form.service === s ? 'var(--cyan)' : 'var(--text-muted)', cursor: 'pointer', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Estimated Budget</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {budgets.map(b => (
                    <button key={b} type="button" onClick={() => handle('budget', b)} style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, padding: '9px 16px', borderRadius: 999, border: `1px solid ${form.budget === b ? 'var(--orange)' : 'rgba(255,255,255,0.1)'}`, background: form.budget === b ? 'rgba(244,98,42,0.1)' : 'transparent', color: form.budget === b ? 'var(--orange)' : 'var(--text-muted)', cursor: 'pointer', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Timeline</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {timelines.map(t => (
                    <button key={t} type="button" onClick={() => handle('timeline', t)} style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, padding: '9px 16px', borderRadius: 999, border: `1px solid ${form.timeline === t ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`, background: form.timeline === t ? 'rgba(0,212,200,0.1)' : 'transparent', color: form.timeline === t ? 'var(--cyan)' : 'var(--text-muted)', cursor: 'pointer', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Tell Us About Your Project *</label>
                <div style={{ position: 'relative' }}>
                  <textarea required rows={5} style={{ ...inputStyle('message', true), paddingRight: 44, resize: 'vertical' }} placeholder="What are you building? What problem does it solve? Any existing site or app to reference?" value={form.message} onChange={e => handle('message', e.target.value)} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
                  <span style={{
                    position: 'absolute', right: 14, top: 14,
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(40,200,64,0.12)', border: '1px solid rgba(40,200,64,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: valid.message ? 1 : 0,
                    transform: `scale(${valid.message ? 1 : 0.6})`,
                    transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)',
                    pointerEvents: 'none',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                </div>
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div style={{ background: 'rgba(244,98,42,0.08)', border: '1px solid rgba(244,98,42,0.25)', borderRadius: 8, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.04em' }}>Something went wrong. Please try again or email us directly at {EMAIL}</p>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="glow-pulse"
                  style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, padding: '18px 40px', borderRadius: 8, border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: status === 'submitting' ? 0.7 : 1, transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: 10 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                      Sending...
                    </>
                  ) : 'Send Message →'}
                </button>
                <p style={{ marginTop: 14, fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Free 30-min discovery call · Same-day response · We never share your info
                </p>
              </div>
            </form>
          )}

          {/* Sidebar */}
          <div style={{ paddingTop: 4 }}>
            {/* Prefer to talk panel */}
            <ScrollReveal>
              <div style={{ background: 'var(--navy-mid)', borderRadius: 12, padding: 24, border: '1px solid rgba(0,212,200,0.12)', marginBottom: 32 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Prefer to Talk?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href={`tel:${PHONE_TEL}`} className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 8, background: 'rgba(0,212,200,0.04)', border: '1px solid rgba(0,212,200,0.15)', textDecoration: 'none', transition: 'background 0.2s ease, transform 0.2s ease' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(0,212,200,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Call</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--off-white)', fontWeight: 500 }}>{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 8, background: 'rgba(244,98,42,0.04)', border: '1px solid rgba(244,98,42,0.15)', textDecoration: 'none', transition: 'background 0.2s ease, transform 0.2s ease' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(244,98,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Email</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--off-white)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{EMAIL}</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div style={{ marginBottom: 40 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>What to Expect</p>
                {[
                  { step: '01', label: 'Discovery Call', desc: '30 min. We learn your business, goals, and what success looks like.' },
                  { step: '02', label: 'Written Proposal', desc: 'Scope, timeline, flat-rate price. No hourly surprises. You approve first.' },
                  { step: '03', label: 'Weekly Updates', desc: 'We build in sprints. You stay informed without being in the weeds.' },
                  { step: '04', label: 'Launch Day', desc: 'We handle DNS, SSL, go-live testing, and hand you the keys.' },
                ].map((s, i) => (
                  <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', borderRadius: '50%', border: `1px solid ${i % 2 === 0 ? 'rgba(0,212,200,0.3)' : 'rgba(244,98,42,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, minWidth: 28, fontSize: 10 }}>{s.step}</span>
                      {i < 3 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 0' }} />}
                    </div>
                    <div style={{ paddingBottom: i < 3 ? 16 : 0 }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div style={{ background: 'var(--navy-mid)', borderRadius: 12, padding: 24, border: '1px solid rgba(0,212,200,0.1)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }} />
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Currently Available</p>
                </div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Gilbert, Arizona</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>
                  Serving clients locally and nationwide. Remote-first with optional in-person meetings in the greater Phoenix area.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {status !== 'success' && (
        <section style={{ padding: '40px 24px 120px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <ScrollReveal>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Common Questions</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 32, textAlign: 'center' }}>
                Before you hit send.
              </h2>
            </ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {faqs.map((f, i) => {
                const open = openFaq === i
                return (
                  <ScrollReveal key={f.q} delay={i * 60}>
                    <div style={{ background: 'var(--navy-mid)', border: `1px solid ${open ? 'rgba(0,212,200,0.25)' : 'rgba(255,255,255,0.06)'}`, borderRadius: 10, overflow: 'hidden', transition: 'border-color 0.2s ease' }}>
                      <button onClick={() => setOpenFaq(open ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 22px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--off-white)' }}>{f.q}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={open ? 'var(--cyan)' : 'var(--text-muted)'} strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform 0.25s ease, stroke 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div style={{ maxHeight: open ? 240 : 0, transition: 'max-height 0.3s ease', overflow: 'hidden' }}>
                        <p style={{ padding: '0 22px 20px', color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{f.a}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .contact-method:hover {
          transform: translateX(2px);
          background: rgba(0,212,200,0.08) !important;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
