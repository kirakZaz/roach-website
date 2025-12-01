import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container, IconButton, Typography } from '@mui/material';

import { routes } from '@/shared/types';

import roachBanner from '@/assets/aboutPage/roach-banner.png';

// Components
import Mechanics from './components/Mechanics';
import Overview from './components/Overview';
import WhereToPlay from './components/WhereToPlay';
import { conceptArtPlaceholders, creatures, features, getPipePattern, pipes, screenshotPlaceholders } from './data';
import { styles } from './homeStyles';

// Assets

function HomePage() {
    const navigate = useNavigate();
    const carouselRef = useRef(null);

    const handleNavigate = (key) => {
        navigate(key);
    };

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += direction * 300;
        }
    };

    const renderPipeDivider = (variant) => {
        const pattern = getPipePattern(variant);
        return (
            <Box sx={styles.pipeDivider}>
                {pattern.map((pipeIndex, i) => (
                    <Box key={i} component="img" src={pipes[pipeIndex]} alt="" sx={styles.pipeImage} />
                ))}
            </Box>
        );
    };

    return (
        <Box sx={styles.pageWrapper}>
            <Box sx={styles.contentWrapper}>
                {/* Banner */}
                <Box sx={styles.bannerSection}>
                    <Box component="img" src={roachBanner} alt="ROACH" sx={styles.bannerImage} />
                </Box>

                <Container maxWidth="xl">
                    {/* Tagline */}
                    <Typography sx={styles.tagLine}>GET READY TO ROACH.</Typography>

                    {/* Game Overview */}
                    <Overview handleNavigate={handleNavigate} />

                    {/* Mechanics */}
                    <Mechanics creatures={creatures} features={features} renderPipeDivider={renderPipeDivider} />

                    {renderPipeDivider(1)}

                    {/* Closing Statement */}
                    <Typography sx={styles.closingStatement}>
                        You and your kind are the inheritors of what is left of the Earth.
                        <br />
                        You. Are. Roach.
                    </Typography>

                    {/* Screenshots Carousel */}
                    <Box sx={styles.section}>
                        <Typography sx={styles.sectionTitle}>GAMEPLAY SCREENSHOTS</Typography>
                        <Box sx={styles.carouselContainer}>
                            <IconButton sx={styles.carouselButton} onClick={() => scrollCarousel(-1)}>
                                <ChevronLeftIcon />
                            </IconButton>
                            <Box sx={styles.carouselTrack} ref={carouselRef}>
                                {screenshotPlaceholders.map((placeholder, index) => (
                                    <Box key={index} sx={styles.carouselItem}>
                                        {/*<Box sx={styles.carouselItemBar} />*/}
                                        <img
                                            src={placeholder}
                                            alt={`screenshot-${index}`}
                                            style={styles.carouselImage}
                                        />
                                    </Box>
                                ))}
                            </Box>
                            <IconButton sx={styles.carouselButton} onClick={() => scrollCarousel(1)}>
                                <ChevronRightIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {renderPipeDivider(0)}

                    {/* Concept Art */}
                    <Box sx={styles.section}>
                        <Typography sx={styles.sectionTitle}>CONCEPT ART / PROGRESS</Typography>

                        <Box sx={styles.artGrid}>
                            {conceptArtPlaceholders.map((placeholder, index) => (
                                <Box key={index} sx={styles.artItem}>
                                    <img src={placeholder} alt={`concept-art-${index}`} style={styles.artImage} />
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {renderPipeDivider(2)}

                    {/* Meet the Team */}
                    <Box sx={styles.section}>
                        <Typography sx={styles.sectionTitle}>MEET THE TEAM</Typography>
                        <Box sx={styles.infoCard}>
                            <Typography sx={{ ...styles.gameDescription, textAlign: 'center', marginBottom: '32px' }}>
                                The passionate developers behind Roach
                            </Typography>

                            <Box sx={{ ...styles.buttonGroup, justifyContent: 'center' }}>
                                <Box sx={styles.actionButton} onClick={() => handleNavigate(routes.portfolio)}>
                                    VIEW FULL TEAM PORTFOLIO
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Contact Us */}
                    <Box sx={styles.twoColumnLayout}>
                        <Box sx={{ ...styles.columnImage, flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography sx={styles.sectionTitle}>CONTACT US</Typography>
                            <Box sx={{ maxWidth: '600px' }}>
                                <Box sx={styles.infoCard}>
                                    <Typography sx={styles.gameDescription}>
                                        Please feel free to provide feedback on our game via the link in the Game
                                        section or reach out to us via our social media or company email below.
                                    </Typography>
                                    <Box sx={styles.contactSection}>
                                        <Box sx={styles.contactItem}>
                                            <Typography sx={styles.contactLabel}>Instagram</Typography>
                                            <Box
                                                component="a"
                                                href="https://www.instagram.com/echoforge.roach/ "
                                                sx={styles.contactValue}
                                            >
                                                @echoforge.roach
                                            </Box>
                                        </Box>
                                        <Box sx={styles.contactItem}>
                                            <Typography sx={styles.contactLabel}>Email</Typography>
                                            <Box
                                                component="a"
                                                href="mailto:contact@roachgame.com"
                                                sx={styles.contactValue}
                                            >
                                                contact@roachgame.com
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={styles.columnContent}>
                            <WhereToPlay handleNavigate={handleNavigate} />
                        </Box>
                    </Box>

                    {renderPipeDivider(0)}

                    {/* Footer */}
                    <Box sx={styles.footer}>
                        <Typography sx={styles.footerText}>© 2025 Roach Game. All rights reserved.</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default HomePage;
