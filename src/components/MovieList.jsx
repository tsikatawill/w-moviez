import React, { useEffect } from "react";
// import { MoviesContext } from "./context/MoviesContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  // const { movies } = useContext(MoviesContext);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const TMDB_URL = "https://api.themoviedb.org/3";
  const TMDB_TOKEN = "f634f1397ed279619c599ead3e78b65c";

  useEffect(() => {
    getMovies();
  }, []);

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
      console.log(data.results);
      setMovies(data.results);
    }
    setLoading(false);
  };

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
