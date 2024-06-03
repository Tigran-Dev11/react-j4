import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const MainContent = () => {
  const { t } = useTranslation(); 

  return (
    <S.ContentContainer>
      <S.TextSection>
        <h1>{t('MainContent.enjoyLife')}</h1>
        <p>{t('MainContent.carentReady')}</p>
        <S.ExploreButton>{t('MainContent.exploreNow')}</S.ExploreButton>
      </S.TextSection>
      <S.ImageSection />
    </S.ContentContainer>
  );
};

export default MainContent;
