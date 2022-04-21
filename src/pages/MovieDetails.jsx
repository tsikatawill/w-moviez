import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import MovieCard from "../components/MovieCard";
import castImgPlaceholder from "../images/user-dp.png";

const MovieDetails = () => {
  const movieID = useParams().id;
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
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

  useEffect(() => {
    const getCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_TMDB_TOKEN}`
      );
      const data = await response.json();

      setCast(data.cast.slice(0, 20));
    };

    getCast();
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
              minHeight: "600px",
              position: "relative",
              marginBottom: "200px",
            }}
          >
            <div
              className="detail-card text-white py-4"
              style={{
                position: "absolute",
                bottom: "-100px",
                left: "50%",
                width: "100%",
                transform: "translate(-50%, 100px)",
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7), black, black, black, black)",
              }}
            >
              <div
                className="container d-sm-flex align-items-center justify-content-between"
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                <div className="text" style={{ maxWidth: "550px" }}>
                  <h1 className="fw-bold">{movie.title}</h1>
                  <div className="genres my-2">
                    {movie.genres &&
                      movie.genres.map((genre) => (
                        <span className="btn text-white mx-1" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <p style={{ maxWidth: "90%" }}>{movie.overview}</p>
                  <div className="cast">
                    <h3 className="fw-bold">Cast</h3>
                    <div
                      className="d-flex"
                      style={{ overflowX: "scroll", width: "90%" }}
                    >
                      {cast.length > 0 ? (
                        cast.map((item) => {
                          return (
                            <a
                              href={`https://google.com/search?q=${item.name}`}
                              target="_blank"
                              rel="noreferrer"
                              key={item.cast_id}
                            >
                              <div className="cast-card mx-2">
                                <div
                                  className="image-wrapper"
                                  style={{
                                    borderRadius: "5px",
                                    overflow: "hidden",
                                  }}
                                >
                                  <img
                                    src={
                                      item.profile_path
                                        ? process.env.REACT_APP_TMDB_IMAGE_URL +
                                          item.profile_path
                                        : castImgPlaceholder
                                    }
                                    alt=""
                                    width="70px"
                                    height="100"
                                  />
                                </div>
                                <small style={{ textAlign: "center" }}>
                                  {item.name}
                                </small>
                              </div>
                            </a>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="image d-none d-sm-block">
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
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
