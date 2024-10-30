import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Atoms from "./pages/atoms";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white text-2xl">
              <h1>Hello WOrld</h1>
            </div>
          }
        />
        <Route path="/atoms" element={<Atoms />} />
      </Routes>
    </Router>
  );
}

export default App;