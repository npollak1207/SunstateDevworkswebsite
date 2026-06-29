'use client'

import { useEffect, useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   SUNSTATE DEVWORKS — GOOGLE ADS LANDING PAGE
   Conversion-first. Lean & fast. One job: turn paid clicks into leads.
   - No outbound navigation (zero attention leaks)
   - Call + Form get equal weight (hero + sticky mobile bar)
   - Lead-magnet: free quote (2hr reply) + free site teardown
   - Differentiator: you own 100% of the code
   ──────────────────────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

const PHONE_DISPLAY = '(480) 793-9161'
const PHONE_HREF = 'tel:+14807939161'
const EMAIL = 'contact@sunstatedevworks.com'

/* ─── GOOGLE ADS CONVERSION TRACKING ────────────────────────────────────────
   The global gtag base tag (AW-18140545756) is loaded by the root layout.
   Paste your per-action conversion LABELS below (Google Ads → Goals →
   Conversions → open the action → "Tag setup" → the value after the slash,
   e.g. send_to "AW-18140545756/AbC-dEfGhIjK" → label is "AbC-dEfGhIjK").
   Leave blank to skip the Ads event — a GA4-style event still fires either way. */
const GADS_ID = 'AW-18140545756'
const FORM_CONVERSION_LABEL = 'gqFlCPX-u8ccENyFi8pD' // "Sunstate Form Success"
const CALL_CONVERSION_LABEL = '' // TODO: paste your "Phone call" conversion label (optional)

function fireConversion(label: string, eventName: string, extra: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  if (label && window.gtag) {
    window.gtag('event', 'conversion', { send_to: `${GADS_ID}/${label}`, ...extra })
  }
  // Always push a generic event (useful for GA4 / GTM regardless of Ads label)
  if (window.gtag) window.gtag('event', eventName, extra)
  window.dataLayer?.push({ event: eventName, ...extra })
}

/* ─── MESSAGE MATCH — headline swaps to match the ad group via ?s= param ────── */
type HeroVariant = { a: string; grad: string; sub: string }
const HERO_VARIANTS: Record<string, HeroVariant> = {
  default: { a: 'Websites & apps that turn clicks into', grad: 'customers.', sub: 'Hand-coded, conversion-built websites, mobile apps & AI tools for Arizona businesses.' },
  web: { a: 'Custom websites that turn clicks into', grad: 'customers.', sub: 'Hand-coded, lightning-fast websites for Arizona businesses — built to rank on Google and convert visitors into leads.' },
  redesign: { a: 'A website redesign that finally', grad: 'converts.', sub: 'We rebuild slow, dated sites into fast, modern websites that win you customers — for Arizona businesses.' },
  app: { a: 'Custom mobile apps your customers will', grad: 'love.', sub: 'iOS & Android apps from MVP to App Store — native performance, built to spec, shipped on time.' },
  ai: { a: 'AI & automation that does the', grad: 'busywork.', sub: 'Custom AI tools, chatbots and workflow automation for Arizona businesses. Your team stays the same size — your output multiplies.' },
  branding: { a: 'Branding that makes you impossible to', grad: 'ignore.', sub: 'Logo, color, type and brand guides that hold up everywhere — from app icon to billboard.' },
  seo: { a: 'Websites built to rank and', grad: 'convert.', sub: 'Fast, SEO-engineered websites for Arizona businesses — built to climb Google and turn traffic into leads.' },
}

/* ─── PROOF / WORK (pulled from /works) ─────────────────────────────────────── */
const WORKS = [
  { title: 'ELS Platform', cat: 'iOS App · Web Dashboard', accent: 'var(--orange)', rgb: '244,98,42', result: '20 hrs', resultSub: 'saved per week', desc: 'A business-in-a-box iOS app + web dashboard — scheduling, invoicing, CRM and live P&L — replacing 5 disconnected tools.' },
  { title: 'Zona Pest Solutions', cat: 'Web · SEO', accent: 'var(--cyan)', rgb: '0,212,200', result: '#1', resultSub: 'in Scottsdale & Mesa', desc: 'Modern site + SEO strategy that took a pest control company from invisible to top-ranked in months.' },
  { title: 'Cloak Wraps', cat: 'Web · Branding', accent: 'var(--orange)', rgb: '244,98,42', result: "Tempe's #1", resultSub: 'wrap studio', desc: 'Full rebrand and cinematic website for a premium vehicle wrap and PPF studio.' },
  { title: 'Liberty Military Housing', cat: 'AI Dashboard', accent: 'var(--cyan)', rgb: '0,212,200', result: '−60%', resultSub: 'support tickets', desc: 'An AI-driven construction platform — managers ask questions in plain English and get live data across 10k+ housing units.' },
  { title: 'Easy Landscape Solutions', cat: 'Web · Branding', accent: 'var(--orange)', rgb: '244,98,42', result: '67+', resultSub: 'five-star reviews', desc: 'Full rebrand and custom site for a Gilbert hardscape & turf company, with a custom before/after slider and ROC trust signals.' },
  { title: 'Canyon Supply Co', cat: 'E-Commerce · SEO', accent: 'var(--cyan)', rgb: '0,212,200', result: 'Stripe', resultSub: 'live checkout', desc: 'A full e-commerce storefront for a Phoenix equipment supplier — catalog, cart, Stripe checkout and admin, built for local SEO.' },
]

const TESTIMONIALS = [
  { initials: 'AM', name: 'Alex M.', role: 'Owner, Easy Landscape Solutions', accent: 'var(--cyan)', rgb: '0,212,200', body: 'We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything. We got back at least 20 hours a week.' },
  { initials: 'BW', name: 'Billy W.', role: 'Owner, Zona Pest Solutions', accent: 'var(--orange)', rgb: '244,98,42', body: 'The site looks better than I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa.' },
  { initials: 'ZH', name: 'Zach H.', role: 'Owner, Cloak Wraps', accent: 'var(--cyan)', rgb: '0,212,200', body: 'I wanted something that looked as premium as the work we do on cars. They nailed it. Clean, fast, and gets compliments before customers walk in.' },
]

const SERVICES = [
  { tag: '01', accent: 'var(--cyan)', rgb: '0,212,200', title: 'Custom Websites', desc: 'Hand-coded, lightning-fast sites built to rank on Google and convert visitors into paying customers. Zero WordPress bloat.', tags: ['Next.js', 'SEO', 'TypeScript'] },
  { tag: '02', accent: 'var(--orange)', rgb: '244,98,42', title: 'Mobile Apps', desc: 'iOS & Android apps from MVP to App Store. Native performance, built to spec, shipped on time.', tags: ['SwiftUI', 'React Native', 'Kotlin'] },
  { tag: '03', accent: 'var(--cyan)', rgb: '0,212,200', title: 'AI & Automation', desc: 'Custom AI tools, chatbots and workflow automation. Your team stays the same size — your output multiplies.', tags: ['Claude API', 'OpenAI', 'n8n'] },
  { tag: '04', accent: 'var(--orange)', rgb: '244,98,42', title: 'Branding & Identity', desc: 'Logo, color systems, typography and brand guides. An identity that holds up from app icon to billboard.', tags: ['Figma', 'Adobe CC', 'Motion'] },
]

const WHY = [
  { n: '01', accent: 'var(--cyan)', title: 'You own 100%', desc: 'No proprietary platforms, no lock-in. The code is yours on delivery — forever. Take it anywhere.' },
  { n: '02', accent: 'var(--orange)', title: 'Flat-rate pricing', desc: 'Written scope and price upfront. No hourly surprises. You approve the number before we write a line.' },
  { n: '03', accent: 'var(--cyan)', title: 'Built to convert', desc: 'Every site is engineered for speed, SEO and lead capture — not just to look pretty.' },
  { n: '04', accent: 'var(--orange)', title: 'Local Arizona team', desc: 'Real humans in Gilbert, AZ. Direct access — no overseas outsourcing, no call-center queues.' },
]

const STEPS = [
  { n: '01', accent: 'var(--cyan)', title: 'Free Quote', desc: 'Tell us what you need. We reply within 2 hours with next steps.' },
  { n: '02', accent: 'var(--orange)', title: 'Scope & Price', desc: 'A 30-min call, then a written scope with a flat-rate price. You approve before we start.' },
  { n: '03', accent: 'var(--cyan)', title: 'Design & Build', desc: 'We build in sprints and share progress weekly. You stay in the loop.' },
  { n: '04', accent: 'var(--orange)', title: 'Launch & Own It', desc: 'We handle go-live, then hand you the keys. The code is yours.' },
]

/* ─── CSS ───────────────────────────────────────────────────────────────────── */
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cyan:#00D4C8;--orange:#F4622A;
  --navy:#080E17;--navy-mid:#0D1520;--navy-light:#12202E;
  --off-white:#F0F5FA;--muted:#5A7080;
  --border:rgba(255,255,255,.07);
  --mono:'Space Mono',monospace;--sans:'DM Sans',sans-serif;--display:'Syne',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--navy);color:var(--off-white);font-family:var(--sans);overflow-x:hidden;-webkit-font-smoothing:antialiased;cursor:auto;}
