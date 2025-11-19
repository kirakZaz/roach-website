import React from 'react';

import { Box, Container } from '@mui/material';

import AccentFrame from '@/pages/Portfolio/components/AccentFrame.jsx';
import Head from '@/pages/Portfolio/components/Head.jsx';
import Info from '@/pages/Portfolio/components/Info.jsx';
import { TEAM } from '@/pages/Portfolio/data.js';

import { accent, styles } from './styles';

const PortfolioPage = () => {
    const [activeId, setActiveId] = React.useState('jamison');

    // // Keep the active member first so it gets the larger grid area
    const members = React.useMemo(() => {
        const active = TEAM.find((m) => m.id === activeId);
        const others = TEAM.filter((m) => m.id !== activeId);
        return [active, ...others];
    }, [activeId]);

    const activeMember = members[0];

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
                                degree={m.degree}
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
