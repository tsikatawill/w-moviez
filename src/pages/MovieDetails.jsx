import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  const movieID = useParams().id;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`
      );
      const data = await response.json();

      data && setMovie(data);
      console.log(data);
    };

    getMovieDetails();
  }, [movieID]);
  return (
    <div>
      <div className="container py-5">
        <h1>{movie.title}</h1>
        <div className="genres my-2">
          {movie.genres.map((genre) => (
            <span className="bg-secondary p-1 mx-1 text-white" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
