import { Routes, Route } from 'react-router-dom'
import './App.css'


// Aswanth

import Families from './pages/Families'

function App() {
  return (
    <Routes>
     
      {/* aswanth */}
      <Route path="/families" element={<Families />} />
      
      
    </Routes>
  )
}

export default App