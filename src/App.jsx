import { useState } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';

// --- AJUSTES AQUI ---

// Importe o COMPONENTE CORRETO e chame-o pelo NOME CORRETO
import JogoDaForca from './components/jogodaforca/forca.jsx'; // Nome da pasta/arquivo é 'jogodaforca/forca.jsx'
import CampoMinado from './components/campominado/campominado.jsx'; // Nome da pasta/arquivo é 'campominado/campominado.jsx'
import JogoDoMilhao from './components/jogodomilhao/jogodomilhao.jsx';
import SudokuBoard from './components/sudoku/sudokuboard.jsx'; // Nomeei para SudokuBoard para ser mais claro

// --- FIM DOS AJUSTES DE IMPORTAÇÃO ---

export default function App() {
  const [jogoAtivo, setJogoAtivo] = useState('homepage');

  const renderJogo = () => {
    switch (jogoAtivo) {
      case 'campominado':
        return <CampoMinado />;
      case 'jogodomilhao':
        return <JogoDoMilhao />;
      case 'forca':
        // Agora 'forca' retorna o componente correto
        return <JogoDaForca />;
      case 'sudoku': // <-- Mudei para 'sudoku' (tudo minúsculo) para consistência
        return <SudokuBoard />; // Retorna o componente SudokuBoard
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
