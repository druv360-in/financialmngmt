import { Routes, Route } from 'react-router-dom'

import Page5 from './pages/Page5'


function App() {
  return (
    <Routes>
      <Route path="/receipts"               element={<Page5 />}  />
     
    </Routes>
  )
}

export default App