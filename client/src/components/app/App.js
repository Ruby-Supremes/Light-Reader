import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomeCard from '../home/ HomeCard'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import Home from '../Home'
import Navbar from "../Navbar";
import Login from '../Login'
import SignUp from '../SignUp'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(){
    setUser(user)
  }

  function handleLogout(){
    setUser(null)
  }

  if (!user) return <Login onLogin={setUser} />;
  else{
  return (

    <>
      <Navbar user={user} setUser={setUser} />



    <Router>
     
        
      <div className="App">
        
       {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
        </nav> */}
        
        <div className = "container">
               {/* <HomeCard /> */}
          </div>
          
         <div className="auth-wrapper">
           
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} onLogin={handleLogin} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    
    </Router>
    </>
  )
      }
}
