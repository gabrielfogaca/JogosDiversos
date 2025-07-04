// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../src/components/navbar';
import Forca from '../src/components/jogodaforca/Forca';
import CampoMinado from '../src/components/campominado/CampoMinado';
import JogoDoMilhao from '../src/components/jogodomilhao/JogoDoMilhao';

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
