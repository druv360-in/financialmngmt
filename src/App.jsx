import { Routes, Route } from 'react-router-dom'
import './App.css'

import CategoryReportPage from './pages/CategoryReportPage'

function App() {
  return (
    <Routes>
      <Route path="/CategoryReportPage" element={<CategoryReportPage />} />
    </Routes>
  )
}

export default App