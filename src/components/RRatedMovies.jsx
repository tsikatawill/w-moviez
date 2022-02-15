import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const RRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getRRatedMovies = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&certification_country=US&certification=R&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: `token ${process.env.TMDB_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setMovies(data.results);
    };
    getRRatedMovies();
  }, []);
  return (
    <section className="popular-movies">
      <MovieList movies={movies} category="R-Rated" />
    </section>
  );
};

export default RRatedMovies;
