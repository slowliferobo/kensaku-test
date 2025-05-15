import React, { useState } from 'react';
import { AnimalCard } from './AnimalCard';
import { animals, animalTypes, habitatTypes } from '../data/animals';
import FilterBar from './FilterBar';

const AnimalsSection: React.FC = () => {
  const [activeAnimalTypes, setActiveAnimalTypes] = useState<string[]>([]);
  const [activeHabitatTypes, setActiveHabitatTypes] = useState<string[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);

  const handleAnimalTypeFilter = (type: string) => {
    setActiveAnimalTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleHabitatTypeFilter = (type: string) => {
    setActiveHabitatTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const filteredAnimals = animals.filter(animal => {
    const matchesAnimalType = activeAnimalTypes.length === 0 || activeAnimalTypes.includes(animal.type);
    const matchesHabitatType = activeHabitatTypes.length === 0 || activeHabitatTypes.includes(animal.habitatRequirement);
    return matchesAnimalType && matchesHabitatType;
  });

  return (
    <section id="animals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">動物を探索</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            世界中から集められた多様な動物たちを見てみましょう。
            それぞれの種には独自の要件があり、あなたの動物園に特別な利点をもたらします。
          </p>
        </div>

        <div className="mb-8">
          <FilterBar 
            filters={animalTypes}
            activeFilters={activeAnimalTypes}
            onFilterChange={handleAnimalTypeFilter}
            label="動物の種類"
          />
          
          <FilterBar 
            filters={habitatTypes}
            activeFilters={activeHabitatTypes}
            onFilterChange={handleHabitatTypeFilter}
            label="生息地"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <div key={animal.id} className="h-full">
              <AnimalCard 
                animal={animal} 
                onClick={() => setSelectedAnimal(animal.id)}
              />
            </div>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">選択されたフィルターに一致する動物が見つかりませんでした。</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimalsSection;