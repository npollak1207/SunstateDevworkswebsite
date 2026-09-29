import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { Arrow, CTASection, PageHeader, SectionLabel } from '@/components/editorial'

const PAGE_URL = 'https://sunstatedevworks.com/works/con-gusto'

export const metadata: Metadata = {
  title: 'Con Gusto Case Study: Construction Management for Liberty Military Housing',
  description: 'How Sunstate DevWorks built Con Gusto, the platform that runs day-to-day renovation operations across Liberty Military Housing’s Southern California regions: native iOS and Android apps on a FastAPI and AWS backend.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    url: PAGE_URL,
    title: 'Con Gusto Case Study | Sunstate DevWorks',
    description: 'Native iOS and Android apps on a FastAPI and AWS backend, used by about 350 people to run renovation operations for 10k+ military housing units.',
    images: [{ url: '/work/con-gusto/dashboard.webp', width: 376, height: 812, alt: 'Con Gusto dashboard' }],
  },
}

const stats = [
  { num: '~350', label: 'Active users' },
  { num: '10k+', label: 'Housing units' },
  { num: '−60%', label: 'Internal support tickets' },
  { num: '6', label: 'Developers hired & led' },
]

const roles = [
  { t: 'Property managers', d: 'Portfolio command center, approvals, open invoices, at-risk properties, and plain-English questions answered with live charts.' },
  { t: 'Contractors', d: 'Job assignments, quotes and estimates, change orders, messaging, and a clear view of what is scheduled and what is late.' },
  { t: 'Field crews', d: 'Today’s jobs, progress tracking, photo documentation from the site, and offline access when the signal drops.' },
]

const screens: { src: string; title: string; caption: string }[] = [
  { src: 'dashboard', title: 'Dashboard', caption: 'Portfolio command center with open jobs, approvals, invoices and at-risk properties at a glance.' },
  { src: 'jobs', title: 'Jobs workspace', caption: 'Every work order in one list, filterable by approval state and urgency.' },
  { src: 'job-detail', title: 'Work order', caption: 'Progress tracker, project notes, activity feed and one-tap photo capture.' },
  { src: 'calendar', title: 'Scheduling', caption: 'Shared calendar across crews and contractors.' },
  { src: 'messages', title: 'Messaging', caption: 'Project channels and direct messages, tied to the jobs they are about.' },
  { src: 'notifications', title: 'Notifications', caption: 'Critical delays, schematics to review and approvals, surfaced as they happen.' },
  { src: 'site-docs', title: 'Site documentation', caption: 'Photo documentation organized by project phase, uploaded straight to S3.' },
  { src: 'project-overview', title: 'Project overview', caption: 'Project value, paid to date, milestones and completion for each property.' },
  { src: 'financials', title: 'Financial analysis', caption: 'Budgets, expenses to date, projected margin and cost distribution.' },
  { src: 'account', title: 'Account & security', caption: 'Profile, notification preferences and two-factor authentication.' },
]

const built = [
  { t: 'Native mobile, both platforms', d: 'A SwiftUI app for iOS and a Kotlin / Jetpack Compose app for Android, with job timelines, scheduling, photo uploads and offline caching.' },
  { t: 'Estimates that close', d: 'An estimate builder that generates branded PDFs and sends clients an approval link, so sign-off happens without a phone call.' },
  { t: 'Ask it in plain English', d: 'A natural-language query interface: managers type a question and get back a live data visualization.' },
  { t: 'No more retyping POs', d: 'A PDF import pipeline (pdfplumber table extraction with a heuristic fallback) that turns vendor purchase-order exports into scheduled jobs.' },
]

const quality = [
  { k: '280+', t: 'Automated tests', d: 'pytest unit and integration tests on the API, gating every merge.' },
  { k: 'CI', t: 'Typed and linted', d: 'ruff and mypy checks run in GitHub Actions alongside the test suite.' },
  { k: '2', t: 'Isolated environments', d: 'Separate staging and production. Every release is verified on staging first.' },
  { k: 'PR', t: 'Reviewed changes', d: 'Every change ships through a feature branch and a reviewed pull request.' },
]

function Phone({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div style={{ borderRadius: 28, padding: 7, background: 'var(--ink)', boxShadow: '0 30px 60px -30px rgba(23,20,15,0.45)' }}>
      <div style={{ borderRadius: 22, overflow: 'hidden', background: '#fff' }}>
        <Image src={`/work/con-gusto/${src}.webp`} alt={alt} width={376} height={812} priority={priority} sizes="(max-width: 640px) 70vw, 280px" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </div>
  )
}

