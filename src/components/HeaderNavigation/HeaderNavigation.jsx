import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { Box } from '@mui/system';

import { routes } from '@/shared/types.js';

const HeaderNavigation = () => {
    const navigate = useNavigate();

    const buttons = [
        {
            key: 'home',
            label: 'Home',
            onClick: () => {
                navigate(routes.home);
            },
        },
        {
            key: 'game',
            label: 'Game',
            onClick: () => {
                navigate(routes.game);
            },
        },
        {
            key: 'portfolio',
            label: 'Portfolio',
            onClick: () => {
                navigate(routes.portfolio);
            },
        },
    ];

    return (
        <Box>
            {buttons?.map((button) => (
                <Button key={button.key} onClick={button.onClick} style={{ marginRight: 8 }}>
                    {button.label}
                </Button>
            ))}
        </Box>
    );
};

export default HeaderNavigation;
