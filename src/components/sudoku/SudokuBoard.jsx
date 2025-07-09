// src/sudoku/SudokuBoard.jsx
import React, { useState, useEffect, useCallback } from 'react';
import SudokuCell from './SudokuCell';
import NumberSelector from './NumberSelector';
import {
  isValidMove,
  isBoardSolved,
  getInitialBoardFromAPI,
} from './sudokuLogic';
import './SudokuBoard.css';

const SudokuBoard = () => {
  const [currentDifficulty, setCurrentDifficulty] = useState('N/A');
  const [board, setBoard] = useState([]);
  const [initialBoardState, setInitialBoardState] = useState([]);
  const [solutionBoard, setSolutionBoard] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);

  const loadNewBoard = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage('');
    setSelectedCell(null);
    try {
      const { initialBoard, solutionBoard, difficulty } =
        await getInitialBoardFromAPI();
      setBoard(JSON.parse(JSON.stringify(initialBoard)));
      setInitialBoardState(JSON.parse(JSON.stringify(initialBoard)));
      setSolutionBoard(JSON.parse(JSON.stringify(solutionBoard)));
      setCurrentDifficulty(difficulty);
    } catch (err) {
      setError('Falha ao carregar o tabuleiro. Tente novamente.');
      console.error(err);
      setCurrentDifficulty('Erro');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewBoard();
  }, [loadNewBoard]);

  const handleCellClick = (row, col) => {
    if (initialBoardState[row][col] === 0) {
      setSelectedCell([row, col]);
    } else {
      setSelectedCell(null);
    }
  };

  const handleNumberSelect = (num) => {
    if (!selectedCell || loading) {
      return;
    }

    const [row, col] = selectedCell;

    if (initialBoardState[row][col] !== 0) {
      return;
    }

    const newBoard = board.map((arr) => arr.slice());
    newBoard[row][col] = num;

    setBoard(newBoard);
    setMessage('');
  };

  const handleCheckSolution = () => {
    if (isBoardSolved(board)) {
      setMessage('Parabéns! Você resolveu o Sudoku!');
    } else {
      setMessage('A solução atual está incorreta. Continue tentando!');
    }
  };

  const handleResetBoard = () => {
    setBoard(JSON.parse(JSON.stringify(initialBoardState)));
    setMessage('');
    setSelectedCell(null);
  };

  const handleNewGame = () => {
    loadNewBoard();
  };

  const handleShowSolution = () => {
    setBoard(JSON.parse(JSON.stringify(solutionBoard)));
    setMessage('Aqui está a solução!');
    setSelectedCell(null);
  };

  const handleDifficultyChange = (e) => {
    console.log('Dificuldade selecionada (UI apenas):', e.target.value);
  };

  if (loading) {
    return (
      <div className="sudoku-container">
        <h1>Sudoku Game</h1>
        <p>Carregando tabuleiro...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sudoku-container">
        <h1>Sudoku Game</h1>
        <p style={{ color: 'red' }}>Erro: {error}</p>
        <button onClick={handleNewGame}>Tentar Novamente</button>
      </div>
    );
  }

  return (
    <div className="sudoku-container">
      <h1>Sudoku Game</h1>
      <div className="difficulty-info">
        <p>
          Dificuldade do tabuleiro atual: <strong>{currentDifficulty}</strong>
        </p>
        {/* Remove the difficulty selector here as per previous discussion, it's not controlling API */}
      </div>
      <div className="game-area">
        {/* First Column: Game Controls */}
        <div className="game-controls">
          <button onClick={handleCheckSolution}>Verificar Solução</button>
          <button onClick={handleResetBoard}>Reiniciar</button>
          <button onClick={handleNewGame}>Novo Jogo</button>
          <button onClick={handleShowSolution}>Mostrar Solução</button>
        </div>

        {/* Second Column: Sudoku Board */}
        <div className="sudoku-board-wrapper">
          {' '}
          {/* New wrapper for centering the board */}
          <div className="sudoku-board">
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="sudoku-row">
                {row.map((cell, colIndex) => {
                  const isSelected =
                    selectedCell &&
                    selectedCell[0] === rowIndex &&
                    selectedCell[1] === colIndex;
                  const isError =
                    cell !== 0 &&
                    solutionBoard[rowIndex][colIndex] !== cell &&
                    initialBoardState[rowIndex][colIndex] === 0;

                  return (
                    <SudokuCell
                      key={`${rowIndex}-${colIndex}`}
                      value={cell}
                      isInitial={initialBoardState[rowIndex][colIndex] !== 0}
                      onChange={(val) =>
                        handleCellChange(rowIndex, colIndex, val)
                      }
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      row={rowIndex}
                      col={colIndex}
                      isSelected={isSelected}
                      isError={isError}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Third Column: Number Selector */}
        <NumberSelector
          onSelectNumber={handleNumberSelect}
          board={board}
          selectedCell={selectedCell}
          initialBoardState={initialBoardState}
        />
      </div>
      {message && <p className="game-message">{message}</p>}
    </div>
  );
};

export default SudokuBoard;
