import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const AboutUs = () => {
  const { t } = useTranslation(); 

  return (
    <S.AboutContainer>
      <S.TextBlock>
        <h1>{t('aboutUs')}</h1>
        <p>{t('aboutUsDescription')}</p>
        <S.ReadMoreButton>{t('readMore')}</S.ReadMoreButton>
      </S.TextBlock>
      <S.CarImage />
    </S.AboutContainer>
  );
};

export default AboutUs;
