import React from "react";

const MovieCard = ({ imgLink, title }) => {
  return (
    <div className="movie-card">
      <img src={imgLink} alt="movie" />
      <div className="text bg-black text-white text-center py-2">
        <p className="fw-bold p-0 m-0">{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
