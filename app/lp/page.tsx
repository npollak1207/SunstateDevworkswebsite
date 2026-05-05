'use client'

import { useEffect, useRef } from 'react'

/* ─── WORKS DATA ──────────────────────────────────────────────────────────── */
const WORKS = [
  { num:'01', title:'Liberty Military Housing', cat:'AI Dashboard', accent:'var(--cyan)', accentRgb:'0,212,200', tech:['Next.js','Python','OpenAI','PostgreSQL'], year:'2024', desc:'A centralized AI-driven construction management platform that turned thousands of data points across military housing renovations into a real-time source of truth.', result:'60% fewer support tickets', resultLabel:'Support Tickets', highlight:'Natural language interface — managers ask questions in plain English, the AI returns live data visualizations instantly.', url:null },
  { num:'02', title:'ELS Platform', cat:'iOS App · Web Dashboard', accent:'var(--orange)', accentRgb:'244,98,42', tech:['SwiftUI','Firebase','Stripe API','Mapbox'], year:'2024', desc:'A full business-in-a-box iOS app and web dashboard — replacing 5 disconnected apps with one unified platform for scheduling, invoicing, CRM, and real-time P&L tracking.', result:'20hrs saved per week', resultLabel:'Admin Time', highlight:'Custom financial module tracks profitability per job in real time — something no off-the-shelf software could provide.', url:'https://apps.apple.com/us/app/easy-ls-business-app/id6755699624' },
  { num:'03', title:'Cloak Wraps', cat:'Web · Branding', accent:'var(--cyan)', accentRgb:'0,212,200', tech:['Next.js','TypeScript','Framer Motion','CSS'], year:'2024', desc:"Premium custom website for Tempe's leading vehicle wrap and PPF studio. Full rebrand with cinematic hero video, animated service pages, and a bespoke quote request flow.", result:"Tempe's #1 wrap studio", resultLabel:'Market Position', highlight:'EV specialist studio page built to capture the fast-growing Tesla / Rivian wrap market in the Phoenix Valley.', url:'https://www.cloakwraps.com' },
  { num:'04', title:'Zona Pest Solutions', cat:'Web · SEO', accent:'var(--orange)', accentRgb:'244,98,42', tech:['Next.js','TypeScript','FieldRoutes API','SEO'], year:'2024', desc:"Modern website and SEO strategy for Scottsdale and Mesa's top-rated pest control company. Built to rank, convert, and integrate with their FieldRoutes customer portal.", result:'#1 in Scottsdale & Mesa', resultLabel:'Local SEO Rank', highlight:'Subscription plan architecture designed to drive $59–$99/mo recurring revenue directly from the site.', url:'https://www.zonapestsolutions.com' },
  { num:'05', title:'Easy Landscape Solutions', cat:'Web · Branding', accent:'var(--cyan)', accentRgb:'0,212,200', tech:['HTML','CSS','JavaScript','Figma'], year:'2024', desc:'Full rebrand and custom site for a Gilbert, AZ hardscape and artificial turf company. Before/after drag slider, consultation form with photo uploads, and ROC license trust signals.', result:'67+ five-star reviews', resultLabel:'Google Reviews', highlight:'Interactive before/after drag comparison built custom — no plugins, no libraries, pure JS.', url:'https://www.easylandscapesolutions.com' },
  { num:'06', title:'Canyon Cleaning Solutions', cat:'Web', accent:'var(--orange)', accentRgb:'244,98,42', tech:['Next.js','TypeScript','CSS'], year:'2025', desc:'Clean, conversion-focused website for a residential and commercial cleaning company. Service area pages, instant quote request flow, and trust-building social proof sections.', result:'Live on Vercel', resultLabel:'Deployment', highlight:'Structured for local SEO from the ground up — service area pages built to rank city by city.', url:'https://canyon-cleaning-solutions-tmr5.vercel.app' },
]

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --cyan:#00D4C8;--orange:#F4622A;
  --navy:#080E17;--navy-mid:#0D1520;--navy-light:#12202E;
  --off-white:#F0F5FA;--muted:#5A7080;
  --border:rgba(255,255,255,.05);
  --mono:'Space Mono',monospace;--sans:'DM Sans',sans-serif;--display:'Syne',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--navy);color:var(--off-white);font-family:var(--sans);overflow-x:hidden;cursor:none;}
a{text-decoration:none;color:inherit}
input,textarea,select,button{font-family:inherit;outline:none}

/* ── AURORA ── */
#lp-aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;}
.lp-aurora-blob{position:absolute;border-radius:50%;filter:blur(120px);will-change:transform;}
.lp-ab1{width:900px;height:900px;left:-200px;top:-200px;background:radial-gradient(circle,rgba(0,212,200,.12) 0%,transparent 65%);animation:lp-ab1 22s ease-in-out infinite;}
.lp-ab2{width:700px;height:700px;right:-150px;bottom:-100px;background:radial-gradient(circle,rgba(244,98,42,.1) 0%,transparent 65%);animation:lp-ab2 28s ease-in-out infinite;}
.lp-ab3{width:500px;height:500px;left:40%;top:30%;background:radial-gradient(circle,rgba(0,212,200,.07) 0%,transparent 65%);animation:lp-ab3 18s ease-in-out infinite;}
@keyframes lp-ab1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(120px,80px) scale(1.1)}66%{transform:translate(-60px,140px) scale(.92)}}
@keyframes lp-ab2{0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(-100px,-80px) scale(1.12)}70%{transform:translate(80px,-40px) scale(.95)}}
@keyframes lp-ab3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-80px,60px) scale(1.08)}}

/* ── CURSOR (desktop/mouse only) ── */
@media(hover:hover) and (pointer:fine){
  body{cursor:none}
  #lp-cursor-dot{width:6px;height:6px;border-radius:50%;background:var(--cyan);position:fixed;top:0;left:0;z-index:9999;pointer-events:none;transform:translate(-50%,-50%);mix-blend-mode:screen;transition:width .15s,height .15s,background .15s;}
  #lp-cursor-ring{width:28px;height:28px;border-radius:50%;border:1px solid rgba(0,212,200,.6);position:fixed;top:0;left:0;z-index:9998;pointer-events:none;transform:translate(-50%,-50%);transition:width .25s,height .25s,border-color .2s;}
  #lp-cursor-label{position:fixed;top:0;left:0;z-index:9997;pointer-events:none;font-family:var(--mono);font-size:9px;color:var(--cyan);letter-spacing:.1em;opacity:0;transition:opacity .2s;transform:translate(18px,-18px);white-space:nowrap;}
  body.lp-ch #lp-cursor-dot{width:10px;height:10px;background:var(--orange)}
  body.lp-ch #lp-cursor-ring{width:48px;height:48px;border-color:rgba(244,98,42,.5)}
  body.lp-ch #lp-cursor-label{opacity:1}
}
@media(hover:none),(pointer:coarse){
  #lp-cursor-dot,#lp-cursor-ring,#lp-cursor-label{display:none!important}
  body{cursor:auto}
  a,button{cursor:pointer}
}

/* ── PROGRESS ── */
#lp-prog{position:fixed;top:0;left:0;z-index:600;height:2px;width:0%;background:linear-gradient(90deg,var(--cyan),var(--orange));transition:width .05s linear;box-shadow:0 0 12px rgba(0,212,200,.7);}

/* ── NAV ── */
#lp-nav{position:fixed;top:0;left:0;right:0;z-index:300;padding:18px 52px;display:flex;align-items:center;justify-content:space-between;transition:all .4s ease;border-bottom:1px solid transparent;}
#lp-nav.stuck{padding:12px 52px;background:rgba(8,14,23,.97);border-color:rgba(0,212,200,.08);backdrop-filter:blur(24px);}
.lp-logo{font-family:var(--display);font-weight:800;font-size:17px;letter-spacing:.04em;color:var(--off-white);line-height:1.1;flex-shrink:1;min-width:0;}
.lp-logo em{color:var(--cyan);font-style:normal}
.lp-logo-full{display:inline;}
.lp-logo-short{display:none;font-size:15px;letter-spacing:.02em;}
.lp-logo-sub{display:block;font-family:var(--mono);font-size:9px;font-weight:400;color:var(--muted);letter-spacing:.2em;text-transform:uppercase;margin-top:2px;}
.lp-mag-btn-short{display:none;}
.lp-nav-r{display:flex;align-items:center;gap:16px;flex-shrink:0;}
.lp-nav-tel{font-family:var(--mono);font-size:11px;color:var(--muted);display:flex;align-items:center;gap:6px;transition:color .2s;white-space:nowrap;}
.lp-nav-tel:hover{color:var(--cyan)}
.lp-mag-btn{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:#fff;font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:.1em;text-transform:uppercase;padding:11px 22px;border-radius:4px;transition:box-shadow .2s;position:relative;overflow:hidden;white-space:nowrap;}
.lp-mag-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.18) 50%,transparent 70%);transform:translateX(-100%);transition:transform .45s ease;}
.lp-mag-btn:hover::before{transform:translateX(100%)}
.lp-mag-btn:hover{box-shadow:0 0 40px rgba(244,98,42,.5)}

/* ─────────────────────────────────────────────────────────────
   ── HERO EDITOR  (VS Code style, full featured)
   ───────────────────────────────────────────────────────────── */
