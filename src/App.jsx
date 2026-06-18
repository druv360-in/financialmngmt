import { Routes, Route } from 'react-router-dom'
import './App.css'
import JournalPage from "./pages/JournalPage";



function App() {
  return (
    <Routes>
      <Route path="/ledger"    element={<JournalPage />} />
      
    </Routes>
  )
}

export default App