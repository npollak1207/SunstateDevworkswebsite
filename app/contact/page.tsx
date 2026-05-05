'use client'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'



const services = ['Web Development', 'Mobile App', 'Branding & Identity', 'AI & Automation', 'Hosting / Maintenance', 'Not sure yet']
const budgets = ['Under $1k', '$1k–$3k', '$3k–$7.5k', '$7.5k–$15k', '$15k+']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState('')

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
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: focused === field ? 'rgba(0,212,200,0.04)' : 'var(--navy)',
    border: `1px solid ${focused === field ? 'rgba(0,212,200,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 8,
    padding: '14px 16px',
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
            Fill out the form below. We respond same day — usually within a few hours.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ padding: '20px 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80 }} className="contact-grid">

          {/* Form / Success / Error */}
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(40,200,64,0.1)', border: '1px solid rgba(40,200,64,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Message Received</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, marginBottom: 16 }}>
                We got it.<br /><span style={{ color: 'var(--orange)' }}>Talk soon.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 400 }}>
                Check your inbox — we sent a confirmation to <span style={{ color: 'var(--cyan)' }}>{form.email}</span>. Expect to hear from us within a few hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="name-grid">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input required style={inputStyle('name')} placeholder="John Smith" value={form.name} onChange={e => handle('name', e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" style={inputStyle('email')} placeholder="john@company.com" value={form.email} onChange={e => handle('email', e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
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
                <label style={labelStyle}>Tell Us About Your Project *</label>
                <textarea required rows={5} style={{ ...inputStyle('message'), resize: 'vertical' }} placeholder="What are you building? What problem does it solve? Any existing site or app to reference?" value={form.message} onChange={e => handle('message', e.target.value)} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div style={{ background: 'rgba(244,98,42,0.08)', border: '1px solid rgba(244,98,42,0.25)', borderRadius: 8, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.04em' }}>Something went wrong. Please try again or email us directly at contact@sunstatedevworks.com</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="glow-pulse"
                style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, padding: '18px 40px', borderRadius: 8, border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', alignSelf: 'flex-start', opacity: status === 'submitting' ? 0.7 : 1, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', gap: 10 }}
              >
                {status === 'submitting' ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    Sending...
                  </>
                ) : 'Send Message →'}
              </button>
            </form>
          )}

          {/* Sidebar */}
          <div style={{ paddingTop: 4 }}>
            <ScrollReveal>
              <div style={{ marginBottom: 48 }}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>What to Expect</p>
                {[
                  { step: '01', label: 'Discovery Call', desc: '30 min. We learn your business, goals, and what success looks like.' },
                  { step: '02', label: 'Written Proposal', desc: 'Scope, timeline, flat-rate price. No hourly surprises. You approve first.' },
                  { step: '03', label: 'Weekly Updates', desc: 'We build in sprints. You stay informed without being in the weeds.' },
                  { step: '04', label: 'Launch Day', desc: 'We handle DNS, SSL, go-live testing, and hand you the keys.' },
                ].map((s, i) => (
                  <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', borderRadius: '50%', border: `1px solid ${i % 2 === 0 ? 'rgba(0,212,200,0.3)' : 'rgba(244,98,42,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, minWidth: 28, fontSize: 10 }}>{s.step}</span>
                      {i < 3 && <div style={{ width: 1, flex: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 0' }} />}
                    </div>
                    <div style={{ paddingBottom: i < 3 ? 20 : 0 }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div style={{ background: 'var(--navy-mid)', borderRadius: 12, padding: 28, border: '1px solid rgba(0,212,200,0.1)' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)' }} />
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Currently Available</p>
                </div>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Gilbert, Arizona</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>
                  Serving clients locally and nationwide. Remote-first with optional in-person meetings in the greater Phoenix area.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
