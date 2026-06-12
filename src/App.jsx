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

// Aswanth
import Add_editfamily from './components/aswanth/Add_editfamily'
import Edit_family from './components/aswanth/Edit_family'
import Families_members from './components/aswanth/Families_members'
import Family_stats from './components/aswanth/Family_stats'
import Ledger_format_table from './components/aswanth/Ledger_format_table'
import View_familycard from './components/aswanth/View_familycard'
import Families from './pages/Families'

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

      {/* aswanth */}
      <Route path="/families" element={<Families />} />
      <Route path="/addfamily" element={<Add_editfamily />} />
      <Route path="/editfamily" element={<Edit_family />} />
      <Route path="/familymembers" element={<Families_members />} />
      <Route path="/familystats" element={<Family_stats />} />
      <Route path="/ledgerformat" element={<Ledger_format_table />} />
      <Route path="/viewfamilycard" element={<View_familycard />} />
      
    </Routes>
  )
}

export default App