import React from 'react';
import { Category } from '../../types';
import { useEvents } from '../../context/EventContext';

const categories: (Category | 'All')[] = [
  'All',
  'Music',
  'Workshops',
  'Entertainment',
  'Art',
  'Sports',
  'Food',
  'Technology',
  'Other'
];

const CategoryFilter: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useEvents();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;