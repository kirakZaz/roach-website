import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

const GamePage = () => {
    const theme = useTheme();
    const [isExpandedPanel, setIsExpandedPanel] = React.useState(false);

    const handleChange = (_event) => {
        setIsExpandedPanel(!isExpandedPanel);
    };

    return (
        <Box
            sx={{
                minHeight: '100dvh',
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 2,
            }}
        >
            <Container maxWidth="100%">
                <Stack spacing={4} alignItems="center">
                    {/* Header */}
                    <Box textAlign="center">
                        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
                            Roach — Play the Game
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: 0.9 }}>
                            Created by team <strong>ECHOFORGE</strong> for GPF104 (N05765) — Game Production Foundation
                        </Typography>
                    </Box>

                    <Accordion expanded={isExpandedPanel} onChange={handleChange}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="game-summary"
                            id="game-summary"
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                About Roach
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography variant="body1">
                                Roach is a survival-action platformer where players control an anthropomorphic cockroach
                                fighting mutated creatures, gathering scarce resources, and surviving toxic hazards with
                                help from a loyal pet named Wichetty.
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Developed in Unity by team EchoForge, the game emphasizes wall-climbing mobility,
                                resource management, and post-apocalyptic exploration through irradiated cave
                                environments. This prototype represents the team’s first major milestone in delivering
                                the game’s core mechanics and world design.{' '}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Playable Game Embed */}
                    <Card
                        variant="outlined"
                        sx={{
                            width: '100%',
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                        }}
                    >
                        <CardMedia
                            component="iframe"
                            src="https://roach-unity.vercel.app/"
                            title="Roach Game"
                            allow="fullscreen"
                            loading="lazy"
                            sx={{
                                width: '100%',
                                height: { xs: 500, md: 720 },
                                border: 'none',
                            }}
                        />

                        <CardContent
                            sx={{
                                display: 'flex',
                                gap: 6,
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                background: theme.palette.background.paper,
                            }}
                        >
                            <Box>
                                <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                                    Play directly above, or open the full game window below.
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    endIcon={<OpenInNewIcon />}
                                    href="https://roach-unity.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Full Game
                                </Button>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                                    Fill EchoForge Roach Playtest Survey
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    endIcon={<SentimentVerySatisfiedIcon />}
                                    href="https://forms.gle/V1j6VPHRPUsvB7wA6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Survey
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
};

export default GamePage;
