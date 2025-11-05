export const styles = {
    page: {
        minHeight: '100vh',
        background: '#0f1115',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#1a1d23',
        padding: '16px 0',
    },
    container: {
        width: 'min(1100px, 100%)',
        margin: '0 auto',
        padding: '0 16px',
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
    },
    cta: {
        display: 'inline-block',
        marginTop: 12,
        color: '#fff',
        textDecoration: 'none',
        background: '#4f46e5',
        padding: '6px 12px',
        borderRadius: 6,
    },
    heroWrap: {
        borderRadius: 10,
        overflow: 'hidden',
        background: '#000',
    },
    heroVideo: {
        width: '100%',
        display: 'block',
    },
    h2: {
        fontSize: 22,
        marginBottom: 10,
    },
    iframeWrap: {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9
        borderRadius: 10,
        overflow: 'hidden',
        background: '#000',
    },
    iframe: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
    },
    fullscreen: {
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        paddingTop: 0,
        borderRadius: 0,
        zIndex: 999,
    },
    button: {
        background: '#4f46e5',
        border: 'none',
        color: '#fff',
        padding: '8px 14px',
        borderRadius: 6,
        cursor: 'pointer',
    },
    footer: {
        marginTop: 'auto',
        padding: '20px 0',
        background: '#111217',
    },
};