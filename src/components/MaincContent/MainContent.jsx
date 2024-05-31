import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const MainContent = () => {
  const { t } = useTranslation(); 

  return (
    <S.ContentContainer>
      <S.TextSection>
        <h1>{t('enjoyLife')}</h1>
        <p>{t('carentReady')}</p>
        <S.ExploreButton>{t('exploreNow')}</S.ExploreButton>
      </S.TextSection>
      <S.ImageSection />
    </S.ContentContainer>
  );
};

export default MainContent;
