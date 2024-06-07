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
      name: t('featuredCars.cars.jeepXD'),
      seats: 5,
      fuelType: t('featuredCars.fuelTypes.gasoline'),
      type: t('featuredCars.carTypes.suv'),
      rate: 200,
      image:  img1
    },
    {
      name: t('featuredCars.cars.ferrariEnzo'),
      seats: 2,
      fuelType: t('featuredCars.fuelTypes.electric'),
      type: t('featuredCars.carTypes.sedan'),
      rate: 340,
      image: img2
    },
    {
      name: t('featuredCars.cars.fiatCoupe'),
      seats: 4,
      fuelType: t('featuredCars.fuelTypes.gasoline'),
      type: t('featuredCars.carTypes.miniCoupe'),
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
            <p>{car.seats} {t('featuredCars.seats')}</p>
            <p>{t('featuredCars.fuelType')}: {car.fuelType}</p>
            <p>{t('featuredCars.type')}: {car.type}</p>
            <p>{t('featuredCars.dailyRate')}: ${car.rate}</p>
            <S.BookButton onClick={booking}>{t('featuredCars.bookNow')}</S.BookButton>
          </S.CarDetails>
        </S.CarCard>
      ))}
    </S.CarsContainer>
  );
};

export default FeaturedCars;
