// src/components/Dueto/GuessRow.jsx
import React from 'react';
import './guessrow.css'; // Importe o CSS para este componente

const GuessRow = ({ guess, solutionFeedback, isCurrentGuess }) => {
  const letters = Array(5).fill(''); // WORD_LENGTH = 5

  if (guess) {
    for (let i = 0; i < guess.length; i++) {
      letters[i] = guess[i];
    }
  }

  return (
    <div className={`guess-row ${isCurrentGuess ? 'current-guess' : ''}`}>
      {letters.map((letter, index) => {
        const status = solutionFeedback ? solutionFeedback[index] : '';
        return (
          <div key={index} className={`letter-box ${status}`}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default GuessRow;
