import React from "react";
import MovieList from "./components/MovieList";
// import MovieLists from "./components/MovieLists";

function App() {
  return (
    <div className="App">
      <MovieList movie_category="rRatedMovies" />
    </div>
  );
}

export default App;
