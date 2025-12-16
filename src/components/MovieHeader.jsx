import React from "react";
import "./MovieHeader.css";

export const MovieHeader = ({ movies, selectThisMovie }) => {
  const images = import.meta.glob("../assets/*.jpg", { eager: true });

  function average(arr) {
    if (!arr.length) return 0;
    return arr.reduce((sum, n) => sum + n, 0) / arr.length;
  }

  const top3 = [...movies]
    .sort((a, b) => average(b.score) - average(a.score))
    .slice(0, 3);

  return (
    <div className="header2">
      {top3.map((movie, i) => {
        const imgSrc = images[`../assets/${movie.img}`]?.default;

        return (
          <div
            key={i}
            className="headerMovie"
            onClick={() => selectThisMovie(movie)}
          >
            <img src={imgSrc} alt={movie.name} />
            <p className="movieTitle">{movie.name}</p>
          </div>
        );
      })}
    </div>
  );
};
