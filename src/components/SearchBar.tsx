
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="bg-science-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Looking for specific notes?</h2>
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search for topics, subjects, or keywords..."
              className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-science-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-science-blue hover:bg-science-light-blue text-white p-3 rounded-r-md transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
