import dicionarioCompleto from './dicionario.json';

// Função auxiliar para normalizar palavras (remover acentos)
function normalizarPalavra(palavra: string): string {
  return palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Filtrar apenas palavras de 5 letras do dicionário completo
const palavras5Letras = dicionarioCompleto
  .map(palavra => normalizarPalavra(palavra))
  .filter(palavra => palavra.length === 5)
  .filter((palavra, index, self) => self.indexOf(palavra) === index); // Remove duplicatas

// Exportar como palavrasTermo para compatibilidade com Dueto
export const palavrasTermo = palavras5Letras;

export function getPalavraDoDia(): string {
  const hoje = new Date();
  const inicioAno = new Date(hoje.getFullYear(), 0, 0);
  const diff = hoje.getTime() - inicioAno.getTime();
  const diaDoAno = Math.floor(diff / 86400000);
  return palavras5Letras[diaDoAno % palavras5Letras.length];
}

export function isPalavraValida(palavra: string): boolean {
  const palavraNormalizada = normalizarPalavra(palavra);
  return palavras5Letras.includes(palavraNormalizada);
}