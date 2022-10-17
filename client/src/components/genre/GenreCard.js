import React, { useState, useEffect } from 'react';
import GenreContainer from './GenreContainer';
import NewGenre from './NewGenre';

const genreAPI = "/genres";
// id, title, content, author

function GenreCard() {
  const [genres, setGenres] = useState([]);
//   const genresToDisplay = genres.all

  useEffect(() => {
    fetch(genreAPI)
      .then(res => res.json())
      .then(data => setGenres(data))
  }, []);

  function addGenre(newGenre) {
    setGenres([...genres, newGenre]);
  }

  function removeGenre(genreToRemove) {
    setGenres(genres.filter(genre => genre.id !== genreToRemove.id))
  }


  return (
   <div className="container py-5">
     <center>
     <div>
      <div>
        <NewGenre addGenre={addGenre} />
      </div>
      <GenreContainer genres={genres} removeGenre={removeGenre}/>
    </div>
     </center>
   </div>
  );
}

export default GenreCard;

