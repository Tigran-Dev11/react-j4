import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
//import CarsList from '../components/CarsList/CarsList';

const Cars = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Our Cars</h1>
        <p>Explore our wide selection of vehicles and find your perfect match.</p>
        {/* <CarsList /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
