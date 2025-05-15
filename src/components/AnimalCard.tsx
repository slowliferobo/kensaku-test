import React from 'react';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from './ui/Card';
import { Badge } from './ui/Badge';
import { AnimalCard as AnimalCardType } from '../types';
import { Leaf, Droplet, Mountain, Palmtree, HeartHandshake, Coins, Crown } from 'lucide-react';

interface AnimalCardProps {
  animal: AnimalCardType;
  onClick?: () => void;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick }) => {
  const { name, imageUrl, type, habitatRequirement, conservationPoints, appealValue, cost, ability } = animal;

  const getHabitatIcon = () => {
    switch (habitatRequirement) {
      case 'Forest':
        return <Leaf className="h-4 w-4 mr-1" />;
      case 'Water':
        return <Droplet className="h-4 w-4 mr-1" />;
      case 'Rocks':
        return <Mountain className="h-4 w-4 mr-1" />;
      case 'Savanna':
        return <Palmtree className="h-4 w-4 mr-1" />;
      case 'Multiple':
        return (
          <div className="flex">
            <Leaf className="h-3 w-3" />
            <Droplet className="h-3 w-3 -ml-1" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card 
      className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative">
        <CardImage 
          src={imageUrl} 
          alt={name}
          className="h-48 sm:h-64"
        />
        <div className="absolute top-2 right-2">
          <Badge color="primary" className="mb-1">
            {type}
          </Badge>
        </div>
      </div>
      <CardContent className="relative">
        <CardTitle className="mb-2 text-[#1D3557]">{name}</CardTitle>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          {getHabitatIcon()}
          <span>{habitatRequirement}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-3 mt-3">
          <div className="flex flex-col items-center bg-gray-50 rounded p-1">
            <HeartHandshake className="h-4 w-4 text-green-600" />
            <span className="text-xs font-medium mt-1">{conservationPoints}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-1">
            <Crown className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-medium mt-1">{appealValue}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-1">
            <Coins className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium mt-1">{cost}</span>
          </div>
        </div>
        
        <CardDescription className="text-xs italic">
          <strong>Ability:</strong> {ability}
        </CardDescription>
      </CardContent>
    </Card>
  );
};