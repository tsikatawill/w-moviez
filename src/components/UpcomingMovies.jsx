import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_URL}/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_TOKEN}&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: `token ${process.env.TMDB_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setMovies(data.results);
      setLoading(false);
    };
    getPopularMovies();
  }, []);
  return (
    <section className="popular-movies">
      {loading ? (
        <div className="container mt-5">
          <h2 className="fw-bold">Popular</h2>
          <Spinner />
        </div>
      ) : (
        <MovieList movies={movies} category="Upcoming" />
      )}
    </section>
  );
};

export default UpcomingMovies;
