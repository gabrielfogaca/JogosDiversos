// src/termo/termoLogic.js

import { solutionWords, WORD_LENGTH } from './termoWords';

export const getRandomSolution = () => {
  const randomIndex = Math.floor(Math.random() * solutionWords.length);
  return solutionWords[randomIndex].toUpperCase(); // Palavra secreta em maiúsculas
};

// Função para verificar uma tentativa e dar feedback de cor
export const checkGuess = (guess, solution) => {
  const feedback = Array(WORD_LENGTH).fill('gray'); // 'gray', 'yellow', 'green'
  const solutionLetters = solution.split('');
  const guessLetters = guess.split('');

  // 1. Marcar letras verdes (posição correta)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === solutionLetters[i]) {
      feedback[i] = 'green';
      solutionLetters[i] = null; // Marcar como usada para não ser contada novamente
      guessLetters[i] = null; // Marcar a letra da tentativa também
    }
  }

  // 2. Marcar letras amarelas (letra correta, posição errada)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] !== null) {
      // Se a letra ainda não foi marcada como verde
      const solutionIndex = solutionLetters.indexOf(guessLetters[i]);
      if (solutionIndex > -1) {
        feedback[i] = 'yellow';
        solutionLetters[solutionIndex] = null; // Marcar como usada
      }
    }
  }

  return feedback;
};
