import React from 'react'

function Card(props) {
  return (
    <section className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={`./images/${props.img}`} className="card--image"/>
      <div className="card--stats">
        <img src={"./images/star.png"} className="card--star"/>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </section>
  );
}

export default Card;
