import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CreatePost from './pages/CreatePost';
import VantaComponent from './components/VantaComponent';
import ProgressBar from './components/ProgressBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchMenu from './components/SearchMenu';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ backgroundColor: isHomePage ? 'transparent' : 'black' }}>
      {isHomePage && <VantaComponent />}
      <ProgressBar />
      {!isHomePage && <NavBar />}
      <SearchMenu isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      <div style={{ position: 'relative', zIndex: 1, paddingTop: isHomePage ? '0px' : '70px', width: '100%', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:uid" element={<BlogPost />} />
          <Route path="/create-post-hidden" element={<CreatePost />} />
        </Routes>
      </div>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;