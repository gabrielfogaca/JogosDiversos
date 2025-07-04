import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar({ jogoAtivo, onSelectGame }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
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
                href="#"
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
                {/* acrescente novos jogos aqui seguindo o padrão */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
