import React from 'react';

function Die(props) {
  const styles = {
    backgroundColor: "#59E391",
  }
  return (
    <div 
      className="die-face" 
      style={props.isHeld ? styles : {}} 
      onClick={props.holdDice}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  )
}

export default Die;
