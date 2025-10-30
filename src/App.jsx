import React from 'react'

export default function App() {
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  const handleFullscreenToggle = React.useCallback(() => {
    setIsFullscreen((prev) => !prev)
  }, [])

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>GPF104 A2 — Prototype test</h1>
          {/*<p style={styles.subtitle}></p>*/}
          <a href="#play" style={styles.cta}>Играть</a>
        </div>
      </header>

      <main style={styles.container}>
        <section style={{ marginTop: 20 }}>
          <div style={styles.heroWrap}>
            <video
              src="/assets/trailer.mp4"
              style={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/assets/poster.jpg"
            />
          </div>
          <p style={{marginTop: 8, opacity: 0.8}}>Our presentation of the prototype<code> public/assets/trailer.mp4</code>.</p>
        </section>

        <section id="play" style={{ marginTop: 28 }}>
          <h2 style={styles.h2}>Playground</h2>
          <p style={{marginTop: 0}}>unity should be here<code>public/game/</code> with enter point <code> index.html</code>.</p>
          <div style={{ ...styles.iframeWrap, ...(isFullscreen ? styles.fullscreen : null) }}>
            <iframe
                src="/game/index.html"
                title="Unity WebGL Game"
                loading="lazy"
                allow="fullscreen"
                style={styles.iframe}
            />
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <button style={styles.button} onClick={handleFullscreenToggle}>
              {isFullscreen ? 'Exit from fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.container}>© 2025 Kira Zakirov</div>
      </footer>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  container: { maxWidth: 1200, margin: '0 auto', padding: 16 },
  header: { background: '#111', color: '#fff' },
  footer: { borderTop: '1px solid #eee', marginTop: 40 },
  title: { margin: 0, fontSize: 32, fontWeight: 700 },
  subtitle: { marginTop: 8, opacity: 0.9 },
  cta: { display: 'inline-block', marginTop: 12, padding: '10px 16px', background: '#fff', color: '#111', borderRadius: 12, textDecoration: 'none' },
  h2: { margin: '12px 0 8px', fontSize: 24 },
  heroWrap: { position: 'relative', width: '100%', borderRadius: 16, overflow: 'hidden', background: '#000' },
  heroVideo: { display: 'block', width: '100%', height: 'auto' },
  iframeWrap: { position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 16, overflow: 'hidden', background: '#000' },
  iframe: { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 },
  fullscreen: { position: 'fixed', inset: 0, zIndex: 50, borderRadius: 0 },
  button: { padding: '10px 14px', borderRadius: 10, border: '1px solid #ccc', background: '#fafafa', cursor: 'pointer' },
}
