import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, Navbar, AuthButtons } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>GARRENT</Logo>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Navbar>
      <AuthButtons>
        <button className='btn'>Login</button>
        <button className='btn'>Sign Up</button>
      </AuthButtons>
    </HeaderContainer>
  );
};

export default Header;
