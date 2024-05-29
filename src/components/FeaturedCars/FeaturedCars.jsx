import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styled';
import img1 from '../../assets/car-jeep.png';
import img2 from '../../assets/car-ferrari.png';
import img3 from '../../assets/car-mini.png';

const FeaturedCars = () => {
  const navigate = useNavigate(); 
  const cars = [
    {
      name: 'Jeep XD',
      seats: 5,
      fuelType: 'Gasoline',
      type: 'SUV',
      rate: 200,
      image: img1
    },
    {
      name: 'Ferrari Enzo',
      seats: 2,
      fuelType: 'Electric',
      type: 'Sedan',
      rate: 340,
      image: img2
    },
    {
      name: 'Fiat Coupe',
      seats: 4,
      fuelType: 'Gasoline',
      type: 'Mini coupe',
      rate: 167,
      image: img3
    }
  ];

  const handleBookNowClick = () => {
    navigate('/login'); 
  };

  return (
    <S.CarsContainer>
      {cars.map((car, index) => (
        <S.CarCard key={index}>
          <S.CarImage src={car.image} alt={car.name} />
          <S.CarDetails>
            <h3>{car.name}</h3>
            <p>{car.seats} seats</p>
            <p>{car.fuelType}</p>
            <p>{car.type}</p>
            <p>Daily rate from: ${car.rate}</p>
            <S.BookButton onClick={handleBookNowClick}>Book Now</S.BookButton>
          </S.CarDetails>
        </S.CarCard>
      ))}
    </S.CarsContainer>
  );
};

export default FeaturedCars;
