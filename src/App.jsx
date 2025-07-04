// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Forca from './components/jogodaforca/Forca';
import CampoMinado from './components/campominado/CampoMinado';

export default function App() {
  const [jogoAtivo, setJogoAtivo] = useState('forca'); // forca | campominado | ...

  const renderJogo = () => {
    switch (jogoAtivo) {
      case 'campominado':
        return <CampoMinado />;
      case 'forca':
      default:
        return <Forca />;
    }
  };

  return (
    <>
      {/* passa callback para a navbar */}
      <Navbar onSelectGame={setJogoAtivo} jogoAtivo={jogoAtivo} />
      {renderJogo()}
    </>
  );
}
