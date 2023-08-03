import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">HOME</a>
      </div>
      <ul className="app__navbar-links">
        {["ABOUT", "PRICING", "CONTACT"].map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
        <li>
          <Link to="/login" className="login-btn">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
