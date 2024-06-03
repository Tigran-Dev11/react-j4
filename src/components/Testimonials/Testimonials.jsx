import React from 'react';
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const Testimonials = () => {
  const { t } = useTranslation(); 
  const testimonials = [
    { 
      author: t('testimonials.kristinWatson.name'), 
      quote: t('testimonials.kristinWatson.quote') 
    },
    { 
      author: t('testimonials.robertFox.name'), 
      quote: t('testimonials.robertFox.quote') 
    }
  ];

  return (
    <S.Testimonials>
      <S.Title>{t('testimonials.title')}</S.Title>
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
