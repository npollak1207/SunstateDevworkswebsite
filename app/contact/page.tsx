'use client'
import { useEffect, useState } from 'react'

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_TEL = '+14807939161'
const EMAIL = 'contact@sunstatedevworks.com'

const services = ['Web Development', 'Mobile App', 'Branding & Identity', 'AI & Automation', 'Hosting / Maintenance', 'Not sure yet']
const budgets = ['$3k to $7.5k', '$7.5k to $15k', '$15k to $30k', '$30k+', 'Not sure yet']
const timelines = ['ASAP', '1 to 2 months', '3+ months', 'Just exploring']

const STORAGE_KEY = 'sunstate-contact-draft'

const faqs = [
  { q: 'How much will my project cost?', a: 'Marketing sites typically run $3k to $15k. Web apps and mobile apps start around $15k and scale with scope. We give you a flat-rate price up front, with no hourly billing and no surprises. See our pricing page for full ranges.' },
  { q: 'How fast can you start?', a: 'Discovery calls are usually booked within 2 to 3 days. If we are a fit, a written proposal lands within a week, and kickoff is typically 1 to 2 weeks after sign-off. Most marketing sites ship in 3 to 5 weeks total.' },
  { q: 'Do I really own the code?', a: 'Yes, 100%. Every line, every asset, every database. You get a full handoff at launch, with no subscriptions, no licensing and no proprietary platforms. If you ever want to take it to another developer, you can.' },
]

