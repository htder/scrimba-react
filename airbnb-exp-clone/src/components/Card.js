import React from 'react'

function Card(props) {
  console.log(props);
  const value = props.item;
  let badgeText;
  if (value.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (value.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${value.coverImg}`} className="card--image"/>
      <div className="card--stats">
        <img src={"./images/star.png"} className="card--star"/>
        <span>{value.stats.rating}</span>
        <span className="grey">({value.stats.reviewCount})</span>
        <span className="grey">{value.location}</span>
      </div>
      <p className="card--title">{value.title}</p>
      <p className="card--price"><span className="bold">From ${value.price}</span> / person</p>
    </section>
  );
}

export default Card;
