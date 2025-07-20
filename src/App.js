import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import VantaComponent from './components/VantaComponent';
import ProgressBar from './components/ProgressBar';
import SearchMenu from './components/SearchMenu';

function App() {
  return (
    <div>
      <VantaComponent />
      <ProgressBar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <SearchMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;