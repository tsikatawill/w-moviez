import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import MovieProvider from "./components/context/MoviesContext";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="search/:search_query" element={<SearchResults />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
