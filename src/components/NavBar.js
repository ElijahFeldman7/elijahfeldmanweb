import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchMenu from './SearchMenu';

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const pathName = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    setCurrentPage(pathName.charAt(0).toUpperCase() + pathName.slice(1));
  }, [location]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  /* useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  */
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  /*
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  */
  const pages = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Projects', path: '/projects', icon: '💻' },
    { name: 'Blog', path: '/blog', icon: '✍️' },
    { name: 'Contact Me', path: '/contact', icon: '✉️' },
    { name: 'Gallery', path: '/gallery', icon: '📸'}
  ];

  return (
    <nav style={{
      position: 'absolute',
      top: '20px',
      left: 0,
      width: '100%',
      maxWidth: 'none',
      padding: '10px 40px',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '0 0 10px 10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      color: 'white',
    }}>
      <Link to="/" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
        ef/{currentPage}{showCursor && <span style={{ animation: 'blink-caret .75s step-end infinite' }}>|</span>}
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="hidden md:flex" style={{ gap: '20px' }}>
          {pages.map((page) => (
            <Link key={page.name} to={page.path} style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { textDecoration: 'underline' } }}>
              {page.name}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={toggleSearch} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2em' }}>
            ⌘
          </button>
          

          <button
            onClick={toggleSidebar}
            style={{
              background: 'rgba(128, 128, 128, 0.0)', 
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.2em',
              borderRadius: '5px',
              padding: '5px 10px',
              marginLeft: '10px', 
            }}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <SearchMenu isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

      <div
        style={{
          position: 'fixed',
          top: '60px',
          right: 0,
          height: 'fit-content',
          width: 'fit-content',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 999,
          padding: '10px',
          boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {pages.map((page) => (
          <React.Fragment key={page.name}>
            <Link to={page.path} onClick={() => { setIsSidebarOpen(false); setIsSearchOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9em', padding: '5px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px', filter: 'grayscale(100%)' }}>{page.icon}</span>
              {page.name}
            </Link>
            <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} />
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;