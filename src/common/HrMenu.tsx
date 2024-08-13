import { Menu } from 'react-admin';
import { Box, styled } from '@mui/material';
import {
  AccountBalance,
} from '@mui/icons-material';

const MenuBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '90%',
  position: 'fixed',
  background: `#fff`,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20
}));

export const HrMenu = () => {
  return (
    <MenuBox>
      <Menu>
        <Menu.Item to='/patrimoines' primaryText="Patrimoines" leftIcon={<AccountBalance />} />
      </Menu>
    </MenuBox>
  );
};  
