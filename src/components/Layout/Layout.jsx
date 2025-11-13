import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';

import Header from '@/components/Header/Header.js';

const Layout = () => {
    return (
        <Box>
            <Header />

            <div>
                <Outlet />
            </div>
        </Box>
    );
};

export default Layout;
