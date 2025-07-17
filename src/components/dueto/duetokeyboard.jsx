// src/components/Dueto/TermoKeyboard.jsx
import React from 'react';
import './duetokeyboard.css';

const DuetoKeyboard = ({ onKeyPress, letterStates }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ];

  const getKeyClass = (key) => {
    // Para ENTER e ←, não há estado de letra
    if (key === 'ENTER' || key === '←') return '';
    return letterStates[key] || ''; // Retorna 'green', 'yellow', 'gray' ou vazio
  };

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={`key ${getKeyClass(key)} ${
                key === 'ENTER' || key === '←' ? 'big-key' : ''
              }`}
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

export default DuetoKeyboard;
