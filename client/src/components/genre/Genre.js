import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const GenreAPI = "/genres";

function Genre({genre, removeGenre}) {
  const {id,name} = genre;
  

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${GenreAPI}/${genre.id}`, {
      method: "DELETE",
    });
    removeGenre(genre);
  }


  return (
    <div className='py-4'>
      <h3>{name}</h3>
     
      <button className='btn btn-warning' style={{margin: 15}}>
      <Link className='nav-link' to={'/genre/'+ id}>Edit</Link>
      </button>
       
      <button className='btn btn-danger' onClick={onDeleteClick} >
        Delete
      </button>
    </div>
  );
}

export default Genre;