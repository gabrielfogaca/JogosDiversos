import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Home, RotateCcw } from 'lucide-react';
import { getPalavraAleatoria } from './data/palavras-forca';

export default function JogoDaForca({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [palavra, setPalavra] = useState('');
  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [status, setStatus] = useState<'jogando' | 'ganhou' | 'perdeu'>('jogando');

  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  useEffect(() => {
    if (status === 'jogando' && palavra) {
      const ganhou = palavra.split('').every(letra => letrasAcertadas.includes(letra));
      if (ganhou) {
        setStatus('ganhou');
      }
    }
  }, [letrasAcertadas, palavra, status]);

  const iniciarNovoJogo = () => {
    const novaPalavra = getPalavraAleatoria();
    setPalavra(novaPalavra);
    setLetrasAcertadas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setStatus('jogando');
  };

  const handleLetraClick = (letra: string) => {
    if (status !== 'jogando' || letrasAcertadas.includes(letra) || letrasErradas.includes(letra)) {
      return;
    }

    if (palavra.includes(letra)) {
      setLetrasAcertadas([...letrasAcertadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      const novasTentativas = tentativasRestantes - 1;
      setTentativasRestantes(novasTentativas);
      if (novasTentativas === 0) {
        setStatus('perdeu');
      }
    }
  };

  const exibirPalavra = () => {
    return palavra.split('').map((letra, index) => (
      <span
        key={index}
        className="inline-flex items-center justify-center size-12 border-b-4 border-slate-300 mx-1 text-2xl"
      >
        {letrasAcertadas.includes(letra) ? letra : ''}
      </span>
    ));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onNavigateHome}>
            <Home className="size-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl">🎮 Jogo da Forca</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Adivinhe a Palavra</CardTitle>
                <div className="flex gap-2">
                  <Badge variant={tentativasRestantes > 3 ? 'default' : 'destructive'}>
                    {tentativasRestantes} tentativas
                  </Badge>
                  {status === 'ganhou' && <Badge variant="default">🎉 Você Venceu!</Badge>}
                  {status === 'perdeu' && <Badge variant="destructive">😢 Game Over</Badge>}
                </div>
              </div>
              <CardDescription>
                Escolha as letras para descobrir a palavra escondida
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Boneco da Forca */}
              <div className="flex justify-center">
                <div className="relative w-48 h-64 border-4 border-slate-300 rounded-lg bg-white p-4">
                  <svg viewBox="0 0 200 250" className="w-full h-full">
                    {/* Base */}
                    <line x1="20" y1="230" x2="180" y2="230" stroke="black" strokeWidth="4" />
                    <line x1="60" y1="230" x2="60" y2="20" stroke="black" strokeWidth="4" />
                    <line x1="60" y1="20" x2="140" y2="20" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="20" x2="140" y2="50" stroke="black" strokeWidth="4" />
                    
                    {/* Cabeça */}
                    {tentativasRestantes < 6 && (
                      <circle cx="140" cy="70" r="20" stroke="black" strokeWidth="4" fill="none" />
                    )}
                    
                    {/* Corpo */}
                    {tentativasRestantes < 5 && (
                      <line x1="140" y1="90" x2="140" y2="150" stroke="black" strokeWidth="4" />
                    )}
                    
                    {/* Braço Esquerdo */}
                    {tentativasRestantes < 4 && (
                      <line x1="140" y1="110" x2="110" y2="130" stroke="black" strokeWidth="4" />
                    )}
                    
                    {/* Braço Direito */}
                    {tentativasRestantes < 3 && (
                      <line x1="140" y1="110" x2="170" y2="130" stroke="black" strokeWidth="4" />
                    )}
                    
                    {/* Perna Esquerda */}
                    {tentativasRestantes < 2 && (
                      <line x1="140" y1="150" x2="120" y2="190" stroke="black" strokeWidth="4" />
                    )}
                    
                    {/* Perna Direita */}
                    {tentativasRestantes < 1 && (
                      <line x1="140" y1="150" x2="160" y2="190" stroke="black" strokeWidth="4" />
                    )}
                  </svg>
                </div>
              </div>

              {/* Palavra */}
              <div className="flex justify-center items-center min-h-16">
                {exibirPalavra()}
              </div>

              {/* Palavra revelada ao perder */}
              {status === 'perdeu' && (
                <div className="text-center">
                  <p className="text-slate-600">A palavra era:</p>
                  <p className="text-2xl text-red-600">{palavra}</p>
                </div>
              )}

              {/* Alfabeto */}
              <div className="grid grid-cols-7 gap-2">
                {alfabeto.map((letra) => {
                  const usada = letrasAcertadas.includes(letra) || letrasErradas.includes(letra);
                  const acertou = letrasAcertadas.includes(letra);
                  const errou = letrasErradas.includes(letra);

                  return (
                    <Button
                      key={letra}
                      variant={acertou ? 'default' : errou ? 'destructive' : 'outline'}
                      disabled={usada || status !== 'jogando'}
                      onClick={() => handleLetraClick(letra)}
                      className="aspect-square"
                    >
                      {letra}
                    </Button>
                  );
                })}
              </div>

              {/* Botão Novo Jogo */}
              {status !== 'jogando' && (
                <div className="flex justify-center">
                  <Button size="lg" onClick={iniciarNovoJogo}>
                    <RotateCcw className="size-4 mr-2" />
                    Novo Jogo
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}