const steps = [
  { step: '01', label: 'Discovery Call', desc: 'Thirty minutes. We learn your business, goals, and what success looks like.' },
  { step: '02', label: 'Written Proposal', desc: 'Scope, timeline and a flat-rate price. No hourly surprises. You approve first.' },
  { step: '03', label: 'Weekly Updates', desc: 'We build in sprints. You stay informed without being in the weeds.' },
  { step: '04', label: 'Launch Day', desc: 'We handle DNS, SSL and go-live testing, then hand you the keys.' },
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', timeline: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setForm((p) => ({ ...p, ...JSON.parse(raw) }))
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(form)) } catch {}
  }, [form, hydrated])

  const handle = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
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
    background: 'var(--card)',
    border: `1px solid ${focused === field ? 'var(--accent)' : 'var(--line-2)'}`,
    borderRadius: 3,
    padding: hasCheck ? '14px 44px 14px 15px' : '14px 15px',
    color: 'var(--ink)',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  })

  const labelStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }

  const chip = (active: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-mono)', fontSize: 11, padding: '9px 15px', borderRadius: 2,
    border: `1px solid ${active ? 'var(--accent)' : 'var(--line-2)'}`,
    background: active ? 'var(--accent-soft)' : 'transparent',
    color: active ? 'var(--accent-deep)' : 'var(--muted)',
    cursor: 'pointer', letterSpacing: '0.03em', transition: 'all 0.2s',
  })

  const CheckMark = ({ show, top = '50%' }: { show: boolean; top?: string }) => (
    <span style={{ position: 'absolute', right: 13, top, width: 20, height: 20, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: show ? 1 : 0, transform: `translateY(${top === '50%' ? '-50%' : '0'}) scale(${show ? 1 : 0.6})`, transition: 'opacity 0.2s, transform 0.2s', pointerEvents: 'none' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  )

  return (
    <>
      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 190px) clamp(20px, 5vw, 44px) clamp(40px, 6vh, 64px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            Get in touch
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 0.93, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 24, maxWidth: 760 }}>
            Let&apos;s build something <span className="serif-em" style={{ color: 'var(--accent)' }}>real.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 520 }}>
            Fill out the form below, or call or email us directly. We respond the same day.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(72px, 10vh, 120px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }} className="contact-grid">
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 0' }}>
              <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Message received</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 16 }}>
                We got it. <span className="serif-em" style={{ color: 'var(--accent)' }}>Talk soon.</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 440 }}>
                We sent a confirmation to <span style={{ color: 'var(--ink)' }}>{form.email}</span>. Expect to hear from us within a few hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="name-grid">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <div style={{ position: 'relative' }}>
                    <input required style={inputStyle('name', true)} placeholder="John Smith" value={form.name} onChange={(e) => handle('name', e.target.value)} onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                    <CheckMark show={valid.name} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <div style={{ position: 'relative' }}>
                    <input required type="email" style={inputStyle('email', true)} placeholder="john@company.com" value={form.email} onChange={(e) => handle('email', e.target.value)} onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                    <CheckMark show={valid.email} />
                  </div>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Company / Business</label>
                <input style={inputStyle('company')} placeholder="Acme Inc." value={form.company} onChange={(e) => handle('company', e.target.value)} onFocus={() => setFocused('company')} onBlur={() => setFocused('')} />
              </div>

              <div>
                <label style={labelStyle}>Service needed</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {services.map((s) => <button key={s} type="button" onClick={() => handle('service', s)} style={chip(form.service === s)}>{s}</button>)}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Estimated budget</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {budgets.map((b) => <button key={b} type="button" onClick={() => handle('budget', b)} style={chip(form.budget === b)}>{b}</button>)}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Timeline</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {timelines.map((t) => <button key={t} type="button" onClick={() => handle('timeline', t)} style={chip(form.timeline === t)}>{t}</button>)}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Tell us about your project *</label>
                <div style={{ position: 'relative' }}>
                  <textarea required rows={5} style={{ ...inputStyle('message', true), paddingRight: 44, resize: 'vertical' }} placeholder="What are you building? What problem does it solve? Any existing site or app to reference?" value={form.message} onChange={(e) => handle('message', e.target.value)} onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
                  <CheckMark show={valid.message} top="14px" />
                </div>
              </div>

              {status === 'error' && (
                <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 3, padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--accent-deep)' }}>Something went wrong. Please try again or email {EMAIL}</p>
                </div>
              )}

              <div>
                <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }}>
                  {status === 'submitting' ? (
                    <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg> Sending...</>
                  ) : (<>Send Message <span className="btn-arrow"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span></>)}
                </button>
                <p style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.04em' }}>
                  Free 30-minute discovery call · Same-day response · We never share your info
                </p>
              </div>
            </form>
          )}

          {/* Sidebar */}
          <div>
            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, padding: 24, marginBottom: 28 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Prefer to talk?</p>
              <a href={`tel:${PHONE_TEL}`} className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderRadius: 3, border: '1px solid var(--line)', textDecoration: 'none', marginBottom: 10, transition: 'background 0.2s, transform 0.2s' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase', width: 42 }}>Call</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--ink)' }}>{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderRadius: 3, border: '1px solid var(--line)', textDecoration: 'none', transition: 'background 0.2s, transform 0.2s' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase', width: 42 }}>Email</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{EMAIL}</span>
              </a>
            </div>

            <div style={{ marginBottom: 28 }}>
              <p className="eyebrow" style={{ marginBottom: 22 }}>What to expect</p>
              {steps.map((s, i) => (
                <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: i < steps.length - 1 ? 20 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', borderRadius: '50%', border: '1px solid var(--accent-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, fontSize: 10 }}>{s.step}</span>
                    {i < steps.length - 1 && <div style={{ width: 1, flex: 1, background: 'var(--line)', margin: '6px 0' }} />}
                  </div>
                  <div style={{ paddingBottom: 4 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{s.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 4, padding: 24 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                <p className="eyebrow">Currently available</p>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--ink)', marginBottom: 6 }}>Gilbert, Arizona</p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.7 }}>
                Serving clients locally and nationwide. Remote-first, with optional in-person meetings across the greater Phoenix area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {status !== 'success' && (
        <section style={{ padding: 'clamp(56px, 8vh, 100px) clamp(20px, 5vw, 44px) clamp(80px, 11vh, 130px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 36, textAlign: 'center' }}>
              Before you hit <span className="serif-em">send.</span>
            </h2>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {faqs.map((f, i) => {
                const open = openFaq === i
                return (
                  <div key={f.q} style={{ borderBottom: '1px solid var(--line)' }}>
                    <button onClick={() => setOpenFaq(open ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 4px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(16px, 1.9vw, 20px)', color: open ? 'var(--accent-deep)' : 'var(--ink)', transition: 'color 0.2s' }}>{f.q}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open ? 'var(--accent)' : 'var(--muted)'} strokeWidth="2.5" style={{ flexShrink: 0, transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'none' }}><polyline points="6 9 12 15 18 9" /></svg>
                    </button>
                    <div style={{ maxHeight: open ? 260 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                      <p style={{ padding: '0 0 22px', color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{f.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .contact-method:hover { transform: translateX(2px); background: var(--paper-2) !important; }
        input::placeholder, textarea::placeholder { color: var(--faint); }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 520px) {
          .name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
