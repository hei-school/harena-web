import { FC } from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { AppLocationContext } from '@react-admin/ra-navigation';
import { HrMenu } from './HrMenu';
import { AppBar } from '../layout/appbar';

export const HrLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <AppLocationContext>
      <Layout appBar={AppBar} menu={HrMenu}>
        {children}
      </Layout>
    </AppLocationContext>
  );
};
