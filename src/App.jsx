import { Routes, Route } from 'react-router-dom'
import './App.css'

// vimal
import BillsManagementPage from "./pages/BillsManagementPage"


function App() {
  return (
    <Routes>
      <Route path="/BillsPage" element={<BillsManagementPage/>}/>
    </Routes>
  )
}

export default App