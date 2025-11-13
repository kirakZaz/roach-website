import React from 'react';

import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    IconButton,
    Stack,
    Tab,
    Tabs,
    Typography,
    useTheme,
} from '@mui/material';

const VideoBlock = ({ title, src, poster }) => {
    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleTogglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleOnEnd = () => setIsPlaying(false);

    return (
        <Card variant="outlined" sx={{ overflow: 'hidden' }}>
            <CardContent sx={{ pb: 0 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <IconButton aria-label={isPlaying ? 'Pause video' : 'Play video'} onClick={handleTogglePlay}>
                        {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                    </IconButton>
                </Stack>
            </CardContent>
            <CardMedia sx={{ aspectRatio: '16 / 9', display: 'grid', placeItems: 'center' }}>
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    controls
                    playsInline
                    onEnded={handleOnEnd}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </CardMedia>
        </Card>
    );
};

const HomePage = () => {
    const theme = useTheme();
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleChange = (_event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box
            sx={{
                minHeight: '100dvh',
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <Box textAlign="center">
                        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
                            Welcome to <span style={{ whiteSpace: 'nowrap' }}>GPF104 (N05765)</span>
                        </Typography>

                        <Typography variant="h5" sx={{ opacity: 0.9 }}>
                            Game Production Foundation — our game <strong>“Roach”</strong> by team{' '}
                            <strong>ECHOFORGE</strong>
                        </Typography>
                    </Box>

                    <Divider />

                    {/* Tabs */}
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={tabIndex}
                            onChange={handleChange}
                            centered
                            textColor="primary"
                            indicatorColor="primary"
                            sx={{
                                mb: 3,
                                '& .MuiTab-root': { fontWeight: 600, textTransform: 'none' },
                            }}
                        >
                            <Tab label="Assessment 1 — Meet Roach Prototype" />
                            <Tab label="Assessment 2 — Level Gameplay" />
                        </Tabs>

                        {tabIndex === 0 && (
                            <Box>
                                <VideoBlock
                                    title="Roach — Trailer"
                                    src="/assets/trailer.mp4"
                                    poster="/assets/poster-trailer.png"
                                />
                            </Box>
                        )}

                        {tabIndex === 1 && (
                            <Box>
                                <VideoBlock
                                    title="Roach — Gameplay"
                                    src="/assets/trailer.mp4"
                                    poster="/assets/poster-trailer.png"
                                />
                            </Box>
                        )}
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default HomePage;
