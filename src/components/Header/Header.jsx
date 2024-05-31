import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const Header = () => {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <S.HeaderContainer>
      <S.Logo>GARRENT</S.Logo>
      <S.Navbar>
        <NavLink to="/">{t('menu.home')}</NavLink>
        <NavLink to="/about">{t('menu.about')}</NavLink>
        <NavLink to="/booking">{t('menu.booking')}</NavLink>
        <NavLink to="/cars">{t('menu.cars')}</NavLink>
        <NavLink to="/contacts">{t('menu.contacts')}</NavLink>
      </S.Navbar>
      <S.AuthButtons>
        <NavLink to="/login" className='btn'>{t('auth.login')}</NavLink>
        <NavLink to="/register" className='btn'>{t('auth.signup')}</NavLink>
      </S.AuthButtons>
      <div>
        <select onChange={changeLanguage}>
          <option value="en">EN</option>
          <option value="hy">HY</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;