'use client'
import { useState } from 'react'

const services = ['Web Development', 'Mobile App', 'Branding & Identity', 'AI & Automation', 'Hosting / Maintenance', 'Not sure yet']
const budgets = ['Under $1,000', '$1,000 – $3,000', '$3,000 – $7,500', '$7,500 – $15,000', '$15,000+']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--navy)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 8,
    padding: '14px 16px',
    color: 'var(--off-white)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
  }

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
        <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Let&apos;s build<br /><span style={{ color: 'var(--orange)' }}>something real.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Fill out the form below or text us directly. We respond fast — usually same day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: '40px 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64 }}>
          {sent ? (
            <div style={{ gridColumn: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '80px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 24 }}>✦</div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Message Sent</p>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 48, lineHeight: 1.05, marginBottom: 16 }}>
                We got it.<br /><span style={{ color: 'var(--orange)' }}>Talk soon.</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.7 }}>
                Expect to hear from us within a few hours. We&apos;ll review your project and set up a discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input required style={inputStyle} placeholder="John Smith" value={form.name} onChange={e => handle('name', e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input required type="email" style={inputStyle} placeholder="john@company.com" value={form.email} onChange={e => handle('email', e.target.value)} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company / Business</label>
                <input style={inputStyle} placeholder="Acme Inc." value={form.company} onChange={e => handle('company', e.target.value)} />
              </div>

              <div>
                <label style={labelStyle}>Service Needed *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handle('service', s)}
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: 11,
                        padding: '8px 16px',
                        borderRadius: 999,
                        border: `1px solid ${form.service === s ? 'var(--cyan)' : 'rgba(255,255,255,0.1)'}`,
                        background: form.service === s ? 'rgba(0,212,200,0.1)' : 'transparent',
                        color: form.service === s ? 'var(--cyan)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Estimated Budget</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {budgets.map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => handle('budget', b)}
                      style={{
                        fontFamily: 'Space Mono, monospace',
                        fontSize: 11,
                        padding: '8px 16px',
                        borderRadius: 999,
                        border: `1px solid ${form.budget === b ? 'var(--orange)' : 'rgba(255,255,255,0.1)'}`,
                        background: form.budget === b ? 'rgba(244,98,42,0.1)' : 'transparent',
                        color: form.budget === b ? 'var(--orange)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s',
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Tell Us About Your Project *</label>
                <textarea
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="What are you building? What problem does it solve? Any existing site or app we should know about?"
                  value={form.message}
                  onChange={e => handle('message', e.target.value)}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--orange)',
                  color: 'white',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 15,
                  padding: '18px 40px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 40px rgba(244,98,42,0.2)',
                }}
              >
                Send Message →
              </button>
            </form>
          )}

          {/* Sidebar info */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>What to Expect</p>
              {[
                { step: '01', label: 'Discovery Call', desc: '30 min. We learn about your business and goals.' },
                { step: '02', label: 'Proposal', desc: 'Scope, timeline, and price. No surprises.' },
                { step: '03', label: 'Kickoff', desc: 'We start building. You get updates weekly.' },
                { step: '04', label: 'Launch', desc: 'We handle DNS, SSL, and everything technical.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', flexShrink: 0, marginTop: 2 }}>{s.step}</span>
                  <div>
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{s.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--navy-mid)', borderRadius: 12, padding: 24, border: '1px solid rgba(0,212,200,0.1)' }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Location</p>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Gilbert, Arizona</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>Serving clients locally and nationwide. We work remote-first with optional in-person meetings in the greater Phoenix area.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
