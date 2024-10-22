import { FC } from 'react';
import { Layout, LayoutProps } from 'react-admin';
import { AppLocationContext } from '@react-admin/ra-navigation';
import { HrMenu } from './HrMenu';
import { HrAppBar } from './HrAppBar';

export const HrLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <AppLocationContext>
      <Layout appBar={HrAppBar} menu={HrMenu}>
        {children}
      </Layout>
    </AppLocationContext>
  );
};
