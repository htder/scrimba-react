import React from 'react'
import hero from '../images/photo-grid.png';

function Hero() {
  return (
    <div className="hero">
      <img src={hero} className="hero--image"/>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activies led by one-of-a-kind hosts-all without leaving home</p>
      </div>
    </div>
      
  );
}

export default Hero;
