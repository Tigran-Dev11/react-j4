import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      author: "Kristin Watson",
      quote: "I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them."
      
    },
    {
      quote: "I love their collection! Every time I visit them they have new additions which makes me come back again & again!",
      author: "Stephen Lim"
    }
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
