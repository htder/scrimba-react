import React from 'react';
import logo from '../logo.svg';

function Navbar() {
  return (
    <nav>
      <img src={logo} width="90px"/>
      <h2>ReactFacts</h2>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}

export default Navbar;
