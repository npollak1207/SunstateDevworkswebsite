import SunGlyph from '@/components/SunGlyph'

// The full lockup: sun mark + two-voice wordmark. "Sunstate" in the display
// grotesk, "DevWorks" in the italic serif, the same pairing the headlines use.
export default function Logo({ size = 19, tagline = false }: { size?: number; tagline?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.55) }}>
      <span className="wm-glyph" style={{ display: 'flex' }}><SunGlyph size={Math.round(size * 0.92)} /></span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.24em', whiteSpace: 'nowrap', color: 'var(--ink)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, letterSpacing: '-0.025em' }}>Sunstate</span>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: Math.round(size * 1.17 * 10) / 10, letterSpacing: '-0.005em' }}>DevWorks</span>
        </span>
        {tagline && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 7 }}>Design &amp; Engineering Studio</span>
        )}
      </span>
    </span>
  )
}
