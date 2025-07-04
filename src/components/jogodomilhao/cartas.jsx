import React, { useState } from 'react';
import backcard from './imgs/backcard.png'; // Imagem de fundo para as cartas

export default function Cartas({ onEscolherCarta }) {
  const [cartaVirada, setCartaVirada] = useState(null);
  // Gera valores aleatórios de 0 a 3 para cada carta
  const valores = React.useMemo(() => {
    let arr = [0, 1, 2, 3];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  function handleCarta(idx) {
    setCartaVirada(idx);
    setTimeout(() => {
      if (onEscolherCarta) onEscolherCarta(valores[idx]);
    }, 600); // espera a animação terminar
  }

  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
      <style>
        {`
          .carta-container {
            perspective: 600px;
          }
          .carta-flip {
            width: 60px;
            height: 90px;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
          }
          .carta-flip.virada {
            transform: rotateY(180deg);
          }
          .carta-face, .carta-verso {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-size: 32px;
            font-weight: bold;
          }
          .carta-face {
            background: #1976d2;
            color: #fff;
            border: 2px solid #333;
          }
          .carta-verso {
            background: #fff;
            color: #1976d2;
            border: 2px solid #333;
            transform: rotateY(180deg);
          }
        `}
      </style>
      {valores.map((valor, idx) => (
        <div className="carta-container" key={idx}>
          <button
            onClick={() => handleCarta(idx)}
            disabled={cartaVirada !== null}
            style={{
              width: 60,
              height: 90,
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: cartaVirada === null ? 'pointer' : 'default',
            }}
          >
            <div
              className={`carta-flip${cartaVirada === idx ? ' virada' : ''}`}
            >
              <div className="carta-face">
                <img
                  src={backcard}
                  alt="Carta virada"
                  style={{ width: 40, height: 60 }}
                />
              </div>
              <div className="carta-verso">{valor}</div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
