import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Securities from "./pages/securities";
import SecurityDetail from "./pages/security-details";

import SecuritiesDataProvider from "./contexts/securities/securities-data-provider";

function App() {
  return (
    <Router>
      <SecuritiesDataProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/security-list" element={<Securities />} />
          <Route path="/security-detail/:symbol" element={<SecurityDetail />} />
        </Routes>
      </SecuritiesDataProvider>
    </Router>
  );
}

export default App;
