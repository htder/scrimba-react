import React from 'react';

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImages(memesArray[randomNumber].url);

  }
  return (
    <main>
      <div className="form">
        <input 
            type="text"
            className="form--input" 
            placeholder="Top text"
        />
        <input 
            type="text" 
            className="form--input" 
            placeholder="Bottom text"
        />
        <button 
            className="form--button"
        >
            Get a new meme image
        </button>
      </div>
      <div>
        <img src={memeImage} className="meme--image"/>
      </div>
    </main>
  );
}

export default Meme;
