import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Home, RotateCcw } from "lucide-react";
import { palavrasTermo, isPalavraValida } from "./data/palavras";

type CellStatus = "correct" | "present" | "absent" | "empty";

interface Cell {
  letter: string;
  status: CellStatus;
}

const PALAVRA_TAMANHO = 5;
const MAX_TENTATIVAS = 7;

function getDuasPalavras(): [string, string] {
  const shuffled = [...palavrasTermo].sort(
    () => Math.random() - 0.5,
  );
  return [shuffled[0], shuffled[1]];
}

export function Dueto({
  onNavigateHome,
}: {
  onNavigateHome: () => void;
}) {
  const [[palavra1, palavra2]] = useState(() =>
    getDuasPalavras(),
  );
  const [tentativas1, setTentativas1] = useState<Cell[][]>(
    Array(MAX_TENTATIVAS)
      .fill(null)
      .map(() =>
        Array(PALAVRA_TAMANHO)
          .fill(null)
          .map(() => ({
            letter: "",
            status: "empty" as CellStatus,
          })),
      ),
  );
  const [tentativas2, setTentativas2] = useState<Cell[][]>(
    Array(MAX_TENTATIVAS)
      .fill(null)
      .map(() =>
        Array(PALAVRA_TAMANHO)
          .fill(null)
          .map(() => ({
            letter: "",
            status: "empty" as CellStatus,
          })),
      ),
  );
  const [tentativaAtual, setTentativaAtual] = useState(0);
  const [palpiteAtual, setPalpiteAtual] = useState("");
  const [palavra1Resolvida, setPalavra1Resolvida] = useState(false);
  const [palavra2Resolvida, setPalavra2Resolvida] = useState(false);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    if (gameStatus === "playing") {
      window.addEventListener("keydown", handleKeyPress);
      return () =>
        window.removeEventListener("keydown", handleKeyPress);
    }
  }, [palpiteAtual, tentativaAtual, gameStatus]);

  function handleKeyPress(e: KeyboardEvent) {
    if (gameStatus !== "playing") return;

    if (
      e.key === "Enter" &&
      palpiteAtual.length === PALAVRA_TAMANHO
    ) {
      submitGuess();
    } else if (e.key === "Backspace") {
      setPalpiteAtual((prev) => prev.slice(0, -1));
    } else if (
      /^[a-zA-ZÀ-ÿ]$/.test(e.key) &&
      palpiteAtual.length < PALAVRA_TAMANHO
    ) {
      setPalpiteAtual((prev) =>
        (prev + e.key.toUpperCase()).slice(0, PALAVRA_TAMANHO),
      );
    }
  }

  function avaliarPalpite(
    palpite: string,
    alvo: string,
  ): Cell[] {
    const guess = palpite.split("");
    const target = alvo.split("");
    const resultado: Cell[] = [];
    const targetCopy = [...target];

    guess.forEach((letter, i) => {
      if (letter === target[i]) {
        resultado[i] = { letter, status: "correct" };
        targetCopy[i] = "";
      } else {
        resultado[i] = { letter, status: "absent" };
      }
    });

    resultado.forEach((cell, i) => {
      if (cell.status === "absent") {
        const idx = targetCopy.indexOf(cell.letter);
        if (idx !== -1) {
          resultado[i] = {
            letter: cell.letter,
            status: "present",
          };
          targetCopy[idx] = "";
        }
      }
    });

    return resultado;
  }

  function submitGuess() {
    if (palpiteAtual.length !== PALAVRA_TAMANHO) return;

    if (!isPalavraValida(palpiteAtual)) {
      setMensagemErro("Palavra não está no dicionário");
      setTimeout(() => setMensagemErro(""), 1500);
      return;
    }

    const novasTentativas1 = [...tentativas1];
    const novasTentativas2 = [...tentativas2];

    const palpiteNormalizado = palpiteAtual.toLowerCase();

    novasTentativas1[tentativaAtual] = avaliarPalpite(
      palpiteNormalizado,
      palavra1,
    );
    novasTentativas2[tentativaAtual] = avaliarPalpite(
      palpiteNormalizado,
      palavra2,
    );

    setTentativas1(novasTentativas1);
    setTentativas2(novasTentativas2);

    const ganhou1 = palpiteNormalizado === palavra1;
    const ganhou2 = palpiteNormalizado === palavra2;

    if (ganhou1) setPalavra1Resolvida(true);
    if (ganhou2) setPalavra2Resolvida(true);

    if (
      (ganhou1 || palavra1Resolvida) &&
      (ganhou2 || palavra2Resolvida)
    ) {
      setGameStatus("won");
    } else if (tentativaAtual >= MAX_TENTATIVAS - 1) {
      setGameStatus("lost");
    } else {
      setTentativaAtual((prev) => prev + 1);
    }

    setPalpiteAtual("");
  }

  function resetGame() {
    window.location.reload();
  }

  const teclado = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  function handleKeyClick(key: string) {
    if (gameStatus !== "playing") return;

    if (key === "ENTER") {
      if (palpiteAtual.length === PALAVRA_TAMANHO)
        submitGuess();
    } else if (key === "⌫") {
      setPalpiteAtual((prev) => prev.slice(0, -1));
    } else if (palpiteAtual.length < PALAVRA_TAMANHO) {
      setPalpiteAtual((prev) => prev + key);
    }
  }

  function renderGrid(
    tentativas: Cell[][],
    palavraResolvida: boolean,
  ) {
    return (
      <div className="space-y-1">
        {tentativas.map((tentativa, rowIdx) => (
          <div
            key={rowIdx}
            className="flex gap-1 justify-center"
          >
            {tentativa.map((cell, colIdx) => {
              const isCurrentRow =
                rowIdx === tentativaAtual &&
                gameStatus === "playing";
              const letter =
                isCurrentRow && colIdx < palpiteAtual.length
                  ? palpiteAtual[colIdx]
                  : cell.letter;

              return (
                <div
                  key={colIdx}
                  className={`size-10 flex items-center justify-center text-lg font-bold border-2 ${
                    cell.status === "correct"
                      ? "bg-green-500 text-white border-green-600"
                      : cell.status === "present"
                        ? "bg-yellow-500 text-white border-yellow-600"
                        : cell.status === "absent"
                          ? "bg-slate-400 text-white border-slate-500"
                          : isCurrentRow && letter
                            ? "border-slate-400 bg-white"
                            : "border-slate-300 bg-white"
                  }`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={onNavigateHome}>
            <Home className="size-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl">🎯 Dueto</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Adivinhe Duas Palavras!</CardTitle>
                  <CardDescription>
                    Resolva ambas as palavras com {MAX_TENTATIVAS} tentativas compartilhadas
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={resetGame}
                    disabled={gameStatus === "playing"}
                  >
                    <RotateCcw className="size-4 mr-2" />
                    Novo Jogo
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {mensagemErro && (
                <div className="text-center text-red-600 font-bold">{mensagemErro}</div>
              )}
              {/* Dois grids lado a lado */}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-center mb-2">
                    <Badge
                      variant={
                        palavra1Resolvida
                          ? "default"
                          : "secondary"
                      }
                    >
                      Palavra 1 {palavra1Resolvida && "✓"}
                    </Badge>
                    {gameStatus === "lost" &&
                      !palavra1Resolvida && (
                        <p className="text-sm text-red-600 mt-1">
                          {palavra1.trim()}
                        </p>
                      )}
                  </div>
                  {renderGrid(tentativas1, palavra1Resolvida)}
                </div>
                <div>
                  <div className="text-center mb-2">
                    <Badge
                      variant={
                        palavra2Resolvida
                          ? "default"
                          : "secondary"
                      }
                    >
                      Palavra 2 {palavra2Resolvida && "✓"}
                    </Badge>
                    {gameStatus === "lost" &&
                      !palavra2Resolvida && (
                        <p className="text-sm text-red-600 mt-1">
                          {palavra2.trim()}
                        </p>
                      )}
                  </div>
                  {renderGrid(tentativas2, palavra2Resolvida)}
                </div>
              </div>


              {/* Teclado */}
              <div className="space-y-1">
                {teclado.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="flex gap-1 justify-center"
                  >
                    {row.map((key) => (
                      <Button
                        key={key}
                        variant="outline"
                        size="sm"
                        onClick={() => handleKeyClick(key)}
                        disabled={gameStatus !== "playing"}
                        className={`${
                          key === "ENTER" || key === "⌫"
                            ? "px-3"
                            : "px-2"
                        } h-10 text-xs`}
                      >
                        {key}
                      </Button>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}