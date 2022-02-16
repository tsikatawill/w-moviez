import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useParams().search_query;
  useEffect(() => {
    const getSearchResult = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&query=${query}`,
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
    getSearchResult();
  }, [query]);
  return (
    <section className="search-results">
      {loading ? (
        <>
          <div className="container mt-5">
            <h2 className="fw-bold">Searching</h2>
          </div>
          <Spinner />
        </>
      ) : movies.length > 0 ? (
        <MovieList movies={movies} category="Search Results" />
      ) : (
        <div className="container pt-5">
          <h1 className="fw-bold">Search results</h1>
          <p>Sorry, your search returned no results</p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
