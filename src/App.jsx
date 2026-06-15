import { Routes, Route } from 'react-router-dom'
import './App.css'

// vimal
import BillsManagementPage from "./pages/BillsManagementPage"
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <Routes>
      <Route path="/BillsPage" element={<BillsManagementPage/>}/>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  )
}

export default App