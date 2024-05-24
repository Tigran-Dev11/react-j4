import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormContainer, Input, Button } from './BookingFormStyles';

const schema = yup.object({
  pickupLocation: yup.string().required('Pickup location is required'),
  pickupDate: yup.date().required('Pickup date is required').nullable(),
  returnDate: yup.date().required('Return date is required').nullable(),
  carType: yup.string().required('Car type is required'),
  pickupTime: yup.string().required('Pickup time is required'),
  returnTime: yup.string().required('Return time is required'),
});

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('pickupLocation')}
        placeholder="Pickup Location"
      />
      <p>{errors.pickupLocation?.message}</p>

      <Input
        type="date"
        {...register('pickupDate')}
      />
      <p>{errors.pickupDate?.message}</p>

      <Input
        type="date"
        {...register('returnDate')}
      />
      <p>{errors.returnDate?.message}</p>

      <Input
        {...register('carType')}
        placeholder="Car Type"
      />
      <p>{errors.carType?.message}</p>

      <Input
        type="time"
        {...register('pickupTime')}
      />
      <p>{errors.pickupTime?.message}</p>

      <Input
        type="time"
        {...register('returnTime')}
      />
      <p>{errors.returnTime?.message}</p>

      <Button type="submit">Book Now</Button>
    </FormContainer>
  );
};

export default BookingForm;
