import { createContext } from "react";
import React from "react";

export const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  // const [url, setUrl] = useState("");
  // const getMovies = async (url) => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_TMDB_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&{url}`,
  //     {
  //       headers: {
  //         Authorization: `token ${process.env.TMDB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  // };
  // useEffect(() => {
  //   getMovies(url);
  // }, [url]);
  // const [loading, setLoading] = React.useState(false);

  // const TMDB_URL = process.env.REACT_APP_TMDB_URL;
  // const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};

export default MovieProvider;
