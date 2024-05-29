import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styled';

const schema = yup.object({
  pickupLocation: yup.string().required('Pickup location is required'),
  pickupDate: yup.date().required('Pickup date is required').nullable(),
  returnDate: yup.date().required('Return date is required').nullable(),
  carType: yup.string().required('Car type is required'),
  pickupTime: yup.string().required('Pickup time is required'),
  returnTime: yup.string().required('Return time is required'),
});

const BookingForm = () => {
  const navigate = useNavigate(); 
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
        placeholder="Pickup Location"
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
        placeholder="Car Type"
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

      <S.Button type="submit">Book Now</S.Button>
    </S.FormContainer>
  );
};

export default BookingForm;
