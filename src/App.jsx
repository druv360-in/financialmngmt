import { Routes, Route } from "react-router-dom";
import './App.css'

import DashboardPage from "./pages/DashboardPage";
import DuesReportPage from  "./pages/DuesReportPage";

// Pages
import CashBankPage from "./pages/CashBankPage";
// sreekaanth
import CategoryWiseReportPage from './pages/CategoryWiseReportPage'
import DebitCategoryWiseReportPage from './pages/DebitCategoryWiseReportPage'
import DuesReportPage from './pages/DuesReportPage'
import FinancialReportsPage from './pages/FinancialReportsPage'
import FamiliesPage from "./Pages/FamiliesPage";
import './App.css';
import Families from "./pages/Families";





function App() {
  return (
    <Routes>
      <Route path="/families" element={<Families />} />
      
      <Route path="/Dashboard" element={<DashboardPage />}/>
      
      <Route path="/reports" element={<DuesReportPage />} />
        

      
      <Route path="/cashbankPage" element={<CashBankPage />} />
     
      

      {/* sreekaanth */}
      <Route path="/financial-reports"          element={<FinancialReportsPage />} />
      <Route path="/category-wise-report"       element={<CategoryWiseReportPage />} />
      <Route path="/debit-category-wise-report" element={<DebitCategoryWiseReportPage />} />
      <Route path="/dues-report"                element={<DuesReportPage />} />

      <Route path="/families" element={<FamiliesPage />} />
      <Route path="/CategoryReportPage" element={<CategoryReportPage />} />
      <Route path="/CategoryPage" element={<CategoryPage />} />
      <Route path="/receipts"               element={<Page5 />}  />
     
      <Route path="/BillsPage" element={<BillsManagementPage/>}/>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}


export default App;
