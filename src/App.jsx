import React from "react";

const TMDB_API_KEY = "51bc863736f3e186ee4a634901a8df77";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: "bold",
};

const Header = ({ searchTerm, setSearchTerm }) => (
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
    <h1 style={{ margin: 0 }}>FilmLuxe</h1>

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
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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

const MovieCard = ({ title, year, image, onClick }) => (
  <div
    onClick={onClick}
    style={{
      textAlign: "center",
      color: "white",
      cursor: "pointer",
      maxWidth: "180px",
      margin: "0 auto",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: "100%", borderRadius: "8px" }}
    />
    <h4>{title}</h4>
    <p>{year}</p>
  </div>
);

const Section = ({ id, title, movies, columns = 7, onCardClick }) => (
  <section id={id} style={{ padding: "20px" }}>
    <h2 style={{ color: "white" }}>{title}</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {movies.map((m, i) => (
        <MovieCard key={i} {...m} onClick={() => onCardClick(m)} />
      ))}
    </div>
  </section>
);

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

export default function App() {
  const [movies, setMovies] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [selectedTrailerKey, setSelectedTrailerKey] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          year: movie.release_date?.slice(0, 4) || "N/A",
          image: movie.poster_path
            ? IMAGE_BASE_URL + movie.poster_path
            : "https://via.placeholder.com/200",
          overview: movie.overview || "No description available.",
        }));
        setMovies(moviesData);
      })
      .catch((err) => {
        console.error("Failed to fetch movies", err);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchTrailer = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );
        setSelectedTrailerKey(trailer ? trailer.key : null);
      })
      .catch((err) => {
        console.error("Failed to fetch trailer", err);
        setSelectedTrailerKey(null);
      });
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    fetchTrailer(movie.id);
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 700px) {
          .modal-content {
            flex-direction: column !important;
          }
          .modal-poster {
            width: 100% !important;
            max-height: none !important;
            margin-bottom: 20px;
          }
        }
      `}</style>

      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div id="home">
        <Section
          title="Popular"
          movies={filteredMovies}
          onCardClick={handleCardClick}
        />
        <Section
          title="Top Picks for You"
          movies={filteredMovies}
          onCardClick={handleCardClick}
        />
        <Section
          title="Trending Now"
          movies={filteredMovies}
          onCardClick={handleCardClick}
        />
      </div>

      <GenreSection />

      <Section
        id="wishlist"
        title="Wishlist"
        movies={filteredMovies}
        columns={10}
        onCardClick={handleCardClick}
      />

      {/* Modal */}
      {selectedMovie && (
        <div
          onClick={() => {
            setSelectedMovie(null);
            setSelectedTrailerKey(null);
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
            boxSizing: "border-box",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "900px",
              width: "100%",
              color: "white",
              display: "flex",
              gap: "20px",
            }}
          >
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="modal-poster"
              style={{
                width: "30%",
                borderRadius: "8px",
                objectFit: "cover",
                maxHeight: "450px",
              }}
            />

            <div
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <button
                onClick={() => {
                  setSelectedMovie(null);
                  setSelectedTrailerKey(null);
                }}
                style={{
                  alignSelf: "flex-end",
                  background: "transparent",
                  border: "none",
                  fontSize: "28px",
                  color: "white",
                  cursor: "pointer",
                  marginBottom: "10px",
                  lineHeight: "1",
                }}
                aria-label="Close modal"
              >
                &times;
              </button>

              <h2 style={{ marginTop: 0 }}>{selectedMovie.title}</h2>
              <p>
                <em>Release Year: {selectedMovie.year}</em>
              </p>
              <p
                style={{
                  flexGrow: 1,
                  overflowY: "auto",
                  marginBottom: "20px",
                  textAlign: "justify",
                }}
              >
                {selectedMovie.overview}
              </p>

              {selectedTrailerKey ? (
                <div style={{ flexShrink: 0 }}>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${selectedTrailerKey}`}
                    title="YouTube trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>No trailer available for this movie.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
