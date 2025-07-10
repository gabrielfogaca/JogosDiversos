import React from 'react';
import './numberselector.css';

const NumberSelector = ({
  onSelectNumber,
  board,
  selectedCell,
  initialBoardState,
}) => {
  const numbers = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Verifica se uma linha/coluna/bloco está completa para um dado número
  const isNumberComplete = (num) => {
    if (!selectedCell) return false; // Se nenhuma célula selecionada, não oculta números

    const [selectedRow, selectedCol] = selectedCell;

    // Se a célula selecionada é uma célula inicial, não ocultamos números baseados nela
    // ou se a célula inicial já tem o número, ele não deveria ser oculto pelo seletor
    if (initialBoardState[selectedRow][selectedCol] === num) return false;

    // Lógica para verificar se o número já preenche completamente a linha, coluna ou bloco
    let rowContainsNum = false;
    for (let c = 0; c < 9; c++) {
      if (board[selectedRow][c] === num) {
        rowContainsNum = true;
        break;
      }
    }
    if (rowContainsNum) {
      // Se o número já está na linha
      const fullRow = board[selectedRow].every((cell) => cell !== 0); // E a linha está cheia
      if (fullRow) return true;
    }

    let colContainsNum = false;
    for (let r = 0; r < 9; r++) {
      if (board[r][selectedCol] === num) {
        colContainsNum = true;
        break;
      }
    }
    if (colContainsNum) {
      // Se o número já está na coluna
      const fullCol = board.every((row) => row[selectedCol] !== 0); // E a coluna está cheia
      if (fullCol) return true;
    }

    const startRow = Math.floor(selectedRow / 3) * 3;
    const startCol = Math.floor(selectedCol / 3) * 3;
    let blockContainsNum = false;
    let blockIsFull = true;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[startRow + r][startCol + c] === num) {
          blockContainsNum = true;
        }
        if (board[startRow + r][startCol + c] === 0) {
          blockIsFull = false;
        }
      }
    }
    if (blockContainsNum && blockIsFull) return true;

    return false;
  };

  return (
    <div className="number-selector">
      {numbers.map((num) => (
        <button
          key={num}
          onClick={() => onSelectNumber(num)}
          className={isNumberComplete(num) ? 'hidden-number' : ''}
          disabled={!selectedCell || isNumberComplete(num)} // Desabilita se não há célula selecionada ou se o número é "completo"
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumberSelector;
