import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { Arrow, CTASection, SectionLabel } from '@/components/editorial'
import { BrowserFrame, LandscapeFrame, PhoneFrame, ProjectRender } from './Frames'
import ProjectLinks from './ProjectLinks'
import { caseStudyHref, nextProject, type CaseStudy, type Project } from '@/lib/projects'

const SITE = 'https://sunstatedevworks.com'

const h2 = { fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--ink)' } as const

function Heading({ parts, size = 'clamp(28px, 3.4vw, 44px)', mb = 20, dark }: { parts: [string, string]; size?: string; mb?: number; dark?: boolean }) {
  return (
    <h2 style={{ ...h2, fontSize: size, marginBottom: mb, color: dark ? 'var(--on-dark)' : 'var(--ink)' }}>
      {parts[0]} <span className="serif-em" style={{ color: dark ? 'var(--accent-2)' : 'var(--accent)' }}>{parts[1]}</span>
    </h2>
  )
}

export default function CaseStudyPage({ project: p }: { project: Project & { study: CaseStudy } }) {
  const s = p.study
  const url = `${SITE}${caseStudyHref(p)}`
  const next = nextProject(p.slug)
  const desktopShots = s.gallery.filter((g) => g.device === 'desktop')
  const mobileShots = s.gallery.filter((g) => g.device === 'mobile')
  const landscapeShots = s.gallery.filter((g) => g.device === 'landscape')
  const site = p.links.find((l) => l.kind === 'site' || l.kind === 'play')

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE}/works` },
          { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: `${p.title} case study`,
        url,
        description: p.seo.description,
        dateCreated: p.year,
        creator: { '@id': `${SITE}/#business` },
        keywords: p.tags.join(', '),
        ...(site ? { sameAs: site.href } : {}),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 200px) clamp(20px, 5vw, 44px) clamp(40px, 6vh, 64px)' }}>
        <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 0%, #000, transparent 72%)' }} />
        <div aria-hidden style={{ position: 'absolute', top: '-24%', right: '-8%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26, flexWrap: 'wrap' }}>
              <Link href="/works" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Work</Link>
              <span style={{ color: 'var(--faint)', fontSize: 11 }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              Case study · {p.client} · {p.location} · {p.year}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 6.4vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 28, maxWidth: 1000 }}>
              {s.headline[0]} <span className="serif-em" style={{ color: 'var(--accent)' }}>{s.headline[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: 660, marginBottom: 34 }}>{s.sub}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <ProjectLinks links={p.links} status={p.status} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      {p.metrics.length > 0 && (
        <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(48px, 7vh, 80px)' }}>
          <div className="cs-stats" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${Math.min(p.metrics.length + 1, 4)}, 1fr)`, borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {p.metrics.map((m) => (
              <div key={m.label} style={{ padding: '24px 26px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 38px)', color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 8, letterSpacing: '-0.02em' }}>{m.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{m.label}</div>
              </div>
            ))}
            {p.metrics.length < 4 && (
              <div style={{ padding: '24px 26px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 24px)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8, letterSpacing: '-0.01em' }}>{p.cat}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scope</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Hero render */}
      <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(72px, 11vh, 130px)' }}>
        <Reveal>
          <div style={{ maxWidth: p.render.kind === 'app' || p.render.kind === 'diagram' ? 1000 : 1180, margin: '0 auto' }}>
            <ProjectRender project={p} size="hero" priority />
          </div>
        </Reveal>
      </section>

      {/* Brief + role */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', borderTop: '1px solid var(--line)' }}>
        <div className="cs-two" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)' }}>
          <Reveal>
            <SectionLabel index="01">The brief</SectionLabel>
            <Heading parts={s.challengeHeading} />
            {s.challenge.map((t, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 14 }}>{t}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel index="02">What we did</SectionLabel>
            <Heading parts={s.roleHeading} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {s.role.map((t) => (
                <li key={t} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-2)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 10, flexShrink: 0 }} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What we built + gallery */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)', background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Reveal>
            <SectionLabel index="03">What we built</SectionLabel>
            <Heading parts={s.builtHeading} size="clamp(32px, 4.4vw, 60px)" mb={40} />
          </Reveal>
          <div className="cs-built" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(s.built.length, 4)}, 1fr)`, gap: 20, marginBottom: s.gallery.length ? 'clamp(56px, 8vh, 88px)' : 0 }}>
            {s.built.map((b, i) => (
              <Reveal key={b.t} delay={(i % 4) * 0.05}>
                <div style={{ borderTop: '2px solid var(--accent)', paddingTop: 18 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 10 }}>{b.t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--muted)' }}>{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {desktopShots.length > 0 && (
            <div className="cs-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(22px, 3vw, 40px)', rowGap: 48, marginBottom: mobileShots.length || landscapeShots.length ? 56 : 0 }}>
              {desktopShots.map((g, i) => (
                <Reveal key={g.src} delay={(i % 2) * 0.06}>
                  <figure>
                    <BrowserFrame src={g.src} alt={`${p.title}: ${g.title}`} w={g.w} h={g.h} sizes="(max-width: 860px) 92vw, 600px" />
                    <figcaption style={{ marginTop: 16 }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{g.title}</span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 520 }}>{g.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}

          {landscapeShots.length > 0 && (
            <div className="cs-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(22px, 3vw, 40px)', rowGap: 48, marginBottom: mobileShots.length ? 56 : 0 }}>
              {landscapeShots.map((g, i) => (
                <Reveal key={g.src} delay={(i % 2) * 0.06}>
                  <figure>
                    <LandscapeFrame src={g.src} alt={`${p.title}: ${g.title}`} w={g.w ?? 1600} h={g.h ?? 720} sizes="(max-width: 860px) 92vw, 600px" />
                    <figcaption style={{ marginTop: 16 }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{g.title}</span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 520 }}>{g.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}

          {mobileShots.length > 0 && (
            <div className="cs-gallery" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(Math.max(mobileShots.length, 3), 5)}, 1fr)`, gap: 'clamp(18px, 2.4vw, 32px)', rowGap: 44 }}>
              {mobileShots.map((g, i) => (
                <Reveal key={g.src} delay={(i % 5) * 0.05}>
                  <figure>
                    <PhoneFrame src={g.src} alt={`${p.title}: ${g.title}`} w={g.w} h={g.h} bare={g.bare} sizes="(max-width: 640px) 44vw, 240px" />
                    <figcaption style={{ marginTop: 16 }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{g.title}</span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>{g.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
          {s.galleryNote && <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--faint)', letterSpacing: '0.04em', marginTop: 32 }}>{s.galleryNote}</p>}
        </div>
      </section>

      {/* Field notes */}
      {s.notes && s.notes.length > 0 && (
        <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <Reveal>
              <SectionLabel>Field notes</SectionLabel>
              <Heading parts={['Real problems,', 'real fixes.']} size="clamp(32px, 4.4vw, 60px)" mb={40} />
            </Reveal>
            <div className="cs-notes" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {s.notes.map((n, i) => (
                <Reveal key={n.t} delay={(i % 2) * 0.06}>
                  <article style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: 'clamp(24px, 3vw, 34px)', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 16 }}>{n.t}</h3>
                    {([['Situation', n.situation], ['What we did', n.action], ['Result', n.result]] as const).map(([k, v]) => (
                      <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12, padding: '10px 0', borderTop: '1px solid var(--line)' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: k === 'Result' ? 'var(--accent-deep)' : 'var(--faint)', paddingTop: 3 }}>{k}</span>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: k === 'Result' ? 'var(--ink)' : 'var(--muted)' }}>{v}</p>
                      </div>
                    ))}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stack */}
      <section style={{ padding: 'clamp(64px, 10vh, 110px) clamp(20px, 5vw, 44px)', background: 'var(--ink-bg)', color: 'var(--on-dark)' }}>
        <div className="cs-two" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--accent-2)' }}>04</span>
              <span style={{ width: 28, height: 1, background: 'var(--ink-line)' }} />
              <span className="eyebrow" style={{ color: 'var(--on-dark-muted)' }}>Under the hood</span>
            </div>
            <Heading parts={['The stack,', 'hand-picked.']} size="clamp(30px, 4vw, 52px)" dark />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--on-dark-muted)', maxWidth: 520 }}>
              {s.stackNote ?? 'Every tool here was chosen for this project, not copied from a template. The client owns all of it.'}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', borderTop: '1px solid var(--ink-line)', borderLeft: '1px solid var(--ink-line)' }}>
              {p.tech.map((t) => (
                <li key={t} style={{ padding: '18px 18px', borderRight: '1px solid var(--ink-line)', borderBottom: '1px solid var(--ink-line)', fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '0.03em', color: 'var(--on-dark)' }}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: 'clamp(72px, 11vh, 130px) clamp(20px, 5vw, 44px)' }}>
        <div className="cs-two" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'center' }}>
          <Reveal>
            <SectionLabel index="05">Results</SectionLabel>
            <Heading parts={s.resultsHeading} size="clamp(32px, 4.4vw, 60px)" mb={24} />
            {s.results.map((t, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>{t}</p>
            ))}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 18 }}>
              <ProjectLinks links={p.links} status={p.status} compact />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            {p.testimonial ? (
              <figure style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: 'clamp(28px, 3.4vw, 44px)' }}>
                <span aria-hidden style={{ display: 'flex', gap: 2, marginBottom: 14 }}>{[...Array(5)].map((_, i) => <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}</span>
                <blockquote style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(19px, 1.9vw, 24px)', lineHeight: 1.5, color: 'var(--ink)', marginBottom: 22 }}>“{p.testimonial.body}”</blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{p.testimonial.initials}</span>
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--ink)' }}>{p.testimonial.name}</span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{p.testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            ) : (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 6, padding: 'clamp(24px, 3vw, 36px)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" strokeWidth="2" style={{ marginTop: 4, flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(18px, 1.8vw, 22px)', lineHeight: 1.45, color: 'var(--ink)' }}>{p.highlight}</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      {next && next.slug !== p.slug && (
        <section style={{ padding: '0 clamp(20px, 5vw, 44px) clamp(72px, 11vh, 120px)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <Link href={caseStudyHref(next)} className="cs-next" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: 'clamp(26px, 3.4vw, 40px) 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>
              <span>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>Next case study</span>
                <span className="cs-next-title" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 4.4vw, 56px)', letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1, transition: 'color 0.3s' }}>{next.title}</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 10 }}>{next.cat}</span>
              </span>
              <span className="cs-next-arrow" style={{ color: 'var(--accent)', transition: 'transform 0.3s', display: 'inline-flex' }}><Arrow s={34} /></span>
            </Link>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Have a project like this?"
        title={<>Let&apos;s build<br /><span className="serif-em" style={{ color: 'var(--accent)' }}>yours next.</span></>}
        blurb="Tell us what you are building. We will send back a plan and a timeline."
      />

      <style>{`
        .cs-next:hover .cs-next-title { color: var(--accent-deep) !important; }
        .cs-next:hover .cs-next-arrow { transform: translateX(6px); }
        @media (max-width: 1024px) {
          .cs-gallery { grid-template-columns: repeat(3, 1fr) !important; }
          .cs-built { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .cs-two, .cs-desktop, .cs-notes { grid-template-columns: 1fr !important; }
          .cs-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cs-gallery { grid-template-columns: repeat(2, 1fr) !important; }
          .cs-built { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
