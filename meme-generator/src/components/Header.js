import React from 'react'
import logo from '../images/troll-face.png';

function Header() {
  return (
    <header>
      <img src={logo}/>
      <h2>Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
}

export default Header;
