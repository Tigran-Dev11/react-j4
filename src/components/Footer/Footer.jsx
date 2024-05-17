import React from 'react';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <h3>About GARRENT</h3>
          <p>We specialize in offering luxury rental cars at affordable prices. Our collection includes BMWs, Mercedes Benz, and many more!</p>
        </S.FooterSection>
        <S.FooterSection>
          <h3>Contact Us</h3>
          <p>Feel free to call us: +1234567890</p>
          <p>Email: contact@garrent.com</p>
        </S.FooterSection>
        <S.FooterSection>
          <h3>Follow Us</h3>
        </S.FooterSection>
      </S.FooterContent>
      <S.FooterBottom>
        <p>© 2024 GARRENT. All rights reserved.</p>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
