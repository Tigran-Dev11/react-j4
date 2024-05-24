import React from 'react';
import * as S from './styled';

const Testimonials = () => {
  const testimonials = [
    {
      author: "Kristin Watson",
      quote: "I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them."
      
    },
    {
      quote: "During my last trip, I used a Carent sport car . The car was completely clean and had enough gas.!",
      author: "Robert Fox"
    }
  ];

  return (
    <S.Testimonials>
      <S.Title>What Our Clients Say?</S.Title>
      <S.TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <S.Testimonial key={index}>
            <S.Quote>"{testimonial.quote}"</S.Quote>
            <S.Author>- {testimonial.author}</S.Author>
          </S.Testimonial>
        ))}
      </S.TestimonialsContainer>
    </S.Testimonials>
  );
};

export default Testimonials;
