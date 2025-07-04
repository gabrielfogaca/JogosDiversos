import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
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
            {/* Dropdown de Jogos */}
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
                  <a className="dropdown-item" href="#forca">
                    Jogo da Forca
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#palavras-cruzadas">
                    Palavras Cruzadas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#caca-palavras">
                    Caça Palavras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#milhao">
                    Jogo do Milhão
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#sudoku">
                    Sudoku
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#quase-nada">
                    Quase Nada
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#campo-minado">
                    Campo Minado
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#termo">
                    Termo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#dueto">
                    Dueto
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#quarteto">
                    Quarteto
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
