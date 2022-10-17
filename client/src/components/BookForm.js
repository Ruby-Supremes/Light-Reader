import React, { useState, useNavigate } from "react";

// const quoteAPI = "http://localhost:9292/inspirations";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [coverpage, setCoverpage] = useState("");
  const [description, setDescription] = useState("");
  const [bookurl, setBookurl] = useState("");
  const [genre_id, setGenre_id] = useState("");

 
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
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
    <div>
      <div className="container py-5">
        <center>
          <div>
          <h4> Create New Book</h4>
            <div className="row-cols-md-12 py-2">
              <form onSubmit={handleSubmit}>
                <div
                  className="card mt-4 col-md-12 bg-light"
                  style={{ maxWidth: 900 }}
                >
                  <div className="card-body text-center">
                    <div className="container md-12">
                      <div className="form-group" style={{ margin: 5 }}>
                        <input
                          className="form-control"
                          placeholder="Book Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ margin: 5 }}>
                        <input
                          className="form-control"
                          placeholder="Coverpagebook"
                          value={coverpage}
                          onChange={(e) => setCoverpage(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ margin: 5 }}>
                        <textarea
                          className="form-control"
                          placeholder="Write your description here..."
                          rows={6}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group" style={{ margin: 5 }}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="book url"
                          value={bookurl}
                          onChange={(e) => setBookurl(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ margin: 5 }}>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="genre_id"
                          value={genre_id}
                          onChange={(e) => setGenre_id(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add New Book
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default BookForm;
