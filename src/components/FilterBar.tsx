import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface FilterBarProps {
  filters: string[];
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
  label: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  label
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <div className="flex items-center flex-wrap gap-2 sm:gap-4">
        <div className="flex items-center text-gray-700 mr-2">
          <Filter className="h-4 w-4 mr-1" />
          <span className="font-medium">{label}:</span>
        </div>
        
        <Button
          variant="text"
          className={`text-sm ${activeFilters.length === 0 ? 'underline text-[#2D6A4F] font-semibold' : 'text-gray-600'}`}
          onClick={() => {
            // Clear all filters
            filters.forEach(filter => {
              if (activeFilters.includes(filter)) {
                onFilterChange(filter);
              }
            });
          }}
        >
          All
        </Button>
        
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant={activeFilters.includes(filter) ? 'default' : 'outline'}
            color="primary"
            className="cursor-pointer transition-all duration-200"
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;