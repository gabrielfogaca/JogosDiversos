// src/sudoku/SudokuCell.jsx
import React from 'react';
import './SudokuCell.css';

const SudokuCell = ({
  value,
  isInitial,
  onChange,
  row,
  col,
  onClick,
  isSelected,
  isError,
}) => {
  // Não precisamos mais de handleChange aqui, pois o NumberSelector vai preencher
  // Mas mantemos a estrutura para futuros usos ou para permitir digitação direta se desejar.
  const handleChange = (e) => {
    const inputVal = e.target.value;
    const num = parseInt(inputVal, 10);
    if (!isNaN(num) && num >= 1 && num <= 9) {
      onChange(num); // Passa apenas o número
    } else if (inputVal === '') {
      onChange(0); // Define como 0 para célula vazia
    }
  };

  const cellClasses = [
    'sudoku-cell',
    isInitial ? 'initial' : '',
    isSelected ? 'selected' : '', // Nova classe para célula selecionada
    isError ? 'error' : '', // Nova classe para células com erro
  ]
    .join(' ')
    .trim();

  return (
    <input
      type="text"
      className={cellClasses}
      value={value === 0 ? '' : value}
      onChange={handleChange} // Mantido para permitir digitação, mas o foco principal é o NumberSelector
      onClick={onClick} // Adiciona o evento de clique para selecionar a célula
      readOnly={isInitial} // Células iniciais são apenas leitura
      maxLength="1"
    />
  );
};

export default SudokuCell;
