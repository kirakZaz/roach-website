import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Base color palette
const palette = {
    primary: { main: '#6ec1e4', dark: '#2b4f80', light: '#a7dbf1' },
    secondary: { main: '#f2a65a', dark: '#7c5039', light: '#f3e37c' },
    error: { main: '#d94f4f' },
    warning: { main: '#f2a65a' },
    info: { main: '#8a5ebf' },
    success: { main: '#7ec850' },
    background: { default: '#1b1b1b', paper: '#383838' },
    text: { primary: '#f5f5f5', secondary: '#a0a0a0' },
};

// Typography
const typography = {
    fontFamily: '"Press Start 2P", monospace',
    h1: { fontWeight: 600, fontSize: '2.5rem' },
    h2: { fontWeight: 500, fontSize: '2rem' },
    h3: { fontWeight: 500, fontSize: '1.75rem' },
    body1: { fontSize: '1rem' },
    button: { textTransform: 'none', fontWeight: 500 },
};

// Component overrides (example)
const components = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 0,
                boxShadow: 'none',
                ':hover': {
                    boxShadow: 'none',
                },
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 0,
            },
        },
    },
};

let theme = createTheme({
    palette,
    typography,
    components,
});

theme = responsiveFontSizes(theme);

export default theme;
