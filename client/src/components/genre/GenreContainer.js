import React from "react";
import Genre from "../genre/Genre";

function GenreContainer({genres, removeGenre}) {
  return (
    <div className="poems-container">
      {genres.map(genre => {
        return (
          <Genre key={genre.id}  genre={genre} removeGenre={removeGenre} />
        )
        })}
    </div>
  );
}

export default GenreContainer;
