import React, { useState } from 'react';

const SearchBar = ({ onSearch, compact = false }) => {
  const [q, setQ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(q.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center ${compact ? 'w-full' : ''}`}>
      <input
        className="w-full rounded-l-md p-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search movies..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search movies"
      />
      <button
        type="submit"
        className="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
