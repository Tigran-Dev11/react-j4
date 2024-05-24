import React from 'react';
import * as S from './styled';

const AboutUs = () => {
  return (
    <S.AboutContainer>
      <S.TextBlock>
        <h1>About Us</h1>
        <p>We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance...</p>
        <S.ReadMoreButton>Read More</S.ReadMoreButton>
      </S.TextBlock>
      <S.CarImage />
    </S.AboutContainer>
  );
};

export default AboutUs;
