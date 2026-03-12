'use client'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const services = ['Web Development', 'Mobile App', 'Branding & Identity', 'AI & Automation', 'Hosting / Maintenance', 'Not sure yet']
const budgets = ['Under $1k', '$1k–$3k', '$3k–$7.5k', '$7.5k–$15k', '$15k+']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState('')

  const handle = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const inputStyle = (field: string) => ({
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
  })

  const labelStyle = {
    fontFamily: 'Space Mono, monospace',
    fontSize: 11,
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
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
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80 }}>

          {/* Form */}
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: 64, marginBottom: 24, color: 'var(--cyan)' }}>✦</div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Message Received</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, marginBottom: 16 }}>
                We got it.<br /><span style={{ color: 'var(--orange)' }}>Talk soon.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.75, maxWidth: 400 }}>
                Expect to hear from us within a few hours. We&apos;ll review your project and set up a discovery call at your convenience.
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
                <label style={labelStyle}>Service Needed *</label>
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
                <textarea required rows={5} style={{ ...inputStyle('message'), resize: 'vertical' as const }} placeholder="What are you building? What problem does it solve? Any existing site or app to reference?" value={form.message} onChange={e => handle('message', e.target.value)} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
              </div>

              <button type="submit" className="glow-pulse" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15, padding: '18px 40px', borderRadius: 8, border: 'none', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase', alignSelf: 'flex-start', transition: 'transform 0.2s' }}>
                Send Message →
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
                  <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: 28, paddingLeft: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', borderRadius: "50%", border: `1px solid ${i % 2 === 0 ? "rgba(0,212,200,0.3)" : "rgba(244,98,42,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, minWidth: 28, lineHeight: "1", fontSize: 10 }}>{s.step}</span>
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
        @media (max-width: 768px) {
          form + div, div:has(form) + div { grid-column: 1 !important; }
          section > div[style*="grid-template-columns: 3fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
