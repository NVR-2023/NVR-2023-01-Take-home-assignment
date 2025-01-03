import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import SecurityList from "./pages/security-list";
import SecurityDetails from "./pages/security-details";

import SecuritiesDataProvider from "./contexts/securities/securities-data-provider";

function App() {
  return (
    <Router>
      <SecuritiesDataProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/security-list" element={<SecurityList />} />
          <Route path="/security-detail/:symbol" element={<SecurityDetails />} />
        </Routes>
      </SecuritiesDataProvider>
    </Router>
  );
}

export default App;