a,button{cursor:pointer}
a{text-decoration:none;color:inherit}
input,textarea,select,button{font-family:inherit;outline:none}
img{max-width:100%}

/* ── Cheap CSS aurora (no WebGL) ── */
#lp-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;}
.lp-blob{position:absolute;border-radius:50%;filter:blur(110px);opacity:.55;will-change:transform;}
.lp-b1{width:720px;height:720px;left:-220px;top:-180px;background:radial-gradient(circle,rgba(0,212,200,.14),transparent 65%);animation:lp-f1 26s ease-in-out infinite;}
.lp-b2{width:620px;height:620px;right:-180px;top:18%;background:radial-gradient(circle,rgba(244,98,42,.11),transparent 65%);animation:lp-f2 32s ease-in-out infinite;}
.lp-b3{width:520px;height:520px;left:30%;bottom:-160px;background:radial-gradient(circle,rgba(0,212,200,.08),transparent 65%);animation:lp-f1 22s ease-in-out infinite reverse;}
@keyframes lp-f1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(80px,60px) scale(1.08)}}
@keyframes lp-f2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-70px,40px) scale(1.1)}}
.lp-grid-overlay{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.4;
  background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);
  background-size:64px 64px;mask-image:radial-gradient(circle at 50% 30%,#000,transparent 80%);}

/* ── Scroll progress ── */
#lp-prog{position:fixed;top:0;left:0;z-index:600;height:3px;width:0;background:linear-gradient(90deg,var(--cyan),var(--orange));box-shadow:0 0 10px rgba(0,212,200,.6);}

/* ── HEADER (no outbound nav) ── */
#lp-head{position:fixed;top:0;left:0;right:0;z-index:400;display:flex;align-items:center;justify-content:space-between;
  padding:16px clamp(16px,4vw,52px);transition:padding .3s,background .3s,border-color .3s;border-bottom:1px solid transparent;}
