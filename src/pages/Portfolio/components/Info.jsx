import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

const Info = ({ accent, activeMember }) => {
    return (
        <Grid item xs={12} md={5}>
            <Box
                sx={{
                    height: '100%',
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    bgcolor: '#2b2a33',
                    border: `1px solid ${accent.main}`,
                    boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
                }}
            >
                <Typography variant="overline" sx={{ color: accent.main, letterSpacing: 1.5 }}>
                    Featured Member
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
                    {activeMember.name}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, mt: 0.5 }}>
                    {activeMember.role}
                </Typography>

                <Box mt={2} sx={{ opacity: 0.85 }}>
                    <Typography variant="body1">
                        {typeof activeMember.description === 'string'
                            ? activeMember.description
                            : activeMember.description.map((desc) => {
                                  return (
                                      <span key={activeMember.id + desc}>
                                          {desc}
                                          <br />
                                      </span>
                                  );
                              })}
                    </Typography>
                </Box>

                <Stack direction="row" spacing={1} mt={3} flexWrap="wrap" useFlexGap>
                    <Chip
                        size="small"
                        label="EchoForge"
                        sx={{ color: accent.main, borderColor: accent.main }}
                        variant="outlined"
                    />
                    <Chip
                        size="small"
                        label="GPF104 (N05765)"
                        sx={{ color: accent.main, borderColor: accent.main }}
                        variant="outlined"
                    />
                </Stack>
            </Box>
        </Grid>
    );
};

export default Info;
