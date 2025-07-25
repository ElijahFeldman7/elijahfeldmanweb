import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchMenu from './SearchMenu'; // Assuming SearchMenu is in the same directory

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

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

  useEffect(() => {
    // Apply dark/light mode to the body or html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const pages = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Projects', path: '/projects', icon: '💻' },
    { name: 'Blog', path: '/blog', icon: '✍️' },
    { name: 'Contact Me', path: '/contact', icon: '✉️' },
  ];

  return (
    <nav style={{
      position: 'absolute',
      top: '20px', // Adjusted to be a little lower
      left: 0,
      width: '100%', // Span entire page
      maxWidth: 'none', // Remove max-width constraint
      padding: '10px 40px', // Adjusted padding for full width, increased left/right padding
      boxSizing: 'border-box', // Include padding in width
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '0 0 10px 10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      color: 'white',
    }}>
      {/* Current Page Indicator */}
      <Link to="/" style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
        ef/{currentPage}{showCursor && <span style={{ animation: 'blink-caret .75s step-end infinite' }}>|</span>}
      </Link>

      {/* Right-aligned Icons and Main Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Main Navigation Links (for larger screens) */}
        <div className="main-nav-links" style={{ display: 'flex', gap: '20px' }}>
          {pages.map((page) => (
            <Link key={page.name} to={page.path} style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { textDecoration: 'underline' } }}>
              {page.name}
            </Link>
          ))}
        </div>

        {/* Right-aligned Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Search Icon */}
          <button onClick={toggleSearch} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2em' }}>
            ⌘
          </button>

          {/* Dark/Light Mode Toggle */}
          <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2em', transition: 'transform 0.3s ease' }}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger Menu (for smaller screens or sidebar) */}
          <button
            onClick={toggleSidebar}
            style={{
              background: 'rgba(128, 128, 128, 0.0)', /* Transparent background */
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.2em',
              borderRadius: '5px',
              padding: '5px 10px',
              marginLeft: '10px', /* Adjust spacing from other icons */
            }}
          >
            {isSidebarOpen ? '✕' : '☰'} {/* Change to X when open */}
          </button>
        </div>
      </div>

      {/* Search Menu */}
      <SearchMenu isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: '60px', /* Start below NavBar */
          right: 0,
          height: 'fit-content', /* Adjust height */
          width: 'fit-content', /* Adjust width to content */
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 999,
          padding: '10px', /* Reduced padding */
          boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px', /* Reduced gap */
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)', /* Slide in/out */
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {pages.map((page) => (
          <React.Fragment key={page.name}>
            <Link to={page.path} onClick={() => { setIsSidebarOpen(false); setIsSearchOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9em', padding: '5px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px', filter: 'grayscale(100%)' }}>{page.icon}</span>
              {page.name}
            </Link>
            <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }} /> {/* Lighter Separator */}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;