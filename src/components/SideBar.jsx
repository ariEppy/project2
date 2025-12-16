import React, { useEffect, useState } from "react";

export const SideBar = ({ movies, selectThisMovie }) => {
  const [randomSortedMovies, setRandomSortedMovies] = useState([]);

  //   import the pics
  const images = import.meta.glob("../assets/*.jpg", { eager: true });

  useEffect(() => {
    const randomMovies = getRandomItems(movies, 5);
    const sortedRandomMovies = randomMovies.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setRandomSortedMovies(sortedRandomMovies);
  }, []);

  function getRandomItems(arr, count) {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
  }

  return (
    <div>
      <h3>All Movies</h3>

      {randomSortedMovies.map((movie, i) => {
        const imgSrc = images[`../assets/${movie.img}`]?.default;

        return (
          <div className="movie">
            <img src={imgSrc} alt={movie.name} />
            <p className="movieTitle" onClick={() => selectThisMovie(movie)}>
              {movie.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
