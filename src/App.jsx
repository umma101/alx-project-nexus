import React from "react";

const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
    }}
  >
    {/* Logo */}
    <h1 style={{ margin: 0 }}>MOVIE DATABASE</h1>

    {/* Navigation Links */}
    <nav>
      <a href="#home" style={navLinkStyle}>Home</a>
      <a href="#genre" style={navLinkStyle}>Genre</a>
      <a href="#wishlist" style={navLinkStyle}>Wishlist</a>
    </nav>

    {/* Search Bar */}
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

const Section = ({ title, movies }) => (
  <section style={{ padding: "20px" }}>
    <h2 style={{ color: "white" }}>{title}</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}
    >
      {movies.map((m, i) => (
        <MovieCard key={i} {...m} />
      ))}
    </div>
  </section>
);

export default function App() {
  const movies = [
    { title: "Movie 1", year: 2024, image: "https://via.placeholder.com/200" },
    { title: "Movie 2", year: 2023, image: "https://via.placeholder.com/200" },
    { title: "Movie 3", year: 2022, image: "https://via.placeholder.com/200" },
    { title: "Movie 4", year: 2021, image: "https://via.placeholder.com/200" },
    { title: "Movie 5", year: 2020, image: "https://via.placeholder.com/200" },
    { title: "Movie 6", year: 2019, image: "https://via.placeholder.com/200" },
    { title: "Movie 7", year: 2018, image: "https://via.placeholder.com/200" },
    { title: "Movie 8", year: 2017, image: "https://via.placeholder.com/200" },
    { title: "Movie 9", year: 2016, image: "https://via.placeholder.com/200" },
    { title: "Movie 10", year: 2015, image: "https://via.placeholder.com/200" },
  ];

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Header />
      <Section title="Popular" movies={movies} />
      <Section title="Top Picks for You" movies={movies} />
      <Section title="Trending Now" movies={movies} />
    </div>
  );
}
