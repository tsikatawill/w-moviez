import { createContext } from "react";
import React, { useEffect } from "react";

export const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [rRatedMovies, setRRatedMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const TMDB_URL = process.env.REACT_APP_TMDB_URL;
  const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `${TMDB_URL}/discover/movie?api_key=${TMDB_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        {
          headers: {
            Authorization: `token ${TMDB_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        setPopularMovies(data.results);
      }
      setLoading(false);
    };

    const getRRatedMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `${TMDB_URL}/discover/movie/?api_key=${TMDB_TOKEN}&certification_country=US&certification=R&sort_by=vote_average.desc`,
        {
          headers: {
            Authorization: `token ${TMDB_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      if (data) {
        setRRatedMovies(data.results);
      }
      setLoading(false);
    };

    getPopularMovies();
    getRRatedMovies();
  }, [TMDB_TOKEN, TMDB_URL]);

  return (
    <MoviesContext.Provider value={{ rRatedMovies, popularMovies, loading }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;
