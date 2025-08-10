// MovieCard with onClick support and pointer cursor
const MovieCard = ({ title, year, image, onClick }) => (
  <div
    onClick={onClick}
    style={{
      textAlign: "center",
      color: "white",
      cursor: "pointer",       // show pointer on hover
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
