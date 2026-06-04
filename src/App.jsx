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


function App() {
  return (
    <Routes>
      <Route path="/Addoreditbill"      element={<Addoreditbill />} />
      <Route path="/Receiptcard"        element={<Receiptcard />} />
      <Route path="/Receiptsmanagement" element={<Receiptsmanagement />} />
      <Route path="/CurrentBalances"    element={<CurrentBalances />} />
      <Route path="/FinancialYearBanner" element={<FinancialYearBanner />} />
      <Route path="/Sidemenu"            element={<Sidemenu />} />
      <Route path="/TotalDisplayCards"        element={<TotalDisplayCards />} />
    </Routes>
  )
}

export default App