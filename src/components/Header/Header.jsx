import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>GARRENT</S.Logo>
      <S.Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </S.Navbar>
      <S.AuthButtons>
        <NavLink to="/login" className='btn'>Login</NavLink>
        <NavLink to="/register" className='btn'>Sign Up</NavLink>
      </S.AuthButtons>
    </S.HeaderContainer>
  );
};

export default Header;
