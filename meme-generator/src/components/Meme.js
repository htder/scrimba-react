import React from 'react';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
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

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
            type="text"
            className="form--input" 
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            type="text" 
            className="form--input" 
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >
            Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 classname="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
