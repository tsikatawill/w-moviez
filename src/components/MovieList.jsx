import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./context/MoviesContext";
import MovieCard from "./MovieCard";

const MovieList = ({ movie_category }) => {
  const { rRatedMovies, popularMovies, loading } = useContext(MoviesContext);
  const [sectionTitle, setSectionTitle] = useState("Movies category");
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const setMovieCategory = (movie_category) => {
      if (movie_category === "rRatedMovies") {
        setSectionTitle("R-Rated");
        setSelectedMovies(rRatedMovies);
      } else if (movie_category === "popularMovies") {
        setSectionTitle("Popular");
        setSelectedMovies(popularMovies);
      } else {
        setSectionTitle("Movies category");
        setSelectedMovies([]);
      }
    };

    setMovieCategory();
  }, [popularMovies, rRatedMovies]);

  return (
    <section className="movie-list">
      <div className="container  py-5">
        <h2 className="fw-bold ">{sectionTitle}</h2>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul className="movie-list-items">
            {selectedMovies.map((movie) => {
              return (
                <li className="movie-list-item" key={movie.id}>
                  <MovieCard
                    imgLink={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    title={movie.title}
                    vote_average={movie.vote_average}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MovieList;
