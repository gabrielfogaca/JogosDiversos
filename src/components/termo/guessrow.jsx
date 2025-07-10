// src/termo/GuessRow.jsx
import React from 'react';
import LetterCell from './lettercell';
import { WORD_LENGTH } from './termowords'; // Importe o comprimento da palavra

import './guessrow.css'; // Crie este CSS para o layout da linha

const GuessRow = ({ guess, solutionFeedback, isCurrentGuess }) => {
  const cells = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = guess[i] || ''; // Pega a letra ou string vazia
    const color = solutionFeedback
      ? solutionFeedback[i]
      : letter
      ? 'typed'
      : 'empty';
    cells.push(<LetterCell key={i} letter={letter} color={color} />);
  }

  return (
    <div className={`guess-row ${isCurrentGuess ? 'current' : ''}`}>
      {cells}
    </div>
  );
};

export default GuessRow;
