import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";

const SciFiMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&with_genres=878&sort_by=popularity.desc`,
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
      {loading ? <Spinner /> : <MovieList movies={movies} category="Sci-Fi" />}
    </section>
  );
};

export default SciFiMovies;
