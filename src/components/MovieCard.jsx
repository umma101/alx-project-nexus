// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ image, title, year }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-3 text-white">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-gray-400 text-sm">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
