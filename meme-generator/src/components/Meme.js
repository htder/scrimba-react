import React from 'react';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg";
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: allMemeImages[randomNumber].url
      })
    );
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
            onClick={getMemeImage}
        >
            Get a new meme image
        </button>
      </div>
      <div>
        <img src={meme.randomImage} className="meme--image"/>
      </div>
    </main>
  );
}

export default Meme;
