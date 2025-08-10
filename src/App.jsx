import React, { useState, useEffect } from "react";
import GenrePanel from "./components/GenrePanel";


// Header Component (unchanged)
const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}
  >
    <h1 style={{ margin: 0 }}>MOVIE DATABASE</h1>

    <nav>
      <a href="#home" style={navLinkStyle}>
        Home
      </a>
      <a href="#genre" style={navLinkStyle}>
        Genre
      </a>
      <a href="#wishlist" style={navLinkStyle}>
        Wishlist
      </a>
    </nav>

    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "6px",
          borderRadius: "4px",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  </header>
);

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: "bold",
};

// Movie Card (unchanged)
const MovieCard = ({ title, year, image }) => (
  <div style={{ textAlign: "center", color: "white" }}>
    <img
      src={image}
      alt={title}
      style={{ width: "100%", borderRadius: "8px" }}
    />
    <h4>{title}</h4>
    <p>{year}</p>
  </div>
);

// Section for Movies (unchanged)
const Section = ({ id, title, movies, columns = 7 }) => (
  <section id={id} style={{ padding: "20px" }}>
    <h2 style={{ color: "white" }}>{title}</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "20px",
      }}
    >
      {movies.map((m, i) => (
        <MovieCard key={i} {...m} />
      ))}
    </div>
  </section>
);

// Genre Panel (unchanged)
const GenreSection = () => {
  const genres = [
    "History",
    "Horror",
    "Documentary",
    "Action",
    "Adventure",
    "Animation",
    "Sci-Fi",
    "Fantasy",
    "Mystery",
    "Drama",
    "Crime",
    "Thriller",
    "Western",
    "Musical",
    "Sports",
    "Biography",
    "Kids",
    "Comedy",
    "Family",
    "War",
    "Romance",
  ];

  return (
    <section id="genre" style={{ padding: "10px" }}>
      <h2 style={{ color: "white" }}>Genres</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {genres.map((g, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "#333",
              color: "white",
              padding: "4px 8px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => alert(`You clicked ${g}`)}
          >
            {g}
          </button>
        ))}
      </div>
    </section>
  );
};

// Footer with Social Media Icons (unchanged)
const Footer = () => (
  <footer
    style={{
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "40px",
    }}
  >
    <p>Follow us:</p>
    <div
      style={{
        fontSize: "24px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        📘
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        🐦
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        📸
      </a>
    </div>
    <p style={{ marginTop: "10px", fontSize: "14px" }}>
      © {new Date().getFullYear()} Movie Database. All rights reserved.
    </p>
  </footer>
);

const TMDB_API_KEY = "51bc863736f3e186ee4a634901a8df77";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data.results.map((movie) => ({
          title: movie.title,
          year: movie.release_date?.slice(0, 4) || "N/A",
          image: movie.poster_path
            ? IMAGE_BASE_URL + movie.poster_path
            : "https://via.placeholder.com/200",
        }));
        setMovies(moviesData);
      })
      .catch((err) => {
        console.error("Failed to fetch movies", err);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <Header />

      {/* Home Section */}
      <div id="home">
        <Section title="Popular" movies={movies} />
        <Section title="Top Picks for You" movies={movies} />
        <Section title="Trending Now" movies={movies} />
      </div>

      {/* Genre Section */}
      <GenreSection />

      {/* Wishlist Section (2 columns) */}
      <Section id="wishlist" title="Wishlist" movies={movies} columns={10} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