function Node({ title, sub, dark }: { title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="arch-node" style={{
      border: `1px solid ${dark ? 'var(--ink-line)' : 'var(--line-2)'}`, borderRadius: 4, padding: '14px 16px',
      background: dark ? 'rgba(255,255,255,0.04)' : 'var(--card)', minWidth: 0,
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: dark ? 'var(--on-dark)' : 'var(--ink)', lineHeight: 1.25 }}>{title}</div>
      {sub && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.04em', color: dark ? 'var(--on-dark-muted)' : 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  )
}

function Flow({ dark }: { dark?: boolean }) {
  return (
    <div className="arch-arrow" aria-hidden style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: dark ? 'var(--accent-2)' : 'var(--accent)' }}>
      <Arrow s={18} />
    </div>
  )
}

function Lane({ label, nodes, dark }: { label: string; nodes: { title: string; sub?: string }[]; dark?: boolean }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: dark ? 'var(--on-dark-muted)' : 'var(--faint)', marginBottom: 12 }}>{label}</p>
      <div className="arch-lane" style={{ display: 'grid', gridTemplateColumns: nodes.map(() => '1fr').join(' 28px '), alignItems: 'stretch', gap: 0 }}>
        {nodes.flatMap((n, i) => [
          ...(i > 0 ? [<Flow key={`a${i}`} dark={dark} />] : []),
          <Node key={n.title} title={n.title} sub={n.sub} dark={dark} />,
        ])}
      </div>
    </div>
  )
}

