import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewReviews() {


// Update Review 
  const[newTitle, setNewTitle] = useState("")
  const[newDescription, setNewDescription] = useState("")
  const[newRating, setNewRating] = useState("")

    const updateReview = (id, e) => {
      e.preventDefault();
    axios.put(`/reviews/${id}`, {
    title: newTitle,
    description: newDescription,
    rating: newRating,
    })
    }

//Deleting data function
    const deleteReview = (id, e) => {
    e.preventDefault();
    axios
    .delete(`url${id}`)
    .then((res) => console.log("Deleted!!", res))
    .catch((err) => console.log(err));
    };


  return (
    <div className="container py-5">
      <center>
        <h4> Available Book Reviews </h4>

        
        <div className="reviews-list row">
          {/* {((dev, index)=> (   */}
          {/* key={}  */}
          <div className="card mt-4 col-md-6">
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Description</p>
              <p className="card-text">Rating</p>
              <div>
              <form>
                <div className="form-group" style={{ margin: 5 }}>
                  <input
                    type="text" onChange={(e) => setNewTitle(e.target.value)} 
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <textarea onChange={(e) => setNewDescription(e.target.value)}
                    className="form-control"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="form-group" style={{ margin: 5 }}>
                  <input
                    type="number" onChange={(e) => setNewRating(e.target.value)}
                    className="form-control"
                    min="1"
                    max="10"
                    placeholder="Rating"
                  />
                </div>
                </form>
              </div>
              <button className="btn btn-warning" style={{ marginRight: 5 }}>
                Update Review
              </button>
              <button className="btn btn-danger">Delete Review</button>
            </div>
          </div>
          {/* ))} */}
        </div>
      </center>
    </div>
  );
}

export default ViewReviews;



//  onChange={(e) => setNewTitle(e.target.value)} 
// onChange={(e) => setNewDescription(e.target.value)}
//  onChange={(e) => setNewRating(e.target.value)}

// onclick={(e)=> {updateReview(book.id, e)}}
// onclick={(e)=> {deleteReview(book.id, e)}}

