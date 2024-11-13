import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Securities from "./pages/securities";
import SecurityDetail from "./pages/security-details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/securities" element={<Securities />} />
        <Route path="/securities/:symbol" element={<SecurityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
