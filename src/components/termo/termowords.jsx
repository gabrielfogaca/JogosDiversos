// src/termo/termoWords.js

import dictionary from './data/dictionary.json';

export const WORD_LENGTH = 5;
export const MAX_ATTEMPTS = 6;

// Função auxiliar para remover acentos de uma string
const normalizeWord = (word) => {
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
// Isso é necessário porque a palavra secreta precisa manter seu formato original para exibição
export const originalSolutionWords = dictionary.filter(
  (word) =>
    word.length === WORD_LENGTH &&
    allValidWords.has(normalizeWord(word).toLowerCase()),
);

// Função para obter uma palavra secreta aleatória
export const getRandomSolution = () => {
  if (originalSolutionWords.length === 0) {
    console.error(
      'Nenhuma palavra de solução disponível. Verifique o dicionário.',
    );
    return { original: 'termo', normalized: 'termo' }; // Fallback
  }
  const randomIndex = Math.floor(Math.random() * originalSolutionWords.length);
  const originalWord = originalSolutionWords[randomIndex];
  return {
    original: originalWord.toUpperCase(), // Versão para exibição
    normalized: normalizeWord(originalWord).toUpperCase(), // Versão para comparação (sem acentos)
  };
};

// A função checkGuess precisa ser ajustada para comparar as versões normalizadas
export const checkGuess = (guess, solutionNormalized) => {
  // solution aqui é a versão normalizada
  const feedback = Array(WORD_LENGTH).fill('gray');
  // Normaliza o palpite do usuário para a comparação
  const normalizedGuess = normalizeWord(guess).toUpperCase();
  const solutionLetters = solutionNormalized.split('');
  const guessLetters = normalizedGuess.split(''); // Usa o palpite normalizado

  // Encontra as letras verdes (correta e na posição certa)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === solutionLetters[i]) {
      feedback[i] = 'green';
      solutionLetters[i] = null; // Marca como usada
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

// isValidLetter pode permanecer a mesma, pois o teclado virtual/físico já lida com A-Z
export const isValidLetter = (key) => {
  return key.length === 1 && key >= 'A' && key <= 'Z';
};
