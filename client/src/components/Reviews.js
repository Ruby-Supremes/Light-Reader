import react from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";



function Reviews() { 

    const url = "/reviews";

    // const { state } = useLocation();
    // const { book } = state;
    // console.log(book);
  
  
    const [data, setData] = useState([]);

    const [status, setStatus] = useState('')
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [user_id, setUser] = useState('')
  
    // Get all data from api 
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

// [books.length]

    // Post review to api function

  // const postReview = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(url, {
  //       title,
  //       description,
  //       rating,
  //     })
  //     .then((res) => console.log("Posting Review", res))
  //     .catch((err) => console.log(err));
  //     alert("Review posted succesfully!");
  // };

  function postReview(e) {
    e.preventDefault();
    fetch('/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        rating,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => console.log(newReview));

    setTitle("");
    setDescription("");
    setRating('')
  }

  //Update data function using PUT
    
  const updateReview = (id, e) => {
    axios.put(`/reviews/${id}`, {
              title,
             description,
             rating
   })
     .then(res => {
         setStatus(res.status)
       console.log('Updating Review!!', res)})
     .catch(err => console.log(err))

  };


  //Deleting data function
  const deleteReview = (id, e) => {
    e.preventDefault();
    axios
      .delete(`/reviews/${id}`)
      .then((res) => console.log("Deleted!!", res))
      .catch((err) => console.log(err));
      alert("Review succesfully deleted!");
  };

  return (
    <div className="py-3">
      <h4> Give A Review</h4>
      <div style={{width: 500}}>
        <Form onSubmit = {postReview}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" 
              
              value={title}
              onChange={(e) => setTitle(e.target.value)}

            name="title" placeholder="Enter Review Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            name="description" placeholder="Review Description" row={2}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            name="description" placeholder="Review Description" row={2}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            name="description" placeholder="Review Description" row={2}/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" 
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            name="rating" min="1" max="10" placeholder="Rating"/>
          </Form.Group>
         
          <div>
          <Button variant="success" type="submit">Add Review</Button>
          
          </div>
        </Form>
      </div>

       {/* Book  Reviews Section */}   
    </div>
  );
}


export default Reviews;


