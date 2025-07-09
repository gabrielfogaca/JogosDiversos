import { useState } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Forca from './components/campominado/campominado.jsx';
import JogoDoMilhao from './components/jogodomilhao/jogodomilhao.jsx';
import CampoMinado from './components/jogodaforca/forca.jsx';
import Sudoku from './components/sudoku/SudokuBoard.jsx';

export default function App() {
  const [jogoAtivo, setJogoAtivo] = useState('homepage');

  const renderJogo = () => {
    switch (jogoAtivo) {
      case 'campominado':
        return <CampoMinado />;
      case 'jogodomilhao':
        return <JogoDoMilhao />;
      case 'forca':
        return <Forca />;
      case 'Sudoku':
        return <Sudoku />;
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
