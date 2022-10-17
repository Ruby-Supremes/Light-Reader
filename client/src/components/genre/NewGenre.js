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
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="submit" 
        value="Add genre" 
      />
    </form>
  );
}

export default NewGenre;