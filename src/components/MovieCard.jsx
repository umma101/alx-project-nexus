const MovieCard = ({ title, year, image }) => (
  <div
    style={{
      textAlign: "center",
      color: "white",
      maxWidth: "180px",  // limit card width
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
