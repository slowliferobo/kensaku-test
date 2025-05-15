export interface AnimalCard {
  id: string;
  name: string;
  imageUrl: string;
  type: '哺乳類' | '鳥類' | '爬虫類' | '両生類' | '魚類';
  habitatRequirement: '森林' | '水域' | '岩場' | 'サバンナ' | '複数';
  conservationPoints: number;
  appealValue: number;
  cost: number;
  ability: string;
}

export interface HabitatZone {
  id: string;
  name: string;
  type: '森林' | '水域' | '岩場' | 'サバンナ';
  capacity: number;
  imageUrl: string;
}

export interface Player {
  id: string;
  name: string;
  conservationPoints: number;
  appealPoints: number;
  money: number;
  animals: string[]; // Array of animal card IDs
  habitats: string[]; // Array of habitat zone IDs
}

export interface GameState {
  players: Player[];
  availableCards: AnimalCard[];
  round: number;
  currentPlayer: number;
}