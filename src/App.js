import React, { useState } from 'react';
import faker from 'faker';
import Stats from './Stats';
import './App.css';


const generateWord = (type) => {
  const method = type === 'noun' ? faker.company.bsNoun : faker.company.bsAdjective;
  return {
    type,
    text: method()
  };
};


function App() {

  const [words, setWords] = useState([]);

  const addWord = (type) => {
    const updated = [...words, generateWord(type)];
    console.log(updated);
    setWords(updated);
  }
  
  return (
    <div className="App">
      <Stats words={words}/>
      <div className="main">
        <button onClick={() => addWord('noun')}>Add Noun</button>
        <button onClick={() => addWord('adjective')}>Add Adjective</button>
      </div>
      <div className="words">
        {words.map((word, idx) => {
          return <div className="word-box" key={idx}>{word.text} ({word.type})</div>
        })}
      </div>
    </div>
  );
}

export default App;
