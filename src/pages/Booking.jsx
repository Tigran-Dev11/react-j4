import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
//import BookingForm from '../components/BookingForm/BookingForm';

const Booking = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Book Your Car</h1>
        <p>Reserve your vehicle quickly and easily with our online booking system.</p>
        {/* <BookingForm /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
