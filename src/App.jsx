import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Outlet } from 'react-router-dom';

import './index.css';
import Routes from './Routes.js';

export default function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <html lang="eng" />
                <title>Roach</title>

                <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
            </Helmet>

            <div id="body-wrapper">
                <BrowserRouter>{<Routes /> || <Outlet />}</BrowserRouter>
            </div>
        </HelmetProvider>
    );
}
