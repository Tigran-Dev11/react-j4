import React from 'react';
import { AboutContainer, TextBlock, CarImage , ReadMoreButton } from './styled';


const AboutUs = () => {
  return (
    <AboutContainer>
      <TextBlock>
        <h1>About Us</h1>
        <p>We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance...</p>
        <ReadMoreButton>Read More</ReadMoreButton>
      </TextBlock>
      <CarImage />
    </AboutContainer>
  );
};

export default AboutUs;