import React from 'react';
import './App.css';
import Die from './Die';


function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
      numberArray.push(Math.floor((Math.random()) * 6) + 1);
    }
    return numberArray;
  }

  const diceElements = dice.map((item, index) => {
    return (
      <Die value={item} key={index}/>
    )
  })

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-dice">Roll!</button>
    </main>
  );
}

export default App;
