import { Box, styled } from '@mui/material';
import { SidebarToggleButton } from 'react-admin';
import harenaLogo from '../assets/harena-random-logo.png';

const AppBar = styled(Box)(() => ({
    zIndex: 999,
    height: '3.2rem',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1) !important',
    border: 'none',
    outline: 'none',
}));

const Logo = styled('img')({
    height: '2.7rem',
    marginLeft: 50,
});

const SidebarToggleButtonStyled = styled(SidebarToggleButton)({
    height: '2.5rem',
    width: '2.5rem',
});

export const HrAppBar = () => {
    return (
        <>
            <AppBar>
                <Logo src={harenaLogo} alt="harena logo" />
                <Box sx={{ display: 'inherit', alignItems: 'center', paddingInline: '.6rem' }}>
                    <SidebarToggleButtonStyled />
                </Box>
            </AppBar>
        </>
    );
};
