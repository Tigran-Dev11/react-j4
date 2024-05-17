// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GARRENT</div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#booking">Booking</a>
        <a href="#cars">Cars</a>
        <a href="#contacts">Contacts</a>
      </nav>
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn sign-up">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
