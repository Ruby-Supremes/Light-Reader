import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomeCard from '../home/ HomeCard'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import Home from '../Home'
import Navbar from "../Navbar";
import Login from '../Login'
import SignUp from '../SignUp'
import Auth from "../Auth";

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

  if (!user) return <Auth onLogin={setUser} />;
  
  else{
  return (

    <>
      <Navbar user={user} setUser={setUser} />



    <Router>
     
        
      <div className="App">
        
     
        
        <div className = "container">
             
          </div>
          
       
            <Routes>
              <Route exact path="/home" element={<Home />} />
              
            </Routes>
          </div>
        
    
    </Router>
    </>
  )
      }
}
