import { Routes, Route } from 'react-router-dom'
import './App.css'

// arathi
import Addoreditbill from './components/arathi/Addoreditbill'
import Receiptcard from './components/arathi/Receiptcard'
import Receiptsmanagement from './components/arathi/Receiptsmanagement'

// binoj
import CurrentBalances from './components/binoj/CurrentBalances'
import FinancialYearBanner from './components/binoj/FinancialYearBanner'
import Sidemenu from './components/binoj/Sidemenu'
import TotalDisplayCards from './components/binoj/TotalDisplayCards'

// sreekaanth
import CategoryWiseReportPage from './pages/Sreekaanth/CategoryWiseReportPage'
import DebitCategoryWiseReportPage from './pages/Sreekaanth/DebitCategoryWiseReportPage'
import DuesReportPage from './pages/Sreekaanth/DuesReportPage'
import FinancialReportsPage from './pages/Sreekaanth/FinancialReportsPage'


function App() {
  return (
    <Routes>

      {/* arathi */}
      <Route path="/Addoreditbill"      element={<Addoreditbill />} />
      <Route path="/Receiptcard"        element={<Receiptcard />} />
      <Route path="/Receiptsmanagement" element={<Receiptsmanagement />} />

      {/* binoj */}
      <Route path="/CurrentBalances"     element={<CurrentBalances />} />
      <Route path="/FinancialYearBanner" element={<FinancialYearBanner />} />
      <Route path="/Sidemenu"            element={<Sidemenu />} />
      <Route path="/TotalDisplayCards"   element={<TotalDisplayCards />} />

      {/* sreekaanth */}
      <Route path="/financial-reports"          element={<FinancialReportsPage />} />
      <Route path="/category-wise-report"       element={<CategoryWiseReportPage />} />
      <Route path="/debit-category-wise-report" element={<DebitCategoryWiseReportPage />} />
      <Route path="/dues-report"                element={<DuesReportPage />} />

    </Routes>
  )
}

export default App