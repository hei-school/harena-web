import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageLayout from '@/operations/login/LoginPageLayout';
import { SignInForm } from '@/operations/login/SignInForm';
import { HrAdmin } from '@/security/HrAdmin';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPageLayout>
            <SignInForm />
          </LoginPageLayout>
        }
      />
      <Route path="*" element={<HrAdmin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
