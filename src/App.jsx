import { useState } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';

// Importando os componentes dos jogos
import JogoDaForca from './components/jogodaforca/forca.jsx';
import CampoMinado from './components/campominado/campominado.jsx';
import JogoDoMilhao from './components/jogodomilhao/jogodomilhao.jsx';
import SudokuBoard from './components/sudoku/sudokuboard.jsx';

export default function App() {
  const [jogoAtivo, setJogoAtivo] = useState('homepage');

  const renderJogo = () => {
    switch (jogoAtivo) {
      case 'campominado':
        return <CampoMinado />;
      case 'jogodomilhao':
        return <JogoDoMilhao />;
      case 'forca':
        return <JogoDaForca />;
      case 'sudoku':
        return <SudokuBoard />;
      case 'homepage':
      default:
        return <Homepage onSelectGame={setJogoAtivo} />;
    }
  };

  return (
    <>
      <Navbar onSelectGame={setJogoAtivo} jogoAtivo={jogoAtivo} />
      {renderJogo()}
    </>
  );
}
