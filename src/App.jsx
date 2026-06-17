import { Routes, Route } from "react-router-dom";
import "./App.css";

import UnpaidDuesPage from "./pages/UnpaidDuesPage";

function App() {
  return (
    <Routes>
      <Route path="/UnpaidDues" element={<UnpaidDuesPage />} />
    </Routes>
  );
}

export default App;