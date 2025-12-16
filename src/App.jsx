import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { Delete } from "./components/Delete";
import { Search } from "./components/Search";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import Movies from "./data/Movies";
import { useState } from "react";
import { MovieHeader } from "./components/MovieHeader";

export default function App() {
  const [movies, setMovies] = useState(Movies);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  function selectThisMovie(movie) {
    setSelectedMovieId(movie.id);
  }

  function addRating(movieId, score) {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === movieId
          ? { ...movie, score: [...movie.score, score] }
          : movie
      )
    );
  }

  return (
    <div>
      <h1>Best Movie</h1>
      <NavBar />
      <MovieHeader movies={movies} selectThisMovie={selectThisMovie} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              selectedMovieId={selectedMovieId}
              selectThisMovie={selectThisMovie}
              addRating={addRating}
            />
          }
        />
        <Route
          path="/delete"
          element={<Delete movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/search"
          element={<Search movies={movies} addRating={addRating} />}
        />
        <Route
          path="/add"
          element={<Add movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </div>
  );
}
