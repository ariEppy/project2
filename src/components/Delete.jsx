import React, { useState } from "react";
import "./Delete.css";

export const Delete = ({ movies, setMovies }) => {
  const [name, setName] = useState("");

  function deleteMovie() {
    let newList = [...movies];
    let found = false;
    // if we found the movie title then splice it from the array
    for (let i = 0; i < newList.length; i++) {
      if (name.toLowerCase() === newList[i].name.toLowerCase()) {
        found = true;
        newList.splice(i, 1);
        break;
      }
    }
    if (found == false) alert("movie does not exist");
    setMovies(newList);
  }
  return (
    <div className="delete">
      <div className="deleteInside">
        <h2>Delete a movie :(</h2>
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button onClick={deleteMovie}>Delete</button>
      </div>
    </div>
  );
};
