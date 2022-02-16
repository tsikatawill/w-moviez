import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container d-sm-flex text-sm-start text-center justify-content-between align-items-center">
        <Link
          to="/"
          className="logo text-decoration-none text-white h3 fw-bold"
        >
          W-<span className="text-warning">Moviez</span>
        </Link>
        <div className="nav-menu">
          <Link to="/" className="mx-2 text-decoration-none text-light">
            Home
          </Link>
          <Link to="/about" className="mx-2 text-decoration-none text-light">
            About
          </Link>
        </div>
        <SearchForm />
      </div>
      <div className="text-center my-5">Copyright &copy;2022</div>
    </footer>
  );
};

export default Footer;