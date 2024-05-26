import { Outlet, Link } from "react-router-dom";
import "../App.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const subLinkStyle = {
  textDecoration: "none",
  color: "white",
};
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-links">
        <ul className="links">
          <li>
            <Link style={linkStyle} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/events">
              Evenements
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/calendar">
              Calendrier
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="subnav-links">
          <li>
            <Link style={subLinkStyle} to="/categories">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
