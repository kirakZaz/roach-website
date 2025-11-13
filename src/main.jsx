import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App.jsx';
import theme from './theme/muiTheme';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
