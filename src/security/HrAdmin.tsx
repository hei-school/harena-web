import { Admin } from '@react-admin/ra-enterprise';
import { CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import { PossessionEdit, PossessionShow } from '@/operations/ownership';
import { HrLayout } from '@/common';
import { authProvider } from '@/providers/auth-provider';
import { dataProvider } from '@/providers';
import { PATRIMONY_UI } from '@/operations/patrimony';
import { HR_THEME } from '@/HrTheme';
import { SignInForm } from '@/operations/login/SignInForm';
import BpLoginPageLayout from '@/operations/login/LoginPageLayout';

export const HrAdmin = () => {
  return (
    <Admin
      requireAuth
      title="Harena"
      layout={HrLayout}
      theme={HR_THEME}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="patrimoines" {...PATRIMONY_UI} />
      <Resource name="possessions" />
      <Resource name="fluxImpossibles" />
      <CustomRoutes>
        <Route
          path="/login"
          element={
            <BpLoginPageLayout>
              <SignInForm />
            </BpLoginPageLayout>
          }
        />
        <Route
          path="/patrimoines/:patrimoineNom/possessions/:possessionNom/show"
          element={<PossessionShow />}
        />
        <Route
          path="/patrimoines/:patrimoineNom/possessions/:possessionNom/edit"
          element={<PossessionEdit />}
        />
      </CustomRoutes>
    </Admin>
  );
};
