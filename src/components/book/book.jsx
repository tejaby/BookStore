import { Link } from "react-router-dom";

function Book({ item }) {
  const cont = {
    display: "flex",
    flexDirection: "rows",
    justifyContent: "center",
    alignItems: "center",
  };

  const a = {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "18px",
  };

  return (
    <div style={cont}>
      <Link to={`/view/${item.id}`} style={a}>
        <img src={item.cover} alt="img" width="200" />
        <h2>{item.title}</h2>
      </Link>
    </div>
  );
}

export default Book;
