import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

interface GameCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  status: 'available' | 'coming-soon';
  onPlay: (id: string) => void;
}

export function GameCard({ id, name, description, icon: Icon, status, onPlay }: GameCardProps) {
  const isAvailable = status === 'available';

  return (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 ${
        isAvailable ? 'hover:scale-105 cursor-pointer' : 'opacity-75'
      }`}
      onClick={() => isAvailable && onPlay(id)}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="size-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="size-6 text-white" />
          </div>
          <Badge variant={isAvailable ? 'default' : 'secondary'}>
            {isAvailable ? 'Disponível' : 'Em breve'}
          </Badge>
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          className="w-full" 
          disabled={!isAvailable}
          onClick={(e) => {
            e.stopPropagation();
            onPlay(id);
          }}
        >
          {isAvailable ? 'Jogar Agora' : 'Em Desenvolvimento'}
        </Button>
      </CardContent>
    </Card>
  );
}
