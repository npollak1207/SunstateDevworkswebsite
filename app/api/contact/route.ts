import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// ── Basic in-memory rate limit (best-effort per warm instance) ──
const RATE_LIMIT = 5 // max submissions
const RATE_WINDOW_MS = 10 * 60 * 1000 // per 10 minutes per IP
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  // Opportunistic cleanup so the map doesn't grow unbounded
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every(t => now - t >= RATE_WINDOW_MS)) hits.delete(k)
  }
  return recent.length > RATE_LIMIT
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, service, budget, message } = body
    const honeypot = body._hp ?? body.website ?? ''

    // ── Honeypot: bots fill the hidden field. Pretend success, send nothing. ──
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return NextResponse.json({ success: true })
    }

    // ── Rate limit by client IP ──
    const ip = (req.headers.get('x-forwarded-for')?.split(',')[0].trim()) || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
    }
    const resend = new Resend(apiKey)

    // ── Notification email to Sunstate team ──
    await resend.emails.send({
      from: 'Contact Form <contact@sunstatedevworks.com>',
      to: ['contact@sunstatedevworks.com'],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` · ${company}` : ''}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#0D1B2A;font-family:'Courier New',monospace;">
<div style="max-width:600px;margin:0 auto;padding:40px 24px;">

  <div style="border-bottom:1px solid rgba(0,212,200,0.2);padding-bottom:20px;margin-bottom:28px;">
    <p style="margin:0 0 4px;font-size:10px;color:#00D4C8;letter-spacing:0.12em;text-transform:uppercase;">Sunstate DevWorks · New Lead</p>
    <h1 style="margin:0;font-size:22px;color:#F0EDE6;font-weight:700;">Project Inquiry</h1>
  </div>

  <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:24px;margin-bottom:20px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:7px 0;font-size:10px;color:#7A8FA6;text-transform:uppercase;letter-spacing:0.08em;width:90px;">Name</td><td style="padding:7px 0;font-size:14px;color:#F0EDE6;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:7px 0;font-size:10px;color:#7A8FA6;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="padding:7px 0;font-size:14px;color:#00D4C8;">${email}</td></tr>
      ${company ? `<tr><td style="padding:7px 0;font-size:10px;color:#7A8FA6;text-transform:uppercase;letter-spacing:0.08em;">Company</td><td style="padding:7px 0;font-size:14px;color:#F0EDE6;">${company}</td></tr>` : ''}
      ${service ? `<tr><td style="padding:7px 0;font-size:10px;color:#7A8FA6;text-transform:uppercase;letter-spacing:0.08em;">Service</td><td style="padding:7px 0;font-size:14px;color:#F4622A;font-weight:600;">${service}</td></tr>` : ''}
      ${budget ? `<tr><td style="padding:7px 0;font-size:10px;color:#7A8FA6;text-transform:uppercase;letter-spacing:0.08em;">Budget</td><td style="padding:7px 0;font-size:14px;color:#F0EDE6;">${budget}</td></tr>` : ''}
    </table>
  </div>

  <div style="background:rgba(0,212,200,0.04);border:1px solid rgba(0,212,200,0.12);border-radius:8px;padding:24px;margin-bottom:28px;">
    <p style="margin:0 0 10px;font-size:10px;color:#00D4C8;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
    <p style="margin:0;font-size:14px;color:#F0EDE6;line-height:1.8;white-space:pre-wrap;">${message}</p>
  </div>

  <div style="text-align:center;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
    <p style="margin:0 0 6px;font-size:13px;color:#F0EDE6;font-weight:600;">Reply directly to: <span style="color:#00D4C8;">${email}</span></p>
    <p style="margin:0;font-size:11px;color:#7A8FA6;">Hit reply in your email client — it goes straight to them.</p>
  </div>

</div>
</body>
</html>`,
    })

    // ── Auto-reply to the person who submitted ──
    await resend.emails.send({
      from: 'Nick @ Sunstate DevWorks <contact@sunstatedevworks.com>',
      to: [email],
      subject: `Got it, ${name.split(' ')[0]} — we'll be in touch soon`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#0D1B2A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<div style="max-width:560px;margin:0 auto;padding:48px 24px;">

  <div style="border-bottom:1px solid rgba(0,212,200,0.15);padding-bottom:24px;margin-bottom:32px;">
    <p style="margin:0 0 8px;font-size:11px;color:#00D4C8;letter-spacing:0.12em;text-transform:uppercase;font-family:'Courier New',monospace;">Sunstate DevWorks · Gilbert, AZ</p>
    <h1 style="margin:0;font-size:28px;color:#F0EDE6;font-weight:800;letter-spacing:-0.02em;line-height:1.1;">We got your message,<br /><span style="color:#00D4C8;">${name.split(' ')[0]}.</span></h1>
  </div>

  <p style="margin:0 0 20px;font-size:16px;color:#7A8FA6;line-height:1.8;">Thanks for reaching out. We typically respond within a couple of hours during business hours — someone from our team will be in touch shortly to set up a quick discovery call.</p>

  ${service ? `<div style="background:rgba(244,98,42,0.06);border:1px solid rgba(244,98,42,0.15);border-radius:8px;padding:16px 20px;margin-bottom:24px;"><p style="margin:0;font-size:13px;color:#7A8FA6;font-family:'Courier New',monospace;text-transform:uppercase;letter-spacing:0.08em;">You selected: <span style="color:#F4622A;font-weight:700;">${service}</span></p></div>` : ''}

  <p style="margin:0 0 32px;font-size:16px;color:#7A8FA6;line-height:1.8;">In the meantime, feel free to browse our work at <a href="https://sunstatedevworks.com/works" style="color:#00D4C8;">sunstatedevworks.com/works</a>.</p>

  <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
    <p style="margin:0;font-size:13px;color:#7A8FA6;line-height:1.7;">— Nick &amp; the Sunstate DevWorks team<br /><span style="color:#00D4C8;">contact@sunstatedevworks.com</span><br /><span style="font-size:11px;font-family:'Courier New',monospace;letter-spacing:0.06em;text-transform:uppercase;">Gilbert, Arizona · Available Now</span></p>
  </div>

</div>
</body>
</html>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}