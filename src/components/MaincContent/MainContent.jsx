import React from 'react';
import { ContentContainer, TextSection, ImageSection, ExploreButton } from './styled';

const MainContent = () => {
  return (
    <ContentContainer>
      <TextSection>
        <h1>Enjoy your life with our comfortable cars.</h1>
        <p>Carent is ready to serve the best experience in car rental.</p>
        <ExploreButton>Explore Now</ExploreButton>
      </TextSection>
      <ImageSection />
    </ContentContainer>
  );
};

export default MainContent;
