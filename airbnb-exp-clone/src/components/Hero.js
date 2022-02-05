import React from 'react'
import hero from '../images/photo-grid.png';

function Hero() {
  return (
    <section className="hero">
      <img src={hero} className="hero--image"/>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activies led by one-of-a-kind hosts-all without leaving home</p>
      </div>
    </section>
      
  );
}

export default Hero;
