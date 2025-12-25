import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Home, RotateCcw, Trophy, SkipForward, GraduationCap } from 'lucide-react';
import { perguntas, type Pergunta } from './data/perguntas';

const premios = [
  'R$ 1.000',
  'R$ 2.000',
  'R$ 3.000',
  'R$ 4.000',
  'R$ 5.000',
  'R$ 10.000',
  'R$ 20.000',
  'R$ 30.000',
  'R$ 40.000',
  'R$ 50.000',
  'R$ 100.000',
  'R$ 200.000',
  'R$ 300.000',
  'R$ 500.000',
  'R$ 1.000.000',
];

function embaralharArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sortearPerguntas(perguntas: Pergunta[], quantidade = 15): Pergunta[] {
  return embaralharArray(perguntas).slice(0, quantidade);
}

export function JogoDoMilhao({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [perguntasSorteadas, setPerguntasSorteadas] = useState(() =>
    sortearPerguntas(perguntas)
  );
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
  const [finalizado, setFinalizado] = useState(false);
  const [tempo, setTempo] = useState(30);
  const [puloUsado, setPuloUsado] = useState(false);
  const [cartasUsadas, setCartasUsadas] = useState(false);
  const [respostasEliminadas, setRespostasEliminadas] = useState(0);
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [cartaEscolhida, setCartaEscolhida] = useState<number | null>(null);
  const [cartaRevelada, setCartaRevelada] = useState(false);
  const [numeroSorteado, setNumeroSorteado] = useState<number | null>(null);
  const [mostrarFeedbackPulo, setMostrarFeedbackPulo] = useState(false);
  const [universitariosUsados, setUniversitariosUsados] = useState(false);
  const [mostrarUniversitarios, setMostrarUniversitarios] = useState(false);
  const [sugestaoUniversitarios, setSugestaoUniversitarios] = useState<string | null>(null);
  const [mostrarPremiosMobile, setMostrarPremiosMobile] = useState(false);

  const perguntaAtual = perguntasSorteadas[indice];

  const [respostasEmbaralhadas, setRespostasEmbaralhadas] = useState<
    Array<{ texto: string; correta: boolean }>
  >([]);

  useEffect(() => {
    if (!perguntasSorteadas[indice]) return;
    const respostas = perguntasSorteadas[indice].respostas;
    const embaralhadas = embaralharArray(
      respostas.map((resp, idx) => ({
        texto: resp,
        correta: idx === perguntasSorteadas[indice].correta,
      }))
    );
    setRespostasEmbaralhadas(embaralhadas);
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

  function handleResposta(ehCorreta: boolean, idxVisivel: number) {
    if (respostaSelecionada !== null || finalizado) return;
    setRespostaSelecionada(idxVisivel);

    setTimeout(() => {
      if (ehCorreta) {
        setAcertos((prev) => prev + 1);
        if (indice + 1 < perguntasSorteadas.length) {
          setIndice((prev) => prev + 1);
          setTempo(30);
          setRespostaSelecionada(null);
          setRespostasEliminadas(0); // Reset para próxima pergunta
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
    setPuloUsado(false);
    setCartasUsadas(false);
    setRespostasEliminadas(0);
    setMostrarCartas(false);
    setCartaEscolhida(null);
    setCartaRevelada(false);
    setNumeroSorteado(null);
    setMostrarFeedbackPulo(false);
    setUniversitariosUsados(false);
    setMostrarUniversitarios(false);
    setSugestaoUniversitarios(null);
    setMostrarPremiosMobile(false);
  }

  function handlePular() {
    if (finalizado || respostaSelecionada !== null || puloUsado) return;
    
    // Busca qualquer pergunta diferente da atual
    const perguntaAtualTexto = perguntasSorteadas[indice].pergunta;
    const restantes = perguntas.filter((p) => p.pergunta !== perguntaAtualTexto);
    
    if (!restantes.length) return;

    // Sorteia uma nova pergunta e substitui a atual (mantém o mesmo índice/prêmio)
    const nova = restantes[Math.floor(Math.random() * restantes.length)];
    const novas = [...perguntasSorteadas];
    novas[indice] = nova;
    setPerguntasSorteadas(novas);

    // Reseta os estados
    setRespostasEliminadas(0);
    setTempo(30);
    setRespostaSelecionada(null);
    setPuloUsado(true);
    setMostrarFeedbackPulo(true);
  }

  function handleEscolherCarta(cartaIndex: number) {
    // Sorteia aleatoriamente um número de 0 a 3
    const numeroSorteado = Math.floor(Math.random() * 4);
    
    // Define os states na ordem correta
    setNumeroSorteado(numeroSorteado);
    setCartaEscolhida(cartaIndex);
    
    // Pequeno delay para garantir que o state foi atualizado
    setTimeout(() => {
      setCartaRevelada(true);
      
      // Aguarda a animação de virar a carta
      setTimeout(() => {
        setRespostasEliminadas(numeroSorteado);
        setCartasUsadas(true);
        
        // Fecha o modal após revelar
        setTimeout(() => {
          setMostrarCartas(false);
          setCartaEscolhida(null);
          setCartaRevelada(false);
          setNumeroSorteado(null);
        }, 1500);
      }, 600);
    }, 50);
  }

  function handleUniversitarios() {
    if (finalizado || respostaSelecionada !== null || universitariosUsados) return;

    // 85% de chance de acerto (universitários são bons, mas não perfeitos)
    const acertarResposta = Math.random() < 0.85;
    
    const respostas = perguntasSorteadas[indice].respostas;
    const correta = perguntasSorteadas[indice].correta;
    
    let sugestao: string;
    
    if (acertarResposta) {
      // Sugerem a resposta correta
      sugestao = respostas[correta];
    } else {
      // Sugerem uma resposta errada aleatória
      const erradas = respostas.filter((_, idx) => idx !== correta);
      sugestao = erradas[Math.floor(Math.random() * erradas.length)];
    }
    
    setSugestaoUniversitarios(sugestao);
    setUniversitariosUsados(true);
    setMostrarUniversitarios(true);
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-24 pb-12 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          <Button variant="outline" onClick={onNavigateHome} size="sm" className="sm:size-auto">
            <Home className="size-4 mr-0 sm:mr-2" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
          <h1 className="text-2xl sm:text-4xl">💰 Jogo do Milhão</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-4 sm:gap-6">
          {/* Header Mobile - Info de Prêmio e Ajudas */}
          <div className="lg:hidden">
            <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-600">
              <CardContent className="pt-4 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="size-5 text-white" />
                    <div>
                      <p className="text-xs text-white/80">Jogando por</p>
                      <p className="font-bold text-white">{premios[indice]}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/20 border-white/40 text-white hover:bg-white/30"
                    onClick={() => setMostrarPremiosMobile(true)}
                  >
                    <Trophy className="size-4 mr-1" />
                    Ver Todos
                  </Button>
                </div>
                {/* Barra de Progresso */}
                <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-500 rounded-full"
                    style={{ width: `${((indice + 1) / perguntasSorteadas.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-white/80 mt-1 text-center">
                  Pergunta {indice + 1} de {perguntasSorteadas.length}
                </p>
              </CardContent>
            </Card>

            {/* Botões de Ajuda Mobile - Sempre Visíveis */}
            {!finalizado && (
              <div className="grid grid-cols-3 gap-2 mt-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex flex-col items-center gap-1 h-auto py-3 bg-white"
                  onClick={() => setMostrarCartas(true)}
                  disabled={cartasUsadas || respostaSelecionada !== null}
                >
                  <span className="text-xl">🃏</span>
                  <span className="text-xs">Cartas</span>
                  {cartasUsadas && <span className="text-[10px] text-red-600">✓ Usado</span>}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex flex-col items-center gap-1 h-auto py-3 bg-white"
                  onClick={handlePular}
                  disabled={puloUsado || respostaSelecionada !== null}
                >
                  <span className="text-xl">⏭️</span>
                  <span className="text-xs">Pular</span>
                  {puloUsado && <span className="text-[10px] text-red-600">✓ Usado</span>}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex flex-col items-center gap-1 h-auto py-3 bg-white"
                  onClick={handleUniversitarios}
                  disabled={universitariosUsados || respostaSelecionada !== null}
                >
                  <span className="text-xl">🎓</span>
                  <span className="text-xs">Univ.</span>
                  {universitariosUsados && <span className="text-[10px] text-red-600">✓ Usado</span>}
                </Button>
              </div>
            )}
          </div>

          {/* Painel de Prêmios (Esquerda no Desktop) */}
          <div className="hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="size-5 text-yellow-600" />
                  Prêmios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {premios.map((premio, idx) => {
                    const isPremioAtual = idx === indice;
                    const isPremioPassado = idx < indice;
                    const isPremioParada = idx === 4 || idx === 9 || idx === 14; // R$ 5k, R$ 50k, R$ 1M
                    
                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all ${
                          isPremioAtual
                            ? 'bg-yellow-500 text-white font-bold scale-105 shadow-lg'
                            : isPremioPassado
                            ? 'bg-green-100 text-green-700 line-through opacity-60'
                            : 'bg-slate-100 text-slate-600'
                        } ${isPremioParada && !isPremioPassado ? 'border-2 border-yellow-600' : ''}`}
                      >
                        <span className="font-mono">{idx + 1}.</span>
                        <span className={isPremioParada ? 'font-bold' : ''}>{premio}</span>
                        {isPremioParada && !isPremioPassado && (
                          <span className="text-xs">🏆</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Área principal do jogo (Centro) */}
          <div className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader>
                {finalizado ? (
                  <div className="space-y-4">
                    <CardTitle className="text-2xl">
                      {tempo === 0
                        ? 'Tempo esgotado!'
                        : acertos === perguntasSorteadas.length
                        ? '🎉 Parabéns! Você ganhou 1 milhão!'
                        : `Fim de jogo! Você acertou ${acertos} pergunta${
                            acertos === 1 ? '' : 's'
                          }`}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Trophy className="size-5 text-yellow-600" />
                      <span className="text-xl">
                        Prêmio: {acertos > 0 ? premios[acertos - 1] : 'R$ 0,00'}
                      </span>
                    </div>
                    <Button onClick={reiniciar}>
                      <RotateCcw className="size-4 mr-2" />
                      Jogar Novamente
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge>
                        Pergunta {indice + 1} de {perguntasSorteadas.length}
                      </Badge>
                      <Badge variant={tempo <= 5 ? 'destructive' : 'default'}>
                        ⏱️ {tempo}s
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{perguntaAtual.pergunta}</CardTitle>
                  </div>
                )}
              </CardHeader>
              {!finalizado && (
                <CardContent className="space-y-3">
                  {respostasEmbaralhadas
                    .filter((resp, idx, arr) => {
                      if (!respostasEliminadas) return true;
                      if (resp.correta) return true;
                      const erradas = arr.filter((r) => !r.correta);
                      const idxErrada = erradas.indexOf(resp);
                      return idxErrada < erradas.length - respostasEliminadas;
                    })
                    .map((resp, i) => (
                      <Button
                        key={i}
                        className={`w-full justify-start text-left h-auto py-3 px-4 text-sm sm:text-base ${
                          respostaSelecionada === null
                            ? ''
                            : resp.correta
                            ? 'bg-green-600 hover:bg-green-600'
                            : respostaSelecionada === i
                            ? 'bg-red-600 hover:bg-red-600'
                            : 'opacity-50'
                        }`}
                        variant={respostaSelecionada === null ? 'outline' : 'default'}
                        disabled={respostaSelecionada !== null}
                        onClick={() => handleResposta(resp.correta, i)}
                      >
                        <span className="mr-2 font-bold">
                          {String.fromCharCode(65 + i)}:
                        </span>
                        {resp.texto}
                      </Button>
                    ))}
                </CardContent>
              )}
            </Card>
          </div>

          {/* Painel de Ajuda (Direita no Desktop) */}
          <div className="hidden lg:block space-y-4">
            {/* Painel de Ajudas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ajuda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => setMostrarCartas(true)}
                    disabled={cartasUsadas || finalizado || respostaSelecionada !== null}
                  >
                    🃏 Cartas
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handlePular}
                    disabled={puloUsado || finalizado || respostaSelecionada !== null}
                  >
                    <SkipForward className="size-4 mr-2" />
                    Pular
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handleUniversitarios}
                    disabled={universitariosUsados || finalizado || respostaSelecionada !== null}
                  >
                    <GraduationCap className="size-4 mr-2" />
                    Universitários
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal de Cartas */}
        {mostrarCartas && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => !cartaRevelada && setMostrarCartas(false)}
          >
            <Card className="w-full max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Escolha uma carta</CardTitle>
                <CardDescription className="text-sm">
                  {!cartaRevelada 
                    ? 'Clique em uma carta para revelar quantas respostas serão eliminadas'
                    : 'Carta revelada! Eliminando respostas...'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {[0, 1, 2, 3].map((num) => {
                    const isEscolhida = cartaEscolhida === num;
                    const isRevelada = isEscolhida && cartaRevelada;
                    
                    return (
                      <button
                        key={num}
                        onClick={() => !cartaRevelada && handleEscolherCarta(num)}
                        disabled={cartaRevelada}
                        className={`aspect-[2/3] rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                          isRevelada
                            ? 'bg-gradient-to-br from-green-500 to-green-700 border-green-600 scale-110'
                            : cartaRevelada
                            ? 'bg-gradient-to-br from-slate-400 to-slate-600 border-slate-500 opacity-50'
                            : 'bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600 hover:scale-105 cursor-pointer active:scale-95'
                        } shadow-lg text-white`}
                      >
                        {isRevelada ? (
                          <>
                            <span className="text-2xl sm:text-4xl mb-1 sm:mb-2">✓</span>
                            <span className="text-[10px] sm:text-xs mb-1">Eliminar</span>
                            <span className="text-xl sm:text-3xl font-bold">{numeroSorteado}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-3xl sm:text-5xl mb-1 sm:mb-2">🃏</span>
                            <span className="text-xs opacity-75">?</span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Feedback de Pulo */}
        {mostrarFeedbackPulo && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200 p-4"
            onClick={() => setMostrarFeedbackPulo(false)}
          >
            <Card className="w-full max-w-md mx-auto animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl sm:text-6xl">⏭️</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Pergunta Pulada!</h3>
                    <p className="text-sm sm:text-base text-slate-600">Avançando para a próxima pergunta sem perder o valor acumulado</p>
                  </div>
                  <Button onClick={() => setMostrarFeedbackPulo(false)} className="w-full">
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Universitários */}
        {mostrarUniversitarios && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200 p-4"
            onClick={() => setMostrarUniversitarios(false)}
          >
            <Card className="w-full max-w-lg mx-auto animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="flex items-center gap-3">
                  <GraduationCap className="size-6 sm:size-8 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base sm:text-lg">Conselho dos Universitários</CardTitle>
                    <CardDescription className="text-blue-100 text-sm">
                      Eles analisaram a questão e chegaram a uma conclusão
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-lg border-2 border-slate-200">
                    <p className="text-xs sm:text-sm text-slate-600 mb-2">💬 Opinião dos universitários:</p>
                    <p className="text-base sm:text-lg font-semibold text-slate-900">{sugestaoUniversitarios}</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded">
                    <p className="text-xs sm:text-sm text-yellow-800">
                      <strong>⚠️ Atenção:</strong> Esta é apenas uma opinião. Os universitários podem estar errados. A decisão final é sua!
                    </p>
                  </div>

                  <Button 
                    onClick={() => setMostrarUniversitarios(false)} 
                    className="w-full"
                    size="lg"
                  >
                    Entendi, vou decidir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Prêmios Mobile */}
        {mostrarPremiosMobile && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200 p-4"
            onClick={() => setMostrarPremiosMobile(false)}
          >
            <Card className="w-full max-w-md mx-auto animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-600 text-white">
                <CardTitle className="text-lg sm:text-xl">Prêmios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                {premios.map((premio, idx) => {
                  const isPremioAtual = idx === indice;
                  const isPremioPassado = idx < indice;
                  const isPremioParada = idx === 4 || idx === 9 || idx === 14; // R$ 5k, R$ 50k, R$ 1M
                  
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all ${
                        isPremioAtual
                          ? 'bg-yellow-500 text-white font-bold scale-105 shadow-lg'
                          : isPremioPassado
                          ? 'bg-green-100 text-green-700 line-through opacity-60'
                          : 'bg-slate-100 text-slate-600'
                      } ${isPremioParada && !isPremioPassado ? 'border-2 border-yellow-600' : ''}`}
                    >
                      <span className="font-mono">{idx + 1}.</span>
                      <span className={isPremioParada ? 'font-bold' : ''}>{premio}</span>
                      {isPremioParada && !isPremioPassado && (
                        <span className="text-xs">🏆</span>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}