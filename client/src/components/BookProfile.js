import React from "react";
import { Link } from "react-router-dom"

function BookProfile() {
  return (
    <center>
      <div className="container py-5">
        <h2>Book Profile</h2>

        <div className="card mb- h-100 shadow" >
          <div className="row g-1">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 h-100 shadow">
              <div className="card-body">
                <h4 className="card-title">Book title</h4>
                <h5 className="card-title">Author</h5>
                <h5 className="card-title">Genre</h5>
                <p className="card-text">Description</p>
                {/* <Link to={`/books/`} className="btn btn-dark text-center">Read full Book</Link> */}
              </div>
            </div>
            <div className="py-4">
            <h5>Book Reviews</h5>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default BookProfile;

// ${dev.id}
// state={{dev}}