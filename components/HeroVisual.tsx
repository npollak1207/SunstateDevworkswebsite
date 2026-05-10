'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────
   HeroVisual — Multi-service animated workspace
   · Live visual preview panel (browser / phone / chat / brand)
   · VS Code code editor with language-specific syntax highlighting
   · All 4 Sunstate services cycle automatically
   · Fully responsive — works on mobile
───────────────────────────────────────────────────────────────────── */

type Seg = { t: string; c: string }

const SVCS = [
  {
    num: '01', label: 'Web Dev', name: 'page.tsx', lang: 'TSX',
    accent: '#00D4C8', dim: 'rgba(0,212,200,0.1)',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    lines: [
      [{ t:'import', c:'#C792EA' },{ t:' { Hero, SEO } ', c:'#EEFFFF' },{ t:'from', c:'#C792EA' },{ t:" '@/components'", c:'#C3E88D' }],
      [{ t:'import', c:'#C792EA' },{ t:' { getProjects } ', c:'#EEFFFF' },{ t:'from', c:'#C792EA' },{ t:" '@/lib/db'", c:'#C3E88D' }],
      [] as Seg[],
      [{ t:'export', c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'default',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'async',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'function',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'Page',c:'#82AAFF' },{ t:'() {',c:'#89DDFF' }],
      [{ t:'  ',c:'#EEFFFF' },{ t:'const',c:'#C792EA' },{ t:' projects = ',c:'#EEFFFF' },{ t:'await',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'getProjects',c:'#82AAFF' },{ t:'()',c:'#89DDFF' }],
      [{ t:'  ',c:'#EEFFFF' },{ t:'return',c:'#C792EA' },{ t:' (',c:'#89DDFF' }],
      [{ t:'    <',c:'#89DDFF' },{ t:'main',c:'#82AAFF' },{ t:' className=',c:'#89DDFF' },{ t:'"hero-layout"',c:'#C3E88D' },{ t:'>',c:'#89DDFF' }],
      [{ t:'      <',c:'#89DDFF' },{ t:'SEO',c:'#82AAFF' },{ t:' title=',c:'#89DDFF' },{ t:'"Custom Builds"',c:'#C3E88D' },{ t:' />',c:'#89DDFF' }],
      [{ t:'      <',c:'#89DDFF' },{ t:'Hero',c:'#82AAFF' },{ t:' data=',c:'#89DDFF' },{ t:'{projects}',c:'#EEFFFF' },{ t:' />',c:'#89DDFF' }],
      [{ t:'    </main>',c:'#89DDFF' }],
      [{ t:'  )',c:'#89DDFF' }],
      [{ t:'}',c:'#89DDFF' }],
    ] as Seg[][],
    termLines: [
      { text: '$ next build', color: '#7A8FA6' },
      { text: '▸ Compiling TypeScript...', color: '#00D4C8' },
      { text: '✓ Lighthouse 100 · 0 errors · 1.1s', color: '#28C840' },
      { text: '🌐  sunstatedevworks.com — live', color: '#F0EDE6' },
    ],
  },
  {
    num: '02', label: 'Mobile', name: 'App.swift', lang: 'Swift',
    accent: '#F4622A', dim: 'rgba(244,98,42,0.1)',
    icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
    lines: [
      [{ t:'import',c:'#FC5FA3' },{ t:' SwiftUI',c:'#DDEEFF' }],
      [] as Seg[],
      [{ t:'@main',c:'#D9C97C' },{ t:' ',c:'#DDEEFF' },{ t:'struct',c:'#FC5FA3' },{ t:' ',c:'#DDEEFF' },{ t:'ClientApp',c:'#5DD8FF' },{ t:': ',c:'#5DD8FF' },{ t:'App',c:'#D0A8FF' },{ t:' {',c:'#5DD8FF' }],
      [{ t:'  ',c:'#DDEEFF' },{ t:'@StateObject',c:'#D9C97C' },{ t:' ',c:'#DDEEFF' },{ t:'var',c:'#FC5FA3' },{ t:' store = ',c:'#DDEEFF' },{ t:'AppStore',c:'#5DD8FF' },{ t:'()',c:'#5DD8FF' }],
      [] as Seg[],
      [{ t:'  ',c:'#DDEEFF' },{ t:'var',c:'#FC5FA3' },{ t:' body: ',c:'#DDEEFF' },{ t:'some',c:'#FC5FA3' },{ t:' ',c:'#DDEEFF' },{ t:'Scene',c:'#D0A8FF' },{ t:' {',c:'#5DD8FF' }],
      [{ t:'    ',c:'#DDEEFF' },{ t:'WindowGroup',c:'#5DD8FF' },{ t:' {',c:'#5DD8FF' }],
      [{ t:'      ',c:'#DDEEFF' },{ t:'RootView',c:'#5DD8FF' },{ t:'()',c:'#5DD8FF' }],
      [{ t:'        .environmentObject(',c:'#5DD8FF' },{ t:'store',c:'#DDEEFF' },{ t:')',c:'#5DD8FF' }],
      [{ t:'    }',c:'#5DD8FF' }],
      [{ t:'  }',c:'#5DD8FF' }],
      [{ t:'}',c:'#5DD8FF' }],
    ] as Seg[][],
    termLines: [
      { text: '$ xcodebuild -scheme ClientApp', color: '#7A8FA6' },
      { text: '▸ Compiling Swift sources...', color: '#F4622A' },
      { text: '✓ Build succeeded · 0 warnings', color: '#28C840' },
      { text: '📱  v1.0 uploaded to TestFlight', color: '#F0EDE6' },
    ],
  },
  {
    num: '03', label: 'AI & Auto', name: 'agent.py', lang: 'Python',
    accent: '#C792EA', dim: 'rgba(199,146,234,0.1)',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    lines: [
      [{ t:'import',c:'#FF7AB2' },{ t:' anthropic',c:'#EEFFFF' }],
      [{ t:'from',c:'#FF7AB2' },{ t:' typing ',c:'#EEFFFF' },{ t:'import',c:'#FF7AB2' },{ t:' AsyncIterator',c:'#D9C97C' }],
      [] as Seg[],
      [{ t:'client = anthropic.',c:'#EEFFFF' },{ t:'Anthropic',c:'#5DD8FF' },{ t:'()',c:'#5DD8FF' }],
      [] as Seg[],
      [{ t:'async',c:'#FF7AB2' },{ t:' ',c:'#EEFFFF' },{ t:'def',c:'#FF7AB2' },{ t:' ',c:'#EEFFFF' },{ t:'run_agent',c:'#5DD8FF' },{ t:'(prompt: ',c:'#5DD8FF' },{ t:'str',c:'#D9C97C' },{ t:') -> ',c:'#5DD8FF' },{ t:'str',c:'#D9C97C' },{ t:':',c:'#5DD8FF' }],
      [{ t:'    msg = ',c:'#EEFFFF' },{ t:'await',c:'#FF7AB2' },{ t:' client.messages.',c:'#EEFFFF' },{ t:'create',c:'#5DD8FF' },{ t:'(',c:'#5DD8FF' }],
      [{ t:'        model=',c:'#EEFFFF' },{ t:'"claude-opus-4-7"',c:'#FC6A5D' },{ t:',',c:'#5DD8FF' }],
      [{ t:'        messages=[{',c:'#EEFFFF' },{ t:'"role"',c:'#FC6A5D' },{ t:': ',c:'#5DD8FF' },{ t:'"user"',c:'#FC6A5D' },{ t:'}]',c:'#EEFFFF' }],
      [{ t:'    )',c:'#5DD8FF' }],
      [{ t:'    ',c:'#EEFFFF' },{ t:'return',c:'#FF7AB2' },{ t:' msg.content[',c:'#EEFFFF' },{ t:'0',c:'#D9C97C' },{ t:'].text',c:'#EEFFFF' }],
    ] as Seg[][],
    termLines: [
      { text: '$ python -m agent deploy', color: '#7A8FA6' },
      { text: '▸ Initializing Claude client...', color: '#C792EA' },
      { text: '✓ Agent live · webhooks connected', color: '#28C840' },
      { text: '🤖  Workflows active · responding', color: '#F0EDE6' },
    ],
  },
  {
    num: '04', label: 'Branding', name: 'tokens.ts', lang: 'TS',
    accent: '#FFCB6B', dim: 'rgba(255,203,107,0.1)',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    lines: [
      [{ t:'// Brand design system',c:'#637777' }],
      [{ t:'export',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'const',c:'#C792EA' },{ t:' ',c:'#EEFFFF' },{ t:'brand',c:'#FFCB6B' },{ t:' = {',c:'#89DDFF' }],
      [{ t:'  colors: {',c:'#89DDFF' }],
      [{ t:'    primary:  ',c:'#EEFFFF' },{ t:"'#00D4C8'",c:'#C3E88D' },{ t:', ',c:'#89DDFF' },{ t:'// cyan',c:'#637777' }],
      [{ t:'    accent:   ',c:'#EEFFFF' },{ t:"'#F4622A'",c:'#C3E88D' },{ t:', ',c:'#89DDFF' },{ t:'// orange',c:'#637777' }],
      [{ t:'    surface:  ',c:'#EEFFFF' },{ t:"'#0D1B2A'",c:'#C3E88D' },{ t:', ',c:'#89DDFF' },{ t:'// navy',c:'#637777' }],
      [{ t:'  },',c:'#89DDFF' }],
      [{ t:'  typography: {',c:'#89DDFF' }],
      [{ t:'    heading: ',c:'#EEFFFF' },{ t:"'Syne, sans-serif'",c:'#C3E88D' }],
      [{ t:'    mono:    ',c:'#EEFFFF' },{ t:"'Space Mono'",c:'#C3E88D' }],
      [{ t:'  },',c:'#89DDFF' }],
      [{ t:'} ',c:'#89DDFF' },{ t:'as const',c:'#C792EA' }],
    ] as Seg[][],
    termLines: [
      { text: '$ figma-tokens export --format css', color: '#7A8FA6' },
      { text: '▸ Extracting 48 design tokens...', color: '#FFCB6B' },
      { text: '✓ Synced to codebase · Storybook live', color: '#28C840' },
      { text: '✨  Brand system published', color: '#F0EDE6' },
    ],
  },
]

