// PremiumServices.jsx
import React from 'react';
import {
  ServicesSection,
  Title,
  Subtitle,
  ServiceContainer,
  ServiceBox,
  ServiceTitle,
  ServiceDescription
} from './styled'; 

const PremiumServices = () => {
  const services = [
    { title: '24 Hours Support', description: 'We support you all hours of the day.' },
    { title: 'Qualified Assurance', description: 'All cars have a valid insurance.' },
    { title: 'GPS on Cars', description: 'All cars are equipped with GPS navigation system.' }
  ];

  return (
    <ServicesSection>
      <Title>Our Premium Services</Title>
      <Subtitle>Carent is a reputable car rental company that offers a wide range of useful services for every taste.</Subtitle>
      <ServiceContainer>
        {services.map((service, index) => (
          <ServiceBox key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceBox>
        ))}
      </ServiceContainer>
    </ServicesSection>
  );
};

export default PremiumServices;
