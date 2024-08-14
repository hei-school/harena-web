import { Admin } from '@react-admin/ra-enterprise';
import { Resource } from 'react-admin';
import { CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { PossessionEdit, PossessionShow } from './operations/ownership';
import { HrLayout } from './common';
import { authProvider } from './providers/auth-provider';
import { dataProvider } from './providers';
import { PATRIMOINE_UI } from './operations/wealth';
import {HR_THEME} from './HrTheme';

const App = () => (
  <Admin
    requireAuth
    title="Harena"
    layout={HrLayout}
    theme={HR_THEME}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="patrimoines" {...PATRIMOINE_UI} />
    <Resource name="possessions" />
    <Resource name="fluxImpossibles" />
    <CustomRoutes>
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

export default App;
