// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ navigateTo, currentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" onClick={() => navigateTo('home')} style={{ fontFamily: "'Playfair Display', serif", color: '#2D1810' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 4C6 2.895 6.895 2 8 2H24C25.105 2 26 2.895 26 4V28C26 29.105 25.105 30 24 30H8C6.895 30 6 29.105 6 28V4Z" fill="#A67C52" opacity="0.2"/>
            <path d="M8 2C6.895 2 6 2.895 6 4V28C6 29.105 6.895 30 8 30H24C25.105 30 26 29.105 26 28V4C26 2.895 25.105 2 24 2H8Z" stroke="#A67C52" strokeWidth="2"/>
            <path d="M10 8H22M10 12H22M10 16H18" stroke="#A67C52" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="22" r="3" stroke="#A67C52" strokeWidth="2"/>
          </svg>
          BookLoop
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {['Home', 'Explore', 'Exchange', 'Sell', 'Profile'].map((item) => (
              <li className="nav-item" key={item}>
                <a className={`nav-link ${currentPage === item.toLowerCase() ? 'active fw-bold' : ''}`} 
                   style={{color: '#4A3528'}} 
                   href="#" 
                   onClick={(e) => { e.preventDefault(); navigateTo(item.toLowerCase()); }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-custom-secondary btn-sm rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <button className="btn btn-custom-primary btn-sm rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</button>
          </div>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;