import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="head-menu">
                <div className="logo">
                    CARENT
                </div>
                <div className="menu">
                    <div className="menu-items">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/booking">Booking</a>
                        <a href="/cars">Cars</a>
                        <a href="/contacts">Contacts</a>
                    </div>
                    <div className="auth-buttons">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
