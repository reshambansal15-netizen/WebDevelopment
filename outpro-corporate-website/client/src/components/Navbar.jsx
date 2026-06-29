import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          OUTPRO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonials">
                Testimonials
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <NavLink
                className="btn btn-warning px-4"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

            {/* Theme Toggle */}
            <li className="nav-item ms-lg-3">
              <button
                className={`btn ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                onClick={toggleTheme}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;