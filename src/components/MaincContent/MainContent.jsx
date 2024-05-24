import React from 'react';
import * as S from './styled';

const MainContent = () => {
  return (
    <S.ContentContainer>
      <S.TextSection>
        <h1>Enjoy your life with our comfortable cars.</h1>
        <p>Carent is ready to serve the best experience in car rental.</p>
        <S.ExploreButton>Explore Now</S.ExploreButton>
      </S.TextSection>
      <S.ImageSection />
    </S.ContentContainer>
  );
};

export default MainContent;
