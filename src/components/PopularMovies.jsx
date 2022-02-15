import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: `token ${process.env.TMDB_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setMovies(data.results);
    };
    getPopularMovies();
  }, []);
  return (
    <section className="popular-movies">
      <MovieList movies={movies} category="Popular" />
    </section>
  );
};

export default PopularMovies;
