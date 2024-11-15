import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atoms from "./pages/atoms";
import Layout from "./components/layouts/Layout";
import Index from "./pages";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
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
