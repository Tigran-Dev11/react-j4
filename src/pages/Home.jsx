import React from 'react';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import FeaturedCars from '../components/FeaturedCars/FeaturedCars';
import PremiumServices from '../components/PremiumServices/PremiumServices';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <FeaturedCars />
      <PremiumServices />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
