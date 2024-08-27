import { Menu } from 'react-admin';
import { Box, styled } from '@mui/material';
import { AccountBalance, Construction, Lock } from '@mui/icons-material';
import { HR_COLOR } from '@/HrTheme';
import { useNavigate } from 'react-router-dom';

const MenuBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '90%',
  position: 'fixed',
  background: HR_COLOR['white'],
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  paddingTop: 5,
}));

export const HrMenu = () => {
  const navigate = useNavigate();
  return (
    <MenuBox>
      <Menu>
        <Menu.Item
          to="/patrimoines"
          primaryText="Patrimoines"
          leftIcon={<AccountBalance />}
        />
        <Menu.Item
          to="/possessions"
          primaryText="Possessions"
          leftIcon={<Construction />}
        />
      </Menu>
      <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <Menu>
          <Menu.Item
            to="/"
            onClick={() => {
              navigate('/');
            }}
            primaryText="Se déconnecter"
            leftIcon={<Lock />}
          />
        </Menu>
      </Box>
    </MenuBox>
  );
};
