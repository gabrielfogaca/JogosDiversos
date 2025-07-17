// src/components/Dueto/gameUtils.js

import dictionary from './data/dictionary.json'; // Assumindo que dictionary.json está em src/components/Dueto/data/

export const WORD_LENGTH = 5;
export const DUETO_MAX_ATTEMPTS = 7; // Número de tentativas para o Dueto

// Função auxiliar para remover acentos de uma string
export const normalizeWord = (word) => {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Filtra todas as palavras do dicionário que têm o comprimento correto
// e as coloca em um Set para buscas rápidas.
// As palavras no Set serão normalizadas (sem acentos).
export const allValidWords = new Set(
  dictionary
    .filter((word) => word.length === WORD_LENGTH)
    .map((word) => normalizeWord(word).toLowerCase()), // Normaliza e coloca em minúsculas
);

// Armazena as palavras originais (com acentos) de 5 letras que podem ser soluções
export const originalSolutionWords = dictionary.filter(
  (word) =>
    word.length === WORD_LENGTH &&
    allValidWords.has(normalizeWord(word).toLowerCase()),
);

// Função para obter UMA palavra secreta aleatória
export const getRandomSolution = () => {
  if (originalSolutionWords.length === 0) {
    console.error(
      'Nenhuma palavra de solução disponível. Verifique o dicionário.',
    );
    return { original: 'TERMO', normalized: 'TERMO' }; // Fallback
  }
  const randomIndex = Math.floor(Math.random() * originalSolutionWords.length);
  const originalWord = originalSolutionWords[randomIndex];
  return {
    original: originalWord.toUpperCase(), // Versão para exibição (com acentos, maiúsculas)
    normalized: normalizeWord(originalWord).toUpperCase(), // Versão para comparação (sem acentos, maiúsculas)
  };
};

// A função checkGuess agora recebe o palpite normalizado e a solução normalizada
export const checkGuess = (guessNormalized, solutionNormalized) => {
  const feedback = Array(WORD_LENGTH).fill('gray');
  const solutionLetters = solutionNormalized.split('');
  const guessLetters = guessNormalized.split('');

  // Encontra as letras verdes (correta e na posição certa)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === solutionLetters[i]) {
      feedback[i] = 'green';
      solutionLetters[i] = null; // Marca como usada para não ser contada novamente
    }
  }

  // Encontra as letras amarelas (correta, mas em posição errada)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (feedback[i] === 'gray' && solutionLetters.includes(guessLetters[i])) {
      feedback[i] = 'yellow';
      solutionLetters[solutionLetters.indexOf(guessLetters[i])] = null; // Marca como usada
    }
  }

  return feedback;
};

// isValidLetter pode permanecer a mesma, já que o input é sem acento para o jogo
export const isValidLetter = (key) => {
  return key.length === 1 && key >= 'A' && key <= 'Z';
};
