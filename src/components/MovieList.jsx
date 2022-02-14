import React, { useEffect } from "react";
// import { MoviesContext } from "./context/MoviesContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  // const { movies } = useContext(MoviesContext);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const TMDB_URL = process.env.REACT_APP_TMDB_URL;
  const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

  useEffect(() => {
    const getMovies = async () => {
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
        setMovies(data.results);
      }
      setLoading(false);
    };

    getMovies();
  }, [TMDB_TOKEN, TMDB_URL]);

  return (
    <section className="movie-list">
      <div className="container  py-5">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul className="row">
            {movies.map((movie) => {
              return (
                <li className="col-md-3 col-sm-6 mb-3 mb-md-5" key={movie.id}>
                  <MovieCard
                    imgLink={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    title={movie.title}
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
