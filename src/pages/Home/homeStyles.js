import { keyframes } from '@mui/material/styles';

// ============================================
// KEYFRAME ANIMATIONS
// ============================================

export const animations = {
    flicker: keyframes`
        0%, 100% { opacity: 1; }
        92% { opacity: 1; }
        93% { opacity: 0.8; }
        94% { opacity: 1; }
        96% { opacity: 0.9; }
        97% { opacity: 1; }
    `,
    pulse: keyframes`
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    `,
    pulseShadow: keyframes`
        0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
        50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.6); }
    `,
    crawl: keyframes`
        0% { transform: translateX(-8px); }
        50% { transform: translateX(8px); }
        100% { transform: translateX(-8px); }
    `,
    crawlCreature: keyframes`
        0% { transform: translateX(-5px) scaleX(1); }
        25% { transform: translateX(0px) scaleX(1); }
        50% { transform: translateX(5px) scaleX(1); }
        75% { transform: translateX(0px) scaleX(1); }
        100% { transform: translateX(-5px) scaleX(1); }
    `,
    fadeInUp: keyframes`
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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
    blink: keyframes`
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    `,
};

// ============================================
// STYLES OBJECT
// ============================================

export const styles = {
    // ==========================================
    // PAGE LAYOUT
    // ==========================================
    pageWrapper: {
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1208 50%, #0d0d0d 100%)',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                radial-gradient(ellipse at 20% 30%, rgba(139, 90, 43, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, rgba(85, 107, 47, 0.06) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
            zIndex: 0,
        },
        '&::after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            opacity: 0.03,
            pointerEvents: 'none',
            zIndex: 1,
        },
    },
    contentWrapper: {
        position: 'relative',
        zIndex: 2,
    },

    // ==========================================
    // BANNER
    // ==========================================
    bannerSection: {
        padding: '40px 0 12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: `${animations.flicker} 8s infinite`,
    },
    bannerImage: {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '160px',
        imageRendering: 'pixelated',
        filter: 'drop-shadow(0 0 20px rgba(255, 221, 51, 0.3))',
    },

    // ==========================================
    // SECTIONS & TYPOGRAPHY
    // ==========================================
    section: {
        padding: '20px 0',
        animation: `${animations.fadeInUp} 0.8s ease-out`,
    },
    sectionTitle: {
        fontFamily: '"Press Start 2P", "VT323", monospace',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#ffdd33',
        margin: '20px 0',
        textShadow: '2px 2px 0 #000, 4px 4px 0 rgba(139, 90, 43, 0.5)',
        letterSpacing: '2px',
    },
    sectionTitleCentered: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#ffdd33',
        marginBottom: '40px',
        textShadow: '2px 2px 0 #000, 4px 4px 0 rgba(139, 90, 43, 0.5)',
        letterSpacing: '2px',
        textAlign: 'center',
    },
    gameDescription: {
        fontFamily: '"VT323", "Courier New", monospace',
        fontSize: 'clamp(1.0rem, 2.3vw, 1.2rem)',
        color: '#c4b998',
        lineHeight: 1.8,
        marginBottom: '20px',
    },
    gameDescriptionHighlight: {
        fontFamily: '"VT323", "Courier New", monospace',
        fontSize: 'clamp(1.0rem, 2.3vw, 1.2rem)',
        color: '#ff6b35',
        lineHeight: 1.8,
        marginBottom: '20px',
        fontStyle: 'italic',
    },
    tagLine: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
        color: '#ff6b35',
        textAlign: 'center',
        textShadow: '2px 2px 0 #000',
        letterSpacing: '3px',
    },
    closingStatement: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
        color: '#ffdd33',
        textAlign: 'center',
        textShadow: '2px 2px 0 #000, 0 0 20px rgba(255, 221, 51, 0.3)',
        lineHeight: 2,
        animation: `${animations.pulse} 2s ease-in-out infinite`,
    },

    // ==========================================
    // LAYOUTS
    // ==========================================
    twoColumnLayout: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '1%',
        alignItems: { md: 'center' },
    },
    columnContent: {
        flex: '1 1 60%',
    },
    columnImage: {
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
        },
    },

    // ==========================================
    // CARDS & CONTAINERS
    // ==========================================
    infoCard: {
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(13, 13, 13, 0.95) 100%)',
        border: '2px solid #3d3d3d',
        borderRadius: '8px',
        padding: '14px',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: 20,
            right: 20,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #ffdd33, transparent)',
        },
    },
    imagePlaceholder: {
        background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)',
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid #2a4a6a',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 -4px 12px rgba(0, 0, 0, 0.3)',
        fontFamily: '"VT323", monospace',
        color: '#4a7a9a',
        textAlign: 'center',
        padding: '16px',
    },

    // ==========================================
    // PIPE DIVIDER
    // ==========================================
    pipeDivider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
        overflow: 'hidden',
        gap: 0,
    },
    pipeImage: {
        height: '48px',
        imageRendering: 'pixelated',
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
    },

    // ==========================================
    // CAROUSEL
    // ==========================================
    carouselContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    carouselTrack: {
        display: 'flex',
        gap: '20px',
        overflow: 'hidden',
        scrollBehavior: 'smooth',
        padding: '10px 0',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    carouselItem: {
        minWidth: '300px',
        width: '360px',
        height: '250px',
        background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
        border: '3px solid #3d3d3d',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontFamily: '"VT323", monospace',
        fontSize: '1.2rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        '&:hover': {
            borderColor: '#ffdd33',
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(255, 221, 51, 0.2)',
        },
    },
    carouselItemBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff6b35, #ffdd33)',
    },
    carouselButton: {
        background: 'rgba(255, 221, 51, 0.1)',
        border: '2px solid #ffdd33',
        color: '#ffdd33',
        '&:hover': {
            background: 'rgba(255, 221, 51, 0.2)',
        },
        '&:disabled': {
            opacity: 0.3,
        },
    },

    // ==========================================
    // INFO LIST
    // ==========================================
    infoList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '20px',
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    infoLabel: {
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.65rem',
        color: '#888',
        minWidth: '120px',
    },
    infoValue: {
        fontFamily: '"VT323", monospace',
        fontSize: '1.3rem',
        color: '#ffdd33',
    },

    // ==========================================
    // ART GRID
    // ==========================================
    artGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
    },
    artItem: {
        // background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)',
        border: '3px solid #2a4a6a',
        borderRadius: '8px',
        aspectRatio: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        color: '#4a7a9a',
        fontFamily: '"VT323", monospace',
        '&:hover': {
            borderColor: '#ffdd33',
            transform: 'scale(1.02)',
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            imageRendering: 'pixelated',
        },
    },

    // ==========================================
    // CONTACT SECTION
    // ==========================================
    contactSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '24px',
    },
    contactItem: {
        marginBottom: '8px',
    },
    contactLabel: {
        fontFamily: '"VT323", monospace',
        fontSize: '1.2rem',
        color: '#888',
        marginBottom: '4px',
    },
    contactValue: {
        fontFamily: '"VT323", monospace',
        fontSize: '1.3rem',
        color: '#c4b998',
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: '#ffdd33',
        },
    },

    // ==========================================
    // BUTTONS
    // ==========================================
    actionButton: {
        display: 'inline-block',
        padding: '16px 32px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
        color: '#ffdd33',
        background: 'linear-gradient(135deg, rgba(255, 221, 51, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
        border: '3px solid #ffdd33',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        textShadow: '1px 1px 0 #000',
        '&:hover': {
            background: 'linear-gradient(135deg, rgba(255, 221, 51, 0.2) 0%, rgba(255, 107, 53, 0.2) 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(255, 221, 51, 0.3)',
        },
        '&:active': {
            transform: 'translateY(0)',
        },
    },
    secondaryButton: {
        display: 'inline-block',
        padding: '12px 24px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(0.5rem, 1.2vw, 0.65rem)',
        color: '#c4b998',
        background: 'transparent',
        border: '2px solid #3d3d3d',
        borderRadius: '4px',
        cursor: 'pointer',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#ff6b35',
            color: '#ff6b35',
        },
    },
    buttonGroup: {
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        marginTop: '24px',
        justifyContent: 'end',
    },

    // ==========================================
    // FOOTER
    // ==========================================
    footer: {
        textAlign: 'center',
        padding: '40px 0',
        borderTop: '1px solid #2a2a2a',
    },
    footerText: {
        fontFamily: '"VT323", monospace',
        fontSize: '1rem',
        color: '#555',
    },

    // ==========================================
    // MECHANICS - BESTIARY
    // ==========================================
    mechanicsWrapper: {
        padding: '40px 0 0',
    },
    mechanicsSection: {
        marginBottom: '20px',
    },
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
        minHeight: '322px',
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
        animation: `${animations.pulseShadow} 3s ease-in-out infinite`,
    },
    creatureImage: {
        width: '120px',
        height: '120px',
        imageRendering: 'pixelated',
        objectFit: 'contain',
        animation: `${animations.crawlCreature} 2s ease-in-out infinite`,
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
        border: '1px solid #7c5039',
        borderRadius: '4px',
        fontFamily: '"VT323", monospace',
        fontSize: '1rem',
        color: '#f2a65a',
        marginRight: '8px',
        marginBottom: '8px',
    },

    // ==========================================
    // MECHANICS - FEATURES GRID
    // ==========================================
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fit, minmax(360px, 1fr))',
        },
        gap: '24px',
    },
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
