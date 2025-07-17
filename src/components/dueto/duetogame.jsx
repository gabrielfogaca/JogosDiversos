// src/components/Dueto/DuetoGame.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import GuessRow from './guessrow';
import DuetoKeyboard from './duetokeyboard';

import {
  WORD_LENGTH,
  DUETO_MAX_ATTEMPTS,
  getRandomSolution,
  allValidWords,
  checkGuess,
  normalizeWord,
} from './gameutils';

import './duetogame.css';
const DuetoGame = () => {
  // Palavras secretas
  const [solution1Original, setSolution1Original] = useState('');
  const [solution1Normalized, setSolution1Normalized] = useState('');
  const [solution2Original, setSolution2Original] = useState('');
  const [solution2Normalized, setSolution2Normalized] = useState('');

  // Estados dos tabuleiros
  const [guesses, setGuesses] = useState(Array(DUETO_MAX_ATTEMPTS).fill('')); // Palpites são compartilhados
  const [feedback1, setFeedback1] = useState(
    Array(DUETO_MAX_ATTEMPTS).fill(null),
  ); // Feedback para a palavra 1
  const [feedback2, setFeedback2] = useState(
    Array(DUETO_MAX_ATTEMPTS).fill(null),
  ); // Feedback para a palavra 2

  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState('');

  // Estado das letras do teclado (consolidado para ambos os tabuleiros)
  const letterStates = useMemo(() => {
    const states = {};

    // Iterar sobre todos os palpites feitos e seus feedbacks correspondentes
    for (let i = 0; i < currentGuessIndex; i++) {
      const currentWordGuess = guesses[i].toUpperCase(); // Palpite em maiúsculas para obter letras
      const currentFeedback1 = feedback1[i];
      const currentFeedback2 = feedback2[i];

      // Processar feedback para o tabuleiro 1
      if (currentFeedback1) {
        for (let j = 0; j < WORD_LENGTH; j++) {
          const letter = normalizeWord(currentWordGuess[j]).toUpperCase(); // Normaliza a letra para a chave
          const color = currentFeedback1[j];

          // Lógica de prioridade de cor: green > yellow > gray
          if (states[letter] === 'green') continue;
          if (states[letter] === 'yellow' && color === 'gray') continue;

          states[letter] = color;
        }
      }

      // Processar feedback para o tabuleiro 2
      if (currentFeedback2) {
        for (let j = 0; j < WORD_LENGTH; j++) {
          const letter = normalizeWord(currentWordGuess[j]).toUpperCase(); // Normaliza a letra para a chave
          const color = currentFeedback2[j];

          // Lógica de prioridade de cor: green > yellow > gray (se a letra já é verde em um, ela continua verde)
          if (states[letter] === 'green') continue;
          if (states[letter] === 'yellow' && color === 'gray') continue;

          states[letter] = color;
        }
      }
    }
    return states;
  }, [guesses, feedback1, feedback2, currentGuessIndex]);

  // Lidar com a submissão do palpite
  const handleEnter = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage(`A palavra deve ter ${WORD_LENGTH} letras.`);
      return;
    }

    const normalizedCurrentGuess = normalizeWord(currentGuess).toUpperCase(); // Normaliza e coloca em maiúsculas

    // Valida a palavra digitada contra a lista de palavras normalizadas do dicionário
    if (!allValidWords.has(normalizedCurrentGuess.toLowerCase())) {
      // allValidWords está em minúsculas
      setMessage('Palavra não reconhecida.');
      return;
    }

    setMessage(''); // Limpa a mensagem se a palavra for válida

    // Obter feedback para ambos os tabuleiros
    const currentFeedback1 = checkGuess(
      normalizedCurrentGuess,
      solution1Normalized,
    );
    const currentFeedback2 = checkGuess(
      normalizedCurrentGuess,
      solution2Normalized,
    );

    // Atualizar palpites e feedbacks
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[currentGuessIndex] = currentGuess; // Armazena o palpite original (com acentos)
      return newGuesses;
    });
    setFeedback1((prevFeedback) => {
      const newFeedback = [...prevFeedback];
      newFeedback[currentGuessIndex] = currentFeedback1;
      return newFeedback;
    });
    setFeedback2((prevFeedback) => {
      const newFeedback = [...prevFeedback];
      newFeedback[currentGuessIndex] = currentFeedback2;
      return newFeedback;
    });

    // Verificar vitória ou derrota
    const isGame1Won = normalizedCurrentGuess === solution1Normalized;
    const isGame2Won = normalizedCurrentGuess === solution2Normalized;

    if (isGame1Won && isGame2Won) {
      setGameStatus('won');
      setMessage('Parabéns! Você acertou ambas as palavras!');
    } else if (currentGuessIndex === DUETO_MAX_ATTEMPTS - 1) {
      setGameStatus('lost');
      setMessage(
        `Você perdeu! As palavras eram: ${solution1Original} e ${solution2Original}`,
      );
    } else {
      setCurrentGuessIndex((prev) => prev + 1);
      setCurrentGuess('');
    }
  }, [
    currentGuess,
    currentGuessIndex,
    solution1Normalized,
    solution2Normalized,
    solution1Original,
    solution2Original,
  ]);

  // Inicializa um novo jogo Dueto
  const startNewGame = useCallback(() => {
    // Pega duas palavras aleatórias
    const { original: sol1Orig, normalized: sol1Norm } = getRandomSolution();
    let { original: sol2Orig, normalized: sol2Norm } = getRandomSolution();

    // Garante que as duas palavras sejam diferentes
    while (sol2Norm === sol1Norm) {
      // Compara as versões normalizadas para garantir diferença
      ({ original: sol2Orig, normalized: sol2Norm } = getRandomSolution());
    }

    setSolution1Original(sol1Orig);
    setSolution1Normalized(sol1Norm);
    setSolution2Original(sol2Orig);
    setSolution2Normalized(sol2Norm);

    setGuesses(Array(DUETO_MAX_ATTEMPTS).fill(''));
    setFeedback1(Array(DUETO_MAX_ATTEMPTS).fill(null));
    setFeedback2(Array(DUETO_MAX_ATTEMPTS).fill(null));
    setCurrentGuessIndex(0);
    setCurrentGuess('');
    setGameStatus('playing');
    setMessage('');
    // letterStates será recalculado via useMemo automaticamente
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Lidar com entradas do teclado físico
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameStatus !== 'playing') return;

      const key = event.key.toUpperCase(); // Sempre converte para maiúscula

      if (key === 'BACKSPACE' || key === 'DEL' || key === '←') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === 'ENTER') {
        handleEnter();
      } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
        // Permite apenas letras A-Z para digitação
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameStatus, handleEnter]);

  // Lidar com clique do teclado virtual
  const handleKeyPress = useCallback(
    (key) => {
      if (gameStatus !== 'playing') return;

      if (key === 'BACKSPACE' || key === '←') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === 'ENTER') {
        handleEnter();
      } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
        // Teclado virtual envia letras normais
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    },
    [currentGuess, gameStatus, handleEnter],
  );

  return (
    <div className="dueto-game-container">
      <h1>Dueto</h1>
      {message && <p className="game-message">{message}</p>}

      <div className="dueto-boards-wrapper">
        {/* Tabuleiro 1 */}
        <div className="board board-1">
          <h2>Jogo 1</h2>
          {guesses.map((guess, index) => (
            <GuessRow
              key={`board1-${index}`}
              guess={index === currentGuessIndex ? currentGuess : guess}
              solutionFeedback={feedback1[index]}
              isCurrentGuess={
                index === currentGuessIndex && gameStatus === 'playing'
              }
            />
          ))}
        </div>

        {/* Tabuleiro 2 */}
        <div className="board board-2">
          <h2>Jogo 2</h2>
          {guesses.map((guess, index) => (
            <GuessRow
              key={`board2-${index}`}
              guess={index === currentGuessIndex ? currentGuess : guess}
              solutionFeedback={feedback2[index]}
              isCurrentGuess={
                index === currentGuessIndex && gameStatus === 'playing'
              }
            />
          ))}
        </div>
      </div>

      {gameStatus !== 'playing' && (
        <button onClick={startNewGame} className="new-game-button">
          Novo Jogo
        </button>
      )}
      <DuetoKeyboard onKeyPress={handleKeyPress} letterStates={letterStates} />
    </div>
  );
};

export default DuetoGame;
