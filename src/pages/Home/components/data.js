// ============================================
// CREATURE DETAILS
// ============================================

export const creatureDetails = {
    'BIG RAT': {
        threat: 4,
        description:
            'A massive, radiation-mutated rodent driven mad by the toxic wasteland. Once a common pest, now a formidable predator that prowls the deeper tunnels. Approach with extreme caution.',
        stats: { aggression: 85, speed: 60, durability: 75 },
        abilities: ['Toxic Bite', 'Burrow', 'Frenzy'],
    },
    FLY: {
        threat: 2,
        description:
            'Buzzing nuisances that swarm in irradiated zones. Individually weak but often attack in groups. Their compound eyes can detect movement from impressive distances.',
        stats: { aggression: 40, speed: 90, durability: 20 },
        abilities: ['Swarm', 'Evasive', 'Disease Carrier'],
    },
    'LIL RAT': {
        threat: 2,
        description:
            'Smaller but no less cunning than their larger cousins. These scavengers are quick to flee but will defend their territory fiercely when cornered.',
        stats: { aggression: 50, speed: 80, durability: 35 },
        abilities: ['Scurry', 'Gnaw', 'Pack Tactics'],
    },
    WEEVIL: {
        threat: 3,
        description:
            'Armored insects with reinforced carapaces that shrug off most attacks. Slow but relentless, they guard resource-rich areas with unwavering determination.',
        stats: { aggression: 55, speed: 30, durability: 90 },
        abilities: ['Shell Defense', 'Mandible Crush', 'Burrow'],
    },
};

// ============================================
// FEATURE ENHANCEMENTS
// ============================================

export const featureEnhancements = [
    { icon: '⚔️', color: '#ff4444', title: 'COMBAT' },
    { icon: '☠️', color: '#ff6b35', title: 'HAZARDS' },
    { icon: '⏱️', color: '#ffdd33', title: 'TIME PRESSURE' },
    { icon: '🕷️', color: '#44ff88', title: 'WALL CRAWLING' },
    { icon: '🎨', color: '#44aaff', title: 'PIXEL ART' },
    { icon: '🎵', color: '#ff44aa', title: 'AUDIO' },
];

// ============================================
// DEFAULT CREATURE DATA
// ============================================

export const defaultCreatureDetails = {
    threat: 3,
    description: 'A mysterious creature of the underground.',
    stats: { aggression: 50, speed: 50, durability: 50 },
    abilities: ['Unknown'],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getThreatColor = (level) => {
    if (level <= 2) return '#44ff88';
    if (level <= 3) return '#ffdd33';
    return '#ff4444';
};

export const getCreatureDetails = (creatureName) => {
    return creatureDetails[creatureName] || defaultCreatureDetails;
};

export const getFeatureEnhancement = (index) => {
    return (
        featureEnhancements[index] || {
            icon: '✦',
            color: '#ff6b35',
            title: 'FEATURE',
        }
    );
};
