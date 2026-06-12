import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "./StoreContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(StoreContext);

  return (
    <nav className="navbar">
      <h2>AURA Living</h2>

      <div>
        <Link to="/"> Home </Link>
        <Link to="/products"> Collection </Link>
        <Link to="/wishlist"> Wishlist </Link>
        <Link to="/cart"> Cart </Link>

        <button className="themeBtn" onClick={() => setDarkMode(!darkMode)}>
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;