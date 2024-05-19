import React from 'react';
import './MainContent.css';

const MainContent = () => {
  const handleLearnMoreClick = () => {
    console.log('Learn more clicked!');
  };

  return (
    <div className="main-content">
      <h1>Enjoy your life with our comfortable cars.</h1>
      <p>Choose from our top models at reasonable costs & enjoy every moment spent together!</p>
      <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
    </div>
  );
};

export default MainContent;
