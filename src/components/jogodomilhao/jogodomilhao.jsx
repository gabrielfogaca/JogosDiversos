import React, { useState, useEffect } from 'react';
import perguntas from './perguntas';
import confetti from './imgs/confetti.gif';
import Cartas from './cartas';

function sortearPerguntas(perguntas, quantidade = 15) {
  const copia = [...perguntas];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, quantidade);
}

function embaralharArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const premios = [
  'R$ 1,00',
  'R$ 10,00',
  'R$ 100,00',
  'R$ 500,00',
  'R$ 1.000,00',
  'R$ 5.000,00',
  'R$ 10.000,00',
  'R$ 25.000,00',
  'R$ 50.000,00',
  'R$ 100.000,00',
  'R$ 200.000,00',
  'R$ 300.000,00',
  'R$ 400.000,00',
  'R$ 500.000,00',
  'R$ 1.000.000,00',
];

export default function JogoDoMilhao() {
  const [perguntasSorteadas, setPerguntasSorteadas] = useState(() =>
    sortearPerguntas(perguntas),
  );
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [tempo, setTempo] = useState(30);
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [cartasUsadas, setCartasUsadas] = useState(false);
  const [respostasEliminadasMap, setRespostasEliminadasMap] = useState({});
  const respostasEliminadas = respostasEliminadasMap[indice] || 0;
  const [puloUsado, setPuloUsado] = useState(false);
  const [cartasUsadasNoJogo, setCartasUsadasNoJogo] = useState(false);

  const perguntaAtual = perguntasSorteadas[indice];

  const [respostasEmbaralhadas, setRespostasEmbaralhadas] = useState(() => {
    const respostas = perguntasSorteadas[0].respostas;
    return embaralharArray(
      respostas.map((resp, idx) => ({
        texto: resp,
        correta: idx === perguntasSorteadas[0].correta,
      })),
    );
  });

  useEffect(() => {
    if (!perguntasSorteadas[indice]) return;
    const respostas = perguntasSorteadas[indice].respostas;
    const embaralhadas = embaralharArray(
      respostas.map((resp, idx) => ({
        texto: resp,
        correta: idx === perguntasSorteadas[indice].correta,
      })),
    );
    setRespostasEmbaralhadas(embaralhadas);
    // console.log('Pergunta atual:', perguntaAtual.pergunta);
    // console.log(
    //   'Respostas embaralhadas:',
    //   embaralhadas[0].correta,
    //   embaralhadas[1].correta,
    //   embaralhadas[2].correta,
    //   embaralhadas[3].correta,
    // );
  }, [indice, perguntasSorteadas]);

  useEffect(() => {
    if (finalizado || respostaSelecionada !== null) return;
    if (tempo === 0) {
      setFinalizado(true);
      return;
    }
    const timer = setTimeout(() => setTempo((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [tempo, finalizado, respostaSelecionada]);

  function handleResposta(ehCorreta, idxVisivel) {
    if (respostaSelecionada !== null || finalizado) return;
    setRespostaSelecionada(idxVisivel);

    const acertou = ehCorreta; // já é true / false

    setTimeout(() => {
      if (acertou) {
        setAcertos((prev) => prev + 1);
        if (indice + 1 < perguntasSorteadas.length) {
          setIndice((prev) => prev + 1);
          setTempo(30);
          setRespostaSelecionada(null);
        } else {
          setFinalizado(true);
        }
      } else {
        setFinalizado(true);
      }
    }, 1200);
  }

  function reiniciar() {
    setPerguntasSorteadas(sortearPerguntas(perguntas));
    setIndice(0);
    setAcertos(0);
    setRespostaSelecionada(null);
    setFinalizado(false);
    setTempo(30);
    setCartasUsadas(false);
    setRespostasEliminadasMap({});
    setPuloUsado(false); // <- RESET DO PULO
    setCartasUsadasNoJogo(false);
  }

  function handlePular() {
    if (finalizado || respostaSelecionada !== null || puloUsado) return;

    const usadas = perguntasSorteadas.map((p) => p.pergunta);
    const restantes = perguntas.filter((p) => !usadas.includes(p.pergunta));
    if (!restantes.length) return;

    const nova = restantes[Math.floor(Math.random() * restantes.length)];
    const novas = [...perguntasSorteadas];
    novas[indice] = nova;
    setPerguntasSorteadas(novas);

    const { respostas, correta } = nova;
    const embaralhadas = embaralharArray(
      respostas.map((r, i) => ({ texto: r, correta: i === correta })),
    );
    setRespostasEmbaralhadas(embaralhadas);

    setRespostasEliminadasMap((prev) => ({ ...prev, [indice]: 0 }));
    setCartasUsadas(false);
    setTempo(30);
    setRespostaSelecionada(null);
    setPuloUsado(true); // <- MARCA QUE FOI USADO
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
      }}
    >
      {/* Painel de prêmios */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px #0002',
          padding: 24,
          marginRight: 24,
          minWidth: 160,
          maxHeight: 600,
        }}
      >
        <h5 className="mb-3" style={{ color: '#1976d2' }}>
          Prêmios
        </h5>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {premios
            .map((premio, idx) => {
              const ativo = indice === idx && !finalizado;
              const ganho = acertos > idx || (finalizado && acertos - 1 >= idx);
              return (
                <li
                  key={premio}
                  style={{
                    background: ativo
                      ? '#1976d2'
                      : ganho
                      ? '#c8e6c9'
                      : '#f5f5f5',
                    color: ativo ? '#fff' : ganho ? '#388e3c' : '#333',
                    fontWeight: ativo || ganho ? 'bold' : 'normal',
                    borderRadius: 6,
                    padding: '4px 8px',
                    marginBottom: 2,
                    border: ativo ? '2px solid #1976d2' : '1px solid #eee',
                    fontSize: 15,
                  }}
                >
                  {premio}
                </li>
              );
            })
            .reverse()}
        </ul>
      </div>

      {/* Jogo principal */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px #0002',
          padding: 32,
          minWidth: 320,
          maxWidth: 480,
          textAlign: 'center',
        }}
      >
        <h2>Jogo do Milhão</h2>
        {finalizado ? (
          <div>
            <h4>
              {tempo === 0 ? (
                'Tempo esgotado!'
              ) : acertos === perguntasSorteadas.length ? (
                <>
                  Parabéns! Você acertou todas as perguntas!
                  <br />
                  <img
                    src={confetti}
                    alt="Confetti"
                    style={{
                      width: 280,
                      margin: '16px auto 0',
                      display: 'block',
                    }}
                  />
                </>
              ) : (
                `Fim de jogo! Você acertou ${acertos} pergunta${
                  acertos === 1 ? '' : 's'
                }.`
              )}
            </h4>
            <div
              className="mb-2"
              style={{ fontWeight: 'bold', color: '#1976d2' }}
            >
              Prêmio conquistado:{' '}
              {acertos > 0 ? premios[acertos - 1] : 'R$ 0,00'}
            </div>
            <button className="btn btn-primary mt-3" onClick={reiniciar}>
              Jogar Novamente
            </button>
          </div>
        ) : (
          <>
            <div className="mb-3" style={{ fontWeight: 'bold' }}>
              Pergunta {indice + 1} de {perguntasSorteadas.length}
            </div>
            <div className="mb-2" style={{ fontSize: 18 }}>
              Tempo restante:{' '}
              <span
                style={{
                  color: tempo <= 5 ? 'red' : '#1976d2',
                  fontWeight: 'bold',
                }}
              >
                {tempo}s
              </span>
            </div>
            <div className="mb-4" style={{ fontSize: 20 }}>
              {perguntaAtual.pergunta}
            </div>
            {/* bloco de respostas */}
            <div>
              {respostasEmbaralhadas
                .filter((resp, _i, arr) => {
                  if (!respostasEliminadas) return true;
                  if (resp.correta) return true;
                  const erradas = arr.filter((r) => !r.correta);
                  const idxErrada = erradas.indexOf(resp);
                  return idxErrada < erradas.length - respostasEliminadas;
                })
                .map((resp, i) => (
                  <button
                    key={i}
                    value={resp.correta} // ← true ou false
                    className={`btn btn-lg mb-2 w-100 ${
                      respostaSelecionada === null
                        ? 'btn-outline-primary'
                        : resp.correta
                        ? 'btn-success'
                        : respostaSelecionada === i
                        ? 'btn-danger'
                        : 'btn-outline-secondary'
                    }`}
                    style={{ textAlign: 'left' }}
                    disabled={respostaSelecionada !== null}
                    onClick={() => handleResposta(resp.correta, i)} // passa bool + índice
                  >
                    {resp.texto}
                  </button>
                ))}
            </div>
          </>
        )}
      </div>

      {/* Painel de ajudas */}
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px #0002',
          padding: 24,
          marginLeft: 24,
          minWidth: 160,
        }}
      >
        <h5 className="mb-3" style={{ color: '#1976d2' }}>
          Ajuda
        </h5>
        <button
          className="btn btn-outline-secondary mb-3"
          style={{ width: '100%' }}
          onClick={() => setMostrarCartas(true)}
          disabled={
            cartasUsadas ||
            cartasUsadasNoJogo ||
            finalizado ||
            respostaSelecionada !== null
          }
        >
          🃏 Cartas
        </button>
        <button
          className="btn btn-outline-secondary mb-3"
          style={{ width: '100%' }}
          onClick={handlePular}
          disabled={puloUsado || finalizado || respostaSelecionada !== null}
        >
          ⏭️ Pular
        </button>

        <button
          className="btn btn-outline-secondary"
          style={{ width: '100%' }}
          disabled
        >
          🎓 Universitários
        </button>
      </div>

      {/* Seleção de cartas */}
      {mostrarCartas && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setMostrarCartas(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#fff', padding: 24, borderRadius: 12 }}
          >
            <h5>Escolha uma carta</h5>
            <Cartas
              onEscolherCarta={(num) => {
                setRespostasEliminadasMap((prev) => ({
                  ...prev,
                  [indice]: num,
                }));
                setCartasUsadas(true);
                setCartasUsadasNoJogo(true); // <- impede novos usos
                setMostrarCartas(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
