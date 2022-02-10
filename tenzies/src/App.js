import React from 'react';
import './App.css';
import Die from './Die';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("you won!")
    }
  }, [dice])

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
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
    } else {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld === false 
          ? generateNewDie()
          : die
      }))
    }
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll!"}</button>
    </main>
  );
}

export default App;
