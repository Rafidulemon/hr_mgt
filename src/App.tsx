import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atoms from "./pages/atoms";
import Layout from "./components/layouts/Layout";
import Index from "./pages";
import ProfilePage from "./pages/Profile";
import SignupPage from "./pages/auth/Signup";
import LoginPage from "./pages/auth/Login";
import SupportPage from "./pages/support";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import EditProfilePage from "./pages/Profile/Edit";

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
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <Layout>
              <EditProfilePage />
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
            <Layout>
              <Atoms />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
