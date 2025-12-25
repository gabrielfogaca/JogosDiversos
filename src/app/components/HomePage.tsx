import {
  Gamepad2,
  Skull,
  Grid3x3,
  Trophy,
  Search,
  BookOpen,
  Zap,
  Target,
  Layers,
  Bomb,
} from "lucide-react";
import { GameCard } from "./GameCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onSelectGame: (gameId: string) => void;
}

const games = [
  {
    id: "forca",
    name: "Jogo da Forca",
    description:
      "Adivinhe a palavra letra por letra antes que seja tarde demais!",
    icon: Skull,
    status: "available" as const,
  },
  {
    id: "campominado",
    name: "Campo Minado",
    description:
      "Encontre todas as bombas sem explodir nenhuma!",
    icon: Bomb,
    status: "available" as const,
  },
  {
    id: "jogodomilhao",
    name: "Jogo do Milhão",
    description:
      "Quiz inspirado no famoso programa de TV. Quanto você consegue ganhar?",
    icon: Trophy,
    status: "available" as const,
  },
  {
    id: "sudoku",
    name: "Sudoku",
    description:
      "Complete o tabuleiro com lógica e raciocínio.",
    icon: Grid3x3,
    status: "available" as const,
  },
  {
    id: "termo",
    name: "Termo",
    description:
      "Adivinhe a palavra do dia em até 6 tentativas.",
    icon: BookOpen,
    status: "available" as const,
  },
  {
    id: "dueto",
    name: "Dueto",
    description: "Descubra duas palavras ao mesmo tempo.",
    icon: Layers,
    status: "available" as const,
  },
  {
    id: "quarteto",
    name: "Quarteto",
    description:
      "Um desafio com quatro palavras para adivinhar.",
    icon: Target,
    status: "available" as const,
  },
  {
    id: "palavras-cruzadas",
    name: "Palavras Cruzadas",
    description: "Complete o quadro com as palavras certas.",
    icon: Grid3x3,
    status: "coming-soon" as const,
  },
  {
    id: "caca-palavras",
    name: "Caça Palavras",
    description: "Encontre palavras escondidas na grade.",
    icon: Search,
    status: "coming-soon" as const,
  },
  {
    id: "quase-nada",
    name: "Quase Nada",
    description: "Um jogo minimalista com desafios rápidos.",
    icon: Zap,
    status: "coming-soon" as const,
  },
];

export function HomePage({ onSelectGame }: HomePageProps) {
  const availableCount = games.filter(
    (g) => g.status === "available",
  ).length;
  const totalCount = games.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                <Gamepad2 className="size-4" />
                <span>
                  {availableCount} de {totalCount} jogos
                  disponíveis
                </span>
              </div>

             <h1 className="text-5xl lg:text-6xl">
                Jogos Clássicos
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ paddingBottom: "10px" }}>
                  de graça!
                </span>
              </h1>

              <p className="text-xl text-slate-600">
                Uma coleção de jogos clássicos e criativos para
                diversão e entretenimento. Escolha seu jogo
                favorito e divirta-se!
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NjU2MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                description={game.description}
                icon={game.icon}
                status={game.status}
                onPlay={onSelectGame}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white/50">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>Desenvolvido por Gabriel Fogaça 🎮</p>
          <p className="text-sm mt-2">
            Jogos Diversos - Diversão Garantida
          </p>
        </div>
      </footer>
    </div>
  );
}