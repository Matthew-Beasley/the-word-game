import React from 'react';

const Stats = ({ words }) => {

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
        <div className="stats">
            <h2>We Have {words.length} Words</h2>
            <p>We have {nounsCount()} nouns and {adjectiveCount()} adjectives</p>
        </div >
    )
}

export default Stats;