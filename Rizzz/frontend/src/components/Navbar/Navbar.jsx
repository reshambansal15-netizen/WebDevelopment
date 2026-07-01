import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUserCircle, FaSearch, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>💜 Rizzz</h2>
      </div>

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search users or posts..."
        />
      </div>

      <div className="nav-menu">

        <Link to="/home">
          <FaHome />
          Home
        </Link>

        <Link to="/profile">
          <FaUserCircle />
          Profile
        </Link>

        <button onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;