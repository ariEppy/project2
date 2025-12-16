import React, { use, useEffect, useState } from "react";
import "./Search.css";

export const Search = ({ movies, addRating }) => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // get the movie object
  function showMovie(name) {
    const movie = movies.find(
      (m) => m.name.toLowerCase() === name.toLowerCase()
    );
    setSelectedMovieId(movie.id);

    if (movie == null) alert("movie does not exist");
  }

  //   import the pics
  const images = import.meta.glob("../assets/*.jpg", { eager: true });

  // while we write search for the movie in movies
  function searchForMovie(movieName) {
    if (movieName == "") {
      setResults([]);
      return;
    }

    let temp = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name.toLowerCase().includes(movieName.toLowerCase())) {
        temp.push(movies[i].name);
      }
    }
    setResults(temp);
  }

  function average(arr) {
    if (!arr.length) return 0;
    return arr.reduce((sum, n) => sum + n, 0) / arr.length;
  }

  const selectedMovie = movies.find((m) => m.id === selectedMovieId);

  return (
    <div className="flexSearch">
      <div className="searchLeft">
        {selectedMovie && (
          <div>
            <p>Movie Name: {selectedMovie.name}</p>
            <img
              src={images[`../assets/${selectedMovie.img}`]?.default}
              alt={selectedMovie.name}
            />
            <p>{selectedMovie.description}</p>
            <div className="rating">
              <button onClick={() => addRating(selectedMovie.id, 1)}>1</button>
              <button onClick={() => addRating(selectedMovie.id, 2)}>2</button>
              <button onClick={() => addRating(selectedMovie.id, 3)}>3</button>
              <button onClick={() => addRating(selectedMovie.id, 4)}>4</button>
              <button onClick={() => addRating(selectedMovie.id, 5)}>5</button>
            </div>

            <p>{average(selectedMovie.score).toFixed(2)}</p>
          </div>
        )}
      </div>
      <div className="searchRight">
        <input
          type="text"
          value={name}
          placeholder="Movie Name"
          onChange={(e) => {
            setName(e.target.value);
            searchForMovie(e.target.value);
          }}
        />
        {results.length > 0 && (
          <ul>
            {results.map((movie, i) => (
              <li
                key={i}
                onClick={() => {
                  setName(movie);
                  setResults([]);
                }}
              >
                {movie}
              </li>
            ))}
          </ul>
        )}
        <br />
        <br />
        <button onClick={() => showMovie(name)}>Search</button>
      </div>
    </div>
  );
};
