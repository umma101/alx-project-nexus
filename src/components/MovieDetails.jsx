import React from 'react';

const MovieDetails = ({ movie, onClose, onToggleWatchlist, isSaved }) => {
  if (!movie) return null;

  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-poster.png';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="relative bg-gray-900 text-white rounded-lg max-w-4xl w-full overflow-auto shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src={poster} alt={movie.Title} className="w-full h-auto object-cover rounded-l-lg" />
          </div>

          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{movie.Title} <span className="text-gray-400 text-base">({movie.Year})</span></h2>
                <p className="text-sm text-gray-400 mt-1">{movie.Genre}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onToggleWatchlist && onToggleWatchlist(movie)}
                  className={`px-3 py-1 rounded ${isSaved ? 'bg-yellow-400 text-gray-900' : 'bg-indigo-600 text-white'}`}
                >
                  {isSaved ? 'Saved' : 'Save'}
                </button>
                <button onClick={onClose} className="px-3 py-1 bg-gray-700 rounded">Close</button>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-gray-300">
              <p><strong>Plot:</strong> {movie.Plot}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
              <p><strong>Runtime:</strong> {movie.Runtime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