#lp-head.stuck{padding:10px clamp(16px,4vw,52px);background:rgba(8,14,23,.92);backdrop-filter:blur(20px);border-color:rgba(0,212,200,.1);}
.lp-logo{font-family:var(--display);font-weight:800;font-size:17px;letter-spacing:.02em;line-height:1;}
.lp-logo em{color:var(--cyan);font-style:normal}
.lp-logo small{display:block;font-family:var(--mono);font-size:8.5px;font-weight:400;color:var(--muted);letter-spacing:.16em;text-transform:uppercase;margin-top:4px;}
.lp-head-r{display:flex;align-items:center;gap:14px;}
.lp-head-tel{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:13px;font-weight:700;color:var(--off-white);transition:color .2s;}
.lp-head-tel:hover{color:var(--cyan)}
.lp-head-cta{display:inline-flex;align-items:center;gap:7px;background:var(--orange);color:#fff;font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:.06em;text-transform:uppercase;padding:11px 20px;border-radius:6px;transition:box-shadow .2s,transform .15s;}
.lp-head-cta:hover{box-shadow:0 0 30px rgba(244,98,42,.45);transform:translateY(-1px)}

/* ── BUTTONS ── */
.lp-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:var(--display);font-weight:800;font-size:14px;letter-spacing:.04em;border-radius:8px;cursor:pointer;border:none;transition:box-shadow .2s,transform .15s,background .2s,border-color .2s;white-space:nowrap;}
.lp-btn-lg{padding:17px 30px;font-size:15px;}
.lp-btn-cyan{background:var(--cyan);color:var(--navy);}
.lp-btn-cyan:hover{box-shadow:0 0 44px rgba(0,212,200,.4);transform:translateY(-2px)}
.lp-btn-orange{background:var(--orange);color:#fff;}
.lp-btn-orange:hover{box-shadow:0 0 44px rgba(244,98,42,.45);transform:translateY(-2px)}
.lp-btn-ghost{background:rgba(255,255,255,.04);color:var(--off-white);border:1px solid rgba(255,255,255,.14);}
.lp-btn-ghost:hover{border-color:rgba(0,212,200,.5);color:var(--cyan);transform:translateY(-2px)}

/* ── HERO ── */
#lp-hero{position:relative;z-index:2;min-height:100svh;display:flex;align-items:center;padding:120px clamp(20px,5vw,80px) 64px;}
.lp-hero-inner{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(32px,5vw,72px);align-items:center;}
.lp-eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:10px;color:var(--cyan);letter-spacing:.18em;text-transform:uppercase;margin-bottom:24px;border:1px solid rgba(0,212,200,.2);border-radius:40px;padding:6px 14px;}
.lp-eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan);animation:lp-pulse 2s ease-in-out infinite;}
@keyframes lp-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.lp-h1{font-family:var(--display);font-weight:800;font-size:clamp(40px,5.4vw,76px);line-height:1.02;letter-spacing:-.03em;margin-bottom:22px;}
.lp-h1 .grad{background:linear-gradient(100deg,var(--cyan),#6EFFF5 50%,var(--cyan));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.lp-h1 .o{color:var(--orange)}
.lp-sub{font-size:clamp(15px,1.4vw,18px);color:var(--muted);line-height:1.7;max-width:520px;margin-bottom:28px;}
.lp-sub strong{color:var(--off-white);font-weight:600;}
.lp-hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:24px;}
.lp-trust{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.lp-trust-stars{color:#FFBE00;font-size:15px;letter-spacing:1px}
.lp-trust-item{font-family:var(--mono);font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}
.lp-trust-sep{width:1px;height:13px;background:rgba(255,255,255,.12)}

/* ── FORM CARD ── */
.lp-formcard{position:relative;border-radius:16px;padding:1.5px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.5);}
.lp-formcard::before{content:'';position:absolute;inset:-120%;background:conic-gradient(from 0deg,transparent 0deg 90deg,rgba(0,212,200,.7) 150deg,rgba(244,98,42,.6) 210deg,transparent 270deg 360deg);animation:lp-spin 9s linear infinite;}
@keyframes lp-spin{to{transform:rotate(360deg)}}
.lp-formcard-in{position:relative;z-index:1;background:var(--navy-mid);border-radius:15px;padding:clamp(24px,3vw,36px);}
.lp-form-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:6px;}
.lp-form-title{font-family:var(--display);font-weight:800;font-size:24px;letter-spacing:-.02em;}
.lp-form-badge{flex-shrink:0;font-family:var(--mono);font-size:9px;color:var(--cyan);background:rgba(0,212,200,.08);border:1px solid rgba(0,212,200,.22);border-radius:30px;padding:5px 10px;letter-spacing:.08em;text-transform:uppercase;}
.lp-form-note{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:20px;}
.lp-f-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
.lp-f-group{margin-bottom:12px;}
.lp-f-label{display:block;font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px;}
.lp-f-input{width:100%;background:rgba(8,14,23,.85);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:13px 14px;color:var(--off-white);font-size:16px;transition:border-color .2s,box-shadow .2s;}
.lp-f-input:focus{border-color:var(--cyan);box-shadow:0 0 0 3px rgba(0,212,200,.1)}
.lp-f-input::placeholder{color:rgba(90,112,128,.55)}
.lp-f-input option{background:var(--navy-mid)}
textarea.lp-f-input{resize:vertical;min-height:84px}
.lp-f-submit{width:100%;background:var(--orange);color:#fff;border:none;border-radius:8px;padding:17px;font-family:var(--display);font-weight:800;font-size:16px;letter-spacing:.04em;cursor:pointer;transition:box-shadow .2s,transform .15s;margin-top:4px;}
.lp-f-submit:hover:not(:disabled){box-shadow:0 0 44px rgba(244,98,42,.5);transform:translateY(-2px)}
.lp-f-submit:disabled{opacity:.6;cursor:not-allowed}
.lp-f-tiny{font-family:var(--mono);font-size:9px;color:var(--muted);text-align:center;letter-spacing:.06em;text-transform:uppercase;margin-top:12px;}
.lp-f-err{font-family:var(--mono);font-size:12px;color:var(--orange);text-align:center;margin-bottom:10px;}
.lp-form-success{text-align:center;padding:clamp(32px,5vw,56px) 24px;}
.lp-success-icon{width:72px;height:72px;border-radius:50%;margin:0 auto 22px;background:rgba(0,212,200,.08);border:1.5px solid rgba(0,212,200,.3);display:flex;align-items:center;justify-content:center;}
.lp-success-title{font-family:var(--display);font-weight:800;font-size:26px;color:var(--cyan);margin-bottom:12px;}
.lp-success-text{color:var(--muted);font-size:15px;line-height:1.7;max-width:340px;margin:0 auto;}

/* ── MARQUEE (trust strip) ── */
.lp-mq{position:relative;z-index:2;overflow:hidden;background:var(--orange);padding:11px 0;}
.lp-mq-track{display:flex;width:max-content;animation:lp-mqf 30s linear infinite;}
.lp-mq-item{font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#fff;white-space:nowrap;margin-right:26px;display:flex;align-items:center;gap:26px;}
.lp-mq-item::after{content:'◆';opacity:.5;font-size:9px}
@keyframes lp-mqf{to{transform:translateX(-50%)}}

/* ── SECTIONS ── */
.lp-section{position:relative;z-index:2;padding:clamp(64px,8vw,120px) clamp(20px,5vw,80px);}
.lp-inner{max-width:1180px;margin:0 auto;}
.lp-kicker{font-family:var(--mono);font-size:10px;color:var(--cyan);letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:10px;}
.lp-kicker::before{content:'';width:24px;height:1px;background:var(--cyan)}
.lp-kicker.o{color:var(--orange)}.lp-kicker.o::before{background:var(--orange)}
.lp-h2{font-family:var(--display);font-weight:800;font-size:clamp(30px,4vw,54px);line-height:1.05;letter-spacing:-.025em;}
.lp-h2 em{font-style:normal;color:var(--cyan)}.lp-h2 .o{color:var(--orange)}
.lp-lead{color:var(--muted);font-size:16px;line-height:1.7;max-width:560px;margin-top:16px;}

/* ── WHY GRID ── */
.lp-why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:14px;overflow:hidden;}
.lp-why{background:var(--navy-mid);padding:34px 28px;transition:background .25s;}
.lp-why:hover{background:var(--navy-light)}
.lp-why-num{font-family:var(--display);font-weight:800;font-size:34px;line-height:1;margin-bottom:16px;}
.lp-why-title{font-family:var(--display);font-weight:800;font-size:18px;margin-bottom:8px;}
.lp-why-desc{color:var(--muted);font-size:13.5px;line-height:1.65}

/* ── AUDIT BAND ── */
.lp-audit{position:relative;z-index:2;}
.lp-audit-box{max-width:1180px;margin:0 auto;background:linear-gradient(120deg,rgba(0,212,200,.07),rgba(244,98,42,.06));border:1px solid rgba(0,212,200,.18);border-radius:18px;padding:clamp(28px,4vw,52px);display:grid;grid-template-columns:1.3fr 1fr;gap:36px;align-items:center;}
.lp-audit-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px;}
.lp-audit-chip{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:11px;color:var(--off-white);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:30px;padding:7px 13px;letter-spacing:.04em;}
.lp-audit-cta{display:flex;flex-direction:column;gap:12px;}

/* ── SERVICES ── */
.lp-svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
.lp-svc{background:var(--navy-mid);border:1px solid var(--border);border-left-width:3px;border-radius:12px;padding:30px 30px 26px;transition:transform .2s,background .25s,box-shadow .25s;}
.lp-svc:hover{transform:translateY(-3px);background:var(--navy-light);box-shadow:0 24px 50px rgba(0,0,0,.35)}
.lp-svc-tag{font-family:var(--mono);font-size:10px;letter-spacing:.1em;margin-bottom:14px;}
.lp-svc-title{font-family:var(--display);font-weight:800;font-size:23px;letter-spacing:-.01em;margin-bottom:10px;}
.lp-svc-desc{color:var(--muted);font-size:14px;line-height:1.7;margin-bottom:18px}
.lp-svc-tags{display:flex;gap:6px;flex-wrap:wrap}
.lp-svc-tagbadge{font-family:var(--mono);font-size:9px;border-radius:4px;padding:3px 9px;letter-spacing:.04em;border:1px solid}

/* ── WORK ── */
.lp-work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.lp-work{background:var(--navy-mid);border:1px solid var(--border);border-top-width:3px;border-radius:12px;padding:30px 28px;display:flex;flex-direction:column;transition:transform .2s,background .25s}
.lp-work:hover{transform:translateY(-3px);background:var(--navy-light)}
.lp-work-cat{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:12px}
.lp-work-title{font-family:var(--display);font-weight:800;font-size:22px;margin-bottom:12px}
.lp-work-desc{color:var(--muted);font-size:13.5px;line-height:1.65;flex:1;margin-bottom:20px}
.lp-work-result{font-family:var(--display);font-weight:800;font-size:30px;line-height:1;letter-spacing:-.02em}
.lp-work-result-sub{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-top:6px}

/* ── TESTIMONIALS ── */
.lp-testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.lp-testi{background:var(--navy-mid);border:1px solid var(--border);border-radius:12px;padding:30px 28px;display:flex;flex-direction:column}
.lp-testi-stars{color:#FFBE00;font-size:13px;letter-spacing:1px;margin-bottom:16px}
.lp-testi-body{font-size:14.5px;color:var(--off-white);line-height:1.75;opacity:.9;font-style:italic;flex:1;margin-bottom:22px}
.lp-testi-who{display:flex;align-items:center;gap:12px}
.lp-testi-av{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:13px;flex-shrink:0}
.lp-testi-name{font-family:var(--display);font-weight:700;font-size:14px}
.lp-testi-role{font-family:var(--mono);font-size:10px;color:var(--muted);margin-top:3px}

/* ── STEPS ── */
.lp-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:36px;position:relative}
.lp-steps::before{content:'';position:absolute;top:23px;left:12%;right:12%;height:1px;background:linear-gradient(90deg,var(--cyan),var(--orange));opacity:.2}
.lp-step{position:relative;z-index:1}
.lp-step-n{width:48px;height:48px;border-radius:50%;border:1.5px solid;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;font-weight:700;background:var(--navy);margin-bottom:20px}
.lp-step-title{font-family:var(--display);font-weight:800;font-size:17px;margin-bottom:8px}
.lp-step-desc{color:var(--muted);font-size:13px;line-height:1.65}

/* ── REASSURANCE STRIP (under form) ── */
.lp-reassure{list-style:none;display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:center;margin-top:16px}
.lp-reassure li{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:11px;color:var(--muted);letter-spacing:.03em}

/* ── FAQ ── */
.lp-faq{display:flex;flex-direction:column;gap:10px}
.lp-faq-item{background:var(--navy);border:1px solid var(--border);border-radius:10px;overflow:hidden;transition:border-color .2s}
.lp-faq-item[open]{border-color:rgba(0,212,200,.25)}
.lp-faq-item summary{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;padding:20px 24px;font-family:var(--display);font-weight:700;font-size:clamp(15px,2vw,18px);color:var(--off-white);list-style:none}
.lp-faq-item summary::-webkit-details-marker{display:none}
.lp-faq-icon{flex-shrink:0;width:26px;height:26px;border-radius:50%;border:1px solid rgba(0,212,200,.3);color:var(--cyan);display:flex;align-items:center;justify-content:center;font-size:18px;line-height:1;transition:transform .25s}
.lp-faq-item[open] .lp-faq-icon{transform:rotate(45deg)}
.lp-faq-item p{padding:0 24px 22px;color:var(--muted);font-size:14.5px;line-height:1.75;max-width:680px}

/* ── FINAL CTA ── */
.lp-final{position:relative;z-index:2;text-align:center;padding:clamp(72px,9vw,130px) clamp(20px,5vw,80px);background:radial-gradient(circle at 50% 0,rgba(0,212,200,.06),transparent 60%);}
.lp-final-inner{max-width:680px;margin:0 auto}
.lp-final-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:32px}

