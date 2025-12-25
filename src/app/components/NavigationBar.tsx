import { Home, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useState } from 'react';

interface NavigationBarProps {
  currentGame: string | null;
  onNavigateHome: () => void;
}

export function NavigationBar({ currentGame, onNavigateHome }: NavigationBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group"
          >
            <div className="size-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Home className="size-5 text-white" />
            </div>
            <span className="text-xl">Jogos Diversos</span>
          </button>

          <div className="flex items-center gap-4">
            {currentGame && (
              <Button variant="outline" onClick={onNavigateHome}>
                <Home className="size-4 mr-2" />
                Voltar ao Início
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
