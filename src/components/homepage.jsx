import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Homepage({ onSelectGame }) {
  const gameMap = {
    1: 'campominado',
    2: 'forca',
    3: 'jogodomilhao',
    4: 'Sudoku',
    5: 'campominado',
    6: 'jogodomilhao',
    7: 'forca',
    8: 'campominado',
    9: 'jogodomilhao',
    10: 'forca',
  };

  const elementos = Array.from({ length: 10 }, (_, i) => i + 1);
  const grupos = [];
  for (let i = 0; i < elementos.length; i += 3) {
    grupos.push(elementos.slice(i, i + 3));
  }

  const handleButtonClick = (item) => {
    const game = gameMap[item];
    if (game) {
      onSelectGame(game);
    } else {
      console.warn(`Nenhum jogo mapeado para o elemento ${item}`);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <div className="text-center">
        {grupos.map((grupo, index) => (
          <Row key={index} className="mb-4 justify-content-center">
            {grupo.map((item) => {
              const gameName = gameMap[item];
              return (
                <Col key={item} xs="auto">
                  <Button
                    variant="primary"
                    className="p-3 border rounded text-capitalize"
                    onClick={() => handleButtonClick(item)}
                  >
                    {gameName || `Elemento ${item}`}
                  </Button>
                </Col>
              );
            })}
          </Row>
        ))}
      </div>
    </Container>
  );
}
