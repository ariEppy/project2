import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import "./Home.css";

export const Home = ({
  movies,
  selectedMovieId,
  selectThisMovie,
  addRating,
}) => {
  const [bestMovie, setBestMovie] = useState(null);

  //   import pics
  const images = import.meta.glob("../assets/*.jpg", { eager: true });
  // when movies changes (check the movie with best avg and) update the bestmovie
  useEffect(() => {
    if (!movies.length) return;

    let best = movies[0];
    let bestRating = average(best.score);

    for (let i = 1; i < movies.length; i++) {
      const avg = average(movies[i].score);
      if (avg > bestRating) {
        best = movies[i];
        bestRating = avg;
      }
    }

    setBestMovie(best);
  }, [movies]);

  function average(arr) {
    if (!arr.length) return 0;
    return arr.reduce((sum, n) => sum + n, 0) / arr.length;
  }

  const selectedMovie = movies.find((m) => m.id === selectedMovieId);
  const movieToShow = selectedMovie || bestMovie;

  if (!bestMovie) return <p>Loading...</p>;

  return (
    <div className="flex">
      {/* left side in the home page */}
      <div className="left">
        <p>Movie Name: {movieToShow.name}</p>

        <img
          src={images[`../assets/${movieToShow.img}`]?.default}
          alt={movieToShow.name}
        />

        <p>{movieToShow.description}</p>

        <div className="rating">
          <button onClick={() => addRating(movieToShow.id, 1)}>1</button>
          <button onClick={() => addRating(movieToShow.id, 2)}>2</button>
          <button onClick={() => addRating(movieToShow.id, 3)}>3</button>
          <button onClick={() => addRating(movieToShow.id, 4)}>4</button>
          <button onClick={() => addRating(movieToShow.id, 5)}>5</button>
        </div>

        <p>{average(movieToShow.score).toFixed(2)}</p>
      </div>
      {/* right side of the home page */}
      <div className="right">
        <SideBar movies={movies} selectThisMovie={selectThisMovie} />
      </div>
    </div>
  );
};
