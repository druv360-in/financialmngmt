import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import JournalPage from "./pages1/JournalPage";

import DashboardPage from "./pages1/DashboardPage";
import DuesReportPage from  "./pages1/DuesReportPage";
import BillsManagementPage from "./pages1/BillsManagementPage";
import Page5 from "./pages1/Page5";
import CategoryPage from "./pages1/categoryPage";


import categoryReportPage from "./pages1/CategoryReportPage";
import CashBankPage from "./pages1/CashBankPage";

import CategoryWiseReportPage from './pages1/CategoryWiseReportPage'
import DebitCategoryWiseReportPage from './pages1/DebitCategoryWiseReportPage'
import FinancialReportsPage from './pages1/FinancialReportsPage'
import FamiliesPage from "./pages1/FamiliesPage";
import Families from "./pages1/Families";
import SettingsPage from "./pages1/SettingsPage";




export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />}/>

      <Route path="/" element={<Navigate to="/bills" replace />} />
      <Route path="/bills" element={<BillsManagementPage/>}/>

      <Route path="/" element={<Navigate to="/receipts" replace />} />
      <Route path="/receipts" element={<Page5 />}  />

      <Route path="/" element={<Navigate to="/categories" replace />} /> 
      <Route path="/categories" element={<CategoryPage />} />

      <Route path="/" element={<Navigate to="/families" replace />} />
      <Route path="/families" element={<Families />} />

      {/* <Route path="/" element={<Navigate to="/unpaid-dues" replace />} /> 
      <Route path="/unpaid-dues" element={<DuesReportPage />} /> */}

      <Route path="/" element={<Navigate to="/cash-bank" replace />} /> 
      <Route path="/cash-bank" element={<CashBankPage />} />

      <Route path="/" element={<Navigate to="/reports" replace />} />
      <Route path="/reports" element={<FinancialReportsPage />} />

      <Route path="/" element={<Navigate to="/settings" replace />} />
      <Route path="/settings" element={<SettingsPage />} />

 
    
      <Route path="/category-wise-report"       element={<CategoryWiseReportPage />} />
      <Route path="/debit-category-wise-report" element={<DebitCategoryWiseReportPage />} />
      <Route path="/dues-report"                element={<DuesReportPage />} />
      <Route path="/familiespage" element={<FamiliesPage />} />


    </Routes>
  );
}
