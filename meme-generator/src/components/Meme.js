import React from 'react';

function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Top text"/>
        <input type="text" className="form--input" placeholder="Bottom text"/>
        <button type="submit" className="form--button">Get a new meme image</button>
      </form>
    </main>
  );
}

export default Meme;