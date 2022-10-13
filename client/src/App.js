// import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
//  import Login from "./components/Login"
// // import SignupForm from "./components/SignupForm"
// // import HomePage from "./components/HomePage"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   if (!user) return <Login onLogin={setUser} />;

//   return (
//     <>
//      {/* { <NavBar user={user} setUser={setUser} /> */}
// {/* //       <main>
// //         <Switch>
// //           <Route path="/new">
// //             <AllBooks user={user} />
// //           </Route>
// //           <Route path="/">
// //             <Home />
// //           </Route>
// //         </Switch>
// //       </main> */}
// //     </>
//   );
//  }


// export default App
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Light-Reader
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App