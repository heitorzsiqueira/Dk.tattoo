import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="header-nav">
      <div className="header-brand">
        DK<span className="brand-dot">.</span>TATTOO
      </div>
      
      <div className="header-links">
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="https://www.instagram.com/dk.tattoo7/" target="_blank" rel="noopener noreferrer" className="nav-link instagram-highlight">
          Instagram
        </a>
      </div>
    </nav>
  );
};

export default Header;