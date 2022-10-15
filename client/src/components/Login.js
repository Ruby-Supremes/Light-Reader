
import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router';
import axios from 'axios';



function Login({onLogin}) {

  // const [data, setData] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState([]);

// Ligin user sign up details

// const postData = (e) => {
//   e.preventDefault();
//   axios
//     .post("/login", {
//       username,
//       password,
//     })
//     .then((res) => console.log("Adding user", res))
//     .catch((err) => console.log(err));
//     // alert("User logged succesfully!");
// };
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
   
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <input
            type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <input
            type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          
          {/* <NavLink to={`/developers/${dev.id}`} state={{dev}} className="btn btn-info text-center"> </NavLink> */}

        </div>
        {/* <p className="forgot-password text-right">
          Don't have an Account yet? <a href="/sign-up">Sign Up</a>
        </p> */}
      </form>

  );
}



export default Login;
