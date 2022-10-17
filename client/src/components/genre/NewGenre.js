import React, { useState } from 'react';

const genreAPI = "/genres";

function NewGenre({addGenre}) {
  const [name, setName] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch(genreAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
     
      }),
    })
      .then((r) => r.json())
      .then((newGenre) => addGenre(newGenre));

    setName("");

  }

  return (
    <div>
      <center>
      <form onSubmit={handleSubmit} >
      <input style={{margin: 8}} placeholder="Name of genre" value={name} onChange={(e) => setName(e.target.value)} required/>
      <button className='btn btn-primary' type="submit" value="Add genre">Add Genre</button>
    </form>
      </center>
    </div>
  );
}

export default NewGenre;