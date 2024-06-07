import React from "react";
import Header from "../components/Header/Header";
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import PremiumServices from "../components/PremiumServices/PremiumServices";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import AboutUs from '../components/AboutUs/AboutUs';
import MainContent from "../components/MaincContent/MainContent";
import BookingForm from "../components/BookingForm/BookingForm";
const Home = () => {
  return (
    <div>
      <MainContent />
      <AboutUs />
      <BookingForm />
      <FeaturedCars />
      <PremiumServices />
      <Testimonials />
      
    </div>
  );
};

export default Home;
