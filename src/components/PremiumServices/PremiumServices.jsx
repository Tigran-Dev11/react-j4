import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const PremiumServices = () => {
  const { t } = useTranslation(); 
  const services = [
    { title: t('premiumServices.services.24HoursSupport.title'), description: t('premiumServices.services.24HoursSupport.description') },
    { title: t('premiumServices.services.qualifiedAssurance.title'), description: t('premiumServices.services.qualifiedAssurance.description') },
    { title: t('premiumServices.services.gpsOnCars.title'), description: t('premiumServices.services.gpsOnCars.description') }
  ];

  return (
    <S.ServicesSection>
      <S.Title>{t('premiumServices.title')}</S.Title>
      <S.Subtitle>{t('premiumServices.servicesDescription')}</S.Subtitle>
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
