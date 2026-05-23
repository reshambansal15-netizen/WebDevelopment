import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Zyra Hire
      </h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/jobs">Jobs</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}

export default NavBar;