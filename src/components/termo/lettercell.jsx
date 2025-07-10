// src/termo/LetterCell.jsx
import React from 'react';
import './LetterCell.css'; // Crie este CSS para as cores

const LetterCell = ({ letter, color }) => {
  return <div className={`letter-cell ${color}`}>{letter}</div>;
};

export default LetterCell;
