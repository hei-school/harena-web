import { Menu } from 'react-admin';
import { Box, styled } from '@mui/material';
import { AccountBalance, Construction } from '@mui/icons-material';
import { HR_COLOR } from '@/HrTheme';

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
    </MenuBox>
  );
};
