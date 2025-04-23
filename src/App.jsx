import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import these
import Home from "./pages/Home";
import InnovatorsSection from "./components/Innovators/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Innovators" element={<InnovatorsSection/>} />
      </Routes>
    </Router>
  );
}

export default App;
