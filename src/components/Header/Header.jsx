
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const Header = () => {
  const { t } = useTranslation(); 

  return (
    <S.HeaderContainer>
      <S.Logo>GARRENT</S.Logo>
      <S.Navbar>
        <NavLink to="/">{t('home')}</NavLink> 
        <NavLink to="/about">{t('about')}</NavLink>
        <NavLink to="/booking">{t('booking')}</NavLink>
        <NavLink to="/cars">{t('cars')}</NavLink>
        <NavLink to="/contacts">{t('contacts')}</NavLink>
      </S.Navbar>
      <S.AuthButtons>
        <NavLink to="/login" className='btn'>{t('login')}</NavLink>
        <NavLink to="/register" className='btn'>{t('signup')}</NavLink>
      </S.AuthButtons>
    </S.HeaderContainer>
  );
};

export default Header;
