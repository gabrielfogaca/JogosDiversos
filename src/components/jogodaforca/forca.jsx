// src/components/Forca.jsx
import React, { useState, useEffect } from 'react';
import TecladoVirtual from './TecladoVirtual';
import './Forca.css';

import forca1 from './imgs/forca1.png';
import forca2 from './imgs/forca2.png';
import forca3 from './imgs/forca3.png';
import forca4 from './imgs/forca4.png';
import forca5 from './imgs/forca5.png';
import forca6 from './imgs/forca6.png';
import forca7 from './imgs/forca7.png';
import palavrasFaceis from './palavrasFaceis';

const imagensForca = [forca1, forca2, forca3, forca4, forca5, forca6, forca7];
const MAX_ERROS = 6;

/* ------------------------------------------------------------- */
/* Remove acentos, mas mantém “ç/Ç”                              */
function normalizarPalavra(palavra = '') {
  return palavra
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // tira acentos
    .replace(/[^A-Za-zÇç]/g, '') // remove não‑letras, mantém ç
    .toUpperCase();
}
/* ------------------------------------------------------------- */

export default function Forca() {
  const [palavraSecreta, setPalavraSecreta] = useState('');
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [modo, setModo] = useState('dificil'); // 'facil' ou 'dificil'
  const [dica, setDica] = useState('');

  // Função para escolher palavra fácil
  const obterPalavraFacil = () => {
    const sorteio =
      palavrasFaceis[Math.floor(Math.random() * palavrasFaceis.length)];
    setPalavraSecreta(sorteio.palavra);
    setDica(sorteio.dica);
  };

  // Função para buscar palavra difícil (API)
  const obterPalavraAleatoria = async () => {
    let tentativa = 0;

    while (tentativa < 10) {
      try {
        const resp = await fetch('https://api.dicionario-aberto.net/random');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();
        // console.log('🔤 Palavra retornada da API:', json); // 👈 Aqui!
        const bruta = json.word || '';
        const limpa = normalizarPalavra(bruta);

        if (limpa.length >= 3 && !limpa.includes('-') && !limpa.includes(' ')) {
          setPalavraSecreta(limpa);
          setDica(''); // Sem dica no modo difícil
          return;
        }
      } catch (e) {
        // Falha ao obter palavra
      }
      tentativa += 1;
    }
    setPalavraSecreta('REACT');
    setDica('');
  };

  // Carrega palavra ao montar ou ao trocar modo
  useEffect(() => {
    setLetrasUsadas([]);
    setErros(0);
    if (modo === 'facil') {
      obterPalavraFacil();
    } else {
      obterPalavraAleatoria();
    }
  }, [modo]);

  /* ------------------ lógica das teclas ------------------------ */
  const handleTecla = (letra) => {
    if (letrasUsadas.includes(letra) || !palavraSecreta) return;

    setLetrasUsadas((prev) => [...prev, letra]);

    if (!palavraSecreta.includes(letra)) {
      setErros((prev) => Math.min(prev + 1, MAX_ERROS));
    }
  };

  const handleReiniciar = async () => {
    setLetrasUsadas([]);
    setErros(0);
    if (modo === 'facil') {
      obterPalavraFacil();
    } else {
      await obterPalavraAleatoria();
    }
  };

  const palavraOculta = palavraSecreta
    .split('')
    .map((l) => (letrasUsadas.includes(l) ? l : '_'))
    .join(' ');

  const perdeu = erros >= MAX_ERROS;
  const ganhou =
    palavraSecreta && palavraOculta.replace(/ /g, '') === palavraSecreta;

  /* ------------------------- UI ------------------------------- */
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-center w-100" style={{ maxWidth: '600px' }}>
        <h2>Jogo da Forca</h2>

        {/* Botões de modo */}
        <div className="mb-3">
          <button
            className={`btn btn-sm me-2 ${
              modo === 'facil' ? 'btn-success' : 'btn-outline-success'
            }`}
            onClick={() => setModo('facil')}
            disabled={modo === 'facil'}
          >
            Fácil
          </button>
          <button
            className={`btn btn-sm ${
              modo === 'dificil' ? 'btn-danger' : 'btn-outline-danger'
            }`}
            onClick={() => setModo('dificil')}
            disabled={modo === 'dificil'}
          >
            Difícil
          </button>
        </div>

        <img
          src={imagensForca[Math.min(erros, 6)]}
          alt={`Forca ${erros}`}
          style={{ maxWidth: '250px' }}
          className="my-3"
        />

        <h3 style={{ letterSpacing: '10px' }} className="mb-4">
          {palavraSecreta ? palavraOculta : '...'}
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TecladoVirtual
            letrasUsadas={letrasUsadas}
            onTecla={handleTecla}
            desativado={perdeu || ganhou || !palavraSecreta}
          />
        </div>

        {/* Dica para o modo fácil */}
        {modo === 'facil' && dica && (
          <div className="mt-3 text-primary">
            <strong>Dica:</strong> {dica}
          </div>
        )}

        <button className="btn btn-primary mt-4" onClick={handleReiniciar}>
          Reiniciar Jogo
        </button>

        {perdeu && (
          <div className="text-danger mt-4">
            Você perdeu! A palavra era: <strong>{palavraSecreta}</strong>
          </div>
        )}
        {ganhou && (
          <div className="text-success mt-4">
            Parabéns! Você acertou a palavra!
          </div>
        )}
      </div>
    </div>
  );
}
