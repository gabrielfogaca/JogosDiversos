// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.jsx';
import Forca from './components/Jogodaforca/Forca.jsx';
import CampoMinado from './components/Campominado/CampoMinado.jsx';
import JogoDoMilhao from './components/Jogodomilhao/JogoDoMilhao.jsx';

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
