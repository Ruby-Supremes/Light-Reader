import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Reviews() {
  return (
    <div>
      <h4> Add Review</h4>

      <div style={{width: 500}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Review Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Review Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" min="1" max="10" placeholder="Rating"/>
          </Form.Group>
         
          <div>
          <Button variant="success" type="submit">Add</Button>
          
          </div>
        </Form>
      </div>
      {/* Book  Reviews Section */}
      <div className="row row-cols-1 row-cols-md-4 py-3">
      <div className="py-4">
        <h4>Book Reviews</h4>
        <div className="card mb- h-100 shadow" >
          <div className="row g-1">
            <div className="col-md-8 h-100 shadow">
              <div className="card-body">
                <h6 className="card-title">Review title</h6>
                <p className="card-title">Description</p>
                <p className="card-text">Rating</p>
            </div>
            <Button style={{marginRight: 10}} variant="primary" type="submit">Edit</Button>
            <Button variant="danger" type="submit">Delete</Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
