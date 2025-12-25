import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Home, Construction } from 'lucide-react';

interface GamePlaceholderProps {
  gameName: string;
  gameId: string;
  onNavigateHome: () => void;
}

export function GamePlaceholder({ gameName, gameId, onNavigateHome }: GamePlaceholderProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onNavigateHome}>
            <Home className="size-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl">🎮 {gameName}</h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-dashed">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="size-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Construction className="size-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">Jogo em Desenvolvimento</CardTitle>
              <CardDescription className="text-center">
                O jogo <strong>{gameName}</strong> está sendo desenvolvido e em breve estará disponível para você jogar!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-100 rounded-lg p-4">
                <h3 className="mb-2">📋 Status do Projeto</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✅ Design da interface planejado</li>
                  <li>⏳ Implementação da lógica do jogo</li>
                  <li>⏳ Testes e ajustes finais</li>
                  <li>⏳ Lançamento oficial</li>
                </ul>
              </div>

              <div className="text-center text-sm text-slate-500">
                <p>Enquanto isso, explore os outros jogos disponíveis!</p>
              </div>

              <div className="flex justify-center pt-4">
                <Button onClick={onNavigateHome}>
                  Explorar Jogos Disponíveis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
