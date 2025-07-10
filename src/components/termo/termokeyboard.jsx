// src/termo/TermoKeyboard.jsx
import React from 'react';
import './termokeyboard.css';

const keyboardLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
];

const TermoKeyboard = ({ onKeyPress, letterStates }) => {
  const getButtonClass = (key) => {
    // letterStates seria um objeto como { 'A': 'green', 'B': 'yellow', 'C': 'gray' }
    const state = letterStates[key.toUpperCase()];
    return state ? `key-button ${state}` : 'key-button';
  };

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={getButtonClass(key)}
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TermoKeyboard;
