import { Routes, Route } from 'react-router-dom'
import Addoreditbill from './components/arathi/Addoreditbill'
import Receiptcard from './components/arathi/Receiptcard'
import Receiptsmanagement from './components/arathi/Receiptsmanagement'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/Addoreditbill"      element={<Addoreditbill />} />
      <Route path="/Receiptcard"        element={<Receiptcard />} />
      <Route path="/Receiptsmanagement" element={<Receiptsmanagement />} />
    </Routes>
  )
}

export default App