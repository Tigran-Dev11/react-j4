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
        <NavLink to="/">{t('Home')}</NavLink>
        <NavLink to="/about">{t('About')}</NavLink>
        <NavLink to="/booking">{t('Booking')}</NavLink>
        <NavLink to="/cars">{t('Cars')}</NavLink>
        <NavLink to="/contacts">{t('Contacts')}</NavLink>
      </S.Navbar>
      <S.AuthButtons>
        <NavLink to="/login" className='btn'>{t('Login')}</NavLink>
        <NavLink to="/register" className='btn'>{t('Signup')}</NavLink>
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
