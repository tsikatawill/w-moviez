import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, category }) => {
  return (
    <section className="movie-list">
      <div className="container  py-5">
        <h2 className="fw-bold">{category}</h2>
        <ul className="movie-list-items">
          {movies.map((movie) => (
            <li className="movie-list-item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard
                  title={movie.title}
                  vote_average={movie.vote_average}
                  imgLink={movie.poster_path}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MovieList.defaultProps = {
  movies: [],
  category: "Category",
};

export default MovieList;
