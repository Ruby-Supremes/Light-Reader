import React, { useState} from 'react';
import { redirect } from 'react-router-dom';
import axios from 'axios';

  

function SignUp({onLogin}) {

  // const [data, setData] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

// Create user sign up details

// const postData = (e) => {
//   e.preventDefault();
//   axios
//     .post("/signup", {
//       username,
//       email,
//       password,
//       password_confirmation,
//     })
//     .then((res) => console.log("Adding user", res))
//     .catch((err) => console.log(err));
//     // alert("User added succesfully!");
// };
// let navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  setErrors([]);
  setIsLoading(true);
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password_confirmation,
    }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => console.log(user));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
  // navigate('/login')

}
function  red(){
  <redirect to='/login'/>
}

  return (
    <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <input
            type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control"
xcvbn          />
        </div>
        <div className="mb-3">
          <input
            type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="form-control"
            placeholder="Enter email"
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
          <input
            type="password" value={password_confirmation}
            onChange={(e) => setPassword_Confirmation(e.target.value)}
            name="password_confirm"
            className="form-control"
            placeholder="Password confirmation"
          />
        </div>
        <div className="d-grid">
          <button type="submit"  className="btn btn-primary" onClick={red}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  
}

export default SignUp;