// import React, { useState } from "react";
// // import { Button, Error, Input, FormField, Label } from "../styles";

// import Button from "react-bootstrap/Button";
// import FormField from "react-bootstrap/FormField"
// import Error from "react-bootstrap/Error";
// import Input from "react-bootstrap/Input";
// import Label from "react-bootstrap/Label";


// function LoginForm({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <FormField>
//         <Label htmlFor="username">Username</Label>
//         <Input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Button variant="fill" color="primary" type="submit">
//           {isLoading ? "Loading..." : "Login"}
//         </Button>
//       </FormField>
//       <FormField>
//         {errors.map((err) => (
//           <Error key={err}>{err}</Error>
//         ))}
//       </FormField>
//     </form>
//   );
// }

// export default LoginForm;

import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
