import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchMenu = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Me', path: '/contact' },
  ];

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1999, 
        }}
        onClick={() => setIsOpen(false)} 
      ></div>
      <div
        style={{
          position: 'fixed',
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
          padding: '2rem', 
          borderRadius: '0.75rem', 
          zIndex: 2000,
          width: '90%', 
          maxWidth: '600px', 
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              marginBottom: '1rem',
              borderRadius: '0.5rem', 
              border: 'none',
              fontSize: '1.2rem',
              backgroundColor: '#333',
              color: 'white',
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              position: 'absolute',
              left: '1rem',
              color: '#bbb',
              width: '1.5rem',
              height: '1.5rem',
            }}
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      <ul>
        {filteredPages.map((page) => (
          <li key={page.name}>
            <Link
              to={page.path}
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
  
};

export default SearchMenu;
