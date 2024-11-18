import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Index from "./pages";
import Atoms from "./pages/atoms";
import ForgetPasswordPage from "./pages/auth/ForgetPassword";
import LoginPage from "./pages/auth/Login";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import SignupPage from "./pages/auth/Signup";
import PrivacyPage from "./pages/privacy";
import SupportPage from "./pages/support";
import TermsPage from "./pages/terms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path="/atoms"
          element={
            <Layout
              hasNameTitle
              name="Md. Rafidul Islam"
              designation="Software Engineer"
              joining_date="August 17, 2023"
              hasRightButton
              buttonText="Go to Home"
            >
              <Atoms />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