/* ── Service Visual Previews ─────────────────────────────────────── */

function WebPreview({ accent }: { accent: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#080c18', overflow: 'hidden' }}>
      <div style={{ background: '#12151f', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 5, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <span key={i} style={{ width:6,height:6,borderRadius:'50%',background:c,display:'block',flexShrink:0 }} />)}
        <div style={{ flex:1, background:'rgba(255,255,255,0.04)', borderRadius:3, padding:'2px 8px', marginLeft:4, display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ width:5,height:5,borderRadius:'50%',background:`${accent}55`,display:'block',flexShrink:0 }} />
          <span style={{ fontFamily:'Space Mono, monospace', fontSize:7, color:'rgba(122,143,166,0.45)' }}>sunstatedevworks.com</span>
        </div>
      </div>
      <div style={{ padding:'7px 10px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:7, animation:'skelIn .3s ease .1s both' }}>
          <div style={{ width:56,height:7,background:accent,borderRadius:2,opacity:.7 }} />
          <div style={{ display:'flex', gap:4, alignItems:'center' }}>
            {[24,20,28].map((w,i) => <div key={i} style={{ width:w,height:4.5,background:'rgba(255,255,255,.07)',borderRadius:2 }} />)}
            <div style={{ width:32,height:12,background:accent,borderRadius:3,opacity:.85 }} />
          </div>
        </div>
        <div style={{ background:'rgba(255,255,255,.025)', borderRadius:5, padding:'9px 10px 8px', marginBottom:5 }}>
          <div style={{ width:'76%',height:8,background:'rgba(255,255,255,.13)',borderRadius:2,marginBottom:4,animation:'skelIn .4s ease .28s both' }} />
          <div style={{ width:'55%',height:8,background:accent,borderRadius:2,marginBottom:6,opacity:.6,animation:'skelIn .4s ease .38s both' }} />
          <div style={{ width:'90%',height:3.5,background:'rgba(255,255,255,.06)',borderRadius:2,marginBottom:2.5,animation:'skelIn .3s ease .48s both' }} />
          <div style={{ width:'65%',height:3.5,background:'rgba(255,255,255,.04)',borderRadius:2,marginBottom:7,animation:'skelIn .3s ease .53s both' }} />
          <div style={{ display:'flex', gap:5, animation:'skelIn .3s ease .62s both' }}>
            <div style={{ width:48,height:12,background:accent,borderRadius:3,opacity:.9 }} />
            <div style={{ width:40,height:12,border:`1px solid ${accent}`,borderRadius:3,opacity:.4 }} />
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:4 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ background:'rgba(255,255,255,.03)',borderRadius:4,padding:'5px',borderTop:`2px solid ${i%2===0?accent:'rgba(244,98,42,.65)'}`,animation:`skelIn .35s ease ${.72+i*.13}s both` }}>
              <div style={{ width:'52%',height:4,background:i%2===0?accent:'rgba(244,98,42,.5)',borderRadius:1,marginBottom:4,opacity:.6 }} />
              <div style={{ width:'88%',height:3,background:'rgba(255,255,255,.06)',borderRadius:1,marginBottom:2 }} />
              <div style={{ width:'62%',height:3,background:'rgba(255,255,255,.04)',borderRadius:1 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobilePreview({ accent }: { accent: string }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#080c18', position:'relative' }}>
      <div style={{ position:'absolute', width:100,height:180,borderRadius:24,background:`radial-gradient(ellipse, ${accent}18 0%, transparent 70%)`,pointerEvents:'none' }} />
      <div style={{ width:92,height:175,border:'2px solid rgba(255,255,255,.12)',borderRadius:20,background:'#0f1219',position:'relative',overflow:'hidden',boxShadow:`0 0 0 1px rgba(255,255,255,.04), 0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.05)` }}>
        <div style={{ position:'absolute',top:8,left:'50%',transform:'translateX(-50%)',width:28,height:6,background:'#000',borderRadius:3,zIndex:2 }} />
        <div style={{ position:'absolute', inset:'20px 3px 18px', overflow:'hidden' }}>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 5px 5px',animation:'skelIn .3s ease .15s both' }}>
            <span style={{ fontFamily:'Syne, sans-serif',fontWeight:800,fontSize:7,color:'rgba(255,255,255,.75)' }}>ELS Business</span>
            <div style={{ width:12,height:12,borderRadius:'50%',background:`${accent}25`,border:`1px solid ${accent}50`,display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span style={{ fontSize:6,color:accent }}>A</span>
            </div>
          </div>
          <div style={{ background:`${accent}10`,border:`1px solid ${accent}22`,borderRadius:7,padding:'6px 7px',marginBottom:4,animation:'skelIn .4s ease .3s both' }}>
            <div style={{ fontFamily:'Space Mono, monospace',fontSize:6,color:`${accent}88`,letterSpacing:'.05em',marginBottom:1.5 }}>MRR</div>
            <div style={{ fontFamily:'Syne, sans-serif',fontWeight:800,fontSize:16,color:accent,lineHeight:1 }}>$24.5k</div>
            <div style={{ fontFamily:'Space Mono, monospace',fontSize:6,color:'rgba(40,200,64,.7)',marginTop:2 }}>↑ 18% this month</div>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:3,marginBottom:4 }}>
            {[{l:'Jobs',v:'47',c:'rgba(244,98,42,.7)'},{l:'Clients',v:'12',c:accent}].map((item,i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.04)',borderRadius:5,padding:'4px 5px',animation:`skelIn .3s ease ${.45+i*.1}s both` }}>
                <div style={{ fontFamily:'Space Mono, monospace',fontSize:5.5,color:'rgba(122,143,166,.55)' }}>{item.l}</div>
                <div style={{ fontFamily:'Syne, sans-serif',fontWeight:800,fontSize:12,color:item.c }}>{item.v}</div>
              </div>
            ))}
          </div>
          {['Lawn mow — Mesa','Irrigation — Tempe'].map((job,i) => (
            <div key={i} style={{ display:'flex',alignItems:'center',gap:4,background:'rgba(255,255,255,.03)',borderRadius:3,padding:'3px 5px',marginBottom:2,animation:`skelIn .3s ease ${.6+i*.12}s both` }}>
              <span style={{ width:3,height:3,borderRadius:'50%',background:accent,display:'block',flexShrink:0 }} />
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:5.5,color:'rgba(255,255,255,.45)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' }}>{job}</span>
            </div>
          ))}
        </div>
        <div style={{ position:'absolute',bottom:0,left:0,right:0,height:19,background:'rgba(13,27,42,.95)',borderTop:'1px solid rgba(255,255,255,.05)',display:'flex',alignItems:'center',justifyContent:'space-around',padding:'0 4px' }}>
          {['⊞','≡','＋','◎'].map((icon,i) => (
            <span key={i} style={{ fontSize:9,color:i===0?accent:'rgba(122,143,166,.35)' }}>{icon}</span>
          ))}
        </div>
        <div style={{ position:'absolute',bottom:4,left:'50%',transform:'translateX(-50%)',width:24,height:2,background:'rgba(255,255,255,.2)',borderRadius:2 }} />
      </div>
    </div>
  )
}

