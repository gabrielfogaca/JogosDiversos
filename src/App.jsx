// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.jsx';
import Forca from './components/jogodaforca/forca.jsx';
import CampoMinado from './components/campominado/campoMinado.jsx';
import JogoDoMilhao from './components/jogodomilhao/jogoDoMilhao.jsx';

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
