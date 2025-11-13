import { AppBar, Divider, Toolbar, Typography } from '@mui/material';

import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation.jsx';

const Header = () => {
    return (
        <AppBar position="static" color="inherit" enableColorOnDark>
            <Toolbar disableGutters variant="dense" sx={{ justifyContent: 'space-between', paddingRight: '16px' }}>
                {/* Left side content can go here */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: '16px' }}>
                    Roach game project
                </Typography>

                <Divider orientation="vertical" flexItem />

                {/* Right side content can go here */}
                <HeaderNavigation />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
