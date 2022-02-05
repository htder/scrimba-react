import React from 'react';
import logo from '../images/airbnb-logo.png';
import '../App.css';

function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo"/>
    </nav>
  );
}

export default Navbar;
