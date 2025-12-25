import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Home, RotateCcw, Flag, Bomb } from 'lucide-react';

interface Cell {
  mina: boolean;
  revelada: boolean;
  marcada: boolean;
  aoRedor: number;
}

const DIFICULDADES = {
  facil: { linhas: 10, colunas: 10, minas: 15, nome: 'Fácil' },
  medio: { linhas: 16, colunas: 16, minas: 40, nome: 'Médio' },
  dificil: { linhas: 16, colunas: 30, minas: 99, nome: 'Difícil' },
};

type Dificuldade = keyof typeof DIFICULDADES;

function gerarTabuleiro(linhas: number, colunas: number, minas: number): Cell[][] {
  const tab: Cell[][] = Array.from({ length: linhas }, () =>
    Array.from({ length: colunas }, () => ({
      mina: false,
      revelada: false,
      marcada: false,
      aoRedor: 0,
    }))
  );

  let minasRestantes = minas;
  while (minasRestantes > 0) {
    const l = Math.floor(Math.random() * linhas);
    const c = Math.floor(Math.random() * colunas);
    if (!tab[l][c].mina) {
      tab[l][c].mina = true;
      minasRestantes--;
    }
  }

  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      if (!tab[l][c].mina) {
        let count = 0;
        for (let dl = -1; dl <= 1; dl++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (
              l + dl >= 0 &&
              l + dl < linhas &&
              c + dc >= 0 &&
              c + dc < colunas &&
              tab[l + dl][c + dc].mina
            ) {
              count++;
            }
          }
        }
        tab[l][c].aoRedor = count;
      }
    }
  }
  return tab;
}

