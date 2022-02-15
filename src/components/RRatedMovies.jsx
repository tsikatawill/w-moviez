import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Spinner from "./Spinner";

const RRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getRRatedMovies = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getRRatedMovies();
  }, []);
  return (
    <section className="popular-movies">
      {loading ? <Spinner /> : <MovieList movies={movies} category="R-Rated" />}
    </section>
  );
};

export default RRatedMovies;
