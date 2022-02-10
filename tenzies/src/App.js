import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid';


function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
      numberArray.push(generateNewDie());
    }
    return numberArray;
  }

  function generateNewDie() {
    return {
        value: Math.floor((Math.random()) * 6) + 1,
        isHeld: false,
        id: nanoid(),
    }
  }

  function holdDice(id) {
    setDice((oldDice) => oldDice.map(die => {
        return die.id === id 
          ? {...die, isHeld: !die.isHeld}
          : die
      })
    )
  }

  const diceElements = dice.map(item => {
    return (
      <Die value={item.value} key={item.id} isHeld={item.isHeld} holdDice={() => holdDice(item.id)}/>
    )
  })

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld === false 
        ? generateNewDie()
        : die
    }))
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-dice">Roll!</button>
    </main>
  );
}

export default App;
