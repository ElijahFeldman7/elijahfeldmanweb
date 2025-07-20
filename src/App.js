import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import VantaComponent from './components/VantaComponent';

function App() {
  return (
    <div>
      <VantaComponent />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;