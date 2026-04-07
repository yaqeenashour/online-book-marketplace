// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{backgroundColor: '#2D1810', color: '#C9A87C'}}>
      <div className="container">
        <div className="row g-4">
          {/* Col 1: Brand */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 4C6 2.895 6.895 2 8 2H24C25.105 2 26 2.895 26 4V28C26 29.105 25.105 30 24 30H8C6.895 30 6 29.105 6 28V4Z" fill="currentColor" opacity="0.2"/>
                <path d="M8 2C6.895 2 6 2.895 6 4V28C6 29.105 6.895 30 8 30H24C25.105 30 26 29.105 26 28V4C26 2.895 25.105 2 24 2H8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8H22M10 12H22M10 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="h5 mb-0" style={{fontFamily: "'Playfair Display', serif", color: '#F5EFE6'}}>BookLoop</span>
            </div>
            <p className="small opacity-75">Connecting book lovers worldwide. Buy, sell, and exchange books with ease.</p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-6 col-md-2">
            <h6 style={{color: '#F5EFE6'}}>Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Home</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Explore</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Exchange</a></li>
              <li><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Sell Books</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="col-6 col-md-2">
            <h6 style={{color: '#F5EFE6'}}>Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>FAQs</a></li>
              <li><a href="#" className="text-decoration-none" style={{color: '#C9A87C'}}>Community Guidelines</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="col-md-4">
            <h6 style={{color: '#F5EFE6'}}>Stay Connected</h6>
            <p className="small opacity-75 mb-2">Subscribe to our newsletter for book recommendations and deals.</p>
            <div className="input-group">
              <input type="email" className="form-control form-control-sm" placeholder="Your email" style={{backgroundColor: '#4A3528', borderColor: '#7A6455', color: '#F5EFE6'}} />
              <button className="btn btn-custom-primary btn-sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-top mt-4 pt-4 text-center small opacity-50" style={{borderColor: '#4A3528 !important'}}>
          2024 BookLoop. All rights reserved. Made with love for book lovers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;