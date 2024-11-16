import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atoms from "./pages/atoms";
import Layout from "./components/layouts/Layout";
import Index from "./pages";
import SignupPage from "./pages/auth/Signup";
import LoginPage from "./pages/auth/Login";
import SupportPage from "./pages/support";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
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
