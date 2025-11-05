import React from 'react';
import {styles} from './mainPageStyles';


const MainPage = () => {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const handleFullscreenToggle = () => {
        setIsFullscreen((prev) => !prev);
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <div style={styles.container}>
                    <h1 style={styles.title}>GPF104 A2 — Prototype test</h1>
                    <a href="#play" style={styles.cta}>
                        Play
                    </a>
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
                    <p style={{ marginTop: 8, opacity: 0.8 }}>
                        Our presentation of the prototype
                        <code> public/assets/trailer.mp4</code>.
                    </p>
                </section>

                <section id="play" style={{ marginTop: 28 }}>
                    <h2 style={styles.h2}>Playground</h2>
                    <p style={{ marginTop: 0 }}>
                        unity is served from <code>public/game/</code> with entry point <code>index.html</code>.
                    </p>
                    <div style={{ ...styles.iframeWrap, ...(isFullscreen ? styles.fullscreen : null) }}>
                        <iframe
                            src="https://roach-unity.vercel.app/"
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
    );
};

export default MainPage;
