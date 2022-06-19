const Card = {
    // The styles all Cards have in common
    baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        maxWidth: 'sm',
        borderRadius: '20px',
        color: 'black',
        minHeight: '40vh',
    },
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            padding: 8,
            borderRadius: 'xl',
            boxShadow: 'xl',
        },
        smooth: {
            padding: 6,
            borderRadius: 'sm',
            boxShadow: 'md',
        },
    },
    // The default variant value
    defaultProps: {
        variant: 'rounded',
    },
};

export default Card;
