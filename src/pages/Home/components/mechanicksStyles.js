import { keyframes } from '@mui/material/styles';

// ============================================
// KEYFRAME ANIMATIONS
// ============================================

export const animations = {
    float: keyframes`
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
    `,
    pulse: keyframes`
        0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
        50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.6); }
    `,
    scanline: keyframes`
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
    `,
    glitch: keyframes`
        0%, 90%, 100% { transform: translate(0); }
        92% { transform: translate(-2px, 1px); }
        94% { transform: translate(2px, -1px); }
        96% { transform: translate(-1px, 2px); }
        98% { transform: translate(1px, -2px); }
    `,
    crawl: keyframes`
        0% { transform: translateX(-5px) scaleX(1); }
        25% { transform: translateX(0px) scaleX(1); }
        50% { transform: translateX(5px) scaleX(1); }
        75% { transform: translateX(0px) scaleX(1); }
        100% { transform: translateX(-5px) scaleX(1); }
    `,
    blink: keyframes`
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    `,
};

// ============================================
// STYLES OBJECT
// ============================================

export const styles = {
    // Layout
    wrapper: {
        padding: '40px 0 0',
    },
    section: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#ffdd33',
        marginBottom: '40px',
        textShadow: '2px 2px 0 #000, 4px 4px 0 rgba(139, 90, 43, 0.5)',
        letterSpacing: '2px',
        textAlign: 'center',
    },

    // Bestiary Container
    bestiaryContainer: {
        display: 'flex',
        gap: '24px',
        flexDirection: { xs: 'column', md: 'row' },
    },
    creatureList: {
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'flex-start' },
        width: { md: '180px' },
        flexShrink: { md: 0 },
    },

    // Creature Tab
    creatureTab: (active) => ({
        padding: '12px 16px',
        background: active ? 'linear-gradient(90deg, rgba(255, 107, 53, 0.3) 0%, transparent 100%)' : 'transparent',
        borderLeft: active ? '4px solid #ff6b35' : '4px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.2) 0%, transparent 100%)',
        },
    }),
    creatureTabImage: (active) => ({
        width: '40px',
        height: '40px',
        imageRendering: 'pixelated',
        objectFit: 'contain',
        filter: active ? 'none' : 'grayscale(50%)',
        transition: 'filter 0.3s ease',
    }),
    creatureTabName: (active) => ({
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.55rem',
        color: active ? '#ffdd33' : '#666',
        transition: 'color 0.3s ease',
    }),

    // Creature Spotlight
    creatureSpotlight: {
        flex: 1,
        background: 'linear-gradient(135deg, rgba(26, 18, 8, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
        border: '3px solid #4a3520',
        borderRadius: '12px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
    },
    spotlightTopBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff6b35, #ffdd33, #ff6b35)',
    },
    spotlightScanlines: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        pointerEvents: 'none',
    },
    spotlightContent: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '24px',
        position: 'relative',
        zIndex: 2,
        alignItems: { sm: 'flex-start' },
    },

    // Creature Display
    creatureDisplay: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: { sm: '200px' },
        flexShrink: { sm: 0 },
    },
    creatureImageFrame: {
        width: '160px',
        height: '160px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
        border: '3px solid #3d3d3d',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        animation: `${animations.pulse} 3s ease-in-out infinite`,
    },
    creatureImage: {
        width: '120px',
        height: '120px',
        imageRendering: 'pixelated',
        objectFit: 'contain',
        animation: `${animations.crawl} 2s ease-in-out infinite`,
    },
    creatureImageScanline: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'linear-gradient(transparent 0%, rgba(255, 107, 53, 0.1) 50%, transparent 100%)',
        animation: `${animations.scanline} 3s linear infinite`,
        pointerEvents: 'none',
    },
    creatureName: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '1rem',
        color: '#ffdd33',
        textShadow: '2px 2px 0 #000',
        animation: `${animations.glitch} 5s ease-in-out infinite`,
    },

    // Threat Level
    threatLevel: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    threatLabel: {
        fontFamily: '"VT323", monospace',
        fontSize: '1rem',
        color: '#888',
    },
    threatDots: {
        display: 'flex',
        gap: '4px',
    },
    threatDot: (active, color) => ({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: active ? color : '#2a2a2a',
        border: `2px solid ${active ? color : '#3d3d3d'}`,
        boxShadow: active ? `0 0 8px ${color}` : 'none',
        transition: 'all 0.3s ease',
    }),

    // Creature Info
    creatureInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    creatureDescription: {
        fontFamily: '"VT323", monospace',
        fontSize: '1.3rem',
        color: '#c4b998',
        lineHeight: 1.6,
    },
    blinkingCursor: {
        animation: `${animations.blink} 1s infinite`,
        color: '#ffdd33',
    },

    // Stat Bars
    statBar: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    statRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    statLabel: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.5rem',
        color: '#888',
        width: '80px',
    },
    statBarBg: {
        flex: 1,
        height: '12px',
        background: '#1a1a1a',
        borderRadius: '2px',
        overflow: 'hidden',
        border: '1px solid #3d3d3d',
    },
    statFill: (value, color) => ({
        height: '100%',
        width: `${value}%`,
        background: `linear-gradient(90deg, ${color} 0%, ${color}88 100%)`,
        boxShadow: `0 0 10px ${color}66`,
        transition: 'width 0.5s ease-out',
    }),

    // Abilities
    abilitiesLabel: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.5rem',
        color: '#888',
        marginBottom: '8px',
    },
    abilityTag: {
        display: 'inline-block',
        padding: '6px 12px',
        background: 'rgba(255, 221, 51, 0.1)',
        border: '1px solid #ffdd33',
        borderRadius: '4px',
        fontFamily: '"VT323", monospace',
        fontSize: '1rem',
        color: '#ffdd33',
        marginRight: '8px',
        marginBottom: '8px',
    },

    // Features Grid
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fit, minmax(360px, 1fr))',
        },
        gap: '24px',
    },

    // Feature Card
    featureCard: (accentColor, isHovered) => ({
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(13, 13, 13, 0.95) 100%)',
        border: `2px solid ${isHovered ? accentColor : '#3d3d3d'}`,
        borderRadius: '12px',
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        cursor: 'default',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        boxShadow: isHovered ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${accentColor}22` : 'none',
    }),
    featureCardAccent: (color) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: color,
    }),
    featureGlow: (color, isHovered) => ({
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
    }),
    featureIcon: (color, isHovered) => ({
        width: '56px',
        height: '56px',
        background: `linear-gradient(135deg, ${color}22 0%, ${color}11 100%)`,
        border: `2px solid ${color}`,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        fontSize: '1.8rem',
        transition: 'transform 0.4s ease',
        boxShadow: `0 4px 20px ${color}33`,
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'none',
    }),
    featureTitle: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.7rem',
        color: '#ffdd33',
        marginBottom: '12px',
        lineHeight: 1.5,
    },
    featureDescription: {
        fontFamily: '"VT323", monospace',
        fontSize: '1.2rem',
        color: '#a0a0a0',
        lineHeight: 1.5,
    },
};

export default styles;
