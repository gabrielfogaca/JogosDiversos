import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Home, RotateCcw, Delete } from 'lucide-react';
import { getPalavraDoDia, isPalavraValida } from './data/palavras';

type CellStatus = 'correct' | 'present' | 'absent' | 'empty';

interface Cell {
  letter: string;
  status: CellStatus;
}

const PALAVRA_TAMANHO = 5;
const MAX_TENTATIVAS = 6;

export function Termo({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [palavraAlvo] = useState(() => getPalavraDoDia().toUpperCase());
  const [tentativas, setTentativas] = useState<Cell[][]>(
    Array(MAX_TENTATIVAS).fill(null).map(() =>
      Array(PALAVRA_TAMANHO).fill(null).map(() => ({ letter: '', status: 'empty' as CellStatus }))
    )
  );
  const [tentativaAtual, setTentativaAtual] = useState(0);
  const [palpiteAtual, setPalpiteAtual] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    if (gameStatus === 'playing') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [palpiteAtual, tentativaAtual, gameStatus]);

  function handleKeyPress(e: KeyboardEvent) {
    if (gameStatus !== 'playing') return;

    if (e.key === 'Enter' && palpiteAtual.length === PALAVRA_TAMANHO) {
      submitGuess();
    } else if (e.key === 'Backspace') {
      setMensagemErro('');
      setPalpiteAtual(prev => prev.slice(0, -1));
    } else if (/^[a-zA-ZÀ-ÿ]$/.test(e.key) && palpiteAtual.length < PALAVRA_TAMANHO) {
      setMensagemErro('');
      setPalpiteAtual(prev => (prev + e.key.toUpperCase()).slice(0, PALAVRA_TAMANHO));
    }
  }

  function submitGuess() {
    if (palpiteAtual.length !== PALAVRA_TAMANHO) {
      setMensagemErro('A palavra deve ter 5 letras');
      return;
    }

    // Validar se a palavra existe no dicionário
    if (!isPalavraValida(palpiteAtual)) {
      setMensagemErro('Palavra não está no dicionário');
      return;
    }

    const novasTentativas = [...tentativas];
    const guess = palpiteAtual.split('');
    const target = palavraAlvo.split('');
    const resultado: Cell[] = [];

    // Primeiro, marca as letras corretas
    const targetCopy = [...target];
    guess.forEach((letter, i) => {
      if (letter === target[i]) {
        resultado[i] = { letter, status: 'correct' };
        targetCopy[i] = '';
      } else {
        resultado[i] = { letter, status: 'absent' };
      }
    });

    // Depois, marca as letras presentes mas na posição errada
    resultado.forEach((cell, i) => {
      if (cell.status === 'absent') {
        const idx = targetCopy.indexOf(cell.letter);
        if (idx !== -1) {
          resultado[i] = { letter: cell.letter, status: 'present' };
          targetCopy[idx] = '';
        }
      }
    });

    novasTentativas[tentativaAtual] = resultado;
    setTentativas(novasTentativas);

    // Verifica se ganhou
    if (palpiteAtual === palavraAlvo) {
      setGameStatus('won');
    } else if (tentativaAtual >= MAX_TENTATIVAS - 1) {
      setGameStatus('lost');
    } else {
      setTentativaAtual(prev => prev + 1);
    }

    setPalpiteAtual('');
    setMensagemErro('');
  }

  function resetGame() {
    setTentativas(
      Array(MAX_TENTATIVAS).fill(null).map(() =>
        Array(PALAVRA_TAMANHO).fill(null).map(() => ({ letter: '', status: 'empty' as CellStatus }))
      )
    );
    setTentativaAtual(0);
    setPalpiteAtual('');
    setGameStatus('playing');
    setMensagemErro('');
  }

  // Função para obter o status de uma letra no teclado
  function getKeyStatus(key: string): CellStatus {
    let status: CellStatus = 'empty';
    
    for (let i = 0; i < tentativaAtual; i++) {
      for (const cell of tentativas[i]) {
        if (cell.letter === key) {
          if (cell.status === 'correct') {
            return 'correct'; // Se já é correct, retorna imediatamente
          } else if (cell.status === 'present' && status !== 'correct') {
            status = 'present';
          } else if (cell.status === 'absent' && status === 'empty') {
            status = 'absent';
          }
        }
      }
    }
    
    return status;
  }

  const teclado = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];

  function handleKeyClick(key: string) {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (palpiteAtual.length === PALAVRA_TAMANHO) submitGuess();
    } else if (key === '⌫') {
      setMensagemErro('');
      setPalpiteAtual(prev => prev.slice(0, -1));
    } else if (palpiteAtual.length < PALAVRA_TAMANHO) {
      setMensagemErro('');
      setPalpiteAtual(prev => prev + key);
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onNavigateHome}>
            <Home className="size-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl">📝 Termo</h1>
        </div>

        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Adivinhe a Palavra</CardTitle>
                  <CardDescription>Você tem {MAX_TENTATIVAS} tentativas</CardDescription>
                </div>
                {gameStatus !== 'playing' && (
                  <Badge variant={gameStatus === 'won' ? 'default' : 'destructive'}>
                    {gameStatus === 'won' ? '🎉 Você Venceu!' : `😔 A palavra era: ${palavraAlvo}`}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mensagem de erro */}
              {mensagemErro && (
                <div className="text-center text-red-600 font-medium">
                  {mensagemErro}
                </div>
              )}

              {/* Grid de tentativas */}
              <div className="space-y-2">
                {tentativas.map((tentativa, rowIdx) => (
                  <div key={rowIdx} className="flex gap-2 justify-center">
                    {tentativa.map((cell, colIdx) => {
                      const isCurrentRow = rowIdx === tentativaAtual && gameStatus === 'playing';
                      const letter = isCurrentRow && colIdx < palpiteAtual.length 
                        ? palpiteAtual[colIdx] 
                        : cell.letter;

                      return (
                        <div
                          key={colIdx}
                          className={`size-14 flex items-center justify-center text-2xl font-bold border-2 rounded transition-colors ${
                            cell.status === 'correct'
                              ? 'bg-green-500 text-white border-green-600'
                              : cell.status === 'present'
                              ? 'bg-yellow-500 text-white border-yellow-600'
                              : cell.status === 'absent'
                              ? 'bg-slate-400 text-white border-slate-500'
                              : isCurrentRow && letter
                              ? 'border-slate-400 bg-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {letter}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Teclado virtual */}
              <div className="space-y-1">
                {teclado.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-1 justify-center">
                    {row.map((key) => {
                      const keyStatus = key.length === 1 ? getKeyStatus(key) : 'empty';
                      
                      return (
                        <Button
                          key={key}
                          variant="outline"
                          size="sm"
                          onClick={() => handleKeyClick(key)}
                          disabled={gameStatus !== 'playing'}
                          className={`${
                            key === 'ENTER' || key === '⌫' ? 'px-4' : 'px-3'
                          } h-12 ${
                            keyStatus === 'correct'
                              ? 'bg-green-500 text-white border-green-600 hover:bg-green-600'
                              : keyStatus === 'present'
                              ? 'bg-yellow-500 text-white border-yellow-600 hover:bg-yellow-600'
                              : keyStatus === 'absent'
                              ? 'bg-slate-400 text-white border-slate-500 hover:bg-slate-500'
                              : ''
                          }`}
                        >
                          {key}
                        </Button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {gameStatus !== 'playing' && (
                <Button className="w-full" onClick={resetGame}>
                  <RotateCcw className="size-4 mr-2" />
                  Jogar Novamente
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}