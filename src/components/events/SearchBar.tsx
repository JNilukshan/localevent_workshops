import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useEvents } from '../../context/EventContext';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useEvents();
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="relative mb-8">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-transparent">
        <div className="pl-3 pr-2 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search events, locations, or organizers..."
          className="w-full py-3 px-1 focus:outline-none text-gray-700"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="pr-3 pl-2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;