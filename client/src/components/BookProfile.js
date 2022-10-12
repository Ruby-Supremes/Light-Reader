import React from "react";
import Reviews from "./Reviews";
import {Link} from 'react-router-dom'
// import { BrowserRouter as NavLink } from 'react-router-dom'
// import { useLocation } from "react-router-dom";
// import Button from "react-bootstrap/Button";

function BookProfile() {

    // const {state} = useLocation()
    // const {book} = state
  
   

  return (
    <center>
      <div className="container py-5">
        <h2>Book Details</h2>
        <div className="card mb- h-100 shadow">
          <div className="row g-1">
            <div className="col-md-4">
              <img src="" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 h-100 shadow">
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <h5 className="card-title">Author</h5>
                <h5 className="card-title">Genre</h5>
                <p className="card-text">Description</p>
                <Link to={`/books/`} state={{}} className="btn btn-info text-center">Read full Book</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <button className="btn btn-success text-center">View or Add Review</button> 
     <Reviews />
      
    </center>
  );
}

export default BookProfile;

// ${book.id}
// state={{book}}
// :title, :coverpage, :description, :bookurl)

// {book.coverpage}
// {book.title}
// {book.description}