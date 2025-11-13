import { Chip, Stack, Typography } from '@mui/material';

const Head = ({ accent }) => {
    return (
        <Stack spacing={1} alignItems="center" textAlign="center" mb={5}>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: accent.main }}>
                EchoForge — Team
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                Meet the creators of <span style={{ color: accent.main }}>Roach</span>
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
                <Chip label="Unity" variant="outlined" sx={{ borderColor: accent.main, color: accent.main }} />

                <Chip label="Pixel Art" variant="outlined" sx={{ borderColor: accent.main, color: accent.main }} />

                <Chip label="Level Design" variant="outlined" sx={{ borderColor: accent.main, color: accent.main }} />
            </Stack>
        </Stack>
    );
};

export default Head;
