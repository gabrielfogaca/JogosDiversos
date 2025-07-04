import React, { useState } from 'react';
// import './Campominado.css';

// Função para gerar o tabuleiro com minas
function gerarTabuleiro(linhas, colunas, minas) {
  const tab = Array.from({ length: linhas }, () =>
    Array.from({ length: colunas }, () => ({
      mina: false,
      revelada: false,
      marcada: false,
      aoRedor: 0,
    })),
  );

  // Espalha minas aleatoriamente
  let minasRestantes = minas;
  while (minasRestantes > 0) {
    const l = Math.floor(Math.random() * linhas);
    const c = Math.floor(Math.random() * colunas);
    if (!tab[l][c].mina) {
      tab[l][c].mina = true;
      minasRestantes--;
    }
  }

  // Calcula minas ao redor
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

// Configurações de dificuldade
const DIFICULDADES = {
  facil: { linhas: 10, colunas: 10, minas: 15 },
  medio: { linhas: 25, colunas: 25, minas: 50 },
  dificil: { linhas: 25, colunas: 50, minas: 100 },
};

export default function CampoMinado() {
  const [dificuldade, setDificuldade] = useState('facil');
  const [tabuleiro, setTabuleiro] = useState(() => {
    const { linhas, colunas, minas } = DIFICULDADES['facil'];
    return gerarTabuleiro(linhas, colunas, minas);
  });
  const [jogoEncerrado, setJogoEncerrado] = useState(false);
  const [venceu, setVenceu] = useState(false);

  const { linhas, colunas, minas } = DIFICULDADES[dificuldade];

  // Revela célula e recursivamente as vizinhas se não houver minas ao redor
  function revelarCelula(l, c, tab = tabuleiro) {
    if (
      tab[l][c].revelada ||
      tab[l][c].marcada ||
      tab[l][c].mina ||
      jogoEncerrado
    )
      return;

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

  // Clique esquerdo: revelar célula
  function handleClick(l, c) {
    if (jogoEncerrado) return;
    const novoTab = tabuleiro.map((linha) => linha.map((cel) => ({ ...cel })));
    if (novoTab[l][c].marcada || novoTab[l][c].revelada) return;

    if (novoTab[l][c].mina) {
      // Perdeu: revela todas as minas
      novoTab.forEach((linha) =>
        linha.forEach((cel) => {
          if (cel.mina) cel.revelada = true;
        }),
      );
      setTabuleiro(novoTab);
      setJogoEncerrado(true);
      setVenceu(false);
      return;
    }

    revelarCelula(l, c, novoTab);

    // Verifica vitória
    const ganhou = novoTab
      .flat()
      .every(
        (cel) => (cel.mina && !cel.revelada) || (!cel.mina && cel.revelada),
      );
    setTabuleiro(novoTab);
    if (ganhou) {
      setJogoEncerrado(true);
      setVenceu(true);
    }
  }

  // Clique direito: marcar/desmarcar célula
  function handleRightClick(e, l, c) {
    e.preventDefault();
    if (jogoEncerrado) return;
    const novoTab = tabuleiro.map((linha) => linha.map((cel) => ({ ...cel })));
    if (novoTab[l][c].revelada) return;
    novoTab[l][c].marcada = !novoTab[l][c].marcada;
    setTabuleiro(novoTab);
  }

  function reiniciar(novaDificuldade = dificuldade) {
    const { linhas, colunas, minas } = DIFICULDADES[novaDificuldade];
    setTabuleiro(gerarTabuleiro(linhas, colunas, minas));
    setJogoEncerrado(false);
    setVenceu(false);
  }

  function handleDificuldade(novaDificuldade) {
    setDificuldade(novaDificuldade);
    reiniciar(novaDificuldade);
  }

  // Centralização do jogo
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        overflow: 'auto',
      }}
    >
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h2>Campo Minado</h2>
        <div className="mb-3">
          <button
            className={`btn btn-sm me-2 ${
              dificuldade === 'facil' ? 'btn-success' : 'btn-outline-success'
            }`}
            onClick={() => handleDificuldade('facil')}
            disabled={dificuldade === 'facil'}
          >
            Fácil (10x10 - 15 💣)
          </button>
          <button
            className={`btn btn-sm me-2 ${
              dificuldade === 'medio' ? 'btn-warning' : 'btn-outline-warning'
            }`}
            onClick={() => handleDificuldade('medio')}
            disabled={dificuldade === 'medio'}
          >
            Médio (25x25 - 50 💣)
          </button>
          <button
            className={`btn btn-sm ${
              dificuldade === 'dificil' ? 'btn-danger' : 'btn-outline-danger'
            }`}
            onClick={() => handleDificuldade('dificil')}
            disabled={dificuldade === 'dificil'}
          >
            Difícil (25x50 - 100 💣)
          </button>
        </div>
        <button className="btn btn-primary mb-3" onClick={() => reiniciar()}>
          Reiniciar
        </button>
        <div
          className="tabuleiro"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${colunas}, 24px)`,
            gap: '1px',
            justifyContent: 'center',
            margin: '0 auto',
            overflow: 'auto',
            maxWidth: '95vw',
            maxHeight: '70vh',
          }}
        >
          {tabuleiro.map((linha, l) =>
            linha.map((cel, c) => (
              <div
                key={`${l}-${c}`}
                className={`celula 
                  ${cel.revelada ? 'revelada' : ''} 
                  ${cel.marcada ? 'marcada' : ''} 
                  ${cel.revelada && cel.mina ? 'mina' : ''}`}
                onClick={() => handleClick(l, c)}
                onContextMenu={(e) => handleRightClick(e, l, c)}
                style={{
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 14,
                  background: cel.revelada
                    ? cel.mina
                      ? '#e57373'
                      : '#e0e0e0'
                    : '#90caf9',
                  border: '1px solid #1976d2',
                  cursor: jogoEncerrado ? 'default' : 'pointer',
                  userSelect: 'none',
                  padding: 0,
                }}
              >
                {cel.revelada
                  ? cel.mina
                    ? '💣'
                    : cel.aoRedor > 0
                    ? cel.aoRedor
                    : ''
                  : cel.marcada
                  ? '🚩'
                  : ''}
              </div>
            )),
          )}
        </div>
        <div style={{ marginTop: 16 }}>
          {jogoEncerrado && (
            <div className={`mt-3 ${venceu ? 'text-success' : 'text-danger'}`}>
              {venceu ? 'Parabéns, você venceu!' : 'Game Over!'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
