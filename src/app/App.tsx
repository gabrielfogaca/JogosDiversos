import { useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './components/HomePage';
import JogoDaForca from './components/games/JogoDaForca';
import { CampoMinado } from './components/games/CampoMinado';
import { JogoDoMilhao } from './components/games/JogoDoMilhao';
import { Sudoku } from './components/games/Sudoku';
import { Termo } from './components/games/Termo';
import { Dueto } from './components/games/Dueto';
import { Quarteto } from './components/games/Quarteto';
import { GamePlaceholder } from './components/games/GamePlaceholder';

const gameNames: Record<string, string> = {
  'forca': 'Jogo da Forca',
  'campominado': 'Campo Minado',
  'palavras-cruzadas': 'Palavras Cruzadas',
  'jogodomilhao': 'Jogo do Milhão',
  'caca-palavras': 'Caça Palavras',
  'sudoku': 'Sudoku',
  'quase-nada': 'Quase Nada',
  'termo': 'Termo',
  'dueto': 'Dueto',
  'quarteto': 'Quarteto',
};

export default function App() {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const handleSelectGame = (gameId: string) => {
    setCurrentGame(gameId);
  };

  const handleNavigateHome = () => {
    setCurrentGame(null);
  };

  const renderGame = () => {
    if (!currentGame) {
      return <HomePage onSelectGame={handleSelectGame} />;
    }

    // Jogos implementados
    switch (currentGame) {
      case 'forca':
        return <JogoDaForca onNavigateHome={handleNavigateHome} />;
      case 'campominado':
        return <CampoMinado onNavigateHome={handleNavigateHome} />;
      case 'jogodomilhao':
        return <JogoDoMilhao onNavigateHome={handleNavigateHome} />;
      case 'sudoku':
        return <Sudoku onNavigateHome={handleNavigateHome} />;
      case 'termo':
        return <Termo onNavigateHome={handleNavigateHome} />;
      case 'dueto':
        return <Dueto onNavigateHome={handleNavigateHome} />;
      case 'quarteto':
        return <Quarteto onNavigateHome={handleNavigateHome} />;
      
      // Placeholder para jogos não implementados ainda
      default:
        return (
          <GamePlaceholder
            gameName={gameNames[currentGame] || 'Jogo'}
            gameId={currentGame}
            onNavigateHome={handleNavigateHome}
          />
        );
    }
  };

  return (
    <div className="size-full">
      <NavigationBar currentGame={currentGame} onNavigateHome={handleNavigateHome} />
      {renderGame()}
    </div>
  );
}