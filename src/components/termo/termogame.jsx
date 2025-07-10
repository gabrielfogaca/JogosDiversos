// src/termo/TermoGame.jsx
import React, { useState, useEffect, useCallback } from 'react';
import GuessRow from './guessRow';
import TermoKeyboard from './termokeyboard';
import {
  WORD_LENGTH,
  MAX_ATTEMPTS,
  getRandomSolution,
  allValidWords,
  checkGuess,
} from './termowords';

import './termogame.css';

const TermoGame = () => {
  const [solutionOriginal, setSolutionOriginal] = useState(''); // Armazena a palavra com acentos
  const [solutionNormalized, setSolutionNormalized] = useState(''); // Armazena a palavra sem acentos para lógica
  const [guesses, setGuesses] = useState(Array(MAX_ATTEMPTS).fill(''));
  const [feedback, setFeedback] = useState(Array(MAX_ATTEMPTS).fill(null));
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState('');
  const [letterStates, setLetterStates] = useState({});

  // Função auxiliar para normalizar (remover acentos) do palpite do usuário
  const normalizeInputGuess = useCallback((word) => {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }, []);

  const handleEnter = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage(`A palavra deve ter ${WORD_LENGTH} letras.`);
      return;
    }

    // Normaliza o palpite do usuário para a validação no dicionário
    const normalizedCurrentGuess =
      normalizeInputGuess(currentGuess).toLowerCase();

    // Valida a palavra digitada contra a lista de palavras normalizadas do dicionário
    if (!allValidWords.has(normalizedCurrentGuess)) {
      setMessage('Palavra não reconhecida.');
      return;
    }

    setMessage(''); // Limpa a mensagem se a palavra for válida

    // O checkGuess agora recebe o palpite do usuário (sempre em maiúsculas devido ao input)
    // e a versão normalizada da palavra secreta.
    const currentFeedback = checkGuess(
      currentGuess.toUpperCase(),
      solutionNormalized,
    );

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[currentGuessIndex] = currentGuess;
      return newGuesses;
    });

    setFeedback((prevFeedback) => {
      const newFeedback = [...prevFeedback];
      newFeedback[currentGuessIndex] = currentFeedback;
      return newFeedback;
    });

    setLetterStates((prevStates) => {
      const newStates = { ...prevStates };
      for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = currentGuess[i]; // A letra digitada (pode ter acento se o teclado permitir, mas a validação interna é sem)
        const color = currentFeedback[i];

        // Lógica de estado das letras permanece a mesma
        // Mas a chave para o estado das letras é a letra MAIÚSCULA, SEM ACENTO
        const normalizedLetter = normalizeInputGuess(letter).toUpperCase();

        if (newStates[normalizedLetter] === 'green') continue;
        if (newStates[normalizedLetter] === 'yellow' && color === 'gray')
          continue;
        if (newStates[normalizedLetter] === 'yellow' && color === 'yellow')
          continue;

        newStates[normalizedLetter] = color;
      }
      return newStates;
    });

    // Comparação final da palavra secreta (normalizada) com o palpite (normalizado)
    if (normalizedCurrentGuess === solutionNormalized.toLowerCase()) {
      setGameStatus('won');
      setMessage('Parabéns! Você acertou!');
    } else if (currentGuessIndex === MAX_ATTEMPTS - 1) {
      setGameStatus('lost');
      setMessage(`Você perdeu! A palavra era: ${solutionOriginal}`); // Exibe a palavra original
    } else {
      setCurrentGuessIndex((prev) => prev + 1);
      setCurrentGuess('');
    }
  }, [
    currentGuess,
    currentGuessIndex,
    gameStatus,
    solutionOriginal,
    solutionNormalized,
    normalizeInputGuess,
  ]);

  const startNewGame = useCallback(() => {
    const { original, normalized } = getRandomSolution(); // Pega as duas versões
    setSolutionOriginal(original);
    setSolutionNormalized(normalized);
    setGuesses(Array(MAX_ATTEMPTS).fill(''));
    setFeedback(Array(MAX_ATTEMPTS).fill(null));
    setCurrentGuessIndex(0);
    setCurrentGuess('');
    setGameStatus('playing');
    setMessage('');
    setLetterStates({});
    // console.log("Palavra secreta (DEBUG):", original, normalized); // Remova ou comente para não exibir
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Lidar com entradas do teclado físico
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameStatus !== 'playing') return;

      const key = event.key.toUpperCase();

      if (key === 'BACKSPACE' || key === 'DEL') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === 'ENTER') {
        handleEnter();
      } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
      // Opcional: Para permitir a digitação de caracteres acentuados (se o usuário digitar),
      // você pode expandir esta lógica. No entanto, a normalização acontecerá no handleEnter.
      // Se você quer que o input VISUALMENTE aceite acentos mas valide sem,
      // a lógica atual já funciona porque `currentGuess` guarda o que foi digitado,
      // e `normalizeInputGuess` o remove antes da validação.
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, currentGuessIndex, gameStatus, handleEnter]);

  // Lidar com clique do teclado virtual (assumindo que ele só envia letras maiúsculas sem acento)
  const handleKeyPress = useCallback(
    (key) => {
      if (gameStatus !== 'playing') return;

      if (key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === 'ENTER') {
        handleEnter();
      } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
        // Teclado virtual só envia letras normais
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    },
    [currentGuess, gameStatus, handleEnter],
  );

  return (
    <div className="termo-game-container">
      <h1>Jogo do Termo</h1>
      {message && <p className="game-message">{message}</p>}
      <div className="board">
        {guesses.map((guess, index) => (
          <GuessRow
            key={index}
            guess={index === currentGuessIndex ? currentGuess : guess}
            solutionFeedback={feedback[index]}
            isCurrentGuess={
              index === currentGuessIndex && gameStatus === 'playing'
            }
          />
        ))}
      </div>
      {gameStatus !== 'playing' && (
        <button onClick={startNewGame} className="new-game-button">
          Novo Jogo
        </button>
      )}
      <TermoKeyboard onKeyPress={handleKeyPress} letterStates={letterStates} />
    </div>
  );
};

export default TermoGame;
