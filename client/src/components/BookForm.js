import React, { useState } from 'react';

// const quoteAPI = "http://localhost:9292/inspirations";

function BookForm({addBook}) {
    const [title, setTitle] = useState("")
    const [coverpage, setCoverpage] = useState("")
    const [description, setDescription] = useState("")
    const [bookurl, setBookurl] = useState("")
    const[genre_id,setGenre_id]=useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        coverpage,
        description,
        bookurl,
        genre_id,
      }),
    })
      .then((r) => r.json())
      .then((newBook) => console.log(newBook));

    setTitle("");
    setCoverpage("");
    setDescription("");
    setBookurl("");
    setGenre_id("");
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Coverpagebook" 
        value={coverpage}
        onChange={(e) => setCoverpage(e.target.value)}
      /> 

      <textarea 
        placeholder="Write your description here..." 
        rows={10} 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

    <input 
        placeholder="book url" 
        value={bookurl}
        onChange={(e) => setBookurl(e.target.value)}
    />

    <input 
        placeholder="genre genre_id" 
        value={genre_id}
        onChange={(e) => setGenre_id(e.target.value)}
    />
      
      <input 
        type="submit" 
        value="Share your masterpiece" 
      />
    </form>
  );
}

export default BookForm;