import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-light">
      <div className="container py-2">
        <Link
          to="/"
          className="logo text-decoration-none text-white h3 fw-bold"
        >
          W-<span className="text-warning">Moviez</span>
        </Link>
        <div className="nav-menu ">
          <Link to="/" className="mx-2 text-decoration-none text-light">
            Home
          </Link>
          <Link to="/about" className="mx-2 text-decoration-none text-light">
            About
          </Link>
        </div>
        <SearchForm className="bg-danger" />
      </div>
    </nav>
  );
};

export default Navbar;
