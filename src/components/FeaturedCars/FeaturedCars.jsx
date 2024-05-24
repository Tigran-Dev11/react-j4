
import React from 'react';
import { CarsContainer, CarCard, CarImage, CarDetails, BookButton } from './styled';

const FeaturedCars = () => {
  const cars = [
    {
      name: 'Jeep XD',
      seats: 5,
      fuelType: 'Gasoline',
      type: 'SUV',
      rate: 200,
      image: 'jeep.png'
    },
    {
      name: 'Ferrari Enzo',
      seats: 2,
      fuelType: 'Electric',
      type: 'Sedan',
      rate: 340,
      image: 'ferrari.png'
    },
    {
      name: 'Fiat Coupe',
      seats: 4,
      fuelType: 'Gasoline',
      type: 'Mini coupe',
      rate: 167,
      image: 'mini.png'
    }
  ];

  return (
    <CarsContainer>
      {cars.map((car, index) => (
        <CarCard key={index}>
          <CarImage carImage={`/assets/${car.image}`} />
          <CarDetails>
            <h3>{car.name}</h3>
            <p>{car.seats} seats</p>
            <p>{car.fuelType}</p>
            <p>{car.type}</p>
            <p>Daily rate from: ${car.rate}</p>
            <BookButton>Book Now</BookButton>
          </CarDetails>
        </CarCard>
      ))}
    </CarsContainer>
  );
};

export default FeaturedCars;
