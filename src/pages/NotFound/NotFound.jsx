// src/pages/NotFound/NotFound.jsx
const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you&#39;re looking for doesn&#39;t exist.</p>
            <a
                href="/"
                style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                }}
            >
                Go Home
            </a>
        </div>
    );
};

export default NotFound;
