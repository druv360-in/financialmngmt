import { Routes, Route } from 'react-router-dom';
import './App.css';

import CategoryPage from './pages/categoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
