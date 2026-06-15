import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Page5 from './pages/Page5'
// vimal
import BillsManagementPage from "./pages/BillsManagementPage"
import DashboardPage from "./pages/DashboardPage";

import CategoryPage from './pages/categoryPage';

function App() {
  return (
    <Routes>
      <Route path="/CategoryPage" element={<CategoryPage />} />
      <Route path="/receipts"               element={<Page5 />}  />
     
      <Route path="/BillsPage" element={<BillsManagementPage/>}/>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
