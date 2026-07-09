import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Sunstate DevWorks collects, uses, and protects your information.',
  alternates: { canonical: 'https://sunstatedevworks.com/privacy' },
}

const EMAIL = 'contact@sunstatedevworks.com'
const EFFECTIVE = 'June 28, 2026'

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: 'Who we are',
    body: (
      <p>
        Sunstate DevWorks (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a custom web, mobile,
        and AI development studio based in Gilbert, Arizona. This policy explains what information we collect when
        you visit our website or contact us, how we use it, and the choices you have.
      </p>
    ),
  },
  {
    h: 'Information we collect',
    body: (
      <>
        <p>We collect information in two ways:</p>
        <ul>
          <li><strong>Information you give us.</strong> When you submit a contact or quote form, we collect the details you provide, typically your name, email address, phone number (optional), and any project details you share.</li>
          <li><strong>Information collected automatically.</strong> Like most websites, we and our analytics and advertising partners automatically receive standard technical data such as your IP address, browser type, device information, referring pages, and how you interact with our site, via cookies and similar technologies.</li>
        </ul>
      </>
    ),
  },
  {
    h: 'How we use your information',
    body: (
      <ul>
        <li>To respond to your inquiry, prepare a quote, and provide the services you request.</li>
        <li>To send you a confirmation and follow-up communications related to your request.</li>
        <li>To measure and improve the performance of our website and advertising (including Google Ads conversion tracking).</li>
        <li>To protect our site from spam, fraud, and abuse.</li>
      </ul>
    ),
  },
  {
    h: 'Cookies, analytics & advertising',
    body: (
      <p>
        We use Google Ads and related Google services to measure the effectiveness of our advertising and to
        understand how visitors use our site. These services may set cookies and collect usage data to attribute
        conversions and, where applicable, support remarketing. You can opt out of personalized Google advertising
        via <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> and
        control cookies through your browser settings. For more on how Google uses data, see{' '}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google&apos;s policy</a>.
      </p>
    ),
  },
  {
    h: 'How we share information',
    body: (
      <>
        <p>We do not sell your personal information. We share it only with service providers who help us operate our business, including:</p>
        <ul>
          <li><strong>Resend</strong>, to deliver contact-form and confirmation emails.</li>
          <li><strong>Google</strong>, for analytics and advertising measurement.</li>
          <li><strong>Vercel</strong>, our website hosting provider.</li>
        </ul>
        <p>We may also disclose information if required by law or to protect our rights, safety, or property.</p>
      </>
    ),
  },
  {
    h: 'Data retention',
    body: (
      <p>
        We keep the information you submit for as long as needed to respond to your request and for our legitimate
        business records. You can ask us to delete your information at any time (see below).
      </p>
    ),
  },
  {
    h: 'Your choices & rights',
    body: (
      <p>
        You may request access to, correction of, or deletion of the personal information we hold about you by
        emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. You can also unsubscribe from any non-essential email at any time.
      </p>
    ),
  },
  {
    h: "Children's privacy",
    body: (
      <p>
        Our website and services are not directed to children under 13, and we do not knowingly collect personal
        information from them.
      </p>
    ),
  },
  {
    h: 'Changes to this policy',
    body: (
      <p>
        We may update this policy from time to time. When we do, we will revise the &ldquo;Effective&rdquo; date
        above. Material changes will be reflected on this page.
      </p>
    ),
  },
  {
    h: 'Contact us',
    body: (
      <p>
        Questions about this policy or your information? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        Sunstate DevWorks, Gilbert, Arizona.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(128px, 20vh, 190px) clamp(20px, 5vw, 44px) clamp(80px, 11vh, 120px)' }}>
      <div className="grid-bg" aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 60%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000, transparent 60%)' }} />
      <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
        <p className="eyebrow" style={{ marginBottom: 22 }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: 'var(--ink)', marginBottom: 16 }}>
          Privacy <span className="serif-em" style={{ color: 'var(--accent)' }}>Policy.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em', marginBottom: 52 }}>Effective {EFFECTIVE}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map((s, i) => (
            <div key={i}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 12, color: 'var(--ink)' }}>{s.h}</h2>
              <div className="privacy-body" style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', fontSize: 16, lineHeight: 1.8 }}>{s.body}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
          <Link href="/" className="u-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink)' }}>Back to home</Link>
        </div>
      </div>

      <style>{`
        .privacy-body a { color: var(--accent-deep); text-decoration: underline; text-underline-offset: 2px; }
        .privacy-body ul { margin: 12px 0 0; padding-left: 20px; display: flex; flex-direction: column; gap: 10px; }
        .privacy-body li { line-height: 1.7; }
        .privacy-body p + p { margin-top: 12px; }
        .privacy-body strong { color: var(--ink); font-weight: 600; }
      `}</style>
    </section>
  )
}
