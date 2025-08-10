import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies = [], onSelect, onToggleWatchlist, savedIds = [] }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-400 p-6">No movies to display. Try a search above.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((m) => (
        <MovieCard
          key={m.imdbID}
          movie={m}
          onSelect={onSelect}
          onToggleWatchlist={onToggleWatchlist}
          isSaved={savedIds.includes(m.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
