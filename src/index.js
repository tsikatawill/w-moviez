import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import MovieProvider from "./components/context/MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
