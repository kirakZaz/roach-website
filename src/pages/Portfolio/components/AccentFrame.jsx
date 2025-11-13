import { Box, Typography } from '@mui/material';

import { styles } from '@/pages/Portfolio/styles.js';

const AccentFrame = ({ src, alt, isActive, onClick, accent = '#f06b8d', degree }) => {
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

            <Box sx={styles.activeText({ isActive })}>
                <Typography variant="body1">{alt}</Typography>

                <Typography variant="body2">{degree}</Typography>
            </Box>
        </Box>
    );
};

export default AccentFrame;
