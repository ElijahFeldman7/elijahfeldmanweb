import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import VantaComponent from './components/VantaComponent';
import ProgressBar from './components/ProgressBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <VantaComponent style={{ top: '60px' }} />
      <ProgressBar />
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '70px', width: '100%', boxSizing: 'border-box' }}>
        {!isHomePage && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;