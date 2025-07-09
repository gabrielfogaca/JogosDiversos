// As funções isValidMove e isBoardSolved permanecem as mesmas
export const isValidMove = (board, row, col, num) => {
  // Checa a linha
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num && x !== col) {
      return false;
    }
  }

  // Checa a coluna.
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num && x !== row) {
      return false;
    }
  }

  // Checa a sub-grade 3x3
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        board[i + startRow][j + startCol] === num &&
        (i + startRow !== row || j + colIndex !== col)
      ) {
        // Erro corrigido aqui (j + colIndex -> j + startCol)
        return false;
      }
    }
  }

  return true;
};

export const isBoardSolved = (board) => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === 0 || !isValidMove(board, r, c, board[r][c])) {
        return false;
      }
    }
  }
  return true;
};

// Nova função assíncrona para obter um tabuleiro da API
// src/sudoku/sudokuLogic.jsx

// src/sudoku/sudokuLogic.jsx

// ... (isValidMove e isBoardSolved permanecem os mesmos) ...

// src/sudoku/sudokuLogic.jsx

// ... (isValidMove e isBoardSolved permanecem os mesmos) ...

export const getInitialBoardFromAPI = async () => {
  // Ajustamos a query para pedir 'value', 'solution' E 'difficulty'
  const API_URL =
    'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}';

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Erro ao buscar tabuleiro: ${response.statusText}`);
    }
    const data = await response.json();

    // console.log('JSON completo retornado pela API:', data); // Para depuração

    // Extrai o tabuleiro inicial (com zeros)
    const initialBoard = data.newboard.grids[0].value;
    // Extrai a solução completa
    const solutionBoard = data.newboard.grids[0].solution;
    // Extrai a dificuldade
    const difficulty = data.newboard.grids[0].difficulty;

    // Retorna um objeto contendo todos os dados relevantes
    return {
      initialBoard: JSON.parse(JSON.stringify(initialBoard)),
      solutionBoard: JSON.parse(JSON.stringify(solutionBoard)),
      difficulty: difficulty, // Adicionando a dificuldade retornada pela API
    };
  } catch (error) {
    console.error('Erro ao carregar tabuleiro da API:', error);
    // Em caso de erro, retorna tabuleiros vazios e dificuldade padrão
    const emptyBoard = Array(9).fill(Array(9).fill(0));
    return {
      initialBoard: emptyBoard,
      solutionBoard: emptyBoard,
      difficulty: 'unknown', // Dificuldade padrão em caso de erro
    };
  }
};