function AIPreview({ accent }: { accent: string }) {
  return (
    <div style={{ width:'100%',height:'100%',background:'#080c18',overflow:'hidden',display:'flex',flexDirection:'column' }}>
      <div style={{ background:'#12151f',padding:'6px 12px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,.04)',flexShrink:0 }}>
        <div style={{ display:'flex',alignItems:'center',gap:6 }}>
          <div style={{ width:20,height:20,borderRadius:5,background:`${accent}18`,border:`1px solid ${accent}30`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <span style={{ fontFamily:'Syne, sans-serif',fontWeight:700,fontSize:9.5,color:'rgba(255,255,255,.8)' }}>AI Agent</span>
        </div>
        <div style={{ display:'flex',alignItems:'center',gap:4 }}>
          <span style={{ width:5,height:5,borderRadius:'50%',background:'#28C840',display:'block',boxShadow:'0 0 6px #28C840',animation:'dotPulse 1.4s ease-in-out infinite' }} />
          <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:'#28C840' }}>live</span>
        </div>
      </div>
      <div style={{ flex:1,padding:'7px 10px',display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:4,overflowY:'hidden' }}>
        <div style={{ alignSelf:'flex-end',background:'rgba(255,255,255,.06)',borderRadius:'7px 7px 2px 7px',padding:'5px 8px',maxWidth:'74%',animation:'skelIn .3s ease .1s both' }}>
          <span style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:'rgba(255,255,255,.6)' }}>Analyze this week&apos;s data</span>
        </div>
        <div style={{ alignSelf:'flex-start',background:`${accent}10`,border:`1px solid ${accent}22`,borderRadius:'7px 7px 7px 2px',padding:'6px 9px',maxWidth:'88%',animation:'skelIn .3s ease .5s both' }}>
          <div style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:'rgba(255,255,255,.72)',lineHeight:1.75 }}>
            <div style={{ animation:'streamReveal 1.2s ease .65s both' }}>Revenue up 18% MoM.</div>
            <div style={{ animation:'streamReveal 1.2s ease .95s both' }}>3 tasks auto-dispatched.</div>
            <div style={{ animation:'streamReveal 1.2s ease 1.2s both' }}>Report ready to send.</div>
          </div>
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:2.5 }}>
          {[{t:'Report generated',c:'#28C840'},{t:'Email dispatched',c:accent},{t:'Calendar updated',c:'rgba(255,203,107,.8)'}].map((item,i) => (
            <div key={i} style={{ display:'flex',alignItems:'center',gap:5,animation:`skelIn .25s ease ${1.5+i*.12}s both` }}>
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:item.c }}>✓</span>
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:item.c }}>{item.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrandPreview({ accent }: { accent: string }) {
  return (
    <div style={{ width:'100%',height:'100%',background:'#080c18',overflow:'hidden',padding:'9px 12px' }}>
      <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8,animation:'skelIn .3s ease .08s both' }}>
        <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:'rgba(122,143,166,.45)',letterSpacing:'.1em',textTransform:'uppercase' }}>Brand System</span>
        <span style={{ fontFamily:'Space Mono, monospace',fontSize:7,color:accent,letterSpacing:'.06em' }}>v2.0 · 48 tokens</span>
      </div>
      <div style={{ marginBottom:9 }}>
        <div style={{ fontFamily:'Space Mono, monospace',fontSize:7,color:'rgba(122,143,166,.38)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:5,animation:'skelIn .3s ease .18s both' }}>Colors</div>
        <div style={{ display:'flex',gap:4 }}>
          {[{c:'#00D4C8',n:'Cyan'},{c:'#F4622A',n:'Orange'},{c:'#0D1B2A',n:'Navy'},{c:'#F0EDE6',n:'Cream'}].map((s,i) => (
            <div key={i} style={{ flex:1,animation:`skelIn .35s ease ${.28+i*.11}s both` }}>
              <div style={{ height:24,background:s.c,borderRadius:4,marginBottom:3,border:s.c==='#0D1B2A'?'1px solid rgba(255,255,255,.1)':undefined }} />
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:6,color:'rgba(122,143,166,.4)' }}>{s.n}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom:7 }}>
        <div style={{ fontFamily:'Space Mono, monospace',fontSize:7,color:'rgba(122,143,166,.38)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:5,animation:'skelIn .3s ease .62s both' }}>Typography</div>
        <div style={{ background:'rgba(255,255,255,.03)',borderRadius:5,padding:'6px 8px',marginBottom:3,animation:'skelIn .3s ease .72s both' }}>
          <div style={{ fontFamily:'Syne, sans-serif',fontWeight:800,fontSize:13,color:'rgba(255,255,255,.85)',letterSpacing:'-.02em',lineHeight:1 }}>We Build.</div>
          <div style={{ fontFamily:'Space Mono, monospace',fontSize:6.5,color:'rgba(122,143,166,.38)',marginTop:2 }}>Syne — Display headings</div>
        </div>
        <div style={{ background:'rgba(255,255,255,.03)',borderRadius:5,padding:'5px 8px',animation:'skelIn .3s ease .84s both' }}>
          <div style={{ fontFamily:'DM Sans, sans-serif',fontSize:9,color:'rgba(255,255,255,.55)',lineHeight:1.4 }}>Digital products for real businesses.</div>
          <div style={{ fontFamily:'Space Mono, monospace',fontSize:6.5,color:'rgba(122,143,166,.38)',marginTop:2 }}>DM Sans — Body copy</div>
        </div>
      </div>
      <div style={{ display:'flex',gap:3,flexWrap:'wrap',animation:'skelIn .3s ease .96s both' }}>
        {['rounded-xl','shadow-2xl','font-syne','space-mono'].map((tok,i) => (
          <div key={i} style={{ background:`${accent}0d`,border:`1px solid ${accent}20`,borderRadius:3,padding:'2px 5px' }}>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:6.5,color:`${accent}88` }}>{tok}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────── */

const METRICS = [
  { label: 'Lighthouse', value: '100',   unit: '',     color: '#28C840', bColor: 'rgba(40,200,64,0.18)' },
  { label: 'Load Time',  value: '< 1.2', unit: 's',    color: '#00D4C8', bColor: 'rgba(0,212,200,0.18)' },
  { label: '4 Services', value: '100',   unit: '%',    color: '#F4622A', bColor: 'rgba(244,98,42,0.18)' },
]

export default function HeroVisual() {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef     = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const [svcIdx,        setSvcIdx]        = useState(0)
  const [doneLines,     setDoneLines]     = useState<Seg[][]>([])
  const [typingLine,    setTypingLine]    = useState<Seg[]>([])
  const [completedSvcs, setCompletedSvcs] = useState<number[]>([])
  const [termOpen,      setTermOpen]      = useState(false)
  const [termLines,     setTermLines]     = useState<{ text: string; color: string }[]>([])
  const [buildProgress, setBuildProgress] = useState(0)
  const [buildDone,     setBuildDone]     = useState(false)
  const [cardsVisible,  setCardsVisible]  = useState([false, false, false])

  /* ── Animation loop ── */
  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

    const typeLine = async (segs: Seg[]) => {
      if (cancelled) return
      if (!segs.length) { setDoneLines(p => [...p, []]); await sleep(28); return }
      let typed: Seg[] = []
      for (const seg of segs) {
        for (let ci = 1; ci <= seg.t.length; ci++) {
          if (cancelled) return
          setTypingLine([...typed, { t: seg.t.slice(0, ci), c: seg.c }])
          await sleep(12)
        }
        typed = [...typed, seg]
      }
      if (!cancelled) { setDoneLines(p => [...p, segs]); setTypingLine([]); await sleep(48) }
    }

    const run = async () => {
      while (!cancelled) {
        setSvcIdx(0); setDoneLines([]); setTypingLine([])
        setCompletedSvcs([]); setTermOpen(false); setTermLines([])
        setBuildProgress(0); setBuildDone(false); setCardsVisible([false,false,false])

        for (let si = 0; si < SVCS.length; si++) {
          if (cancelled) return
          setSvcIdx(si); setDoneLines([]); setTypingLine([])
          setTermOpen(false); setTermLines([])
          setBuildProgress(0); setBuildDone(false)

          for (const line of SVCS[si].lines) {
            if (cancelled) return
            await typeLine(line)
          }
          if (cancelled) return
          await sleep(320)

          setTermOpen(true)
          await sleep(140)
          let prog = 0
          const progInt = setInterval(() => {
            if (cancelled) { clearInterval(progInt); return }
            prog += 2.4
            setBuildProgress(Math.min(prog, 100))
            if (prog >= 100) { clearInterval(progInt); setBuildDone(true) }
          }, 18)
          for (const tl of SVCS[si].termLines) {
            if (cancelled) { clearInterval(progInt); return }
            await sleep(400)
            setTermLines(p => [...p, tl])
          }
          await sleep(460)
          if (!cancelled) setCompletedSvcs(p => [...p, si])
          await sleep(si < SVCS.length - 1 ? 550 : 250)
        }

        for (let i = 0; i < 3; i++) {
          if (cancelled) return
          setCardsVisible(p => p.map((v, idx) => idx <= i || v))
          await sleep(260)
        }
        await sleep(3800)
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  /* ── Canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); if (!ctx) return
    let animId: number, w = 0, h = 0
    type P = { x:number;y:number;vx:number;vy:number;size:number;opacity:number;hue:number }
    let pts: P[] = []
    const resize = () => {
      const r = canvas.parentElement?.getBoundingClientRect()
      w = r?.width||540; h = r?.height||660; canvas.width=w; canvas.height=h
      pts = Array.from({length:68},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.4,opacity:Math.random()*.4+.1,hue:Math.random()>.6?174:16}))
    }
    const draw = () => {
      ctx.clearRect(0,0,w,h)
      const mx=mouseRef.current.x,my=mouseRef.current.y
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy)
        if(d<115){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=pts[i].hue===174?`rgba(0,212,200,${(1-d/115)*.12})`:`rgba(244,98,42,${(1-d/115)*.08})`;ctx.lineWidth=.6;ctx.stroke()}
      }
      for(const p of pts){
        const dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy)
        if(d<150){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mx,my);ctx.strokeStyle=`rgba(0,212,200,${(1-d/150)*.24})`;ctx.lineWidth=.7;ctx.stroke()}
        const b=d<150?1.8:1
        ctx.beginPath();ctx.arc(p.x,p.y,p.size*b,0,Math.PI*2)
        ctx.fillStyle=p.hue===174?`rgba(0,212,200,${p.opacity*b})`:`rgba(244,98,42,${p.opacity*.65*b})`;ctx.fill()
        p.x+=p.vx;p.y+=p.vy
        if(d<90){p.x+=(dx/d)*.4;p.y+=(dy/d)*.4}
        if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0
      }
      animId=requestAnimationFrame(draw)
    }
    resize();draw()
    const ro=new ResizeObserver(resize);if(canvas.parentElement)ro.observe(canvas.parentElement)
    return()=>{cancelAnimationFrame(animId);ro.disconnect()}
  }, [])

  /* ── Mouse ── */
  useEffect(() => {
    const el=containerRef.current;if(!el)return
    const move=(e:MouseEvent)=>{const r=el.getBoundingClientRect();mouseRef.current={x:e.clientX-r.left,y:e.clientY-r.top}}
    el.addEventListener('mousemove',move);return()=>el.removeEventListener('mousemove',move)
  }, [])

  const svc = SVCS[svcIdx]
  const lineCount = doneLines.length + (typingLine.length ? 1 : 0)

  return (
    <div ref={containerRef} style={{ position:'relative', width:'100%', minHeight:540, display:'flex', alignItems:'flex-start', justifyContent:'center' }}>

      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} />

      {/* ── Unified editor + preview box ── */}
      <div className="editor-glow" style={{
        position:'relative', zIndex:2,
        width:'100%', maxWidth:510,
        background:'#1a1e2e',
        border:`1px solid ${svc.accent}40`,
        borderRadius:14, overflow:'hidden',
        boxShadow:`0 0 0 1px rgba(0,0,0,.3), 0 40px 110px rgba(0,0,0,.65), 0 0 50px ${svc.dim}`,
        animation:'heroFloat 7s ease-in-out infinite',
        transition:'border-color .5s ease, box-shadow .5s ease',
      }}>

        {/* Scanline */}
        <div style={{ position:'absolute',inset:0,zIndex:20,pointerEvents:'none',borderRadius:'inherit',background:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.01) 3px,rgba(0,0,0,.01) 4px)' }} />

        {/* Title bar */}
        <div className="editor-titlebar" style={{ background:'#111420',padding:'9px 14px',display:'flex',alignItems:'center',gap:7,borderBottom:'1px solid rgba(255,255,255,.04)' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <span key={i} style={{ width:10,height:10,borderRadius:'50%',background:c,display:'block',flexShrink:0 }} />)}
          <div style={{ flex:1,display:'flex',justifyContent:'center' }}>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:9.5,color:'rgba(122,143,166,.35)',letterSpacing:'.05em' }}>sunstate-devworks — workspace</span>
          </div>
          <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:svc.accent,letterSpacing:'.1em',textTransform:'uppercase',opacity:.65,transition:'color .4s' }}>{svc.lang}</span>
        </div>

        {/* ── Live preview section ── */}
        <div style={{ background:'#111420',padding:'5px 12px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:`1px solid ${svc.accent}22`,transition:'border-color .4s' }}>
          <div style={{ display:'flex',alignItems:'center',gap:7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={svc.accent} strokeWidth="2" style={{ flexShrink:0,transition:'stroke .4s' }}>
              <path d={svc.icon} />
            </svg>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:8.5,color:svc.accent,letterSpacing:'.06em',textTransform:'uppercase',transition:'color .4s' }}>{svc.num} {svc.label}</span>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:'rgba(122,143,166,.35)',letterSpacing:'.04em' }}>— live preview</span>
          </div>
          <div style={{ display:'flex',alignItems:'center',gap:5 }}>
            <span style={{ width:5,height:5,borderRadius:'50%',background:'#28C840',display:'block',boxShadow:'0 0 6px #28C840',animation:'dotPulse 1.4s ease-in-out infinite' }} />
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:'#28C840',letterSpacing:'.05em' }}>live</span>
          </div>
        </div>

        {/* Preview visual */}
        <div key={`preview-${svcIdx}`} className="preview-panel" style={{ height:185,overflow:'hidden',animation:'fadeUp .4s ease both',borderBottom:'1px solid rgba(255,255,255,.04)' }}>
          {svcIdx === 0 && <WebPreview    accent={svc.accent} />}
          {svcIdx === 1 && <MobilePreview accent={svc.accent} />}
          {svcIdx === 2 && <AIPreview     accent={svc.accent} />}
          {svcIdx === 3 && <BrandPreview  accent={svc.accent} />}
        </div>

        {/* ── Code editor section ── */}

        {/* Tabs */}
        <div className="editor-tabs" style={{ background:'#111420',borderBottom:'1px solid rgba(255,255,255,.04)',display:'flex',overflowX:'auto',scrollbarWidth:'none' }}>
          {SVCS.map((s,i) => {
            const isActive=i===svcIdx, isDone=completedSvcs.includes(i)
            return (
              <div key={i} style={{ padding:'6px 10px',whiteSpace:'nowrap',fontFamily:'Space Mono, monospace',fontSize:9,color:isActive?'#EEFFFF':isDone?'rgba(122,143,166,.42)':'rgba(122,143,166,.18)',borderRight:'1px solid rgba(255,255,255,.04)',borderBottom:isActive?`1.5px solid ${s.accent}`:'1.5px solid transparent',background:isActive?'#1a1e2e':'transparent',display:'flex',alignItems:'center',gap:4,transition:'all .25s ease',flexShrink:0 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={isActive?s.accent:isDone?'#28C840':'currentColor'} strokeWidth="2" style={{ flexShrink:0,transition:'stroke .3s' }}>
                  <path d={s.icon}/>
                </svg>
                {s.name}
                {isActive && <span style={{ width:4,height:4,borderRadius:'50%',background:'rgba(244,98,42,.85)',display:'inline-block',flexShrink:0 }} />}
                {isDone && !isActive && <span style={{ fontSize:7,color:'#28C840',opacity:.8 }}>✓</span>}
              </div>
            )
          })}
          <div style={{ flex:1,minWidth:12 }} />
        </div>

        {/* Code body */}
        <div style={{ display:'flex' }}>
          <div className="code-gutter" style={{ width:36,background:'#1a1e2e',borderRight:'1px solid rgba(255,255,255,.03)',flexShrink:0,paddingTop:9,paddingBottom:9 }}>
            {Array.from({length:Math.max(lineCount,7)}).map((_,i) => (
              <div key={i} style={{ height:20,display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:7 }}>
                <span style={{ fontFamily:'Space Mono, monospace',fontSize:9,userSelect:'none',color:i===doneLines.length&&typingLine.length?'rgba(122,143,166,.75)':'rgba(122,143,166,.2)' }}>{i+1}</span>
              </div>
            ))}
          </div>
          <div style={{ flex:1,paddingTop:9,paddingBottom:9,overflowX:'hidden' }}>
            {doneLines.map((line,i) => (
              <div key={i} style={{ height:20,display:'flex',alignItems:'center',paddingLeft:11,paddingRight:9 }}>
                {line.map((seg,si) => <span key={si} style={{ fontFamily:'Space Mono, monospace',fontSize:10,color:seg.c,whiteSpace:'pre' }}>{seg.t}</span>)}
              </div>
            ))}
            {typingLine.length > 0 && (
              <div style={{ height:20,display:'flex',alignItems:'center',paddingLeft:11,paddingRight:9,background:'rgba(255,255,255,.022)',borderLeft:`2px solid ${svc.accent}`,transition:'border-color .4s' }}>
                {typingLine.map((seg,si) => <span key={si} style={{ fontFamily:'Space Mono, monospace',fontSize:10,color:seg.c,whiteSpace:'pre' }}>{seg.t}</span>)}
                <span style={{ display:'inline-block',width:5.5,height:12,background:svc.accent,marginLeft:1,verticalAlign:'middle',animation:'blink .85s step-end infinite',flexShrink:0,transition:'background .4s' }} />
              </div>
            )}
            {Array.from({length:Math.max(7-lineCount,0)}).map((_,i) => <div key={`ph${i}`} style={{ height:20 }} />)}
          </div>
        </div>

        {/* Service progress */}
        <div className="svc-strip" style={{ padding:'7px 10px',borderTop:'1px solid rgba(255,255,255,.04)',display:'flex',gap:5,alignItems:'center',background:'#131726',flexWrap:'wrap' }}>
          {SVCS.map((s,i) => {
            const isActive=i===svcIdx, isDone=completedSvcs.includes(i)
            return (
              <div key={i} style={{ display:'flex',alignItems:'center',gap:4,padding:'2.5px 8px',borderRadius:99,border:`1px solid ${isActive?s.accent:isDone?'rgba(40,200,64,.22)':'rgba(255,255,255,.055)'}`,background:isActive?s.dim:isDone?'rgba(40,200,64,.05)':'transparent',transition:'all .32s ease' }}>
                <span style={{ width:4.5,height:4.5,borderRadius:'50%',display:'block',flexShrink:0,background:isActive?s.accent:isDone?'#28C840':'rgba(122,143,166,.22)',boxShadow:isActive?`0 0 5px ${s.accent}`:'none',animation:isActive?'dotPulse 1.4s ease-in-out infinite':'none',transition:'all .28s' }} />
                <span style={{ fontFamily:'Space Mono, monospace',fontSize:8,color:isActive?s.accent:isDone?'#28C840':'rgba(122,143,166,.3)',letterSpacing:'.04em',transition:'color .28s' }}>{s.num} {s.label}</span>
              </div>
            )
          })}
        </div>

        {/* Build progress */}
        <div style={{ height:3,background:'rgba(255,255,255,.04)' }}>
          {buildProgress > 0 && (
            <div style={{ height:'100%',width:`${buildProgress}%`,background:buildDone?'linear-gradient(90deg,#00D4C8,#28C840)':`linear-gradient(90deg,${svc.accent},#28C840)`,transition:buildProgress===0?'none':'width .12s linear, background .4s',boxShadow:`0 0 10px ${svc.accent}80` }} />
          )}
        </div>

        {/* Terminal */}
        {termOpen && (
          <div style={{ borderTop:'1px solid rgba(255,255,255,.05)',background:'#0f1219' }}>
            <div style={{ padding:'4px 12px',borderBottom:'1px solid rgba(255,255,255,.04)',display:'flex',alignItems:'center',gap:12 }}>
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:8.5,color:svc.accent,letterSpacing:'.08em',textTransform:'uppercase',borderBottom:`1.5px solid ${svc.accent}`,paddingBottom:2.5,transition:'color .4s, border-color .4s' }}>Terminal</span>
              <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:'rgba(122,143,166,.22)',letterSpacing:'.05em',textTransform:'uppercase' }}>1: bash</span>
            </div>
            <div style={{ padding:'7px 14px 11px',fontFamily:'Space Mono, monospace',fontSize:10,lineHeight:1.9,minHeight:62 }}>
              {termLines.map((tl,i) => <div key={i} style={{ color:tl.color,animation:'termFadeIn .2s ease' }}>{tl.text}</div>)}
            </div>
          </div>
        )}

        {/* Status bar */}
        <div style={{ padding:'4px 12px',background:buildDone?svc.accent:'#0d1017',borderTop:'1px solid rgba(255,255,255,.04)',display:'flex',alignItems:'center',justifyContent:'space-between',transition:'background .5s' }}>
          <div style={{ display:'flex',alignItems:'center',gap:7 }}>
            <span style={{ width:6,height:6,borderRadius:'50%',flexShrink:0,display:'block',background:buildDone?'#28C840':buildProgress>0?'#FEBC2E':'rgba(122,143,166,.3)',boxShadow:buildDone?'0 0 6px #28C840':buildProgress>0?'0 0 6px #FEBC2E':'none',transition:'all .4s' }} />
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:8.5,letterSpacing:'.07em',fontWeight:buildDone?700:400,color:buildDone?'#0D1B2A':buildProgress>0?'#FEBC2E':'rgba(122,143,166,.32)',transition:'color .4s' }}>
              {buildDone?`${svc.label.toUpperCase()} DEPLOYED`:buildProgress>0?`BUILDING  ${Math.round(buildProgress)}%`:'READY'}
            </span>
          </div>
          <div style={{ display:'flex',alignItems:'center',gap:7 }}>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:8.5,color:buildDone?'rgba(13,27,42,.5)':'rgba(122,143,166,.18)',letterSpacing:'.04em' }}>{svc.name}</span>
            <span style={{ fontFamily:'Space Mono, monospace',fontSize:7.5,color:buildDone?'rgba(13,27,42,.4)':svc.accent,opacity:buildDone?1:.55,transition:'color .4s' }}>{svc.num}/04</span>
          </div>
        </div>
      </div>

      {/* Floating metric cards (desktop only) */}
      {METRICS.map((m,i) => {
        const pos=[{bottom:-10,left:-24},{top:270,right:-28},{bottom:90,right:-28}][i]
        return (
          <div key={i} className="hero-card-hide" style={{ position:'absolute',...pos,zIndex:3,background:'rgba(13,27,42,.95)',border:`1px solid ${m.bColor}`,borderRadius:10,padding:'11px 15px',backdropFilter:'blur(14px)',boxShadow:`0 18px 56px rgba(0,0,0,.5), 0 0 22px ${m.bColor}`,animation:cardsVisible[i]?`cardPop .5s cubic-bezier(0.34,1.56,0.64,1) forwards, heroFloat ${5+i*1.5}s ease-in-out infinite ${i*.8}s`:'none',opacity:cardsVisible[i]?1:0,transform:cardsVisible[i]?'scale(1)':'scale(0.8)',transition:'opacity .3s, transform .3s',minWidth:104 }}>
            <p style={{ fontFamily:'Space Mono, monospace',fontSize:8.5,color:'rgba(122,143,166,.58)',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:4 }}>{m.label}</p>
            <p style={{ fontFamily:'Syne, sans-serif',fontWeight:800,fontSize:25,color:m.color,lineHeight:1,margin:0 }}>
              {m.value}<span style={{ fontSize:12,fontWeight:400,color:'rgba(122,143,166,.5)' }}>{m.unit}</span>
            </p>
            <div style={{ marginTop:6,height:2.5,background:'rgba(255,255,255,.06)',borderRadius:2 }}>
              <div style={{ height:'100%',width:'100%',background:m.color,borderRadius:2,opacity:.5 }} />
            </div>
          </div>
        )
      })}

      {/* Orbiting nodes */}
      <div style={{ position:'absolute',inset:0,zIndex:1,pointerEvents:'none' }}>
        {[
          {label:'Next.js',  angle:10,  color:'rgba(0,212,200,.72)', delay:'0s'},
          {label:'SwiftUI',  angle:150, color:'rgba(244,98,42,.72)', delay:'.5s'},
          {label:'Claude AI',angle:210, color:'rgba(199,146,234,.7)',delay:'1s'},
          {label:'Figma',    angle:282, color:'rgba(255,203,107,.68)',delay:'1.5s'},
        ].map((n,i) => {
          const rad=(n.angle*Math.PI)/180
          return (
            <div key={i} style={{ position:'absolute',left:`${50+Math.cos(rad)*39}%`,top:`${50+Math.sin(rad)*39}%`,transform:'translate(-50%,-50%)',background:'rgba(13,27,42,.85)',border:`1px solid ${n.color.replace(/[\d.]+\)$/,'0.2)')}`,borderRadius:5,padding:'3px 8px',fontFamily:'Space Mono, monospace',fontSize:8.5,color:n.color,letterSpacing:'.06em',backdropFilter:'blur(10px)',animation:`nodePulse 3.2s ease-in-out infinite ${n.delay}`,whiteSpace:'nowrap' }}>
              {n.label}
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes heroFloat  { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-9px)} }
        @keyframes edgeGlow   { 0%,100%{box-shadow:0 0 0 1px rgba(0,0,0,.3),0 40px 110px rgba(0,0,0,.65),0 0 40px rgba(0,212,200,.04)} 50%{box-shadow:0 0 0 1px rgba(0,0,0,.3),0 40px 110px rgba(0,0,0,.65),0 0 70px rgba(0,212,200,.1)} }
        .editor-glow { animation: heroFloat 7s ease-in-out infinite, edgeGlow 5s ease-in-out infinite !important; }
        @keyframes termFadeIn { from{opacity:0;transform:translateX(-4px)} to{opacity:1;transform:translateX(0)} }
        @keyframes cardPop    { from{opacity:0;transform:scale(.75) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes nodePulse  { 0%,100%{opacity:.35;transform:translate(-50%,-50%) scale(.93)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.07)} }
        @keyframes dotPulse   { 0%,100%{opacity:.6;transform:scale(.9)} 50%{opacity:1;transform:scale(1.3)} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes skelIn     { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes streamReveal { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp     { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .hero-card-hide { display:block; }
        @media (max-width:768px) {
          .hero-card-hide { display:none !important; }
          .preview-panel  { height:170px !important; }
          .editor-titlebar { display:none !important; }
          .svc-strip { gap:4px !important; }
        }
        @media (max-width:480px) {
          .preview-panel { height:160px !important; }
          .code-gutter   { width:30px !important; }
        }
      `}</style>
    </div>
  )
}