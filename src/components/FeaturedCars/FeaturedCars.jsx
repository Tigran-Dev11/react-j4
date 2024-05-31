import React from 'react';
import * as S from './styled';
import img1 from '../../assets/car-jeep.png'
import img2 from '../../assets/car-ferrari.png'
import img3 from '../../assets/car-mini.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const FeaturedCars = () => {
  const navigate  = useNavigate()
  const { t } = useTranslation(); 
  const cars = [
    {
      name: t('cars.jeepXD'),
      seats: 5,
      fuelType: t('fuelTypes.gasoline'),
      type: t('carTypes.suv'),
      rate: 200,
      image:  img1
    },
    {
      name: t('cars.ferrariEnzo'),
      seats: 2,
      fuelType: t('fuelTypes.electric'),
      type: t('carTypes.sedan'),
      rate: 340,
      image: img2
    },
    {
      name: t('cars.fiatCoupe'),
      seats: 4,
      fuelType: t('fuelTypes.gasoline'),
      type: t('carTypes.miniCoupe'),
      rate: 167,
      image: img3
    }
    
  ];


  const booking = ()=>{
    navigate('/login')
  }

  return (
    <S.CarsContainer>
      {cars.map((car, index) => (
        <S.CarCard key={index}>
          <S.CarImage carImage={car.image} />
          <S.CarDetails>
            <h3>{car.name}</h3>
            <p>{car.seats} {t('seats')}</p>
            <p>{t('fuelType')}: {car.fuelType}</p>
            <p>{t('type')}: {car.type}</p>
            <p>{t('dailyRate')}: ${car.rate}</p>
            <S.BookButton onClick={booking}>{t('bookNow')}</S.BookButton>
          </S.CarDetails>
        </S.CarCard>
      ))}
    </S.CarsContainer>
  );
};

export default FeaturedCars;
