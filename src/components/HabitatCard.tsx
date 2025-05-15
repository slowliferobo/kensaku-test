import React from 'react';
import { Card, CardImage, CardContent, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { HabitatZone } from '../types';
import { Users } from 'lucide-react';

interface HabitatCardProps {
  habitat: HabitatZone;
  onClick?: () => void;
}

export const HabitatCard: React.FC<HabitatCardProps> = ({ habitat, onClick }) => {
  const { name, type, capacity, imageUrl } = habitat;

  // Get color based on habitat type
  const getTypeColor = (): 'primary' | 'secondary' | 'success' | 'warning' => {
    switch (type) {
      case 'Forest':
        return 'success';
      case 'Water':
        return 'secondary';
      case 'Rocks':
        return 'primary';
      case 'Savanna':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Card 
      className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <CardImage 
          src={imageUrl} 
          alt={name}
          className="h-40"
        />
        <div className="absolute top-2 right-2">
          <Badge color={getTypeColor()}>
            {type}
          </Badge>
        </div>
      </div>
      <CardContent>
        <CardTitle className="text-[#1D3557] mb-2">{name}</CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-600 mr-1" />
            <span className="text-sm text-gray-600">Capacity: {capacity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};