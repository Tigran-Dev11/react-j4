// Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "It’s always a pleasure renting from GARRENT! Their fleet is fantastic & service is excellent!",
      author: "Habib Marwan"
    },
    {
      quote: "I love their collection! Every time I visit them they have new additions which makes me come back again & again!",
      author: "Stephen Lim"
    }
    // Добавьте дополнительные отзывы здесь
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say?</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