/* ── FOOTER ── */
.lp-footer{position:relative;z-index:2;background:rgba(5,9,14,1);border-top:1px solid var(--border);padding:26px clamp(20px,5vw,80px);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.lp-footer-copy{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.05em}
.lp-footer a{font-family:var(--mono);font-size:10px;color:var(--cyan);letter-spacing:.05em}

/* ── STICKY MOBILE BAR ── */
#lp-mobar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:500;background:rgba(8,14,23,.96);backdrop-filter:blur(18px);border-top:1px solid rgba(0,212,200,.16);padding:10px 12px;padding-bottom:calc(10px + env(safe-area-inset-bottom,0));gap:10px;box-shadow:0 -6px 30px rgba(0,0,0,.4)}
#lp-mobar a{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;padding:14px;border-radius:9px;font-family:var(--display);font-weight:800;font-size:14px;letter-spacing:.03em}
#lp-mobar .call{background:rgba(255,255,255,.06);color:var(--off-white);border:1px solid rgba(255,255,255,.14)}
#lp-mobar .quote{background:var(--orange);color:#fff}

/* ── SCROLL REVEAL ── */
.rv{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}
.rv.in{opacity:1;transform:translateY(0)}
.d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}

@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  .rv{opacity:1;transform:none}
}

/* ── RESPONSIVE ── */
@media(max-width:980px){
  .lp-hero-inner{grid-template-columns:1fr;gap:36px}
  .lp-why-grid{grid-template-columns:repeat(2,1fr)}
  .lp-work-grid,.lp-testi-grid{grid-template-columns:repeat(2,1fr)}
  .lp-steps{grid-template-columns:repeat(2,1fr);gap:30px}
  .lp-steps::before{display:none}
  .lp-audit-box{grid-template-columns:1fr;gap:24px}
}
@media(max-width:768px){
  #lp-mobar{display:flex}
  #lp-hero{padding-top:96px;padding-bottom:104px;min-height:auto}
  .lp-footer{padding-bottom:104px;flex-direction:column;text-align:center}
  .lp-head-tel{display:none}
  #lp-head{padding:11px 14px;gap:10px}
  #lp-head.stuck{padding:9px 14px}
  .lp-logo{font-size:14px;letter-spacing:0;white-space:nowrap;flex-shrink:0}
  .lp-head-cta{padding:9px 14px;font-size:11px;letter-spacing:.03em;flex-shrink:0}
  .lp-svc-grid{grid-template-columns:1fr}
  /* Hero: order copy first, but keep the form high — show it right after CTAs */
  .lp-h1{font-size:clamp(34px,8.5vw,52px)}
  .lp-hero-ctas{gap:10px}
  .lp-hero-ctas .lp-btn{flex:1 1 100%;width:100%}
  .lp-section{padding-top:clamp(56px,11vw,80px);padding-bottom:clamp(56px,11vw,80px)}
  .lp-final-ctas .lp-btn{flex:1 1 100%;width:100%}
}
@media(max-width:600px){
  .lp-work-grid,.lp-testi-grid{grid-template-columns:1fr}
  .lp-form-title{font-size:21px}
  .lp-logo small{display:none}
  .lp-formcard-in{padding:22px 18px}
}
@media(max-width:480px){
  .lp-why-grid{grid-template-columns:1fr}
  .lp-steps{grid-template-columns:1fr}
  .lp-f-row{grid-template-columns:1fr;gap:0}
  .lp-f-row > div{margin-bottom:12px}
  .lp-h2{font-size:clamp(26px,8vw,38px)}
  .lp-audit-box{padding:24px 18px}
  .lp-eyebrow{font-size:9px;padding:5px 12px}
  .lp-logo{font-size:13px}
  .lp-head-cta{padding:8px 12px;font-size:10.5px}
}
`

/* ─── ICONS ─────────────────────────────────────────────────────────────────── */
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a2 2 0 012-2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 8.2a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
)
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
)

export default function LandingPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', hasSite: '', message: '' })
  const [hp, setHp] = useState('') // honeypot — humans never see/fill this
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [hero, setHero] = useState<HeroVariant>(HERO_VARIANTS.default)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const onCallClick = () => fireConversion(CALL_CONVERSION_LABEL, 'phone_call')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const messageParts = [
      form.phone ? `Phone: ${form.phone}` : null,
      form.hasSite ? `Current website: ${form.hasSite}` : null,
      '',
      form.message || '(No additional details provided)',
    ].filter(v => v !== null).join('\n')
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: '',
          service: form.service || 'Not specified',
          budget: 'Google Ads Lead',
          message: messageParts,
          _hp: hp, // honeypot — server silently drops if filled
        }),
      })
      if (r.ok) {
        setStatus('success')
        fireConversion(FORM_CONVERSION_LABEL, 'generate_lead', { form_service: form.service || 'unspecified' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    // Message match: swap the headline to match the ad group (?s=web|app|ai|branding|seo|redesign).
    // Applied post-hydration on purpose — server + first client render use the default
    // variant so the markup matches; this then upgrades it from the URL on the client.
    const s = new URLSearchParams(window.location.search).get('s')?.toLowerCase()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (s && HERO_VARIANTS[s]) setHero(HERO_VARIANTS[s])

    const head = document.getElementById('lp-head')
    const prog = document.getElementById('lp-prog')
    const onScroll = () => {
      const y = window.scrollY
      head?.classList.toggle('stuck', y > 40)
      const tot = document.documentElement.scrollHeight - window.innerHeight
      if (prog) prog.style.width = (tot > 0 ? (y / tot) * 100 : 0) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const obs = new IntersectionObserver(
      entries => entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in') }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('lp-quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => document.getElementById('lp-f-name')?.focus(), 600)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div id="lp-bg">
        <div className="lp-blob lp-b1" /><div className="lp-blob lp-b2" /><div className="lp-blob lp-b3" />
      </div>
      <div className="lp-grid-overlay" />
      <div id="lp-prog" />

      {/* ── HEADER ── */}
      <header id="lp-head">
        <div className="lp-logo">
          SUNSTATE<em>.</em>DEVWORKS
          <small>Gilbert, AZ · Custom Web · Apps · AI</small>
        </div>
        <div className="lp-head-r">
          <a href={PHONE_HREF} onClick={onCallClick} className="lp-head-tel"><IconPhone /> {PHONE_DISPLAY}</a>
          <a href="#lp-quote" onClick={scrollToForm} className="lp-head-cta">Free Quote</a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="lp-hero">
        <div className="lp-hero-inner">
          {/* Left: pitch */}
          <div>
            <span className="lp-eyebrow"><span className="dot" /> Now booking Arizona projects</span>
            <h1 className="lp-h1">
              {hero.a} <span className="grad">{hero.grad}</span>
            </h1>
            <p className="lp-sub">
              {hero.sub}{' '}
              Get a <strong>free quote with a reply in 2 hours</strong> — and <strong>you own 100% of the code</strong>, forever. No templates, no monthly ransom.
            </p>
            <div className="lp-hero-ctas">
              <a href="#lp-quote" onClick={scrollToForm} className="lp-btn lp-btn-cyan lp-btn-lg">Get My Free Quote <IconArrow /></a>
              <a href={PHONE_HREF} onClick={onCallClick} className="lp-btn lp-btn-ghost lp-btn-lg"><IconPhone /> Call {PHONE_DISPLAY}</a>
            </div>
            <div className="lp-trust">
              <span className="lp-trust-stars">★★★★★</span>
              <span className="lp-trust-item">4.9★ Rated</span>
              <span className="lp-trust-sep" />
              <span className="lp-trust-item">10+ Projects</span>
              <span className="lp-trust-sep" />
              <span className="lp-trust-item">2-Hour Reply</span>
            </div>
          </div>

          {/* Right: lead form */}
          <div className="lp-quote-col">
          <div id="lp-quote" className="lp-formcard rv">
            <div className="lp-formcard-in">
              {status === 'success' ? (
                <div className="lp-form-success">
                  <div className="lp-success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <div className="lp-success-title">Got it — talk soon!</div>
                  <p className="lp-success-text">Expect a reply within 2 hours during business hours. A confirmation is on its way to your inbox now.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="lp-form-head">
                    <div className="lp-form-title">Get your free quote</div>
                    <span className="lp-form-badge">2-hr reply</span>
                  </div>
                  <p className="lp-form-note">No pressure, no obligation. Already have a site? We&apos;ll include a free teardown.</p>

                  <div className="lp-f-row">
                    <div>
                      <label className="lp-f-label" htmlFor="lp-f-name">Name *</label>
                      <input id="lp-f-name" className="lp-f-input" type="text" placeholder="Jane Smith" required value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="lp-f-label" htmlFor="lp-f-phone">Phone</label>
                      <input id="lp-f-phone" className="lp-f-input" type="tel" placeholder="(480) 000-0000" value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>

                  <div className="lp-f-group">
                    <label className="lp-f-label" htmlFor="lp-f-email">Email *</label>
                    <input id="lp-f-email" className="lp-f-input" type="email" placeholder="jane@company.com" required value={form.email} onChange={set('email')} />
                  </div>

                  <div className="lp-f-row">
                    <div>
                      <label className="lp-f-label" htmlFor="lp-f-service">I need</label>
                      <select id="lp-f-service" className="lp-f-input" value={form.service} onChange={set('service')}>
                        <option value="">Select…</option>
                        <option>A new website</option>
                        <option>A website redesign</option>
                        <option>A mobile app</option>
                        <option>AI / automation</option>
                        <option>Branding &amp; identity</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="lp-f-label" htmlFor="lp-f-site">Current website?</label>
                      <select id="lp-f-site" className="lp-f-input" value={form.hasSite} onChange={set('hasSite')}>
                        <option value="">Select…</option>
                        <option>Yes — want a free teardown</option>
                        <option>No — starting fresh</option>
                      </select>
                    </div>
                  </div>

                  <div className="lp-f-group">
                    <label className="lp-f-label" htmlFor="lp-f-msg">What are you looking to build? <span style={{ opacity: .55 }}>(optional)</span></label>
                    <textarea id="lp-f-msg" className="lp-f-input" rows={3} placeholder="A few sentences about your project, timeline, or goals." value={form.message} onChange={set('message')} />
                  </div>

                  {/* Honeypot — hidden from humans, catches bots */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                    <label htmlFor="lp-f-website">Website</label>
                    <input id="lp-f-website" type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={e => setHp(e.target.value)} />
                  </div>

                  {status === 'error' && (
                    <p className="lp-f-err">Something went wrong — email us at <a href={`mailto:${EMAIL}`} style={{ color: 'var(--orange)' }}>{EMAIL}</a></p>
                  )}

                  <button type="submit" className="lp-f-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Get My Free Quote →'}
                  </button>
                  <p className="lp-f-tiny">Reply in under 2 hours · No spam, ever</p>
                </form>
              )}
            </div>
          </div>
          <ul className="lp-reassure">
            {['Free, no-obligation quote', 'Reply within 2 hours', 'You own 100% of the code'].map(t => (
              <li key={t}><IconCheck /> {t}</li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ── */}
      <div className="lp-mq">
        <div className="lp-mq-track">
          {[0, 1].map(dup => (
            <div className="lp-mq-item" key={dup}>
              {['Hand-Coded', 'No Templates', 'You Own It', 'Built To Convert', 'Flat-Rate Pricing', 'Local Arizona', '2-Hour Reply', 'SEO-Ready'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY ── */}
      <section className="lp-section">
        <div className="lp-inner">
          <div className="rv" style={{ marginBottom: 40 }}>
            <div className="lp-kicker">Why Sunstate</div>
            <h2 className="lp-h2">Built right. <em>Owned by you.</em></h2>
          </div>
          <div className="lp-why-grid">
            {WHY.map((w, i) => (
              <div className={`lp-why rv d${(i % 3) + 1}`} key={w.n} style={{ borderTop: `3px solid ${w.accent}` }}>
                <div className="lp-why-num" style={{ color: w.accent }}>{w.n}</div>
                <div className="lp-why-title">{w.title}</div>
                <p className="lp-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE AUDIT BAND ── */}
      <section className="lp-audit lp-section" style={{ paddingTop: 0 }}>
        <div className="lp-audit-box rv">
          <div>
            <div className="lp-kicker o">Free Website Teardown</div>
            <h2 className="lp-h2" style={{ fontSize: 'clamp(26px,3.2vw,40px)' }}>
              Already have a site? <span className="o">See what&apos;s costing you leads.</span>
            </h2>
            <p className="lp-lead">We&apos;ll review your current site for free and show you exactly where you&apos;re losing customers — no strings attached.</p>
            <div className="lp-audit-list">
              {['Load speed', 'Google / SEO', 'Mobile experience', 'Conversion & lead capture', 'Design & trust'].map(c => (
                <span className="lp-audit-chip" key={c}><IconCheck /> {c}</span>
              ))}
            </div>
          </div>
          <div className="lp-audit-cta">
            <a href="#lp-quote" onClick={scrollToForm} className="lp-btn lp-btn-orange lp-btn-lg">Get My Free Teardown <IconArrow /></a>
            <a href={PHONE_HREF} onClick={onCallClick} className="lp-btn lp-btn-ghost lp-btn-lg"><IconPhone /> Or call us now</a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="lp-section" style={{ background: 'var(--navy-mid)' }}>
        <div className="lp-inner">
          <div className="rv" style={{ marginBottom: 40 }}>
            <div className="lp-kicker">What We Build</div>
            <h2 className="lp-h2">One team. <em>Full stack.</em></h2>
            <p className="lp-lead">From a fast marketing site to a full custom app — designed, coded, and shipped by people you can actually talk to.</p>
          </div>
          <div className="lp-svc-grid">
            {SERVICES.map((s, i) => (
              <div className={`lp-svc rv d${(i % 2) + 1}`} key={s.tag} style={{ borderLeftColor: s.accent }}>
                <div className="lp-svc-tag" style={{ color: s.accent }}>{s.tag} — Service</div>
                <div className="lp-svc-title">{s.title}</div>
                <p className="lp-svc-desc">{s.desc}</p>
                <div className="lp-svc-tags">
                  {s.tags.map(t => (
                    <span className="lp-svc-tagbadge" key={t} style={{ color: s.accent, background: `rgba(${s.rgb},.07)`, borderColor: `rgba(${s.rgb},.22)` }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="lp-section">
        <div className="lp-inner">
          <div className="rv" style={{ marginBottom: 40 }}>
            <div className="lp-kicker o">Selected Work</div>
            <h2 className="lp-h2">Real results for <span className="o">real businesses.</span></h2>
          </div>
          <div className="lp-work-grid">
            {WORKS.map((w, i) => (
              <div className={`lp-work rv d${(i % 3) + 1}`} key={w.title} style={{ borderTopColor: w.accent }}>
                <div className="lp-work-cat">{w.cat}</div>
                <div className="lp-work-title">{w.title}</div>
                <p className="lp-work-desc">{w.desc}</p>
                <div className="lp-work-result" style={{ color: w.accent }}>{w.result}</div>
                <div className="lp-work-result-sub">{w.resultSub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-section" style={{ background: 'var(--navy-mid)' }}>
        <div className="lp-inner">
          <div className="rv" style={{ marginBottom: 40 }}>
            <div className="lp-kicker">Client Results</div>
            <h2 className="lp-h2">Don&apos;t take our word <em>for it.</em></h2>
          </div>
          <div className="lp-testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className={`lp-testi rv d${(i % 3) + 1}`} key={t.name}>
                <div className="lp-testi-stars">★★★★★</div>
                <p className="lp-testi-body">&ldquo;{t.body}&rdquo;</p>
                <div className="lp-testi-who">
                  <div className="lp-testi-av" style={{ background: `rgba(${t.rgb},.1)`, border: `2px solid rgba(${t.rgb},.28)`, color: t.accent }}>{t.initials}</div>
                  <div>
                    <div className="lp-testi-name" style={{ color: t.accent }}>{t.name}</div>
                    <div className="lp-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="lp-section">
        <div className="lp-inner">
          <div className="rv" style={{ marginBottom: 56, textAlign: 'center' }}>
            <div className="lp-kicker" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="lp-h2">From quote to launch. <em>No confusion.</em></h2>
          </div>
          <div className="lp-steps">
            {STEPS.map((s, i) => (
              <div className={`lp-step rv d${(i % 3) + 1}`} key={s.n}>
                <div className="lp-step-n" style={{ borderColor: s.accent, color: s.accent }}>{s.n}</div>
                <div className="lp-step-title">{s.title}</div>
                <p className="lp-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lp-section" style={{ background: 'var(--navy-mid)' }}>
        <div className="lp-inner" style={{ maxWidth: 820 }}>
          <div className="rv" style={{ marginBottom: 36, textAlign: 'center' }}>
            <div className="lp-kicker" style={{ justifyContent: 'center' }}>Common Questions</div>
            <h2 className="lp-h2">Answers before you <em>ask.</em></h2>
          </div>
          <div className="lp-faq rv">
            {[
              { q: 'How much does a website cost?', a: 'Every project is flat-rate and quoted up front — you approve the exact price before any work starts, with zero hourly surprises. Most small-business sites are more affordable than you’d expect. Request a free quote and we’ll give you a real number.' },
              { q: 'How long does it take?', a: 'Most marketing websites launch in about 2–4 weeks. Apps and custom platforms vary with scope. You’ll get a clear timeline alongside your quote.' },
              { q: 'Do I really own the code?', a: 'Yes — 100% of it, on delivery. No proprietary platforms, no lock-in, no monthly ransom. Host it with us or take it anywhere you like.' },
              { q: 'What if I already have a website?', a: 'We’ll run a free teardown showing exactly where your current site is losing leads, then only recommend a redesign if it actually makes sense for you.' },
              { q: 'Do you only work with Gilbert businesses?', a: 'No — we’re based in Gilbert but serve all of metro Phoenix (Scottsdale, Chandler, Mesa, Tempe, Peoria and beyond), and we work with clients remotely too.' },
            ].map((f, i) => (
              <details className="lp-faq-item" key={i}>
                <summary>{f.q}<span className="lp-faq-icon" aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="lp-final">
        <div className="lp-final-inner rv">
          <div className="lp-kicker" style={{ justifyContent: 'center' }}>Ready When You Are</div>
          <h2 className="lp-h2">Let&apos;s build something <em>that works.</em></h2>
          <p className="lp-lead" style={{ margin: '16px auto 0' }}>Free quote, reply in 2 hours, and a flat-rate price before we start. The code is yours to keep.</p>
          <div className="lp-final-ctas">
            <a href="#lp-quote" onClick={scrollToForm} className="lp-btn lp-btn-cyan lp-btn-lg">Get My Free Quote <IconArrow /></a>
            <a href={PHONE_HREF} onClick={onCallClick} className="lp-btn lp-btn-orange lp-btn-lg"><IconPhone /> Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <span className="lp-footer-copy">© 2026 Sunstate DevWorks · Gilbert, AZ · All rights reserved</span>
        <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/privacy">Privacy Policy</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </span>
      </footer>

      {/* ── STICKY MOBILE BAR ── */}
      <div id="lp-mobar">
        <a href={PHONE_HREF} onClick={onCallClick} className="call"><IconPhone /> Call</a>
        <a href="#lp-quote" onClick={scrollToForm} className="quote">Free Quote <IconArrow /></a>
      </div>
    </>
  )
}
