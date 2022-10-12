import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";



function Reviews() { 

//     const url = "/reviews";

//     const { state } = useLocation();
//     const { book } = state;
//     console.log(book);
  
  
//     const [data, setData] = useState([]);
  
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [rating, setRating] = useState("");
  
//     // Get all data from api 
//     useEffect(() => {
//       axios
//         .get(url)
//         .then((res) => {
//           console.log(res.data);
//           setData(res.data);
//         })
//         .catch((err) => console.log(err));
//     }, []);

//[books.length]

//     // Post review to api function

//   const postReview = (e) => {
//     e.preventDefault();
//     axios
//       .post(url, {
//         title,
//         description,
//         rating,
//       })
//       .then((res) => console.log("Posting Review", res))
//       .catch((err) => console.log(err));
//       alert("Review succesfully posted!");
//   };

//   //Update data function using PUT

//   const updateReview = (id, e) => {
//     // e.preventDefault();
//     // axios.put(`http://localhost:9292/reviews/${id}`)
//     // .then(res => console.log('Data Updated!!', res))
//     //   .catch(err => console.log(err))
//   };

//   //Deleting data function
//   const deleteReview = (id, e) => {
//     e.preventDefault();
//     axios
//       .delete(`/reviews/${id}`)
//       .then((res) => console.log("Deleted!!", res))
//       .catch((err) => console.log(err));
//       alert("Review succesfully deleted!");
//   };

  return (
    <div className="py-3">
      <h4> Give Review</h4>
      <div style={{width: 500}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" 


            name="title" placeholder="Enter Review Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" 
            name="description" placeholder="Review Description"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" 
            name="rating" min="1" max="10" placeholder="Rating"/>
          </Form.Group>
         
          <div>
          <Button variant="success" type="submit">Add</Button>
          
          </div>
        </Form>
      </div>
       {/* Book  Reviews Section */}
  
          <div className="container py-5">
            <center>  
              <h4> Available Book Reviews </h4>
             <div className="row row-cols-1 row-cols-md-4 py-3">
            {/* {((dev, index)=> (   */}
            {/* key={}  */}
            <div   className="col mb-4">
            <div className="card text-center h-100 shadow">  
              <img src=".." className="card-img-top" alt=""/>
              <div className="card-body ">
                <h6 className="card-title">Title</h6>
                <p className="card-text"> Description</p>
                <p className="card-text">Rating</p>
              </div>
            </div> 
          </div> 
          {/* ))} */}
        </div>
        </center> 
      </div>
    </div>
  );
}


export default Reviews;

// value={title}
//             onChange={(e) => setTitle(e.target.value)}

// <div className="container py-5">
  //  <center>  
  //   <h3>View Available Developers Here</h3>
  //   <div className="row row-cols-1 row-cols-md-4 py-3">
  //   {data.map((dev, index)=> (  
  //     <div key={index} className="col mb-4">
  //       <div className="card text-center h-100 shadow">  
  //         <img src={dev.image_url} className="card-img-top" alt=""/>
  //         <div className="card-body ">
  //           <h5 className="card-title">{dev.first_name}</h5>
  //           <p className="card-text"> {dev.developer.category}</p>
  //           <p className="card-text">Experience: {dev.experience} yrs</p>
  //         </div>
  //       </div> 
  //     </div> ))}
  //   </div>
  //   </center> 
  // </div>


  // <div className="container">
  //     <h4 className="py-3">Available Reviews</h4>
  //     <div className="row row-cols-1 row-cols-md-4 py-4">
  //     <div>
  //       <div className="card py-3">
  //         <div className="col mb-4">
  //           <div>
  //             <div>
  //               <h6 className="card-title">Review title</h6>
  //               <p className="card-title">Description</p>
  //               <p className="card-text">Rating</p>
  //           </div>
  //           <Button style={{margin: 5, height: 35}} variant="warning" type="submit">Edit</Button>
  //           <Button style={{ height: 35}} variant="danger" type="submit">Delete</Button>
  //           </div>
  //         </div>
  //       </div>
  //       </div>
  //      </div>
  //      </div>