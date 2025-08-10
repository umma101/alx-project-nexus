import React from 'react';

const GenrePanel = ({ genres = [], onSelectGenre, selected }) => {
  return (
    <aside className="bg-gray-900 text-white p-4 rounded-md">
      <h3 className="font-semibold mb-3">Genre</h3>

      <div className="flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => onSelectGenre && onSelectGenre(g)}
            className={`px-3 py-1 rounded-full text-xs ${selected === g ? 'bg-indigo-500' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <input
          placeholder="Search WatchList..."
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-sm"
        />
      </div>
    </aside>
  );
};

export default GenrePanel;
