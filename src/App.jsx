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


import CategoryReportPage from './pages/CategoryReportPage'
import Page5 from './pages/Page5'
// vimal
import BillsManagementPage from "./pages/BillsManagementPage"
import DashboardPage from "./pages/DashboardPage";

import CategoryPage from './pages/categoryPage';

function App() {
  return (
    <Routes>
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
