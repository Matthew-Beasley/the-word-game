import React from 'react';

const Words = ({ words }) => {
    return(
    <div className="words">
        {words.map((word, idx) => {
            return <div className="word-box" key={idx}>{word.text} ({word.type})</div>
        })}
        </div>
    )
}

export default Words;