import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atoms from "./pages/atoms";
import Layout from "./components/layouts/Layout";
import Index from "./pages";

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
