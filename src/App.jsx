import { Routes, Route } from 'react-router-dom'

import './App.css'

import BulkDues from './pages/BulkDues';
import CreateBulkDue from "./components/fathima/CreateBulkDue";


function App() {
  return (
    <Routes>
      <Route path="/" element={<BulkDues />} />
        <Route path="/bulk-dues" element={<BulkDues />} />
       <Route path="/create-bulk-due" element={<CreateBulkDue />} />
    </Routes>
  )
}

export default App