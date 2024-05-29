import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Cars from "../pages/Cars";
import Contacts from "../pages/Contacts";
import LoginPage from "../pages/LoginPage"; 
import RegisterPage from "../pages/RegisterPage"; 
import React from "react";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register" element={<RegisterPage />} /> 
    </Routes>
  );
};