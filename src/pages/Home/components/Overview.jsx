import { Box, Typography } from '@mui/material';

// Update this import path as needed
import mainImage from '@/assets/aboutPage/adknbl.jpg';

import { styles } from '../homeStyles.js';

const Overview = ({ handleNavigate }) => {
    return (
        <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle} variant="h2">
                GAME OVERVIEW
            </Typography>

            <Box sx={styles.twoColumnLayout}>
                <Box sx={styles.columnContent}>
                    <Box sx={styles.infoCard}>
                        <Typography sx={styles.gameDescription}>
                            In the vast underground caverns of a world scorched by an apocalyptic sun, the remnants of
                            life on Earth struggle to survive. Mutated by the harsh conditions of a dying world you play
                            as a tenacious bug named Roach who is tasked with gathering resources for their nest.
                        </Typography>
                        <Typography sx={styles.gameDescription}>
                            Roach is a platforming action game inspired by its now ancient yet legendary predecessors,
                            titles such as Mario and Metroid. Navigate the underground caverns, avoid treacherous
                            hazards and fight enemies while your trusty Grubdog Witchetty gathers the precious
                            resources.
                        </Typography>
                        <Typography sx={styles.gameDescriptionHighlight}>
                            Survive for the sake of yourself, your dog, your nest and the faint hope of another
                            tomorrow.
                        </Typography>
                        <Box sx={styles.buttonGroup}>
                            <Box sx={styles.actionButton} onClick={() => handleNavigate('game')}>
                                PLAY NOW
                            </Box>
                            <Box sx={styles.actionButton} onClick={() => handleNavigate('home')}>
                                VIEW PRESENTATIONS
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={styles.columnImage}>
                    <img src={mainImage} alt="main roach" />
                </Box>
            </Box>
        </Box>
    );
};

export default Overview;
