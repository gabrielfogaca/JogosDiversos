import React from 'react';

export default function TecladoVirtual({ letrasUsadas, onTecla, desativado }) {
  const linhas = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  return (
    <div className="virtual-keyboard mt-3">
      {linhas.map((linha, i) => (
        <div key={i} className="d-flex gap-2 mb-2">
          {/* Espaçamento para alinhar com o teclado real */}
          {i === 1 && <div style={{ width: '22px' }} />}
          {i === 2 && <div style={{ width: '66px' }} />}

          {linha.split('').map((letra) => (
            <button
              key={letra}
              className="btn btn-outline-dark"
              onClick={() => onTecla(letra)}
              disabled={letrasUsadas.includes(letra) || desativado}
            >
              {letra}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
