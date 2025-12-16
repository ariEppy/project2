import React, { useState } from "react";
import "./Add.css";

export const Add = ({ movies, setMovies }) => {
  const [name, setName] = useState("");
  const [picName, setPicName] = useState("");
  const [description, setDescription] = useState("");

  // uppercase the movie name before adding it to the list
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function addMovie() {
    if (!name || !picName || !description) {
      alert("Please fill in all fields");
      return;
    }

    let id = movies[movies.length - 1].id + 1;
    const newMovie = {
      id: id,
      name: capitalizeWords(name),
      score: [],
      img: picName,
      description: description,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setName("");
    setPicName("");
    setDescription("");
  }
  return (
    <div className="addClass">
      <div className="inside">
        <h2>Add a new movie!</h2>
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Movie Picture URL"
          value={picName}
          onChange={(e) => setPicName(e.target.value)}
        />
        <br />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
        />
        <br />
        <br />
        <button onClick={addMovie}>Add Movie!</button>
      </div>
    </div>
  );
};
