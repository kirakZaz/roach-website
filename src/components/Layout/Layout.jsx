import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';

import Header from '@/components/Header/Header.js';

const Layout = () => {
    return (
        <Box>
            <Header />

            <Box sx={{ mt: 6 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
