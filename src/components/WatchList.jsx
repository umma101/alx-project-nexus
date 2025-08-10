import React from 'react';

const WatchList = ({ items = [], onRemove, onSelect }) => {
  return (
    <aside className="bg-gray-900 text-white p-4 rounded-md w-full">
      <h3 className="font-semibold mb-4">WatchList</h3>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm">Your watchlist is empty.</p>
      ) : (
        <div className="space-y-3">
          {items.map((m) => (
            <div key={m.imdbID} className="bg-gray-800 p-3 rounded flex items-center gap-3">
              <img src={(m.Poster && m.Poster !== 'N/A') ? m.Poster : '/placeholder-poster.png'} alt={m.Title} className="w-12 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="text-sm font-semibold">{m.Title}</div>
                <div className="text-xs text-gray-400">{m.Year}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => onSelect && onSelect(m.imdbID)} className="text-xs text-indigo-300">View</button>
                <button onClick={() => onRemove && onRemove(m.imdbID)} className="text-xs text-red-400">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default WatchList;
