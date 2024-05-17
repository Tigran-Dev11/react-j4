// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About GARRENT</h3>
          <p>We specialize in offering luxury rental cars at affordable prices. Our collection includes BMWs, Mercedes Benz, and many more!</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Feel free to call us: +1234567890</p>
          <p>Email: contact@garrent.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          {/* Social media icons would go here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 GARRENT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
