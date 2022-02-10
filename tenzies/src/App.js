import React from 'react';
import './App.css';
import Die from './Die';


function App() {

  function allNewDice() {
    const numberArray = [];
    for (let i = 0; i < 10; i++) {
      numberArray.push(Math.floor((Math.random()) * 6) + 1);
    }
    return numberArray;
  }

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;
