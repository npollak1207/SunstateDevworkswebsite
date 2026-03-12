import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const features = [
  {
    title: 'Custom AI Chatbots',
    desc: 'Trained on your docs, your products, your tone. Not a generic ChatGPT wrapper — a real AI agent that knows your business.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Workflow Automation',
    desc: 'Connect your tools. Automate the repetitive. CRM updates, email sequences, invoice generation, data sync — handled without a human in the loop.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'AI-Powered Features',
    desc: 'Embedding AI into your existing product — summarization, classification, search, recommendation. Not a new app, just a smarter one.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'Document Intelligence',
    desc: 'Extract, classify, and summarize documents at scale. Contracts, invoices, reports — processed automatically without manual review.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    color: 'var(--cyan)',
  },
  {
    title: 'Internal Knowledge Bots',
    desc: 'Your team asks questions. The bot answers from your actual docs, SOPs, and internal knowledge base. Onboarding time drops. Mistakes drop.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round"/></svg>,
    color: 'var(--orange)',
  },
  {
    title: 'n8n & API Integrations',
    desc: 'Connect anything to anything. We build n8n pipelines, Zapier replacements, and custom API middleware that actually works at scale.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    color: 'var(--cyan)',
  },
]

const useCases = [
  { title: 'Lead Qualification Bot', industry: 'Sales & Services', desc: 'AI that qualifies inbound leads, answers FAQs, and books meetings — without a human available 24/7.' },
  { title: 'Invoice Processing Automation', industry: 'Finance & Admin', desc: 'Extract line items from uploaded invoices, match against POs, flag discrepancies — automatically.' },
  { title: 'Knowledge Base Assistant', industry: 'Operations & HR', desc: 'Internal bot that knows your SOPs, policies, and onboarding docs. New hires ask questions, it answers instantly.' },
  { title: 'Report Generation Pipeline', industry: 'Analytics & Reporting', desc: 'Pull from multiple data sources, generate formatted reports, email to stakeholders — on a schedule, automatically.' },
  { title: 'Customer Support Tier 1', industry: 'E-Commerce & SaaS', desc: 'AI handles order status, returns policy, account questions — escalates only what it can\'t resolve.' },
  { title: 'Content Classification', industry: 'Media & Content', desc: 'Tag, categorize, and route incoming content — UGC, support tickets, form submissions — at any volume.' },
]

const techStack = [
  { cat: 'AI Models', items: ['Claude API', 'OpenAI GPT-4o', 'Gemini', 'Local LLMs'] },
  { cat: 'Automation', items: ['n8n', 'Custom pipelines', 'Webhooks', 'Cron jobs'] },
  { cat: 'Vector & Search', items: ['Pinecone', 'pgvector', 'Supabase AI', 'Embeddings'] },
  { cat: 'Integrations', items: ['Slack', 'Notion', 'HubSpot', 'Any REST API'] },
  { cat: 'Backend', items: ['Laravel', 'Node.js', 'Python', 'Supabase Edge'] },
  { cat: 'Infra', items: ['Cloudflare Workers', 'Vercel AI SDK', 'Docker', 'VPS'] },
]

const faqs = [
  { q: 'Do you use ChatGPT?', a: 'We use the underlying models — OpenAI, Anthropic Claude, Google Gemini — via API, not consumer products. This means you\'re calling the model directly, with full control over the prompt, context, and data.' },
  { q: 'Is my data used to train AI models?', a: 'No. When using API access to models, your data is not used for training. We also structure prompts and data handling to minimize exposure of sensitive business information.' },
  { q: 'How is this different from Zapier?', a: 'Zapier is for simple if/then rules. We build logic that handles edge cases, uses AI to interpret unstructured data, and doesn\'t break when inputs are messy. Real automation vs. simple triggers.' },
  { q: 'We\'re not a tech company. Can we still use this?', a: 'That\'s who this is built for. Contractors, healthcare practices, law firms, real estate teams — businesses that run on repetitive processes. AI doesn\'t care what industry you\'re in.' },
  { q: 'What does a typical project look like?', a: 'Discovery call → we map your workflows and identify what to automate → build and test the pipeline → deploy → train your team. Most projects are 3–8 weeks.' },
]

export default function AIAutomationPage() {
  return (
    <>
      {/* ── Header ── */}
      <section style={{ padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(244,98,42,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(244,98,42,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-5%', top: '30%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,98,42,0.05) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', left: '20%', bottom: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,200,0.04) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <Link href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>→</span>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>AI & Automation</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }} className="service-header-grid">
            <div>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>04 — Service</p>
              <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginBottom: 32 }}>
                AI &amp;<br /><span style={{ color: 'var(--orange)' }}>Automation</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                Your team stays the same size. Your output multiplies. Custom AI integrations and workflow automation for businesses that run on repetition.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                  Start a Project →
                </Link>
                <Link href="/pricing" style={{ border: '1px solid rgba(244,98,42,0.3)', color: 'var(--orange)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Automation visual */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ background: 'var(--navy-mid)', border: '1px solid rgba(244,98,42,0.12)', borderRadius: 12, padding: 24, fontFamily: 'Space Mono, monospace', fontSize: 12, lineHeight: 2 }}>
                <p style={{ color: 'var(--text-muted)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Automation Pipeline</p>
                {[
                  { step: 'TRIGGER', label: 'New form submission', color: 'var(--orange)' },
                  { step: 'AI', label: 'Classify & qualify lead', color: 'var(--cyan)' },
                  { step: 'ACTION', label: 'Update CRM record', color: 'var(--orange)' },
                  { step: 'NOTIFY', label: 'Slack → sales team', color: 'var(--cyan)' },
                  { step: 'EMAIL', label: 'Send personalized reply', color: 'var(--orange)' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: i < 4 ? 4 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 20 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                      {i < 4 && <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.06)', marginTop: 2 }} />}
                    </div>
                    <div style={{ flex: 1, background: 'var(--navy)', border: `1px solid ${i < 4 ? 'rgba(255,255,255,0.04)' : 'rgba(0,212,200,0.1)'}`, borderRadius: 6, padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, color: item.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.step}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.label}</span>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(40,200,64,0.08)', border: '1px solid rgba(40,200,64,0.2)', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28C840', boxShadow: '0 0 6px #28C840' }} />
                  <span style={{ fontSize: 10, color: '#28C840', letterSpacing: '0.06em' }}>PIPELINE ACTIVE · 0 errors · avg 1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: '100px 24px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>What We Build</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 64 }}>
              Real AI.<br /><span style={{ color: 'var(--orange)' }}>Not a Zapier with a logo.</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-lift" style={{ background: 'var(--navy)', padding: '36px 32px', borderTop: `3px solid ${f.color}`, height: '100%' }}>
                  <div style={{ color: f.color, marginBottom: 20 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, marginBottom: 10, color: 'var(--off-white)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.75 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Use Cases</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 64 }}>
              Seen it. Built it.<br /><span style={{ color: 'var(--cyan)' }}>Deployed it.</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="features-grid">
            {useCases.map((u, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-lift" style={{ background: 'var(--navy-mid)', padding: '32px', borderBottom: `2px solid ${i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)'}`, height: '100%' }}>
                  <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 9, color: i % 2 === 0 ? 'var(--cyan)' : 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{u.industry}</p>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, marginBottom: 10, color: 'var(--off-white)', lineHeight: 1.2 }}>{u.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>{u.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section style={{ padding: '80px 24px', background: 'var(--navy-mid)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 48 }}>Tech Stack</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 32 }}>
            {techStack.map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: i % 2 === 0 ? 'var(--orange)' : 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{s.cat}</p>
                {s.items.map(item => (
                  <p key={item} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--text-muted)', marginBottom: 6 }}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 48 }}>
              Common<br /><span style={{ color: 'var(--orange)' }}>questions</span>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ background: 'var(--navy-mid)', padding: '28px 32px', borderLeft: '3px solid rgba(244,98,42,0.25)' }}>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--off-white)' }}>{f.q}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.75 }}>{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(244,98,42,0.012) 20px, rgba(244,98,42,0.012) 40px)' }} />
        <ScrollReveal>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, marginBottom: 24 }}>
              Stop doing it<br /><span style={{ color: 'var(--orange)' }}>manually.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 440, margin: '0 auto 40px' }}>
              Tell us the workflow. We&apos;ll automate it. Discovery call is 30 minutes and free.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--orange)', color: 'white', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }} className="glow-pulse">
                Start a Project →
              </Link>
              <Link href="/about" style={{ border: '1px solid rgba(244,98,42,0.3)', color: 'var(--orange)', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                About the Studio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <style>{`
        .service-header-grid { grid-template-columns: 1fr 1fr; }
        .features-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 900px) {
          .service-header-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}
