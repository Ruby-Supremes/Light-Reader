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
    const [user_id, setUser_id] = useState('')
    const [book_id, setBook_id] = useState('')
  
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

// Post Reviews 
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
        user_id,
        book_id,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => console.log(newReview));

    setTitle("");
    setDescription("");
    setRating('')
    setUser_id('')
    setBook_id('')
  }



  return (
    <div className="py-3">
      <h4> Give A Review</h4>
      <div style={{maxWidth: 500}}>
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
              value={user_id}
              onChange={(e) => setUser_id(e.target.value)}
              autoComplete = 'user_id'
            name="user_id" placeholder="User Id" row={2}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="number" 
              value={book_id}
              onChange={(e) => setBook_id(e.target.value)}
              autoComplete = "book_id"
            name="book_id" placeholder="Book Id" row={2}/>
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
    </div>
  );
}


export default Reviews;


