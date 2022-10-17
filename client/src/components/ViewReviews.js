import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewReviews({ review, onDeleteReview }) {

  const [data, setData] = useState([]);

    // Get all data from api 
    useEffect(() => {
      axios
        .get('/reviews')
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

// Update Review 
  const[newTitle, setNewTitle] = useState("")
  const[newDescription, setNewDescription] = useState("")
  const[newRating, setNewRating] = useState("")

  //   const updateReview = (id, e) => {
  //     e.preventDefault();
  //   axios.put(`/reviews/${id}`, {
  //   title: newTitle,
  //   description: newDescription,
  //   rating: newRating,
  //   })
  //   }

  // const { title, description, rating } = review;

  // function handleUpdate(review) {
  //   fetch(`/reviews/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ rating: newRating }),
  //   })
  //     .then((r) => r.json())
  //     .then(onUpdateReview);
  // }

  function handleDeleteReview(id, e) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    });
  }

  return (
    <div className="container py-5">
      <center>
        <h4> Available Book Reviews </h4>

        
        <div className="reviews-list row">
        {data.map((review, index)=> (            
          <div key={index}  className="card mt-4 col-md-6">
            <div className="card-body">
              <h5 className="card-title">{review.title}</h5>
              <p className="card-text">{review.description}</p>
              <p className="card-text">{review.rating}</p>
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
              <button  className="btn btn-warning" style={{ marginRight: 5 }}>
                Update Review
              </button>
              <button onClick={handleDeleteReview} className="btn btn-danger">Delete Review</button>
            </div>
          </div>
           ))}
        </div>
      </center>
    </div>
  );
}

export default ViewReviews;



//  onChange={(e) => setNewTitle(e.target.value)} 
// onChange={(e) => setNewDescription(e.target.value)}
//  onChange={(e) => setNewRating(e.target.value)}

// onclick={(e)=> {updateReview(review.id, e)}}
// onclick={(e)=> {deleteReview(review.id, e)}}


