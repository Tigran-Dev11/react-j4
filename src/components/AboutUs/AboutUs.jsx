import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const AboutUs = () => {
  const { t } = useTranslation(); 

  return (
    <S.AboutContainer>
      <S.TextBlock>
        <h1>{t('aboutus.aboutUs')}</h1>
        <p>{t('aboutus.aboutUsDescription')}</p>
        <S.ReadMoreButton>{t('aboutus.readMore')}</S.ReadMoreButton>
      </S.TextBlock>
      <S.CarImage />
    </S.AboutContainer>
  );
};

export default AboutUs;
