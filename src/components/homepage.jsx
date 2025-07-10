import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Homepage({ onSelectGame }) {
  const gamesList = [
    { id: 'forca', name: 'Jogo da Forca' },
    { id: 'palavras-cruzadas', name: 'Palavras Cruzadas' },
    { id: 'caca-palavras', name: 'Caça Palavras' },
    { id: 'jogodomilhao', name: 'Jogo do Milhão' },
    { id: 'sudoku', name: 'Sudoku' },
    { id: 'quase-nada', name: 'Quase Nada' },
    { id: 'termo', name: 'Termo' },
    { id: 'dueto', name: 'Dueto' },
    { id: 'quarteto', name: 'Quarteto' },
    { id: 'campominado', name: 'Campo Minado' },
  ];

  // Divide a lista de jogos em grupos de 3 para as linhas
  const groupedGames = [];
  for (let i = 0; i < gamesList.length; i += 3) {
    groupedGames.push(gamesList.slice(i, i + 3));
  }

  // A função de clique agora passa diretamente o 'id' do jogo
  const handleButtonClick = (gameId) => {
    onSelectGame(gameId);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="text-center">
        {groupedGames.map((group, rowIndex) => (
          <Row key={rowIndex} className="mb-4 justify-content-center">
            {group.map((game, colIndex) => (
              <Col key={game.id} xs="auto">
                <Button
                  variant="primary"
                  className="p-3 border rounded text-capitalize"
                  onClick={() => handleButtonClick(game.id)} // Passa o ID do jogo
                >
                  {game.name} {/* Exibe o NOME do jogo */}
                </Button>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </Container>
  );
}
