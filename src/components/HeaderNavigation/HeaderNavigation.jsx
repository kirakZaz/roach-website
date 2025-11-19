import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { Box } from '@mui/system';

import { routes } from '@/shared/types.js';

import { buttons } from './data.js';

const HeaderNavigation = () => {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = React.useState('home');

    React.useLayoutEffect(() => {
        const path = window.location.pathname;

        const routeKey = Object.keys(routes).find((key) => routes[key] === path);

        if (routeKey) {
            setSelectedButton(routeKey);
        }
    }, []);

    const onButtonClick = (key) => {
        setSelectedButton(key);
        navigate(routes[key]);
    };

    return (
        <Box sx={{ ml: 2 }}>
            {buttons?.map((button) => (
                <Button
                    key={button.key}
                    onClick={() => onButtonClick(button.key)}
                    variant={selectedButton === button.key ? 'outlined' : 'text'}
                    style={{ marginRight: 8, fontSize: 16, borderBottom: '1px solid', padding: '2px 8px' }}
                >
                    {button.label}
                </Button>
            ))}
        </Box>
    );
};

export default HeaderNavigation;
