import React from 'react'
import star from '../images/star.png';

function Card(props) {
  return (
    <section className="card">
      <img src={`../images${props.img}`} className="card--image"/>
      <div className="card--stats">
        <img src={star} className="card--star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </section>
  );
}

export default Card;
