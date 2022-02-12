import { createContext } from "react";
import React from "react";

export const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};

export default MovieProvider;
