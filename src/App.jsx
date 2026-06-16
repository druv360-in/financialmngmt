import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'


// sreekaanth
import CategoryWiseReportPage from './pages/CategoryWiseReportPage'
import DebitCategoryWiseReportPage from './pages/DebitCategoryWiseReportPage'
import DuesReportPage from './pages/DuesReportPage'
import FinancialReportsPage from './pages/FinancialReportsPage'


function App() {
  return (
    <Routes>


      {/* sreekaanth */}
      <Route path="/financial-reports"          element={<FinancialReportsPage />} />
      <Route path="/category-wise-report"       element={<CategoryWiseReportPage />} />
      <Route path="/debit-category-wise-report" element={<DebitCategoryWiseReportPage />} />
      <Route path="/dues-report"                element={<DuesReportPage />} />

    </Routes>
  )
}

export default App