import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Reviews() {
  return (
    <div>
      <h4> Book Reviews</h4>

      <div style={{width: 500}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Review Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Review Description" />
          </Form.Group>
         
          <div>
          <Button style={{marginRight: 10}} variant="dark" type="submit">Add</Button>
          <Button style={{marginRight: 10}} variant="dark" type="submit">Edit</Button>
          <Button variant="dark" type="submit">Delete</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Reviews;
