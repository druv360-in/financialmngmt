import { Routes, Route } from "react-router-dom";
import FamiliesPage from "./Pages/FamiliesPage";

function App() {
  return (
    <Routes>
      <Route path="/families" element={<FamiliesPage />} />
    </Routes>
  );
}

export default App;