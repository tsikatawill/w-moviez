import React from "react";
import PopularMovies from "./components/PopularMovies";
import RRatedMovies from "./components/RRatedMovies";
import SciFiMovies from "./components/SciFiMovies";

function App() {
  return (
    <div className="App">
      <PopularMovies />
      <RRatedMovies />
      <SciFiMovies />
    </div>
  );
}

export default App;
