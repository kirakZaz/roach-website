import { useRoutes } from 'react-router-dom';

import GamePage from '@/pages/Game/Game.jsx';
import HomePage from '@/pages/Home/Home.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';
import PortfolioPage from '@/pages/Portfolio/Portfolio.jsx';

import { routes } from '@/shared/types.js';

import Layout from '@/components/Layout/Layout.jsx';

const Routes = () => {
    return useRoutes([
        {
            element: <Layout />,
            children: [
                { path: routes.home, element: <HomePage /> },
                { path: routes.game, element: <GamePage /> },
                { path: routes.portfolio, element: <PortfolioPage /> },
            ],
        },
        { path: '*', element: <NotFound /> },
    ]);
};

export default Routes;
