import React from 'react';
import * as S from './Footer.styled';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <h3>{t('footer.about')}</h3>
          <p>{t('footer.description')}</p>
        </S.FooterSection>
        <S.FooterSection>
          <h3>{t('footer.contactUs')}</h3>
          <p>{t('footer.callUs')}</p>
          <p>{t('footer.email')}</p>
        </S.FooterSection>
        <S.FooterSection>
          <h3>{t('footer.followUs')}</h3>
        </S.FooterSection>
      </S.FooterContent>
      <S.FooterBottom>
        <p>{t('footer.copyright')}</p>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
