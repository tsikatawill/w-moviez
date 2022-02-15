import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const movieID = useParams().id;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`
      );
      const data = await response.json();

      if (data) {
        setMovie(data);
      }
      setLoading(false);
    };

    getMovieDetails();
  }, [movieID]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="movie-detail">
          <div
            className="hero"
            style={{
              background: `url(${
                movie.backdrop_path
                  ? process.env.REACT_APP_TMDB_IMAGE_URL +
                    "/" +
                    movie.backdrop_path
                  : "https://media.istockphoto.com/vectors/popcorn-box-3d-cinema-glasses-and-clapper-board-on-the-film-strip-vector-id1179553332?k=20&m=1179553332&s=170667a&w=0&h=a55Js1iWKdtAg7Ot34QSlUmLpbGGeO_Bdw_8mLxci9c="
              }) center center/cover no-repeat`,
              minHeight: "500px",
            }}
          ></div>
          <div
            className="detail-card text-white py-4"
            style={{
              transform: "translateY(-300px)",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7), black, black, black, black)",
            }}
          >
            <div className="container d-flex align-items-center justify-content-between">
              <div className="text" style={{ maxWidth: "600px" }}>
                <h1 className="fw-bold">{movie.title}</h1>
                <div className="genres my-2">
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <span className="btn text-white mx-1" key={genre.id}>
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p>{movie.overview}</p>
              </div>
              <div className="image">
                <MovieCard
                  imgLink={
                    movie.poster_path
                      ? movie.poster_path
                      : process.env.REACT_APP_TMDB_IMAGE_PLACEHOLDER_URL
                  }
                  vote_average={movie.vote_average}
                  title={movie.title}
                  style={{ boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.3)" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