export default function ConGustoCaseStudy() {
  return (
    <>
      <PageHeader
        eyebrow="Case study · Liberty Military Housing · 2025 to present"
        breadcrumb={[{ label: 'Work', href: '/works' }, { label: 'Con Gusto' }]}
        title={<>Con Gusto: renovation operations, <span className="serif-em" style={{ color: 'var(--accent)' }}>run from one&nbsp;app.</span></>}
        sub="The construction management platform that runs day-to-day renovation operations across Liberty Military Housing’s Southern California regions, for property managers, contractors and field crews."
        ctas={false}
      />

      {/* Stats */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(48px, 7vh, 80px)' }}>
        <div className="cg-stats" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: '24px 26px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 38px)', color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 8, letterSpacing: '-0.02em' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero phones */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(72px, 11vh, 130px)' }}>
        <div className="cg-hero-phones" style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 3vw, 40px)', alignItems: 'end' }}>
          <Reveal delay={0.05}><div style={{ transform: 'translateY(28px)' }}><Phone src="jobs" alt="Con Gusto jobs workspace" priority /></div></Reveal>
          <Reveal delay={0}><Phone src="dashboard" alt="Con Gusto dashboard" priority /></Reveal>
          <Reveal delay={0.1}><div style={{ transform: 'translateY(28px)' }}><Phone src="project-overview" alt="Con Gusto project overview" priority /></div></Reveal>
        </div>
      </section>

      {/* Problem + role */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div className="cg-two" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)' }}>
          <Reveal>
            <SectionLabel index="01">The problem</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 20 }}>
              Thousands of units. Three kinds of users. <span className="serif-em" style={{ color: 'var(--accent)' }}>One source of truth.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>
              Renovating military housing across 10,000+ units means property managers, outside contractors and field crews all working the same jobs, each needing a different view of them.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.75 }}>
              Liberty Military Housing needed a single real-time system of record for that work: who is assigned, what is approved, what it costs and where it stands, available on the phone in the field as well as at the desk.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel index="02">My role</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 20 }}>
              Architect, lead engineer and <span className="serif-em" style={{ color: 'var(--accent)' }}>hiring manager.</span>
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Designed the system architecture: native clients, API, data model, auth and deployment pipeline.',
                'Interviewed, hired and onboarded a team of 6 developers, and manage them directly.',
                'Run the team’s process: specs and tickets, sprint planning, and review of every pull request.',
                'Own the backend and release process, from GitHub Actions through staging to production.',
                'Technical point of contact for Liberty Military Housing stakeholders, 14 months and ongoing.',
              ].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 10, flexShrink: 0 }} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Who uses it */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(72px, 11vh, 130px)' }}>
        <div className="cg-three" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {roles.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: '26px 26px 28px', height: '100%' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Built for</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 10 }}>{r.t}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--muted)' }}>{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we built */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <SectionLabel index="03">What we built</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 40, maxWidth: 860 }}>
              Native apps for the field, <span className="serif-em" style={{ color: 'var(--accent)' }}>a command center for the office.</span>
            </h2>
          </Reveal>
          <div className="cg-built" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 'clamp(56px, 8vh, 88px)' }}>
            {built.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div style={{ borderTop: '2px solid var(--accent)', paddingTop: 18 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 10 }}>{b.t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--muted)' }}>{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="cg-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'clamp(18px, 2.4vw, 32px)', rowGap: 44 }}>
            {screens.map((s, i) => (
              <Reveal key={s.src} delay={(i % 5) * 0.05}>
                <figure>
                  <Phone src={s.src} alt={`Con Gusto ${s.title.toLowerCase()} screen`} />
                  <figcaption style={{ marginTop: 16 }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{s.title}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>{s.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.04em', marginTop: 32 }}>Screens shown with sample data.</p>
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--ink-bg)', color: 'var(--on-dark)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--accent-2)' }}>04</span>
              <span style={{ width: 28, height: 1, background: 'var(--ink-line)' }} />
              <span className="eyebrow" style={{ color: 'var(--on-dark-muted)' }}>Architecture</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--on-dark)', marginBottom: 18, maxWidth: 860 }}>
              Serverless on AWS, <span className="serif-em" style={{ color: 'var(--accent-2)' }}>typed end to&nbsp;end.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--on-dark-muted)', maxWidth: 680, marginBottom: 48 }}>
              A Python FastAPI service packaged as a container image and run on AWS Lambda, behind Cognito authentication, with DynamoDB for data, S3 for job photos and documents, and SES for email.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Lane dark label="Request path" nodes={[
              { title: 'iOS & Android apps', sub: 'SwiftUI · Kotlin / Compose' },
              { title: 'Amazon Cognito', sub: 'Auth · role-based access' },
              { title: 'FastAPI on Lambda', sub: 'Python · container image' },
              { title: 'DynamoDB · S3 · SES', sub: 'Data · media · email' },
            ]} />
            <Lane dark label="Delivery pipeline" nodes={[
              { title: 'GitHub Actions', sub: 'pytest · ruff · mypy' },
              { title: 'Amazon ECR', sub: 'Versioned container images' },
              { title: 'Staging', sub: 'Isolated · verified first' },
              { title: 'Production', sub: 'Promoted after staging' },
            ]} />
          </Reveal>
        </div>
      </section>

      {/* Quality */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <SectionLabel index="05">Engineering quality</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 40, maxWidth: 860 }}>
              Built to be <span className="serif-em" style={{ color: 'var(--accent)' }}>trusted every day.</span>
            </h2>
          </Reveal>
          <div className="cg-built" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {quality.map((q, i) => (
              <Reveal key={q.t} delay={i * 0.05}>
                <div style={{ padding: '26px 26px 30px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 14, letterSpacing: '-0.02em' }}>{q.k}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ink)', marginBottom: 8 }}>{q.t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{q.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div className="cg-two" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'center' }}>
          <Reveal>
            <SectionLabel index="06">Results</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 24 }}>
              The system of record for <span className="serif-em" style={{ color: 'var(--accent)' }}>Southern California.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Con Gusto now runs day-to-day renovation operations across Liberty Military Housing’s Southern California regions. About 350 active users rely on it, dozens of work orders and jobs move through it every week, and the work continues 14 months in.
            </p>
            <Link href="/works" className="btn btn-ghost">See more work <span className="btn-arrow"><Arrow s={15} /></span></Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
              {[
                { n: '−60%', l: 'Internal support tickets' },
                { n: '10k+', l: 'Housing units managed' },
                { n: '~350', l: 'Active users' },
                { n: '14 mo', l: 'Ongoing engagement' },
              ].map((r) => (
                <div key={r.l} style={{ padding: 'clamp(22px, 3vw, 34px)', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--ink)', lineHeight: 1, marginBottom: 10, letterSpacing: '-0.03em' }}>{r.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{r.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Have an operations problem like this?"
        title={<>Let&apos;s build your<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>system of record.</span></>}
        blurb="Tell us how the work gets done today. We will send back a plan, a timeline and a flat price."
      />

      <style>{`
        @media (max-width: 1024px) {
          .cg-gallery { grid-template-columns: repeat(3, 1fr) !important; }
          .cg-built { grid-template-columns: repeat(2, 1fr) !important; }
          .arch-lane { grid-template-columns: 1fr !important; }
          .arch-arrow { transform: rotate(90deg); height: 28px; }
        }
        @media (max-width: 860px) {
          .cg-two, .cg-three { grid-template-columns: 1fr !important; }
          .cg-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cg-gallery { grid-template-columns: repeat(2, 1fr) !important; }
          .cg-built { grid-template-columns: 1fr !important; }
          .cg-hero-phones { grid-template-columns: 1fr !important; max-width: 280px !important; }
          .cg-hero-phones > div:not(:nth-child(2)) { display: none; }
        }
      `}</style>
    </>
  )
}
