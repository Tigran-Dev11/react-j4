import React from 'react';
import * as S from './styled';
import { NavLink } from 'react-router-dom';
import Button from '../../commons/button'; // Убедитесь, что путь к Button правильный

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>GARRENT</S.Logo>
      <S.Navbar>
        <NavLink to="/">Home</NavLink> {/* Изменено с /home на / */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </S.Navbar>
      <S.AuthButtons>
        <Button title='Login' />
        <Button title='Sign Up' />
      </S.AuthButtons>
    </S.HeaderContainer>
  );
};

export default Header;
