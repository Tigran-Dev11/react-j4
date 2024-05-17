// MainContent.jsx
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Enjoy your life with our comfortable cars.</h1>
      <p>Choose from our top models at reasonable costs & enjoy every moment spent together!</p>
      <button className="learn-more-btn">Learn More</button>
      {/* Здесь можно добавить изображение автомобиля или другой контент */}
    </div>
  );
};

export default MainContent;
