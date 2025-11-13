import React from 'react';

import { Box, Container, useTheme } from '@mui/material';

import Head from '@/pages/Portfolio/components/Head.jsx';
import Info from '@/pages/Portfolio/components/Info.jsx';

import { styles } from './styles';

/**
 * Accent-framed image (offset border like the ref).
 */
const AccentFrame = ({ src, alt, isActive, onClick, accent = '#f06b8d' }) => {
    return (
        <Box
            role="button"
            tabIndex={0}
            aria-label={`Select ${alt}`}
            onClick={onClick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
            sx={styles.frame({ isActive, accent })}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                loading="lazy"
                sx={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
        </Box>
    );
};

const TEAM = [
    { id: 'jamison', name: 'Jamison Howell', role: 'Pixel Art & Level Design', img: '/assets/team/demo-m.png' },
    { id: 'alexander', name: 'Alexander Ramic', role: 'Environment & Sound', img: '/assets/team/demo-m.png' },
    { id: 'erica', name: 'Erica Neale', role: 'Character Art Lead', img: '/assets/team/demo-w.png' },
    { id: 'lewis', name: 'Lewis Schneider', role: 'Background & Map Design', img: '/assets/team/demo-m.png' },
    { id: 'kira', name: 'Kira Zakirov', role: 'Lead Programmer', img: '/assets/team/kira.jpg' },
];

const accent = {
    main: '#f06b8d',
    darkBg: '#23222b',
    soft: '#ffd8e2',
};

const PortfolioPage = () => {
    const theme = useTheme();
    const [activeId, setActiveId] = React.useState('kira');

    // // Keep the active member first so it gets the larger grid area
    const members = React.useMemo(() => {
        const active = TEAM.find((m) => m.id === activeId);
        const others = TEAM.filter((m) => m.id !== activeId);
        return [active, ...others];
    }, [activeId]);

    const activeMember = members[0];
    console.log('activeMember', activeMember, activeId);

    return (
        <Box
            sx={{
                minHeight: '100dvh',
                bgcolor: accent.darkBg,
                color: '#fff',
                py: 2,
            }}
        >
            <Container maxWidth="lg">
                <Head accent={accent} />

                <Box sx={styles.membersRow}>
                    {TEAM.map((m) => (
                        <Box sx={styles.member} key={m.id}>
                            <AccentFrame
                                src={m.img}
                                alt={m.name}
                                isActive={m.id === activeId}
                                onClick={() => setActiveId(m.id)}
                                accent={accent.main}
                            />
                        </Box>
                    ))}
                </Box>

                <Info accent={accent} activeMember={activeMember} />
            </Container>
        </Box>
    );
};

export default PortfolioPage;
