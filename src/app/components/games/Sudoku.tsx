import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Home, RotateCcw, Eye, Check } from 'lucide-react';

type Board = number[][];

async function fetchSudoku(): Promise<{ board: Board; solution: Board; difficulty: string }> {
  try {
    const response = await fetch(
      'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}'
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.newboard || !data.newboard.grids || !data.newboard.grids[0]) {
      throw new Error('Invalid API response structure');
    }
    
    const grid = data.newboard.grids[0];
    return {
      board: grid.value,
      solution: grid.solution,
      difficulty: grid.difficulty,
    };
  } catch (error) {
    console.error('Erro ao carregar Sudoku:', error);
    // Retorna um Sudoku de fallback simples e válido
    return generateFallbackSudoku();
  }
}

function generateFallbackSudoku(): { board: Board; solution: Board; difficulty: string } {
  // Sudoku completo e válido
  const solution: Board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  // Remove alguns números para criar o puzzle (nível médio)
  const board: Board = solution.map(row => [...row]);
  const cellsToRemove = 40; // Remove 40 células
  let removed = 0;
  
  while (removed < cellsToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] !== 0) {
      board[row][col] = 0;
      removed++;
    }
  }

  return {
    board,
    solution,
    difficulty: 'Medium (Offline)',
  };
}

export function Sudoku({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [board, setBoard] = useState<Board>([]);
  const [initialBoard, setInitialBoard] = useState<Board>([]);
  const [solution, setSolution] = useState<Board>([]);
  const [difficulty, setDifficulty] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadNewGame();
  }, []);

  async function loadNewGame() {
    setLoading(true);
    setMessage('');
    setSelectedCell(null);
    const data = await fetchSudoku();
    setBoard(JSON.parse(JSON.stringify(data.board)));
    setInitialBoard(JSON.parse(JSON.stringify(data.board)));
    setSolution(data.solution);
    setDifficulty(data.difficulty);
    setLoading(false);
  }

  function handleCellClick(row: number, col: number) {
    if (initialBoard[row][col] === 0) {
      setSelectedCell([row, col]);
    }
  }

  function handleNumberSelect(num: number) {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    if (initialBoard[row][col] !== 0) return;

    const newBoard = board.map((arr) => [...arr]);
    newBoard[row][col] = num;
    setBoard(newBoard);
    setMessage('');
  }

  function checkSolution() {
    const isSolved = board.every((row, i) =>
      row.every((cell, j) => cell === solution[i][j])
    );
    setMessage(isSolved ? '🎉 Parabéns! Você resolveu o Sudoku!' : '❌ A solução ainda não está correta.');
  }

  function resetBoard() {
    setBoard(JSON.parse(JSON.stringify(initialBoard)));
    setSelectedCell(null);
    setMessage('');
  }

  function showSolution() {
    setBoard(JSON.parse(JSON.stringify(solution)));
    setMessage('✅ Solução revelada!');
    setSelectedCell(null);
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin size-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-lg">Carregando Sudoku...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          <Button variant="outline" onClick={onNavigateHome} size="sm">
            <Home className="size-4 mr-0 sm:mr-2" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
          <h1 className="text-2xl sm:text-4xl">🔢 Sudoku</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Sudoku Game</CardTitle>
                  <CardDescription>
                    Dificuldade: <strong>{difficulty}</strong>
                  </CardDescription>
                </div>
                {message && (
                  <Badge variant={message.includes('🎉') ? 'default' : 'secondary'} className="text-xs sm:text-sm">
                    {message}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Controles */}
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" onClick={checkSolution} size="sm" className="text-xs sm:text-sm">
                  <Check className="size-3 sm:size-4 mr-1 sm:mr-2" />
                  Verificar
                </Button>
                <Button variant="outline" onClick={resetBoard} size="sm" className="text-xs sm:text-sm">
                  <RotateCcw className="size-3 sm:size-4 mr-1 sm:mr-2" />
                  Reiniciar
                </Button>
                <Button variant="outline" onClick={loadNewGame} size="sm" className="text-xs sm:text-sm">
                  Novo Jogo
                </Button>
                <Button variant="outline" onClick={showSolution} size="sm" className="text-xs sm:text-sm">
                  <Eye className="size-3 sm:size-4 mr-1 sm:mr-2" />
                  Solução
                </Button>
              </div>

              {/* Tabuleiro */}
              <div className="flex justify-center overflow-x-auto">
                <div className="inline-grid grid-cols-9 gap-0 border-4 border-slate-400">
                  {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                      const isInitial = initialBoard[rowIndex][colIndex] !== 0;
                      const isSelected =
                        selectedCell?.[0] === rowIndex && selectedCell?.[1] === colIndex;
                      const isError =
                        cell !== 0 &&
                        solution[rowIndex][colIndex] !== cell &&
                        !isInitial;

                      return (
                        <button
                          key={`${rowIndex}-${colIndex}`}
                          onClick={() => handleCellClick(rowIndex, colIndex)}
                          className={`size-8 sm:size-12 flex items-center justify-center border border-slate-300 transition-colors text-sm sm:text-base ${
                            (rowIndex + 1) % 3 === 0 && rowIndex !== 8
                              ? 'border-b-2 border-b-slate-500'
                              : ''
                          } ${
                            (colIndex + 1) % 3 === 0 && colIndex !== 8
                              ? 'border-r-2 border-r-slate-500'
                              : ''
                          } ${
                            isInitial
                              ? 'bg-slate-200 font-bold cursor-default'
                              : isSelected
                              ? 'bg-blue-200'
                              : isError
                              ? 'bg-red-100 text-red-600'
                              : 'bg-white hover:bg-blue-50 active:bg-blue-100'
                          }`}
                        >
                          {cell !== 0 ? cell : ''}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Seletor de números */}
              {selectedCell && (
                <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <Button
                      key={num}
                      variant="outline"
                      onClick={() => handleNumberSelect(num)}
                      className="size-8 sm:size-10 p-0 text-sm sm:text-base"
                    >
                      {num === 0 ? '×' : num}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}