export function CampoMinado({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [dificuldade, setDificuldade] = useState<Dificuldade>('facil');
  const [tabuleiro, setTabuleiro] = useState<Cell[][]>(() => {
    const { linhas, colunas, minas } = DIFICULDADES['facil'];
    return gerarTabuleiro(linhas, colunas, minas);
  });
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [venceu, setVenceu] = useState(false);

  const { linhas, colunas, minas } = DIFICULDADES[dificuldade];

  function revelarCelula(l: number, c: number, tab: Cell[][] = tabuleiro) {
    if (tab[l][c].revelada || tab[l][c].marcada || tab[l][c].mina || jogoEncerrado) return;

    tab[l][c].revelada = true;

    if (tab[l][c].aoRedor === 0) {
      for (let dl = -1; dl <= 1; dl++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nl = l + dl;
          const nc = c + dc;
          if (
            nl >= 0 &&
            nl < linhas &&
            nc >= 0 &&
            nc < colunas &&
            !(dl === 0 && dc === 0)
          ) {
            if (!tab[nl][nc].revelada && !tab[nl][nc].mina) {
              revelarCelula(nl, nc, tab);
            }
          }
        }
      }
    }
  }

  function handleClick(l: number, c: number) {
    if (jogoEncerrado) return;
    const novoTab = tabuleiro.map((linha) => linha.map((cel) => ({ ...cel })));
    if (novoTab[l][c].marcada || novoTab[l][c].revelada) return;

    if (novoTab[l][c].mina) {
      novoTab.forEach((linha) =>
        linha.forEach((cel) => {
          if (cel.mina) cel.revelada = true;
        })
      );
      setTabuleiro(novoTab);
      setJogoEncerrado(true);
      setVenceu(false);
      return;
    }

    revelarCelula(l, c, novoTab);

    const ganhou = novoTab
      .flat()
      .every((cel) => (cel.mina && !cel.revelada) || (!cel.mina && cel.revelada));
    setTabuleiro(novoTab);
    if (ganhou) {
      setJogoEncerrado(true);
      setVenceu(true);
    }
  }

  function handleRightClick(e: React.MouseEvent, l: number, c: number) {
    e.preventDefault();
    if (jogoEncerrado) return;
    const novoTab = tabuleiro.map((linha) => linha.map((cel) => ({ ...cel })));
    if (novoTab[l][c].revelada) return;
    novoTab[l][c].marcada = !novoTab[l][c].marcada;
    setTabuleiro(novoTab);
  }

  function reiniciar(novaDificuldade: Dificuldade = dificuldade) {
    const { linhas, colunas, minas } = DIFICULDADES[novaDificuldade];
    setTabuleiro(gerarTabuleiro(linhas, colunas, minas));
    setJogoEncerrado(false);
    setVenceu(false);
  }

  function handleDificuldade(novaDificuldade: Dificuldade) {
    setDificuldade(novaDificuldade);
    reiniciar(novaDificuldade);
  }

  const minasRestantes = minas - tabuleiro.flat().filter(cel => cel.marcada).length;

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onNavigateHome}>
            <Home className="size-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl">💣 Campo Minado</h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>Encontre todas as bombas!</CardTitle>
                  <CardDescription>
                    Clique para revelar, clique direito para marcar
                  </CardDescription>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">
                    <Bomb className="size-3 mr-1" />
                    {minasRestantes} minas
                  </Badge>
                  {jogoEncerrado && (
                    <Badge variant={venceu ? 'default' : 'destructive'}>
                      {venceu ? '🎉 Você Venceu!' : '💥 Game Over'}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Controles */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={dificuldade === 'facil' ? 'default' : 'outline'}
                  onClick={() => handleDificuldade('facil')}
                >
                  Fácil
                </Button>
                <Button
                  variant={dificuldade === 'medio' ? 'default' : 'outline'}
                  onClick={() => handleDificuldade('medio')}
                >
                  Médio
                </Button>
                <Button
                  variant={dificuldade === 'dificil' ? 'default' : 'outline'}
                  onClick={() => handleDificuldade('dificil')}
                >
                  Difícil
                </Button>
                <Button variant="outline" onClick={() => reiniciar()}>
                  <RotateCcw className="size-4 mr-2" />
                  Reiniciar
                </Button>
              </div>

              {/* Tabuleiro */}
              <div className="overflow-auto">
                <div
                  className="inline-grid gap-px bg-slate-300 border-4 border-slate-400 mx-auto"
                  style={{
                    gridTemplateColumns: `repeat(${colunas}, 32px)`,
                  }}
                >
                  {tabuleiro.map((linha, l) =>
                    linha.map((cel, c) => (
                      <button
                        key={`${l}-${c}`}
                        onClick={() => handleClick(l, c)}
                        onContextMenu={(e) => handleRightClick(e, l, c)}
                        disabled={jogoEncerrado}
                        className={`size-8 flex items-center justify-center text-sm transition-colors ${
                          cel.revelada
                            ? cel.mina
                              ? 'bg-red-500 text-white'
                              : 'bg-slate-100'
                            : 'bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 active:from-blue-600 active:to-blue-700'
                        }`}
                      >
                        {cel.revelada ? (
                          cel.mina ? (
                            '💣'
                          ) : cel.aoRedor > 0 ? (
                            <span
                              className="font-bold"
                              style={{
                                color:
                                  cel.aoRedor === 1
                                    ? '#0000ff'
                                    : cel.aoRedor === 2
                                    ? '#008000'
                                    : cel.aoRedor === 3
                                    ? '#ff0000'
                                    : cel.aoRedor === 4
                                    ? '#000080'
                                    : cel.aoRedor === 5
                                    ? '#800000'
                                    : '#008080',
                              }}
                            >
                              {cel.aoRedor}
                            </span>
                          ) : (
                            ''
                          )
                        ) : cel.marcada ? (
                          '🚩'
                        ) : (
                          ''
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Instruções */}
              <div className="text-sm text-slate-600 space-y-1">
                <p>💡 <strong>Como jogar:</strong></p>
                <p>• Clique esquerdo para revelar uma célula</p>
                <p>• Clique direito para marcar/desmarcar uma bomba</p>
                <p>• Os números indicam quantas bombas estão ao redor</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
