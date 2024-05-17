// FeaturedCars.jsx
import React from 'react';
import './FeaturedCars.css';

const FeaturedCars = () => {
  const cars = [
    { name: 'BMW', price: 100, seats: 5 },
    { name: 'Audi', price: 90, seats: 5 },
    { name: 'Mercedes', price: 120, seats: 5 }
  ];

  return (
    <div className="featured-cars">
      <h2>Our Featured Cars</h2>
      <div className="cars-list">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <h3>{car.name}</h3>
            <p>${car.price} / Day</p>
            <p>{car.seats} Seats</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
