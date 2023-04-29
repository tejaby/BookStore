import { NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const navBar = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#252525",
  };

  const ul = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "5px",
  };

  const a = {
    textDecoration: "none",
    color: "#D7DBDD",
    fontSize: "18px",
    transition: "all .2s ease"
  };

  return (
    <nav style={navBar}>
      <ul style={ul}>
        <li>
          <NavLink
            to="/"
            style={a}
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            style={a}
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
