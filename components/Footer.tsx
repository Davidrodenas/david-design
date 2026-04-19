export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>
        David Ródenas<span style={{ color: 'var(--cyan)', opacity: 0.6 }}>.</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 11,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '-0.2px',
        }}
      >
        © 2026 · Automatización con IA
      </div>
    </footer>
  );
}