#lp-hero{position:relative;z-index:2;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:160px clamp(28px,7vw,100px) 80px;}
.lp-hero-inner{max-width:1500px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.lp-tag{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,212,200,.2);border-radius:2px;padding:5px 14px;margin-bottom:36px;opacity:0;animation:lp-up .7s .1s forwards;}
.lp-tag-dot{width:5px;height:5px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan);animation:lp-pulse 2s ease-in-out infinite;}
@keyframes lp-pulse{0%,100%{box-shadow:0 0 6px var(--cyan)}50%{box-shadow:0 0 16px var(--cyan),0 0 32px rgba(0,212,200,.3)}}
.lp-tag-text{font-family:var(--mono);font-size:9px;color:var(--cyan);letter-spacing:.2em;text-transform:uppercase;}
.lp-h1{font-family:var(--display);font-weight:800;font-size:clamp(56px,7vw,120px);line-height:.88;letter-spacing:-.04em;margin-bottom:32px;opacity:0;animation:lp-up .8s .2s forwards;transform-style:preserve-3d;}
.lp-h1-solid{display:block;color:var(--off-white);}
.lp-h1-stroke{display:block;-webkit-text-stroke:2px var(--orange);color:transparent;position:relative;}
.lp-h1-stroke::after{content:attr(data-text);position:absolute;inset:0;-webkit-text-stroke:0;color:var(--orange);opacity:0;filter:blur(20px);transition:opacity .3s;}
.lp-h1-stroke:hover::after{opacity:.4}
.lp-h1-fill{display:block;background:linear-gradient(100deg,var(--cyan),#6EFFF5 35%,var(--cyan) 65%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:lp-shimmer 4s linear infinite;}
@keyframes lp-shimmer{to{background-position:-300% center}}
.lp-hero-sub{font-size:clamp(15px,1.4vw,18px);color:var(--muted);line-height:1.9;max-width:480px;margin-bottom:40px;font-weight:300;opacity:0;animation:lp-up .7s .45s forwards;}
.lp-hero-sub strong{color:var(--off-white);font-weight:600;}
.lp-btns{display:flex;gap:16px;flex-wrap:wrap;opacity:0;animation:lp-up .7s .6s forwards;}
.lp-btn-cta{display:inline-flex;align-items:center;gap:10px;background:var(--cyan);color:var(--navy);font-family:var(--display);font-weight:800;font-size:14px;letter-spacing:.08em;text-transform:uppercase;padding:18px 40px;border-radius:4px;border:none;cursor:pointer;transition:box-shadow .2s,transform .1s;position:relative;overflow:hidden;}
.lp-btn-cta::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent 40%,rgba(255,255,255,.3));transform:translateX(-100%);transition:transform .4s;}
.lp-btn-cta:hover::before{transform:translateX(0)}
.lp-btn-cta:hover{box-shadow:0 0 50px rgba(0,212,200,.45);transform:translateY(-2px)}
.lp-btn-outline{display:inline-flex;align-items:center;gap:10px;color:var(--off-white);font-family:var(--display);font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;padding:18px 40px;border-radius:4px;border:1px solid rgba(255,255,255,.1);background:transparent;cursor:pointer;transition:border-color .2s,color .2s,transform .1s;}
.lp-btn-outline:hover{border-color:rgba(0,212,200,.5);color:var(--cyan);transform:translateY(-2px)}
.lp-trust{display:flex;align-items:center;gap:18px;margin-top:40px;flex-wrap:wrap;opacity:0;animation:lp-up .7s .75s forwards;}
.lp-trust-stars{color:#FFBE00;font-size:13px;letter-spacing:1px}
.lp-trust-sep{width:1px;height:14px;background:rgba(255,255,255,.1)}
.lp-trust-item{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase}

/* VS Code Editor Widget */
.lp-editor-wrap{opacity:0;animation:lp-up .9s .3s forwards;position:relative;}
.lp-editor{
  background:#0E1117;border:1px solid rgba(255,255,255,.08);border-radius:10px;
  overflow:hidden;box-shadow:0 48px 100px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.04),0 0 80px rgba(0,212,200,.05) inset;
  font-family:var(--mono);font-size:11.5px;line-height:1.7;
}
/* Title bar */
.lp-ed-bar{display:flex;align-items:center;gap:0;background:#161B22;border-bottom:1px solid rgba(255,255,255,.06);padding:0;}
.lp-ed-dots{display:flex;gap:6px;padding:10px 14px;border-right:1px solid rgba(255,255,255,.05);}
.lp-ed-dot{width:10px;height:10px;border-radius:50%;}
.lp-ed-tabs{display:flex;flex:1;overflow:hidden;}
.lp-ed-tab{
  padding:8px 16px;font-family:var(--mono);font-size:10px;letter-spacing:.04em;
  border-right:1px solid rgba(255,255,255,.05);white-space:nowrap;cursor:default;
  color:var(--muted);transition:color .2s,background .2s;
}
.lp-ed-tab.active{color:var(--off-white);background:#0E1117;border-bottom:1px solid var(--cyan);}
.lp-ed-tab.modified::after{content:'●';margin-left:5px;font-size:8px;color:var(--orange);}
.lp-ed-status{padding:0 12px;font-family:var(--mono);font-size:9px;color:var(--muted);display:flex;align-items:center;gap:10px;border-left:1px solid rgba(255,255,255,.05);}
.lp-ed-status-dot{width:5px;height:5px;border-radius:50%;background:#4ADE80;box-shadow:0 0 6px #4ADE80;}

/* Layout: line numbers + code + minimap */
.lp-ed-body{display:grid;grid-template-columns:44px 1fr 52px;height:340px;overflow:hidden;position:relative;}
.lp-ed-gutter{background:#0E1117;border-right:1px solid rgba(255,255,255,.04);padding:10px 0;text-align:right;color:rgba(255,255,255,.18);font-size:10px;line-height:1.7;user-select:none;overflow:hidden;}
.lp-ed-gutter span{display:block;padding-right:10px;}
.lp-ed-gutter span.active-line{color:var(--off-white)}

.lp-ed-code{padding:10px 16px;overflow:hidden;position:relative;white-space:pre;}
/* Syntax tokens */
.tok-kw{color:#FF79C6}     /* keyword: const export function return */
.tok-fn{color:#50FA7B}     /* function name */
.tok-str{color:#F1FA8C}    /* string */
.tok-var{color:#BD93F9}    /* variable/prop */
.tok-num{color:#FFB86C}    /* number */
.tok-cmt{color:#6272A4;font-style:italic}  /* comment */
.tok-tag{color:#FF79C6}    /* JSX tag */
.tok-attr{color:#50FA7B}   /* JSX attr */
.tok-op{color:#FF79C6}     /* operator = : */
.tok-cls{color:#8BE9FD}    /* class/component */
.tok-plain{color:#F8F8F2}  /* default */
.tok-css-prop{color:#50FA7B}
.tok-css-val{color:#F1FA8C}

/* Typing cursor in code */
.lp-ed-caret{
  display:inline-block;width:2px;height:14px;background:var(--cyan);
  vertical-align:text-bottom;margin-left:1px;
  animation:lp-caret .8s step-end infinite;
}
@keyframes lp-caret{0%,100%{opacity:1}50%{opacity:0}}

/* Active line highlight */
.lp-ed-active-line{
  position:absolute;left:0;right:0;height:19.55px;
  background:rgba(255,255,255,.03);pointer-events:none;
}

/* Minimap */
.lp-ed-minimap{background:#0A0F16;border-left:1px solid rgba(255,255,255,.04);padding:6px 4px;overflow:hidden;}
.lp-ed-mm-line{height:2px;border-radius:1px;margin-bottom:1.5px;opacity:.4;}
.lp-ed-mm-viewport{position:absolute;right:0;width:52px;height:60px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);}

/* Bottom status bar */
.lp-ed-statusbar{
  display:flex;align-items:center;justify-content:space-between;
  background:#007ACC;padding:3px 12px;font-family:var(--mono);font-size:9px;color:rgba(255,255,255,.85);
}
.lp-ed-sb-l{display:flex;gap:14px;align-items:center;}
.lp-ed-sb-r{display:flex;gap:12px;align-items:center;opacity:.7;}

/* Live preview panel (below editor) */
.lp-ed-preview{
  margin-top:2px;background:#111827;border:1px solid rgba(255,255,255,.06);
  border-radius:6px;overflow:hidden;
}
.lp-ed-preview-bar{
  display:flex;align-items:center;gap:8px;padding:6px 12px;
  background:#0D131E;border-bottom:1px solid rgba(255,255,255,.05);
  font-family:var(--mono);font-size:9px;color:var(--muted);
}
.lp-ed-preview-dot{width:5px;height:5px;border-radius:50%;background:#4ADE80;box-shadow:0 0 6px #4ADE80;}
.lp-ed-preview-url{flex:1;background:rgba(255,255,255,.04);border-radius:3px;padding:2px 8px;color:rgba(255,255,255,.5);}
.lp-ed-preview-body{height:110px;position:relative;overflow:hidden;padding:12px 16px;}

/* Animated preview skeleton elements */
.lp-prev-nav{display:flex;align-items:center;gap:8px;margin-bottom:10px;}
.lp-prev-logo{height:8px;border-radius:2px;background:var(--cyan);animation:lp-prev-grow 2.2s ease-in-out infinite alternate;}
.lp-prev-navlinks{display:flex;gap:6px;margin-left:auto;}
.lp-prev-navlink{height:6px;border-radius:2px;background:rgba(255,255,255,.1);animation:lp-prev-grow 2.2s ease-in-out infinite alternate;}
.lp-prev-hero{display:flex;gap:12px;margin-bottom:8px;}
.lp-prev-hero-text{flex:1;display:flex;flex-direction:column;gap:5px;}
.lp-prev-h1a{height:10px;border-radius:2px;background:var(--off-white);width:80%;animation:lp-prev-grow 1.8s ease-in-out infinite alternate;}
.lp-prev-h1b{height:10px;border-radius:2px;background:var(--orange);width:60%;animation:lp-prev-grow 1.8s ease-in-out .15s infinite alternate;}
.lp-prev-sub{height:5px;border-radius:2px;background:rgba(255,255,255,.12);width:90%;animation:lp-prev-grow 2s ease-in-out .3s infinite alternate;}
.lp-prev-cta{height:20px;width:80px;border-radius:3px;background:var(--cyan);margin-top:4px;animation:lp-prev-pulse 2s ease-in-out infinite;}
.lp-prev-vis{width:64px;height:56px;border-radius:4px;background:linear-gradient(135deg,rgba(0,212,200,.15),rgba(244,98,42,.08));border:1px solid rgba(0,212,200,.15);animation:lp-prev-float 3s ease-in-out infinite;}
@keyframes lp-prev-grow{from{opacity:.4}to{opacity:1}}
@keyframes lp-prev-pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,212,200,.4)}60%{box-shadow:0 0 0 6px rgba(0,212,200,0)}}
@keyframes lp-prev-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.lp-prev-lighthouse{position:absolute;bottom:8px;right:10px;display:flex;gap:4px;}
.lp-prev-lh{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;border:2px solid;}

/* Scroll hint */
.lp-scroll-hint{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;animation:lp-up .7s 1.2s forwards;}
.lp-scroll-line{width:1px;height:48px;background:linear-gradient(to bottom,var(--cyan),transparent);animation:lp-scroll-anim 2s ease-in-out infinite;}
@keyframes lp-scroll-anim{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
.lp-scroll-text{font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.2em;text-transform:uppercase;}

/* ── MARQUEE ── */
.lp-marquee-wrap{position:relative;z-index:2;overflow:hidden;border-top:1px solid rgba(0,212,200,.06);border-bottom:1px solid rgba(0,212,200,.06);}
.lp-mq-row{padding:10px 0;overflow:hidden;}
.lp-mq-row:first-child{background:var(--orange);}
.lp-mq-row:last-child{background:var(--navy-light);}
.lp-mq-track{display:flex;width:max-content;animation:lp-mq-f 26s linear infinite;}
.lp-mq-track.rev{animation:lp-mq-r 30s linear infinite;}
.lp-mq-track:hover{animation-play-state:paused}
.lp-mq-item{font-family:var(--display);font-weight:800;font-size:11px;letter-spacing:.18em;text-transform:uppercase;white-space:nowrap;margin-right:28px;}
.lp-mq-item.dim{opacity:.35}.lp-mq-item.mono{font-family:var(--mono);font-size:10px;letter-spacing:.12em}
@keyframes lp-mq-f{to{transform:translateX(-50%)}}
@keyframes lp-mq-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}

/* ── SECTIONS ── */
.lp-section{position:relative;z-index:2;padding:clamp(80px,10vw,140px) clamp(24px,6vw,80px);overflow:hidden;}
.lp-section-inner{max-width:1240px;margin:0 auto;}
.lp-clip-top{clip-path:polygon(0 40px,100% 0,100% 100%,0 100%);}
.lp-clip-both{clip-path:polygon(0 40px,100% 0,100% calc(100% - 40px),0 100%);}
.lp-eyebrow{font-family:var(--mono);font-size:9px;color:var(--cyan);letter-spacing:.2em;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:10px;}
.lp-eyebrow::before{content:'';display:block;width:24px;height:1px;background:var(--cyan);}
.lp-eyebrow.o{color:var(--orange)}.lp-eyebrow.o::before{background:var(--orange)}
.lp-h2{font-family:var(--display);font-weight:800;font-size:clamp(36px,5vw,72px);line-height:.95;letter-spacing:-.035em;}
.lp-h2 em{font-style:normal;color:var(--cyan)}.lp-h2 .o{color:var(--orange)}

/* ── STATS ── */
.lp-stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.04);}
.lp-stat{background:var(--navy-mid);padding:52px 36px 44px;position:relative;overflow:hidden;transition:background .3s;}
.lp-stat::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--sc,var(--cyan));transform:scaleX(0);transform-origin:left;transition:transform 1.6s cubic-bezier(.4,0,.2,1);}
.lp-stat.fired::before{transform:scaleX(1)}
.lp-stat:hover{background:rgba(13,21,32,.8)}
.lp-stat-ghost{position:absolute;bottom:-20px;right:10px;font-family:var(--display);font-weight:800;font-size:120px;color:rgba(255,255,255,.016);line-height:1;pointer-events:none;}
.lp-stat-num{font-family:var(--display);font-weight:800;font-size:clamp(52px,6vw,84px);line-height:1;letter-spacing:-.03em;margin-bottom:10px;}
.lp-stat-label{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;}

/* ════════════════════════════════════════════════════════════════
   ── SERVICES  — Live canvas demo panels ──
   Each row: left = info, right = live animated canvas demo
   Canvas renders unique animation per service on hover
   ════════════════════════════════════════════════════════════════ */
.lp-svc-list{display:flex;flex-direction:column;gap:1px;background:rgba(255,255,255,.04);}
.lp-svc-row{
  display:grid;grid-template-columns:1fr 420px;
  background:var(--navy-mid);position:relative;overflow:hidden;
  border-left:3px solid transparent;
  transition:border-color .3s,background .3s;
  min-height:220px;
}
.lp-svc-row.cyan{border-left-color:var(--cyan)}
.lp-svc-row.orange{border-left-color:var(--orange)}
.lp-svc-row:hover{background:rgba(9,16,26,.95)}

.lp-svc-row-info{padding:48px 52px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:1;}
.lp-svc-row-num{font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px;}
.lp-svc-row-title{font-family:var(--display);font-weight:800;font-size:clamp(24px,2.8vw,36px);line-height:1.0;margin-bottom:12px;color:var(--off-white);}
.lp-svc-row-desc{color:var(--muted);font-size:14px;line-height:1.78;max-width:480px;margin-bottom:18px;}
.lp-svc-row-tags{display:flex;gap:6px;flex-wrap:wrap;}
.lp-svc-row-tag{font-family:var(--mono);font-size:9px;letter-spacing:.06em;text-transform:uppercase;border-radius:3px;padding:3px 9px;border:1px solid;}

/* Canvas demo panel */
.lp-svc-canvas-wrap{
  position:relative;border-left:1px solid rgba(255,255,255,.05);
  background:#070C14;overflow:hidden;
}
.lp-svc-canvas-wrap canvas{
  position:absolute;inset:0;width:100%;height:100%;
  opacity:0;transition:opacity .6s ease;
}
.lp-svc-row:hover .lp-svc-canvas-wrap canvas{opacity:1}
.lp-svc-canvas-label{
  position:absolute;bottom:12px;right:14px;z-index:2;
  font-family:var(--mono);font-size:9px;color:var(--muted);
  letter-spacing:.1em;text-transform:uppercase;
  opacity:0;transition:opacity .4s .2s;
}
.lp-svc-row:hover .lp-svc-canvas-label{opacity:.6}

/* Ghost number */
.lp-svc-ghost{position:absolute;bottom:-28px;left:44px;font-family:var(--display);font-weight:800;font-size:140px;line-height:1;pointer-events:none;opacity:.018;letter-spacing:-.04em;transition:opacity .4s;}
.lp-svc-row:hover .lp-svc-ghost{opacity:.04}

/* ── WORKS ── */
.lp-works-list{display:flex;flex-direction:column;gap:3px;}
.lp-work-card{display:grid;grid-template-columns:1fr 280px;background:var(--navy-mid);border-left:4px solid var(--wac,var(--cyan));position:relative;overflow:hidden;transition:background .3s,transform .2s;text-decoration:none;color:inherit;}
.lp-work-card:hover{background:rgba(10,18,28,.85);transform:translateX(4px)}
.lp-work-card-left{padding:44px 52px;}
.lp-work-card-meta{display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap;}
.lp-work-card-num{font-family:var(--mono);font-size:10px;letter-spacing:.08em;}
.lp-work-card-sep{width:1px;height:12px;background:rgba(255,255,255,.1);}
.lp-work-card-cat{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;}
.lp-work-card-year{font-family:var(--mono);font-size:10px;color:var(--muted);}
.lp-work-card-title{font-family:var(--display);font-weight:800;font-size:clamp(24px,2.8vw,38px);line-height:1.0;letter-spacing:-.02em;margin-bottom:16px;color:var(--off-white);}
.lp-work-card-desc{color:var(--muted);font-size:14px;line-height:1.8;max-width:520px;margin-bottom:20px;}
.lp-work-card-highlight{display:flex;gap:10px;align-items:flex-start;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:6px;padding:12px 14px;margin-bottom:24px;}
.lp-work-card-highlight p{font-size:13px;color:var(--off-white);line-height:1.6;opacity:.8;}
.lp-work-card-tech{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:24px;}
.lp-work-card-tech-badge{font-family:var(--mono);font-size:9px;color:var(--muted);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:3px;padding:3px 9px;letter-spacing:.04em;}
.lp-work-card-link{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;padding:10px 22px;border-radius:4px;border:1px solid;transition:background .2s,box-shadow .2s;}
.lp-work-card:hover .lp-work-card-link{box-shadow:0 0 24px rgba(0,0,0,.3)}
.lp-work-card-right{background:var(--navy);border-left:1px solid rgba(255,255,255,.04);padding:44px 32px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;}
.lp-work-ghost{position:absolute;bottom:-18px;right:-4px;font-family:var(--display);font-weight:800;font-size:110px;line-height:1;pointer-events:none;user-select:none;}
.lp-work-result-label{font-family:var(--mono);font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px;}
.lp-work-result-val{font-family:var(--display);font-weight:800;font-size:clamp(22px,2.5vw,32px);line-height:1.05;margin-bottom:6px;}
.lp-work-result-sub{font-family:var(--mono);font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;}
.lp-work-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:24px;}
.lp-work-tag-badge{font-family:var(--mono);font-size:9px;padding:3px 9px;border-radius:3px;border:1px solid;letter-spacing:.06em;text-transform:uppercase;}
.lp-works-viewall{display:flex;align-items:center;justify-content:space-between;padding:28px 52px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);transition:background .3s,border-color .3s;text-decoration:none;color:inherit;margin-top:3px;}
.lp-works-viewall:hover{background:rgba(0,212,200,.04);border-color:rgba(0,212,200,.15)}
.lp-works-viewall-l{font-family:var(--display);font-weight:800;font-size:18px;color:var(--cyan);}
.lp-works-viewall-r{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:10px;transition:gap .2s;}
.lp-works-viewall:hover .lp-works-viewall-r{gap:16px;color:var(--cyan)}

/* ── TESTIMONIALS ── */
.lp-testi-big{background:var(--navy-mid);border:1px solid rgba(0,212,200,.1);border-radius:8px;padding:clamp(36px,5vw,72px) clamp(32px,5vw,80px);margin-bottom:1px;position:relative;overflow:hidden;}
.lp-testi-big-qm{position:absolute;top:0;left:28px;font-family:var(--display);font-weight:800;font-size:200px;color:rgba(0,212,200,.04);line-height:1;pointer-events:none;user-select:none;}
.lp-testi-q{font-family:var(--display);font-weight:700;font-size:clamp(18px,2.4vw,26px);line-height:1.5;color:var(--off-white);margin-bottom:32px;max-width:780px;position:relative;z-index:1;}
.lp-testi-q em{font-style:normal;color:var(--cyan)}
.lp-testi-who{display:flex;align-items:center;gap:14px}
.lp-testi-av{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:14px;flex-shrink:0;}
.lp-testi-name{font-family:var(--display);font-weight:700;font-size:14px;}
.lp-testi-role{font-family:var(--mono);font-size:10px;color:var(--muted);margin-top:3px;letter-spacing:.04em;}
.lp-testi-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.04);}
.lp-testi-card{background:var(--navy-mid);padding:36px 40px;border-top:2px solid;display:flex;flex-direction:column;transition:background .3s;}
.lp-testi-card:hover{background:rgba(10,18,28,.7)}
.lp-testi-body{font-size:14px;color:var(--off-white);line-height:1.85;font-style:italic;flex:1;margin-bottom:24px;opacity:.85;}

/* ── WHY ── */
.lp-why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.04);}
.lp-why{background:var(--navy-mid);padding:44px 32px;transition:background .3s;}
.lp-why:hover{background:rgba(10,18,28,.7)}
.lp-why-num{font-family:var(--display);font-weight:800;font-size:48px;line-height:1;margin-bottom:20px;letter-spacing:-.02em;}
.lp-why-line{width:32px;height:2px;border-radius:1px;margin-bottom:16px;opacity:.7;}
.lp-why-title{font-family:var(--display);font-weight:800;font-size:18px;margin-bottom:10px;color:var(--off-white);}
.lp-why-desc{color:var(--muted);font-size:13px;line-height:1.8;}

/* ── PROCESS ── */
.lp-proc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:48px;position:relative;}
.lp-proc-connector{position:absolute;top:24px;left:15%;right:15%;height:1px;background:linear-gradient(90deg,var(--cyan),var(--orange));opacity:.12;}
.lp-proc-step{position:relative;z-index:1;}
.lp-proc-n{width:48px;height:48px;border-radius:50%;border:1.5px solid;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:700;margin-bottom:24px;background:var(--navy);}
.lp-proc-title{font-family:var(--display);font-weight:800;font-size:17px;margin-bottom:10px;color:var(--off-white);}
.lp-proc-desc{color:var(--muted);font-size:13px;line-height:1.75;}

/* ── FORM ── */
.lp-form-wrap{display:grid;grid-template-columns:1fr 1fr;gap:clamp(48px,7vw,120px);align-items:start;}
.lp-form-border{position:relative;border-radius:10px;padding:1.5px;overflow:hidden;}
.lp-form-border::before{content:'';position:absolute;inset:-90%;background:conic-gradient(from 0deg at 50% 50%,transparent 0deg,transparent 90deg,rgba(0,212,200,.6) 150deg,rgba(244,98,42,.5) 210deg,transparent 270deg,transparent 360deg);animation:lp-spin 8s linear infinite;}
@keyframes lp-spin{to{transform:rotate(360deg)}}
.lp-form-inner{position:relative;z-index:1;background:var(--navy-mid);border-radius:9px;padding:40px;}
.lp-f-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;}
.lp-f-group{margin-bottom:14px;}
.lp-f-label{font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;display:block;margin-bottom:7px;}
.lp-f-input{width:100%;background:rgba(8,14,23,.9);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:14px 16px;color:var(--off-white);font-size:15px;transition:border-color .2s,box-shadow .2s,background .2s;}
.lp-f-input:focus{border-color:var(--cyan);box-shadow:0 0 0 3px rgba(0,212,200,.08);background:rgba(0,212,200,.02);}
.lp-f-input::placeholder{color:rgba(90,112,128,.5)}
.lp-f-input option{background:var(--navy-mid)}
.lp-f-submit{width:100%;background:var(--orange);color:#fff;border:none;border-radius:6px;padding:18px;cursor:pointer;font-family:var(--display);font-weight:800;font-size:16px;letter-spacing:.08em;text-transform:uppercase;transition:box-shadow .2s,transform .1s;position:relative;overflow:hidden;margin-bottom:12px;}
.lp-f-submit::before{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.14) 50%,transparent 70%);transform:translateX(-100%);transition:transform .45s ease;}
.lp-f-submit:hover::before{transform:translateX(100%)}
.lp-f-submit:hover{box-shadow:0 0 50px rgba(244,98,42,.5);transform:translateY(-2px)}
.lp-f-submit:disabled{opacity:.55;cursor:not-allowed;transform:none;box-shadow:none}
.lp-f-note{font-family:var(--mono);font-size:9px;color:var(--muted);text-align:center;letter-spacing:.1em;text-transform:uppercase;}
.lp-form-success{background:rgba(0,212,200,.04);border:1px solid rgba(0,212,200,.18);border-radius:10px;padding:64px 40px;text-align:center;}
.lp-success-icon{width:72px;height:72px;border-radius:50%;margin:0 auto 24px;background:rgba(0,212,200,.08);border:1.5px solid rgba(0,212,200,.3);display:flex;align-items:center;justify-content:center;}
.lp-success-title{font-family:var(--display);font-weight:800;font-size:28px;color:var(--cyan);margin-bottom:12px;}
.lp-success-text{color:var(--muted);font-size:15px;line-height:1.8;}
.lp-urgency{background:rgba(244,98,42,.05);border:1px solid rgba(244,98,42,.16);border-radius:8px;padding:18px 20px;margin-bottom:40px;display:flex;gap:14px;}
.lp-urgency-title{font-family:var(--display);font-weight:700;font-size:14px;color:var(--orange);margin-bottom:4px;}
.lp-urgency-text{font-family:var(--mono);font-size:11px;color:var(--muted);line-height:1.65;}
.lp-checks{display:flex;flex-direction:column;gap:14px;}
.lp-check{display:flex;align-items:center;gap:12px;}
.lp-check-icon{width:22px;height:22px;border-radius:50%;flex-shrink:0;background:rgba(0,212,200,.07);border:1px solid rgba(0,212,200,.25);display:flex;align-items:center;justify-content:center;color:var(--cyan);}
.lp-check-text{font-size:14px;color:var(--off-white);}

/* ── FOOTER ── */
.lp-footer{position:relative;z-index:2;background:rgba(5,9,14,1);border-top:1px solid rgba(255,255,255,.04);padding:28px clamp(24px,6vw,80px);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
.lp-footer-copy{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.06em;}
.lp-footer-links{display:flex;gap:20px;flex-wrap:wrap;}
.lp-footer-link{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;transition:color .2s;}
.lp-footer-link:hover{color:var(--cyan)}

/* ── REVEAL ── */
.lp-rv{opacity:0;transform:translateY(32px);transition:opacity .75s ease,transform .75s ease;}
.lp-rv.in{opacity:1;transform:translateY(0);}
.lp-d1{transition-delay:.07s}.lp-d2{transition-delay:.14s}.lp-d3{transition-delay:.21s}
@keyframes lp-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}

/* ══════════════════════════════════════════════════════════
   ── SITE NAV STRIP (desktop) ──
   ══════════════════════════════════════════════════════════ */
#lp-site-strip{
  position:fixed;top:0;left:0;right:0;z-index:400;
  background:rgba(5,10,18,.96);border-bottom:1px solid rgba(0,212,200,.08);
  display:flex;align-items:center;justify-content:space-between;
  padding:7px clamp(20px,4vw,52px);backdrop-filter:blur(16px);
  transition:transform .4s ease;
}
#lp-site-strip.hidden{transform:translateY(-100%)}
.lp-strip-l{font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;display:flex;align-items:center;gap:8px;}
.lp-strip-dot{width:4px;height:4px;border-radius:50%;background:var(--cyan);box-shadow:0 0 6px var(--cyan);}
.lp-strip-links{display:flex;gap:0;align-items:center;}
.lp-strip-link{font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;padding:4px 14px;border-left:1px solid rgba(255,255,255,.06);transition:color .2s;}
.lp-strip-link:first-child{border-left:none}
.lp-strip-link:hover{color:var(--cyan)}
.lp-strip-back{font-family:var(--mono);font-size:9px;color:var(--orange);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:5px;transition:gap .2s,color .2s;}
.lp-strip-back:hover{color:var(--off-white);gap:8px}

/* Nav shifted below strip on desktop */
#lp-nav{top:30px;}
#lp-nav.stuck{top:30px;}
#lp-hero{padding-top:188px;}

/* ══════════════════════════════════════════════════════════
   ── MOBILE BOTTOM NAV ──
   ══════════════════════════════════════════════════════════ */
#lp-mob-nav{
  display:none;position:fixed;bottom:0;left:0;right:0;z-index:400;
  background:rgba(8,14,23,.95);
  border-top:1px solid rgba(0,212,200,.14);
  backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);
  box-shadow:0 -4px 32px rgba(0,0,0,.4);
  padding-bottom:env(safe-area-inset-bottom,0);
}
.lp-mob-nav-inner{display:grid;grid-template-columns:repeat(5,1fr);align-items:stretch;}
.lp-mob-nav-item{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:4px;padding:11px 4px 10px;
  font-family:var(--mono);font-size:8px;color:var(--muted);
  letter-spacing:.05em;text-transform:uppercase;
  border-right:1px solid rgba(255,255,255,.05);
  transition:color .2s,background .2s;
  -webkit-tap-highlight-color:transparent;
  position:relative;
}
.lp-mob-nav-item:last-child{border-right:none;}
/* Active indicator line at top */
.lp-mob-nav-item::before{
  content:'';position:absolute;top:0;left:20%;right:20%;height:2px;
  border-radius:0 0 2px 2px;background:var(--cyan);
  transform:scaleX(0);transition:transform .25s ease;
}
.lp-mob-nav-item.active{color:var(--cyan);}
.lp-mob-nav-item.active::before{transform:scaleX(1);}
.lp-mob-nav-item.cta{
  background:linear-gradient(135deg,var(--orange),rgba(244,98,42,.8));
  color:#fff;border-right:none;
}
.lp-mob-nav-item.cta::before{background:rgba(255,255,255,.4);}
.lp-mob-nav-item.cta.active{color:#fff;}
.lp-mob-nav-icon{
  width:20px;height:20px;display:flex;align-items:center;justify-content:center;
  transition:transform .2s;
}
.lp-mob-nav-item:active .lp-mob-nav-icon{transform:scale(.88);}
.lp-mob-nav-label{font-size:8px;line-height:1;}

/* ══════════════════════════════════════════════════════════
   ── MOBILE CODE TICKER ──
   ══════════════════════════════════════════════════════════ */
.lp-mob-ticker{display:none;position:relative;margin-top:28px;width:100%;}
.lp-mob-ticker-card{
  background:#0E1117;border:1px solid rgba(0,212,200,.15);border-radius:10px;
  overflow:hidden;font-family:var(--mono);font-size:11px;line-height:1.7;
  box-shadow:0 20px 50px rgba(0,0,0,.6),0 0 30px rgba(0,212,200,.05) inset;
}
.lp-mob-ticker-bar{display:flex;align-items:center;gap:6px;padding:9px 14px;background:#161B22;border-bottom:1px solid rgba(255,255,255,.06);}
.lp-mob-ticker-dot{width:9px;height:9px;border-radius:50%;}
.lp-mob-ticker-title{margin-left:auto;font-size:9px;color:var(--muted);letter-spacing:.08em;}
.lp-mob-ticker-body{
  height:160px;overflow:hidden;position:relative;
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 18%,black 82%,transparent 100%);
  mask-image:linear-gradient(to bottom,transparent 0%,black 18%,black 82%,transparent 100%);
}
.lp-mob-ticker-scroll{display:flex;flex-direction:column;padding:12px 0;animation:lp-ticker-scroll 14s linear infinite;}
@keyframes lp-ticker-scroll{from{transform:translateY(0)}to{transform:translateY(-50%)}}
.lp-mob-ticker-line{padding:1px 16px;white-space:nowrap;overflow:hidden;display:flex;gap:0;align-items:center;}
.lp-mob-ticker-num{width:26px;color:rgba(255,255,255,.18);font-size:9px;flex-shrink:0;text-align:right;padding-right:8px;}
.lp-mob-ticker-statusbar{display:flex;align-items:center;justify-content:space-between;background:#007ACC;padding:3px 12px;font-size:9px;color:rgba(255,255,255,.85);}

/* ══════════════════════════════════════════════════════════
   ── MOBILE SERVICE CANVAS (auto-starts on scroll) ──
   ══════════════════════════════════════════════════════════ */
.lp-svc-canvas-mobile{
  display:none;height:200px;position:relative;overflow:hidden;
  background:#070C14;border-top:1px solid rgba(255,255,255,.05);
}
.lp-svc-canvas-mobile canvas{position:absolute;inset:0;width:100%;height:100%;}
.lp-svc-tap-hint{
  position:absolute;inset:0;display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:8px;
  font-family:var(--mono);font-size:9px;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;
  transition:opacity .4s;pointer-events:none;
}
.lp-svc-tap-hint svg{opacity:.25;}
.lp-svc-canvas-mobile.running .lp-svc-tap-hint{opacity:0;}
.lp-svc-canvas-label-mob{position:absolute;bottom:10px;right:12px;z-index:2;font-family:var(--mono);font-size:8px;color:rgba(255,255,255,.3);letter-spacing:.1em;text-transform:uppercase;}

/* ══════════════════════════════════════════════════════════
   ── BREAKPOINT: tablet/small desktop (≤ 1200px) ──
   ══════════════════════════════════════════════════════════ */
@media(max-width:1200px){
  .lp-hero-inner{grid-template-columns:1fr;gap:0}
  .lp-editor-wrap{display:none}
  .lp-mob-ticker{display:block}
  .lp-svc-row{grid-template-columns:1fr}
  .lp-svc-canvas-wrap{display:none}
  .lp-svc-canvas-mobile{display:block}
}

/* ══════════════════════════════════════════════════════════
   ── BREAKPOINT: mobile (≤ 768px) ──
   ══════════════════════════════════════════════════════════ */
@media(max-width:768px){
  /* Show mobile nav, hide desktop strip */
  #lp-mob-nav{display:block;}
  #lp-site-strip{display:none;}

  /* Reset nav — flex, fully contained */
  #lp-nav{top:0;padding:12px 16px;gap:0;}
  #lp-nav.stuck{top:0;padding:10px 16px;}
  /* Swap logo: hide full, show short */
  .lp-logo{flex-shrink:0;}
  .lp-logo-full{display:none;}
  .lp-logo-short{display:inline;}
  .lp-logo-sub{display:none;}
  /* Nav right: tighter gap */
  .lp-nav-r{gap:8px;}
  /* Shrink CTA */
  .lp-mag-btn{padding:9px 14px;font-size:11px;letter-spacing:.04em;}
  .lp-mag-btn-full{display:none;}
  .lp-mag-btn-short{display:inline;}
  /* Hide phone */
  .lp-nav-tel{display:none;}

  /* Hero: tighter padding, room for bottom nav */
  #lp-hero{
    padding-top:90px;
    padding-left:20px;padding-right:20px;
    padding-bottom:calc(90px + env(safe-area-inset-bottom,12px));
    min-height:100svh;
  }

  /* Clip-path sections — disable clip on mobile to prevent text cutoff */
  .lp-clip-top{clip-path:none;}
  .lp-clip-both{clip-path:none;}

  /* All sections get consistent side padding */
  .lp-section{padding-left:20px!important;padding-right:20px!important;}
  .lp-section-inner{padding-left:0;padding-right:0;}

  /* Footer clears the bottom nav */
  .lp-footer{
    padding-bottom:calc(80px + env(safe-area-inset-bottom,12px));
    flex-direction:column;gap:10px;text-align:center;
  }
  .lp-footer-links{justify-content:center;}

  /* Grids */
  .lp-stats-row{grid-template-columns:1fr 1fr}
  .lp-work-card{grid-template-columns:1fr!important}
  .lp-work-card-right{border-left:none;border-top:1px solid rgba(255,255,255,.04)}
  .lp-why-grid{grid-template-columns:1fr 1fr}
  .lp-proc-grid{grid-template-columns:1fr 1fr}
  .lp-proc-connector{display:none}
  .lp-testi-grid{grid-template-columns:1fr}
  .lp-form-wrap{grid-template-columns:1fr}

  /* Canvas height on mobile */
  .lp-svc-canvas-mobile{height:210px;}

  /* Works viewall stacks */
  .lp-works-viewall{padding:18px 20px;flex-direction:column;align-items:flex-start;gap:6px;}
  .lp-works-viewall-r{font-size:9px;}

  /* Section headings — prevent overflow */
  .lp-h2{overflow-wrap:break-word;word-break:break-word;}
}

/* ══════════════════════════════════════════════════════════
   ── BREAKPOINT: small mobile (≤ 480px) ──
   ══════════════════════════════════════════════════════════ */
@media(max-width:480px){
  /* Headline */
  .lp-h1{font-size:clamp(44px,12.5vw,70px);line-height:.9;letter-spacing:-.035em;}

  /* Buttons stack, full width */
  .lp-btns{flex-direction:column;gap:12px;}
  .lp-btn-cta,.lp-btn-outline{justify-content:center;text-align:center;width:100%;padding:16px 24px;}

  /* Trust row */
  .lp-trust{gap:8px;flex-wrap:wrap;}
  .lp-trust-sep{display:none;}

  /* Tag */
  .lp-tag{margin-bottom:20px;}
  .lp-hero-sub{font-size:15px;margin-bottom:28px;}

  /* Stats: 2 col stays but smaller padding */
  .lp-stat{padding:28px 16px 22px;}
  .lp-stat-num{font-size:clamp(40px,10vw,58px);}

  /* Service rows */
  .lp-svc-row-info{padding:24px 20px;}
  .lp-svc-row-title{font-size:22px;}

  /* Work cards */
  .lp-work-card-left{padding:22px 18px;}
  .lp-work-card-right{padding:22px 18px;}
  .lp-work-card-title{font-size:22px;}

  /* Testimonials */
  .lp-testi-big{padding:24px 18px;}
  .lp-testi-q{font-size:16px;}

  /* Why */
  .lp-why-grid{grid-template-columns:1fr}
  .lp-why{padding:32px 20px;}

  /* Process */
  .lp-proc-grid{grid-template-columns:1fr}
  .lp-proc-step{padding:0;}

  /* Form */
  .lp-f-row{grid-template-columns:1fr}
  .lp-form-inner{padding:28px 20px;}

  /* H2 sizing */
  .lp-h2{font-size:clamp(30px,9vw,48px);}

  /* Ticker */
  .lp-mob-ticker{margin-top:20px;}
  .lp-mob-ticker-body{height:140px;}
  .lp-mob-ticker-card{font-size:10px;}
}
`

/* ─── CODE CONTENT for the VS Code editor ─────────────────────────────────── */
// Rendered as pre-built JSX rows so we get real syntax highlighting classes.
const CODE_LINES = [
  { n:1,  tok: [['cmt','// sunstate-devworks · page.tsx']] },
  { n:2,  tok: [] },
  { n:3,  tok: [['kw','import '],['cls','{ Metadata }'],['kw',' from '],['str',"'next'"]] },
  { n:4,  tok: [['kw','import '],['fn','Hero'],['plain',', '],['fn','Services'],['plain',', '],['fn','CTA'],['kw',' from '],['str',"'@/components'"]] },
  { n:5,  tok: [] },
  { n:6,  tok: [['kw','export const '],['var','metadata'],['op',': '],['cls','Metadata'],['op',' = {']] },
  { n:7,  tok: [['plain','  '],['attr','title'],['op',': '],['str',"'Custom Web & App Dev · Gilbert AZ'"]] },
  { n:8,  tok: [['plain','  '],['attr','description'],['op',': '],['str',"'Hand-coded. No templates.'"]] },
  { n:9,  tok: [['op','}']] },
  { n:10, tok: [] },
  { n:11, tok: [['kw','export default function '],['fn','Page'],['op','() {']] },
  { n:12, tok: [['kw','  return '],['op','(']] },
  { n:13, tok: [['plain','    '],['op','<>'],] },
  { n:14, tok: [['plain','      '],['tag','<'],['cls','Hero'],['plain',' '],['attr','headline'],['op','='],['str','"Your site should work"'],['tag',' />']] },
  { n:15, tok: [['plain','      '],['tag','<'],['cls','Services'],['plain',' '],['attr','count'],['op','='],['num','{4}'],['tag',' />']] },
  { n:16, tok: [['plain','      '],['tag','<'],['cls','Works'],['plain',' '],['attr','projects'],['op','='],['num','{works}'],['tag',' />']] },
  { n:17, tok: [['plain','      '],['tag','<'],['cls','CTA'],['plain',' '],['attr','href'],['op','='],['str','"#contact"'],['tag',' />']] },
  { n:18, tok: [['plain','    '],['op','</>']] },
  { n:19, tok: [['plain','  ),'],] },
  { n:20, tok: [['plain','}']] },
  { n:21, tok: [] },
  { n:22, tok: [['cmt','// Lighthouse: 100 · 100 · 100 · 100 ✓']] },
]

const CSS_LINES = [
  { n:1,  tok: [['cmt','/* sunstate · globals.css */']] },
  { n:2,  tok: [] },
  { n:3,  tok: [['cls',':root'],['op',' {']] },
  { n:4,  tok: [['css-prop','  --cyan'],['op',': '],['css-val','#00D4C8'],['plain',';']] },
  { n:5,  tok: [['css-prop','  --orange'],['op',': '],['css-val','#F4622A'],['plain',';']] },
  { n:6,  tok: [['css-prop','  --navy'],['op',': '],['css-val','#080E17'],['plain',';']] },
  { n:7,  tok: [['op','}']] },
  { n:8,  tok: [] },
  { n:9,  tok: [['cls','body'],['op',' {']] },
  { n:10, tok: [['css-prop','  background'],['op',': '],['css-val','var(--navy)'],['plain',';']] },
  { n:11, tok: [['css-prop','  font-family'],['op',': '],['css-val',"'Syne', sans-serif"],['plain',';']] },
  { n:12, tok: [['op','}']] },
  { n:13, tok: [] },
  { n:14, tok: [['cls','.hero-title'],['op',' {']] },
  { n:15, tok: [['css-prop','  font-size'],['op',': '],['css-val','clamp(64px, 9vw, 148px)'],['plain',';']] },
  { n:16, tok: [['css-prop','  font-weight'],['op',': '],['num','800'],['plain',';']] },
  { n:17, tok: [['css-prop','  letter-spacing'],['op',': '],['css-val','-.04em'],['plain',';']] },
  { n:18, tok: [['op','}']] },
]

const API_LINES = [
  { n:1,  tok: [['cmt','// api/contact/route.ts']] },
  { n:2,  tok: [] },
  { n:3,  tok: [['kw','import '],['cls','{ NextResponse }'],['kw',' from '],['str',"'next/server'"]] },
  { n:4,  tok: [['kw','import '],['cls','{ Resend }'],['kw',' from '],['str',"'resend'"]] },
  { n:5,  tok: [] },
  { n:6,  tok: [['kw','export async function '],['fn','POST'],['op','('],['var','req'],['op',': '],['cls','Request'],['op',') {']] },
  { n:7,  tok: [['kw','  const '],['var','data'],['op',' = await '],['var','req'],['op','.'],['fn','json'],['op','()']] },
  { n:8,  tok: [['kw','  const '],['var','resend'],['op',' = new '],['cls','Resend'],['op','('],['var','process'],['op','.env.'],['var','RESEND_KEY'],['op',')']] },
  { n:9,  tok: [] },
  { n:10, tok: [['kw','  await '],['var','resend'],['op','.emails.'],['fn','send'],['op','({']] },
  { n:11, tok: [['plain','    '],['attr','from'],['op',': '],['str',"'noreply@sunstatedevworks.com'"]] },
  { n:12, tok: [['plain','    '],['attr','to'],['op',': '],['str',"'contact@sunstatedevworks.com'"]] },
  { n:13, tok: [['plain','    '],['attr','subject'],['op',': '],['str',"`New lead: ${data.name}`"]] },
  { n:14, tok: [['op','  })']] },
  { n:15, tok: [] },
  { n:16, tok: [['kw','  return '],['cls','NextResponse'],['op','.'],['fn','json'],['op','({ '],['attr','ok'],['op',': '],['kw','true'],['op',' })']] },
  { n:17, tok: [['op','}']] },
]

const TABS = [
  { name: 'page.tsx',         modified: false, lines: CODE_LINES },
  { name: 'globals.css',      modified: true,  lines: CSS_LINES  },
  { name: 'api/contact.ts',   modified: false, lines: API_LINES  },
]

/* ─── SERVICE CANVAS RENDERERS ────────────────────────────────────────────── */
// Each function takes a canvas + time and draws a different live demo
type DrawFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void

const drawWeb: DrawFn = (ctx, w, h, t) => {
  ctx.clearRect(0,0,w,h)
  // Browser chrome
  const bx=20,by=20,bw=w-40,bh=h-40
  ctx.fillStyle='#111827';ctx.beginPath();ctx.roundRect(bx,by,bw,bh,8);ctx.fill()
  // Address bar
  ctx.fillStyle='#1F2937';ctx.fillRect(bx+8,by+28,bw-16,18)
  ctx.fillStyle='rgba(0,212,200,.6)';ctx.font='9px monospace';ctx.fillText('sunstatedevworks.com',bx+14,by+40)
  // Traffic lights
  ;[[bx+12,by+14,'#FF5F57'],[bx+24,by+14,'#FEBC2E'],[bx+36,by+14,'#28C840']].forEach(([x,y,c])=>{ctx.fillStyle=c as string;ctx.beginPath();ctx.arc(x as number,y as number,4,0,Math.PI*2);ctx.fill()})
  // Animated code lines being painted
  const lineY = by+60
  const progress = (Math.sin(t*0.7)+1)/2
  const numLines = 8
  for(let i=0;i<numLines;i++){
    const rowY = lineY + i*22
    const lineProgress = Math.max(0, Math.min(1, progress*numLines - i))
    const lineW = (bw-40)*lineProgress*(0.4+Math.random()*0.1+i*0.05)
    const colors=['rgba(255,121,198,','rgba(80,250,123,','rgba(241,250,140,','rgba(189,147,249,']
    ctx.fillStyle = colors[i%4]+(0.4+lineProgress*0.5)+')'
    if(i===0)ctx.fillStyle='rgba(80,250,123,0.8)'
    ctx.fillRect(bx+28+Math.floor(i/2)*10, rowY, Math.max(0,lineW), 8)
    // line numbers
    ctx.fillStyle='rgba(255,255,255,.15)';ctx.font='8px monospace';ctx.fillText(String(i+1),bx+16,rowY+8)
  }
  // Lighthouse scores animating in
  const scores=[98,100,96,100]
  scores.forEach((s,i)=>{
    const sx=bx+28+i*46, sy=h-50
    const angle=(t*0.5+i*0.3)%1
    ctx.strokeStyle=['#0CCE6B','#0CCE6B','#FFA400','#0CCE6B'][i];ctx.lineWidth=3
    ctx.beginPath();ctx.arc(sx+14,sy+14,11,-.5*Math.PI,(-0.5+angle*2)*Math.PI);ctx.stroke()
    ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='bold 8px monospace';ctx.textAlign='center';ctx.fillText(String(s),sx+14,sy+18);ctx.textAlign='left'
  })
}

const drawMobile: DrawFn = (ctx, w, h, t) => {
  ctx.clearRect(0,0,w,h)
  const px=w/2-60, py=20, pw=120, ph=h-40
  // Phone body
  ctx.fillStyle='#1C2333';ctx.beginPath();ctx.roundRect(px,py,pw,ph,16);ctx.fill()
  ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(px,py,pw,ph,16);ctx.stroke()
  // Dynamic island
  ctx.fillStyle='#080E17';ctx.beginPath();ctx.roundRect(px+pw/2-20,py+8,40,14,7);ctx.fill()
  // Screen
  const sx=px+6,sy=py+30,sw=pw-12,sh=ph-56
  ctx.fillStyle='#080E17';ctx.fillRect(sx,sy,sw,sh)
  // App UI elements assembling in
  const p = (Math.sin(t*0.6)+1)/2
  // Header bar
  ctx.fillStyle=`rgba(0,212,200,${p*0.9})`
  ctx.fillRect(sx,sy,sw,28)
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.font='bold 9px sans-serif';ctx.fillText('ELS Dashboard',sx+8,sy+18)
  // Cards appearing
  const cards = [
    {label:'Revenue',val:'$12,840',c:'rgba(0,212,200,.8)'},
    {label:'Jobs Today',val:'7',c:'rgba(80,250,123,.8)'},
    {label:'Pending',val:'3',c:'rgba(255,165,0,.8)'},
  ]
  cards.forEach((card,i)=>{
    const delay = Math.max(0,p*3-i)
    const cy = sy+36+i*38
    ctx.fillStyle=`rgba(255,255,255,${delay*0.06})`
    ctx.fillRect(sx+4,cy,sw-8,32)
    ctx.fillStyle=card.c;ctx.font='8px monospace';ctx.fillText(card.label,sx+10,cy+12)
    ctx.fillStyle=`rgba(255,255,255,${delay*0.9})`;ctx.font='bold 11px sans-serif';ctx.fillText(card.val,sx+10,cy+26)
    // Stripe accent
    ctx.fillStyle=card.c;ctx.fillRect(sx+4,cy,3,32)
  })
  // Bottom nav bar
  const navY = sy+sh-28
  ctx.fillStyle='rgba(255,255,255,.04)';ctx.fillRect(sx,navY,sw,28)
  ;['⌂','📋','$','👤'].forEach((icon,i)=>{
    const ix = sx+10+i*(sw/4)
    ctx.fillStyle=i===0?'var(--cyan)':'rgba(255,255,255,.3)';ctx.font='11px sans-serif';ctx.fillText(icon,ix,navY+18)
  })
  // Home indicator
  ctx.fillStyle='rgba(255,255,255,.3)';ctx.beginPath();ctx.roundRect(px+pw/2-16,py+ph-14,32,4,2);ctx.fill()
}

const drawAI: DrawFn = (ctx, w, h, t) => {
  ctx.clearRect(0,0,w,h)
  // Neural network nodes
  const layers = [[1],[3],[4],[3],[1]]
  const layerX = layers.map((_,i)=>60+i*(w-120)/4)
  const nodes: {x:number,y:number,layer:number,idx:number,activation:number}[] = []
  layers.forEach((layer,li)=>{
    const count = layer[0]
    for(let ni=0;ni<count;ni++){
      const x = layerX[li]
      const y = h/2 + (ni-(count-1)/2)*(h/(count+1))
      const activation = (Math.sin(t*1.2+li*0.8+ni*1.1)+1)/2
      nodes.push({x,y,layer:li,idx:ni,activation})
    }
  })
  // Draw connections with signal pulses
  nodes.forEach(from=>{
    nodes.filter(to=>to.layer===from.layer+1).forEach(to=>{
      const weight = (Math.sin(t*0.9+from.idx*0.7+to.idx*0.5)+1)/2
      ctx.strokeStyle=`rgba(0,212,200,${weight*0.25})`
      ctx.lineWidth=weight*1.5
      ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke()
      // Signal dot traveling along connection
      const pulse = (t*0.8+from.idx*0.4+to.idx*0.3)%2
      if(pulse<1){
        const px2=from.x+(to.x-from.x)*pulse
        const py2=from.y+(to.y-from.y)*pulse
        ctx.fillStyle=`rgba(0,212,200,${0.8*(1-Math.abs(pulse-0.5)*2)})`
        ctx.beginPath();ctx.arc(px2,py2,3,0,Math.PI*2);ctx.fill()
      }
    })
  })
  // Draw nodes
  nodes.forEach(n=>{
    const r=12+n.activation*6
    ctx.fillStyle=`rgba(8,14,23,1)`
    ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fill()
    const isOutput=n.layer===4
    ctx.strokeStyle=isOutput?`rgba(244,98,42,${0.4+n.activation*0.6})`:`rgba(0,212,200,${0.3+n.activation*0.7})`
    ctx.lineWidth=1.5+n.activation
    ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.stroke()
    // Glow
    const grad=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,r*2)
    grad.addColorStop(0,isOutput?`rgba(244,98,42,${n.activation*0.3})`:`rgba(0,212,200,${n.activation*0.25})`)
    grad.addColorStop(1,'transparent')
    ctx.fillStyle=grad;ctx.beginPath();ctx.arc(n.x,n.y,r*2,0,Math.PI*2);ctx.fill()
  })
  // Chat bubble coming in from right
  const bubbleProgress = (Math.sin(t*0.5)+1)/2
  if(bubbleProgress>0.1){
    ctx.fillStyle=`rgba(0,212,200,${bubbleProgress*0.15})`
    ctx.beginPath();ctx.roundRect(w-130,20,110,32,6);ctx.fill()
    ctx.strokeStyle=`rgba(0,212,200,${bubbleProgress*0.4})`
    ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(w-130,20,110,32,6);ctx.stroke()
    ctx.fillStyle=`rgba(255,255,255,${bubbleProgress*0.7})`;ctx.font='8px monospace'
    ctx.fillText('Show me Q3 metrics',w-124,40)
  }
  // Response
  const resp = (Math.sin(t*0.5-1)+1)/2
  if(resp>0.1){
    ctx.fillStyle=`rgba(244,98,42,${resp*0.12})`
    ctx.beginPath();ctx.roundRect(20,h-60,120,38,6);ctx.fill()
    ctx.strokeStyle=`rgba(244,98,42,${resp*0.35})`
    ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(20,h-60,120,38,6);ctx.stroke()
    ctx.fillStyle=`rgba(80,250,123,${resp})`;ctx.font='bold 9px monospace';ctx.fillText('↑ 127% revenue',28,h-42)
    ctx.fillStyle=`rgba(255,255,255,${resp*0.5})`;ctx.font='8px monospace';ctx.fillText('vs last quarter',28,h-28)
  }
}

const drawBrand: DrawFn = (ctx, w, h, t) => {
  ctx.clearRect(0,0,w,h)
  const cx=w/2, cy=h/2-20
  const progress = (Math.sin(t*0.5)+1)/2
  // Color swatches appearing
  const swatches = ['#00D4C8','#F4622A','#080E17','#F0F5FA','#5A7080']
  swatches.forEach((color,i)=>{
    const delay = Math.max(0,progress*6-i)
    const sx = 20+i*54, sy = h-52
    ctx.fillStyle=color;ctx.globalAlpha=Math.min(1,delay)
    ctx.beginPath();ctx.roundRect(sx,sy,44,28,4);ctx.fill()
    ctx.globalAlpha=1
    // Hex label
    ctx.fillStyle=`rgba(255,255,255,${Math.min(1,delay)*0.4})`;ctx.font='7px monospace'
    ctx.fillText(color,sx+2,sy+38)
  })
  // Animated S lettermark being drawn
  const dashLen = 280
  const drawn = progress * dashLen
  // Draw the "S" path for Sunstate
  ctx.save()
  ctx.translate(cx-40,cy-48)
  ctx.scale(1.2,1.2)
  ctx.strokeStyle='var(--cyan)';ctx.lineWidth=3;ctx.lineCap='round'
  ctx.setLineDash([drawn, dashLen]);ctx.lineDashOffset=0
  ctx.beginPath()
  ctx.moveTo(60,10);ctx.bezierCurveTo(80,10,80,35,50,35);ctx.bezierCurveTo(20,35,20,60,40,60)
  ctx.stroke()
  // Orange accent arc
  ctx.strokeStyle='var(--orange)';ctx.lineWidth=2;ctx.setLineDash([drawn*0.7,dashLen])
  ctx.beginPath();ctx.arc(50,35,28,0,Math.PI*progress*2);ctx.stroke()
  ctx.setLineDash([]);ctx.restore()
  // Grid system lines
  ctx.strokeStyle='rgba(0,212,200,.08)';ctx.lineWidth=1
  for(let gx=0;gx<w;gx+=40){ ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,h);ctx.stroke() }
  for(let gy=0;gy<h;gy+=40){ ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(w,gy);ctx.stroke() }
  // Type specimen
  ctx.fillStyle=`rgba(240,245,250,${progress*0.85})`;ctx.font=`bold ${28+progress*8}px Syne, sans-serif`
  ctx.fillText('SUNSTATE',cx-70,cy+60)
  ctx.fillStyle=`rgba(0,212,200,${progress*0.7})`;ctx.font='10px monospace'
  ctx.fillText('CUSTOM · DIGITAL · ENGINEERING',cx-70,cy+76)
}

const SERVICE_DEMOS = [drawWeb, drawMobile, drawAI, drawBrand]

const SERVICES_DATA = [
  { num:'01', cls:'cyan',   c:'var(--cyan)',   label:'01 — Web Development',   title:'Custom Web Development',   desc:'Hand-coded, 100% custom websites. Zero WordPress bloat. Instant load times and search rankings that actually move the needle for your business.', tags:['Next.js','TypeScript','Node.js'],   ghost:'WEB'   },
  { num:'02', cls:'orange', c:'var(--orange)', label:'02 — Mobile Apps',        title:'iOS & Android Apps',       desc:'React Native, SwiftUI, and Kotlin — shipped to the App Store and Play Store. From MVP to production, built to App Store guidelines.', tags:['SwiftUI','React Native','Kotlin'], ghost:'APP'   },
  { num:'03', cls:'cyan',   c:'var(--cyan)',   label:'03 — AI & Automation',    title:'AI & Automation',          desc:'Custom AI integrations, chatbots, and workflow automation using Claude and OpenAI APIs. Your team stays the same size. Output multiplies.', tags:['Claude API','OpenAI','n8n'],       ghost:'AI'    },
  { num:'04', cls:'orange', c:'var(--orange)', label:'04 — Branding & Identity', title:'Branding & Identity',     desc:'Logo, color systems, typography, brand guides. Identity that holds up everywhere — from the App Store icon to your billboard in Scottsdale.', tags:['Figma','Adobe CC','Motion'],       ghost:'BRAND' },
]

export default function LandingPage() {
  const activeTab = useRef(0)
  const caretLine = useRef(14)
  const svcAnimIds = useRef<Map<number, number>>(new Map())

  useEffect(() => {
    // ── WebGL background ─────────────────────────────────────────────────
    const canvas = document.getElementById('lp-webgl') as HTMLCanvasElement
    const gl = canvas.getContext('webgl'); let animId = 0
    if(gl){
      const resize=()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;gl.viewport(0,0,canvas.width,canvas.height)}
      resize();window.addEventListener('resize',resize)
      const vs=gl.createShader(gl.VERTEX_SHADER)!;gl.shaderSource(vs,`attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`);gl.compileShader(vs)
      const fs=gl.createShader(gl.FRAGMENT_SHADER)!
      gl.shaderSource(fs,`precision mediump float;uniform float u_t;uniform vec2 u_r;float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);float a=rand(i);float b=rand(i+vec2(1,0));float c=rand(i+vec2(0,1));float d=rand(i+vec2(1,1));vec2 u=f*f*(3.0-2.0*f);return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;}void main(){vec2 uv=gl_FragCoord.xy/u_r;float n=noise(uv*3.0+vec2(u_t*.07,u_t*.04));float n2=noise(uv*6.0-vec2(u_t*.05,u_t*.08));float combined=n*.6+n2*.4;vec3 c1=vec3(0.0,0.83,0.78);vec3 c2=vec3(0.96,0.38,0.16);vec3 dark=vec3(0.031,0.055,0.09);vec3 col=mix(dark,c1,combined*0.055);col=mix(col,c2,max(0.0,combined-0.72)*0.12);float vignette=smoothstep(0.0,0.6,1.0-length(uv-0.5)*1.4);gl_FragColor=vec4(col*vignette,1.0);}`)
      gl.compileShader(fs)
      const prog=gl.createProgram()!;gl.attachShader(prog,vs);gl.attachShader(prog,fs);gl.linkProgram(prog);gl.useProgram(prog)
      gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW)
      const loc=gl.getAttribLocation(prog,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0)
      const uT=gl.getUniformLocation(prog,'u_t'),uR=gl.getUniformLocation(prog,'u_r');let t=0
      const draw=()=>{t+=0.016;gl.uniform1f(uT,t);gl.uniform2f(uR,canvas.width,canvas.height);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);animId=requestAnimationFrame(draw)}
      draw()
    }

    // ── Cursor (mouse devices only) ──────────────────────────────────────
    const isTouch = window.matchMedia('(hover:none),(pointer:coarse)').matches
    const dot=document.getElementById('lp-cursor-dot')!
    const ring=document.getElementById('lp-cursor-ring')!
    const lbl=document.getElementById('lp-cursor-label')!
    let mx=0,my=0,rx=0,ry=0,rafC=0
    if(!isTouch){
      const onMv=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';lbl.style.left=mx+'px';lbl.style.top=my+'px'}
      document.addEventListener('mousemove',onMv)
      const tickC=()=>{rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';rafC=requestAnimationFrame(tickC)}
      tickC()
      document.querySelectorAll('a,button,.lp-svc-row,.lp-why,.lp-work-card,.lp-stat,.lp-testi-card').forEach(el=>{
        el.addEventListener('mouseenter',()=>{document.body.classList.add('lp-ch');lbl.textContent='VIEW'})
        el.addEventListener('mouseleave',()=>{document.body.classList.remove('lp-ch');lbl.textContent=''})
      })
    }

    // ── Magnetic buttons + parallax (mouse only) ─────────────────────────
    const h1=document.querySelector<HTMLElement>('.lp-h1')
    const onPx=(e:MouseEvent)=>{if(!h1)return;const x=(e.clientX/window.innerWidth-.5)*10,y=(e.clientY/window.innerHeight-.5)*5;h1.style.transform=`perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg)`}
    if(!isTouch){
      document.querySelectorAll<HTMLElement>('.lp-mag-btn,.lp-btn-cta,.lp-btn-outline').forEach(btn=>{
        btn.addEventListener('mousemove',(e)=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`})
        btn.addEventListener('mouseleave',()=>{btn.style.transform=''})
      })
      window.addEventListener('mousemove',onPx,{passive:true})
    }

    // ── Nav + scroll progress + mobile nav active states ────────────────
    const nav=document.getElementById('lp-nav')!,bar=document.getElementById('lp-prog')!
    const strip=document.getElementById('lp-site-strip')
    let lastScrollY = 0
    const MOB_SECTIONS: [string,string][] = [
      ['lp-hero','home'],['lp-services','services'],['lp-contact','contact']
    ]
    const onSc=()=>{
      const sy = window.scrollY
      nav.classList.toggle('stuck',sy>60)
      const tot=document.documentElement.scrollHeight-window.innerHeight
      bar.style.width=(sy/tot*100)+'%'
      // Hide/show site strip on scroll (desktop)
      if(strip){ strip.classList.toggle('hidden', sy>120 && sy>lastScrollY) }
      lastScrollY=sy
      // Mobile bottom nav active section
      MOB_SECTIONS.forEach(([id,key])=>{
        const sec=document.getElementById(id)
        if(!sec) return
        const rect=sec.getBoundingClientRect()
        const isActive=rect.top<=window.innerHeight*0.5 && rect.bottom>0
        document.querySelectorAll<HTMLElement>(`.lp-mob-nav-item[data-sec="${key}"]`).forEach(el=>{
          el.classList.toggle('active',isActive)
        })
      })
    }
    window.addEventListener('scroll',onSc,{passive:true})

    // ── VS Code Editor: tab switching + caret animation ──────────────────
    const tabs = document.querySelectorAll<HTMLElement>('.lp-ed-tab')
    const codeArea = document.getElementById('lp-ed-code-inner')
    const gutterEl = document.getElementById('lp-ed-gutter-inner')
    const statusFile = document.getElementById('lp-ed-status-file')

    const renderTab = (idx: number) => {
      const tabData = TABS[idx]
      if(!codeArea || !gutterEl) return
      // Update gutter
      gutterEl.innerHTML = tabData.lines.map((l,i)=>`<span class="${i===caretLine.current-1?'active-line':''}">${l.n}</span>`).join('')
      // Update code
      codeArea.innerHTML = tabData.lines.map((l,lineIdx)=>{
        const isActive = lineIdx === caretLine.current-1
        const toks = l.tok.map(([cls,txt])=>`<span class="tok-${cls}">${txt.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span>`).join('')
        const caret = isActive ? '<span class="lp-ed-caret"></span>' : ''
        return `<div style="position:relative${isActive?' background:rgba(255,255,255,.03)':''}">${toks}${caret}</div>`
      }).join('')
      if(statusFile) statusFile.textContent = tabData.name
    }

    // Animate caret moving down over time
    let caretTimer = 0
    const moveCaret = () => {
      const lines = TABS[activeTab.current].lines
      caretLine.current = (caretLine.current % lines.length) + 1
      renderTab(activeTab.current)
      caretTimer = window.setTimeout(moveCaret, 800 + Math.random()*400)
    }
    renderTab(0)
    caretTimer = window.setTimeout(moveCaret, 1200)

    // Auto tab cycle
    let tabTimer = window.setInterval(()=>{
      activeTab.current = (activeTab.current+1) % TABS.length
      tabs.forEach((t,i)=>t.classList.toggle('active',i===activeTab.current))
      renderTab(activeTab.current)
    }, 6000)

    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>{
        activeTab.current=i
        tabs.forEach((t,j)=>t.classList.toggle('active',j===i))
        renderTab(i)
      })
    })

    // ── Service canvas demos (desktop hover + mobile tap) ────────────────
    const isMobile = () => window.innerWidth < 1200

    document.querySelectorAll<HTMLElement>('.lp-svc-row').forEach((row, idx) => {
      // Desktop canvas (right panel)
      const canvasEl = row.querySelector('.lp-svc-canvas-wrap canvas') as HTMLCanvasElement|null
      // Mobile canvas
      const mobWrap   = row.querySelector('.lp-svc-canvas-mobile') as HTMLElement|null
      const mobCanvas = mobWrap?.querySelector('canvas') as HTMLCanvasElement|null

      const makeRunner = (cvs: HTMLCanvasElement) => {
        let rafId = 0, t = 0, running = false
        const start = () => {
          if(running) return; running = true
          const ctx = cvs.getContext('2d')!
          const render = () => {
            const W=cvs.offsetWidth, H=cvs.offsetHeight
            if(cvs.width!==W||cvs.height!==H){cvs.width=W;cvs.height=H}
            t+=0.025; SERVICE_DEMOS[idx](ctx,W,H,t)
            rafId=requestAnimationFrame(render)
          }
          render(); svcAnimIds.current.set(idx*10+( cvs===canvasEl?0:1 ), rafId)
        }
        const stop = () => { running=false; cancelAnimationFrame(rafId) }
        return { start, stop }
      }

      // Desktop hover
      if(canvasEl){
        const {start,stop} = makeRunner(canvasEl)
        row.addEventListener('mouseenter', ()=>{ if(!isMobile()) start() })
        row.addEventListener('mouseleave', ()=>{ if(!isMobile()) stop()  })
      }

      // Mobile tap toggle
      if(mobWrap && mobCanvas){
        const {start,stop} = makeRunner(mobCanvas)
        let mobRunning = false
        mobWrap.addEventListener('click', ()=>{
          if(!mobRunning){
            mobRunning = true
            mobWrap.classList.add('running')
            start()
          } else {
            mobRunning = false
            mobWrap.classList.remove('running')
            stop()
          }
        })
        // Auto-start when scrolled into view on mobile
        const io = new IntersectionObserver(entries=>{
          entries.forEach(e=>{
            if(e.isIntersecting && isMobile() && !mobRunning){
              mobRunning=true; mobWrap.classList.add('running'); start()
            } else if(!e.isIntersecting && mobRunning){
              mobRunning=false; mobWrap.classList.remove('running'); stop()
            }
          })
        },{threshold:0.4})
        io.observe(mobWrap)
      }
    })

    // ── Mobile code ticker (visible < 1200px) ────────────────────────────
    const tickerScroll = document.getElementById('lp-ticker-scroll')
    if(tickerScroll){
      // Build doubled set for seamless loop
      const allLines = [...CODE_LINES,...CSS_LINES,...API_LINES,...CODE_LINES,...CSS_LINES,...API_LINES]
      tickerScroll.innerHTML = allLines.map(l=>{
        const toks = l.tok.map(([cls,txt])=>`<span class="tok-${cls}">${txt.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span>`).join('')
        return `<div class="lp-mob-ticker-line"><span class="lp-mob-ticker-num">${l.n}</span>${toks}</div>`
      }).join('')
    }
    const MQ1=['Web Development','◆','Mobile Apps','◆','Branding','◆','AI Automation','◆','Next.js','◆','SwiftUI','◆','Hand-Coded','◆','No Templates','◆','You Own It','◆','Gilbert AZ','◆']
    const MQ2=['100% Custom','◇','No Lock-In','◇','TypeScript','◇','Supabase','◇','Stripe','◇','Fast Delivery','◇','Claude API','◇','n8n','◇','React Native','◇','Kotlin','◇']
    const mk=(id:string,items:string[],mono:boolean)=>{const el=document.getElementById(id);if(!el)return;const tr=[...items,...items,...items];el.innerHTML=tr.map((s,i)=>`<span class="lp-mq-item${i%2===1?' dim':''}${mono?' mono':''}">${s}</span>`).join('')}
    mk('lp-mq1',MQ1,false);mk('lp-mq2',MQ2,true)

    // ── Scroll reveal ────────────────────────────────────────────────────
    const revObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:0.06,rootMargin:'0px 0px -36px 0px'})
    document.querySelectorAll('.lp-rv').forEach(el=>revObs.observe(el))

    // ── Stats counter ────────────────────────────────────────────────────
    let statsDone=false
    const statsObs=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting||statsDone)return;statsDone=true
      document.querySelectorAll<HTMLElement>('.lp-stat-num[data-t]').forEach(el=>{
        const end=+(el.dataset.t||0),suf=el.dataset.s||'',dec=el.dataset.dec==='1'
        const dur=2000,start=performance.now(),ease=(p:number)=>1-Math.pow(1-p,3)
        const tick=(now:number)=>{const p=Math.min((now-start)/dur,1),v=ease(p)*end;el.textContent=dec?(v/10).toFixed(1)+'★':Math.floor(v)+suf;if(p<1)requestAnimationFrame(tick);else el.textContent=dec?(end/10).toFixed(1)+'★':end+suf}
        requestAnimationFrame(tick)
      })
      document.querySelectorAll('.lp-stat').forEach(c=>c.classList.add('fired'))
    },{threshold:0.3})
    const sg=document.getElementById('lp-stats');if(sg)statsObs.observe(sg)

    // ── Form ─────────────────────────────────────────────────────────────
    document.getElementById('lp-form-el')?.addEventListener('submit',async(e)=>{
      e.preventDefault();const f=e.target as HTMLFormElement
      const btn=document.getElementById('lp-f-btn') as HTMLButtonElement,err=document.getElementById('lp-f-err')!
      btn.disabled=true;btn.textContent='Sending...';err.style.display='none'
      const get=(n:string)=>(f.elements.namedItem(n) as HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement).value
      try{
        const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:get('name'),email:get('email'),company:'',service:get('service'),budget:'Google Ads Lead',message:`Phone: ${get('phone')||'N/A'}\n\n${get('message')}`})})
        if(r.ok){document.getElementById('lp-fw')!.style.display='none';document.getElementById('lp-fsuc')!.style.display='block'}
        else{err.style.display='block';btn.disabled=false;btn.textContent='Get My Free Quote →'}
      }catch{err.style.display='block';btn.disabled=false;btn.textContent='Get My Free Quote →'}
    })

    return ()=>{
      cancelAnimationFrame(animId);cancelAnimationFrame(rafC)
      clearTimeout(caretTimer);clearInterval(tabTimer)
      window.removeEventListener('scroll',onSc)
      if(!isTouch) window.removeEventListener('mousemove',onPx)
      revObs.disconnect();statsObs.disconnect()
      svcAnimIds.current.forEach(id=>cancelAnimationFrame(id))
    }
  },[])

  return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <div id="lp-aurora">
          <div className="lp-aurora-blob lp-ab1"/><div className="lp-aurora-blob lp-ab2"/><div className="lp-aurora-blob lp-ab3"/>
        </div>
        <div id="lp-cursor-dot"/><div id="lp-cursor-ring"/><div id="lp-cursor-label"/>
        <div id="lp-prog"/>
        <canvas id="lp-webgl" style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}}/>

        {/* ── DESKTOP SITE NAV STRIP ── */}
        <div id="lp-site-strip">
          <div className="lp-strip-l">
            <div className="lp-strip-dot"/>
            <span>Sunstate DevWorks</span>
          </div>
          <div className="lp-strip-links">
            {[['/', 'Home'],['/work','Work'],['/services','Services'],['/contact','Contact']].map(([href,label])=>(
                <a key={href} href={href} className="lp-strip-link">{label}</a>
            ))}
          </div>
          <a href="/" className="lp-strip-back">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Main Site
          </a>
        </div>

        {/* ── MOBILE BOTTOM NAV ── */}
        <nav id="lp-mob-nav">
          <div className="lp-mob-nav-inner">
            {/* Main Site */}
            <a href="/" className="lp-mob-nav-item">
            <span className="lp-mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
              <span className="lp-mob-nav-label">Main Site</span>
            </a>
            {/* Top */}
            <a href="#lp-hero" className="lp-mob-nav-item active" data-sec="home">
            <span className="lp-mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 8 12 12"/>
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5"/>
              </svg>
            </span>
              <span className="lp-mob-nav-label">Top</span>
            </a>
            {/* Services */}
            <a href="#lp-services" className="lp-mob-nav-item" data-sec="services">
            <span className="lp-mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </span>
              <span className="lp-mob-nav-label">Services</span>
            </a>
            {/* Work */}
            <a href="/work" className="lp-mob-nav-item">
            <span className="lp-mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </span>
              <span className="lp-mob-nav-label">Work</span>
            </a>
            {/* Get Quote CTA */}
            <a href="#lp-contact" className="lp-mob-nav-item cta" data-sec="contact">
            <span className="lp-mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
              <span className="lp-mob-nav-label">Quote</span>
            </a>
          </div>
        </nav>
        <nav id="lp-nav">
          <div className="lp-logo">
            <span className="lp-logo-full">SUNSTATE<em>.</em>DEVWORKS</span>
            <span className="lp-logo-short">SUNSTATE <em>DW</em></span>
            <span className="lp-logo-sub">Gilbert, AZ · Custom Digital Engineering</span>
          </div>
          <div className="lp-nav-r">
            <a href="tel:+14807939161" className="lp-nav-tel">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a2 2 0 012-2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 8.2a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
              (480) 793-9161
            </a>
            <a href="#lp-contact" className="lp-mag-btn">
              <span className="lp-mag-btn-full">Get Free Quote →</span>
              <span className="lp-mag-btn-short">Quote →</span>
            </a>
          </div>
        </nav>

        <div style={{position:'relative',zIndex:2}}>
          {/* ══════════════════════════════════════════════
            HERO — left: copy, right: VS Code editor
            ══════════════════════════════════════════════ */}
          <section id="lp-hero">
            <div className="lp-hero-inner">
              {/* Left */}
              <div style={{position:'relative',zIndex:1}}>
                <div className="lp-tag"><div className="lp-tag-dot"/><span className="lp-tag-text">Gilbert, AZ · Booking Now</span></div>
                <h1 className="lp-h1">
                  <span className="lp-h1-solid">YOUR SITE</span>
                  <span className="lp-h1-stroke" data-text="SHOULD WORK">SHOULD WORK</span>
                  <span className="lp-h1-fill">AS HARD AS YOU</span>
                </h1>
                <p className="lp-hero-sub">Hand-coded custom websites, mobile apps &amp; AI tools — by Arizona&apos;s top dev team. No templates. No bloat. <strong>You own 100% of the code, forever.</strong></p>
                <div className="lp-btns">
                  <a href="#lp-contact" className="lp-btn-cta">Get My Free Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                  <a href="#lp-services" className="lp-btn-outline">See Our Work ↓</a>
                </div>
                <div className="lp-trust">
                  <span className="lp-trust-stars">★★★★★</span>
                  <div className="lp-trust-sep"/><span className="lp-trust-item">5.0 Rated</span>
                  <div className="lp-trust-sep"/><span className="lp-trust-item">47+ Projects</span>
                  <div className="lp-trust-sep"/><span className="lp-trust-item">100% Satisfaction</span>
                </div>
              </div>

              {/* Right: VS Code editor (desktop) */}
              <div className="lp-editor-wrap">
                <div className="lp-editor">
                  {/* Title bar */}
                  <div className="lp-ed-bar">
                    <div className="lp-ed-dots">
                      <div className="lp-ed-dot" style={{background:'#FF5F57'}}/>
                      <div className="lp-ed-dot" style={{background:'#FEBC2E'}}/>
                      <div className="lp-ed-dot" style={{background:'#28C840'}}/>
                    </div>
                    <div className="lp-ed-tabs">
                      {TABS.map((tab,i)=>(
                          <div key={i} className={`lp-ed-tab${i===0?' active':''}${tab.modified?' modified':''}`}>{tab.name}</div>
                      ))}
                    </div>
                    <div className="lp-ed-status">
                      <div className="lp-ed-status-dot"/>
                      <span id="lp-ed-status-file" style={{fontFamily:'var(--mono)',fontSize:9,color:'var(--muted)'}}>page.tsx</span>
                    </div>
                  </div>

                  {/* Editor body */}
                  <div className="lp-ed-body" style={{position:'relative'}}>
                    {/* Gutter */}
                    <div className="lp-ed-gutter"><div id="lp-ed-gutter-inner"/></div>
                    {/* Code */}
                    <div className="lp-ed-code" style={{overflowY:'hidden',position:'relative'}}>
                      <div id="lp-ed-code-inner"/>
                    </div>
                    {/* Minimap */}
                    <div className="lp-ed-minimap" style={{position:'relative'}}>
                      <div className="lp-ed-mm-viewport" style={{top:0}}/>
                      {Array.from({length:30},(_,i)=>(
                          <div key={i} className="lp-ed-mm-line" style={{width:`${25+Math.sin(i*0.7)*20}%`,background:i%5===0?'var(--cyan)':i%7===2?'var(--orange)':'rgba(255,255,255,.3)'}}/>
                      ))}
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="lp-ed-statusbar">
                    <div className="lp-ed-sb-l">
                      <span>⎇ main</span>
                      <span>✓ 0 errors</span>
                      <span style={{color:'var(--cyan)'}}>TypeScript</span>
                    </div>
                    <div className="lp-ed-sb-r">
                      <span>Ln {caretLine.current}, Col 1</span>
                      <span>UTF-8</span>
                      <span>Next.js 15</span>
                    </div>
                  </div>
                </div>

                {/* Live preview */}
                <div className="lp-ed-preview">
                  <div className="lp-ed-preview-bar">
                    <div className="lp-ed-preview-dot"/>
                    <span>Live Preview</span>
                    <div className="lp-ed-preview-url">localhost:3000</div>
                    <span style={{color:'var(--cyan)',fontSize:9}}>HOT RELOAD</span>
                  </div>
                  <div className="lp-ed-preview-body">
                    <div className="lp-prev-nav">
                      <div className="lp-prev-logo" style={{width:60}}/>
                      <div className="lp-prev-navlinks">
                        {[40,32,44].map((w,i)=><div key={i} className="lp-prev-navlink" style={{width:w}}/>)}
                      </div>
                    </div>
                    <div className="lp-prev-hero">
                      <div className="lp-prev-hero-text">
                        <div className="lp-prev-h1a"/>
                        <div className="lp-prev-h1b"/>
                        <div className="lp-prev-sub"/>
                        <div className="lp-prev-cta"/>
                      </div>
                      <div className="lp-prev-vis"/>
                    </div>
                    {/* Lighthouse scores */}
                    <div className="lp-prev-lighthouse">
                      {[['100','#0CCE6B'],['100','#0CCE6B'],['96','#FFA400'],['100','#0CCE6B']].map(([score,color],i)=>(
                          <div key={i} className="lp-prev-lh" style={{borderColor:color,color:color}}>{score}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>{/* end lp-editor-wrap */}

              {/* Mobile code ticker (visible < 1200px) */}
              <div className="lp-mob-ticker">
                <div className="lp-mob-ticker-card">
                  <div className="lp-mob-ticker-bar">
                    <div className="lp-mob-ticker-dot" style={{background:'#FF5F57'}}/>
                    <div className="lp-mob-ticker-dot" style={{background:'#FEBC2E'}}/>
                    <div className="lp-mob-ticker-dot" style={{background:'#28C840'}}/>
                    <span className="lp-mob-ticker-title">sunstate-devworks — live code</span>
                  </div>
                  <div className="lp-mob-ticker-body">
                    <div className="lp-mob-ticker-scroll" id="lp-ticker-scroll"/>
                  </div>
                  <div className="lp-mob-ticker-statusbar">
                    <span>⎇ main · ✓ 0 errors</span>
                    <span style={{color:'var(--cyan)'}}>TypeScript · Next.js 15</span>
                  </div>
                </div>
              </div>

            </div>{/* end lp-hero-inner */}

            <div className="lp-scroll-hint">
              <span className="lp-scroll-text">Scroll</span>
              <div className="lp-scroll-line"/>
            </div>
          </section>

          {/* ── MARQUEE ── */}
          <div className="lp-marquee-wrap">
            <div className="lp-mq-row"><div className="lp-mq-track" id="lp-mq1"/></div>
            <div className="lp-mq-row"><div className="lp-mq-track rev" id="lp-mq2"/></div>
          </div>

          {/* ── STATS ── */}
          <section className="lp-section lp-clip-top" style={{background:'var(--navy-mid)',paddingTop:'clamp(80px,10vw,140px)'}}>
            <div className="lp-section-inner">
              <div className="lp-stats-row lp-rv" id="lp-stats">
                {[
                  {num:'47',suf:'+',label:'Projects Delivered',c:'var(--cyan)',sc:'var(--cyan)',ghost:'47'},
                  {num:'100',suf:'%',label:'Client Satisfaction',c:'var(--orange)',sc:'var(--orange)',ghost:'100'},
                  {num:'50',suf:'',label:'Avg Rating ★',c:'var(--cyan)',sc:'var(--cyan)',ghost:'5.0',dec:true},
                  {num:'3',suf:'+',label:'Years in Arizona',c:'var(--orange)',sc:'var(--orange)',ghost:'3'},
                ].map((s,i)=>(
                    <div key={i} className="lp-stat" style={{'--sc':s.sc} as React.CSSProperties}>
                      <div className="lp-stat-ghost">{s.ghost}</div>
                      <div className="lp-stat-num" style={{color:s.c}} data-t={s.num} data-s={s.suf} data-dec={s.dec?'1':undefined}>{s.dec?'5.0★':s.num+s.suf}</div>
                      <div className="lp-stat-label">{s.label}</div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
            SERVICES — Live canvas demo per service
            ══════════════════════════════════════════════ */}
          <section id="lp-services" className="lp-section" style={{background:'var(--navy)',padding:'clamp(80px,10vw,140px) 0'}}>
            <div className="lp-section-inner" style={{paddingLeft:'clamp(24px,6vw,80px)',paddingRight:'clamp(24px,6vw,80px)',marginBottom:56}}>
              <div className="lp-rv">
                <div className="lp-eyebrow">What We Build</div>
                <h2 className="lp-h2">Full-stack capabilities.<br/><em>See them in action.</em></h2>
                <p style={{color:'var(--muted)',fontSize:15,marginTop:16,maxWidth:480}}>Hover each service to see a live demo of what we actually build.</p>
              </div>
            </div>

            <div className="lp-svc-list">
              {SERVICES_DATA.map((s,i)=>(
                  <div key={i} className={`lp-svc-row ${s.cls} lp-rv lp-d${i%2}`}>
                    {/* Ghost */}
                    <div className="lp-svc-ghost" style={{color:s.c}}>{s.ghost}</div>

                    {/* Left: info */}
                    <div className="lp-svc-row-info">
                      <div className="lp-svc-row-num" style={{color:s.c}}>{s.label}</div>
                      <div className="lp-svc-row-title">{s.title}</div>
                      <div className="lp-svc-row-desc">{s.desc}</div>
                      <div className="lp-svc-row-tags">
                        {s.tags.map(t=>(
                            <span key={t} className="lp-svc-row-tag" style={{color:s.c,background:`rgba(${s.cls==='cyan'?'0,212,200':'244,98,42'},.07)`,borderColor:`rgba(${s.cls==='cyan'?'0,212,200':'244,98,42'},.2)`}}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right: live canvas demo (desktop hover) */}
                    <div className="lp-svc-canvas-wrap">
                      <canvas/>
                      <div className="lp-svc-canvas-label">
                        {['Browser · Lighthouse · Code Paint','iOS UI · SwiftUI · App Store','Neural Net · Claude API · n8n','Lettermark · Color System · Type'][i]}
                      </div>
                    </div>

                    {/* Mobile canvas (tap-to-activate, auto-starts on scroll) */}
                    <div className="lp-svc-canvas-mobile">
                      <canvas/>
                      <div className="lp-svc-tap-hint">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0m-2 6V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4m0 0a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1"/></svg>
                        Tap to preview
                      </div>
                      <div className="lp-svc-canvas-label-mob">
                        {['Web','Mobile','AI','Brand'][i]} demo
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            <div className="lp-section-inner" style={{paddingLeft:'clamp(24px,6vw,80px)',paddingRight:'clamp(24px,6vw,80px)',marginTop:56,textAlign:'center'}}>
              <div className="lp-rv">
                <a href="#lp-contact" className="lp-btn-cta" style={{fontSize:14,padding:'17px 40px'}}>
                  Get a Free Quote <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </section>

          {/* ── WORKS ── */}
          <section className="lp-section lp-clip-both" style={{background:'var(--navy-mid)',padding:'clamp(80px,10vw,140px) 0'}}>
            <div className="lp-section-inner" style={{paddingLeft:'clamp(24px,6vw,80px)',paddingRight:'clamp(24px,6vw,80px)',marginBottom:56}}>
              <div className="lp-rv">
                <div className="lp-eyebrow o">Selected Work</div>
                <h2 className="lp-h2">1 of 1.<br/><span className="o">Every time.</span></h2>
              </div>
            </div>
            <div className="lp-works-list">
              {WORKS.map((w,i)=>{
                const rgb=w.accentRgb
                return (
                    <div key={i} className="lp-work-card lp-rv" style={{'--wac':w.accent} as React.CSSProperties}>
                      <div className="lp-work-card-left">
                        <div className="lp-work-card-meta">
                          <span className="lp-work-card-num" style={{color:w.accent}}>{w.num}</span>
                          <div className="lp-work-card-sep"/>
                          <span className="lp-work-card-cat">{w.cat}</span>
                          <div className="lp-work-card-sep"/>
                          <span className="lp-work-card-year">{w.year}</span>
                        </div>
                        <div className="lp-work-card-title">{w.title}</div>
                        <p className="lp-work-card-desc">{w.desc}</p>
                        <div className="lp-work-card-highlight">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={w.accent} strokeWidth="2" style={{marginTop:2,flexShrink:0}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                          <p>{w.highlight}</p>
                        </div>
                        <div className="lp-work-card-tech">{w.tech.map(t=><span key={t} className="lp-work-card-tech-badge">{t}</span>)}</div>
                        {w.url?(
                            <a href={w.url} target="_blank" rel="noopener noreferrer" className="lp-work-card-link" style={{color:w.accent,borderColor:`rgba(${rgb},.3)`}} onClick={e=>e.stopPropagation()}>
                              {w.url.includes('apple.com')?'View on App Store':'Visit Site'}
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </a>
                        ):(
                            <span style={{fontFamily:'var(--mono)',fontSize:10,color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',opacity:.5}}>Private Client · NDA</span>
                        )}
                      </div>
                      <div className="lp-work-card-right">
                        <div className="lp-work-ghost" style={{color:w.accent==='var(--cyan)'?'rgba(0,212,200,.04)':'rgba(244,98,42,.04)'}}>{w.num}</div>
                        <div style={{position:'relative',zIndex:1}}>
                          <div className="lp-work-result-label">Key Result</div>
                          <div className="lp-work-result-val" style={{color:w.accent}}>{w.result}</div>
                          <div className="lp-work-result-sub">{w.resultLabel}</div>
                        </div>
                        <div style={{position:'relative',zIndex:1}}>
                          <div className="lp-work-result-label" style={{marginBottom:8}}>Category</div>
                          <div className="lp-work-tags">
                            {w.cat.split(' · ').map(tag=>(
                                <span key={tag} className="lp-work-tag-badge" style={{color:w.accent,background:`rgba(${rgb},.08)`,borderColor:`rgba(${rgb},.2)`}}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
            <a href="/work" className="lp-works-viewall lp-rv">
              <div className="lp-works-viewall-l">See all 6 projects →</div>
              <div className="lp-works-viewall-r">Full case studies, live sites &amp; App Store links <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section className="lp-section" style={{background:'var(--navy)'}}>
            <div style={{position:'absolute',right:'-5%',top:'15%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,.035) 0%,transparent 70%)',pointerEvents:'none'}}/>
            <div className="lp-section-inner">
              <div className="lp-rv" style={{marginBottom:48}}>
                <div className="lp-eyebrow">Client Results</div>
                <h2 className="lp-h2">Don&apos;t take our word<br/><em>for it.</em></h2>
              </div>
              <div className="lp-testi-big lp-rv">
                <div className="lp-testi-big-qm">&ldquo;</div>
                <div style={{color:'#FFBE00',fontSize:14,letterSpacing:'2px',marginBottom:20}}>★★★★★</div>
                <p className="lp-testi-q">&ldquo;We were running five different apps just to keep the business moving. Sunstate built us one platform that does everything — scheduling, invoicing, P&L tracking, client comms. We got back at least <em>20 hours a week</em> and actually know where our money is going now.&rdquo;</p>
                <div className="lp-testi-who">
                  <div className="lp-testi-av" style={{background:'rgba(0,212,200,.1)',border:'2px solid rgba(0,212,200,.28)',color:'var(--cyan)'}}>AM</div>
                  <div><div className="lp-testi-name" style={{color:'var(--cyan)'}}>Alex M.</div><div className="lp-testi-role">Owner, Easy Landscape Solutions</div></div>
                </div>
              </div>
              <div className="lp-testi-grid">
                {[
                  {i:'BW',name:'Billy W.',role:'Owner, Zona Pest Solutions',c:'var(--orange)',body:"The site looks better than anything I could have imagined and it actually brings in leads. We went from invisible online to ranking in Scottsdale and Mesa in a few months."},
                  {i:'ZH',name:'Zach H.',role:'Owner, Cloak Wraps',c:'var(--cyan)',body:"I wanted something that looked as premium as the work we do on cars. They nailed it. The site is clean, fast, and gets compliments from customers before they even walk in."},
                ].map((t,i)=>(
                    <div key={i} className={`lp-testi-card lp-rv lp-d${i}`} style={{borderTopColor:t.c}}>
                      <div style={{color:'#FFBE00',fontSize:13,letterSpacing:'1px',marginBottom:16}}>★★★★★</div>
                      <p className="lp-testi-body">&ldquo;{t.body}&rdquo;</p>
                      <div className="lp-testi-who">
                        <div className="lp-testi-av" style={{width:36,height:36,fontSize:12,background:t.c==='var(--cyan)'?'rgba(0,212,200,.1)':'rgba(244,98,42,.1)',border:`2px solid ${t.c==='var(--cyan)'?'rgba(0,212,200,.28)':'rgba(244,98,42,.28)'}`,color:t.c}}>{t.i}</div>
                        <div><div className="lp-testi-name" style={{color:t.c,fontSize:13}}>{t.name}</div><div className="lp-testi-role">{t.role}</div></div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHY US ── */}
          <section className="lp-section lp-clip-top" style={{background:'var(--navy-mid)',padding:'clamp(80px,10vw,140px) 0'}}>
            <div className="lp-section-inner" style={{paddingLeft:'clamp(24px,6vw,80px)',paddingRight:'clamp(24px,6vw,80px)',marginBottom:56}}>
              <div className="lp-rv"><div className="lp-eyebrow o">Why Sunstate DevWorks</div><h2 className="lp-h2">One team.<br/><span className="o">Total ownership.</span></h2></div>
            </div>
            <div className="lp-why-grid">
              {[{n:'01',c:'var(--cyan)',title:'You Own 100%',desc:'No proprietary platforms, no lock-in. The code is yours on delivery — forever. Take it anywhere.'},{n:'02',c:'var(--orange)',title:'Flat-Rate Pricing',desc:'Written scope upfront. No hourly surprises. You approve the price before we write a single line.'},{n:'03',c:'var(--cyan)',title:'One Team, One Bill',desc:'We build it, host it, and maintain it. No blame game between your dev and your host. Ever.'},{n:'04',c:'var(--orange)',title:'Local Arizona',desc:'Real humans in Gilbert, AZ. Direct access to your team — no overseas outsourcing, no call centers.'}].map((w,i)=>(
                  <div key={i} className={`lp-why lp-rv lp-d${i}`}><div className="lp-why-num" style={{color:w.c}}>{w.n}</div><div className="lp-why-line" style={{background:w.c}}/><div className="lp-why-title">{w.title}</div><p className="lp-why-desc">{w.desc}</p></div>
              ))}
            </div>
          </section>

          {/* ── PROCESS ── */}
          <section className="lp-section" style={{background:'var(--navy)'}}>
            <div className="lp-section-inner">
              <div className="lp-rv" style={{textAlign:'center',marginBottom:72}}><div className="lp-eyebrow" style={{justifyContent:'center'}}>How It Works</div><h2 className="lp-h2">From idea to launch.<br/><em>No confusion.</em></h2></div>
              <div style={{position:'relative'}}>
                <div className="lp-proc-connector"/>
                <div className="lp-proc-grid">
                  {[{n:'01',c:'var(--cyan)',title:'Discovery Call',desc:'30 minutes. We learn your business, goals, and what success looks like for you.'},{n:'02',c:'var(--orange)',title:'Proposal & Scope',desc:'Written scope, timeline, flat-rate price. You approve before we start.'},{n:'03',c:'var(--cyan)',title:'Design & Build',desc:'We build in sprints and share progress weekly. You stay in the loop.'},{n:'04',c:'var(--orange)',title:'Launch & Handoff',desc:'We handle DNS, SSL, and go-live. Then we hand you the keys.'}].map((p,i)=>(
                      <div key={i} className={`lp-proc-step lp-rv lp-d${i}`}><div className="lp-proc-n" style={{borderColor:p.c,color:p.c}}>{p.n}</div><div className="lp-proc-title">{p.title}</div><p className="lp-proc-desc">{p.desc}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── FORM ── */}
          <section id="lp-contact" className="lp-section lp-clip-top" style={{background:'var(--navy-mid)',padding:'clamp(80px,10vw,140px) clamp(24px,6vw,80px)'}}>
            <div style={{position:'absolute',top:'-8%',right:'-4%',width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(244,98,42,.05) 0%,transparent 70%)',pointerEvents:'none'}}/>
            <div style={{position:'absolute',bottom:'-8%',left:'-4%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,200,.04) 0%,transparent 70%)',pointerEvents:'none'}}/>
            <div className="lp-section-inner">
              <div className="lp-form-wrap">
                <div className="lp-rv">
                  <div className="lp-eyebrow o">Ready to Build?</div>
                  <h2 className="lp-h2" style={{marginBottom:28}}>Let&apos;s build something<br/><em>that converts.</em></h2>
                  <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.85,marginBottom:40,maxWidth:440}}>Fill out the form and we&apos;ll reply within 2 hours. No fluff, no pressure — just a straight conversation about what we can build together.</p>
                  <div className="lp-urgency"><div style={{color:'var(--orange)',flexShrink:0,marginTop:2}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><div className="lp-urgency-title">Limited Availability</div><p className="lp-urgency-text">We take on 3–5 new projects per month to maintain quality. Reach out now to lock in your spot.</p></div></div>
                  <div className="lp-checks">{['Reply within 2 hours during business hours','Free 30-min discovery call to scope your project','Written scope with flat-rate price — zero surprises','No pressure, no obligation'].map((item,i)=>(<div key={i} className="lp-check"><div className="lp-check-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div><span className="lp-check-text">{item}</span></div>))}</div>
                </div>
                <div className="lp-rv" style={{transitionDelay:'.12s'}}>
                  <div id="lp-fsuc" className="lp-form-success" style={{display:'none'}}><div className="lp-success-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="lp-success-title">We got your message!</div><p className="lp-success-text">Expect a reply within 2 hours. A confirmation is heading to your inbox now.</p></div>
                  <div id="lp-fw" className="lp-form-border"><div className="lp-form-inner"><form id="lp-form-el">
                    <div className="lp-f-row"><div><label className="lp-f-label">Name *</label><input className="lp-f-input" type="text" name="name" placeholder="Jane Smith" required/></div><div><label className="lp-f-label">Email *</label><input className="lp-f-input" type="email" name="email" placeholder="jane@co.com" required/></div></div>
                    <div className="lp-f-group"><label className="lp-f-label">Phone</label><input className="lp-f-input" type="tel" name="phone" placeholder="(480) 000-0000"/></div>
                    <div className="lp-f-group"><label className="lp-f-label">Service Needed</label><select className="lp-f-input" name="service"><option value="">Select a service...</option><option>Website Design &amp; Development</option><option>Mobile App (iOS / Android)</option><option>AI &amp; Automation</option><option>Branding &amp; Identity</option><option>Multiple Services</option></select></div>
                    <div className="lp-f-group"><label className="lp-f-label">Tell us about your project *</label><textarea className="lp-f-input" name="message" rows={4} placeholder="What are you building? Timeline? Budget range?" required style={{resize:'vertical',minHeight:100}}/></div>
                    <div id="lp-f-err" style={{display:'none',fontFamily:'var(--mono)',fontSize:11,color:'var(--orange)',textAlign:'center',marginBottom:12}}>Something went wrong — <a href="mailto:contact@sunstatedevworks.com" style={{color:'var(--orange)'}}>contact@sunstatedevworks.com</a></div>
                    <button type="submit" className="lp-f-submit" id="lp-f-btn">Get My Free Quote →</button>
                    <p className="lp-f-note">Reply in under 2 hours · No spam, ever</p>
                  </form></div></div>
                </div>
              </div>
            </div>
          </section>

          <footer className="lp-footer">
            <span className="lp-footer-copy">© 2025 Sunstate DevWorks · Gilbert, AZ · All rights reserved</span>
            <div className="lp-footer-links">
              <a href="/privacy" className="lp-footer-link">Privacy Policy</a>
              <a href="mailto:contact@sunstatedevworks.com" className="lp-footer-link" style={{color:'var(--cyan)'}}>contact@sunstatedevworks.com</a>
            </div>
          </footer>
        </div>
      </>
  )
}