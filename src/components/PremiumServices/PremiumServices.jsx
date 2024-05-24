import React from 'react';
import * as S from './styled';

const PremiumServices = () => {
  const services = [
    { title: '24 Hours Support', description: 'We support you all hours of the day.' },
    { title: 'Qualified Assurance', description: 'All cars have a valid insurance.' },
    { title: 'GPS on Cars', description: 'All cars are equipped with GPS navigation system.' }
  ];

  return (
    <S.ServicesSection>
      <S.Title>Our Premium Services</S.Title>
      <S.Subtitle>Carent is a reputable car rental company that offers a wide range of useful services for every taste.</S.Subtitle>
      <S.ServiceContainer>
        {services.map((service, index) => (
          <S.ServiceBox key={index}>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.ServiceDescription>{service.description}</S.ServiceDescription>
          </S.ServiceBox>
        ))}
      </S.ServiceContainer>
    </S.ServicesSection>
  );
};

export default PremiumServices;
