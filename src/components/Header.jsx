import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500 w-10 h-10 flex items-center justify-center rounded-md font-bold">MD</div>
          <div>
            <h1 className="text-xl font-semibold">Movie Database</h1>
            <p className="text-xs text-gray-300">Search. Discover. Watchlist.</p>
          </div>
        </div>

        <nav className="hidden sm:flex gap-6">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/genre" className="hover:text-indigo-400">Genre</Link>
          <Link to="/watchlist" className="hover:text-indigo-400">Watchlist</Link>
        </nav>

        <div className="hidden sm:block sm:w-1/2">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="sm:hidden">
          <SearchBar onSearch={onSearch} compact />
        </div>
      </div>
    </header>
  );
};

export default Header;
