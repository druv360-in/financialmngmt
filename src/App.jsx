import { Routes, Route } from "react-router-dom";
import './App.css';
import Families from "./pages/Families";





function App() {
  return (
    <Routes>
      <Route path="/families" element={<Families />} />
      
    </Routes>
  );
}


export default App;
