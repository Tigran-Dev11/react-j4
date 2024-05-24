import React, { useState } from 'react';
import { FormContainer, Input, Button } from './BookingFormStyles';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    pickupTime: '',
    returnTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="pickupLocation"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onChange={handleChange}
      />
      <Input
        type="date"
        name="pickupDate"
        placeholder="Pickup Date"
        value={formData.pickupDate}
        onChange={handleChange}
      />
      <Button type="submit">Book Now</Button>
    </FormContainer>
  );
};

export default BookingForm;
