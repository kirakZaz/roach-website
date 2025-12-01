import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from '../homeStyles.js';

import { getCreatureDetails, getFeatureEnhancement, getThreatColor } from './data';

// ============================================
// SUB-COMPONENTS
// ============================================

const CreatureTab = ({ creature, active, onClick }) => (
    <Box sx={styles.creatureTab(active)} onClick={onClick}>
        <Box component="img" src={creature.image} alt={creature.name} sx={styles.creatureTabImage(active)} />
        <Typography sx={styles.creatureTabName(active)}>{creature.name}</Typography>
    </Box>
);

const ThreatDots = ({ threat }) => {
    const color = getThreatColor(threat);
    return (
        <Box sx={styles.threatDots}>
            {[1, 2, 3, 4, 5].map((level) => (
                <Box key={level} sx={styles.threatDot(level <= threat, color)} />
            ))}
        </Box>
    );
};

const StatRow = ({ label, value, color }) => (
    <Box sx={styles.statRow}>
        <Typography sx={styles.statLabel}>{label}</Typography>
        <Box sx={styles.statBarBg}>
            <Box sx={styles.statFill(value, color)} />
        </Box>
    </Box>
);

const AbilityTag = ({ ability }) => (
    <Box component="span" sx={styles.abilityTag}>
        {ability}
    </Box>
);

const FeatureCard = ({ feature, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const enhancement = getFeatureEnhancement(index);

    return (
        <Box
            sx={styles.featureCard(enhancement.color, isHovered)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box sx={styles.featureCardAccent(enhancement.color)} />
            <Box sx={styles.featureGlow(enhancement.color, isHovered)} />
            <Box sx={styles.featureIcon(enhancement.color, isHovered)}>{enhancement.icon}</Box>

            <Typography sx={styles.featureTitle}>{enhancement.title}</Typography>
            <Typography sx={styles.featureDescription}>{feature}</Typography>
        </Box>
    );
};

// ============================================
// MAIN COMPONENT
// ============================================

const Mechanics = ({ creatures, features, renderPipeDivider }) => {
    const [selectedCreature, setSelectedCreature] = useState(0);

    const currentCreature = creatures[selectedCreature];
    const currentDetails = getCreatureDetails(currentCreature?.name);

    return (
        <Box sx={styles.mechanicsWrapper}>
            {/* BESTIARY SECTION */}
            <Box sx={styles.mechanicsSection}>
                <Typography sx={styles.sectionTitleCentered}>⚠ ENEMY BESTIARY ⚠</Typography>

                <Box sx={styles.bestiaryContainer}>
                    {/* Creature List */}
                    <Box sx={styles.creatureList}>
                        {creatures.map((creature, index) => (
                            <CreatureTab
                                key={index}
                                creature={creature}
                                active={selectedCreature === index}
                                onClick={() => setSelectedCreature(index)}
                            />
                        ))}
                    </Box>

                    {/* Creature Spotlight */}
                    <Box sx={styles.creatureSpotlight}>
                        <Box sx={styles.spotlightTopBar} />
                        <Box sx={styles.spotlightScanlines} />

                        <Box sx={styles.spotlightContent}>
                            {/* Creature Display */}
                            <Box sx={styles.creatureDisplay}>
                                <Box sx={styles.creatureImageFrame}>
                                    <Box
                                        component="img"
                                        src={currentCreature?.image}
                                        alt={currentCreature?.name}
                                        sx={styles.creatureImage}
                                    />
                                    <Box sx={styles.creatureImageScanline} />
                                </Box>

                                <Typography sx={styles.creatureName}>{currentCreature?.name}</Typography>

                                <Box sx={styles.threatLevel}>
                                    <Typography sx={styles.threatLabel}>THREAT:</Typography>
                                    <ThreatDots threat={currentDetails.threat} />
                                </Box>
                            </Box>

                            {/* Creature Info */}
                            <Box sx={styles.creatureInfo}>
                                <Typography sx={styles.creatureDescription}>
                                    {currentDetails.description}
                                    <Box component="span" sx={styles.blinkingCursor}>
                                        _
                                    </Box>
                                </Typography>

                                <Box sx={styles.statBar}>
                                    <StatRow
                                        label="AGGRESSION"
                                        value={currentDetails.stats.aggression}
                                        color="#ff4444"
                                    />
                                    <StatRow label="SPEED" value={currentDetails.stats.speed} color="#44aaff" />
                                    <StatRow
                                        label="DURABILITY"
                                        value={currentDetails.stats.durability}
                                        color="#44ff88"
                                    />
                                </Box>

                                <Box>
                                    <Typography sx={styles.abilitiesLabel}>ABILITIES</Typography>
                                    <Box>
                                        {currentDetails.abilities.map((ability, i) => (
                                            <AbilityTag key={i} ability={ability} />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {renderPipeDivider(1)}

            {/* FEATURES SECTION */}
            <Box sx={styles.mechanicsSection}>
                <Typography sx={styles.sectionTitleCentered}>⚡ GAME FEATURES ⚡</Typography>

                <Box sx={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Mechanics;
