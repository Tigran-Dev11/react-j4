import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styled';
import { useTranslation } from 'react-i18next'; 

const schema = yup.object({
  pickupLocation: yup.string().required(),
  pickupDate: yup.date().required().nullable(),
  returnDate: yup.date().required().nullable(),
  carType: yup.string().required(),
  pickupTime: yup.string().required(),
  returnTime: yup.string().required(),
});

const BookingForm = () => {
  const navigate = useNavigate(); 
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    navigate('/login'); 
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Input
        {...register('pickupLocation')}
        placeholder={t('pickupLocation')}
      />
      <p>{errors.pickupLocation?.message}</p>

      <S.Input
        type="date"
        {...register('pickupDate')}
      />
      <p>{errors.pickupDate?.message}</p>

      <S.Input
        type="date"
        {...register('returnDate')}
      />
      <p>{errors.returnDate?.message}</p>

      <S.Input
        {...register('carType')}
        placeholder={t('carType')}
      />
      <p>{errors.carType?.message}</p>

      <S.Input
        type="time"
        {...register('pickupTime')}
      />
      <p>{errors.pickupTime?.message}</p>

      <S.Input
        type="time"
        {...register('returnTime')}
      />
      <p>{errors.returnTime?.message}</p>

      <S.Button type="submit">{t('bookNow')}</S.Button>
    </S.FormContainer>
  );
};

export default BookingForm;
