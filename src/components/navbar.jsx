import React from 'react';
// Importa os estilos CSS do Bootstrap (já estava correto)
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa os scripts JS do Bootstrap (já estava correto)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Se Homepage for um componente que você renderiza na rota '/', não precisa importá-lo aqui.
// import Homepage from './homepage'; // Removido, pois não é usado diretamente aqui

export default function Navbar({ jogoAtivo, onSelectGame }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        {/*
          AJUSTE AQUI: O href deve ser uma STRING de URL.
          Se a intenção é ir para a página inicial, use "/".
          Se você estiver usando React Router, usaria o componente <Link to="/">.
        */}
        <a className="navbar-brand" href="/">
          {' '}
          {/* Ajustado: href agora é uma string URL */}
          Jogos Diversos
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarGames"
          aria-controls="navbarGames"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarGames">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Dropdown Jogos */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#" // Mantém href="#" para o dropdown (Bootstrap JS lida com isso)
                id="jogosDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Jogos
              </a>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="jogosDropdown"
              >
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'forca' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('forca')}
                  >
                    Jogo da Forca
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'palavras-cruzadas' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('palavras-cruzadas')}
                  >
                    Palavras Cruzadas
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'caca-palavras' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('caca-palavras')}
                  >
                    Caça Palavras
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'jogodomilhao' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('jogodomilhao')}
                  >
                    Jogo do Milhão
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'sudoku' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('sudoku')}
                  >
                    Sudoku
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'quase-nada' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('quase-nada')}
                  >
                    Quase Nada
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'campominado' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('campominado')}
                  >
                    Campo Minado
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'termo' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('termo')}
                  >
                    Termo
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'dueto' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('dueto')}
                  >
                    Dueto
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      jogoAtivo === 'quarteto' ? 'active' : ''
                    }`}
                    onClick={() => onSelectGame('quarteto')}
                  >
                    Quarteto
                  </button>
                </li>
                {/* Acrescente novos jogos aqui seguindo o padrão */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
