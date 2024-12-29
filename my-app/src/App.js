import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from './Pages/Home';
import ServicesPage from './Pages/ServicesPage'; // New page for Services
import SafetyMeasuresPage from './Pages/SafetyMeasuresPage'; // New page for Safety Measures

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/safety-measures" element={<SafetyMeasuresPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
