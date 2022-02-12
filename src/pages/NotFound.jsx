import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <img src={ErrorImg} alt="404" width="300px" />
        <div className="text my-5 text-cener">
          <h2>Page not found</h2>
          <Link to="/" children="Go home" className="btn btn-secondary" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
