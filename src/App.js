import React, { useState } from 'react';
import faker from 'faker';
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

  const nounsCount = () => words.reduce((acc, word) => {
    if (word.type === 'noun') {
      acc++;
    }
    return acc;
  }, 0)

  const adjectiveCount = () => words.reduce((acc, word) => {
    if (word.type === 'adjective') {
      acc++;
    }
    return acc;
  }, 0)
  
  return (
    <div className="App">
      <div className="stats">
        <h2>We Have {words.length} Words</h2>
        <p>We have {nounsCount()} nouns and {adjectiveCount()} adjectives</p>
      </div>
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
