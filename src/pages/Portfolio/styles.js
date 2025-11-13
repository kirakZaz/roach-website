export const styles = {
    frame: ({ isActive, accent }) => ({
        position: 'relative',
        width: '100%',
        aspectRatio: isActive ? '4 / 5' : '1 / 1',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        transition: 'transform .2s ease, box-shadow .2s ease, filter .2s ease',
        transform: isActive ? 'translateY(-2px)' : 'none',
        filter: isActive ? 'none' : 'grayscale(20%)',

        display: 'flex',
        maxWidth: '265px',
        minHeight: isActive ? '250px' : '150px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isActive ? '34px' : '0',

        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 2,
            border: `3px solid ${accent}`,
            transform: isActive ? 'translate(12px, 12px)' : 'translate(8px, 8px)',
            zIndex: 1,
            pointerEvents: 'none',
            transition: 'transform .2s ease',
        },
        '&:hover': { boxShadow: '0 18px 36px rgba(0,0,0,0.45)' },
    }),
    activeText: ({ isActive }) => ({
        display: isActive ? 'block' : 'none',
        '& > p': {
            my: 1,
        },
    }),
    membersRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 2,
    },
    member: {
        flex: '1 1 auto',
        mx: 1,
    },
};

export const accent = {
    main: '#f06b8d',
    darkBg: '#23222b',
    soft: '#ffd8e2',
};
