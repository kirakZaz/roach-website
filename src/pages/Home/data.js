// ============================================
// ASSET IMPORTS (update paths as needed)
// ============================================

import pipeSection1 from '@/assets/aboutPage/pipe-section-1.png';
import pipeSection2 from '@/assets/aboutPage/pipe-section-2.png';
import pipeSection3 from '@/assets/aboutPage/pipe-section-3.png';
import bigRat from '@/assets/aboutPage/ROACH_bigrat.gif';
import fly from '@/assets/aboutPage/ROACH_fly.gif';
import lilRat from '@/assets/aboutPage/ROACH_lilrat.gif';
import weevil from '@/assets/aboutPage/ROACH_weevil.gif';
import sketch1 from '@/assets/aboutPage/sketch1.jpeg';
import sketch2 from '@/assets/aboutPage/sketch2.jpeg';
import sketch3 from '@/assets/aboutPage/sketch3.jpeg';
import screenshot1 from '@/assets/screenShots/screenshot1.png';
import screenshot2 from '@/assets/screenShots/screenshot2.png';
import screenshot3 from '@/assets/screenShots/screenshot3.png';
import screenshot4 from '@/assets/screenShots/screenshot4.png';

// ============================================
// PIPES
// ============================================

export const pipes = [pipeSection1, pipeSection2, pipeSection3];

// ============================================
// CREATURES
// ============================================

export const creatures = [
    { name: 'BIG RAT', image: bigRat },
    { name: 'FLY', image: fly },
    { name: 'LIL RAT', image: lilRat },
    { name: 'WEEVIL', image: weevil },
];

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

const defaultCreatureDetails = {
    threat: 3,
    description: 'A mysterious creature of the underground.',
    stats: { aggression: 50, speed: 50, durability: 50 },
    abilities: ['Unknown'],
};

// ============================================
// FEATURES
// ============================================

export const features = [
    'Fight a variety of enemies from giant mutated rats that are feral and intoxicated to other bugs that skitter, fly and gather much like yourself. Unfortunately they are not in the mood to negotiate.',
    'Navigate the dangerous toxic tunnels filled with sharp spikes and exploding barrels, be careful and watch your step even as everything but your Grubdog is trying to kill you.',
    'Time is key, you must race to gather resources and return to the safety of your nest deep in the Earth via Witchetty tunnels before the scorching sun has fully risen, and burns away any still lingering.',
    'Bug benefits, you not only jump and walk but crawl on the walls allowing for greater freedom to navigate the environment and explore.',
    'Enjoy a beautiful pixel art style with an atmospheric background, an apocalyptic feel and vibrant animations.',
    'Do you hear that? While on your adventure enjoy a variety of sound effects while listening to a crunchy action packed music track.',
];

export const featureEnhancements = [
    { icon: '⚔️', color: '#ff4444', title: 'COMBAT' },
    { icon: '☠️', color: '#ff6b35', title: 'HAZARDS' },
    { icon: '⏱️', color: '#ffdd33', title: 'TIME PRESSURE' },
    { icon: '🕷️', color: '#44ff88', title: 'WALL CRAWLING' },
    { icon: '🎨', color: '#44aaff', title: 'PIXEL ART' },
    { icon: '🎵', color: '#ff44aa', title: 'AUDIO' },
];

// ============================================
// PLACEHOLDERS
// ============================================

export const screenshotPlaceholders = [screenshot1, screenshot2, screenshot3, screenshot4];

export const conceptArtPlaceholders = [sketch1, sketch2, sketch3];

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

export const getPipePattern = (variant) => {
    const patterns = [
        [0, 1, 0, 2, 0],
        [1, 0, 2, 0, 1],
        [2, 1, 0, 1, 2],
    ];
    return patterns[variant % patterns.length];
};
