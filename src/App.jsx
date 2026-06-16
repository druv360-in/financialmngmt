import { Routes, Route } from "react-router-dom";

// Pages
import CashBankPage from "./pages/CashBankPage";




function App() {
  return (
    <Routes>

      
      <Route path="/cashbankPage" element={<CashBankPage />} />
     
      
    </Routes>
  );
}

export default App;