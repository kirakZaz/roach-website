import { Box, Typography } from '@mui/material';

import { styles } from '../homeStyles.js';

const WhereToPlay = ({ handleNavigate }) => {
    return (
        <Box sx={styles.section}>
            <Typography sx={styles.sectionTitle}>WHERE TO PLAY?</Typography>

            <Box sx={styles.infoCard}>
                <Typography sx={styles.gameDescription}>
                    Great news, Roach is free and available to play now by selecting the 'Game' tab at the top right of
                    this webpage.
                </Typography>

                <Box sx={styles.infoList}>
                    <Box sx={styles.infoRow}>
                        <Typography component="span" sx={styles.infoLabel}>
                            RELEASE DATE
                        </Typography>
                        <Typography component="span" sx={styles.infoValue}>
                            November 23rd, 2025
                        </Typography>
                    </Box>
                    <Box sx={styles.infoRow}>
                        <Typography component="span" sx={styles.infoLabel}>
                            PLATFORM
                        </Typography>
                        <Typography component="span" sx={styles.infoValue}>
                            PC (Browser)
                        </Typography>
                    </Box>
                    <Box sx={styles.infoRow}>
                        <Typography component="span" sx={styles.infoLabel}>
                            PRICE
                        </Typography>
                        <Typography component="span" sx={styles.infoValue}>
                            FREE
                        </Typography>
                    </Box>
                </Box>

                <Box sx={styles.buttonGroup}>
                    <Box sx={styles.actionButton} onClick={() => handleNavigate('game')}>
                        PLAY THE GAME
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WhereToPlay;
