// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './navbar';
import Forca from './components/jogodaforca/Forca';
import CampoMinado from './components/campominado/CampoMinado';
import JogoDoMilhao from './components/jogodomilhao/JogoDoMilhao';

export default function App() {
  const [jogoAtivo, setJogoAtivo] = useState('forca'); // 'forca' | 'campominado' | 'jogodomilhao'

  const renderJogo = () => {
    switch (jogoAtivo) {
      case 'campominado':
        return <CampoMinado />;
      case 'jogodomilhao':
        return <JogoDoMilhao />;
      case 'forca':
      default:
        return <Forca />;
    }
  };

  return (
    <>
      <Navbar onSelectGame={setJogoAtivo} jogoAtivo={jogoAtivo} />
      {renderJogo()}
    </>
  );
}
