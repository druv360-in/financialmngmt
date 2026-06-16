import { Routes, Route } from 'react-router-dom'
import './App.css'

import DashboardPage from "./pages/DashboardPage";
import DuesReportPage from  "./pages/DuesReportPage";




function App() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage />}/>
      
      <Route path="/reports" element={<DuesReportPage />} />
        
    </Routes>
  )
}

export default App